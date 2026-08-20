---
title: "Session 01 - Calculus 1 Review"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 01 - Calculus 1 Review

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Review core mathematical concepts and engineering calculus prerequisites.

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In this session, we investigate the mathematical principles of **Calculus 1 Review** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Advanced Concept Practice 1
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Worked Example
Let $f(x) = x^2 - 4x + 4$.

(a) Find $f'(x)$.  
(b) Find an equation of the line tangent to the graph of $f(x)$ at $x = -1$.  
(c) For what value(s) of $x$ does $f(x)$ have a slope of 0?  
(d) For what value(s) of $x$ does $f(x)$ have a negative instantaneous rate of change?

> [!check]- Worked Solution
> ## Solution for Question 1
> 
> Here is the step-by-step breakdown for solving each part of the calculus problem based on the function:
> 
> $$f(x) = x^2 - 4x + 4$$
> 
> ### (a) Find $f'(x)$
> 
> **Concept:** The first derivative represents the instantaneous rate of change or the slope of the function at any given point. To find it, we use the **Power Rule** ($\frac{d}{dx}[x^n] = n x^{n-1}$) and the **Constant Rule** ($\frac{d}{dx}[c] = 0$).
> 
> 1. Differentiate each term of the function individually:
> 
> - The derivative of $x^2$ is $2x$.
> 
> - The derivative of $-4x$ is $-4$.
> 
> - The derivative of the constant $4$ is $0$.
> 
> 2. Combine the terms to get your derivative function:
> 
> $$f'(x) = 2x - 4$$
> 
> 
> ### (b) Find an equation of the line tangent to the graph of $f(x)$ at $x = -1$
> 
> **Concept:** To write the equation of a straight line, you need a **point** $(x_1, y_1)$ and a **slope** ($m$). Once you have both, you plug them into the point-slope formula: $y - y_1 = m(x - x_1)$.
> 
> 1. **Find the y-coordinate (the point):** Evaluate the original function $f(x)$ at $x = -1$.
> 
> $$f(-1) = (-1)^2 - 4(-1) + 4$$
> 
> $$f(-1) = 1 + 4 + 4 = 9$$
> 
> This gives you the coordinate point **$(-1, 9)$**.
> 
> 2. **Find the slope ($m$):** Evaluate the derivative function $f'(x)$ at $x = -1$.
> 
> $$m = f'(-1) = 2(-1) - 4$$
> 
> $$m = -2 - 4 = -6$$
> 
> 3. **Construct the equation:** Substitute the point $(-1, 9)$ and slope $m = -6$ into the point-slope form.
> 
> $$y - 9 = -6(x - (-1))$$
> 
> $$y - 9 = -6(x + 1)$$
> 
> $$y - 9 = -6x - 6$$
> 
> $$y = -6x + 3$$
> 
> 
> ### (c) For what value(s) of $x$ does $f(x)$ have a slope of 0?
> 
> **Concept:** Because the derivative $f'(x)$ gives you the slope at any $x$, you can find where the slope is exactly $0$ by setting the derivative equal to zero and solving for $x$.
> 
> 1. Set $f'(x) = 0$:
> 
> $$2x - 4 = 0$$
> 
> 2. Isolate $x$:
> 
> $$2x = 4$$
> 
> $$x = 2$$
> 
> 
> ### (d) For what value(s) of $x$ does $f(x)$ have a negative instantaneous rate of change?
> 
> **Concept:** "Instantaneous rate of change" is simply another term for the derivative. For this rate to be negative, the derivative must be less than zero ($f'(x) < 0$).
> 
> 1. Set up the inequality using your derivative:
> 
> $$2x - 4 < 0$$
> 
> 2. Solve for $x$:
> 
> $$2x < 4$$
> 
> $$x < 2$$
> 
> 
> In interval notation, the instantaneous rate of change is negative on the interval **$(-\infty, 2)$**.

#### Active Practice Problem
Find the first derivative of the following functions.

(a) $f(x) = \frac{1}{x^2} - 5\sqrt{x} - 3 \ln x + \pi^4$  
(b) $y = \frac{x^3 - 4x^2 + x}{x - 2}$  
(c) $g(x) = (x + \sin x) \tan x$  
(d) $y = \cos(e^x) - e^{x^5}$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here are the step-by-step solutions for finding the first derivative of each function.
> 
> ### (a) $f(x) = \frac{1}{x^2} - 5\sqrt{x} - 3 \ln x + \pi^4$
> 
> **Step 1: Rewrite the function using exponents** Before taking the derivative, convert fractions and radicals into power forms so you can easily use the **Power Rule** ($\frac{d}{dx}[x^n] = n x^{n-1}$).
> 
> $$f(x) = x^{-2} - 5x^{1/2} - 3\ln x + \pi^4$$
> 
> **Step 2: Differentiate term by term**
> 
> - **First term ($x^{-2}$):** Bring the exponent down and subtract 1.
> 
> $$\frac{d}{dx}[x^{-2}] = -2x^{-3} = -\frac{2}{x^3}$$
> 
> - **Second term ($-5x^{1/2}$):** Bring the exponent down and multiply.
> 
> $$\frac{d}{dx}[-5x^{1/2}] = -5 \cdot \left(\frac{1}{2}\right)x^{-1/2} = -\frac{5}{2\sqrt{x}}$$
> 
> - **Third term ($-3\ln x$):** The derivative of $\ln x$ is $\frac{1}{x}$.
> 
> $$\frac{d}{dx}[-3\ln x] = -\frac{3}{x}$$
> 
> - **Fourth term ($\pi^4$):** Don't let this trap you! Even though it looks fancy, $\pi^4$ is just a constant number, and the derivative of any constant is $0$.
> 
> 
> **Final Answer:**
> 
> $$f'(x) = -\frac{2}{x^3} - \frac{5}{2\sqrt{x}} - \frac{3}{x}$$
> 
> ### (b) $y = \frac{x^3 - 4x^2 + x}{x - 2}$
> 
> **Step 1: Identify the rule** Because we have a function divided by another function, we must use the **Quotient Rule**:
> 
> $$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$
> 
> Let's define our components:
> 
> - Top ($u$): $x^3 - 4x^2 + x \implies u' = 3x^2 - 8x + 1$
> 
> - Bottom ($v$): $x - 2 \implies v' = 1$
> 
> 
> **Step 2: Apply the formula**
> 
> $$y' = \frac{(3x^2 - 8x + 1)(x - 2) - (x^3 - 4x^2 + x)(1)}{(x - 2)^2}$$
> 
> **Step 3: Expand and simplify the numerator**
> 
> 1. Expand the first part: $(3x^2 - 8x + 1)(x - 2) = 3x^3 - 6x^2 - 8x^2 + 16x + x - 2 = 3x^3 - 14x^2 + 17x - 2$
> 
> 2. Subtract the second part: $(3x^3 - 14x^2 + 17x - 2) - (x^3 - 4x^2 + x)$
> 
> 3. Combine like terms: $2x^3 - 10x^2 + 16x - 2$
> 
> 
> **Final Answer:**
> 
> $$y' = \frac{2x^3 - 10x^2 + 16x - 2}{(x - 2)^2}$$
> 
> ### (c) $g(x) = (x + \sin x) \tan x$
> 
> **Step 1: Identify the rule** This is a product of two distinct functions, so we need the **Product Rule**:
> 
> $$(uv)' = u'v + uv'$$
> 
> Let's break down the pieces:
> 
> - First ($u$): $x + \sin x \implies u' = 1 + \cos x$
> 
> - Second ($v$): $\tan x \implies v' = \sec^2 x$
> 
> 
> **Step 2: Assemble the parts**
> 
> $$g'(x) = (1 + \cos x)\tan x + (x + \sin x)\sec^2 x$$
> 
> **Step 3: Optional simplification** Distributing the $\tan x$ in the first block can make it look a bit cleaner since $\cos x \cdot \tan x = \sin x$:
> 
> $$(1)\tan x + (\cos x)\left(\frac{\sin x}{\cos x}\right) = \tan x + \sin x$$
> 
> **Final Answer:**
> 
> $$g'(x) = \tan x + \sin x + (x + \sin x)\sec^2 x$$
> 
> ### (d) $y = \cos(e^x) - e^{x^5}$
> 
> **Step 1: Identify the rule** Both terms involve an "inner" and "outer" function, meaning we must apply the **Chain Rule**:
> 
> $$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$
> 
> **Step 2: Handle term one ($\cos(e^x)$)**
> 
> - Outer function is $\cos(\text{blob}) \implies -\sin(\text{blob})$
> 
> - Inner function is $e^x \implies e^x$
> 
> - Putting it together: $-\sin(e^x) \cdot e^x = -e^x \sin(e^x)$
> 
> 
> **Step 3: Handle term two ($-e^{x^5}$)**
> 
> - Outer function is $e^{\text{blob}} \implies e^{\text{blob}}$
> 
> - Inner function is $x^5 \implies 5x^4$
> 
> - Putting it together: $-e^{x^5} \cdot 5x^4 = -5x^4 e^{x^5}$
> 
> 
> **Final Answer:**
> 
> $$y' = -e^x \sin(e^x) - 5x^4 e^{x^5}$$

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Advanced Concept Practice 2
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Active Practice Problem
Evaluate the following indefinite integrals.

(a) $\int \left(x + \frac{2}{x} - \frac{3}{x^3} + \frac{4}{\sqrt[4]{x}}\right) dx$  
(b) $\int (2x + 1)\sqrt[5]{x^2 + x} dx$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Before we dive in, remember the golden rule of indefinite integrals: **never forget to add the constant of integration ($+ C$) at the very end!**
> 
> ### (a) $\int \left(x + \frac{2}{x} - \frac{3}{x^3} + \frac{4}{\sqrt[4]{x}}\right) dx$
> 
> **Step 1: Rewrite the terms using exponents** Just like with derivatives, it is much easier to integrate fractions and roots if we convert them into standard power forms ($x^n$).
> 
> - $\frac{2}{x}$ stays as $2 \cdot \frac{1}{x}$ because it follows a special rule.
> 
> - $-\frac{3}{x^3}$ becomes $-3x^{-3}$
> 
> - $\frac{4}{\sqrt[4]{x}}$ becomes $4x^{-1/4}$
> 
> 
> Now, rewrite the whole integral:
> 
> $$\int \left(x^1 + 2 \cdot \frac{1}{x} - 3x^{-3} + 4x^{-1/4}\right) dx$$
> 
> **Step 2: Integrate term-by-term** We will use the **Power Rule for Integration** ($\int x^n dx = \frac{x^{n+1}}{n+1}$) for most of these, and the **Natural Log Rule** ($\int \frac{1}{x} dx = \ln|x|$) for the second term.
> 
> - **First term ($x^1$):** Add 1 to the exponent, then divide by the new exponent.
> 
> $$\int x^1 dx = \frac{x^2}{2}$$
> 
> - **Second term ($2 \cdot \frac{1}{x}$):** The integral of $\frac{1}{x}$ is always $\ln|x|$.
> 
> $$\int 2 \cdot \frac{1}{x} dx = 2\ln|x|$$
> 
> - **Third term ($-3x^{-3}$):** Add 1 to the exponent ($-3 + 1 = -2$), then divide by $-2$.
> 
> $$\int -3x^{-3} dx = \frac{-3x^{-2}}{-2} = \frac{3}{2}x^{-2} = \frac{3}{2x^2}$$
> 
> - **Fourth term ($4x^{-1/4}$):** Add 1 to the exponent ($-\frac{1}{4} + 1 = \frac{3}{4}$), then divide by $\frac{3}{4}$ (which is the same as multiplying by $\frac{4}{3}$).
> 
> $$\int 4x^{-1/4} dx = 4 \cdot \frac{x^{3/4}}{\frac{3}{4}} = 4 \cdot \left(\frac{4}{3}\right)x^{3/4} = \frac{16}{3}x^{3/4}$$
> 
> 
> **Final Answer:**
> 
> $$\frac{1}{2}x^2 + 2\ln|x| + \frac{3}{2x^2} + \frac{16}{3}x^{3/4} + C$$
> 
> ### (b) $\int (2x + 1)\sqrt[5]{x^2 + x} \, dx$
> 
> **Step 1: Identify the method ($u$-substitution)** Notice that we have a complicated "inner" function ($x^2 + x$) sitting inside a fifth root, and its exact derivative ($2x + 1$) is multiplying the rest of the expression. This is a textbook cue to use **$u$-substitution**.
> 
> Let's define our pieces:
> 
> - Let $u = x^2 + x$
> 
> - Take the derivative to find $du$: $du = (2x + 1) \, dx$
> 
> 
> **Step 2: Substitute $u$ and $du$ into the integral** Replace $(x^2 + x)$ with $u$, and replace $(2x + 1)dx$ with $du$.
> 
> $$\int \sqrt[5]{u} \, du$$
> 
> **Step 3: Rewrite and integrate** Convert the root into a fractional exponent so you can apply the Power Rule:
> 
> $$\int u^{1/5} \, du$$
> 
> Add 1 to the exponent ($\frac{1}{5} + 1 = \frac{6}{5}$), and divide by $\frac{6}{5}$ (multiply by $\frac{5}{6}$):
> 
> $$\frac{5}{6}u^{6/5} + C$$
> 
> **Step 4: Substitute back to the original variable ($x$)** Replace $u$ back with your original expression $(x^2 + x)$ to finish the job.
> 
> **Final Answer:**
> 
> $$\frac{5}{6}(x^2 + x)^{6/5} + C$$

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Advanced Concept Practice 3
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Active Practice Problem
Compute the following definite integrals.

(a) $\int_{1}^{3} \left(3x^2 - \frac{1}{4}x^3\right) dx$  
(b) $\int_{0}^{2} \frac{1}{5x + 1} dx$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Unlike indefinite integrals, **definite integrals** give us a specific numerical value (representing the net area under the curve between two boundaries) and do not need a $+ C$ at the end. We will use the **Fundamental Theorem of Calculus**:
> 
> $$\int_{a}^{b} f(x) \, dx = F(b) - F(a)$$
> 
> where $F(x)$ is the antiderivative.
> 
> ### (a) $\int_{1}^{3} \left(3x^2 - \frac{1}{4}x^3\right) dx$
> 
> **Step 1: Find the antiderivative $F(x)$** Integrate each term individually using the Power Rule ($\int x^n dx = \frac{x^{n+1}}{n+1}$):
> 
> - **First term ($3x^2$):** $\int 3x^2 \, dx = 3 \cdot \frac{x^3}{3} = x^3$
> 
> - **Second term ($-\frac{1}{4}x^3$):** $\int -\frac{1}{4}x^3 \, dx = -\frac{1}{4} \cdot \frac{x^4}{4} = -\frac{1}{16}x^4$
> 
> 
> So, our antiderivative function is:
> 
> $$F(x) = x^3 - \frac{1}{16}x^4$$
> 
> **Step 2: Evaluate at the upper limit ($x = 3$)** Plug $3$ into your antiderivative:
> 
> $$F(3) = (3)^3 - \frac{1}{16}(3)^4$$
> 
> $$F(3) = 27 - \frac{81}{16} = \frac{432}{16} - \frac{81}{16} = \frac{351}{16}$$
> 
> **Step 3: Evaluate at the lower limit ($x = 1$)** Plug $1$ into your antiderivative:
> 
> $$F(1) = (1)^3 - \frac{1}{16}(1)^4$$
> 
> $$F(1) = 1 - \frac{1}{16} = \frac{16}{16} - \frac{1}{16} = \frac{15}{16}$$
> 
> **Step 4: Subtract the lower bound value from the upper bound value ($F(3) - F(1)$)**
> 
> $$\frac{351}{16} - \frac{15}{16} = \frac{336}{16}$$
> 
> Simplifying the fraction gives exactly **21**.
> 
> **Final Answer:**
> 
> $$21$$
> 
> ### (b) $\int_{0}^{2} \frac{1}{5x+1} dx$
> 
> **Step 1: Use $u$-substitution to find the antiderivative** Because the denominator contains a linear function ($5x + 1$), we need to use a simple $u$-sub.
> 
> - Let $u = 5x + 1$
> 
> - Take the derivative: $du = 5 \, dx \implies dx = \frac{1}{5} \, du$
> 
> 
> **Step 2: Change the limits of integration to match $u$** When dealing with definite integrals, it's easiest to convert the $x$-boundaries into $u$-boundaries using your substitution formula ($u = 5x + 1$):
> 
> - **Lower limit ($x = 0$):** $u = 5(0) + 1 = 1$
> 
> - **Upper limit ($x = 2$):** $u = 5(2) + 1 = 11$
> 
> 
> **Step 3: Rewrite and evaluate the integral in terms of $u$** Substitute your components and the new boundaries into the integral:
> 
> $$\int_{1}^{11} \frac{1}{u} \cdot \left(\frac{1}{5} \, du\right) = \frac{1}{5} \int_{1}^{11} \frac{1}{u} \, du$$
> 
> The integral of $\frac{1}{u}$ is $\ln|u|$:
> 
> $$\frac{1}{5} \Big[ \ln|u| \Big]_{1}^{11}$$
> 
> **Step 4: Apply the boundaries**
> 
> $$\frac{1}{5} \left( \ln(11) - \ln(1) \right)$$
> 
> Since $\ln(1) = 0$, this simplifies beautifully:
> 
> $$\frac{1}{5} (\ln(11) - 0) = \frac{1}{5}\ln(11)$$
> 
> **Final Answer:**
> 
> $$\frac{1}{5}\ln(11) \quad \text{(or approximately 0.4796)}$$

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 01 and overview of homework homework assignment.
