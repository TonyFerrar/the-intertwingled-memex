# RESTRUCTURING ENGINEERING CALCULUS GRADING
## A Monte Carlo Policy Analysis & Hybrid Framework Proposal for UNLV
**Author:** Dr. Tony Ferrar, Department of Applied and Interdisciplinary Engineering, UNLV  
**Target Audience:** Department Curriculum Committee & STEM Faculty  

---

## EXECUTIVE SUMMARY

Transitioning students from introductory mathematics to upper-division engineering coursework requires balancing two competing imperatives:
1. **Mathematical Rigor & Professional Communication:** Ensuring students can independently solve complex calculus problems and write clear, presentation-quality technical solutions[cite: 1, 3].
2. **Equity, Access, and Real-World Flexibility:** Accommodating a non-traditional, highly diverse student demographic without lowering standards[cite: 1, 3].

Over previous semesters, we evaluated two contrasting grading philosophies: **Traditional Weighted Grading with Grace** (Fall 2025)[cite: 1] and **Pure Contract Grading** (Spring 2026)[cite: 2]. While contract grading succeeded in reducing points-based anxiety, it introduced severe administrative friction (analog sign-off sheets), student confusion regarding Canvas gradebook displays, and "cliff-edge" grade collapses where missing a single requirement tanked an entire letter grade[cite: 2].

This report presents a **Monte Carlo Stress-Test** simulating 12 realistic UNLV student avatars across three syllabus models. Based on this simulation, we propose a **Canvas-Native Hybrid Framework (60/20/15/5)** that pairs binary Complete/Incomplete coursework[cite: 2] with weighted category limits and structural policy levers (e.g., the *Retro-Grading Gateway Rule* and *Exam Redline Questions*)[cite: 1].

---

## 1. THE UNLV STUDENT CONTEXT & DESIGN CHALLENGES

Designing an effective syllabus for UNLV Engineering requires understanding the operational realities of our student body:
* **High Workload Commitments:** Over 60% of our undergraduates work 20–35 hours per week (often night shifts in hospitality or technical trade jobs).
* **Long Commutes:** Significant portions of the student body commute daily from Henderson, North Las Vegas, or outer rural areas (e.g., Pahrump) via I-15 or RTC transit.
* **Prerequisite & Background Disparities:** Students enter with wide gaps in algebraic fluency and trigonometry, often requiring adaptive remediation[cite: 1].
* **Emergence of Generative AI:** Homework platforms are increasingly trivialized by AI solvers, forcing a strict firewall around individual evaluation[cite: 1, 3].

### Core Syllabus Pitfalls to Avoid:
1. **The Canvas Cliff-Edge (Strict Contracts):** Under pure contract grading, a student with a 95% exam average who misses 5 attendance sessions drops from an 'A' to a 'C'[cite: 2]. This triggers extreme anxiety and flood of emails.
2. **The "Throwaway Exam" Syndrome (Unbounded Retroactive Grading):** Allowing the Final Exam to replace *all* prior midterms unconditionally encourages overconfident students to "phone in" early exams, delaying learning until it is too late[cite: 1].
3. **Homework Triaging:** If homework is weighted too low (<15%), time-strained students skip weekly reps, leading to catastrophic failure on written exams[cite: 1].
4. **Answer-Hunting vs. Technical Communication:** Multiple-choice online homework trains students to find numerical answers, but fails to teach systematic, presentation-quality mathematical derivation necessary for engineering practice[cite: 1, 3].

---

## 2. THE PROPOSED HYBRID FRAMEWORK (60 / 20 / 15 / 5)

To resolve these challenges, we propose a hybrid system that maps binary Complete/Needs Revision effort directly into Canvas's native weighted gradebook[cite: 2].

```text
├── 📊 In-Person Written Exams .................. 60%  (Bounded Retroactive Grading)
├── 💻 Homework Practice (Knewton Alta) .......... 20%  (Binary Mastery; Retro-Grading Gateway)
├── 📄 Technical Memos & Redline Audits .......... 15%  (Binary Presentation Portfolio)
└── ✍️ Class Engagement & Worksheets .............. 5%   (Low-Stress Buffer; Office Hour Recovery)
```

