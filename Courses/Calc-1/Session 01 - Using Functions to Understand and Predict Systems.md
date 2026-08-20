---
title: "Session 01 - Using Functions to Understand and Predict Systems"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 01 - Using Functions to Understand and Predict Systems

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Review domain, range, and evaluation of algebra/piecewise functions.
> - Work with function compositions and inverse functions.
> - Master trigonometric unit circle values and logarithmic symmetry rules.

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Mathematical Modeling
> Before launching into the calculus sequence, engineers must possess fluent mechanics with standard functions, trigonometry, and logarithms to represent physical boundaries, coordinate rotations, and exponential decay models.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Basic Functions & Piecewise Evaluation
#### Problem 1
Let $f(x) = 3x^2 - x$. 
 Find the following: 
 * (a) $f(1)$ 



 * (b) $f(-4)$ 



 * (c) $f(a+1)$

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 1
> (a) Find $f(1)$
> Substitute $x = 1$ into the function:
> $$f(1) = 3(1)^2 - (1)$$
> $$f(1) = 3(1) - 1$$
> $$f(1) = 3 - 1$$
> $$f(1) = 2$$
> ---
> (b) Find $f(-4)$
> Substitute $x = -4$ into the function:
> $$f(-4) = 3(-4)^2 - (-4)$$
> $$f(-4) = 3(16) + 4$$
> $$f(-4) = 48 + 4$$
> $$f(-4) = 52$$
> ---
> (c) Find $f(a+1)$
> Substitute the expression $(a+1)$ everywhere there is an $x$ in the function:
> $$f(a+1) = 3(a+1)^2 - (a+1)$$
> First, expand $(a+1)^2$:
> $$(a+1)^2 = a^2 + 2a + 1$$
> Now substitute that back and distribute the $3$, as well as the negative sign:
> $$f(a+1) = 3(a^2 + 2a + 1) - a - 1$$
> $$f(a+1) = 3a^2 + 6a + 3 - a - 1$$
> Combine like terms ($6a - a$ and $3 - 1$):
> $$f(a+1) = 3a^2 + 5a + 2$$

#### Problem 2
State the domain and range of the following functions: 
[[How Domain and Range Work]]
 * (a) $f(x) = x^2 + 1$ 



 * (b) $f(x) = \sqrt{x+3}$ 



 * (c) $f(x) = \frac{9}{x-2}$

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 2
> ### (a) $f(x) = x^2 + 1$ *
> **Domain:**
> This is a polynomial function (a parabola). There are no fractions with variables in the denominator and no square roots to restrict our inputs. You can plug in any real number.
> **Domain:** $(-\infty, \infty)$
> **Range:**
> The term $x^2$ is always greater than or equal to $0$ for any real number $x$. Adding $1$ shifts the entire graph up by $1$ unit, meaning the minimum value the function can output is $1$.
> **Range:** $[1, \infty)$
> ---
> ### (b) $f(x) = \sqrt{x+3}$
> **Domain:** The expression inside a square root (the radicand) must be greater than or equal to $0$ to stay within the real number system. $$x + 3 \geq 0$$ $$x \geq -3$$
> **Domain:** $[-3, \infty)$
> **Range:** The principal (positive) square root function $\sqrt{\text{anything}}$ always outputs values greater than or equal to $0$. As $x$ goes from $-3$ to infinity, the outputs go from $0$ to infinity.
> **Range:** $[0, \infty)$
> ---
> ### (c) $f(x) = \frac{9}{x-2}$
> **Domain:** A rational function is undefined when its denominator is equal to $0$. We must exclude any values of $x$ that cause division by zero: $$x - 2 = 0 \implies x = 2$$ Therefore, $x$ can be any real number except $2$.
> **Domain:** $(-\infty, 2) \cup (2, \infty)$
> **Range:** To find the range, we can set $y = \frac{9}{x-2}$ and see what values $y$ cannot take. Notice that the numerator is a constant ($9$). A fraction with a non-zero numerator can never equal $0$, because the only way a fraction equals $0$ is if its numerator is $0$. Therefore, $y \neq 0$. Alternatively, solving for $x$ in terms of $y$: $$y(x - 2) = 9$$ $$x - 2 = \frac{9}{y}$$ $$x = \frac{9}{y} + 2$$ This shows that $y$ cannot equal $0$, as it would cause division by zero.
> **Range:** $(-\infty, 0) \cup (0, \infty)$

