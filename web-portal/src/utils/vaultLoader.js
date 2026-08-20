import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import katex from 'katex';

// Constants
const VAULT_ROOT = path.resolve('/Users/anthonyferrar/Library/Mobile Documents/iCloud~md~obsidian/Documents/0 Main Vault/The Interwingled Memex');
const COURSES_DIR = path.join(VAULT_ROOT, 'Courses');
const GARDEN_DIR = path.join(VAULT_ROOT, 'Garden');

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

  // 4. Convert Obsidian links [[Limits]] or [[Limits|Limits Card]] into standard HTML links
  processed = processed.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, alias) => {
    const displayText = alias || target;
    if (target.startsWith('Courses/')) {
      const parts = target.split('/');
      const course = parts[1].toLowerCase();
      const session = parts[2].replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-');
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
 * Scans a course folder and returns a list of sessions.
 */
export function getCourseSessions(courseName) {
  const coursePath = path.join(COURSES_DIR, courseName);
  if (!fs.existsSync(coursePath)) return [];

  const files = fs.readdirSync(coursePath);
  
  return files
    .filter(file => file.endsWith('.md') && !file.toLowerCase().includes('index'))
    .map(file => {
      const filePath = path.join(coursePath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
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
 * Parses a single session markdown file into structured segments.
 */
export function getSessionDetails(courseName, sessionSlug) {
  const coursePath = path.join(COURSES_DIR, courseName);
  if (!fs.existsSync(coursePath)) return null;

  const files = fs.readdirSync(coursePath);
  const matchedFile = files.find(file => {
    return file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]/g, '-') === sessionSlug;
  });

  if (!matchedFile) return null;

  const filePath = path.join(coursePath, matchedFile);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(preprocessFrontmatter(fileContent));

  const cleanedContent = stripTitleHeading(content);

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
    introHtml: renderMathAndMarkdown(cleanedIntro),
    blocks
  };
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