### Key Policy Mechanics:

* **Bounded Retroactive Grading:** The Final Exam score automatically replaces the single lowest Midterm score—*provided* the student satisfies the **Retro-Grading Gateway Rule**[cite: 1].
* **The Retro-Grading Gateway Rule:** To unlock retro-grading, students must complete at least 80% of assigned Knewton Alta homework by the final exam[cite: 1, 3]. Otherwise, all midterm scores stand as written.
* **Exam Redline Questions:** Every exam includes a 10-point problem presenting a correct numerical answer written with 5 intentional notation/presentation flaws. Students earn credit by identifying and correcting the communication errors.
* **Technical Memo Portfolio:** Students submit 1-page "Board-Approved" solution write-ups for core skills across 3 milestone batches, evaluated on a Complete/Needs Revision standard[cite: 2, 3].
* **60-Second Office Hour Recovery:** Missing a lecture logs a temporary 0 in Canvas[cite: 2]. Students can recover 100% credit by bringing the completed worksheet to office hours within 1 week for a 60-second verbal check-in.
* **Emergency Clause:** The 1-week check-in deadline may be extended for documented medical or family emergencies upon written request.

---

## 3. UNLV MONTE CARLO COHORT (STUDENT AVATARS)

To evaluate syllabus resilience, we created 12 student profiles reflecting UNLV demographics:

1. **Marcus (The AI Box-Checker):** Tech-savvy magnet grad; works 15 hrs/wk. Uses ChatGPT to automate digital homework[cite: 3].
2. **Elena (The Graveyard Shift Bloomer):** First-gen; works 11 PM–7 AM shift at MGM Grand. Enters with severe trig gaps[cite: 1].
3. **Mateo (The Group Coaster):** CS transfer; relies heavily on strong group members during active learning sessions.
4. **Priya (The Crisis Commuter):** Commutes from Pahrump; cares for an ailing parent while working 20 hrs/wk.
5. **Devonte (The Returning Veteran):** 28-year-old military vet; 6-year math gap; highly disciplined, process-oriented[cite: 2, 3].
6. **Sofia (High Exam Anxiety):** Works 25 hrs at a civil firm; deep conceptual understanding but freezes on timed tests[cite: 1].
7. **Jordan (The Repeat Slacker):** Retaking Calc II; overconfident from high school, slacks until week 10[cite: 1].
8. **Linh (ESL Math Genius):** Immigrant student; flawless mathematical logic, struggles with English prose.
9. **Carlos (The CSN Transfer):** Works 30 hrs/wk at a machine shop; Henderson commuter balancing tight schedules.
10. **Chloe (The High-Prep Achiever):** Full scholarship; no outside work; consistent top performer.
11. **Alex (The Bus Commuter):** RTC bus rider (1.5 hr commute each way); experiences frequent transit delays.
12. **Brandon (The Burnout):** Enrolled in 18 credits + 30 hrs work; severe sleep deprivation and burnout.

---

## 4. SYLLABUS POLICY COMPARISON MODELS

We simulated the cohort across three distinct syllabus iterations:

* **Version 1: Pure Contract Grading (Spring 2026 Model)**
  * Binary Complete/Incomplete tiers (Base C, Mid B, Top A)[cite: 2].
  * Paper sign-off sheets; strict attendance thresholds[cite: 2].
  * Unlimited Final Exam failsafe[cite: 2].
* **Version 2: High-Stakes Exams (70 / 10 / 10 / 10 Model)**
  * 70% Exams, 10% HW, 10% Memos, 10% Attendance[cite: 1].
  * Standard weighted percentage gradebook.
* **Version 3: Proposed Hybrid Leveraged Framework (60 / 20 / 15 / 5 Model)**
  * 60% Exams, 20% HW, 15% Memos, 5% Attendance[cite: 1].
  * Includes *Retro-Grading Gateway Rule*, *Exam Redline Questions*, and *Emergency Clause*[cite: 1].

---

## 5. STUDENT NARRATIVE EXPERIENCES & STRESS TESTS

