---
title: "Session 17 - Partial Fractions Decomposition Integrals"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 17 - Partial Fractions Decomposition Integrals

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Advanced Polynomial Factoring
> - Algebraic System Solving (Coefficient Matching)
> - Mathematical Structuring of the Decomposition

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In real-life engineering, complex physical systems—such as automated robotics, vibrating skyscrapers, and digital communication filters—are modeled using differential equations that convert into high-order rational functions. Mastering **advanced polynomial factoring**, **mathematical structuring**, and **algebraic system solving** allows engineers to perform partial fraction decomposition on these intricate models. By breaking them down into simpler, manageable pieces, electrical engineers can accurately predict drone flight stability, structural engineers can isolate destructive resonant frequencies to prevent bridge collapses, and audio engineers can isolate human voices from ambient static in noise-canceling technology. Ultimately, these three mathematical skills bridge abstract algebraic theory with the practical, physical calculations required to keep modern technology safe, stable, and clear.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Advanced Polynomial Factoring
> [!note]- Theory & Derivations
> In the context of partial fraction decomposition, **factoring the denominator** is the ultimate diagnostic phase. Before you can break a massive, complex rational function into manageable parts, you must discover exactly what that denominator is made of. If you misdiagnose the factors here, your entire algebraic setup will be structurally flawed.
> 
> ## 💡 Core Concepts & Taxonomy of Factors
> 
> When analyzing a polynomial denominator $q(x)$, your goal is to break it down completely into its most elemental real building blocks. Every real polynomial can be factored into a combination of just three distinct structural styles:
> 
> ### 1. Simple (Distinct) Linear Factors
> 
> These are first-degree polynomial factors of the form $(x - r)$ that appear exactly once.
> 
> - **The Look:** $(x - 2)$, $(x + 5)$, or simply $x$.
>     
> - **Mathematical Behavior:** In calculus and engineering, these represent distinct, independent boundaries or baseline rates of change (like independent exponential decays).
>     
> 
> ### 2. Repeated Linear Factors
> 
> These occur when a linear factor appears multiple times, written in the form $(x - r)^m$ where $m > 1$.
> 
> - **The Look:** $x^2$, $(x - 1)^3$, or $(2x + 3)^2$.
>     
> - **Mathematical Behavior:** These represent compounding effects or internal interactions within a system. When setting up fractions, they require a tiered approach to capture every level of interaction.
>     
> 
> ### 3. Irreducible Quadratic Factors
> 
> These are second-degree polynomials of the form $ax^2 + bx + c$ that cannot be factored any further using real numbers because their discriminant is negative ($b^2 - 4ac < 0$).
> 
> - **The Look:** $(x^2 + 1)$, $(x^2 + x + 4)$, or $(s^2 + 9)$.
>     
> - **Mathematical Behavior:** These represent rotational, alternating, or wave-like behaviors (like alternating current or a swinging pendulum) that cannot be broken down into simple, one-way exponential trajectories.
>     
> 
> ## Pure Math Sample Problems
> 
> Let's look at how to systematically diagnose and execute Skill 1 with pure algebraic expressions.
> 
> ### Sample Problem 1: Hunting for Simple Linear Factors
> 
> **Problem:** Factor the polynomial completely:
> 
> $$P(x) = x^3 - 4x^2 - 5x$$
> 
> **Solution:**
> 
> 1. **Look for a Greatest Common Factor (GCF) first:** Every single term contains an $x$. Pull it out:
>     
>     $$P(x) = x(x^2 - 4x - 5)$$
>     
> 2. **Factor the remaining quadratic:** We need two numbers that multiply to $-5$ and add up to $-4$. Those numbers are $-5$ and $+1$.
>     
>     $$P(x) = x(x - 5)(x + 1)$$
>     
> 3. **Diagnosis:** This polynomial consists of **three distinct linear factors**: $x$, $(x - 5)$, and $(x + 1)$.
>     
> 
> ### Sample Problem 2: Exposing Repeated Linear Factors
> 
> **Problem:** Factor the polynomial completely:
> 
> $$Q(x) = x^4 - 6x^3 + 9x^2$$
> 
> **Solution:**
> 
> 1. **Pull out the GCF:** The highest power of $x$ shared by all terms is $x^2$.
>     
>     $$Q(x) = x^2(x^2 - 6x + 9)$$
>     
> 2. **Factor the remaining quadratic:** We look for two numbers that multiply to $9$ and add to $-6$. This is a perfect square trinomial, using $-3$ and $-3$.
>     
>     $$Q(x) = x^2(x - 3)(x - 3) = x^2(x - 3)^2$$
>     
> 3. **Diagnosis:** This polynomial consists entirely of **repeated linear factors** ($x$ repeated twice, and $(x-3)$ repeated twice).
>     
> 
> ### Sample Problem 3: Identifying Irreducible Quadrates
> 
> **Problem:** Factor the polynomial completely:
> 
> $$R(x) = x^3 + 4x^2 + 4x + 16$$
> 
> **Solution:**
> 
> 1. **Factor by grouping:** Group the first two terms and the last two terms.
>     
>     $$R(x) = (x^3 + 4x^2) + (4x + 16)$$
>     
> 2. **Pull out common factors from each group:**
>     
>     $$R(x) = x^2(x + 4) + 4(x + 4)$$
>     
> 3. **Binomial GCF extraction:** Notice that $(x + 4)$ is now common to both parts.
>     
>     $$R(x) = (x + 4)(x^2 + 4)$$
>     
> 4. **Test the quadratic factor:** Can $x^2 + 4$ be factored using real numbers? Using the discriminant ($b^2 - 4ac$), where $a=1, b=0, c=4$:
>     
>     $$0^2 - 4(1)(4) = -16$$
>     
>     Because the discriminant is negative, it is completely irreducible over real numbers.
>     
> 5. **Diagnosis:** This polynomial consists of **one simple linear factor** $(x + 4)$ and **one irreducible quadratic factor** $(x^2 + 4)$.
>     
> 
> ## 🏗️ Real-Life Engineering Application Problems
> 
> Here is how engineers use Skill 1 to prevent real-world systems from failing.
> 
> ### Engineering Problem 1: [[Drone Flight Controller Stability (Electrical & Control Systems)]]
> [[Drone Flight Controller Stability (Electrical & Control Systems) Solution]]
> 
>     
> 
> ### Engineering Problem 2: [[Earthquake Resilience in Skyscrapers (Mechanical & Structural Engineering)]]
> [[Earthquake Resilience in Skyscrapers (Mechanical & Structural Engineering) Solution]]
> 
> 
> ### Engineering Problem 3: [[5G Signal Isolation & Noise Filtering (Digital Signal Processing)]]
> [[5G Signal Isolation & Noise Filtering (Digital Signal Processing) Solution]]


