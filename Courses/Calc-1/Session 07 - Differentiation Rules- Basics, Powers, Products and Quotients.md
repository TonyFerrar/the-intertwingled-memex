---
title: "Session 07 - Differentiation Rules: Basics, Powers, Products and Quotients"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 07 - Differentiation Rules: Basics, Powers, Products and Quotients

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Advanced Algebraic Pre- and Post-Processing
> - Structural Pattern Recognition & Rule Execution
> - Contextual & Tabular Translation of the Derivative

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Combining Functions in Real Systems
> The foundational calculus rules covered in these materials—such as the product, quotient, trigonometric, and higher-order derivative rules—serve as the mathematical architecture for a wide array of real-life engineering applications. For instance, aerospace and mechanical engineers utilize the Product Rule to analyze the rate of change of stress and bending moments along structurally dynamic components like airplane wings or bridge beams. Meanwhile, chemical and electrical engineers apply the Quotient Rule to calculate fluid concentration variations in mixing systems or to evaluate polynomial transfer functions when filtering audio and data frequencies. Because any rotating or vibrating system operates in cycles, mechanical engineers utilize trigonometric derivatives to transform mathematical models of harmonic position into exact values for velocity and acceleration, allowing them to design optimal dampening systems for automotive suspensions and earthquake-resistant skyscrapers. Furthermore, autonomous robotics and vehicular programming heavily track higher-order derivatives—such as the third derivative, which represents physical "jerk"—to ensure automated systems move smoothly without causing equipment wear or passenger whiplash. Finally, calculating the equation of a geometric tangent line enables optimization via gradient descent algorithms in machine learning software , while numerical tabular differentiation allows materials and test engineers to calculate exact physical degradation rates directly from raw sensor data logs where an explicit algebraic formula does not exist.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Advanced Algebraic Pre- and Post-Processing
> [!note]- Theory & Derivations
> ## 1. Core Lecture Notes
> In calculus, errors rarely stem from the calculus itself—they are almost always algebra errors in disguise. Masterful differentiation relies heavily on your ability to algebraically transform functions **before** you apply a derivative rule (Pre-Processing) and cleanly simplify expressions **after** you differentiate (Post-Processing).
> 
> ### A. Pre-Processing Checklist (The "Get Ready" Phase)
> Never rush to apply a derivative rule if the variable is trapped inside a root or sitting in a denominator. Use these three laws of exponents to flatten the function into standard power form ($x^n$):
> 
> 1. **The Rational Exponent Law:** Turn roots into fractional exponents.
>    $$\sqrt[n]{x^m} \longrightarrow x^{\frac{m}{n}}$$
> 2. **The Negative Exponent Law:** Move variables out of denominators.
>    $$\frac{1}{x^n} \longrightarrow x^{-n}$$
> 3. **The Distributive Law (Expansion):** Multiply polynomial groupings out first to bypass the need for a tedious Product Rule.
>    $$(a + b)(c + d) \longrightarrow ac + ad + bc + bd$$
> 
> ### B. Post-Processing Checklist (The "Clean Up" Phase)
> Once the derivative is taken, leaving an unsimplified string of terms makes finding higher-order derivatives or locating zeroes extremely difficult. Use these steps to simplify:
> 1. **Factor out the Lowest Power:** When looking at terms with fractional or negative exponents, always factor out the variable raised to the smallest (most negative) power.
> 2. **Clear Complex Fractions:** If you have fractions within fractions, multiply the entire numerator and denominator by the Least Common Denominator (LCD).
> 3. **Apply Trigonometric Identities:** Always scan your final numerator for fundamental identities like the Pythagorean identity:
>    $$\sin^2(x) + \cos^2(x) = 1$$
> 
> ---
> 
> ## 2. Walkthrough Sample Problems 
> 
> ### Example 1: Pre-Processing Roots and Denominators
> **Problem:** Rewrite the function $f(x) = \frac{3}{x^2} + 2\sqrt{x^3}$ and find its first derivative.
> 
> **Step 1: Pre-Process** Convert the fraction using negative exponents and the radical using rational exponents:
> $$f(x) = 3x^{-2} + 2x^{\frac{3}{2}}$$
> 
> **Step 2: Differentiate** Apply the standard Power Rule:
> $$f'(x) = 3(-2x^{-3}) + 2\left(\frac{3}{2}x^{\frac{1}{2}}\right)$$
> $$f'(x) = -6x^{-3} + 3x^{\frac{1}{2}}$$
> 
> **Step 3: Post-Process** Convert the negative exponent back into a fraction and the rational exponent back into a radical:
> $$f'(x) = -\frac{6}{x^3} + 3\sqrt{x}$$
> 
> ---
> 
> ### Example 2: Post-Processing via Factoring Lowest Powers
> **Problem:** Simplify the derivative expression $g'(x) = 3x^{-\frac{1}{2}} + 6x^{\frac{1}{2}}$.
> 
> **Step 1: Identify the Lowest Power** The two powers are $-\frac{1}{2}$ and $\frac{1}{2}$. The lower value is $-\frac{1}{2}$.
> 
> **Step 2: Factor Out $3x^{-\frac{1}{2}}$** Remember that factoring out a term is mathematically equivalent to dividing by that term, which means subtracting its exponent: $\frac{1}{2} - \left(-\frac{1}{2}\right) = 1$.
> $$g'(x) = 3x^{-\frac{1}{2}} (1 + 2x^1)$$
> 
> **Step 3: Format the Answer** Drop the negative exponent to the denominator to finalize:
> $$g'(x) = \frac{3(1 + 2x)}{\sqrt{x}}$$
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Civil Engineering — Bending Moments in Beam Stress]]
> [[Civil Engineering — Bending Moments in Beam Stress Solution]]
> 
> ---
> 
> ### Problem 2: [[Aerospace Engineering — Rocket Drag Transformation]]
> [[Aerospace Engineering — Rocket Drag Transformation Solution]]