#### Problem 3
Use the function given to evaluate the following: 
 $$h(x) = \begin{cases} 1 - x^5 & : x < 3 \\ e^x & : x = 3 \\ 8 & : x > 3 \end{cases}$$
   * (a) $h(5)$ 



   * (b) $h(-1)$ 



   * (c) $h(3)$

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 3
> ### (a) Find $h(5)$
> **Determine the condition:**
> The input is $x = 5$. Since $5 > 3$, we use the third piece of the function.
> **Evaluate:** The function states that for any $x > 3$, the output is a constant $8$. $$h(5) = 8$$
> ---
> ### (b) Find $h(-1)$
> **Determine the condition:**
> The input is $x = -1$. Since $-1 < 3$, we use the first piece of the function.
> **Evaluate:** Substitute $x = -1$ into $1 - x^5$: $$h(-1) = 1 - (-1)^5$$ $$h(-1) = 1 - (-1)$$ $$h(-1) = 1 + 1$$ $$h(-1) = 2$$
> ---
> ### (c) Find $h(3)$
> **Determine the condition:**
> The input is $x = 3$. Since $3 = 3$, we use the second piece of the function.
> **Evaluate:** Substitute $x = 3$ into $e^x$: $$h(3) = e^3$$

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review domain restrictions (denominator != 0, radicand >= 0).

### 00:30 - 00:45 (15 mins) — Skill Block 2: Compositions & Linear/Quadratic Systems
#### Problem 4
Let $f(x) = \sqrt{x^2 - 1}$ and $g(x) = x + 1$. 

Find the following: 
* (a) $\left(\frac{g}{f}\right)(x)$ 



* (b) $f(g(x))$ 



* (c) $(g \circ f)(2)$

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 4
> ### (a) Find $\left(\frac{g}{f}\right)(x)$
> The notation $\left(\frac{g}{f}\right)(x)$ represents the division of function $g(x)$ by function $f(x)$: $$\left(\frac{g}{f}\right)(x) = \frac{g(x)}{f(x)}$$
> Substitute the given equations: $$\left(\frac{g}{f}\right)(x) = \frac{x + 1}{\sqrt{x^2 - 1}}$$
> *Optional Simplification (Rationalizing or Factoring):* Notice that $x^2 - 1 = (x - 1)(x + 1)$. For $x > 1$, you can rewrite the expression as: $$\frac{x + 1}{\sqrt{(x - 1)(x + 1)}} = \frac{\sqrt{x + 1}\sqrt{x + 1}}{\sqrt{x - 1}\sqrt{x + 1}} = \frac{\sqrt{x + 1}}{\sqrt{x - 1}} = \sqrt{\frac{x + 1}{x - 1}}$$
> ---
> ### (b) Find $f(g(x))$ The composite notation $f(g(x))$ means you substitute the entire function $g(x)$ into every $x$ in $f(x)$: $$f(g(x)) = f(x + 1)$$
> Substitute $(x + 1)$ into $f(x) = \sqrt{x^2 - 1}$: $$f(g(x)) = \sqrt{(x + 1)^2 - 1}$$
> Expand the squared binomial $(x + 1)^2 = x^2 + 2x + 1$: $$f(g(x)) = \sqrt{(x^2 + 2x + 1) - 1}$$
> Simplify by canceling out $+1$ and $-1$: $$f(g(x)) = \sqrt{x^2 + 2x}$$
> ---
> ### (c) Find $(g \circ f)(2)$ The composition notation $(g \circ f)(2)$ means $g(f(2))$. Work from the inside out.
> **Step 1: Find $f(2)$**
> Substitute $x = 2$ into $f(x)$: $$f(2) = \sqrt{(2)^2 - 1}$$ $$f(2) = \sqrt{4 - 1}$$ $$f(2) = \sqrt{3}$$
> **Step 2: Plug this result into $g(x)$**
> Now find $g(\sqrt{3})$ by substituting $\sqrt{3}$ into $g(x) = x + 1$: $$g(f(2)) = g(\sqrt{3}) = \sqrt{3} + 1$$
> Therefore: $$(g \circ f)(2) = \sqrt{3} + 1$$

