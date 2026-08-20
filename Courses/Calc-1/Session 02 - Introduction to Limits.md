---
title: "Session 02 - Introduction to Limits"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 02 - Introduction to Limits

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Disentangling Limit Behavior from Function Values (The Concept of Approaching)
> - Diagnosing and Classifying Why a Limit Fails to Exist (DNE)
> - Executing the Limiting Process to Turn Average Rates into Instantaneous Rates

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Behavior at the Edge
> The study of limits bridges algebra and calculus by shifting focus from exact coordinates to infinitesimally close behavioral trends, developing three core skills: separating a function’s approached path from its actual destination, classifying structural failures when a limit does not exist (via jumps, asymptotes, or wild oscillations), and transforming static average rates into dynamic instantaneous rates. In real-world engineering, these competencies provide the critical mathematical machinery needed to safely model fluid dynamics and particle physics near data-crashing singularities, analyze violent system discontinuities like supersonic shockwaves or digital circuit signal instability, and drive the real-time automated telemetry powering autonomous vehicles, automated chemical reactors, and high-frequency financial algorithms.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Disentangling Limit Behavior from Function Values (The Concept of Approaching)
> [!note]- Theory & Derivations
> ## Disentangling Limit Behavior from Function Values (The Concept of "Approaching")
> 
> The fundamental hurdle when transitioning from algebra to calculus is shifting your mindset from a static coordinate ($x = c$) to a dynamic trend ($x \to c$). You must master the skill of separating the **visual path** a graph travels along from its **final destination** (which may be a solid point, an open hole, or completely undefined).
> 
> ---
> 
> ### 1. Conceptual Framework
> 
> In algebra, you are trained to look exactly at an input to find an output. In calculus, **limits look around the target, never at it.**
> 
> #### Core Definition
> We write the two-sided limit notation as:
> $$\lim_{x \to a} f(x) = L$$
> 
> This mathematical statement reads: *"The limit of $f(x)$ as $x$ approaches $a$ equals $L$."* According to your guided notes, this is true if we can make the values of $f(x)$ arbitrarily close to a single real number $L$ by taking $x$ sufficiently close to $a$, **but not equal to $a$**. 
> 
> #### The Multi-Representational Strategy
> To master this skill, you must evaluate this "approaching behavior" using two different perspectives:
> 1. **Arithmetically (Numerical Approach):** Setting up a table of inputs that incrementally sandwich the target value from both the left side ($x \to a^-$) and the right side ($x \to a^+$) using small decimal steps.
> 2. **Visually (Graphical Approach):** Placing your fingers on the left and right sides of the curve and tracing them inward toward the vertical line $x = a$ to observe what height ($y$-value) they are targeting.
> 
> ---
> 
> ### 2. Guided Note Concepts & Explanations
> 
> #### The Indeterminate Hole
> When evaluating a rational function like $f(x) = \frac{x^2 - 4}{x - 2}$ at the target value $a = 2$, direct algebraic evaluation fails entirely:
> $$f(2) = \frac{2^2 - 4}{2 - 2} = \frac{0}{0}$$
> 
> The result $\frac{0}{0}$ is called an **indeterminate form**. It tells us that the exact function value $f(2)$ is completely **undefined** (creating a hole in the graph). However, the limit still exists because the path on either side of $x = 2$ remains completely predictable. 
> 
> By factoring the numerator as a difference of squares, we can analyze the structural path of the function for all points where $x \neq 2$:
> $$f(x) = \frac{(x - 2)(x + 2)}{x - 2} = x + 2 \quad (\text{when } x \neq 2)$$
> 
> This reveals that the graph behaves exactly like the line $y = x + 2$, except it contains a single missing point (a singularity) at $x = 2$.
> 
> ---
> 
> ### 3. Step-by-Step Example Problems
> 
> #### Example A: [[Numerical Evaluation (The Estimation Table)]]
> 
> 
> ---
> 
> #### Example B: [[Graphical Evaluation (Holes vs. Solid Dots)]]


#### Worked Example
1. Find the average rate of change of the following functions over the given interval


