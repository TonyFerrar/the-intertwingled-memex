# Intertwingled Memex Sitemap & Content Creator Guide

This document acts as an up-to-date sitemap and structured guide for the **Intertwingled Memex** Obsidian vault. It is optimized to serve as system context for another AI assistant to write, modify, or format content consistent with the vault's pedagogy, formatting rules, and structure.

---

## 1. Vault Overview & Architectural Philosophy

The **Intertwingled Memex** is a personal digital garden and curriculum design database inspired by Vannevar Bush's Memex and Ted Nelson's concept of "intertwingled" information. It is built to support a mobile-first, active learning pedagogy for engineering-focused Calculus courses at UNLV using the **Modeling Practices in Calculus (MPC)** framework.

### Pedagogical Principles:
*   **Active Learning over Lectures:** Standard lectures are replaced by 75-minute sessions divided into **3 Skill Blocks** (each containing a core theory block, a guided example, a practice problem, and a student workspace).
*   **Engineering Contextualization:** Calculus is taught through practical engineering applications (fluid pressure, structural stress, chemical reactions, thermodynamics) rather than abstract proofs.
*   **Bidirectional Knowledge Graph:** Every mathematical concept is an atomic note in the `Garden/` directory, connected bidirectionally to course sessions and other concepts.
*   **Discussion Sheets (GA-led):** Graduate Assistant (GA) sessions feature a **Classification Matrix** (where students categorize problems before solving them) and a **Prerequisite Refresher** for the upcoming week.

---

## 2. Directory Tree & File Inventory

The vault is structured as follows (excluding system/configuration folders like `.obsidian` and `.git`):