#### Worked Example
Prove the derivative rule of $f(x)=\cot(x)$:
   $$\frac{d}{dx}\cot(x)=-\csc^{2}(x)$$
   by using the quotient rule.

> [!check]- Worked Solution
> ## Proof: Derivative of $\cot(x)$
> 
> **Goal:** Prove that $\frac{d}{dx} \cot(x) = -\csc^2(x)$ using the quotient rule.
> 
> ### 1. Rewrite the function
> First, express $\cot(x)$ in terms of sine and cosine:
> $$\cot(x) = \frac{\cos(x)}{\sin(x)}$$
> 
> ### 2. Apply the Quotient Rule
> The quotient rule states that for a function $\frac{u}{v}$:
> $$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{u'v - uv'}{v^2}$$
> 
> Assigning our terms:
> * $u = \cos(x) \implies u' = -\sin(x)$
> * $v = \sin(x) \implies v' = \cos(x)$
> 
> Plugging these into the quotient rule formula:
> $$\frac{d}{dx} \cot(x) = \frac{(-\sin(x))(\sin(x)) - (\cos(x))(\cos(x))}{(\sin(x))^2}$$
> 
> ### 3. Simplify the Numerator
> Multiply the terms in the numerator:
> $$\frac{d}{dx} \cot(x) = \frac{-\sin^2(x) - \cos^2(x)}{\sin^2(x)}$$
> 
> Factor out a negative one ($-1$) from the numerator:
> $$\frac{d}{dx} \cot(x) = \frac{-(\sin^2(x) + \cos^2(x))}{\sin^2(x)}$$
> 
> ### 4. Apply the Pythagorean Identity
> Recall the fundamental trigonometric identity: $\sin^2(x) + \cos^2(x) = 1$. Substitute this into the numerator:
> $$\frac{d}{dx} \cot(x) = \frac{-1}{\sin^2(x)}$$
> 
> ### 5. Final Trigonometric Substitution
> Since the reciprocal of $\sin(x)$ is $\csc(x)$, it follows that $\frac{1}{\sin^2(x)} = \csc^2(x)$:
> $$\frac{d}{dx} \cot(x) = -\csc^2(x)$$
> 
> **$\blacksquare$ Proof Complete**

#### Active Practice Problem
Use derivative rules to find the derivatives of the following functions. Simplify by combining like terms and canceling common factors.

$$f(t)=(7+t^{7})\left(\frac{3}{\sqrt[3]{t}}+3t\right)$$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Solution for Problem 2
> 
> **Function:** $$f(t) = (7 + t^7)\left(\frac{3}{\sqrt[3]{t}} + 3t\right)$$
> 
> To find the derivative $f'(t)$, we can either use the **Product Rule** directly or rewrite the function by distributing (foiling) first. Rewriting the function first is often less prone to algebraic errors. Let's rewrite it using rational exponents.
> 
> ### Step 1: Rewrite the Function
> Recall that $\frac{3}{\sqrt[3]{t}} = \frac{3}{t^{1/3}} = 3t^{-1/3}$.
> 
> $$f(t) = (7 + t^7)(3t^{-1/3} + 3t)$$
> 
> Now, distribute the terms:
> $$f(t) = 7(3t^{-1/3}) + 7(3t) + t^7(3t^{-1/3}) + t^7(3t)$$
> 
> Simplify the exponents using the rule $t^a \cdot t^b = t^{a+b}$:
> * $t^7 \cdot t^{-1/3} = t^{21/3 - 1/3} = t^{20/3}$
> 
> $$f(t) = 21t^{-1/3} + 21t + 3t^{20/3} + 3t^8$$
> 
> ---
> 
> ### Step 2: Differentiate Term by Term
> Now, apply the **Power Rule** ($\frac{d}{dt}[t^n] = n t^{n-1}$) to each term:
> 
> $$f'(t) = 21\left(-\frac{1}{3}\right)t^{-4/3} + 21(1) + 3\left(\frac{20}{3}\right)t^{17/3} + 3(8)t^7$$
> 
> Multiply the coefficients:
> $$f'(t) = -7t^{-4/3} + 21 + 20t^{17/3} + 24t^7$$
> 
> ---
> 
> ### Step 3: Format the Final Answer
> Convert rational or negative exponents back into radical forms if preferred, though leaving it in rational exponent form is generally acceptable:
> 
> $$f'(t) = -\frac{7}{t^{4/3}} + 21 + 20t^{17/3} + 24t^7$$
> 
> Alternatively, in radical notation:
> $$f'(t) = -\frac{7}{\sqrt[3]{t^4}} + 21 + 20\sqrt[3]{t^{17}} + 24t^7$$

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (rules)
> **Instructions:** Use derivative rules to find the derivatives of the following functions. Simplify by combining like terms and canceling common factors.