**(a)** $f(x) = 3x^2 - 3x + 5$ on $[-1, 2]$

**(b)** $g(t) = 3\cos^2(t)$ on $[0, \frac{\pi}{6}]$

---

> [!check]- Worked Solution
> Problem 1
> The **average rate of change** of a function $f(x)$ over an interval $[a, b]$ is given by the formula: $$\text{Average Rate of Change} = \frac{f(b) - f(a)}{b - a}$$ This represents the slope of the secant line connecting the points $(a, f(a))$ and $(b, f(b))$. --- ### (a) $f(x) = 3x^2 - 3x + 5$ on $[-1, 2]$ Here, $a = -1$ and $b = 2$.
> **Step 1: Evaluate the function at the endpoints.** * For $x = 2$: $$f(2) = 3(2)^2 - 3(2) + 5$$ $$f(2) = 3(4) - 6 + 5$$ $$f(2) = 12 - 6 + 5 = 11$$ * For $x = -1$: $$f(-1) = 3(-1)^2 - 3(-1) + 5$$ $$f(-1) = 3(1) + 3 + 5$$ $$f(-1) = 3 + 3 + 5 = 11$$
> **Step 2: Plug these values into the average rate of change formula.** $$\text{Average Rate of Change} = \frac{f(2) - f(-1)}{2 - (-1)}$$ $$\text{Average Rate of Change} = \frac{11 - 11}{2 + 1} = \frac{0}{3} = 0$$
> **Final Answer:** $$0$$
> ---
> ### (b) $g(t) = 3\cos^2(t)$ on $\left[0, \frac{\pi}{6}\right]$ Here, $a = 0$ and $b = \frac{\pi}{6}$.
> **Step 1: Evaluate the function at the endpoints.** * For $t = \frac{\pi}{6}$: $$g\left(\frac{\pi}{6}\right) = 3\left[\cos\left(\frac{\pi}{6}\right)\right]^2$$ Since $\cos\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2}$: $$g\left(\frac{\pi}{6}\right) = 3\left(\frac{\sqrt{3}}{2}\right)^2 = 3\left(\frac{3}{4}\right) = \frac{9}{4}$$ * For $t = 0$: $$g(0) = 3[\cos(0)]^2$$ Since $\cos(0) = 1$: $$g(0) = 3(1)^2 = 3$$
> **Step 2: Plug these values into the formula.** $$\text{Average Rate of Change} = \frac{g\left(\frac{\pi}{6}\right) - g(0)}{\frac{\pi}{6} - 0}$$ $$\text{Average Rate of Change} = \frac{\frac{9}{4} - 3}{\frac{\pi}{6}}$$ Simplify the numerator $\left(\frac{9}{4} - \frac{12}{4} = -\frac{3}{4}\right)$: $$\text{Average Rate of Change} = \frac{-\frac{3}{4}}{\frac{\pi}{6}}$$ Multiply by the reciprocal of the denominator: $$\text{Average Rate of Change} = -\frac{3}{4} \cdot \frac{6}{\pi} = -\frac{18}{4\pi}$$ Reduce the fraction: $$\text{Average Rate of Change} = -\frac{9}{2\pi}$$
> **Final Answer:** $$-\frac{9}{2\pi}$$

#### Active Practice Problem
2. For the graph of $f(x)$ given below, find the following values, if they exist. If it does not exist, state "DNE".

![[02 - An Introduction to Limits Learning Activity Image 1.png]]



| | | |
| :----- | :----- | :----- |
| **(a)** $f(-1)$    | **(d)** $\lim_{x \to 4^+} f(x)$    | **(g)** $\lim_{x \to -4^-} f(x)$    |
| **(b)** $\lim_{x \to -1} f(x)$    | **(e)** $\lim_{x \to 4^-} f(x)$    | **(h)** $\lim_{x \to -4} f(x)$    |
| **(c)** $f(4)$    | **(f)** $\lim_{x \to 4} f(x)$    | **(i)** $\lim_{x \to -5} f(x)$    |