#### Worked Example
1. $\int\frac{5x-7}{x^{2}-3x+2}dx$

> [!check]- Worked Solution
> ### Step 1: Factor the Denominator
> 
> First, we need to factor the quadratic polynomial in the denominator, $x^2 - 3x + 2$. We look for two numbers that multiply to $2$ and add up to $-3$. Those numbers are $-1$ and $-2$.
> 
> $$x^2 - 3x + 2 = (x - 1)(x - 2)$$
> 
> ### Step 2: Set Up the Partial Fraction Decomposition
> 
> Because the denominator has two distinct linear factors, we can express the integrand as a sum of simpler fractions with unknown constants $A$ and $B$:
> 
> $$\frac{5x - 7}{(x - 1)(x - 2)} = \frac{A}{x - 1} + \frac{B}{x - 2}$$
> 
> ### Step 3: Clear the Fractions
> 
> Multiply both sides of the equation by the least common denominator, $(x - 1)(x - 2)$, to eliminate the fractions:
> 
> $$5x - 7 = A(x - 2) + B(x - 1)$$
> 
> ### Step 4: Solve for the Constants $A$ and $B$
> 
> The easiest way to find $A$ and $B$ is to pick "convenient" values of $x$ that make one of the terms on the right side drop out.
> 
> - **To find $A$, let $x = 1$:**
> 
> $$5(1) - 7 = A(1 - 2) + B(1 - 1)$$
> 
> $$-2 = A(-1) + 0$$
> 
> $$A = 2$$
> 
> - **To find $B$, let $x = 2$:**
> 
> $$5(2) - 7 = A(2 - 2) + B(2 - 1)$$
> 
> $$10 - 7 = 0 + B(1)$$
> 
> $$B = 3$$
> 
> 
> ### Step 5: Substitute Back and Integrate
> 
> Now replace $A$ and $B$ in our partial fraction setup and split the original integral into two simple integrals:
> 
> $$\int \frac{5x - 7}{x^2 - 3x + 2} \, dx = \int \left( \frac{2}{x - 1} + \frac{3}{x - 2} \right) dx$$
> 
> Using the natural logarithm integration rule ($\int \frac{1}{u} \, du = \ln|u| + C$), we get:
> 
> $$\int \frac{2}{x - 1} \, dx + \int \frac{3}{x - 2} \, dx = 2\ln|x - 1| + 3\ln|x - 2| + C$$
> 
> ### Final Answer
> 
> $$2\ln|x - 1| + 3\ln|x - 2| + C$$
> 
> _(where $C$ is the constant of integration)_