$$r(\theta)=\frac{\sin \theta}{1+\csc \theta}$$
> 
> > [!check]- Solution
> > ## Solution for Problem 3
> > 
> > **Function:** $$r(\theta) = \frac{\sin \theta}{1 + \csc \theta}$$
> > 
> > While you can differentiate this directly using the **Quotient Rule**, simplifying the trigonometric expression first will make the derivative much easier to compute and automatically simplified.
> > 
> > ### Step 1: Simplify the Function First
> > Recall that $\csc \theta = \frac{1}{\sin \theta}$. Substitute this into the function:
> > 
> > $$r(\theta) = \frac{\sin \theta}{1 + \frac{1}{\sin \theta}}$$
> > 
> > To clear the fraction in the denominator, multiply both the numerator and the denominator by $\sin \theta$:
> > 
> > $$r(\theta) = \frac{\sin \theta \cdot \sin \theta}{\left(1 + \frac{1}{\sin \theta}\right) \sin \theta}$$
> > 
> > $$r(\theta) = \frac{\sin^2 \theta}{\sin \theta + 1}$$
> > 
> > ---
> > 
> > ### Step 2: Apply the Quotient Rule
> > The quotient rule states that for a function $\frac{u}{v}$:
> > $$\frac{d}{d\theta}\left(\frac{u}{v}\right) = \frac{u'v - uv'}{v^2}$$
> > 
> > Assigning our terms:
> > * $u = \sin^2 \theta \implies u' = 2\sin \theta \cos \theta$ *(using the Chain Rule)*
> > * $v = \sin \theta + 1 \implies v' = \cos \theta$
> > 
> > Plugging these into the formula:
> > 
> > $$r'(\theta) = \frac{(2\sin \theta \cos \theta)(\sin \theta + 1) - (\sin^2 \theta)(\cos \theta)}{(\sin \theta + 1)^2}$$
> > 
> > ---
> > 
> > ### Step 3: Distribute and Simplify
> > Distribute the terms in the numerator:
> > 
> > $$r'(\theta) = \frac{2\sin^2 \theta \cos \theta + 2\sin \theta \cos \theta - \sin^2 \theta \cos \theta shadow}{(\sin \theta + 1)^2}$$
> > 
> > Combine the like terms ($2\sin^2 \theta \cos \theta - \sin^2 \theta \cos \theta$):
> > 
> > $$r'(\theta) = \frac{\sin^2 \theta \cos \theta + 2\sin \theta \cos \theta}{(\sin \theta + 1)^2}$$
> > 
> > Factor out the common factor $\sin \theta \cos \theta$ from the numerator:
> > 
> > $$r'(\theta) = \frac{\sin \theta \cos \theta (\sin \theta + 2)}{(\sin \theta + 1)^2}$$
> 

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Structural Pattern Recognition & Rule Execution
> [!note]- Theory & Derivations
> ## 1. Core Lecture Notes
> When encountering multi-layered or composite expressions, calculating the correct derivative depends entirely on identifying the overarching function structure. Before writing down any calculus, you must step back and ask: **"What is the last mathematical operation I would perform if I were evaluating this function for a given number?"** That final operation dictates which master derivative rule takes structural priority. Failing to establish this hierarchical view is the single most common cause of compounding algebraic and differentiation errors.
> 
> ### A. The "Big Picture" Rule Priority Checklist
> To systematically decompose any complex function, evaluate it against this rule hierarchy from top to bottom:
> 
> 1. **The Sum/Difference Structural Priority:** If the function consists of independent terms separated by a plus or minus at its outermost layer, it is a sum or difference function. You must differentiate each term completely independently of the others.
>    $$\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$$
> 2. **The Product Structural Priority:** If the function is structurally composed of two or more distinct variable expressions multiplied together as its outermost operation, the **Product Rule** must be your primary mathematical frame. You cannot simply multiply their individual derivatives together.
>    $$\frac{d}{dx}[u \cdot v] = u'v + uv'$$
> 3. **The Quotient Structural Priority:** If the entire function is enclosed within a single fraction containing variable terms in both the numerator and denominator, the **Quotient Rule** must be your primary frame. 
>    $$\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2}$$
> 
> ### B. Mnemonic Blueprints for Seamless Execution
> When functions get complex, students often lose track of their individual pieces mid-problem. To ensure you don't misplace terms or switch signs during calculation, map out a separate dictionary block on your paper before writing out the final derivative string. 
> 
> For the Product Rule, think of it as a balancing act: **"Derivative of the first times the second, plus the first times the derivative of the second."**
> 
> For the Quotient Rule, use the classic rhythmic mnemonic that keeps the terms in their correct, non-reversible subtraction order:  
> $$\frac{\text{Low } d\text{High} - \text{High } d\text{Low}}{\text{Low Low}} \longrightarrow \frac{v \cdot u' - u \cdot v'}{v^2}$$
> 
> ---
> 
> ## 2. Walkthrough Sample Problems (From Guided Notes)
> 
> ### Example 1: Executing the Product Rule Frame
> **Problem:** Find the derivative of $f(x) = x^2 \sin(x)$.
> 
> * **Step 1: Pattern Recognition & Structural Priority** Look at the macro-structure of $f(x)$. We have an algebraic polynomial term ($x^2$) multiplying a transcendental trigonometric term ($\sin x$). Since multiplication is the main link between these blocks, the Product Rule takes absolute structural priority.
> 
> * **Step 2: Build the Component Dictionary** Isolate each part on the side of your page and find their individual derivatives:
>   * Let $u = x^2 \longrightarrow u' = 2x$
>   * Let $v = \sin(x) \longrightarrow v' = \cos(x)$
> 
> * **Step 3: Assemble into the Master Blueprint ($u'v + uv'$)** Substitute your dictionary components into the formula framework:
>   $$f'(x) = (2x)(\sin x) + (x^2)(\cos x)$$
>   $$f'(x) = 2x\sin x + x^2\cos x$$
> 
> ---
> 
> ### Example 2: Executing the Quotient Rule Frame
> **Problem:** Find the derivative of $y = \frac{x^2 - 1}{x^3 + x}$.
> 
> * **Step 1: Pattern Recognition & Structural Priority** The function is entirely bound inside a large fraction bar. Because a division operation encapsulates both the top and bottom variable polynomials, the Quotient Rule serves as the master structural priority.
> 
> * **Step 2: Build the Component Dictionary** Label your components clearly as "High" (numerator) and "Low" (denominator):
>   * **High ($u$):** $x^2 - 1 \longrightarrow u' = 2x$
>   * **Low ($v$):** $x^3 + x \longrightarrow v' = 3x^2 + 1$
> 
> * **Step 3: Assemble using "Low dHigh minus High dLow over Low Low"** Populate the quotient framework carefully, preserving parentheses to protect against distribution errors:
>   $$y' = \frac{(x^3 + x)(2x) - (x^2 - 1)(3x^2 + 1)}{(x^3 + x)^2}$$
> 
> * **Step 4: Distribute and Combine Like Terms** Distribute the terms in the numerator while keeping the subtraction sign outside the second group until expansion is complete:
>   $$y' = \frac{(2x^4 + 2x^2) - (3x^4 + x^2 - 3x^2 - 1)}{(x^3 + x)^2}$$
>   $$y' = \frac{(2x^4 + 2x^2) - (3x^4 - 2x^2 - 1)}{(x^3 + x)^2}$$
>   Now distribute the negative sign across the entire second polynomial:
>   $$y' = \frac{2x^4 + 2x^2 - 3x^4 + 2x^2 + 1}{(x^3 + x)^2}$$
>   Combine like terms ($2x^4 - 3x^4$ and $2x^2 + 2x^2$) to finalize the solution:
>   $$y' = \frac{-x^4 + 4x^2 + 1}{(x^3 + x)^2}$$
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Electrical Engineering — Impedance and Signal Filters]]
> [[Electrical Engineering — Impedance and Signal Filters Solution]]
> 
> ---
> 
> ### Problem 2: [[Mechanical Engineering — Dynamic Power Transmission]]
> [[Mechanical Engineering — Dynamic Power Transmission Solution]]