---

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Problem 2
> When analyzing limits and function values from a graph: * **Function Values $f(c)$:** Look for the y-value of the solid dot ($\bullet$) exactly at $x = c$. An open circle ($\circ$) means the function is not defined at that specific point.
> **One-Sided Limits ($\lim_{x \to c^-}$ or $\lim_{x \to c^+}$):** Trace along the curve approaching $x = c$ from either the left side ($-$) or the right side ($+$).
> **Two-Sided Limits ($\lim_{x \to c}$):** The overall limit exists if and only if both the left-hand and right-hand limits approach the exact same y-value.
> ---
> ### (a) Evaluate: $f(-1)$
> **Step:** Locate $x = -1$ on the horizontal axis and look vertically. There is an open circle at $y = 2$ and a solid dot down at $y = 1$.
> **Answer:** $$f(-1) = 1$$
> ### (b) Evaluate: $\lim_{x \to -1} f(x)$
> **Step:** Trace the curve toward $x = -1$ from the left side and from the right side. Both paths lead directly to the open circle located at a height of $y = 2$.
> **Answer:** $$\lim_{x \to -1} f(x) = 2$$
> ### (c) Evaluate: $f(4)$
> **Step:** Find $x = 4$ on the horizontal axis. Looking vertically, there is a solid dot at a height of $y = -2$ and an open circle down at $y = -3$. *
> **Answer:** $$f(4) = -2$$
> ---
> ### (d) Evaluate: $\lim_{x \to 4^+} f(x)$
> **Step:** Move along the graph toward $x = 4$ from the **right side** (values greater than 4). The curved line guides you to the solid dot at a height of $y = -2$. *
> **Answer:** $$\lim_{x \to 4^+} f(x) = -2$$
> ### (e) Evaluate: $\lim_{x \to 4^-} f(x)$
> **Step:** Move along the graph toward $x = 4$ from the **left side** (values less than 4). The long diagonal line goes straight down to the open circle at a height of $y = -3$. *
> **Answer:** $$\lim_{x \to 4^-} f(x) = -3$$
> ### (f) Evaluate: $\lim_{x \to 4} f(x)$
> **Step:** Compare the left-hand limit from part (e) and the right-hand limit from part (d). Because the left-hand limit ($-3$) does not equal the right-hand limit ($-2$), the overall two-sided limit does not exist. *
> **Answer:** $$\lim_{x \to 4} f(x) = \text{DNE}$$
> ---
> ### (g) Evaluate: $\lim_{x \to -4^-} f(x)$
> **Step:** Follow the curve toward $x = -4$ from the **left side**. The graph goes up and lands on the solid dot at a height of $y = 3$. *
> **Answer:** $$\lim_{x \to -4^-} f(x) = 3$$
> ### (h) Evaluate: $\lim_{x \to -4} f(x)$
> **Step:** Check both sides of $x = -4$. As seen in part (g), the left side approaches $y = 3$. If you approach $x = -4$ from the right side, the curve goes up to the open circle at $y = 4$. Since $3 \neq 4$, the overall limit does not exist. *
> **Answer:** $$\lim_{x \to -4} f(x) = \text{DNE}$$
> ### (i) Evaluate: $\lim_{x \to -5} f(x)$
> **Step:** Find $x = -5$ on the horizontal axis. The curve passes smoothly through this area without any breaks or holes. From both directions, the graph approaches a height of exactly $y = 2$. *
> **Answer:** $$\lim_{x \to -5} f(x) = 2$$

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Diagnosing and Classifying Why a Limit Fails to Exist (DNE)
> [!note]- Theory & Derivations
> ## Diagnosing and Classifying Why a Limit Fails to Exist (DNE)
> 
> A critical skill in calculus is identifying not just *when* a limit fails to exist, but diagnosing the exact mathematical or structural reason *why* the function breaks down at that boundary. 
> 
> ---
> 
> ### 1. Conceptual Framework
> 
> According to your guided notes, a standard two-sided limit $\lim_{x \to a} f(x)$ describes what happens as a function approaches an $x$-value from both the left and right sides. 
> 
> #### The One-Sided Foundation
> * **Left-Hand Limit:** $\lim_{x \to a^-} f(x) = L_1$ represents the value $f(x)$ approaches as $x$ gets close to $a$ from inputs strictly *less than* $a$.
> * **Right-Hand Limit:** $\lim_{x \to a^+} f(x) = L_2$ represents the value $f(x)$ approaches as $x$ gets close to $a$ from inputs strictly *greater than* $a$.
> 
> #### The Requirement for Existence
> The absolute rule for limit existence states:
> $$\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = L \text{ AND } \lim_{x \to a^+} f(x) = L$$
> 
> If the one-sided directional paths do not point to the exact same finite real number, or if the function exhibits unstable behavior, the two-sided limit fails to exist, and we write **DNE**.
> 
> ---
> 
> ### 2. The Three Classifications of Limit Failure (DNE)
> 
> Your notes outline three structural behaviors that cause a limit to fail to exist:
> 
> #### Classification 1: Non-Matching One-Sided Limits (The Jump Discontinuity)
> * **The Math:** $\lim_{x \to a^-} f(x) = L_1$ and $\lim_{x \to a^+} f(x) = L_2$, where $L_1 \neq L_2$.
> * **The Behavior:** The curve approaches one specific height from the left but physically gaps or "jumps" to a completely different height on the right side. 
> 
> #### Classification 2: Unbounded Behavior (The Vertical Asymptote)
> * **The Math:** $\lim_{x \to a^-} f(x) = \pm\infty$ or $\lim_{x \to a^+} f(x) = \pm\infty$.
> * **The Behavior:** As $x$ gets closer to $a$, the function values grow infinitely large or infinitely small rather than settling on a single real number value. The graph shoots straight up or straight down along a vertical line.
> 
> #### Classification 3: Wildly Oscillating Behavior (The Volatile Swing)
> * **The Math:** The function values oscillate infinitely fast between two values as $x \to a$.
> * **The Behavior:** The graph fluctuates up and down so rapidly near the target value that it becomes a solid blur of outputs and never stabilizes onto one unique number
> 
> ---
> 
> ### 3. Step-by-Step Example Problems from the Notes
> 
> #### Example A: [[Analyzing a Jump Discontinuity]]
> 
> ---
> 
> #### Example B: [[Analyzing Unbounded Behavior]]
> 
> 
> ---
> 
> #### Example C: [[Analyzing Wildly Oscillating Behavior]]