#### Problem 5
Find the equation of the line through the point $(1, 7)$ with slope $\frac{2}{3}$. Present your answer in slope-intercept form. 

[[How Point-Slope Form Works]]

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 5
> ### Step 1: Choose a linear equation form You can use either the **point-slope form** or the **slope-intercept form** to find the equation. Both methods yield the same result.
> #### Method 1: Using Point-Slope Form The point-slope form of a line is: $$y - y_1 = m(x - x_1)$$
> Substitute $m = \frac{2}{3}$, $x_1 = 1$, and $y_1 = 7$: $$y - 7 = \frac{2}{3}(x - 1)$$
> Distribute the $\frac{2}{3}$ on the right side: $$y - 7 = \frac{2}{3}x - \frac{2}{3}$$ Add $7$ to both sides to isolate $y$: $$y = \frac{2}{3}x - \frac{2}{3} + 7$$
> To combine $-\frac{2}{3}$ and $7$, find a common denominator ($3$): $$7 = \frac{21}{3}$$ $$y = \frac{2}{3}x - \frac{2}{3} + \frac{21}{3}$$ $$y = \frac{2}{3}x + \frac{19}{3}$$
> ---
> #### Method 2: Using Slope-Intercept Form Directly The slope-intercept form is: $$y = mx + b$$
> Substitute the known slope $m = \frac{2}{3}$ and the coordinates of the point $x = 1, y = 7$ to solve for the $y$-intercept ($b$): $$7 = \frac{2}{3}(1) + b$$ $$7 = \frac{2}{3} + b$$ Subtract $\frac{2}{3}$ from both sides: $$7 - \frac{2}{3} = b$$ $$\frac{21}{3} - \frac{2}{3} = b$$ $$b = \frac{19}{3}$$
> Substitute $m$ and $b$ back into the slope-intercept equation: $$y = \frac{2}{3}x + \frac{19}{3}$$
> ---
> ### Final Answer The equation of the line in slope-intercept form is: $$y = \frac{2}{3}x + \frac{19}{3}$$

#### Problem 6
Find the solutions to the following: 
* (a) $1 - (4 - (5 - x)) = 3x - (4 + x)$ 



* (b) $x^2 + 5x = -4$ 