```text
The Intertwingled Memex/
├── index.md (Vault home/portal)
├── About Me.md
├── Future Backlog.md
├── Meet with Me.md
├── Take a Course.md
├── task.md (Internal project tasks)
├── publish.css (Custom portal stylesheets)
│
├── 00 Meta/
│   ├── CSS Classes Reference.md
│   └── Templates/
│       ├── Template - Atomic Concept.md (For Garden notes)
│       ├── Template - GA Discussion.md (For GA Discussion sheets)
│       └── Template - MPC Session.md (For class session notes)
│
├── Blog/
│   └── welcome-to-the-memex.md
│
├── Courses/
│   ├── index.md (OER Portal Landing)
│   ├── Calc-1/
│   │   ├── index.md (Calc I Portal Landing)
│   │   ├── Calc-1 Session  - .md (General test review placeholder)
│   │   ├── Calc-1 Session 10 - Midterm Exam 1 Review.md
│   │   ├── Calc-1 Session 20 - Midterm Exam 2 Review.md
│   │   ├── Calc-1 Session 25 - Final Exam Review.md
│   │   ├── Calc-1 Session 26 - Final Exam Review.md
│   │   ├── Session 01 - Using Functions to Understand and Predict Systems.md
│   │   ├── Session 02 - Introduction to Limits.md
│   │   ├── Session 03 - Computing Limits with Algebraic Techniques.md
│   │   ├── Session 04 - Infinite Limits and Limits at Infinity.md
│   │   ├── Session 05 - Special Limits and Continuity.md
│   │   ├── Session 06 - Rates of Change and the Definition of the Derivative.md
│   │   ├── Session 07 - Differentiation Rules- Basics, Powers, Products and Quotients.md
│   │   ├── Session 08 - Chain Rule and Derivatives of Exponential, Logarithmic, and Inverse Trig Functions.md
│   │   ├── Session 09 - Implicit Differentiation and Logarithmic Differentiation.md
│   │   ├── Session 11 - Related Rates.md
│   │   ├── Session 12 - L’Hopital’s Rule and Indeterminate Forms.md
│   │   ├── Session 13 - Critical Points and Extrema.md
│   │   ├── Session 14 - Optimizing Areas and Volumes.md
│   │   ├── Session 15 - Optimizing Distance and Time.md
│   │   ├── Session 16 - Curve Sketching.md
│   │   ├── Session 17 - Numerical Methods.md
│   │   ├── Session 18 - Vectors in 2D and 3D.md
│   │   ├── Session 19 - Vector Operations and Engineering Applications.md
│   │   ├── Session 21 - Antiderivatives and the Indefinite Integral.md
│   │   ├── Session 22 - The Substitution Rule for Integrals.md
│   │   ├── Session 23 - Definite Integrals and the Fundamental Theorem of Calculus.md
│   │   ├── Session 24 - The Limit Definition of Integrals.md
│   │   └── Calc-1 Discussion [01-13] files (Details in Section 5)
│   │
│   ├── Calc-2/
│   │   ├── index.md (Calc II Portal Landing)
│   │   ├── Calc-2 Session 10 - Midterm Exam 1 Review.md
│   │   ├── Calc-2 Session 20 - Midterm Exam 2 Review.md
│   │   ├── Calc-2 Session 25 - Final Exam Review 1- Core Mathematical Skills.md
│   │   ├── Calc-2 Session 26 - Final Exam Review 2- Essential Review.md
│   │   ├── Session 01 - Calculus 1 Review.md
│   │   ├── Session 02 - Area Under the Curve.md
│   │   ├── Session 03 - Approximating Area.md
│   │   ├── Session 04 - U Substitution.md
│   │   ├── Session 04 - U Substitution - Backup.md
│   │   ├── Session 05 - Net Change Theorem.md
│   │   ├── Session 06 - Areas and Volumes by Slicing.md
│   │   ├── Session 07 - Volume by Shells.md
│   │   ├── Session 08 - Arc Length and Surface Area.md
│   │   ├── Session 09 - Physical Applications.md
│   │   ├── Session 11 - Numerical Methods.md
│   │   ├── Session 12 - Engineering With Matrices.md
│   │   ├── Session 13 - Numerical Integration.md
│   │   ├── Session 14 - Integration by Parts.md
│   │   ├── Session 15 - Trigonometric Integrals.md
│   │   ├── Session 16 - Trigonometric Substitution.md
│   │   ├── Session 17 - Partial Fractions Decomposition Integrals.md
│   │   ├── Session 18 - Improper Integrals.md
│   │   ├── Session 19 - Sequences and Infinite Series.md
│   │   ├── Session 21 - Alternating and Convergence.md
│   │   ├── Session 22 - Representing Functions as Power Series.md
│   │   ├── Session 23 - Parametric Curves.md
│   │   └── Session 24 - Polar Coordinates.md
│   │
│   └── Calc-3/
│       ├── index.md (Calc III Portal Landing)
│       ├── Calc-3 Session 07 - Midterm Review 1.md
│       ├── Calc-3 Session 19 - Midterm Review 2.md
│       ├── Calc-3 Session 26 - Review 2- Final Exam Essentials Review.md
│       ├── Session 01 - Course Overview + Prerequisite Review.md
│       ├── Session 02 - Vectors in 2D and 3D.md
│       ├── Session 03 - Dot and Cross Product.md
│       ├── Session 04 - Lines and Planes in Space.md
│       ├── Session 05 - Vector-Valued Functions and Derivatives.md
│       ├── Session 06 - Arc Length and Curvature.md
│       ├── Session 08 - Multivariable Functions.md
│       ├── Session 09 - Partial Derivatives.md
│       ├── Session 10 - Tangent Planes and Linear Approximations.md
│       ├── Session 11 - Chain Rule and Higher Derivatives.md
│       ├── Session 12 - Gradient and Directional Derivatives.md
│       ├── Session 13 - Optimization with Constraints.md
│       ├── Session 14 - Double Integrals.md
│       ├── Session 15 - Double Integrals in Polar Coordinates.md
│       ├── Session 16 - Triple Integrals.md
│       ├── Session 17 - Change of Variables in Multiple Integrals.md
│       ├── Session 18 - Applications of Multiple Integrals.md
│       ├── Session 20 - Vector Fields.md
│       ├── Session 21 - Line Integrals.md
│       ├── Session 22 - Green’s Theorem, Curl & Divergence.md
│       ├── Session 23 - Curl, Divergence, and Physical Systems.md
│       ├── Session 24 - Surface Integrals.md
│       ├── Session 25 - Review 1- Core Math Skills.md
│       └── Calc-3 Discussion [01-13] files (Details in Section 5)
│
├── Garden/
│   ├── Chain Rule.md
│   ├── Continuity.md
│   ├── Definite Integrals.md
│   ├── Derivatives.md
│   ├── Dot and Cross Products.md
│   ├── Implicit Differentiation.md
│   ├── Improper Integrals.md
│   ├── Integration by Parts.md
│   ├── Limits.md
│   ├── Line Integrals.md
│   ├── Multiple Integrals.md
│   ├── Partial Derivatives.md
│   ├── Power Series.md
│   ├── Substitution Rule.md
│   ├── Vector Valued Functions.md
│   └── Vectors.md
│
└── web-portal/ (Website generator files - do not edit directly)
```

---

## 3. Formatting & Style Standards

To write content that merges seamlessly into the vault, follow these rules:

### A. Markdown Frontmatter (YAML)
All notes begin with a frontmatter block. The required parameters depend on the type of note:

