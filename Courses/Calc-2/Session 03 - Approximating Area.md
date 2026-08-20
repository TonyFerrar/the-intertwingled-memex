---
title: "Session 03 - Approximating Area"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 03 - Approximating Area

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Asymptotic Thinking (Connecting Approximations to the Definite Integral)
> - Interval Partitioning and Sample Point Selection
> - Summation Mechanics and Function Evaluation

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In real-world engineering, Riemann sums and definite integrals are vital for calculating the total accumulation of a quantity when its rate of change is constantly fluctuating. Aerospace engineers integrate variable thrust and atmospheric drag to determine a rocket's work and trajectory, while civil engineers integrate varying fluid pressure to calculate the total hydrostatic force acting against a dam. Similarly, electrical engineers integrate fluctuating power consumption over time to monitor grid energy usage, and modern simulation software (like MATLAB or ANSYS) utilizes computerized, high-speed Riemann sums to break complex fluid dynamics or structural stresses into millions of microscopic pieces for precise numerical analysis.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Asymptotic Thinking (Connecting Approximations to the Definite Integral)
> [!note]- Theory & Derivations
> Welcome to the study guide for **Skill 3**. This is the ultimate conceptual and algebraic destination of the unit. After partitioning domains (Skill 1) and executing finite arithmetic sums (Skill 2), we now transition from rough approximations to exact calculations. This guide covers how to push the number of rectangles to infinity ($n \to \infty$), completely eliminating geometric error and transforming discrete Riemann sums into continuous definite integrals.
> 
> ---
> 
> ## 1. Conceptual Notes & Core Theory
> 
> ### A. The Principle of Infinite Refinement
> When we use a finite number of rectangles ($n$) to approximate the area under a curve, we are always left with geometric errors—either uncovered gaps (underestimation) or overlapping blocks (overestimation). 
> 
> However, as we increase $n$, the width of each rectangle ($\Delta x$) shrinks toward zero. As $\Delta x$ gets smaller, the tops of the rectangles match the continuous slope of the curve much more accurately. Asymptotic thinking requires us to look at what happens at the extreme edge of this process: if we let the number of rectangles approach infinity, the width of each rectangle becomes infinitely thin, and the total geometric error drops to exactly zero.
> 
> ### B. The Formal Definition of the Definite Integral
> The definite integral is mathematically defined as the limit of a Riemann sum as the number of subintervals approaches infinity. If a function $f(x)$ is continuous on the interval $[a, b]$, the limit will yield the exact, true area under the curve:
> $$\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(c_i) \Delta x$$
> 
> * **The Integral Sign ($\int$):** An elongated "S" that represents a continuous, infinite sum.
> * **Limits of Integration ($a$ and $b$):** Define the starting and ending boundaries on the $x$-axis.
> * **The Differential ($dx$):** Represents the infinitely small width ($\Delta x$) of a continuous slice.
> 
> ### C. Algebraic Limit Strategies
> To solve these infinite limits without drawing a graph, we rely on power sum identities to collapse the Sigma notation into a standard polynomial expression in terms of $n$. Once the sum is written as a rational expression (a polynomial fraction), we take the limit as $n \to \infty$ by focusing on the **leading coefficients** of the highest degree terms:
> $$\lim_{n \to \infty} \frac{An^k + \dots}{Bn^k + \dots} = \frac{A}{B}$$
> 
> ---
> 
> ## 2. Pure Mathematics Sample Problems
> 
> ### Problem 1: Setting up the Limit Definition
> **Question:** Write down—but do not evaluate—the formal limit expression of a Right-Hand Riemann sum for the definite integral $\int_{1}^{4} (2x + 1) \, dx$.
> 
> **Solution:**
> 1. **Identify interval components:** $a = 1$, $b = 4$, and $f(x) = 2x + 1$.
> 2. **Find the expression for $\Delta x$:**
>    $$\Delta x = \frac{b - a}{n} = \frac{4 - 1}{n} = \frac{3}{n}$$
> 3. **Find the expression for right endpoints ($x_i$):**
>    $$x_i = a + i\Delta x = 1 + i\left(\frac{3}{n}\right) = 1 + \frac{3i}{n}$$
> 4. **Evaluate the function at $x_i$:** Substitute $x_i$ into $f(x)$:
>    $$f(x_i) = 2\left(1 + \frac{3i}{n}\right) + 1 = 2 + \frac{6i}{n} + 1 = 3 + \frac{6i}{n}$$
> 5. **Assemble the limit definition:**
>    $$\int_{1}^{4} (2x + 1) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \Delta x = \lim_{n \to \infty} \sum_{i=1}^{n} \left(3 + \frac{6i}{n}\right) \frac{3}{n}$$
> 
> ### Problem 2: Evaluating an Infinite Riemann Sum Limit
> **Question:** Find the exact value of the area under the curve $f(x) = x$ on the interval $[0, 3]$ by evaluating the limit of its Right-Hand Riemann sum as $n \to \infty$. Use the identity: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$.
> 
> **Solution:**
> 1. **Set up the pieces:** $\Delta x = \frac{3-0}{n} = \frac{3}{n}$ and $x_i = 0 + i\left(\frac{3}{n}\right) = \frac{3i}{n}$.
> 2. **Build the sum expression:**
>    $$\text{Sum} = \sum_{i=1}^{n} f(x_i)\Delta x = \sum_{i=1}^{n} \left(\frac{3i}{n}\right) \frac{3}{n} = \sum_{i=1}^{n} \frac{9i}{n^2}$$
> 3. **Factor out constants from the summation index ($i$):**
>    $$\text{Sum} = \frac{9}{n^2} \sum_{i=1}^{n} i$$
> 4. **Substitute the given identity:**
>    $$\text{Sum} = \frac{9}{n^2} \cdot \frac{n(n+1)}{2} = \frac{9n(n+1)}{2n^2} = \frac{9n^2 + 9n}{2n^2}$$
> 5. **Evaluate the limit as $n \to \infty$:**
>    $$\text{Area} = \lim_{n \to \infty} \frac{9n^2 + 9n}{2n^2} = \frac{9}{2} = 4.5$$
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Application 1: [[Aerospace Engineering (Rocket Kinetic Energy and Work)]]
> [[Aerospace Engineering (Rocket Kinetic Energy and Work) Solution]]
> 
> 
> ---
> 
> ### Application 2: [[Civil Engineering (Exact Hydrostatic Force against a Concrete Dam)]]
> [[Civil Engineering (Exact Hydrostatic Force against a Concrete Dam) Solution]]
> 
> 
> ---
> 
> ### Application 3: [[Electrical Engineering (Continuous Grid Energy Content)]]
> [[Electrical Engineering (Continuous Grid Energy Content) Solution]]