* (c) $2\theta \cos(\theta) + \theta = 0$ on $[0, 2\pi]$

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 6
> ### (a) Solve: $1 - (4 - (5 - x)) = 3x - (4 + x)$
> **Step 1: Simplify the innermost parentheses on the left side.** Distribute the negative sign into $(5 - x)$: $$1 - (4 - 5 + x) = 3x - (4 + x)$$ $$1 - (-1 + x) = 3x - (4 + x)$$
> **Step 2: Distribute the remaining negative signs on both sides.** On the left, distribute the negative sign into $(-1 + x)$. On the right, distribute the negative sign into $(4 + x)$: $$1 + 1 - x = 3x - 4 - x$$
> **Step 3: Combine like terms on both sides.** $$2 - x = 2x - 4$$
> **Step 4: Isolate the variable $x$.** Add $x$ to both sides: $$2 = 3x - 4$$ Add $4$ to both sides: $$6 = 3x$$ Divide by $3$: $$x = 2$$
> ---
> ### (b) Solve: $x^2 + 5x = -4$
> **Step 1: Set the quadratic equation to zero.** Add $4$ to both sides to write it in standard form ($ax^2 + bx + c = 0$): $$x^2 + 5x + 4 = 0$$
> **Step 2: Factor the trinomial.** We need two numbers that multiply to $4$ and add up to $5$. Those numbers are $1$ and $4$: $$(x + 1)(x + 4) = 0$$
> **Step 3: Apply the Zero Product Property.** Set each factor equal to zero and solve: $$x + 1 = 0 \implies x = -1$$ $$x + 4 = 0 \implies x = -4$$
> **Final Answer:** $$x = -1, \quad x = -4$$
> ---
> ### (c) Solve: $2\theta \cos(\theta) + \theta = 0$ on $[0, 2\pi]$
> **Step 1: Factor out the common term.** Both terms share a $\theta$, so factor it out: $$\theta(2\cos(\theta) + 1) = 0$$
> **Step 2: Apply the Zero Product Property.** Set each factor equal to zero: 1. $\theta = 0$ 2. $2\cos(\theta) + 1 = 0$
> **Step 3: Solve the trigonometric equation.** Isolate $\cos(\theta)$ in the second equation: $$2\cos(\theta) = -1$$ $$\cos(\theta) = -\frac{1}{2}$$
> **Step 4: Find solutions within the interval $[0, 2\pi]$.** * From the first factor: $\theta = 0$ is within the interval. * From the second factor: $\cos(\theta) = -\frac{1}{2}$ when $\theta$ is in Quadrant II and Quadrant III with a reference angle of $\frac{\pi}{3}$: * Quadrant II: $\theta = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$ * Quadrant III: $\theta = \pi + \frac{\pi}{3} = \frac{4\pi}{3}$
> **Final Answer:** $$\theta = 0, \quad \frac{2\pi}{3}, \quad \frac{4\pi}{3}$$

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Highlight slope-intercept vs point-slope forms.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Trigonometry & Exponentials/Logarithms
#### Problem 7
Given $\sin(\theta) = \frac{12}{13}$ and $\frac{\pi}{2} < \theta < \pi$, find the other 5 trigonometric values. 
[[Trigonometry Review]]

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 7
> ### Problem Analysis
> We are given: * $\sin(\theta) = \frac{12}{13}$ * $\frac{\pi}{2} < \theta < \pi$ (This indicates that $\theta$ lies in **Quadrant II**)
> In Quadrant II: * Sine ($\sin$) and Cosecant ($\csc$) are **positive**. * Cosine ($\cos$), Secant ($\sec$), Tangent ($\tan$), and Cotangent ($\cot$) are **negative**.
> ---
> ### Step 1: Find the missing side of the reference triangle Sine is defined as the ratio of the opposite side to the hypotenuse: $$\sin(\theta) = \frac{\text{Opposite}}{\text{Hypotenuse}} = \frac{12}{13}$$
> Use the Pythagorean theorem ($a^2 + b^2 = c^2$) to find the adjacent side ($x$): $$x^2 + 12^2 = 13^2$$ $$x^2 + 144 = 169$$ $$x^2 = 25$$ $$x = \pm 5$$
> Since the angle is in Quadrant II, the adjacent side along the $x$-axis must be negative: $$\text{Adjacent} = -5$$
> ---
> ### Step 2: Evaluate the remaining 5 trigonometric functions Using our values ($\text{Opposite} = 12$, $\text{Adjacent} = -5$, $\text{Hypotenuse} = 13$):
> **Cosine ($\cos(\theta)$):** $\frac{\text{Adjacent}}{\text{Hypotenuse}}$ $$\cos(\theta) = -\frac{5}{13}$$
> **Tangent ($\tan(\theta)$):** $\frac{\text{Opposite}}{\text{Adjacent}}$ $$\tan(\theta) = -\frac{12}{5}$$
> **Cosecant ($\csc(\theta)$):** $\frac{\text{Hypotenuse}}{\text{Opposite}}$ (or the reciprocal of $\sin(\theta)$) $$\csc(\theta) = \frac{13}{12}$$
> **Secant ($\sec(\theta)$):** $\frac{\text{Hypotenuse}}{\text{Adjacent}}$ (or the reciprocal of $\cos(\theta)$) $$\sec(\theta) = -\frac{13}{5}$$
> **Cotangent ($\cot(\theta)$):** $\frac{\text{Adjacent}}{\text{Opposite}}$ (or the reciprocal of $\tan(\theta)$) $$\cot(\theta) = -\frac{5}{12}$$

#### Problem 8
Find the inverse, $f^{-1}(x)$, of the following functions: 
* (a) $f(x) = \frac{4x-1}{2x+3}$ 



* (b) $f(x) = \ln(5x-1)$ 