```yaml
---
title: "Note Title"
type: course-session | problem | garden | blog
course: MATH-181 | MATH-182 | MATH-283 | [[MATH-181]] (depending on type)
semester: Fall 2026
publish: true
updated: YYYY-MM-DD
cssclasses: []
---
```

### B. Math Formatting (LaTeX)
*   **Inline Equations:** Use single dollar signs `$ ... $` with no spaces after the opening or before the closing delimiter (e.g., `Let $f(x) = 3x^2$` not `Let $ f(x) = 3x^2 $`).
*   **Block Equations:** Use double dollar signs `$$ ... $$` placed on their own lines for centered derivations.
*   **Notation:** Standard mathematical notation (Leibniz `\frac{dy}{dx}` for derivatives, standard integrals `\int_{a}^{b} f(x) \, dx`, and vector indicators `\vec{v}`).

### C. Obsidian Callout Cards
The vault utilizes stylized callouts heavily to create visual interest and structure:
*   `> [!abstract] Title` — Used at the beginning of sessions for objectives.
*   `> [!tip] Core Definition` — Used in the Garden for atomic definition headers.
*   `> [!note]- Core Theory & Derivations` — Collapsible note (denoted by the `-`) containing formulas.
*   `> [!workspace] Student Practice Space` — Empty workspace placeholder blocks for students.
*   `> [!check]- Solution` or `> [!check]- Solution to Problem X` — Collapsible success card containing the detailed solution keys.

### D. Bidirectional Wiki-Links
Create links using standard Obsidian syntax:
*   To link to another note in the same directory: `[[Chain Rule]]` or `[[Derivatives]]`
*   To specify link text: `[[Chain Rule|The Chain Rule Formula]]`
*   To link across directories: `[[Courses/Calc-1/Session 08 - Chain Rule...|Calc-1 Session 08]]`

---

## 4. Note Schemas & Templates

### Schema 1: Course Session (`type: course-session`)
Used for lectures. Every file matches this outline:
1.  **YAML Frontmatter** (type: `course-session`, course: `MATH-XYZ`).
2.  **Session Objectives:** Inside a `> [!abstract] Session Objectives & Overview` card.
3.  **Session Timeline:** Structured table or bullet list mapping the 75 minutes.
4.  **Micro-Lecture (10 mins):** Introduction to the engineering context (e.g., fluid dynamics, thermodynamics) and the governing systems/equations.
5.  **3 Skill Blocks (15 mins each):**
    *   *Core Theory & Derivations:* Inside a collapsible `> [!note]-` block containing links to the `Garden/` reference cards.
    *   *Guided Example:* A fully worked-out problem.
    *   *Practice Problem:* An unsolved practice problem.
    *   *Workspace:* An empty `> [!workspace] Student Practice Space` callout.
    *   *Solution:* A collapsible `> [!check]- Solution` containing step-by-step math.
6.  **Regroup Blocks (5 mins each):** Reflection prompts to clear up misconceptions.
7.  **Synthesis Wrap-up (5 mins):** Summary of engineering insights.

### Schema 2: Discussion Sheet (`type: problem`)
Used for GA-led discussion sessions. Matches this outline:
1.  **YAML Frontmatter** (type: `problem`).
2.  **Topics Covered:** Bold listing of discussion mathematical skills.
3.  **Part A: Classification Matrix (~45 mins):**
    *   A Mermaid diagram helping students classify the problems.
    *   A matrix table containing Columns: `Problem`, `Classification`, `Identifying Rule/Theorem`, and `Visual Clues / Justification`.
    *   **4 Problems:** Each contains a statement, a `> [!workspace] Student Practice Space` callout, and a collapsible `> [!check]- Solution` callout.
4.  **Part B: Next Week's Prerequisite Refresher (~30 mins):**
    *   **2 Prerequisite Problems:** (Algebra/trig focus) each with a workspace and solution callout.

### Schema 3: Zettelkasten Concept Card (`type: garden`)
Used for core math rules in the `Garden/` directory. Matches this outline:
1.  **YAML Frontmatter** (type: `garden`, course links as wiki-links `[[MATH-181]]`).
2.  **Core Definition:** In a `> [!tip] Core Definition` block, showing both Lagrange/Newton and Leibniz notation where applicable.
3.  **Concept Explanation:** Plain-text explanation of the rate of change propagation or system behavior.
4.  **Visual / Geometric Intuition:** Anchor text links to interactive Desmos graphs.
5.  **Engineering Applications:** Concrete scenarios where engineers use this mathematical concept.
6.  **Example Problem:** A worked mathematical model including practice workspace and solution.
7.  **Connections & References:**
    *   `Parent Concepts: [[Parent Note]]`
    *   `Sub-concepts: [[Child Note]]`
    *   `Course Links: [[Course Session Link]]`