#### Worked Example
Find an equation of the line tangent to the function $g(x)=2x \sin x$ at $x=\frac{3\pi}{2}$.

> [!check]- Worked Solution
> ## Solution for Problem 4
> 
> **Problem:** Find an equation of the line tangent to the function $g(x) = 2x \sin x$ at $x = \frac{3\pi}{2}$.
> 
> To find the equation of a tangent line, we need two components: a point $(x_1, y_1)$ and a slope $m$.
> 
> ### Step 1: Find the Point of Tangency $(x_1, y_1)$
> We are given $x_1 = \frac{3\pi}{2}$. To find the corresponding $y$-value ($y_1$), substitute $x_1$ into the original function $g(x)$:
> 
> $$g\left(\frac{3\pi}{2}\right) = 2\left(\frac{3\pi}{2}\right) \sin\left(\frac{3\pi}{2}\right)$$
> 
> Recall from the unit circle that $\sin\left(\frac{3\pi}{2}\right) = -1$:
> 
> $$g\left(\frac{3\pi}{2}\right) = (3\pi)(-1) = -3\pi$$
> 
> So, our point of tangency is:
> $$\left(\frac{3\pi}{2}, -3\pi\right)$$
> 
> ---
> 
> ### Step 2: Find the Slope of the Tangent Line ($m$)
> The slope of the tangent line is the value of the derivative at our given point, $g'\left(\frac{3\pi}{2}\right)$.
> 
> To find $g'(x)$, apply the **Product Rule** ($\frac{d}{dx}[uv] = u'v + uv'$) to $g(x) = (2x)(\sin x)$:
> * Let $u = 2x \implies u' = 2$
> * Let $v = \sin x \implies v' = \cos x$
> 
> $$g'(x) = 2\sin x + 2x\cos x$$
> 
> Now, evaluate the derivative at $x = \frac{3\pi}{2}$. Recall that $\cos\left(\frac{3\pi}{2}\right) = 0$:
> 
> $$g'\left(\frac{3\pi}{2}\right) = 2\sin\left(\frac{3\pi}{2}\right) + 2\left(\frac{3\pi}{2}\right)\cos\left(\frac{3\pi}{2}\right)$$
> 
> $$g'\left(\frac{3\pi}{2}\right) = 2(-1) + (3\pi)(0) = -2$$
> 
> Thus, the slope is $m = -2$.
> 
> ---
> 
> ### Step 3: Write the Equation of the Tangent Line
> Use the point-slope form equation: $y - y_1 = m(x - x_1)$
> 
> $$y - (-3\pi) = -2\left(x - \frac{3\pi}{2}\right)$$
> 
> Simplify the equation:
> $$y + 3\pi = -2x + 3\pi$$
> 
> Subtract $3\pi$ from both sides to convert it to slope-intercept form ($y = mx + b$):
> $$y = -2x$$