<div style="page-break-after: always;"></div>

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 8
> ### (a) $f(x) = \frac{4x-1}{2x+3}$
> **Step 1: Replace $f(x)$ with $y$.** $$y = \frac{4x-1}{2x+3}$$
> **Step 2: Swap the positions of $x$ and $y$ to set up the inverse relation.** $$x = \frac{4y-1}{2y+3}$$
> **Step 3: Solve for $y$.** Multiply both sides by the denominator $(2y + 3)$ to eliminate the fraction: $$x(2y + 3) = 4y - 1$$ Distribute the $x$: $$2xy + 3x = 4y - 1$$ Move all terms containing $y$ to one side and constants/other variables to the opposite side. Subtract $4y$ and $3x$ from both sides: $$2xy - 4y = -3x - 1$$ Factor out the common variable $y$ on the left side: $$y(2x - 4) = -3x - 1$$ Isolate $y$ by dividing both sides by $(2x - 4)$: $$y = \frac{-3x - 1}{2x - 4}$$ *Optional simplification:* Factor out a $-1$ from the numerator and denominator to eliminate leading negatives: $$y = \frac{-(3x + 1)}{-(4 - 2x)} = \frac{3x + 1}{4 - 2x}$$
> **Step 4: Rewrite as $f^{-1}(x)$.** $$f^{-1}(x) = \frac{3x + 1}{4 - 2x} \quad \left(\text{or } \frac{-3x - 1}{2x - 4}\right)$$
> ---
> ### (b) $f(x) = \ln(5x-1)$
> **Step 1: Replace $f(x)$ with $y$.** $$y = \ln(5x-1)$$
> **Step 2: Swap the positions of $x$ and $y$.** $$x = \ln(5y-1)$$
> **Step 3: Solve for $y$.** To undo the natural logarithm ($\ln$), convert the equation to exponential form by base-$e$ exponentiating both sides ($e^{\ln(\text{something})} = \text{something}$): $$e^x = e^{\ln(5y-1)}$$ $$e^x = 5y - 1$$ Add $1$ to both sides: $$e^x + 1 = 5y$$ Isolate $y$ by dividing by $5$: $$y = \frac{e^x + 1}{5}$$
> **Step 4: Rewrite as $f^{-1}(x)$.** $$f^{-1}(x) = \frac{e^x + 1}{5}$$

#### Problem 9
Solve the following equations: 
* (a) $4^{2x-3} = 64$



* (b) $4e^{2x} - 7e^x = 15$ 



* (c) $\log_3 x + \log_3(x-6) = 3$ 

<div style="page-break-after: always;"></div>

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 9
> ### (a) Solve: $4^{2x-3} = 64$
> **Step 1: Rewrite both sides with a common base.** Notice that $64$ is a power of $4$ ($4^3 = 64$): $$4^{2x-3} = 4^3$$
> **Step 2: Set the exponents equal to each other.** Since the bases are identical, their powers must be equal: $$2x - 3 = 3$$
> **Step 3: Solve for $x$.** Add $3$ to both sides: $$2x = 6$$ Divide by $2$: $$x = 3$$
> ---
> ### (b) Solve: $4e^{2x} - 7e^x = 15$
> **Step 1: Set the equation to zero to form a quadratic-like structure.** Subtract $15$ from both sides: $$4e^{2x} - 7e^x - 15 = 0$$
> **Step 2: Use $u$-substitution to make factoring clearer.** Let $u = e^x$. Since $(e^x)^2 = e^{2x}$, then $u^2 = e^{2x}$. Substitute these into the equation: $$4u^2 - 7u - 15 = 0$$
> **Step 3: Factor the quadratic equation.** We look for two numbers that multiply to $4 \times (-15) = -60$ and add up to $-7$. Those numbers are $-12$ and $5$. Split the middle term: $$4u^2 - 12u + 5u - 15 = 0$$ Factor by grouping: $$4u(u - 3) + 5(u - 3) = 0$$ $$(4u + 5)(u - 3) = 0$$
> **Step 4: Solve for $u$.** $$4u + 5 = 0 \implies u = -\frac{5}{4}$$ $$u - 3 = 0 \implies u = 3$$
> **Step 5: Substitute $e^x$ back in and solve for $x$.**
> * **Case 1:** $e^x = -\frac{5}{4}$ An exponential function with a positive base ($e \approx 2.718$) can never produce a negative output. Therefore, this equation has **no real solution**.
> * **Case 2:** $e^x = 3$ Take the natural logarithm ($\ln$) of both sides to isolate $x$: $$\ln(e^x) = \ln(3)$$ $$x = \ln(3)$$
> ---
> ### (c) Solve: $\log_3 x + \log_3(x-6) = 3$
> **Step 1: Condense the logarithms using logarithmic properties.** Use the product property ($\log_b A + \log_b B = \log_b(AB)$): $$\log_3(x(x - 6)) = 3$$ $$\log_3(x^2 - 6x) = 3$$
> **Step 2: Convert the logarithmic equation into exponential form.** Rewrite the equation as $\text{base}^{\text{exponent}} = \text{argument}$: $$3^3 = x^2 - 6x$$ $$27 = x^2 - 6x$$
> **Step 3: Move all terms to one side to solve the quadratic equation.** Subtract $27$ from both sides: $$x^2 - 6x - 27 = 0$$
> **Step 4: Factor the trinomial.** Find two numbers that multiply to $-27$ and add to $-6$. Those numbers are $-9$ and $3$: $$(x - 9)(x + 3) = 0$$
> **Step 5: Find the potential solutions.** $$x - 9 = 0 \implies x = 9$$ $$x + 3 = 0 \implies x = -3$$
> **Step 6: Check for extraneous solutions.** The argument of a logarithm must always be strictly greater than zero ($\text{argument} > 0$). * Test $x = 9$: $\log_3(9)$ and $\log_3(9-6)=\log_3(3)$ are both valid inputs. * Test $x = -3$: $\log_3(-3)$ is undefined because you cannot take the logarithm of a negative number. Thus, $x = -3$ is an extraneous solution.
> **Final Answer:** $$x = 9$$

