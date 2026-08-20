import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import katex from 'katex';

// Constants
const VAULT_ROOT = path.resolve(process.cwd(), '..');
const COURSES_DIR = path.join(VAULT_ROOT, 'Courses');
const GARDEN_DIR = path.join(VAULT_ROOT, 'Garden');

// Sync media assets from the vault root to the web-portal public/ directory
function syncMediaAssets() {
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const mediaExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.pdf', '.mp4', '.webm'];

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const list = fs.readdirSync(dir);
    for (const file of list) {
      // Skip hidden files/directories and web-portal source code
      if (file.startsWith('.') || file === 'node_modules' || file === 'web-portal') continue;
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (mediaExtensions.includes(ext)) {
          const destPath = path.join(publicDir, file);
          let shouldCopy = false;
          if (!fs.existsSync(destPath)) {
            shouldCopy = true;
          } else {
            const destStat = fs.statSync(destPath);
            if (stat.mtimeMs > destStat.mtimeMs) {
              shouldCopy = true;
            }
          }
          if (shouldCopy) {
            fs.copyFileSync(filePath, destPath);
            console.log(`[Media Sync] Copied ${file} to public/`);
          }
        }
      }
    }
  }

  walk(VAULT_ROOT);
}

// Call sync immediately on module load
try {
  syncMediaAssets();
} catch (err) {
  console.error('[Media Sync Error]', err);
}

/**
 * Recursively search the Obsidian vault for a file matching targetName.md
 */
function findVaultFileByName(baseDir, name) {
  const targetName = name.toLowerCase().replace(/\s+/g, ' ').trim();
  
  try {
    const list = fs.readdirSync(baseDir);
    for (const file of list) {
      if (file.startsWith('.') || file === 'node_modules' || file === 'web-portal') continue;
      const filePath = path.join(baseDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        const found = findVaultFileByName(filePath, name);
        if (found) return found;
      } else if (file.endsWith('.md')) {
        const cleanFile = file.replace('.md', '').toLowerCase().replace(/\s+/g, ' ').trim();
        if (cleanFile === targetName) {
          return filePath;
        }
      }
    }
  } catch (e) {
    // Ignore read errors
  }
  return null;
}

/**
 * Preprocesses markdown file content to quote unquoted YAML frontmatter values
 * containing brackets like [[MATH-181]], which causes js-yaml to crash.
 */
function preprocessFrontmatter(fileContent) {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return fileContent;

  const frontmatter = match[1];
  const lines = frontmatter.split('\n');
  const updatedLines = lines.map(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return line;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (value.includes('[[') && value.includes(']]') && !value.startsWith('"') && !value.startsWith("'")) {
      value = `"${value.replace(/"/g, '\\"')}"`;
      return `${key}: ${value}`;
    }
    return line;
  });

  const updatedFrontmatter = updatedLines.join('\n');
  return fileContent.replace(frontmatter, updatedFrontmatter);
}

/**
 * Strips the top-level duplicated heading (# Title) from the content.
 */
function stripTitleHeading(markdown) {
  if (!markdown) return '';
  return markdown.replace(/^#\s+.*$/m, '').trim();
}

/**
 * Robust line-by-line callout block parser that compiles callout contents
 * recursively and discards workspace wrappers.
 */
function compileCallouts(markdown, mathBlocks, mathInlines) {
  const lines = markdown.split('\n');
  const result = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(/^>\s*\[!([a-zA-Z0-9_-]+)\]([-+])?\s*(.*)$/i);
    
    if (match) {
      const type = match[1].toLowerCase();
      const collapsible = match[2];
      const title = match[3].trim();
      const isCollapsible = collapsible === '-' || collapsible === '+';
      const isClosed = collapsible === '-';

      // Collect all subsequent lines starting with >
      const calloutLines = [];
      i++; // skip callout tag line
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        calloutLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }

      if (type === 'workspace') {
        // Discard workspace blocks completely (web portal renders them programmatically)
        continue;
      }

      // Compile callout body recursively, passing down shared registries
      const bodyHtml = renderMathAndMarkdown(calloutLines.join('\n'), mathBlocks, mathInlines);

      let calloutHtml = '';
      if (isCollapsible) {
        calloutHtml = `
<details class="callout callout-${type} my-4 p-4 border-l-4 rounded-r-md bg-mathBgSecondary border-mathBorder" ${isClosed ? '' : 'open'}>
  <summary class="cursor-pointer select-none font-bold text-lg text-mathTextNormal">${title || type.toUpperCase()}</summary>
  <div class="callout-content mt-2 text-mathTextNormal">${bodyHtml}</div>
</details>`;
      } else {
        const titleHtml = title ? `<div class="callout-title font-bold text-mathTextNormal text-lg mb-1">${title}</div>` : '';
        calloutHtml = `
<div class="callout callout-${type} my-4 p-4 border-l-4 rounded-r-md bg-mathBgSecondary border-mathBorder">
  ${titleHtml}
  <div class="callout-content text-mathTextNormal">${bodyHtml}</div>
</div>`;
      }
      
      result.push(calloutHtml);
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join('\n');
}

/**
 * Custom math renderer that protects $inline$ and $$block$$ LaTeX formulas,
 * compiles the surrounding Markdown via marked, and then restores and compiles 
 * the math formulas server-side using KaTeX.
 */
export function renderMathAndMarkdown(markdownText, mathBlocks = [], mathInlines = []) {
  if (!markdownText) return '';

  // 1. Temporarily extract Block Math: $$ math $$
  let processed = markdownText.replace(/\$\$([\s\S]+?)\$\$/g, (match, tex) => {
    const placeholder = `%%MATH_BLOCK_${mathBlocks.length}%%`;
    mathBlocks.push(tex.trim());
    return placeholder;
  });

  // 2. Temporarily extract Inline Math: $ math $
  processed = processed.replace(/\$([^\$\n]+?)\$/g, (match, tex) => {
    const placeholder = `%%MATH_INLINE_${mathInlines.length}%%`;
    mathInlines.push(tex.trim());
    return placeholder;
  });

  // 3. Preprocess callouts recursively, passing down shared registries
  processed = compileCallouts(processed, mathBlocks, mathInlines);

  // 3.5 Convert Obsidian media embeds ![[Attachment.jpg]] or ![[Document.pdf]] or ![[YouTube/Desmos Link]]
  processed = processed.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, options) => {
    const cleanTarget = target.trim();
    
    // YouTube Embed parser
    if (cleanTarget.includes('youtube.com') || cleanTarget.includes('youtu.be')) {
      let videoId = '';
      if (cleanTarget.includes('v=')) {
        videoId = cleanTarget.split('v=')[1]?.split('&')[0];
      } else if (cleanTarget.includes('youtu.be/')) {
        videoId = cleanTarget.split('youtu.be/')[1]?.split('?')[0];
      }
      if (videoId) {
        return `<iframe src="https://www.youtube.com/embed/${videoId}" class="w-full aspect-video rounded my-4 border border-mathBorder" allowfullscreen></iframe>`;
      }
    }

    // Desmos Embed parser
    if (cleanTarget.includes('desmos.com/calculator/')) {
      const graphId = cleanTarget.split('calculator/')[1]?.split('?')[0];
      if (graphId) {
        return `<iframe src="https://www.desmos.com/calculator/${graphId}?embed" class="w-full h-[500px] rounded my-4 border border-mathBorder"></iframe>`;
      }
    }

    const ext = path.extname(cleanTarget).toLowerCase();
    
    // URL-encode spaces in filename
    const encodedTarget = encodeURIComponent(cleanTarget);
    const srcPath = `/the-interwingled-memex/${encodedTarget}`;
    
    let width = '';
    let alt = cleanTarget;
    if (options) {
      const opt = options.trim();
      if (/^\d+$/.test(opt)) {
        width = `width="${opt}"`;
      } else {
        alt = opt;
      }
    }
    
    if (ext === '.pdf') {
      return `<iframe src="${srcPath}" class="w-full h-[600px] border border-mathBorder rounded my-4"></iframe>`;
    } else if (['.mp4', '.webm', '.ogg'].includes(ext)) {
      return `<video src="${srcPath}" controls class="max-w-full h-auto rounded my-4"></video>`;
    } else if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].includes(ext)) {
      return `<img src="${srcPath}" alt="${alt}" ${width} class="max-w-full h-auto rounded my-4" />`;
    } else {
      return `<a class="text-accent underline font-semibold" href="${srcPath}" target="_blank">Download ${cleanTarget}</a>`;
    }
  });

  // 4. Convert Obsidian links [[Limits]] or [[Limits|Limits Card]] into standard HTML links
  processed = processed.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, alias) => {
    const displayText = alias || target;
    if (target.startsWith('Courses/')) {
      const parts = target.split('/');
      const course = parts[1].toLowerCase();
      if (parts[2] && parts[2].toLowerCase().startsWith('index')) {
        return `<a class="text-accent underline font-semibold" href="/the-interwingled-memex/courses/${course}">${displayText}</a>`;
      }
      const session = parts[2] ? parts[2].replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-') : '';
      return `<a class="text-accent underline font-semibold" href="/the-interwingled-memex/courses/${course}/${session}">${displayText}</a>`;
    } else {
      const conceptSlug = target.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-');
      return `<a class="text-accent underline font-semibold" href="/the-interwingled-memex/garden/${conceptSlug}">${displayText}</a>`;
    }
  });

  // 5. Parse Markdown safely now that LaTeX subscripts and backslashes are protected
  let html = marked.parse(processed);

  // 6. Restore and Compile Block Math via KaTeX (clean centered containers)
  html = html.replace(/%%MATH_BLOCK_(\d+)%%/g, (match, index) => {
    const idx = parseInt(index, 10);
    const tex = mathBlocks[idx];
    if (tex === undefined) return match;
    try {
      const rendered = katex.renderToString(tex, {
        displayMode: true,
        throwOnError: false
      });
      return `<div class="math-block-container my-4 overflow-x-auto">${rendered}</div>`;
    } catch (err) {
      console.error('KaTeX block restore error:', err);
      return `$$${tex}$$`;
    }
  });

  // 7. Restore and Compile Inline Math via KaTeX
  html = html.replace(/%%MATH_INLINE_(\d+)%%/g, (match, index) => {
    const idx = parseInt(index, 10);
    const tex = mathInlines[idx];
    if (tex === undefined) return match;
    try {
      const rendered = katex.renderToString(tex, {
        displayMode: false,
        throwOnError: false
      });
      return `<span class="math-inline">${rendered}</span>`;
    } catch (err) {
      console.error('KaTeX inline restore error:', err);
      return `$${tex}$`;
    }
  });

  return html;
}