#### Active Practice Problem
Suppose there exists a function, $f(x)$, such that $f(1)=5$ and $f^{\prime}(1)=4$.  
   Let $h(x)=\frac{f(x)}{x+1}$.  
   Find the equation of the tangent line to $h(x)$ at $x=1$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Solution for Problem 5
> 
> **Problem:** Suppose there exists a function, $f(x)$, such that $f(1) = 5$ and $f'(1) = 4$. Let $h(x) = \frac{f(x)}{x + 1}$. Find the equation of the tangent line to $h(x)$ at $x = 1$.
> 
> To construct the equation of the tangent line to $h(x)$, we need to calculate the point of tangency $(1, h(1))$ and the slope of the line, which is given by $h'(1)$.
> 
> ### Step 1: Find the Point of Tangency $(x_1, y_1)$
> We are given $x_1 = 1$. To evaluate the corresponding $y$-value ($y_1 = h(1)$), substitute $x = 1$ into our expression for $h(x)$:
> 
> $$h(1) = \frac{f(1)}{1 + 1}$$
> 
> Using the given information that $f(1) = 5$:
> $$h(1) = \frac{5}{2}$$
> 
> Thus, the point of tangency is:
> $$\left(1, \frac{5}{2}\right)$$
> 
> ---
> 
> ### Step 2: Find the Slope of the Tangent Line ($m$)
> The slope is given by the derivative evaluated at our point, $h'(1)$.
> 
> To find the general derivative $h'(x)$, apply the **Quotient Rule** $\left( \frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2} \right)$ to $h(x) = \frac{f(x)}{x + 1}$:
> * Let $u = f(x) \implies u' = f'(x)$
> * Let $v = x + 1 \implies v' = 1$
> 
> $$h'(x) = \frac{f'(x)(x + 1) - f(x)(1)}{(x + 1)^2}$$
> 
> Now, substitute $x = 1$ into the derivative formula to calculate the slope:
> $$h'(1) = \frac{f'(1)(1 + 1) - f(1)}{(1 + 1)^2}$$
> 
> $$h'(1) = \frac{f'(1)(2) - f(1)}{4}$$
> 
> Substitute the known values $f(1) = 5$ and $f'(1) = 4$:
> $$h'(1) = \frac{(4)(2) - 5}{4} = \frac{8 - 5}{4} = \frac{3}{4}$$
> 
> Thus, our slope is $m = \frac{3}{4}$.
> 
> ---
> 
> ### Step 3: Find the Equation of the Tangent Line
> Using the point-slope form equation $y - y_1 = m(x - x_1)$:
> 
> $$y - \frac{5}{2} = \frac{3}{4}(x - 1)$$
> 
> Distribute the slope on the right side:
> $$y - \frac{5}{2} = \frac{3}{4}x - \frac{3}{4}$$
> 
> Add $\frac{5}{2}$ (or $\frac{10}{4}$) to both sides to convert it to slope-intercept form ($y = mx + b$):
> $$y = \frac{3}{4}x - \frac{3}{4} + \frac{10}{4}$$
> 
> $$y = \frac{3}{4}x + \frac{7}{4}$$

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (rules)
> Find the third derivative of $f(t)=4t^{3}-\frac{3}{t^{5}}$.
> 
> > [!check]- Solution
> > ## Solution for Problem 6
> > 
> > **Problem:** Find the third derivative of $f(t) = 4t^3 - \frac{3}{t^5}$.
> > 
> > To find the third derivative, $f'''(t)$, we will use the **Power Rule** ($\frac{d}{dt}[t^n] = n t^{n-1}$) successively three times.
> > 
> > ### Step 1: Rewrite the Function
> > Before differentiating, it's easier to express the fraction with a negative exponent:
> > $$f(t) = 4t^3 - 3t^{-5}$$
> > 
> > ---
> > 
> > ### Step 2: Find the First Derivative $f'(t)$
> > Apply the Power Rule to each term:
> > $$f'(t) = 4(3t^2) - 3(-5t^{-6})$$
> > $$f'(t) = 12t^2 + 15t^{-6}$$
> > 
> > ---
> > 
> > ### Step 3: Find the Second Derivative $f''(t)$
> > Differentiate the first derivative:
> > $$f''(t) = 12(2t^1) + 15(-6t^{-7})$$
> > $$f''(t) = 24t - 90t^{-7}$$
> > 
> > ---
> > 
> > ### Step 4: Find the Third Derivative $f'''(t)$
> > Differentiate the second derivative:
> > $$f'''(t) = 24(1) - 90(-7t^{-8})$$
> > $$f'''(t) = 24 + 630t^{-8}$$
> > 
> > ---
> > 
> > ### Step 5: Format the Final Answer
> > Convert the negative exponent back into a fraction for the final presentation:
> > $$f'''(t) = 24 + \frac{630}{t^8}$$
> 

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Contextual & Tabular Translation of the Derivative
> [!note]- Theory & Derivations
> ## 1. Core Lecture Notes
> Calculus is not just a collection of algebraic rules; it is a language used to describe the real world. One of the most critical skills you can develop is the ability to bridge the gap between abstract calculus formulas and tangible geometric or empirical data. This translation skill manifests in two primary ways: **Geometric Construction** (Tangent Lines) and **Empirical Analysis** (Tabular Data).
> 
> ### A. The Geometric Frame: Tangent Lines as Trajectories
> A function's derivative $f'(x)$ gives a formula for the *instantaneous rate of change* at any point. When we evaluate that derivative at a specific coordinate, $x = x_1$, the resulting number is the exact slope ($m$) of a line that skims the curve at that point. 
> 
> To build the equation of this tangent line, we always rely on the **Point-Slope Form**:
> $$y - y_1 = m(x - x_1)$$
> 
> #### The 3-Step Tangent Line Protocol:
> 1. **Find the Point:** If you are only given $x_1$, plug it back into the *original function* to find $y_1 = f(x_1)$.
> 2. **Find the Slope:** Take the derivative $f'(x)$ and evaluate it at $x_1$ to find your numerical slope, $m = f'(x_1)$.
> 3. **Assemble and Simplify:** Substitute $x_1$, $y_1$, and $m$ into the point-slope formula, then isolate $y$ to finish in slope-intercept form ($y = mx + b$).
> 
> ### B. The Empirical Frame: Tabular Data Differentiation
> In the real world, nature does not always present us with clean algebraic formulas like $f(x) = x^2$. Often, engineers work with discrete sensor logs—data points collected at specific time intervals. 
> 
> When evaluating expressions containing composite table data, you must apply derivative rules *structurally* to the general functions before plugging in the specific numerical data entries. 
> 
> ---
> 
> ## 2. Walkthrough Sample Problems 
> 
> ### Example 1: Finding a Tangent Line Equation
> **Problem:** Find an equation of the line tangent to the function $f(x) = 3x^2 - 4x$ at $x = 2$.
> 
> * **Step 1: Find the Point ($y_1$)** Plug $x = 2$ into the original function:
>   $$f(2) = 3(2)^2 - 4(2) = 12 - 8 = 4 \longrightarrow \text{Point: } (2, 4)$$
> 
> * **Step 2: Find the Slope ($m$)** First, differentiate the function using the Power Rule:
>   $$f'(x) = 6x - 4$$
>   Now, evaluate the derivative at $x = 2$:
>   $$m = f'(2) = 6(2) - 4 = 12 - 4 = 8 \longrightarrow \text{Slope: } m = 8$$
> 
> * **Step 3: Assemble into Point-Slope Form**
>   $$y - 4 = 8(x - 2)$$
>   $$y - 4 = 8x - 16 \longrightarrow y = 8x - 12$$
> 
> ---
> 
> ### Example 2: Tabular Differentiation via the Quotient Rule
> **Problem:** Let $h(x) = \frac{f(x)}{g(x)}$. Use the data table below to evaluate $h'(3)$.
> 
> | $x$ | $f(x)$ | $g(x)$ | $f'(x)$ | $g'(x)$ |
> | :--- | :---: | :---: | :---: | :---: |
> | **3** | $5$ | $2$ | $-1$ | $4$ |
> 
> * **Step 1: Differentiate Structurally** Apply the Quotient Rule to the functional definition of $h(x)$:
>   $$h'(x) = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$
> 
> * **Step 2: Substitute $x = 3$**
>   $$h'(3) = \frac{f'(3)g(3) - f(3)g'(3)}{[g(3)]^2}$$
> 
> * **Step 3: Extract Values from Table and Compute** Substitute $f'(3) = -1$, $g(3) = 2$, $f(3) = 5$, and $g'(3) = 4$:
>   $$h'(3) = \frac{(-1)(2) - (5)(4)}{(2)^2} = \frac{-2 - 20}{4} = \frac{-22}{4} = -\frac{11}{2}$$
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Chemical Engineering — Dynamic Concentration Logs]]
> [[Chemical Engineering — Dynamic Concentration Logs Solution]]
> 
> ---
> 
> ### Problem 2: [[Aerospace Engineering — Escaping a Curved Flight Trajectory]]
> [[Aerospace Engineering — Escaping a Curved Flight Trajectory Solution]]


#### Worked Example
Find the $42^{\text{nd}}$ and $55^{\text{th}}$ derivative of $f(x)=\cos x$.

> [!check]- Worked Solution
> ## Solution for Problem 7
> 
> **Problem:** Find the $42^{\text{nd}}$ and $55^{\text{th}}$ derivative of $f(x) = \cos x$.
> 
> Higher-order derivatives of sine and cosine functions follow a repeating, cyclic pattern of 4 steps. To solve this efficiently, we find the core pattern first.
> 
> ### Step 1: Find the 4-Step Cyclic Pattern
> Let's compute the first few derivatives of $f(x) = \cos x$:
> 
> * **Original function:** $f(x) = \cos x$
> * **$1^{\text{st}}$ derivative:** $f'(x) = -\sin x$
> * **$2^{\text{nd}}$ derivative:** $f''(x) = -\cos x$
> * **$3^{\text{rd}}$ derivative:** $f'''(x) = \sin x$
> * **$4^{\text{th}}$ derivative:** $f^{(4)}(x) = \cos x$ *(Back to the start!)*
> 
> Because the $4^{\text{th}}$ derivative returns to $\cos x$, any derivative order that is a multiple of 4 will equal $\cos x$:
> $$f^{(4n)}(x) = \cos x$$
> 
> ---
> 
> ### Step 2: Find the $42^{\text{nd}}$ Derivative ($f^{(42)}(x)$)
> Divide the target derivative order by 4 to find the remainder:
> $$42 \div 4 = 10 \text{ with a remainder of } 2 \quad \left(\text{or } \frac{42}{4} = 10 \text{ R } 2\right)$$
> 
> A remainder of 2 means that the $42^{\text{nd}}$ derivative will match the **$2^{\text{nd}}$ derivative** in our cycle:
> $$f^{(42)}(x) = f''(x) = -\cos x$$
> 
> ---
> 
> ### Step 3: Find the $55^{\text{th}}$ Derivative ($f^{(55)}(x)$)
> Divide the target derivative order by 4 to find the remainder:
> $$55 \div 4 = 13 \text{ with a remainder of } 3 \quad \left(\text{or } \frac{55}{4} = 13 \text{ R } 3\right)$$
> 
> A remainder of 3 means that the $55^{\text{th}}$ derivative will match the **$3^{\text{rd}}$ derivative** in our cycle:
> $$f^{(55)}(x) = f'''(x) = \sin x$$
> 
> ---
> 
> ### Summary of Answers
> * **$42^{\text{nd}}$ Derivative:** $-\cos x$
> * **$55^{\text{th}}$ Derivative:** $\sin x$

#### Active Practice Problem
Use this table to find the following:

| $x$ | 2 | 3 | 4 | 5 |
| :--- | :---: | :---: | :---: | :---: |
| $f(x)$ | 4 | 3 | 2 | 3 |
| $g(x)$ | 7 | 3 | -1 | 2 |
| $f^{\prime}(x)$ | 5 | 7 | -1 | -2 |
| $g^{\prime}(x)$ | 3 | -2 | 1 | 8 |

<br>

**(a)** $\frac{d}{dx}[-2f(x)]\Big|_{x=5}$

**(b)** $\frac{d}{dx}[x^{2}f(x)]\Big|_{x=3}$

**(c)** Find the equation of the tangent line to $y=\frac{g(x)}{f(x)}$ at $x=4$.

---

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Solution for Problem 8
> 
> This problem uses values from the provided data table to evaluate derivatives at specific points.
> 
> ### Reference Table
> | $x$ | 2 | 3 | 4 | 5 |
> | :--- | :---: | :---: | :---: | :---: |
> | $f(x)$ | 4 | 3 | 2 | 3 |
> | $g(x)$ | 7 | 3 | -1 | 2 |
> | $f^{\prime}(x)$ | 5 | 7 | -1 | -2 |
> | $g^{\prime}(x)$ | 3 | -2 | 1 | 8 |
> 
> ---
> 
> ### Part (a)
> **Problem:** Evaluate $\frac{d}{dx}[-2f(x)] \Big|_{x=5}$
> 
> 1. **Apply the Constant Multiple Rule:**
> $$\frac{d}{dx}[-2f(x)] = -2f^{\prime}(x)$$
> 2. **Evaluate at $x = 5$:**
> $$-2f^{\prime}(5)$$
> 3. **Substitute the value from the table** ($f^{\prime}(5) = -2$):
> $$-2(-2) = 4$$
> 
> **Answer (a):** $4$
> 
> ---
> 
> ### Part (b)
> **Problem:** Evaluate $\frac{d}{dx}[x^2 f(x)] \Big|_{x=3}$
> 
> 1. **Apply the Product Rule** ($\frac{d}{dx}[uv] = u'v + uv'$):
> * Let $u = x^2 \implies u' = 2x$
> * Let $v = f(x) \implies v' = f^{\prime}(x)$
> $$\frac{d}{dx}[x^2 f(x)] = 2x f(x) + x^2 f^{\prime}(x)$$
> 2. **Evaluate at $x = 3$:**
> $$2(3)f(3) + (3)^2 f^{\prime}(3) = 6f(3) + 9f^{\prime}(3)$$
> 3. **Substitute the values from the table** ($f(3) = 3$ and $f^{\prime}(3) = 7$):
> $$6(3) + 9(7) = 18 + 63 = 81$$
> 
> **Answer (b):** $81$
> 
> ---
> 
> ### Part (c)
> **Problem:** Find the equation of the tangent line to $y = \frac{g(x)}{f(x)}$ at $x = 4$.
> 
> #### 1. Find the Point of Tangency $(4, y(4))$
> Substitute $x = 4$ into the original rational function:
> $$y(4) = \frac{g(4)}{f(4)}$$
> From the table, $g(4) = -1$ and $f(4) = 2$:
> $$y(4) = -\frac{1}{2}$$
> So, our coordinate point is $\left(4, -\frac{1}{2}\right)$.
> 
> #### 2. Find the Slope ($m$) using the Quotient Rule
> Differentiate $y = \frac{g(x)}{f(x)}$ using the Quotient Rule:
> $$y^{\prime}(x) = \frac{g^{\prime}(x)f(x) - g(x)f^{\prime}(x)}{[f(x)]^2}$$
> Evaluate the derivative at $x = 4$:
> $$y^{\prime}(4) = \frac{g^{\prime}(4)f(4) - g(4)f^{\prime}(4)}{[f(4)]^2}$$
> Substitute the values from the table ($g^{\prime}(4) = 1$, $f(4) = 2$, $g(4) = -1$, $f^{\prime}(4) = -1$):
> $$y^{\prime}(4) = \frac{(1)(2) - (-1)(-1)}{(2)^2}$$
> $$y^{\prime}(4) = \frac{2 - 1}{4} = \frac{1}{4}$$
> Thus, the slope is $m = \frac{1}{4}$.
> 
> #### 3. Write the Tangent Line Equation
> Using point-slope form ($y - y_1 = m(x - x_1)$):
> $$y - \left(-\frac{1}{2}\right) = \frac{1}{4}(x - 4)$$
> $$y + \frac{1}{2} = \frac{1}{4}x - 1$$
> Subtract $\frac{1}{2}$ from both sides to finish in slope-intercept form:
> $$y = \frac{1}{4}x - \frac{3}{2}$$
> 
> **Answer (c):** $y = \frac{1}{4}x - \frac{3}{2}$

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 07 and overview of homework Knewton: *The Basic Differentiation Rules
The Product and Quotient Rules
Extensions of the Power Rule
Derivatives of Trigonometric Functions*.