#### Problem 10
Using the properties of logarithms, express the given quantity as a single logarithm: $$\ln(a+b) + \ln(a-b) - 2\ln c$$
[[Logarithmic Review]]


<div style="page-break-after: always;"></div>

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 10
> ### 10. Express as a single logarithm: $\ln(a+b) + \ln(a-b) - 2\ln c$ To combine these terms into a single logarithm, we will apply the properties of logarithms step by step.
> ---
> **Step 1: Apply the Power Property to the last term.** The power property states that $n\ln(x) = \ln(x^n)$. Move the coefficient $2$ to the exponent of $c$: $$\ln(a+b) + \ln(a-b) - \ln(c^2)$$
> ---
> **Step 2: Apply the Product Property to the first two terms.** The product property states that $\ln(A) + \ln(B) = \ln(A \cdot B)$. Combine the first two added logarithms: $$\ln[(a+b)(a-b)] - \ln(c^2)$$ *Optional Identity Step:* Recognize that $(a+b)(a-b)$ is a difference of squares, which simplifies to $a^2 - b^2$: $$\ln(a^2 - b^2) - \ln(c^2)$$
> ---
> **Step 3: Apply the Quotient Property to combine the remaining terms.** The quotient property states that $\ln(A) - \ln(B) = \ln\left(\frac{A}{B}\right)$. Bring the subtracted term into the denominator: $$\ln\left(\frac{(a+b)(a-b)}{c^2}\right)$$
> ---
> ### Final Answer Both forms are mathematically correct single logarithms: $$\ln\left(\frac{a^2 - b^2}{c^2}\right) \quad \text{or} \quad \ln\left(\frac{(a+b)(a-b)}{c^2}\right)$$

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
#### Problem 11
Evaluate the following. Keep in mind the restricted function values for inverse trig functions: 
* (a) $\cos^{-1}\left(\frac{\sqrt{2}}{2}\right)$ 



* (b) $\arctan(\sqrt{3})$ 

[[Unit Circle Review]]