#### Active Practice Problem
3. If a rock is thrown upward on the planet Mars with a velocity of $20\text{ m/s}$, its height in meters $t$ seconds later is given by $s(t) = 20t - 2t^2$.

**(a)** Find the average velocity of the rock over the given time intervals:
* **i.** $[1, 1.1]$
* **ii.** $[1, 1.01]$
* **iii.** $[1, 1.001]$
* **iv.** $[1, 1.0001]$

**(b)** Estimate the instantaneous velocity when $t = 1$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Problem 3
> The **average velocity** over a time interval $[a, b]$ is calculated using the formula: $$\text{Average Velocity} = \frac{s(b) - s(a)}{b - a}$$ Since every interval starts at $a = 1$, let's first calculate the initial height position $s(1)$: $$s(1) = 20(1) - 2(1)^2 = 20 - 2 = 18\text{ meters}$$
> ---
> ### (a) Find the average velocity of the rock over the given time intervals:
> #### i. $[1, 1.1]$
> **Step 1:** Evaluate $s(1.1)$ $$s(1.1) = 20(1.1) - 2(1.1)^2 = 22 - 2(1.21) = 22 - 2.42 = 19.58\text{ m}$$
> **Step 2:** Calculate average velocity $$\text{Average Velocity} = \frac{19.58 - 18}{1.1 - 1} = \frac{1.58}{0.1} = 15.8\text{ m/s}$$
> #### ii. $[1, 1.01]$
> **Step 1:** Evaluate $s(1.01)$ $$s(1.01) = 20(1.01) - 2(1.01)^2 = 20.2 - 2(1.0201) = 20.2 - 2.0402 = 18.1598\text{ m}$$
> **Step 2:** Calculate average velocity $$\text{Average Velocity} = \frac{18.1598 - 18}{1.01 - 1} = \frac{0.1598}{0.01} = 15.98\text{ m/s}$$
> #### iii. $[1, 1.001]$
> **Step 1:** Evaluate $s(1.001)$ $$s(1.001) = 20(1.001) - 2(1.001)^2 = 20.02 - 2(1.002001) = 20.02 - 2.004002 = 18.015998\text{ m}$$
> **Step 2:** Calculate average velocity $$\text{Average Velocity} = \frac{18.015998 - 18}{1.001 - 1} = \frac{0.015998}{0.001} = 15.998\text{ m/s}$$
> #### iv. $[1, 1.0001]$
> **Step 1:** Evaluate $s(1.0001)$ $$s(1.0001) = 20(1.0001) - 2(1.0001)^2 = 20.002 - 2(1.00020001) = 20.002 - 2.00040002 = 18.00159998\text{ m}$$
> **Step 2:** Calculate average velocity $$\text{Average Velocity} = \frac{18.00159998 - 18}{1.0001 - 1} = \frac{0.00159998}{0.0001} = 15.9998\text{ m/s}$$
> ---
> ### (b) Estimate the instantaneous velocity when $t = 1$.
> Instantaneous velocity is the limit of the average velocities as the time interval shrinks closer to zero ($\Delta t \to 0$).
> Looking at the patterns generated in part (a):
> Over $[1, 1.1]$, average velocity $= 15.8\text{ m/s}$
> Over $[1, 1.01]$, average velocity $= 15.98\text{ m/s}$
> Over $[1, 1.001]$, average velocity $= 15.998\text{ m/s}$
> Over $[1, 1.0001]$, average velocity $= 15.9998\text{ m/s}$
> As the second endpoint gets closer to $1$, the average velocity values are clearly approaching a distinct whole number value.
> **Final Estimated Value:** $$16\text{ m/s}$$

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Executing the Limiting Process to Turn Average Rates into Instantaneous Rates
> [!note]- Theory & Derivations
> ## Executing the "Limiting Process" to Turn Average Rates into Instantaneous Rates
> 
> This skill represents the core mechanical transition from algebra to differential calculus. You must master taking a static rate calculated over a wide interval and applying a shrinking limit process ($\Delta x \to 0$) to uncover real-time, instantaneous measurements.
> 
> ---
> 
> ### 1. Conceptual Framework
> 
> In algebra, you learned to find the constant slope of a straight line. In calculus, curves change direction constantly. To evaluate how fast a function is changing at one singular instant, we must use a limit.
> 
> #### The Mathematical Engine
> 1. **Average Rate of Change:** Measures the change across a real, measurable interval between two distinct points $P(x_1, y_1)$ and $Q(x_2, y_2)$. Geometrically, this forms a **secant line** cutting through the curve
>    $$\text{Average Rate of Change} = \frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{y_2 - y_1}{x_2 - x_1}$$
> 
> 2. **Instantaneous Rate of Change:** Measures the rate of change at one specific point ($x_0$). Geometrically, this forms a **tangent line** that brushes past the curve, sharing its exact direction at that exact spot
> 
> #### The Connection via Limits
> We cannot evaluate an instantaneous rate simply by setting the interval length ($h$) to zero because division by zero is mathematically impossible:
> $$\text{Instantaneous Rate} = \frac{f(x_0 + 0) - f(x_0)}{0} = \frac{0}{0} \quad \text{(Undefined Error)}$$
> 
> Instead, we find the instantaneous rate of change by computing the **limit** of the secant slopes as the interval distance ($h$) gets infinitely small and approaches zero:
> $$\text{Instantaneous Rate} = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$
> 
> 
> 
> ---
> 
> ### 2. Guided Note Concepts & Explanations
> 
> #### Moving Point Analysis
> To visualize this concept, imagine fixing a point $P$ on a curve and choosing a second point $Q$ further along the curve. 
> * Compute the slope of the secant line passing through $P$ and $Q$.
> * Slide point $Q$ along the curve toward point $P$. 
> * As the distance shrinks, the secant lines rotate and align with the tangent line at $P$.
> * The sequence of secant slopes ($m_{PQ}$) approaches a unique number, which is the exact slope of the tangent line ($m_P$).
> 
> ---
> 
> ### 3. Step-by-Step Example Problems from the Notes
> 
> #### Example A: [[Calculating Average Rate of Change]]
> 
> ---
> 
> #### Example B: [[The Shifting Interval Process (Kinematics)]]