#### Active Practice Problem
1. $\int\frac{3}{x^{3}-3x^{2}}dx$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ### Step 1: Factor the Denominator
> 
> First, look at the polynomial in the denominator, $x^3 - 3x^2$. We can factor out a greatest common factor of $x^2$:
> 
> $$x^3 - 3x^2 = x^2(x - 3)$$
> 
> ### Step 2: Set Up the Partial Fraction Decomposition
> 
> Because we have a **repeated linear factor** ($x^2$) and a **distinct linear factor** ($x - 3$), our setup must include a fraction for every power of the repeated factor up to its exponent:
> 
> $$\frac{3}{x^2(x - 3)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x - 3}$$
> 
> ### Step 3: Clear the Fractions
> 
> Multiply every term by the least common denominator, $x^2(x - 3)$, to clear out the fractions:
> 
> $$3 = Ax(x - 3) + B(x - 3) + Cx^2$$
> 
> ### Step 4: Solve for the Constants $A$, $B$, and $C$
> 
> We can pick convenient values for $x$ to make terms disappear and solve for our variables.
> 
> - **To find $B$, let $x = 0$:**
> 
> $$3 = A(0)(-3) + B(0 - 3) + C(0)^2$$
> 
> $$3 = -3B$$
> 
> $$B = -1$$
> 
> - **To find $C$, let $x = 3$:**
> 
> $$3 = A(3)(0) + B(0) + C(3)^2$$
> 
> $$3 = 9C$$
> 
> $$C = \frac{1}{3}$$
> 
> - **To find $A$, equate the $x^2$ coefficients:**
> 
> Let's look at the $x^2$ terms on both sides of our cleared equation. On the left side, there are no $x^2$ terms ($0$). On the right side, expanding $Ax(x-3)$ gives $Ax^2$, and we also have $Cx^2$.
> 
> $$0 = A + C$$
> 
> Since we know $C = \frac{1}{3}$:
> 
> $$0 = A + \frac{1}{3} \implies A = -\frac{1}{3}$$
> 
> 
> ### Step 5: Substitute Back and Integrate
> 
> Now rewrite the original integral with our solved constants:
> 
> $$\int \left( \frac{-\frac{1}{3}}{x} + \frac{-1}{x^2} + \frac{\frac{1}{3}}{x - 3} \right) dx$$
> 
> We can integrate these term by term. Note that for the middle term, $\int -x^{-2} \, dx = -\frac{x^{-1}}{-1} = \frac{1}{x}$.
> 
> $$\int -\frac{1}{3x} \, dx - \int x^{-2} \, dx + \int \frac{1}{3(x - 3)} \, dx = -\frac{1}{3}\ln|x| + \frac{1}{x} + \frac{1}{3}\ln|x - 3| + C$$
> 
> ### Final Answer
> 
> You can leave the answer expanded, or combine the natural logarithms using log properties ($\ln|a| - \ln|b| = \ln\left|\frac{a}{b}\right|$):
> 
> $$\frac{1}{3}\ln\left|\frac{x - 3}{x}\right| + \frac{1}{x} + C$$
> 
> _(where $C$ is the constant of integration)_

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Algebraic System Solving (Coefficient Matching)
> [!note]- Theory & Derivations
> Once you have diagnosed your factors (Skill 1) and built your structural blueprint (Skill 2), you arrive at the final boss of partial fractions: **solving for the unknown constants**. This is the execution phase where abstract placeholders are transformed into precise numerical values.
> 
> ## 💡 Core Concepts & Methodologies
> 
> To solve a partial fraction system, you must clear the fractions and find the values of your constants using one of two primary algebraic workflows:
> 
> ### Method A: The Convenient Value Method (Heaviside Cover-Up)
> 
> This method involves substituting specific values of $x$ that intentionally force parts of your equation to multiply by zero, isolating one constant at a time.
> 
> - **When to use:** Ideal for denominators composed entirely of **distinct simple linear factors**.
>     
> 
> ### Method B: Equating Coefficients (The System of Equations)
> 
> This method requires expanding the entire right-side polynomial, grouping the terms by their powers of $x$ ($x^2, x^1, x^0$, etc.), and matching them directly against the coefficients on the left side.
> 
> - **When to use:** Mandatory when dealing with **repeated linear** or **irreducible quadratic factors** where terms do not easily drop out.
>     
> 
> ## 🧮 Pure Math Sample Problems
> 
> ### Sample Problem 1: Solving via Convenient Values
> 
> **Problem:** Find the constants $A$ and $B$ for the decomposition:
> 
> $$\frac{x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}$$
> 
> **Solution:**
> 
> 1. **Clear the fractions** by multiplying both sides by the least common denominator $(x - 1)(x + 2)$:
>     
>     $$x + 5 = A(x + 2) + B(x - 1)$$
>     
> 2. **Isolate $A$** by letting $x = 1$ (making the $B$ term zero):
>     
>     $$1 + 5 = A(1 + 2) + B(0)$$
>     
>     $$6 = 3A \implies A = 2$$
>     
> 3. **Isolate $B$** by letting $x = -2$ (making the $A$ term zero):
>     
>     $$-2 + 5 = A(0) + B(-2 - 1)$$
>     
>     $$3 = -3B \implies B = -1$$
>     
> 4. **Final Values:** $A = 2, B = -1$
>     
> 
> ### Sample Problem 2: Solving via Equating Coefficients
> 
> **Problem:** Find the constants $A$, $B$, and $C$ for the decomposition:
> 
> $$\frac{3x^2 + x + 1}{x(x^2 + 1)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1}$$
> 
> **Solution:**
> 
> 1. **Clear the fractions**:
>     
>     $$3x^2 + x + 1 = A(x^2 + 1) + (Bx + C)x$$
>     
> 2. **Expand and group** the right side by like powers of $x$:
>     
>     $$3x^2 + x + 1 = Ax^2 + A + Bx^2 + Cx$$
>     
>     $$3x^2 + x + 1 = (A + B)x^2 + (C)x + (A)$$
>     
> 3. **Equate the coefficients** of identical powers from both sides:
>     
>     - **Constant terms ($x^0$):** $A = 1$
>         
>     - **Linear terms ($x^1$):** $C = 1$
>         
>     - **Quadratic terms ($x^2$):** $A + B = 3$
>         
> 4. **Solve the system**:
>     
>     - Since $A = 1$, substitute it into the $x^2$ equation: $1 + B = 3 \implies B = 2$.
>         
> 5. **Final Values:** $A = 1, B = 2, C = 1$
>     
> 
> ## 🏗️ Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Power Surge Dissipation (Electrical Engineering)]]
> [[Power Surge Dissipation (Electrical Engineering) Solution]]
> 
> 
> ### Engineering Problem 2: [[Robotic Arm Shock Absorption (Mechanical Engineering)]]
> [[Robotic Arm Shock Absorption (Mechanical Engineering) Solution]]
> 
>     
> 
> ### Engineering Problem 3: [[5G Router Data Stream Allocation (Digital Signal Processing)]]
> [[5G Router Data Stream Allocation (Digital Signal Processing) Solution ]]