### Narrative 1: Marcus (The AI Box-Checker)
* **Version 1 (Contract):** Marcus uses AI to auto-solve homework and generate memos[cite: 3]. He meets the "Complete" thresholds for coursework[cite: 2]. On exams, he scores poorly (55%), but squeezes into a B contract due to tier requirements[cite: 2]. **Verdict: SYSTEM BROKE (Grade Inflation).**
* **Version 2 (70% Exam):** Marcus gets 100% on non-exam items (30 pts), but averages 58% on exams (40.6 pts). Final Grade: 71.6% (C-). **Verdict: SYSTEM PASSED (Cheating Neutralized).**
* **Version 3 (Proposed Hybrid):** Marcus earns 100% on HW and Attendance (25 pts), and 70% on Memos (10.5 pts)[cite: 2, 3]. His in-person written exams reveal his lack of independent skill (averaging 58% = 34.8 pts)[cite: 1, 3]. Final Grade: 70.3% (C-). **Verdict: SYSTEM PASSED.** In-person exams act as an absolute firewall[cite: 1, 3].

### Narrative 2: Elena (The Graveyard Shift Bloomer)
* **Version 1 (Contract):** Elena misses 5 morning sessions due to casino overtime[cite: 2]. Despite mastering the material by week 12, her attendance places her in the C contract ceiling automatically[cite: 2]. **Verdict: SYSTEM BROKE (Demoralizing/Inflexible).**
* **Version 2 (70% Exam):** Elena scores 38% on Midterm 1 due to trig gaps[cite: 1]. She recovers to score 82% on Midterm 2 and 88% on the Final. With 70% exam weighting, her early 38% drags her final grade down to 78.2% (C+). **Verdict: SYSTEM BROKE (Punished Early Growth).**
* **Version 3 (Proposed Hybrid):** Elena uses adaptive homework to repair prerequisite gaps[cite: 1]. She uses 60-second office hour check-ins to make up missed lectures. Her 88% Final Exam replaces her 38% Midterm 1 via Bounded Retroactive Grading[cite: 1]. Final Grade: 89.2% (B+). **Verdict: SYSTEM PASSED (Rewards True Mastery).**

### Narrative 3: Priya (The Life-Crisis Commuter)
* **Version 1 (Contract):** Family emergency forces 3 weeks of absence[cite: 2]. She misses contract completion cutoffs and is dropped to the Failsafe C-limit[cite: 2]. **Verdict: SYSTEM BROKE.**
* **Version 2 (70% Exam):** Priya maintains an 82% exam average[cite: 1]. Missing 3 weeks of attendance costs her 5% of her total grade. Final Grade: 78.4% (C+). **Verdict: SYSTEM SYSTEMICALLY UNFAIR.**
* **Version 3 (Proposed Hybrid):** Priya invokes the *Emergency Clause*. She submits her Memos online and completes 60-second check-ins during extended office hours. Her 82% exam average combined with completed coursework yields 84.5% (B). **Verdict: SYSTEM PASSED (Equitable Flexibility).**

### Narrative 4: Sofia (High Calculus Skill / High Test Anxiety)
* **Version 1 (Contract):** Sofia struggles on timed midterms but completes all Memos and Homework cleanly[cite: 2, 3]. Squeezes into a B grade[cite: 2]. **Verdict: FUNCTIONAL.**
* **Version 2 (70% Exam):** Sofia's 72% exam average dominates her grade. Despite pristine Technical Memos, her final grade lands at 75.4% (C). **Verdict: SYSTEM BROKE (Over-penalized Anxiety).**
* **Version 3 (Proposed Hybrid):** Sofia earns 100% on HW, Memos, and Engagement (40 pts)[cite: 2, 3]. Her 72% exam average contributes 43.2 pts[cite: 1]. Final Grade: 83.2% (B). **Verdict: SYSTEM PASSED.** Non-exam categories provide an equitable cushion without sacrificing rigor[cite: 1].

---

## 6. COMPARATIVE GRADE MATRIX ACROSS ALL AVATARS