#### Active Practice Problem
Question 1
Use the Right-Hand Sum (RHS) Riemann sum method to approximate the area under the graph of $f(x) = x^2 - 1$ from $x = 0$ to $x = 2$ using:

(a) $n = 4$ rectangles
![[03 - Approximating Area LA Image 1.png]]

(b) $n = 10$ rectangles  
![[03 - Approximating Area LA Image 2.png]]

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ### The General Setup
> 
> For any Right-Hand Sum (RHS) Riemann sum on an interval $[a, b]$ partitioned into $n$ equal subintervals:
> 
> 1. **Find the width of each rectangle ($\Delta x$):**
> 
> $$\Delta x = \frac{b - a}{n}$$
> 
> 2. **Find the right endpoints ($x_i$):**
> 
> $$x_i = a + i \cdot \Delta x \quad \text{for } i = 1, 2, \dots, n$$
> 
> 3. **Calculate the Riemann Sum ($R_n$):**
> 
> $$R_n = \sum_{i=1}^{n} f(x_i) \cdot \Delta x = \Delta x \cdot [f(x_1) + f(x_2) + \dots + f(x_n)]$$
> 
> 
> For this problem, our function is $f(x) = x^2 - 1$ over the interval $[0, 2]$, meaning **$a = 0$** and **$b = 2$**.
> 
> ### Part (a) Approximation using $n = 4$ rectangles
> 
> **Step 1: Calculate the width ($\Delta x$)**
> 
> $$\Delta x = \frac{2 - 0}{4} = 0.5$$
> 
> **Step 2: Identify the 4 right endpoints ($x_i$)**
> 
> Starting from $a = 0$, add $\Delta x = 0.5$ successively:
> 
> - $x_1 = 0.5$
> 
> - $x_2 = 1.0$
> 
> - $x_3 = 1.5$
> 
> - $x_4 = 2.0$
> 
> 
> **Step 3: Evaluate $f(x) = x^2 - 1$ at each right endpoint**
> 
> - $f(0.5) = (0.5)^2 - 1 = 0.25 - 1 = -0.75$
> 
> - $f(1.0) = (1.0)^2 - 1 = 1 - 1 = 0$
> 
> - $f(1.5) = (1.5)^2 - 1 = 2.25 - 1 = 1.25$
> 
> - $f(2.0) = (2.0)^2 - 1 = 4 - 1 = 3$
> 
> 
> **Step 4: Compute the Right-Hand Sum ($R_4$)**
> 
> $$R_4 = \Delta x \cdot [f(0.5) + f(1.0) + f(1.5) + f(2.0)]$$
> 
> $$R_4 = 0.5 \cdot [-0.75 + 0 + 1.25 + 3]$$
> 
> $$R_4 = 0.5 \cdot [3.5] = 1.75$$
> 
> **Answer for (a):** The area approximation is **1.75**.
> 
> ### Part (b) Approximation using $n = 10$ rectangles
> 
> **Step 1: Calculate the width ($\Delta x$)**
> 
> $$\Delta x = \frac{2 - 0}{10} = 0.2$$
> 
> **Step 2: Identify the 10 right endpoints ($x_i$)**
> 
> Starting from $a = 0$, add $\Delta x = 0.2$ successively:
> 
> $$\{0.2, \, 0.4, \, 0.6, \, 0.8, \, 1.0, \, 1.2, \, 1.4, \, 1.6, \, 1.8, \, 2.0\}$$
> 
> **Step 3: Evaluate $f(x) = x^2 - 1$ at each right endpoint**
> 
> - $f(0.2) = (0.2)^2 - 1 = 0.04 - 1 = -0.96$
> 
> - $f(0.4) = (0.4)^2 - 1 = 0.16 - 1 = -0.84$
> 
> - $f(0.6) = (0.6)^2 - 1 = 0.36 - 1 = -0.64$
> 
> - $f(0.8) = (0.8)^2 - 1 = 0.64 - 1 = -0.36$
> 
> - $f(1.0) = (1.0)^2 - 1 = 1.00 - 1 = 0$
> 
> - $f(1.2) = (1.2)^2 - 1 = 1.44 - 1 = 0.44$
> 
> - $f(1.4) = (1.4)^2 - 1 = 1.96 - 1 = 0.96$
> 
> - $f(1.6) = (1.6)^2 - 1 = 2.56 - 1 = 1.56$
> 
> - $f(1.8) = (1.8)^2 - 1 = 3.24 - 1 = 2.24$
> 
> - $f(2.0) = (2.0)^2 - 1 = 4.00 - 1 = 3.00$
> 
> 
> **Step 4: Compute the Right-Hand Sum ($R_{10}$)**
> 
> First, sum up all of the evaluated outputs:
> 
> $$\text{Sum} = (-0.96) + (-0.84) + (-0.64) + (-0.36) + 0 + 0.44 + 0.96 + 1.56 + 2.24 + 3.00 = 5.4$$
> 
> Now, multiply the sum of the heights by the width ($\Delta x = 0.2$):
> 
> $$R_{10} = 0.2 \cdot 5.4 = 1.08$$
> 
> **Answer for (b):** The area approximation is **1.08**.

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Interval Partitioning and Sample Point Selection
> [!note]- Theory & Derivations
> Welcome to the foundational study guide for **Skill 1**. Before any area or total accumulation can be calculated under a curve, a continuous function must be systematically broken down into discrete, manageable blocks. This guide covers the mathematical theory of interval partitioning and sample point selection, followed by pure math practice and real-world engineering applications.
> 
> ---
> 
> ## 1. Conceptual Notes & Core Theory
> 
> ### A. The Geometry of Partitioning
> When finding the area under a curve $y = f(x)$ over a closed interval $[a, b]$, we cannot evaluate the entire continuous shape simultaneously. Instead, we chop the horizontal domain into $n$ subintervals of equal width. 
> 
> * **Subinterval Width ($\Delta x$):** The total distance of the domain $(b - a)$ divided by the number of desired rectangles ($n$).
> $$\Delta x = \frac{b - a}{n}$$
> 
> ### B. Defining the Grid Points
> The division of the interval creates a set of boundary markers along the $x$-axis called **grid points**. We label these boundaries from $x_0$ to $x_n$:
> * $x_0 = a$ (The starting boundary)
> * $x_1 = a + 1(\Delta x)$
> * $x_2 = a + 2(\Delta x)$
> * $x_i = a + i(\Delta x)$
> * $x_n = a + n(\Delta x) = b$ (The final boundary)
> 
> This splits our continuous domain into $n$ individual subintervals: $[x_0, x_1], [x_1, x_2], [x_2, x_3], \dots, [x_{i-1}, x_i], \dots, [x_{n-1}, x_n]$.
> 
> ### C. Sample Point Selection ($c_i$)
> To build a rectangle over any subinterval, we must choose a single $x$-value within that subinterval to plug into the function $f(x)$. The resulting output, $f(c_i)$, establishes the **height** of that rectangle. There are three primary methods for choosing this point ($c_i$):
> 
> 1. **Left-Hand Sum (LHS):** We choose the left boundary of each subinterval. 
>    * Index: $i$ runs from $0$ to $n-1$.
>    * Formula: $c_i = x_i = a + i(\Delta x)$
>    
> 2. **Right-Hand Sum (RHS):** We choose the right boundary of each subinterval.
>    * Index: $i$ runs from $1$ to $n$.
>    * Formula: $c_i = x_i = a + i(\Delta x)$
>    
> 3. **Midpoint Sum (MPS):** We choose the exact geometric center of each subinterval.
>    * Index: $i$ runs from $1$ to $n$.
>    * Formula: $c_i = \frac{x_{i-1} + x_i}{2}$
> 
> ---
> 
> ## 2. Pure Mathematics Sample Problems
> 
> ### Problem 1: Set up a Partition Grid
> **Question:** Partition the interval $[3, 7]$ into $n = 8$ equal subintervals. 
> 1. Calculate the subinterval width ($\Delta x$).
> 2. List out all grid points ($x_0$ through $x_8$).
> 3. Identify the sample points ($c_i$) if using the **Left-Hand Sum** method.
> 
> **Solution:**
> 1. **Calculate $\Delta x$:**
>    $$\Delta x = \frac{7 - 3}{8} = \frac{4}{8} = 0.5$$
> 2. **List all grid points:** Add $0.5$ sequentially starting at $a = 3$:
>    * $x_0 = 3.0$
>    * $x_1 = 3.5$
>    * $x_2 = 4.0$
>    * $x_3 = 4.5$
>    * $x_4 = 5.0$
>    * $x_5 = 5.5$
>    * $x_6 = 6.0$
>    * $x_7 = 6.5$
>    * $x_8 = 7.0$
> 3. **LHS Sample Points ($c_i$):** Take the left endpoint of each of the 8 subintervals (from $x_0$ up to $x_7$):
>    $$\text{LHS Sample Points } \{c_0, \dots, c_7\} = \{3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5\}$$
> 
> ### Problem 2: Midpoint Coordinate Extraction
> **Question:** Given the function $f(x) = x^3$ over the interval $[0, 2]$, determine the sample points ($c_i$) and the corresponding rectangle heights $f(c_i)$ for a Midpoint Riemann Sum with $n = 4$.
> 
> **Solution:**
> 1. **Calculate $\Delta x$:**
>    $$\Delta x = \frac{2 - 0}{4} = 0.5$$
> 2. **Find subintervals:** The subintervals are $[0, 0.5]$, $[0.5, 1.0]$, $[1.0, 1.5]$, and $[1.5, 2.0]$.
> 3. **Find Midpoints ($c_i$):** Calculate the exact middle value of each subinterval:
>    * $m_1 = \frac{0 + 0.5}{2} = 0.25$
>    * $m_2 = \frac{0.5 + 1.0}{2} = 0.75$
>    * $m_3 = \frac{1.0 + 1.5}{2} = 1.25$
>    * $m_4 = \frac{1.5 + 2.0}{2} = 1.75$
> 4. **Evaluate Heights $f(c_i)$:** Plug each midpoint into $f(x) = x^3$:
>    * $f(0.25) = (0.25)^3 = 0.015625$
>    * $f(0.75) = (0.75)^3 = 0.421875$
>    * $f(1.25) = (1.25)^3 = 1.953125$
>    * $f(1.75) = (1.75)^3 = 5.359375$
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Application 1: [[Aerospace Engineering (Rocket Thrust Tracking)]]
> [[Aerospace Engineering (Rocket Thrust Tracking) Solution]]
> 
> ---
> 
> ### Application 2: [[Civil Engineering (Hydrostatic Pressure on Dams)]]
> [[Civil Engineering (Hydrostatic Pressure on Dams) Solution]]
> 
> ---
> 
> ### Application 3: [[Electrical Engineering (Industrial Power Grid Consumption)]]
> [[Electrical Engineering (Industrial Power Grid Consumption) Solution]]