#### Worked Example
1. $\int\frac{x+1}{x^{2}-25}dx$

> [!check]- Worked Solution
> ### Step 1: Factor the Denominator
> 
> The polynomial in the denominator, $x^2 - 25$, is a classic **difference of squares** ($a^2 - b^2 = (a - b)(a + b)$). We can factor it like this:
> 
> $$x^2 - 25 = (x - 5)(x + 5)$$
> 
> ### Step 2: Set Up the Partial Fraction Decomposition
> 
> Since we have two distinct linear factors in the denominator, we can set up our decomposition with two unknown constants, $A$ and $B$:
> 
> $$\frac{x + 1}{(x - 5)(x + 5)} = \frac{A}{x - 5} + \frac{B}{x + 5}$$
> 
> ### Step 3: Clear the Fractions
> 
> Multiply both sides of the equation by the entire denominator, $(x - 5)(x + 5)$, to clear the fractions:
> 
> $$x + 1 = A(x + 5) + B(x - 5)$$
> 
> ### Step 4: Solve for the Constants $A$ and $B$
> 
> We can pick convenient values for $x$ that will make one of our terms disappear, allowing us to isolate each constant.
> 
> - **To find $A$, let $x = 5$:**
> 
> $$5 + 1 = A(5 + 5) + B(5 - 5)$$
> 
> $$6 = 10A$$
> 
> $$A = \frac{6}{10} = \frac{3}{5}$$
> 
> - **To find $B$, let $x = -5$:**
> 
> $$-5 + 1 = A(-5 + 5) + B(-5 - 5)$$
> 
> $$-4 = -10B$$
> 
> $$B = \frac{-4}{-10} = \frac{2}{5}$$
> 
> 
> ### Step 5: Substitute Back and Integrate
> 
> Now, replace $A$ and $B$ in our partial fraction setup and split the original expression into two separate integrals:
> 
> $$\int \left( \frac{\frac{3}{5}}{x - 5} + \frac{\frac{2}{5}}{x + 5} \right) dx$$
> 
> Pull the constants out in front of each integral and integrate using the natural log rule ($\int \frac{1}{u} \, du = \ln|u| + C$):
> 
> $$\frac{3}{5} \int \frac{1}{x - 5} \, dx + \frac{2}{5} \int \frac{1}{x + 5} \, dx = \frac{3}{5}\ln|x - 5| + \frac{2}{5}\ln|x + 5| + C$$
> 
> ### Final Answer
> 
> $$\frac{3}{5}\ln|x - 5| + \frac{2}{5}\ln|x + 5| + C$$
> 
> _(where $C$ is the constant of integration)_