#### Active Practice Problem
4. Complete the table given below for $f(x) = \frac{x^2 - 4}{x - 2}$, then make a conclusion on the given limits.

| $x$ | $1.9$ | $1.99$ | $1.999$ | $2.001$ | $2.01$ | $2.1$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $f(x)$ | | | | | | |

  
**(a)** $\lim_{x \to 2^-} \frac{x^2 - 4}{x - 2}$

**(b)** $\lim_{x \to 2^+} \frac{x^2 - 4}{x - 2}$

**(c)** $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$

**(d)** Why can't we just find $f(2)$ to determine $\lim_{x \to 2} f(x)$?

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Problem 4
> To fill out the table, we look for a way to simplify the function for all points where $x \neq 2$. We can factor the numerator as a difference of squares: $$f(x) = \frac{(x - 2)(x + 2)}{x - 2}$$
> For any value of $x$ that is not exactly $2$, the term $(x - 2)$ cancels out completely: $$f(x) = x + 2 \quad (\text{for } x \neq 2)$$ Using this simplified linear form ($f(x) = x + 2$), we can easily compute the missing $f(x)$ table values:
> * $f(1.9) = 1.9 + 2 = 3.9$
> * $f(1.99) = 1.99 + 2 = 3.99$
> * $f(1.999) = 1.999 + 2 = 3.999$
> * $f(2.001) = 2.001 + 2 = 4.001$
> * $f(2.01) = 2.01 + 2 = 4.01$
> * $f(2.1) = 2.1 + 2 = 4.1$
> ---
> ### Completed Reference Table
> | $x$ | $1.9$ | $1.99$ | $1.999$ | $2.001$ | $2.01$ | $2.1$ |
> | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | **$f(x)$** | $3.9$ | $3.99$ | $3.999$ | $4.001$ | $4.01$ | $4.1$ |
> ---
> ### (a) Evaluate: $\lim_{x \to 2^-} \frac{x^2 - 4}{x - 2}$
> **Step:** Look at the outputs as $x$ approaches $2$ from the left side (values slightly less than 2: $1.9 \to 1.99 \to 1.999$). The values are $3.9 \to 3.99 \to 3.999$, which are getting closer and closer to $4$.
> **Answer:** $$\lim_{x \to 2^-} \frac{x^2 - 4}{x - 2} = 4$$
> ### (b) Evaluate: $\lim_{x \to 2^+} \frac{x^2 - 4}{x - 2}$
> **Step:** Look at the outputs as $x$ approaches $2$ from the right side (values slightly greater than 2: $2.1 \to 2.01 \to 2.001$). The values are $4.1 \to 4.01 \to 4.001$, which are also getting closer and closer to $4$. *
> **Answer:** $$\lim_{x \to 2^+} \frac{x^2 - 4}{x - 2} = 4$$
> ### (c) Evaluate: $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$
> **Step:** Since the left-hand limit and the right-hand limit both approach the exact same value of $4$, the overall two-sided limit exists and equals that value.
> **Answer:** $$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$
> ---
> ### (d) Why can't we just find $f(2)$ to determine $\lim_{x \to 2} f(x)$?
> **Answer:** We cannot use direct substitution because plugging $x = 2$ into the original function yields an undefined expression: $$f(2) = \frac{2^2 - 4}{2 - 2} = \frac{0}{0}$$
> The fraction $\frac{0}{0}$ is an **indeterminate form**, meaning the function value itself does not exist at that single point (there is a hole in the graph). Limits evaluate the behavior of a function as $x$ gets infinitely *close* to a value, not what happens *at* that exact value. Therefore, while $f(2)$ is undefined, the limit as $x \to 2$ is still $4$.

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 02 and overview of homework Knewton: *Introduction to Limits*.