#### Active Practice Problem
Question 2
Let $f(x) = x^2$.

(a) Write down the formula for the Left-Hand Sum (LHS) Riemann sum for $\int_{0}^{1} x^2 \, dx$ using $n$ rectangles.  
*Hint: $\Delta x = \frac{1}{n}$ and the left-hand endpoint $c_i = \frac{i}{n}$.*

(b) Using the fact that:
$$\sum_{i=0}^{n-1} i^2 = \frac{n(n-1)(2n-1)}{6}$$
find the value of the integral by taking the limit of the sum as $n \to \infty$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ### Part (a): Writing the Formula for the LHS Riemann Sum
> 
> To build the Left-Hand Sum (LHS) formula for $\int_{0}^{1} x^2 \, dx$ using $n$ rectangles, we use the components given in the problem:
> 
> - **Function:** $f(x) = x^2$
> 
> - **Width of each rectangle:** $\Delta x = \frac{1}{n}$
> 
> - **Left-hand endpoints:** $c_i = \frac{i}{n}$ for $i = 0, 1, 2, \dots, n-1$
> 
> 
> **Step 1: Evaluate the function at the left-hand endpoints ($c_i$)** Substitute the endpoint formula $c_i = \frac{i}{n}$ into the function $f(x) = x^2$:
> 
> $$f(c_i) = f\left(\frac{i}{n}\right) = \left(\frac{i}{n}\right)^2 = \frac{i^2}{n^2}$$
> 
> **Step 2: Set up the Riemann Sum definition** The Left-Hand Riemann sum is the sum of the areas of all $n$ rectangles (height $\times$ width) from $i = 0$ to $n-1$:
> 
> $$\text{LHS} = \sum_{i=0}^{n-1} f(c_i) \cdot \Delta x$$
> 
> **Step 3: Substitute our expressions** Substitute $f(c_i) = \frac{i^2}{n^2}$ and $\Delta x = \frac{1}{n}$ into the summation:
> 
> $$\text{LHS} = \sum_{i=0}^{n-1} \left(\frac{i^2}{n^2}\right) \cdot \frac{1}{n}$$
> 
> $$\text{LHS} = \sum_{i=0}^{n-1} \frac{i^2}{n^3}$$
> 
> **Answer for (a):** The formula for the LHS Riemann sum is **$\sum_{i=0}^{n-1} \frac{i^2}{n^3}$** (or written as $\frac{1}{n^3} \sum_{i=0}^{n-1} i^2$).
> 
> ### Part (b): Finding the Exact Value Using Limits
> 
> Now we evaluate the limit of this sum as the number of rectangles ($n$) approaches infinity.
> 
> **Step 1: Factor out the constant terms from the summation**
> 
> Since the summation runs over the index $i$, the term $n^3$ acts as a constant relative to the sum and can be pulled out front:
> 
> $$\text{LHS} = \frac{1}{n^3} \sum_{i=0}^{n-1} i^2$$
> 
> **Step 2: Substitute the given summation formula** We are given the identity $\sum_{i=0}^{n-1} i^2 = \frac{n(n-1)(2n-1)}{6}$. Replacing the summation yields:
> 
> $$\text{LHS} = \frac{1}{n^3} \cdot \frac{n(n-1)(2n-1)}{6}$$
> 
> $$\text{LHS} = \frac{n(n-1)(2n-1)}{6n^3}$$
> 
> **Step 3: Expand the numerator to find the leading polynomial term**
> 
> Let's expand the top expression to determine its highest degree term:
> 
> $$n(n-1)(2n-1) = n(2n^2 - 3n + 1) = 2n^3 - 3n^2 + n$$
> 
> This gives us the simplified expression for the sum:
> 
> $$\text{LHS} = \frac{2n^3 - 3n^2 + n}{6n^3}$$
> 
> **Step 4: Take the limit as $n \rightarrow \infty$** To evaluate the exact value of the integral, take the limit:
> 
> $$\int_{0}^{1} x^2 \, dx = \lim_{n \to \infty} \frac{2n^3 - 3n^2 + n}{6n^3}$$
> 
> Since the degrees of the numerator and the denominator are both 3, the limit is simply the ratio of their leading coefficients:
> 
> $$\lim_{n \to \infty} \frac{2n^3 - 3n^2 + n}{6n^3} = \frac{2}{6} = \frac{1}{3}$$
> 
> **Answer for (b):** The exact value of the integral is **$\frac{1}{3}$**.

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Summation Mechanics and Function Evaluation
> [!note]- Theory & Derivations
> Welcome to the study guide for **Skill 2**. Once you have partitioned your interval and identified your sample points (Skill 1), you must execute the algebraic arithmetic required to sum the areas of the rectangles. This guide covers the mechanics of function evaluation, using Sigma ($\sum$) notation, and applying the algebraic factoring rules that make computing Riemann sums highly efficient.
> 
> ---
> 
> ## 1. Conceptual Notes & Core Theory
> 
> ### A. The Mechanics of Function Evaluation
> A Riemann sum requires finding the area of multiple rectangles ($n$ rectangles). Each individual rectangle has an area defined by:
> $$\text{Area}_i = \text{Height} \times \text{Width} = f(c_i) \cdot \Delta x$$
> 
> To find the height, you must carefully evaluate your chosen function $f(x)$ at each distinct sample point $c_i$. Precision is vital here, as signs (positive vs. negative outputs) and exponents directly alter the geometric accumulation.
> 
> ### B. Deconstructing Sigma ($\sum$) Notation
> Sigma notation is a mathematical shorthand used to write long, repetitive additions compactly. 
> $$\sum_{i=a}^{b} a_i$$
> * **The Index of Summation ($i$):** The variable that changes with each step.
> * **The Lower Limit ($a$):** The starting integer plugged into the expression.
> * **The Upper Limit ($b$):** The final integer plugged into the expression.
> 
> For a Left-Hand Riemann sum with $n$ rectangles, the index usually runs from $i = 0$ to $n-1$. For Right-Hand and Midpoint sums, it runs from $i = 1$ to $n$.
> 
> ### C. The Distributive Property and Factoring Out $\Delta x$
> Writing out a full Riemann sum manually looks like this:
> $$\text{Total Area} \approx f(c_1)\Delta x + f(c_2)\Delta x + f(c_3)\Delta x + \dots + f(c_n)\Delta x$$
> 
> Because the width of each subinterval ($\Delta x$) is uniform and constant across all rectangles, you can use the **distributive law** to factor $\Delta x$ completely out of the summation:
> $$\text{Total Area} \approx \Delta x \cdot [f(c_1) + f(c_2) + f(c_3) + \dots + f(c_n)]$$
> 
> In Sigma notation, this foundational algebraic property is written as:
> $$\sum_{i=1}^{n} f(c_i)\Delta x = \Delta x \sum_{i=1}^{n} f(c_i)$$
> 
> Factoring out the constant width first saves massive amounts of computing time, allowing you to add all the heights together in a single string before multiplying by the width just once at the very end.
> 
> ---
> 
> ## 2. Pure Mathematics Sample Problems
> 
> ### Problem 1: Manual Expansion and Factoring
> **Question:** Given the function $f(x) = 3x + 2$ and sample points $c_i = \{1, 2, 3, 4\}$ with a uniform width of $\Delta x = 0.5$:
> 1. Write out the Riemann sum in expanded form showing the area of each rectangle explicitly.
> 2. Factor out $\Delta x$, evaluate the heights, and calculate the final accumulated sum.
> 
> **Solution:**
> 1. **Expanded Form:**
>    $$\text{Sum} = f(1)(0.5) + f(2)(0.5) + f(3)(0.5) + f(4)(0.5)$$
> 2. **Factoring and Evaluation:**
>    Factor out $\Delta x = 0.5$:
>    $$\text{Sum} = 0.5 \cdot [f(1) + f(2) + f(3) + f(4)]$$
>    Evaluate $f(x) = 3x + 2$ at each point:
>    * $f(1) = 3(1) + 2 = 5$
>    * $f(2) = 3(2) + 2 = 8$
>    * $f(3) = 3(3) + 2 = 11$
>    * $f(4) = 3(4) + 2 = 14$
>    
>    Substitute the heights back into the factored equation:
>    $$\text{Sum} = 0.5 \cdot [5 + 8 + 11 + 14]$$
>    $$\text{Sum} = 0.5 \cdot [38] = 19$$
> 
> ### Problem 2: Compacting into Sigma Notation
> **Question:** Express the following expanded arithmetic area calculation using compact Sigma ($\sum$) notation:
> $$\text{Area} \approx 0.2 \cdot [(0.2)^2 + (0.4)^2 + (0.6)^2 + (0.8)^2 + (1.0)^2]$$
> 
> **Solution:**
> 1. **Identify the constant width ($\Delta x$):** The number factored out front is $0.2$.
> 2. **Identify the function template $f(x)$:** Each term inside the bracket is being squared, so the function is $f(x) = x^2$.
> 3. **Determine the pattern of the sample points ($c_i$):** The inputs step up by $0.2$ each time: $0.2, 0.4, 0.6, 0.8, 1.0$. This pattern can be modeled as $0.2 \cdot i$ where $i$ changes by integers.
> 4. **Set the limits of the index ($i$):** * When $i = 1$, $0.2(1) = 0.2$ (first term)
>    * When $i = 5$, $0.2(5) = 1.0$ (last term)
> 5. **Write the final Sigma notation:**
>    $$\text{Area} \approx \sum_{i=1}^{5} (0.2i)^2 \cdot 0.2 \quad \text{or} \quad 0.2 \sum_{i=1}^{5} (0.2i)^2$$
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Application 1: [[Aerospace Engineering (Total Impulse of a Thruster)]]
> [[Aerospace Engineering (Total Impulse of a Thruster) Solution]]
> 
> 
> ---
> 
> ### Application 2: [[Civil Engineering (Total Distributed Weight on a Beam)]]
> [[Civil Engineering (Total Distributed Weight on a Beam) Solution]]
> 
> ---
> 
> ### Application 3: [[Electrical Engineering (Industrial Grid Energy Consumption)]]
> [[Electrical Engineering (Industrial Grid Energy Consumption) Solution]]