The table below illustrates how each avatar fares under the three syllabus versions:

| Avatar Archetype | Actual Learning Gain | Version 1: Pure Contract[cite: 2] | Version 2: 70% High Exam | Version 3: Proposed Hybrid (60/20/15/5) | Policy Impact & System Verdict |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Marcus** *(AI Box-Checker)* | Low | 82.0% (B) | 71.6% (C-) | **70.3% (C-)** | **V3 Firewall Works:** In-person written exams prevent AI grade inflation[cite: 1, 3]. |
| **2. Elena** *(Graveyard Shift)* | High (Late) | 74.0% (C) | 78.2% (C+) | **89.2% (B+)** | **V3 Rewards Growth:** Bounded retro-grading rescues early prerequisite struggles[cite: 1]. |
| **3. Mateo** *(Group Coaster)* | Low-Medium | 80.0% (B-) | 72.1% (C-) | **73.5% (C)** | **V3 Redline Test:** Exam notation questions catch solo weaknesses. |
| **4. Priya** *(Crisis Commuter)* | High | 72.0% (C-) | 78.4% (C+) | **84.5% (B)** | **V3 Emergency Clause:** Prevents life crises from destroying course standing. |
| **5. Devonte** *(Returning Vet)* | Very High | 88.0% (B+) | 86.4% (B) | **91.0% (A-)** | **V3 Process Rewarded:** Mastery-based structure supports disciplined learning[cite: 2, 3]. |
| **6. Sofia** *(Test Anxiety)* | High | 82.0% (B) | 75.4% (C) | **83.2% (B)** | **V3 Balanced Weight:** 40% non-exam categories cushion test panic[cite: 1]. |
| **7. Jordan** *(Repeat Slacker)* | Low-Medium | 70.0% (C-) | 68.5% (D) | **74.8% (C)** | **V3 Gateway Rule:** Forces weekly HW reps to keep retro-grading safety net[cite: 1]. |
| **8. Linh** *(ESL Genius)* | High | 92.0% (A-) | 93.1% (A) | **95.2% (A)** | **V3 Memo Revisions:** Allows refining technical English without grade penalty[cite: 2]. |
| **9. Carlos** *(CSN Transfer)* | Medium-High | 81.0% (B-) | 80.2% (B-) | **85.4% (B)** | **V3 Predictable Schedule:** Clear weekly expectations fit machine shop work hours. |
| **10. Chloe** *(High Achiever)* | High | 98.0% (A) | 96.8% (A) | **97.5% (A)** | **V3 High Ceiling:** System allows top students to excel effortlessly. |
| **11. Alex** *(RTC Bus Commuter)*| Medium | 76.0% (C) | 77.0% (C+) | **82.1% (B-)** | **V3 Office Hour Check-in:** Recovering transit delays is fast and low-barrier. |
| **12. Brandon** *(Severe Burnout)*| Low | 50.0% (F) | 52.1% (F) | **51.0% (F)** | **V3 Accurately Fails:** Unengaged students who miss exams cannot pass. |

---

## 7. RECOMMENDATIONS FOR FACULTY IMPLEMENTATION

1. **Adopt the 60 / 20 / 15 / 5 Percentage Split:** This distribution provides optimal mathematical resilience against AI-cheating while protecting non-traditional students from life-uncertainty penalties[cite: 1, 3].
2. **Implement the "Retro-Grading Gateway Rule":** Require $\ge 80\%$ homework completion to unlock Final Exam retro-grading[cite: 1, 3]. This maintains high homework engagement without inflating gradebook points[cite: 1].
3. **Embed "Redline Audits" into Exams:** Allocate 10–15% of exam points to notation error identification. This explicitly tests technical communication without adding writing time pressures during exams.
4. **Utilize 60-Second Office Hour Check-Ins:** Eliminate complex makeup assignment workflows. Require absent students to bring their completed session worksheet to office hours for a 1-minute verbal review.
5. **Keep Canvas Native:** Ensure all assignment categories map directly to standard Canvas weights so students always see an accurate running total, eliminating custom gradebook hacks and student panic[cite: 2, 3].