#### Active Practice Problem
1. $\int\frac{2}{x^{3}(x+1)}dx$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ### Step 1: Factor the Denominator
> 
> The denominator is already fully factored for us: $x^3(x+1)$.
> 
> ### Step 2: Set Up the Partial Fraction Decomposition
> 
> Because we have a **repeated linear factor** ($x^3$) and a **distinct linear factor** ($x+1$), our setup must include a fraction for every single power of the repeated factor up to its highest exponent:
> 
> $$\frac{2}{x^3(x+1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x^3} + \frac{D}{x+1}$$
> 
> ### Step 3: Clear the Fractions
> 
> Multiply both sides of the equation by the entire denominator, $x^3(x+1)$, to clear out the fractions:
> 
> $$2 = Ax^2(x+1) + Bx(x+1) + C(x+1) + Dx^3$$
> 
> If we expand the right side to group like terms, it looks like this:
> 
> $$2 = A(x^3 + x^2) + B(x^2 + x) + C(x + 1) + Dx^3$$
> 
> $$2 = (A + D)x^3 + (A + B)x^2 + (B + C)x + C$$
> 
> ### Step 4: Solve for the Constants $A, B, C,$ and $D$
> 
> We can use a mix of plugging in convenient $x$-values and comparing coefficients to solve for our four variables.
> 
> - **To find $C$, let $x = 0$:**
> 
> $$2 = A(0) + B(0) + C(0 + 1) + D(0)$$
> 
> $$C = 2$$
> 
> - **To find $D$, let $x = -1$:**
> 
> $$2 = A(0) + B(0) + C(0) + D(-1)^3$$
> 
> $$2 = -D \implies D = -2$$
> 
> - **To find $B$, look at the $x$ coefficients:**
> 
> There is no $x$ term on the left side ($0$). On the right side, the coefficient of $x$ is $B + C$.
> 
> $$0 = B + C \implies B = -C \implies B = -2$$
> 
> - **To find $A$, look at the $x^2$ coefficients:**
> 
> There is no $x^2$ term on the left side ($0$). On the right side, the coefficient of $x^2$ is $A + B$.
> 
> $$0 = A + B \implies A = -B \implies A = 2$$
> 
> 
> _(Quick check: The $x^3$ coefficients give $A + D = 2 + (-2) = 0$, which perfectly matches the left side!)_
> 
> ### Step 5: Substitute Back and Integrate
> 
> Now replace $A, B, C,$ and $D$ in our breakdown and write the expression as separate, simpler integrals:
> 
> $$\int \left( \frac{2}{x} - \frac{2}{x^2} + \frac{2}{x^3} - \frac{2}{x+1} \right) dx$$
> 
> We can integrate these term by term. For the middle terms, rewrite them with negative exponents ($\int -2x^{-2} \, dx$ and $\int 2x^{-3} \, dx$) and use the power rule:
> 
> - $\int \frac{2}{x} \, dx = 2\ln|x|$
> 
> - $\int -2x^{-2} \, dx = \frac{-2x^{-1}}{-1} = \frac{2}{x}$
> 
> - $\int 2x^{-3} \, dx = \frac{2x^{-2}}{-2} = -\frac{1}{x^2}$
> 
> - $\int -\frac{2}{x+1} \, dx = -2\ln|x+1|$
> 
> 
> ### Final Answer
> 
> Combining all the integrated pieces gives:
> 
> $$2\ln|x| + \frac{2}{x} - \frac{1}{x^2} - 2\ln|x+1| + C$$
> 
> Using logarithm properties ($\ln|a| - \ln|b| = \ln\left|\frac{a}{b}\right|$), you can optionally simplify the log terms into a single expression:
> 
> $$2\ln\left|\frac{x}{x+1}\right| + \frac{2}{x} - \frac{1}{x^2} + C$$
> 
> _(where $C$ is the constant of integration)_

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Mathematical Structuring of the Decomposition
> [!note]- Theory & Derivations
> Once a rational function's denominator is completely factored, you enter the engineering phase of the problem: **structuring the template**. You cannot solve for a system's unknown variables until you build the correct mathematical scaffolding. If your structural blueprint is wrong, your final constants will be useless.
> 
> The fundamental rule of structural decomposition requires that the degree of each numerator placeholder must be exactly **one degree lower** than its base, irreducible denominator factor.
> 
> ## 💡 Core Principles & Formatting Rules
> 
> According to the mathematical framework of partial fractions, there are three strict architectural rules you must follow when setting up a decomposition template:
> 
> ### Rule 1: The Simple Linear Rule
> 
> When a factor in the denominator is a distinct linear expression $(x - r)$, its numerator placeholder is a single, undetermined constant ($A$).
> 
> - **Template Setup:**
>     
>     $$\frac{p(x)}{(x - r_1)(x - r_2)} = \frac{A}{x - r_1} + \frac{B}{x - r_2}$$
>     
> 
> ### Rule 2: The Repeated Linear Rule
> 
> If a linear factor is repeated to the $m$-th power, $(x - r)^m$, it creates an internal system interaction. You must create a distinct fraction for **every single power** starting from $1$ up to $m$, each topped with a single independent constant ($A, B, C$, etc.).
> 
> - **Template Setup:**
>     
>     $$\frac{p(x)}{(x - r)^3} = \frac{A}{x - r} + \frac{B}{(x - r)^2} + \frac{C}{(x - r)^3}$$
>     
> 
> ### Rule 3: The Irreducible Quadratic Rule
> 
> When the denominator contains a quadratic polynomial $ax^2 + bx + c$ that cannot be factored over real numbers, its numerator placeholder must be structured as a **complete linear expression** ($Ax + B$).
> 
> - **Template Setup:**
>     
>     $$\frac{p(x)}{(x - r)(ax^2 + bx + c)} = \frac{A}{x - r} + \frac{Bx + C}{ax^2 + bx + c}$$
>     
> 
> ## 🧮 Pure Math Sample Problems
> 
> Let's look at how to build flawless structural blueprints for complex rational expressions.
> 
> ### Sample Problem 1: Dealing with Mixed Linear Structures
> 
> **Problem:** Set up the partial fraction decomposition template for the following rational function (do not solve for the constants):
> 
> $$f(x) = \frac{7x^2 - 3}{x^2(x + 4)(x - 9)}$$
> 
> **Solution:**
> 
> 1. **Analyze the Denominator Factors:**
>     
>     - $x^2$ is a repeated linear factor (highest power $m = 2$).
>         
>     - $(x + 4)$ is a distinct simple linear factor.
>         
>     - $(x - 9)$ is a distinct simple linear factor.
>         
> 2. **Apply the Rules:**
>     
>     - The $x^2$ term requires two fractions: one for $x$ and one for $x^2$.
>         
>     - The distinct terms get one fraction each.
>         
> 3. **Final Blueprint Structure:**
>     
>     $$\frac{7x^2 - 3}{x^2(x + 4)(x - 9)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x + 4} + \frac{D}{x - 9}$$
>     
> 
> ### Sample Problem 2: Incorporating Irreducible Quadratics
> 
> **Problem:** Set up the partial fraction decomposition template for the following rational function (do not solve for the constants):
> 
> $$g(x) = \frac{x^3 + 5x - 1}{(x - 1)(x^2 + 16)}$$
> 
> **Solution:**
> 
> 1. **Analyze the Denominator Factors:**
>     
>     - $(x - 1)$ is a distinct simple linear factor.
>         
>     - $(x^2 + 16)$ is an irreducible quadratic factor ($b^2 - 4ac = 0 - 64 = -64$).
>         
> 2. **Apply the Rules:**
>     
>     - The linear factor gets a constant numerator $A$.
>         
>     - The irreducible quadratic factor gets a linear numerator $Bx + C$.
>         
> 3. **Final Blueprint Structure:**
>     
>     $$\frac{x^3 + 5x - 1}{(x - 1)(x^2 + 16)} = \frac{A}{x - 1} + \frac{Bx + C}{x^2 + 16}$$
>     
> 
> ### Sample Problem 3: The Ultimate Structural Stress-Test
> 
> **Problem:** Set up the partial fraction decomposition template for the following rational function (do not solve for the constants):
> 
> $$h(x) = \frac{4x + 2}{x(x - 2)^3(x^2 + x + 5)}$$
> 
> **Solution:**
> 
> 1. **Analyze the Denominator Factors:**
>     
>     - $x$ is a simple linear factor.
>         
>     - $(x - 2)^3$ is a repeated linear factor up to the 3rd power.
>         
>     - $(x^2 + x + 5)$ is an irreducible quadratic factor ($1^2 - 4(1)(5) = -19$).
>         
> 2. **Apply the Rules:**
>     
>     - $x$ gets one term: $\frac{A}{x}$.
>         
>     - $(x - 2)^3$ expands into three tiered terms.
>         
>     - The quadratic gets a linear expression numerator.
>         
> 3. **Final Blueprint Structure:**
>     
>     $$\frac{4x + 2}{x(x - 2)^3(x^2 + x + 5)} = \frac{A}{x} + \frac{B}{x - 2} + \frac{C}{(x - 2)^2} + \frac{D}{(x - 2)^3} + \frac{Ex + F}{x^2 + x + 5}$$
>     
> 
> ## 🏗️ Real-Life Engineering Application Problems
> 
> Here is how engineers use the structural design of equations to break down and optimize complex modern technologies.
> 
> ### Engineering Problem 1: [[RLC Circuit Transient Isolation (Electrical Engineering)]]
> [[RLC Circuit Transient Isolation (Electrical Engineering) Solution]]
> 
> 
> ### Engineering Problem 2: [[Heavy Machinery Shock Absorber Behavior (Mechanical Engineering)]]
> [[Heavy Machinery Shock Absorber Behavior (Mechanical Engineering) Solution]]
> 
>     
> 
> ### Engineering Problem 3: [[Parallel Computing in 5G Transceivers (Digital Signal Processing)]]
> [[Parallel Computing in 5G Transceivers (Digital Signal Processing) Solution]]


#### Active Practice Problem
1. $\int\frac{4}{(x+1)(x^{2}+1)}dx$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ### Step 1: Analyze the Denominator
> 
> The denominator is already factored into a **distinct linear factor** $(x + 1)$ and an **irreducible quadratic factor** $(x^2 + 1)$ (a quadratic polynomial that cannot be factored further using real numbers).
> 
> ### Step 2: Set Up the Partial Fraction Decomposition
> 
> Because we have an irreducible quadratic factor, the numerator above it must be a linear expression ($Bx + C$) rather than a single constant:
> 
> $$\frac{4}{(x + 1)(x^2 + 1)} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 + 1}$$
> 
> ### Step 3: Clear the Fractions
> 
> Multiply both sides of the equation by the entire denominator, $(x + 1)(x^2 + 1)$, to eliminate the fractions:
> 
> $$4 = A(x^2 + 1) + (Bx + C)(x + 1)$$
> 
> ### Step 4: Solve for the Constants $A$, $B$, and $C$
> 
> We can find the constants by choosing a convenient value for $x$ and comparing polynomial coefficients.
> 
> - **To find $A$, let $x = -1$:**
> 
> $$4 = A((-1)^2 + 1) + (B(-1) + C)(-1 + 1)$$
> 
> $$4 = A(1 + 1) + 0$$
> 
> $$4 = 2A \implies A = 2$$
> 
> - **Expand the cleared equation to find $B$ and $C$:**
> 
> $$4 = Ax^2 + A + Bx^2 + Bx + Cx + C$$
> 
> Group the terms by powers of $x$:
> 
> $$4 = (A + B)x^2 + (B + C)x + (A + C)$$
> 
> - **Equate the $x^2$ coefficients:**
> 
> There is no $x^2$ term on the left side ($0$). On the right side, the coefficient is $A + B$.
> 
> $$0 = A + B \implies 0 = 2 + B \implies B = -2$$
> 
> - **Equate the constant terms:**
> 
> The constant term on the left side is $4$. On the right side, it is $A + C$.
> 
> $$4 = A + C \implies 4 = 2 + C \implies C = 2$$
> 
> 
> ### Step 5: Substitute Back and Integrate
> 
> Now, substitute $A = 2$, $B = -2$, and $C = 2$ back into the decomposition setup:
> 
> $$\int \left( \frac{2}{x + 1} + \frac{-2x + 2}{x^2 + 1} \right) dx$$
> 
> To make this easier to integrate, split the second fraction into two separate parts:
> 
> $$\int \frac{2}{x + 1} \, dx - \int \frac{2x}{x^2 + 1} \, dx + \int \frac{2}{x^2 + 1} \, dx$$
> 
> Now integrate each term individually:
> 
> 1. **First term:** Uses the standard log rule.
> 
> $$\int \frac{2}{x + 1} \, dx = 2\ln|x + 1|$$
> 
> 2. **Second term:** Requires $u$-substitution ($u = x^2 + 1$, $du = 2x \, dx$).
> 
> $$\int \frac{2x}{x^2 + 1} \, dx = \ln(x^2 + 1)$$
> 
> 3. **Third term:** Recognizes the standard arctangent derivative ($\int \frac{1}{x^2+1} \, dx = \arctan(x)$).
> 
> $$\int \frac{2}{x^2 + 1} \, dx = 2\arctan(x)$$
> 
> 
> ### Final Answer
> 
> Combining all parts together yields:
> 
> $$2\ln|x + 1| - \ln(x^2 + 1) + 2\arctan(x) + C$$
> 
> If you wish to combine the logarithms using log laws ($2\ln|x+1| = \ln((x+1)^2)$), it can also be cleanly written as:
> 
> $$\ln\left( \frac{(x + 1)^2}{x^2 + 1} \right) + 2\arctan(x) + C$$
> 
> _(where $C$ is the constant of integration)_

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 17 and overview of homework homework assignment.