#### Active Practice Problem
Question 3
Use the midpoint method using $n = 10$ rectangles to approximate:
$$\int_{1}^{6} 5\sqrt{x} \, dx$$

![[03 - Approximating Area LA Image 3.png]]

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ### The General Setup
> 
> For any Midpoint Riemann sum on an interval $[a, b]$ partitioned into $n$ equal subintervals:
> 
> 1. **Find the width of each rectangle ($\Delta x$):**
> 
> $$\Delta x = \frac{b - a}{n}$$
> 
> 2. **Find the midpoints ($m_i$):**
> 
> First, find the grid endpoints $x_i = a + i \cdot \Delta x$. Then, calculate the center of each subinterval:
> 
> $$m_i = \frac{x_{i-1} + x_i}{2}$$
> 
> 3. **Calculate the Midpoint Riemann Sum ($M_n$):**
> 
> $$M_n = \Delta x \cdot [f(m_1) + f(m_2) + \dots + f(m_n)]$$
> 
> 
> For this problem, our function is $f(x) = 5\sqrt{x}$ over the interval $[1, 6]$, meaning **$a = 1$** and **$b = 6$**.
> 
> ### Step-by-Step Solution
> 
> **Step 1: Calculate the width ($\Delta x$)**
> 
> $$\Delta x = \frac{6 - 1}{10} = \frac{5}{10} = 0.5$$
> 
> **Step 2: Identify the 10 midpoints ($m_i$)**
> 
> The subintervals increment by $0.5$, starting at $x_0 = 1$:
> 
> - Subinterval 1: $[1.0, 1.5] \implies m_1 = 1.25$
> 
> - Subinterval 2: $[1.5, 2.0] \implies m_2 = 1.75$
> 
> - Subinterval 3: $[2.0, 2.5] \implies m_3 = 2.25$
> 
> - Subinterval 4: $[2.5, 3.0] \implies m_4 = 2.75$
> 
> - Subinterval 5: $[3.0, 3.5] \implies m_5 = 3.25$
> 
> - Subinterval 6: $[3.5, 4.0] \implies m_6 = 3.75$
> 
> - Subinterval 7: $[4.0, 4.5] \implies m_7 = 4.25$
> 
> - Subinterval 8: $[4.5, 5.0] \implies m_8 = 4.75$
> 
> - Subinterval 9: $[5.0, 5.5] \implies m_9 = 5.25$
> 
> - Subinterval 10: $[5.5, 6.0] \implies m_{10} = 5.75$
> 
> 
> **Step 3: Evaluate $f(x) = 5\sqrt{x}$ at each midpoint**
> 
> _(Rounded to 4 decimal places for accuracy)_
> 
> - $f(1.25) = 5\sqrt{1.25} \approx 5.5902$
> 
> - $f(1.75) = 5\sqrt{1.75} \approx 6.6144$
> 
> - $f(2.25) = 5\sqrt{2.25} = 7.5000$
> 
> - $f(2.75) = 5\sqrt{2.75} \approx 8.2916$
> 
> - $f(3.25) = 5\sqrt{3.25} \approx 9.0139$
> 
> - $f(3.75) = 5\sqrt{3.75} \approx 9.6825$
> 
> - $f(4.25) = 5\sqrt{4.25} \approx 10.3078$
> 
> - $f(4.75) = 5\sqrt{4.75} \approx 10.8972$
> 
> - $f(5.25) = 5\sqrt{5.25} \approx 11.4564$
> 
> - $f(5.75) = 5\sqrt{5.75} \approx 11.9896$
> 
> 
> **Step 4: Compute the Midpoint Sum ($M_{10}$)** First, sum up all of these calculated heights:
> 
> $$\text{Sum of heights} = 5.5902 + 6.6144 + 7.5000 + 8.2916 + 9.0139 + 9.6825 + 10.3078 + 10.8972 + 11.4564 + 11.9896$$
> 
> $$\text{Sum of heights} \approx 91.3436$$
> 
> Now, multiply the sum of the heights by the width ($\Delta x = 0.5$):
> 
> $$M_{10} = 0.5 \cdot 91.3436 = 45.6718$$
> 
> **Answer:** The midpoint approximation for the integral is approximately **45.6718** (or **45.67** if rounding to two decimal places).

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 03 and overview of homework homework assignment.