<div style="page-break-after: always;"></div>

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 11
> ### (a) Evaluate: $\cos^{-1}\left(\frac{\sqrt{2}}{2}\right)$
> **Step 1: Rephrase the expression.** We are looking for an angle $\theta$ such that: $$\cos(\theta) = \frac{\sqrt{2}}{2}$$
> **Step 2: Apply range restrictions.** The output angle $\theta$ must fall within $[0, \pi]$.
> **Step 3: Determine the angle from the unit circle.** Since the value $\frac{\sqrt{2}}{2}$ is positive, $\theta$ must be in Quadrant I. On the unit circle, the cosine function outputs $\frac{\sqrt{2}}{2}$ at a reference angle of $45^\circ$. In radians, this corresponds to: $$\theta = \frac{\pi}{4}$$
> **Final Answer:** $$\cos^{-1}\left(\frac{\sqrt{2}}{2}\right) = \frac{\pi}{4}$$
> ---
> ### (b) Evaluate: $\arctan(\sqrt{3})$
> **Step 1: Rephrase the expression.** We are looking for an angle $\theta$ such that: $$\tan(\theta) = \sqrt{3}$$
> **Step 2: Apply range restrictions.** The output angle $\theta$ must fall within $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.
> **Step 3: Determine the angle using basic identities.** Recall that $\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)}$. For the result to be a positive value $\sqrt{3}$, our angle must lie in Quadrant I. Let's test the standard unit circle values where this ratio occurs: At $\theta = \frac{\pi}{3}$: $$\sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} \quad \text{and} \quad \cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$$ $$\tan\left(\frac{\pi}{3}\right) = \frac{\frac{\sqrt{3}}{2}}{\frac{1}{2}} = \frac{\sqrt{3}}{2} \cdot \frac{2}{1} = \sqrt{3}$$ This perfectly matches our value and fits within the allowable interval.
> **Final Answer:** $$\arctan(\sqrt{3}) = \frac{\pi}{3}$$

#### Problem 12
Determine if the following functions are even, odd, or neither: 
* (a) $f(x) = 5x^4 - 3x^2 + 7$ 



* (b) $f(x) = 3x - 6$ 



* (c) $f(x) = 4x^5 + 2x^3 - x$

> [!workspace] Student Practice Space
> 

> [!check]- Solution to Problem 12
> To determine the symmetry of a function algebraically, replace $x$ with $-x$ and simplify the expression:
> * If $f(-x) = f(x)$, the function is **Even** (symmetric across the $y$-axis). * If $f(-x) = -f(x)$, the function is **Odd** (symmetric about the origin). * If neither condition is met, the function is **Neither**.
> ---
> ### (a) $f(x) = 5x^4 - 3x^2 + 7$
> **Step 1: Substitute $-x$ into the function.** $$f(-x) = 5(-x)^4 - 3(-x)^2 + 7$$
> **Step 2: Simplify using exponent rules.** A negative number raised to an even power becomes positive ($(-x)^4 = x^4$ and $(-x)^2 = x^2$): $$f(-x) = 5x^4 - 3x^2 + 7$$
> **Step 3: Compare with the original function.** Notice that $f(-x)$ is exactly identical to the original $f(x)$.
> **Conclusion:** The function is **Even**.
> ---
> ### (b) $f(x) = 3x - 6$
> **Step 1: Substitute $-x$ into the function.** $$f(-x) = 3(-x) - 6$$
> **Step 2: Simplify the terms.** $$f(-x) = -3x - 6$$
> **Step 3: Compare with the original $f(x)$ and negative version $-f(x)$.** * $f(-x) \neq f(x)$ (since $-3x - 6 \neq 3x - 6$), so it is **not even**. * Now factor out a negative sign to test if it equals $-f(x)$: $$-f(x) = -(3x - 6) = -3x + 6$$ Since $f(-x) = -3x - 6 \neq -3x + 6$, it is **not odd**.
> **Conclusion:** The function is **Neither**.
> ---
> ### (c) $f(x) = 4x^5 + 2x^3 - x$
> **Step 1: Substitute $-x$ into the function.** $$f(-x) = 4(-x)^5 + 2(-x)^3 - (-x)$$
> **Step 2: Simplify using exponent rules.** A negative number raised to an odd power retains its negative sign ($(-x)^5 = -x^5$ and $(-x)^3 = -x^3$): $$f(-x) = 4(-x^5) + 2(-x^3) + x$$ $$f(-x) = -4x^5 - 2x^3 + x$$
> **Step 3: Factor out a negative sign to compare with $-f(x)$.** $$f(-x) = -(4x^5 + 2x^3 - x)$$ Notice that this is exactly equal to $-f(x)$.
> **Conclusion:** The function is **Odd**.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Wrap up precalculus review and connect to limits next week.