/**
 * Case-insensitive course directory resolver to prevent case mismatches on Linux/CI environments.
 */
function resolveCoursePath(courseName) {
  if (!fs.existsSync(COURSES_DIR)) return null;
  const dirs = fs.readdirSync(COURSES_DIR);
  const matched = dirs.find(d => d.toLowerCase() === courseName.toLowerCase());
  return matched ? path.join(COURSES_DIR, matched) : null;
}

/**
 * Build-time note validator to verify note structure, frontmatter, timeline items, and transclusions.
 */
function validateSessionNote(filePath, fileContent) {
  const fileName = path.basename(filePath);
  
  // 1. Check Frontmatter Metadata
  let frontmatterData = {};
  try {
    const { data } = matter(preprocessFrontmatter(fileContent));
    frontmatterData = data;
  } catch (err) {
    console.warn(`\x1b[33m⚠️  [Note Warning] ${fileName} has invalid YAML frontmatter\x1b[0m`);
    return;
  }
  
  if (frontmatterData.publish === false) return; // Skip warnings for draft files

  if (!frontmatterData.type || frontmatterData.type !== 'course-session') {
    // Skip timeline validations for non-session notes (e.g. concept notes)
    return;
  }

  if (!frontmatterData.course) {
    console.warn(`\x1b[33m⚠️  [Note Warning] ${fileName} is missing 'course' frontmatter field (e.g. course: MATH-182)\x1b[0m`);
  }

  // 2. Check structural headings
  const hasObjectives = fileContent.includes('## Session Objectives');
  const hasTimeline = fileContent.includes('## Session Timeline');
  const hasContent = fileContent.includes('## Session Content');

  if (!hasObjectives) {
    console.warn(`\x1b[33m⚠️  [Note Warning] ${fileName} is missing required '## Session Objectives' header.\x1b[0m`);
  }
  if (!hasTimeline) {
    console.warn(`\x1b[33m⚠️  [Note Warning] ${fileName} is missing required '## Session Timeline' header.\x1b[0m`);
    return; // Cannot validate timeline elements if header is missing
  }
  if (!hasContent) {
    console.warn(`\x1b[33m⚠️  [Note Warning] ${fileName} is missing required '## Session Content' header.\x1b[0m`);
    return;
  }

  // 3. Check for Timeline name mismatches (fuzzy matching)
  const timelineItems = [];
  const timelineBlockMatch = fileContent.match(/## Session Timeline([\s\S]*?)## Session Content/i);
  if (timelineBlockMatch) {
    const rawTimeline = timelineBlockMatch[1];
    const lineRegex = /-\s*\*\*(.*?)\s*\((.*?)\)\*\*\s*:\s*(.*)/g;
    let tmatch;
    while ((tmatch = lineRegex.exec(rawTimeline)) !== null) {
      timelineItems.push(tmatch[3].trim());
    }
  }

  // Parse ### headers under ## Session Content
  const contentMatch = fileContent.match(/## Session Content([\s\S]*)$/i);
  const contentText = contentMatch ? contentMatch[1] : '';
  const rawSections = contentText.split(/^### /gm).slice(1);
  const headerNames = rawSections.map(sec => sec.split('\n')[0].trim());

  timelineItems.forEach(item => {
    const itemNorm = item.toLowerCase().replace(/[^a-z0-9]/g, '');
    const matched = headerNames.find(h => h.toLowerCase().replace(/[^a-z0-9]/g, '') === itemNorm);
    if (!matched) {
      console.warn(`\x1b[33m⚠️  [Note Warning] ${fileName}: Timeline item "${item}" has no matching content header "### ${item}" under ## Session Content.\x1b[0m`);
    }
  });

  // 4. Check for broken transclusions
  const transRegex = /!\[\[([^\]|#]+)(?:#[^\]]*)?\]\]/g;
  let transMatch;
  while ((transMatch = transRegex.exec(fileContent)) !== null) {
    const targetName = transMatch[1].trim();
    const isAttachment = /\.(png|jpg|jpeg|gif|svg|pdf|webp|mp4)$/i.test(targetName);
    if (!isAttachment) {
      const resolvedPath = findVaultFileByName(VAULT_ROOT, targetName);
      if (!resolvedPath) {
        console.warn(`\x1b[33m⚠️  [Note Warning] ${fileName}: Broken transclusion embed ![[${targetName}]] could not be resolved in the vault.\x1b[0m`);
      }
    }
  }
}

/**
 * Scans a course folder and returns a list of sessions.
 */
export function getCourseSessions(courseName) {
  const coursePath = resolveCoursePath(courseName);
  if (!coursePath) return [];

  const files = fs.readdirSync(coursePath);
  
  return files
    .filter(file => file.endsWith('.md') && !file.toLowerCase().includes('index'))
    .map(file => {
      const filePath = path.join(coursePath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      // Run build-time validations
      validateSessionNote(filePath, fileContent);
      
      const { data } = matter(preprocessFrontmatter(fileContent));
      
      const slug = file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-');

      // Formulate a clean YYYY-MM-DD Date
      let updatedStr = '';
      if (data.updated) {
        if (data.updated instanceof Date) {
          updatedStr = data.updated.toISOString().split('T')[0];
        } else {
          updatedStr = String(data.updated);
        }
      }

      // Extract a clean session code
      let code = '';
      const numMatch = file.match(/(?:Session|Discussion)\s*(\d+)/i);
      const isReview = file.toLowerCase().includes('review');
      
      if (isReview) {
        code = 'Review';
      } else if (numMatch) {
        const num = numMatch[1];
        const prefix = file.toLowerCase().includes('discussion') ? 'D' : 'S';
        code = `${prefix}${num}`;
      } else {
        code = slug.substring(0, 10).toUpperCase();
      }

      // Calculate a chronological sort key to interleave sessions and discussions correctly
      let week = 99;
      let seq = 9;
      const isDiscussion = file.toLowerCase().includes('discussion');
      
      if (numMatch) {
        const num = parseInt(numMatch[1], 10);
        if (isDiscussion) {
          week = num;
          seq = 3; // Discussion falls at the end of the week
        } else {
          week = Math.ceil(num / 2);
          seq = (num % 2 === 1) ? 1 : 2; // Session 1 = 1, Session 2 = 2
        }
      }
      
      const sortKey = week * 10 + seq;
      
      return {
        title: data.title || file.replace('.md', ''),
        slug,
        code,
        fileName: file,
        course: courseName,
        updated: updatedStr,
        sortKey,
      };
    })
    .sort((a, b) => a.sortKey - b.sortKey || a.fileName.localeCompare(b.fileName, undefined, { numeric: true }));
}

/**
 * Resolves a session from a link target name by finding a filename or slug match in the course sessions database.
 */
function resolveSessionFromLink(linkTarget, sessions) {
  const targetClean = linkTarget.split('/').pop().replace(/\.md$/, '').trim().toLowerCase();
  return sessions.find(s => {
    const fileClean = s.fileName.replace(/\.md$/, '').trim().toLowerCase();
    return fileClean === targetClean || s.slug === targetClean;
  });
}

/**
 * Parsers a course index landing page to dynamically extract title, description, and weekly timelines.
 */
export function getCourseIndex(courseName) {
  const coursePath = resolveCoursePath(courseName);
  if (!coursePath) return null;

  const indexPath = path.join(coursePath, 'index.md');
  if (!fs.existsSync(indexPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(indexPath, 'utf-8');
  
  // Extract frontmatter and body
  const { data, content: body } = matter(preprocessFrontmatter(fileContent));

  // Resolve all sessions for this course
  const sessions = getCourseSessions(courseName);

  // Extract Title Heading
  const titleMatch = body.match(/^#\s+([^\n]+)/m);
  const title = titleMatch ? titleMatch[1].trim() : (data.title || courseName);

  // Extract overview text between H1 and the first H2 heading
  let bodyWithoutTitle = body;
  if (titleMatch) {
    bodyWithoutTitle = body.substring(titleMatch.index + titleMatch[0].length).trim();
  }
  
  const firstH2Match = bodyWithoutTitle.match(/^##\s+/m);
  let overviewMarkdown = '';
  let scheduleMarkdown = '';

  if (firstH2Match) {
    overviewMarkdown = bodyWithoutTitle.substring(0, firstH2Match.index).trim();
    scheduleMarkdown = bodyWithoutTitle.substring(firstH2Match.index).trim();
  } else {
    overviewMarkdown = bodyWithoutTitle;
  }

  const overviewHtml = renderMathAndMarkdown(overviewMarkdown);

  // Get description from frontmatter, or fallback to overview snippet
  const description = data.description || (overviewMarkdown.replace(/[#*`_\[\]]/g, '').substring(0, 160).trim() + '...');

  // Parse H2 sections for Weeks / Schedule
  const h2Parts = scheduleMarkdown.split(/^##\s+/gm);
  const weeks = [];

  for (const part of h2Parts) {
    if (!part.trim()) continue;
    const plines = part.split('\n');
    const h2Title = plines[0].trim();
    const h2Content = plines.slice(1).join('\n').trim();

    // Skip Course Objectives or non-timeline headings
    const h2TitleLower = h2Title.toLowerCase();
    if (h2TitleLower.includes('objective') || h2TitleLower.includes('matrix') || h2TitleLower.includes('resource')) {
      continue;
    }

    // Extract links: [[linkTarget]]
    const linkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    const lmatches = [];
    let lmatch;
    while ((lmatch = linkRegex.exec(h2Content)) !== null) {
      lmatches.push(lmatch[1].trim());
    }

    const resolvedSessions = [];
    for (const linkTarget of lmatches) {
      const resolved = resolveSessionFromLink(linkTarget, sessions);
      if (resolved) {
        resolvedSessions.push(resolved);
      }
    }

    weeks.push({
      title: h2Title,
      sessions: resolvedSessions
    });
  }

  return {
    title,
    description,
    overviewHtml,
    weeks: weeks.filter(w => w.sessions.length > 0)
  };
}

/**
 * Loads the root index.md note to dynamically populate the Tony's Interwingled Memex homepage.
 */
export function getVaultHome() {
  const indexPath = path.join(VAULT_ROOT, 'index.md');
  if (!fs.existsSync(indexPath)) {
    return { title: "Tony's Interwingled Memex", introHtml: '', sections: [] };
  }

  const fileContent = fs.readFileSync(indexPath, 'utf-8');
  const { data, content: body } = matter(preprocessFrontmatter(fileContent));

  // Extract Title Heading
  const titleMatch = body.match(/^#\s+([^\n]+)/m);
  const title = titleMatch ? titleMatch[1].trim() : (data.title || "Tony's Interwingled Memex");

  // Remove Title and dataview codeblocks
  let cleanBody = body;
  if (titleMatch) {
    cleanBody = body.substring(titleMatch.index + titleMatch[0].length).trim();
  }
  cleanBody = cleanBody.replace(/```dataview[\s\S]*?```/g, '').trim();
  cleanBody = cleanBody.replace(/\s*---\s*$/, '').trim(); // Remove trailing hr if present

  // Extract intro text (everything before the first H2/H3 header)
  const firstHeaderMatch = cleanBody.match(/^(##|###)\s+/m);
  let introMarkdown = '';
  let restMarkdown = '';

  if (firstHeaderMatch) {
    introMarkdown = cleanBody.substring(0, firstHeaderMatch.index).trim();
    restMarkdown = cleanBody.substring(firstHeaderMatch.index).trim();
  } else {
    introMarkdown = cleanBody;
  }

  const introHtml = renderMathAndMarkdown(introMarkdown);

  // Now parse H2/H3 sections
  const sections = [];
  const parts = restMarkdown.split(/^(##|###)\s+/gm);
  
  for (let i = 1; i < parts.length; i += 2) {
    const level = parts[i]; // "##" or "###"
    const content = parts[i+1] || '';
    const plines = content.split('\n');
    const headerTitle = plines[0].trim();
    const bodyContent = plines.slice(1).join('\n').trim();

    // Skip Recently Updated heading since it's rendered by the template manually
    if (headerTitle.toLowerCase().includes('recently updated')) continue;

    // Parse bullet points: - [[TargetName|Alias]] - Description
    const cards = [];
    const bulletRegex = /^\s*-\s+(?:[*\s]*)\[\[([^\]|]+)(?:\|([^\]]+))?\]\](?:[*\s]*)(?:—|-)\s*(.*?)$/gm;
    let bmatch;
    while ((bmatch = bulletRegex.exec(bodyContent)) !== null) {
      const target = bmatch[1].trim();
      const alias = bmatch[2]?.trim();
      const desc = bmatch[3]?.trim() || '';

      // Skip manually placed dashboard targets (Calculus OER notes, Garden, and Blog)
      const targetLower = target.toLowerCase();
      if (targetLower.startsWith('courses/calc-') || targetLower.startsWith('garden') || targetLower.startsWith('blog')) {
        continue;
      }

      const displayText = alias || target;
      
      // Resolve links
      let url = '';
      if (target.startsWith('Courses/')) {
        const p = target.split('/');
        const course = p[1].toLowerCase();
        if (p[2] && p[2].toLowerCase().startsWith('index')) {
          url = `/courses/${course}`;
        } else {
          const session = p[2] ? p[2].replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-') : '';
          url = `/courses/${course}/${session}`;
        }
      } else if (target.startsWith('Garden/') || target === 'Garden') {
        url = '/garden/limits';
      } else {
        url = `/garden/${target.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
      }

      cards.push({
        title: displayText,
        url,
        description: desc
      });
    }

    if (cards.length > 0) {
      sections.push({
        title: headerTitle,
        level,
        cards
      });
    }
  }

  return {
    title,
    introHtml,
    sections
  };
}

/**
 * Loads the Courses/index.md note to dynamically populate the OER Portal landing page.
 */
export function getOERPortalHome() {
  const indexPath = path.join(VAULT_ROOT, 'Courses', 'index.md');
  if (!fs.existsSync(indexPath)) {
    return {
      title: 'Active Calculus OER Portal',
      overviewHtml: '<p>A custom digital learning reference and interactive Digital Garden for UNLV Calculus courses.</p>',
      aboutHtml: ''
    };
  }

  const fileContent = fs.readFileSync(indexPath, 'utf-8');
  const { data, content: body } = matter(preprocessFrontmatter(fileContent));

  const titleMatch = body.match(/^#\s+([^\n]+)/m);
  const title = titleMatch ? titleMatch[1].trim() : (data.title || 'Active Calculus OER Portal');

  let bodyWithoutTitle = body;
  if (titleMatch) {
    bodyWithoutTitle = body.substring(titleMatch.index + titleMatch[0].length).trim();
  }

  // Parse about section: ## About this Curriculum
  const aboutMatch = bodyWithoutTitle.match(/^##\s+About\s+this\s+Curriculum/im);
  let overviewMarkdown = '';
  let aboutMarkdown = '';

  if (aboutMatch) {
    overviewMarkdown = bodyWithoutTitle.substring(0, aboutMatch.index).trim();
    aboutMarkdown = bodyWithoutTitle.substring(aboutMatch.index).trim();
    // Remove the ## header from aboutMarkdown
    const aboutH2Match = aboutMarkdown.match(/^##\s+.*?\n/);
    if (aboutH2Match) {
      aboutMarkdown = aboutMarkdown.substring(aboutH2Match[0].length).trim();
    }
  } else {
    overviewMarkdown = bodyWithoutTitle;
  }

  return {
    title,
    overviewHtml: renderMathAndMarkdown(overviewMarkdown),
    aboutHtml: renderMathAndMarkdown(aboutMarkdown)
  };
}

export function getRecentlyUpdatedNotes() {
  const posts = getBlogPosts();
  return posts.slice(0, 10).map(post => ({
    title: post.title,
    type: 'blog',
    course: '',
    updated: post.updated,
    url: `/blog/${post.slug}`
  }));
}

/**
 * Returns all published blog posts sorted by last updated date descending.
 * Each post includes its title, slug, formatted date, description, and fully rendered HTML body.
 */
export function getBlogPosts() {
  const blogDir = path.join(VAULT_ROOT, 'Blog');
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir);
  
  const posts = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    let parsed;
    try {
      parsed = matter(preprocessFrontmatter(fileContent));
    } catch (e) {
      continue;
    }
    
    const data = parsed.data;
    if (data.publish !== true) continue;
    
    let updatedStr = '';
    if (data.updated) {
      if (data.updated instanceof Date) {
        updatedStr = data.updated.toISOString().split('T')[0];
      } else {
        updatedStr = String(data.updated);
      }
    }
    
    const slug = file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    // Split content to remove H1 heading if present and get description snippet
    let body = parsed.content.trim();
    const titleMatch = body.match(/^#\s+([^\n]+)/m);
    const postTitle = titleMatch ? titleMatch[1].trim() : (data.title || file.replace('.md', ''));
    
    if (titleMatch) {
      body = body.substring(titleMatch.index + titleMatch[0].length).trim();
    }
    
    const bodyHtml = renderMathAndMarkdown(body);
    const description = data.description || (body.replace(/[#*`_\[\]]/g, '').substring(0, 160).trim() + '...');
    
    posts.push({
      title: postTitle,
      slug,
      updated: updatedStr,
      description,
      bodyHtml
    });
  }
  
  return posts.sort((a, b) => b.updated.localeCompare(a.updated));
}

/**
 * Recursively search and expand Obsidian transclusions ![[Filename]] or ![[Filename#Header]]
 */
function expandTransclusions(text, visited = new Set()) {
  if (!text) return '';
  const transclusionRegex = /!\[\[([^\]|#]+)(?:#[^\]]*)?\]\]/g;
  
  return text.replace(transclusionRegex, (match, targetName) => {
    const isAttachment = /\.(png|jpg|jpeg|gif|svg|pdf|webp|mp4)$/i.test(targetName);
    if (isAttachment) {
      return match;
    }
    const resolvedPath = findVaultFileByName(VAULT_ROOT, targetName);
    if (!resolvedPath) {
      console.warn(`[Transclusion Warning] Could not find transcluded file: "${targetName}"`);
      return `*Warning: Transclusion not found: [[${targetName}]]*`;
    }

    const canonName = targetName.trim().toLowerCase();
    if (visited.has(canonName)) {
      console.warn(`[Transclusion Warning] Loop detected! Note "${targetName}" is recursively transcluded.`);
      return `*Warning: Infinite Transclusion Loop on [[${targetName}]]*`;
    }

    try {
      const content = fs.readFileSync(resolvedPath, 'utf-8');
      const { content: rawBody } = matter(preprocessFrontmatter(content));
      
      const nextVisited = new Set(visited);
      nextVisited.add(canonName);
      
      const expandedInner = expandTransclusions(rawBody, nextVisited);
      return `\n\n<div class="transcluded-note" data-note="${targetName.trim()}">\n\n${expandedInner}\n\n</div>\n\n`;
    } catch (err) {
      console.error(`Error expanding transclusion ${targetName}:`, err);
      return match;
    }
  });
}


/**
 * Parses a single session markdown file into structured segments.
 */
export function getSessionDetails(courseName, sessionSlug) {
  const coursePath = resolveCoursePath(courseName);
  if (!coursePath) return null;

  const files = fs.readdirSync(coursePath);
  const matchedFile = files.find(file => {
    return file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-') === sessionSlug;
  });

  if (!matchedFile) return null;

  const filePath = path.join(coursePath, matchedFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Run build-time validations
  validateSessionNote(filePath, fileContent);
  
  // Expand transclusions at compile-time
  const expandedContent = expandTransclusions(fileContent);
  const { data, content } = matter(preprocessFrontmatter(expandedContent));

  const cleanedContent = stripTitleHeading(content);

  const hasTimeline = cleanedContent.includes('## Session Timeline');

  if (hasTimeline) {
    // ----------------------------------------------------
    // NEW TEMPLATE OUTLINE PARSER
    // ----------------------------------------------------
    
    // 1. Parse objectives (everything between ## Session Objectives and ## Session Timeline)
    let objectivesHtml = '';
    const objMatch = cleanedContent.match(/## Session Objectives([\s\S]*?)## Session Timeline/i);
    if (objMatch) {
      const rawObj = objMatch[1].trim();
      const objBodyHtml = renderMathAndMarkdown(rawObj);
      objectivesHtml = `
<div class="callout callout-abstract my-4 p-4 border-l-4 rounded-r-md bg-mathBgSecondary border-mathBorder">
  <div class="callout-title font-bold text-mathTextNormal text-lg mb-1">Session Objectives & Overview</div>
  <div class="callout-content text-mathTextNormal">
    ${objBodyHtml}
  </div>
</div>`;
    }

    // 2. Parse timeline list to construct segment config
    const timelineItems = [];
    const timelineBlockMatch = cleanedContent.match(/## Session Timeline([\s\S]*?)## Session Content/i);
    if (timelineBlockMatch) {
      const rawTimeline = timelineBlockMatch[1];
      const lineRegex = /-\s*\*\*(.*?)\s*\((.*?)\)\*\*\s*:\s*(.*)/g;
      let tmatch;
      while ((tmatch = lineRegex.exec(rawTimeline)) !== null) {
        timelineItems.push({
          time: tmatch[1].trim(),
          duration: tmatch[2].trim(),
          name: tmatch[3].trim()
        });
      }
    }

    // 3. Parse segments under ## Session Content
    const contentMatch = cleanedContent.match(/## Session Content([\s\S]*)$/i);
    const contentText = contentMatch ? contentMatch[1] : '';
    
    // Split content text by ### headers
    const rawSections = contentText.split(/^### /gm);
    const blocks = [];

    // For each timeline item, find the corresponding content section matching the name
    timelineItems.forEach((item, index) => {
      // Find the raw section that starts with the item name (fuzzy match)
      const matchedSection = rawSections.find(sec => {
        const lines = sec.split('\n');
        const header = lines[0].trim();
        return header.toLowerCase().replace(/[^a-z0-9]/g, '') === item.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      });

      const body = matchedSection ? matchedSection.split('\n').slice(1).join('\n') : '';
      const header = `${item.time} (${item.duration}) — ${item.name}`;
      const isSkillBlock = item.name.toLowerCase().includes('skill block');

      let parsedBlock = {
        header,
        isSkillBlock,
        bodyRaw: body,
        bodyHtml: '',
        problems: []
      };

      if (isSkillBlock) {
        // Parse skill block contents (theory, generic problems, engineering problems, etc.)
        const parts = body.split(/^####\s+/gm);
        let theoryText = parts[0];
        const problemsToProcess = [];

        // 1. Group parts into theory or active problems
        for (let j = 1; j < parts.length; j++) {
          const part = parts[j];
          const plines = part.split('\n');
          const ptitle = plines[0].trim();
          const ptitleLower = ptitle.toLowerCase();

          const isSectionHeader = ptitleLower.includes('standard sample problems') || 
                                  ptitleLower.includes('engineering application problems') || 
                                  ptitleLower.includes('engineering problems') ||
                                  ptitleLower.includes('real-life engineering');

          const isProblem = !isSectionHeader && (
            ptitleLower.includes('worked example') ||
            ptitleLower.includes('practice problem') ||
            ptitleLower.includes('active practice') ||
            (ptitleLower.includes('sample problem') && !ptitleLower.endsWith('problems'))
          );

          if (!isProblem) {
            // Reconstruct as part of theory text
            theoryText += `\n\n#### ${part}`;
          } else {
            problemsToProcess.push({ title: ptitle, content: part, index: j });
          }
        }

        // 2. Parse engineering applications from theory text if present
        const engineeringProblems = [];
        const engSplitRegex = /^(?:>\s*)?#{2,4}\s*(?:3\.\s*)?(?:Real-Life\s+)?Engineering\s+Applications?\s*(?:Problems?)?\s*$/im;
        const engMatch = theoryText.match(engSplitRegex);
        if (engMatch) {
          const engIndex = theoryText.indexOf(engMatch[0]);
          const engPart = theoryText.substring(engIndex);
          
          const links = [];
          const linkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
          let lmatch;
          while ((lmatch = linkRegex.exec(engPart)) !== null) {
            links.push(lmatch[1]);
          }
          
          // Find problem files in vault
          const problemLinks = links.filter(l => !l.toLowerCase().includes('solution'));
          for (const probLink of problemLinks) {
            const probPath = findVaultFileByName(VAULT_ROOT, probLink);
            if (!probPath) continue;
            
            const probContent = fs.readFileSync(probPath, 'utf-8');
            const cleanProbContent = stripTitleHeading(probContent);
            
            const solLink = probLink + ' Solution';
            const solPath = findVaultFileByName(VAULT_ROOT, solLink);
            let solutionHtml = '';
            let applicationHtml = '';
            
            if (solPath) {
              const solContent = fs.readFileSync(solPath, 'utf-8');
              const cleanSolContent = stripTitleHeading(solContent);
              const solParts = cleanSolContent.split(/####\s*(?:Meaning\s+of\s+the\s+Answer|Engineering\s+Real-Life|Real-life\s+Engineering)/i);
              const stepByStep = solParts[0].replace(/####\s*Step-by-Step\s+Solution:?/i, '').trim();
              solutionHtml = renderMathAndMarkdown(stepByStep);
              
              if (solParts[1]) {
                applicationHtml = renderMathAndMarkdown(solParts[1].trim());
              }
            }
            
            let emoji = '⚙️';
            let discipline = 'General Engineering';
            const disciplines = [
              { name: 'Electrical', emoji: '⚡' },
              { name: 'Aerospace', emoji: '🚀' },
              { name: 'Civil', emoji: '🏗️' },
              { name: 'Mechanical', emoji: '⚙️' },
              { name: 'Nuclear', emoji: '⚛️' },
              { name: 'Chemical', emoji: '🧪' },
              { name: 'Robotics', emoji: '🤖' },
            ];
            for (const disc of disciplines) {
              if (probLink.toLowerCase().includes(disc.name.toLowerCase())) {
                discipline = `${disc.name} Engineering`;
                emoji = disc.emoji;
                break;
              }
            }
            
            const cleanTitle = probLink.replace(/^[^-—:]+[-—:]\s*/, '').trim();
            engineeringProblems.push({
              title: cleanTitle,
              discipline,
              emoji,
              statementHtml: renderMathAndMarkdown(cleanProbContent),
              solutionHtml,
              applicationHtml,
            });
          }
          
          theoryText = theoryText.substring(0, engIndex).trim();
        }

        // Clean any leftover blockquote note syntax from old notes in theoryText if legacy file
        const cleanTheoryText = theoryText.replace(/^>\s?\[!note\]-?\s*Theory\s*&\s*Derivations\s*$/im, '')
                                          .replace(/^>\s?/gm, '')
                                          .trim();

        parsedBlock.theoryHtml = renderMathAndMarkdown(cleanTheoryText);
        parsedBlock.engineeringProblems = engineeringProblems;

        // 3. Process problems (Worked Examples & Active Practice)
        problemsToProcess.forEach((probObj) => {
          const { title, content, index } = probObj;
          const plines = content.split('\n');
          const pbody = plines.slice(1).join('\n');

          // Split body by level 5 headings: #####
          const subParts = pbody.split(/^#####\s+/gm);
          
          let statementText = '';
          let hintText = '';
          let quickAnswerText = '';
          let solutionText = '';
          let hasWorkspace = false;

          // Check if it's legacy callout format (if it contains blockquote check brackets)
          const isLegacyCallout = pbody.includes('> [!check') || pbody.includes('> [!workspace');

          if (isLegacyCallout) {
            // Legacy Callout Parser (backward compatibility)
            const solutionLines = [];
            const statementLines = [];
            let insideSolution = false;
            
            const pbodyLines = pbody.split('\n');
            for (let line of pbodyLines) {
              if (line.trim().startsWith('> [!check]-') || line.trim().startsWith('> [!check]')) {
                insideSolution = true;
                continue;
              }
              if (line.trim().startsWith('> [!workspace]')) {
                hasWorkspace = true;
                continue;
              }
              
              if (insideSolution) {
                if (line.trim().startsWith('>')) {
                  solutionLines.push(line.replace(/^>\s?/, ''));
                } else {
                  insideSolution = false;
                }
              } else {
                if (!line.trim().startsWith('>')) {
                  statementLines.push(line);
                }
              }
            }
            statementText = statementLines.join('\n');
            solutionText = solutionLines.join('\n');
          } else {
            // New Flat Heading Parser
            statementText = subParts[0].trim();
            for (let k = 1; k < subParts.length; k++) {
              const subPart = subParts[k];
              const splines = subPart.split('\n');
              const subtitle = splines[0].trim().toLowerCase();
              const subcontent = splines.slice(1).join('\n').trim();

              if (subtitle.startsWith('hint')) {
                hintText = subcontent;
              } else if (subtitle.startsWith('quick answer') || subtitle.startsWith('answer')) {
                quickAnswerText = subcontent;
              } else if (subtitle.startsWith('solution') || subtitle.startsWith('worked solution')) {
                solutionText = subcontent;
              } else if (subtitle.startsWith('workspace')) {
                hasWorkspace = true;
              }
            }
          }

          // Extract hint from solution text if not separately defined
          if (!hintText) {
            const hintMatch = solutionText.match(/^(?:\*\*|\*|>\s*)Hint:\s*(.*?)$/im);
            if (hintMatch) {
              hintText = hintMatch[1].trim();
              solutionText = solutionText.replace(hintMatch[0], '').trim();
            } else {
              hintText = "Refer to the 'Core Theory' tab or review the Worked Example demonstration for this skill.";
            }
          }

          // Extract quick answer from solution text if not separately defined
          if (!quickAnswerText) {
            const answerMatch = solutionText.match(/^(?:\*\*|\*|>\s*)(?:Final\s+)?Answer:\s*(.*?)$/im);
            if (answerMatch) {
              quickAnswerText = answerMatch[1].trim();
              solutionText = solutionText.replace(answerMatch[0], '').trim();
            } else {
              const nonCmtLines = solutionText.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.includes('---'));
              if (nonCmtLines.length > 0) {
                const lastLine = nonCmtLines[nonCmtLines.length - 1];
                if (lastLine.length < 150) {
                  quickAnswerText = lastLine;
                }
              }
            }
          }

          let cleanedSolutionText = solutionText;
          // Clean legacy check solution headers if legacy format
          if (isLegacyCallout) {
            cleanedSolutionText = cleanedSolutionText.replace(/^##\s*Step-by-Step\s+Solution:?/im, '').trim();
          }

          // Format answer block cleanly
          let formattedAnswer = quickAnswerText;
          if (quickAnswerText && !quickAnswerText.toLowerCase().startsWith('answer') && !quickAnswerText.toLowerCase().startsWith('final answer')) {
            formattedAnswer = `**Answer:** ${quickAnswerText}`;
          }

          const isWorked = title.toLowerCase().includes('worked') || title.toLowerCase().includes('example') || index === 1;
          const finalHasWorkspace = isWorked ? false : hasWorkspace;

          // Strip top level step-by-step headers inside solution to prevent double headers
          cleanedSolutionText = cleanedSolutionText.replace(/^######\s*Step-by-Step\s+Solution:?/im, '').trim();

          // Compile Markdown fields
          parsedBlock.problems.push({
            title,
            isWorked,
            statementHtml: renderMathAndMarkdown(statementText),
            hintHtml: renderMathAndMarkdown(hintText),
            quickAnswerHtml: formattedAnswer ? renderMathAndMarkdown(formattedAnswer) : '',
            solutionHtml: renderMathAndMarkdown(cleanedSolutionText),
            hasWorkspace: finalHasWorkspace
          });
        });
      } else {
        parsedBlock.bodyHtml = renderMathAndMarkdown(body);
      }

      blocks.push(parsedBlock);
    });

    return {
      metadata: data,
      title: data.title || matchedFile.replace('.md', ''),
      code: data.code || '',
      introHtml: objectivesHtml,
      blocks
    };
  } else {
    // ----------------------------------------------------
    // FALLBACK TO OLD PARSER
    // ----------------------------------------------------
    // Divide the session content by major Schedule Blocks
    const rawSections = cleanedContent.split(/^### /gm);
    
    const intro = rawSections[0] || '';
    const blocks = [];

    for (let i = 1; i < rawSections.length; i++) {
      const rawSec = rawSections[i];
      const lines = rawSec.split('\n');
      const header = lines[0].trim();
      const body = lines.slice(1).join('\n');

      const isSkillBlock = header.toLowerCase().includes('skill block');
      
      let parsedBlock = {
        header,
        isSkillBlock,
        bodyRaw: body,
        bodyHtml: '',
        problems: []
      };

      if (isSkillBlock) {
        // Parse generic problems inside the block
        const parts = body.split(/^####\s+/gm);
        // parts[0] is the theory section (everything before the first problem)
        
        // Split theory and engineering applications
        let theoryText = parts[0];
        const engineeringProblems = [];
        
        const engSplitRegex = /^(?:>\s*)?##\s*(?:3\.\s*)?(?:Real-Life\s+)?Engineering\s+Applications?\s*(?:Problems?)?\s*$/im;
        const engMatch = theoryText.match(engSplitRegex);
        if (engMatch) {
          const engIndex = theoryText.indexOf(engMatch[0]);
          const engPart = parts[0].substring(engIndex);
          
          // Extract wiki links from the engineering section
          const links = [];
          const linkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
          let lmatch;
          while ((lmatch = linkRegex.exec(engPart)) !== null) {
            links.push(lmatch[1]);
          }
          
          // Find problem files in vault
          const problemLinks = links.filter(l => !l.toLowerCase().includes('solution'));
          for (const probLink of problemLinks) {
            const probPath = findVaultFileByName(VAULT_ROOT, probLink);
            if (!probPath) continue;
            
            const probContent = fs.readFileSync(probPath, 'utf-8');
            const cleanProbContent = stripTitleHeading(probContent);
            
            const solLink = probLink + ' Solution';
            const solPath = findVaultFileByName(VAULT_ROOT, solLink);
            let solutionHtml = '';
            let applicationHtml = '';
            
            if (solPath) {
              const solContent = fs.readFileSync(solPath, 'utf-8');
              const cleanSolContent = stripTitleHeading(solContent);
              const solParts = cleanSolContent.split(/####\s*(?:Meaning\s+of\s+the\s+Answer|Engineering\s+Real-Life|Real-life\s+Engineering)/i);
              const stepByStep = solParts[0].replace(/####\s*Step-by-Step\s+Solution:?/i, '').trim();
              solutionHtml = renderMathAndMarkdown(stepByStep);
              
              if (solParts[1]) {
                applicationHtml = renderMathAndMarkdown(solParts[1].trim());
              }
            }
            
            let emoji = '⚙️';
            let discipline = 'General Engineering';
            const disciplines = [
              { name: 'Electrical', emoji: '⚡' },
              { name: 'Aerospace', emoji: '🚀' },
              { name: 'Civil', emoji: '🏗️' },
              { name: 'Mechanical', emoji: '⚙️' },
              { name: 'Nuclear', emoji: '⚛️' },
              { name: 'Chemical', emoji: '🧪' },
              { name: 'Robotics', emoji: '🤖' },
            ];
            for (const disc of disciplines) {
              if (probLink.toLowerCase().includes(disc.name.toLowerCase())) {
                discipline = `${disc.name} Engineering`;
                emoji = disc.emoji;
                break;
              }
            }
            
            const cleanTitle = probLink.replace(/^[^-—:]+[-—:]\s*/, '').trim();
            engineeringProblems.push({
              title: cleanTitle,
              discipline,
              emoji,
              statementHtml: renderMathAndMarkdown(cleanProbContent),
              solutionHtml,
              applicationHtml,
            });
          }
          
          // Keep only the theory portion
          theoryText = parts[0].substring(0, engIndex).trim();
        }
        
        parsedBlock.theoryHtml = renderMathAndMarkdown(theoryText);
        parsedBlock.engineeringProblems = engineeringProblems;
        
        // Parse problems (parts[1...])
        for (let j = 1; j < parts.length; j++) {
          const part = parts[j];
          const plines = part.split('\n');
          const ptitle = plines[0].trim();
          const pbody = plines.slice(1).join('\n');

          const solutionLines = [];
          const statementLines = [];
          let insideSolution = false;
          let hasWorkspace = false;

          const pbodyLines = pbody.split('\n');
          for (let line of pbodyLines) {
            if (line.trim().startsWith('> [!check]-') || line.trim().startsWith('> [!check]')) {
              insideSolution = true;
              continue;
            }
            if (line.trim().startsWith('> [!workspace]')) {
              hasWorkspace = true;
              continue;
            }
            
            if (insideSolution) {
              if (line.trim().startsWith('>')) {
                solutionLines.push(line.replace(/^>\s?/, ''));
              } else {
                insideSolution = false;
              }
            } else {
              if (!line.trim().startsWith('>')) {
                statementLines.push(line);
              }
            }
          }

          const isWorked = ptitle.toLowerCase().includes('worked') || ptitle.toLowerCase().includes('example') || j === 1;

          // If it is the first problem and we force it to be worked, we strip the workspace checkbox
          const finalHasWorkspace = isWorked ? false : hasWorkspace;

          const solutionText = solutionLines.join('\n');
          
          // 1. Extract Hint
          let hint = '';
          const hintMatch = solutionText.match(/^(?:\*\*|\*|>\s*)Hint:\s*(.*?)$/im);
          if (hintMatch) {
            hint = hintMatch[1].trim();
          } else {
            hint = "Refer to the 'Core Theory' tab or review the Worked Example demonstration for this skill.";
          }

          // 2. Extract Quick Answer
          let quickAnswer = '';
          const answerMatch = solutionText.match(/^(?:\*\*|\*|>\s*)(?:Final\s+)?Answer:\s*(.*?)$/im);
          if (answerMatch) {
            quickAnswer = answerMatch[1].trim();
          } else {
            // Fallback: extract the last line if it is a short equation or bold answer
            const nonCmtLines = solutionLines.map(l => l.trim()).filter(l => l.length > 0 && !l.includes('---') && !l.startsWith('>'));
            if (nonCmtLines.length > 0) {
              const lastLine = nonCmtLines[nonCmtLines.length - 1];
              if (lastLine.length < 150) {
                quickAnswer = lastLine;
              }
            }
          }

          // Clean solution text of duplicated hint/answer labels in step-by-step
          let cleanedSolutionText = solutionText;
          if (answerMatch) {
            cleanedSolutionText = cleanedSolutionText.replace(answerMatch[0], '');
          }
          if (hintMatch) {
            cleanedSolutionText = cleanedSolutionText.replace(hintMatch[0], '');
          }
          cleanedSolutionText = cleanedSolutionText.trim();

          // Convert quickAnswer label prefix
          let formattedAnswer = quickAnswer;
          if (quickAnswer && !quickAnswer.toLowerCase().startsWith('answer') && !quickAnswer.toLowerCase().startsWith('final answer')) {
            formattedAnswer = `**Answer:** ${quickAnswer}`;
          }

          parsedBlock.problems.push({
            title: ptitle,
            isWorked,
            statementHtml: renderMathAndMarkdown(statementLines.join('\n')),
            hintHtml: renderMathAndMarkdown(hint),
            quickAnswerHtml: formattedAnswer ? renderMathAndMarkdown(formattedAnswer) : '',
            solutionHtml: renderMathAndMarkdown(cleanedSolutionText),
            hasWorkspace: finalHasWorkspace
          });
        }
        
        // Collect extensions (extra practice) from block
        const extHtml = extractCalloutHtml(body, 'info');
        if (extHtml) parsedBlock.extensionsHtml = extHtml;

      } else {
        parsedBlock.bodyHtml = renderMathAndMarkdown(body);
      }

      blocks.push(parsedBlock);
    }

    // Clean redundant timeline section headers from intro markdown
    const cleanedIntro = intro.replace(/##\s+Timeline\s+&\s+Session\s+Breakdown\s*$/gmi, '');

    return {
      metadata: data,
      title: data.title || matchedFile.replace('.md', ''),
      code: data.code || '',
      introHtml: renderMathAndMarkdown(cleanedIntro),
      blocks
    };
  }
}

/**
 * Helper to extract callout blocks by type from the markdown text
 */
function extractCalloutHtml(markdown, calloutType) {
  const lines = markdown.split('\n');
  let insideCallout = false;
  let calloutLines = [];

  for (let line of lines) {
    if (line.trim().startsWith(`> [!${calloutType}`)) {
      insideCallout = true;
      const restOfLine = line.replace(/^>\s*\[![^\]]+\][-+]?\s*/, '').trim();
      if (restOfLine) calloutLines.push(restOfLine);
      continue;
    }
    
    if (insideCallout) {
      if (line.trim().startsWith('>')) {
        calloutLines.push(line.replace(/^>\s*/, ''));
      } else {
        break;
      }
    }
  }

  if (calloutLines.length === 0) return '';
  return renderMathAndMarkdown(calloutLines.join('\n'));
}

/**
 * Returns all garden concepts
 */
export function getGardenConcepts() {
  if (!fs.existsSync(GARDEN_DIR)) return [];
  const files = fs.readdirSync(GARDEN_DIR);

  return files
    .filter(file => file.endsWith('.md') && !file.toLowerCase().includes('index'))
    .map(file => {
      const filePath = path.join(GARDEN_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(preprocessFrontmatter(fileContent));
      
      const slug = file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-');

      let updatedStr = '';
      if (data.updated) {
        if (data.updated instanceof Date) {
          updatedStr = data.updated.toISOString().split('T')[0];
        } else {
          updatedStr = String(data.updated);
        }
      }
      
      return {
        title: data.title || file.replace('.md', ''),
        slug,
        fileName: file,
        course: data.course || '',
        updated: updatedStr,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Returns a specific garden concept details
 */
export function getConceptDetails(conceptSlug) {
  if (!fs.existsSync(GARDEN_DIR)) return null;
  const files = fs.readdirSync(GARDEN_DIR);
  
  const matchedFile = files.find(file => {
    return file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-') === conceptSlug;
  });

  if (!matchedFile) return null;

  const filePath = path.join(GARDEN_DIR, matchedFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Strip workspace block from garden card source completely
  let processedSource = preprocessFrontmatter(fileContent);
  processedSource = processedSource.replace(/^>\s*\[!workspace\][\s\S]*?(?=\n\n|\n[^\r\n>])/gm, '');

  const { data, content } = matter(processedSource);
  const cleanedContent = stripTitleHeading(content);

  return {
    metadata: data,
    title: data.title || matchedFile.replace('.md', ''),
    contentHtml: renderMathAndMarkdown(cleanedContent)
  };
}

/**
 * Loads a static markdown page from the vault root
 */
export function getStaticPage(fileName) {
  const filePath = path.join(VAULT_ROOT, `${fileName}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(preprocessFrontmatter(fileContent));
  
  const titleMatch = body.match(/^#\s+([^\n]+)/m);
  const title = titleMatch ? titleMatch[1].trim() : (data.title || fileName);
  
  let cleanBody = body;
  if (titleMatch) {
    cleanBody = body.substring(titleMatch.index + titleMatch[0].length).trim();
  }
  
  const bodyHtml = renderMathAndMarkdown(cleanBody);
  
  return {
    title,
    bodyHtml,
    metadata: data
  };
}