---

## 5. Directory File Detail

Below is the inventory of specific course modules and garden cards:

### Courses/Calc-1/ (Calculus I for Engineers)
*   **`index.md`:** Main landing page listing weeks 1 to 13, matching sessions and discussion sheets chronologically.
*   **Discussion Sheets (1 to 13):**
    1.  `Calc-1 Discussion 01 - 3 Types of Discontinuity`
    2.  `Calc-1 Discussion 02 - Identify what Skill is`
    3.  `Calc-1 Discussion 03 - What the limit to`
    4.  `Calc-1 Discussion 04 - Limit definition of a`
    5.  `Calc-1 Discussion 05 - Identify what Differentiation rule`
    6.  `Calc-1 Discussion 06 - revisit dy-dx - Ask`
    7.  `Calc-1 Discussion 07 - Test 1`
    8.  `Calc-1 Discussion 08 - Revisit max and min`
    9.  `Calc-1 Discussion 09 - Revisit on making functions`
    10. `Calc-1 Discussion 10 - No discussion`
    11. `Calc-1 Discussion 11 - Difference between dot and`
    12. `Calc-1 Discussion 12 - Review from topics`
    13. `Calc-1 Discussion 13 - Test 2`
*   **Class Session Files:** Sessions 01 to 09, 11 to 19, 21 to 24.
*   **Exam Review Files:** Sessions 10 (Midterm 1), 20 (Midterm 2), 25 and 26 (Final Exam Review).

### Courses/Calc-2/ (Calculus II for Engineers)
*   **`index.md`:** Main landing page listing sessions chronologically across weeks.
*   **Class Session Files:**
    *   Integrals & Areas: Sessions 01 (Review), 02 (Area Under Curve), 03 (Approximating Area), 04 (U Substitution), 05 (Net Change).
    *   Volumes & Geometry: Sessions 06 (Slicing), 07 (Shells), 08 (Arc Length / Surface Area), 09 (Physical Applications).
    *   Numerical & Linear Algebra: Sessions 11 (Numerical Methods), 12 (Engineering Matrices), 13 (Numerical Integration).
    *   Advanced Integration: Sessions 14 (Parts), 15 (Trig Integrals), 16 (Trig Substitution), 17 (Partial Fractions), 18 (Improper).
    *   Series & Polar: Sessions 19 (Sequences & Series), 21 (Alternating/Convergence), 22 (Power Series), 23 (Parametric), 24 (Polar).
*   **Exam Review Files:** Sessions 10 (Midterm 1), 20 (Midterm 2), 25 and 26 (Final Exam Reviews).

### Courses/Calc-3/ (Calculus III for Engineers)
*   **`index.md`:** Main landing page linking lectures and discussion sessions chronologically.
*   **Discussion Sheets (1 to 13):**
    *   `Calc-3 Discussion 01 - Review Integration and derivative`
    *   `Calc-3 Discussion 02 - Review dot and cross`
    *   `Calc-3 Discussion 03 - limit to vector valued`
    *   `Calc-3 Discussion 04 - Review of curvature -`
    *   `Calc-3 Discussion 05 - Revisit the domain and`
    *   `Calc-3 Discussion 06 - Test 1`
    *   `Calc-3 Discussion 07 - Revisit Gradients - Review`
    *   `Calc-3 Discussion 08 - Revisit Lagrange multipliers -`
    *   `Calc-3 Discussion 09 - Switch coordinate systems Cartesian`
    *   `Calc-3 Discussion 10 - No discussion`
    *   `Calc-3 Discussion 11 - Switching coordinates with triple`
    *   `Calc-3 Discussion 12 - Test 2`
    *   `Calc-3 Discussion 13 - Set up line integrals`
*   **Class Session Files:** Sessions 01 to 06, 08 to 18, 20 to 24.
*   **Exam Review Files:** Sessions 07 (Midterm 1), 19 (Midterm 2), 25 (Review 1 - Core Math), 26 (Review 2 - Final Exam Essentials).

### Garden/ (Atomic Zettelkasten Concept Cards)
Each card acts as a single mathematical unit. Note the filenames exactly to write clean links:
*   `Chain Rule.md`
*   `Continuity.md`
*   `Definite Integrals.md`
*   `Derivatives.md`
*   `Dot and Cross Products.md`
*   `Implicit Differentiation.md`
*   `Improper Integrals.md`
*   `Integration by Parts.md`
*   `Limits.md`
*   `Line Integrals.md`
*   `Multiple Integrals.md`
*   `Partial Derivatives.md`
*   `Power Series.md`
*   `Substitution Rule.md`
*   `Vector Valued Functions.md`
*   `Vectors.md`
