# MASTER SYSTEM BLUEPRINT: UNLV ENGINEERING CALCULUS VAULT

## 1. Core Mission & Scope
- **Vault Objective:** A single, persistent Obsidian vault housing all academic, course, department, and Zettelkasten notes, formatted for Obsidian Publish.
- **Immediate Priority:** Refactor and stage Fall 2026 course materials (Calculus 1 and Calculus 3) built on the Modeling Practices in Calculus (MPC) active learning framework for engineering students.
- **Workflow Rule:** All task management remains on paper (Bullet Journal). This vault is purely for thinking, learning, and publishing.

---

## 2. Directory Structure
Ensure the vault maintains the following minimal folder structure:
```text
/
├── 00 Meta/
│   ├── Templates/
│   ├── CSS/
│   └── Attachments/
├── _raw/               <-- Raw inbox
├── _legacy_sources/    <-- Staging area
│   ├── undergrad_drafts/    <-- PRIMARY SOURCE: Summer draft vault & landing pages
│   ├── content_schedules/   <-- SECONDARY SOURCE: Google Sheets / CSVs
│   ├── fiu_pdfs/            <-- Reference FIU PDF handouts & source materials
│   └── past_semester/       <-- Mixed legacy Zettelkasten notes
├── Garden/             <-- Zettelkasten & blog posts
├── Courses/
│   ├── Calc-1/
│   ├── Calc-2/
│   └── Calc-3/
├── Department/         <-- Internal UNLV materials
├── Projects/
└── index.md            <-- Vault Landing Page
```

---

## 3. Metadata & Property Standards
All publishable notes use YAML frontmatter:
```yaml
---
title: "Note Title"
type: course-session | problem | garden | blog | department
course: MATH-181 | MATH-182 | MATH-283  # (Calc 1, Calc 2, Calc 3)
semester: Fall 2026
publish: true | false
updated: YYYY-MM-DD
---
```

---

## 4. Pedagogical Framework & Structural Blueprints

### A. 75-Minute MPC Lecture Session Structure
Every lecture session note MUST strictly fit a 75-minute class budget to prevent cognitive overload:
1. **00:00 - 00:10 (10 mins) — Micro-Lecture:** High-level motivation, engineering context, and core theory.
2. **00:10 - 00:25 (15 mins) — Skill Block 1:** Theory & Core Skill (Guided example + practice problem).
3. **00:25 - 00:30 (5 mins) — Regroup 1:** Class discussion & clearing misconceptions.
4. **00:30 - 00:45 (15 mins) — Skill Block 2:** Applied Skill (Framed engineering problem + student exercise).
5. **00:45 - 00:50 (5 mins) — Regroup 2:** Reflection on Block 2 insights.
6. **00:50 - 01:05 (15 mins) — Skill Block 3:** Synthesis / Complex Application Problem.
7. **01:05 - 01:10 (5 mins) — Regroup 3:** Verification of Block 3 solutions.
8. **01:10 - 01:15 (5 mins) — Synthesis Wrap-up:** Class-wide takeaways.

> *Note:* Any secondary pure-math theory that exceeds this 75-minute budget is stripped from lecture notes and offloaded to Knewton Alta homework.

### B. GA Discussion Sheet Blueprint (75 Minutes)
Every weekly GA Discussion page is split into two mandatory parts:
- **Part A: Classification Matrix (~45 mins):** 4–6 mixed problems across past and current topics. Students MUST classify the problem type, identify the rule/theorem, and justify visual clues BEFORE solving.
- **Part B: Next Week's Prerequisite Refresher (~30 mins):** 2–3 targeted algebra, trig, or prerequisite calculus problems directly preparing students for next week's new topics.

---

## 5. Content Framing, Visuals, & ADA Accessibility

### A. The "Framed Model" Pattern for Engineering Context
To prevent cognitive overload from unfamiliar engineering physics:
- Do NOT make students derive complex physical systems.
- Present engineering context in a brief overview box (`> [!example]`).
- State physical systems as given mathematical equations.
- Direct 100% of student execution effort toward the calculus task.

### B. Visuals & Interactivity
- **Desmos Integration:** Insert HTML `<iframe>` embeds for interactive graphs whenever visualizing functions, limits, or 3D surfaces.
- **Mermaid.js Flowcharts:** Use `mermaid` syntax to build visual decision trees for classification matrices in GA discussions.
- **Callout Containers:**
  - `> [!abstract]` for Session Objectives & Overviews.
  - `> [!tip]` for Key Takeaways & Definitions.
  - `> [!workspace]` for Student Handwriting/Practice space (styled as a dashed box).
  - `> [!check]-` for Collapsible Solutions (stay hidden in print/PDF exports).

---

## 6. Print & PDF Styling (`publish.css`)
A root `publish.css` (and `.obsidian/snippets/print.css`) handles browser printing and PDF exports:
- Must use `@media print` rules.
- Strips all UI elements, navigation bars, and search buttons.
- Forces high-contrast black text on white backgrounds (`#111111` on `#ffffff`).
- Enforces `.callout[data-callout="workspace"] { min-height: 180px; border: 1.5px dashed #999; }`.
- Ensures collapsed solution callouts (`.callout.is-collapsed`) remain HIDDEN when printed to PDF.

---

## 7. Migration & Source Reconciliation Priority

1. **Primary Roadmap Source:** The course landing pages and schedule MOCs located in `_legacy_sources/undergrad_drafts/`.
2. **Secondary Cross-References:** 
   - Google Sheets / CSV files in `_legacy_sources/content_schedules/` (to resolve topic sequencing ambiguities).
   - Original handouts/text in `_legacy_sources/fiu_pdfs/` (to verify untranscribed equations or problems).
3. **Graph Traversal Navigation:** 
   - Start at the undergrad course landing page for each course.
   - Follow internal wikilinks (`[[Note Title]]`) recursively to discover session topics, skills, and problem notes.
   - Pull matching supplementary content from `_legacy_sources/past_semester/` where linked.
   - Ignore unrelated non-course notes in `past_semester/`.
4. **Execution Rule:** Restructure all parsed content into the 75-minute MPC Session Blueprint and apply proper YAML properties (`publish: true`).