---
title: "Session 16 - Trigonometric Substitution"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 16 - Trigonometric Substitution

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Fluency with Trigonometric Identities & Integration
> - Pattern Recognition & Algebraic Restructuring
> - Right Triangle Geometry & Back-Substitution

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In real-life engineering, the skills honed through trigonometric substitution—algebraic restructuring, trigonometric fluency, and reference triangle geometry—are essential for translating complex physical curves into predictable mathematical models. Civil and structural engineers use pattern recognition and completion of the square to calculate precise material volumes and weight distributions for curved structures like arches, tunnels, and domes. Electrical and aerospace engineers utilize trigonometric identities to break down complex, non-linear wave equations, allowing them to safely analyze alternating currents, radio frequencies, and signal propagation. Finally, robotics and simulation engineers rely on right-triangle geometry and back-substitution to perform vital coordinate transformations, seamlessly translating a robotic arm's angular, rotational calculations back into precise linear coordinates for physical execution.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Fluency with Trigonometric Identities & Integration
> [!note]- Theory & Derivations
> Once an algebraic integral has been successfully set up using an initial substitution, the problem transforms completely into a trigonometric calculus problem. **Skill 2** focuses on your ability to manipulate these trigonometric expressions using core identities and evaluate the resulting integrals.
> 
> ---
> 
> ## 1. Core Explanational Notes
> 
> ### Collapsing the Radical
> 
> The fundamental mechanism of trigonometric substitution relies on the Pythagorean trigonometric identities to simplify a binomial expression. These identities include:
> 
> * $\cos^{2}x + \sin^{2}x = 1$
> 
> * $1 + \tan^{2}x = \sec^{2}x$
> 
> * $\cot^{2}x + 1 = \csc^{2}x$
> 
> 
> The primary analytical advantage of these identities is their mathematical capacity to compress a sum or difference of two distinct squared variables into a single, unified term. By executing this contraction, a complex square root expression can be canceled out entirely, reducing a demanding algebraic fraction to a workable trigonometric product or quotient.
> 
> ### Evaluating the Trigonometric Integral
> 
> After removing the radical, you are often left with higher powers or combinations of trigonometric functions that cannot be integrated directly. Resolving these expressions requires fluent command of reduction strategies, including:
> 
> * **Half-Angle / Power-Reduction Identities:** Used to break down even powers of sine and cosine (such as rewriting $\cos^2\theta$ as $\frac{1}{2}(1 + \cos 2\theta)$).
> 
> 
> * **Standard $u$-Substitution:** Used to compute the remaining linear periodic components after a power-reduction split has occurred.
> 
> 
> * **Double-Angle Identities:** Used to systematically untangle compound double-angle results (like expanding $\frac{1}{2}\sin2\theta$ out into $\sin\theta\cos\theta$) to prepare the final expression for a clean algebraic back-substitution phase.
> 
> 
> 
> ---
> 
> ## 2. Sample Pure-Math Problems
> 
> ### Sample Problem 1: Even Powers of Sine (Power-Reduction Strategy)
> 
> **Evaluate the integral:** 
> 
> $$\int \frac{x^2}{\sqrt{4 - x^2}} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Substitute:** Let $x = 2\sin\theta$, so $dx = 2\cos\theta \, d\theta$. The radical simplifies to $\sqrt{4 - 4\sin^2\theta} = 2\cos\theta$.
> 2. **Transform the Expression:** Substitute these components directly into the integral:
> 
> $$\int \frac{(2\sin\theta)^2}{2\cos\theta} \cdot (2\cos\theta \, d\theta) = \int 4\sin^2\theta \, d\theta$$
> 
> 
> 3. **Apply Trig Fluency (Power Reduction):** Use the half-angle reduction identity $\sin^2\theta = \frac{1 - \cos2\theta}{2}$:
> 
> $$\int 4 \left( \frac{1 - \cos2\theta}{2} \right) d\theta = 2 \int (1 - \cos2\theta) \, d\theta$$
> 
> 
> 4. **Integrate:** Complete the integration term-by-term using a basic internal $u$-substitution for the double-angle term:
> 
> $$2\theta - \sin2\theta + C$$
> 
> 
> 5. **Expand using Double-Angle Identity:** Before returning to variable $x$, use the identity $\sin2\theta = 2\sin\theta\cos\theta$ to match single-angle triangle dimensions:
> 
> $$2\theta - 2\sin\theta\cos\theta + C$$
> 
> 
> 6. **Back-Substitute:** Given $\sin\theta = \frac{x}{2}$, $\theta = \arcsin(\frac{x}{2})$, and $\cos\theta = \frac{\sqrt{4-x^2}}{2}$:
> 
> $$2\arcsin\left(\frac{x}{2}\right) - 2\left(\frac{x}{2}\right)\left(\frac{\sqrt{4 - x^2}}{2}\right) + C = 2\arcsin\left(\frac{x}{2}\right) - \frac{x\sqrt{4 - x^2}}{2} + C$$
> 
> 
> 
> ### Sample Problem 2: Tangent-Secant Identity Swapping
> 
> **Evaluate the integral:** 
> 
> $$\int \frac{\sqrt{x^2 - 9}}{x} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Substitute:** Let $x = 3\sec\theta$, so $dx = 3\sec\theta\tan\theta \, d\theta$. The radical reduces to $\sqrt{9\sec^2\theta - 9} = 3\tan\theta$.
> 2. **Transform the Expression:** Substitute terms into the integral:
> 
> $$\int \frac{3\tan\theta}{3\sec\theta} \cdot (3\sec\theta\tan\theta \, d\theta) = 3\int \tan^2\theta \, d\theta$$
> 
> 
> 3. **Apply Trig Fluency (Pythagorean Identity):** The term $\tan^2\theta$ cannot be integrated as-is. Swap it using $\tan^2\theta = \sec^2\theta - 1$:
> 
> $$3\int (\sec^2\theta - 1) \, d\theta$$
> 
> 
> 4. **Integrate:** The antiderivative of $\sec^2\theta$ is standard ($\tan\theta$):
> 
> $$3(\tan\theta - \theta) + C$$
> 
> 
> 5. **Back-Substitute:** From $\sec\theta = \frac{x}{3}$, our reference triangle yields $\tan\theta = \frac{\sqrt{x^2 - 9}}{3}$ and $\theta = \sec^{-1}(\frac{x}{3})$:
> 
> $$3\left( \frac{\sqrt{x^2 - 9}}{3} - \sec^{-1}\left(\frac{x}{3}\right) \right) + C = \sqrt{x^2 - 9} - 3\sec^{-1}\left(\frac{x}{3}\right) + C$$
> 
> 
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Electrical Grid Dissipation (Power Integration)]]
> [[Electrical Grid Dissipation (Power Integration) Solution]]
> 
> ### Engineering Problem 2: [[Mechanical Damper Fluid Shear Strain]]
> [[Mechanical Damper Fluid Shear Strain Solution]]


#### Worked Example
1. $$\int (4 - x^2)^{3/2} \, dx$$

> [!check]- Worked Solution
> ## Step 1: Choose the Substitution
> 
> When an integrand contains a term of the form $a^2 - x^2$, the standard approach is to use the sine substitution: $x = a\sin\theta$.
> 
> Here, $a^2 = 4$, which means $a = 2$.
> 
> - **Let:** $x = 2\sin\theta$
> 
> - **Differentiate both sides:** $dx = 2\cos\theta \, d\theta$
> 
> 
> ## Step 2: Substitute into the Integral
> 
> Now, transform the expression $(4 - x^2)$ using the trigonometric identity $\text{1} - \sin^2\theta = \cos^2\theta$:
> 
> $$4 - x^2 = 4 - (2\sin\theta)^2 = 4 - 4\sin^2\theta = 4(1 - \sin^2\theta) = 4\cos^2\theta$$
> 
> Now, raise this expression to the power of $3/2$:
> 
> $$(4 - x^2)^{3/2} = (4\cos^2\theta)^{3/2} = (2\cos\theta)^3 = 8\cos^3\theta$$
> 
> Substitute both $(4 - x^2)^{3/2}$ and $dx$ back into the original integral:
> 
> $$\int (8\cos^3\theta) \cdot (2\cos\theta \, d\theta) = \int 16\cos^4\theta \, d\theta$$
> 
> ## Step 3: Evaluate the Trigonometric Integral
> 
> To integrate $\cos^4\theta$, we can use the standard reduction formula for powers of cosine, $\int \cos^n\theta \, d\theta = \frac{\cos^{n-1}\theta\sin\theta}{n} + \frac{n-1}{n}\int \cos^{n-2}\theta \, d\theta$:
> 
> $$\int \cos^4\theta \, d\theta = \frac{\cos^3\theta\sin\theta}{4} + \frac{3}{4}\int \cos^2\theta \, d\theta$$
> 
> Using the power-reduction identity $\int \cos^2\theta \, d\theta = \frac{\theta}{2} + \frac{\sin\theta\cos\theta}{2}$, we get:
> 
> $$\int \cos^4\theta \, d\theta = \frac{\cos^3\theta\sin\theta}{4} + \frac{3}{4}\left(\frac{\theta}{2} + \frac{\sin\theta\cos\theta}{2}\right) = \frac{\cos^3\theta\sin\theta}{4} + \frac{3\theta}{8} + \frac{3\sin\theta\cos\theta}{8}$$
> 
> Now, multiply the entire antiderivative by the constant **16**:
> 
> $$16 \left( \frac{\cos^3\theta\sin\theta}{4} + \frac{3\theta}{8} + \frac{3\sin\theta\cos\theta}{8} \right) = 4\cos^3\theta\sin\theta + 6\theta + 6\sin\theta\cos\theta + C$$
> 
> To make back-substitution simpler, factor out common trigonometric terms where possible by rewriting $\cos^3\theta$ as $\cos\theta(1-\sin^2\theta)$:
> 
> $$= 4\sin\theta\cos\theta(1-\sin^2\theta) + 6\theta + 6\sin\theta\cos\theta + C$$
> 
> $$= 4\sin\theta\cos\theta - 4\sin^3\theta\cos\theta + 6\theta + 6\sin\theta\cos\theta + C$$
> 
> $$= 6\theta + 10\sin\theta\cos\theta - 4\sin^3\theta\cos\theta + C$$
> 
> ## Step 4: Convert Back to the Original Variable $x$
> 
> We must return to the variable $x$ using our initial substitution relations from the reference right triangle:
> 
> - From $x = 2\sin\theta$, we know that $\sin\theta = \frac{x}{2}$ and $\theta = \arcsin\left(\frac{x}{2}\right)$.
> 
> - Using the Pythagorean theorem, the adjacent side of the triangle is $\sqrt{4-x^2}$, so $\cos\theta = \frac{\sqrt{4-x^2}}{2}$.
> 
> 
> Substitute these expressions back into our integrated result:
> 
> $$= 6\arcsin\left(\frac{x}{2}\right) + 10\left(\frac{x}{2}\right)\left(\frac{\sqrt{4-x^2}}{2}\right) - 4\left(\frac{x}{2}\right)^3\left(\frac{\sqrt{4-x^2}}{2}\right) + C$$
> 
> Simplify each algebraic term:
> 
> $$= 6\arcsin\left(\frac{x}{2}\right) + \frac{5x\sqrt{4-x^2}}{2} - \frac{x^3\sqrt{4-x^2}}{4} + C$$
> 
> Combine the last two fractions under a common denominator of **4**:
> 
> $$= 6\arcsin\left(\frac{x}{2}\right) + \frac{10x\sqrt{4-x^2} - x^3\sqrt{4-x^2}}{4} + C$$
> 
> ## Final Answer
> 
> $$\int (4 - x^2)^{3/2} \, dx = 6\arcsin\left(\frac{x}{2}\right) + \frac{x(10 - x^2)\sqrt{4-x^2}}{4} + C$$

#### Active Practice Problem
$$\int_{1}^{2} \frac{\sqrt{9 - x^2}}{x} \, dx$$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step 1: Choose the Substitution
> 
> The integrand contains the term $\sqrt{9 - x^2}$, which fits the form $\sqrt{a^2 - x^2}$ where $a^2 = 9$ (so $a = 3$). For this form, we use the sine substitution:
> 
> - **Let:** $x = 3\sin\theta$
> 
> - **Differentiate both sides:** $dx = 3\cos\theta \, d\theta$
> 
> 
> ## Step 2: Substitute into the Integral
> 
> First, let's find the indefinite antiderivative by substituting our expressions for $x$ and $dx$ into the integral.
> 
> Simplify the radical portion using the identity $1 - \sin^2\theta = \cos^2\theta$:
> 
> $$\sqrt{9 - x^2} = \sqrt{9 - (3\sin\theta)^2} = \sqrt{9 - 9\sin^2\theta} = \sqrt{9(1 - \sin^2\theta)} = 3\cos\theta$$
> 
> Now substitute $\sqrt{9-x^2}$, $x$, and $dx$ into the integral:
> 
> $$\int \frac{3\cos\theta}{3\sin\theta} \cdot (3\cos\theta \, d\theta) = 3\int \frac{\cos^2\theta}{\sin\theta} \, d\theta$$
> 
> ## Step 3: Evaluate the Trigonometric Integral
> 
> To integrate $\frac{\cos^2\theta}{\sin\theta}$, use the Pythagorean identity to rewrite the numerator in terms of sine:
> 
> $$3\int \frac{1 - \sin^2\theta}{\sin\theta} \, d\theta = 3\int \left( \frac{1}{\sin\theta} - \frac{\sin^2\theta}{\sin\theta} \right) d\theta = 3\int (\csc\theta - \sin\theta) \, d\theta$$
> 
> Now, integrate each term individually using standard trigonometric integration formulas:
> 
> - $\int \csc\theta \, d\theta = \ln|\csc\theta - \cot\theta|$
> 
> - $\int \sin\theta , d\theta = -\cos\theta$$
> 
> 
> Distributing the constant **3**, we get the antiderivative in terms of $\theta$:
> 
> $$3\ln|\csc\theta - \cot\theta| - 3(-\cos\theta) = 3\ln|\csc\theta - \cot\theta| + 3\cos\theta$$
> 
> ## Step 4: Convert Back to the Original Variable $x$
> 
> Using our initial substitution $x = 3\sin\theta$, we can construct a reference right triangle to find the remaining trigonometric ratios:
> 
> - $\sin\theta = \frac{x}{3} \implies \csc\theta = \frac{3}{x}$
> 
> - $\cos\theta = \frac{\sqrt{9-x^2}}{3}$
> 
> - $\cot\theta = \frac{\text{adjacent}}{\text{opposite}} = \frac{\sqrt{9-x^2}}{x}$
> 
> 
> Substitute these values back into the expression:
> 
> $$F(x) = 3\ln\left| \frac{3}{x} - \frac{\sqrt{9-x^2}}{x} \right| + 3\left(\frac{\sqrt{9-x^2}}{3}\right)$$
> 
> $$F(x) = 3\ln\left| \frac{3 - \sqrt{9-x^2}}{x} \right| + \sqrt{9-x^2}$$
> 
> ## Step 5: Evaluate the Definite Limits
> 
> Now we apply the limits of integration from $x = 1$ to $x = 2$:
> 
> $$\int_{1}^{2} \frac{\sqrt{9 - x^2}}{x} \, dx = F(2) - F(1)$$
> 
> **Evaluate at upper limit $x = 2$:**
> 
> $$F(2) = 3\ln\left| \frac{3 - \sqrt{9-2^2}}{2} \right| + \sqrt{9-2^2} = 3\ln\left( \frac{3 - \sqrt{5}}{2} \right) + \sqrt{5}$$
> 
> **Evaluate at lower limit $x = 1$:**
> 
> $$F(1) = 3\ln\left| \frac{3 - \sqrt{9-1^2}}{1} \right| + \sqrt{9-1^2} = 3\ln(3 - \sqrt{8}) + \sqrt{8} = 3\ln(3 - 2\sqrt{2}) + 2\sqrt{2}$$
> 
> ## Final Answer
> 
> Subtracting $F(1)$ from $F(2)$ gives the final exact value:
> 
> $$\int_{1}^{2} \frac{\sqrt{9 - x^2}}{x} \, dx = 3\ln\left( \frac{3 - \sqrt{5}}{2} \right) - 3\ln(3 - 2\sqrt{2}) + \sqrt{5} - 2\sqrt{2}$$
> 
> _(Note: Using logarithm properties, this can also be written in a single combined log term as $3\ln\left( \frac{3-\sqrt{5}}{2(3-2\sqrt{2})} \right) + \sqrt{5} - 2\sqrt{2}$)_

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Sub)
> $$\int \frac{1}{x^2 \sqrt{x^2 + 4}} \, dx$$
> 
> > [!check]- Solution
> > ## Step 1: Choose the Substitution
> > 
> > The integrand contains a term of the form $\sqrt{x^2 + a^2}$, where $a^2 = 4$ (so $a = 2$). For this form, the standard choice is the tangent substitution: $x = a\tan\theta$.
> > 
> > - **Let:** $x = 2\tan\theta$
> > 
> > - **Differentiate both sides:** $dx = 2\sec^2\theta \, d\theta$
> > 
> > 
> > ## Step 2: Substitute into the Integral
> > 
> > Next, transform the radical term $\sqrt{x^2+4}$ using the fundamental Pythagorean identity $\tan^2\theta + 1 = \sec^2\theta$:
> > 
> > $$\sqrt{x^2+4} = \sqrt{(2\tan\theta)^2 + 4} = \sqrt{4\tan^2\theta + 4} = \sqrt{4(\tan^2\theta + 1)} = \sqrt{4\sec^2\theta} = 2\sec\theta$$
> > 
> > We also need to square $x$ for the denominator:
> > 
> > $$x^2 = (2\tan\theta)^2 = 4\tan^2\theta$$
> > 
> > Now, substitute $x^2$, $\sqrt{x^2+4}$, and $dx$ back into the original algebraic integral:
> > 
> > $$\int \frac{1}{(4\tan^2\theta)(2\sec\theta)} \cdot (2\sec^2\theta \, d\theta)$$
> > 
> > Simplify the expression by canceling out common terms:
> > 
> > $$\int \frac{2\sec^2\theta}{8\tan^2\theta\sec\theta} \, d\theta = \frac{1}{4}\int \frac{\sec\theta}{\tan^2\theta} \, d\theta$$
> > 
> > ## Step 3: Evaluate the Trigonometric Integral
> > 
> > To solve $\int \frac{\sec\theta}{\tan^2\theta} \, d\theta$, convert the trigonometric functions into sine and cosine terms:
> > 
> > - $\sec\theta = \frac{1}{\cos\theta}$
> > 
> > - $\tan^2\theta = \frac{\sin^2\theta}{\cos^2\theta}$
> > 
> > 
> > Now expand the fraction:
> > 
> > $$\frac{\sec\theta}{\tan^2\theta} = \frac{\frac{1}{\cos\theta}}{\frac{\sin^2\theta}{\cos^2\theta}} = \frac{1}{\cos\theta} \cdot \frac{\cos^2\theta}{\sin^2\theta} = \frac{\cos\theta}{\sin^2\theta}$$
> > 
> > This simplifies our integral into:
> > 
> > $$\frac{1}{4}\int \frac{\cos\theta}{\sin^2\theta} \, d\theta$$
> > 
> > We can evaluate this easily using standard $u$-substitution:
> > 
> > - **Let:** $u = \sin\theta$
> > 
> > - **Differentiate:** $du = \cos\theta \, d\theta$
> > 
> > 
> > $$\frac{1}{4}\int \frac{1}{u^2} \, du = \frac{1}{4}\int u^{-2} \, du = \frac{1}{4} \left( \frac{u^{-1}}{-1} \right) = -\frac{1}{4u} + C$$
> > 
> > Substituting $u = \sin\theta$ back gives us:
> > 
> > $$-\frac{1}{4\sin\theta} + C = -\frac{1}{4}\csc\theta + C$$
> > 
> > ## Step 4: Convert Back to the Original Variable $x$
> > 
> > We must return to our original variable $x$. Refer back to our initial substitution relation:
> > 
> > $$\text{since } x = 2\tan\theta \implies \tan\theta = \frac{x}{2} = \frac{\text{opposite}}{\text{adjacent}}$$
> > 
> > Using a reference right triangle:
> > 
> > - The side **opposite** to $\theta$ is $x$
> > 
> > - The side **adjacent** to $\theta$ is **2**
> > 
> > - The **hypotenuse** is $\sqrt{x^2 + 2^2} = \sqrt{x^2+4}$
> > 
> > 
> > From this triangle, find cosecant ($\csc\theta$):
> > 
> > $$\csc\theta = \frac{\text{hypotenuse}}{\text{opposite}} = \frac{\sqrt{x^2+4}}{x}$$
> > 
> > Substitute this value back into our integrated result:
> > 
> > $$-\frac{1}{4} \cdot \left(\frac{\sqrt{x^2+4}}{x}\right) + C$$
> > 
> > ## Final Answer
> > 
> > $$\int \frac{1}{x^2\sqrt{x^2+4}} \, dx = -\frac{\sqrt{x^2+4}}{4x} + C$$
> 

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Pattern Recognition & Algebraic Restructuring
> [!note]- Theory & Derivations
> Trigonometric substitution is a powerful technique, but its success relies entirely on your ability to look at an algebraic expression, identify its underlying geometric pattern, and restructure it into a format that matches a known trigonometric identity.
> 
> ## 1. Core Explanational Notes
> 
> ### The Three Basic Substitution Patterns
> 
> When evaluating an integral containing a sum or difference of squares where standard $u$-substitution fails, you must map the expression to one of three primary cases:
> 
> |**Case Type**|**Algebraic Expression**|**Trigonometric Substitution**|**Underlying Identity**|**Reference Triangle Mapping**|
> |---|---|---|---|---|
> |**Case 1**|$\sqrt{a^2 - x^2}$|$x = a\sin\theta$|$1 - \sin^2\theta = \cos^2\theta$|Hypotenuse = $a$, Opposite = $x$|
> |**Case 2**|$\sqrt{x^2 + a^2}$|$x = a\tan\theta$|$\tan^2\theta + 1 = \sec^2\theta$|Adjacent = $a$, Opposite = $x$|
> |**Case 3**|$\sqrt{x^2 - a^2}$|$x = a\sec\theta$|$\sec^2\theta - 1 = \tan^2\theta$|Hypotenuse = $x$, Adjacent = $a$|
> 
> ### The Power of "Completing the Square"
> 
> Integrals encountered in real-world design rarely present themselves in a clean $x^2 \pm a^2$ format. When an integrand contains a quadratic trinomial ($Ax^2 + Bx + C$), you must use the algebraic restructuring technique of **completing the square** to isolate a perfect square binomial ($u^2$) alongside a constant ($a^2$).
> 
> As demonstrated in the core curriculum notes for expressions like $\sqrt{x^2+10x+26}$, adding and subtracting the square of half the linear coefficient allows you to transform a chaotic polynomial into a clear Case 2 structure: $\sqrt{(x+5)^2 + 1}$.
> 
> ## 2. Sample Pure-Math Problems
> 
> ### Sample Problem 1: Pattern Restructuring with Coefficients
> 
> **Evaluate the integral:**
> 
> $$\int \frac{1}{\sqrt{9x^2 + 25}} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Identify the pattern:** The terms inside the radical represent a sum of squares, pointing directly toward a **Case 2 (Tangent)** substitution. However, the $x^2$ term has a coefficient of **9**.
>     
> 2. **Restructure algebraically:** Rewrite the terms inside the radical to explicitly reveal the perfect squares:
>     
>     $$9x^2 + 25 = (3x)^2 + (5)^2$$
>     
> 3. **Set up the substitution:** Let the variable expression equal the constant times the tangent function:
>     
>     $$3x = 5\tan\theta \implies x = \frac{5}{3}\tan\theta$$
>     
>     $$dx = \frac{5}{3}\sec^2\theta \, d\theta$$
>     
> 4. **Substitute and Simplify:**
>     
>     $$\sqrt{9x^2 + 25} = \sqrt{(5\tan\theta)^2 + 25} = \sqrt{25(\tan^2\theta + 1)} = 5\sec\theta$$
>     
>     Now substitute everything back into the integral:
>     
>     $$\int \frac{1}{5\sec\theta} \cdot \left(\frac{5}{3}\sec^2\theta \, d\theta\right) = \frac{1}{3}\int \sec\theta \, d\theta$$
>     
> 5. **Integrate:**
>     
>     $$\frac{1}{3}\ln|\sec\theta + \tan\theta| + C$$
>     
> 6. **Back-Substitute:** Referencing a right triangle where $\tan\theta = \frac{3x}{5}$, the hypotenuse is $\sqrt{9x^2+25}$, yielding $\sec\theta = \frac{\sqrt{9x^2+25}}{5}$:
>     
>     $$\frac{1}{3}\ln\left| \frac{\sqrt{9x^2 + 25}}{5} + \frac{3x}{5} \right| + C = \frac{1}{3}\ln\left| \sqrt{9x^2 + 25} + 3x \right| + C$$
>     
> 
> ### Sample Problem 2: Restructuring via Completing the Square
> 
> **Evaluate the integral:**
> 
> $$\int \frac{1}{\sqrt{x^2 - 6x + 13}} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Complete the Square:** Isolate the quadratic terms and add/subtract $\left(\frac{-6}{2}\right)^2 = 9$:
>     
>     $$x^2 - 6x + 13 = (x^2 - 6x + 9) - 9 + 13 = (x - 3)^2 + 4$$
>     
> 2. **Identify the Case:** The restructured radical $\sqrt{(x-3)^2 + 4}$ matches **Case 2** ($\sqrt{u^2 + a^2}$) where $u = x - 3$ and $a = 2$.
>     
> 3. **Execute Substitution:** * Let $x - 3 = 2\tan\theta \implies dx = 2\sec^2\theta \, d\theta$
>     
>     - The radical becomes $\sqrt{(2\tan\theta)^2 + 4} = 2\sec\theta$
>         
> 4. **Integrate:**
>     
>     $$\int \frac{2\sec^2\theta \, d\theta}{2\sec\theta} = \int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta| + C$$
>     
> 5. **Back-Substitute:** Since $\tan\theta = \frac{x-3}{2}$, our reference triangle dictates that $\sec\theta = \frac{\sqrt{(x-3)^2+4}}{2}$:
>     
>     $$\ln\left| \frac{\sqrt{x^2 - 6x + 13}}{2} + \frac{x - 3}{2} \right| + C = \ln\left| \sqrt{x^2 - 6x + 13} + x - 3 \right| + C$$
>     
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Civil Engineering Tunnel Cross-Section Area]]
> [[Civil Engineering Tunnel Cross-Section Area Solution]]
> 
> ### Engineering Problem 2: [[Structural Cable Arc Length under Non-Uniform Load]]
> [[Structural Cable Arc Length under Non-Uniform Load Solution]]


#### Worked Example
$$\int \frac{1}{\sqrt{4x^2 + 16}} \, dx$$

> [!check]- Worked Solution
> ## Step 1: Simplify and Choose the Substitution
> 
> Before substituting, we can make the algebra much cleaner by factoring out a **4** from inside the square root:
> 
> $$\sqrt{4x^2 + 16} = \sqrt{4(x^2 + 4)} = 2\sqrt{x^2 + 4}$$
> 
> The integral now becomes:
> 
> $$\int \frac{1}{2\sqrt{x^2 + 4}} \, dx = \frac{1}{2} \int \frac{1}{\sqrt{x^2 + 4}} \, dx$$
> 
> The remaining radical contains a term of the form $\sqrt{x^2 + a^2}$, where $a^2 = 4$ (so $a = 2$). For this form, we use the tangent substitution:
> 
> - **Let:** $x = 2\tan\theta$
> 
> - **Differentiate both sides:** $dx = 2\sec^2\theta \, d\theta$
> 
> 
> ## Step 2: Substitute into the Integral
> 
> Next, transform the radical expression $\sqrt{x^2 + 4}$ using the Pythagorean identity $\tan^2\theta + 1 = \sec^2\theta$:
> 
> $$\sqrt{x^2 + 4} = \sqrt{(2\tan\theta)^2 + 4} = \sqrt{4\tan^2\theta + 4} = \sqrt{4(\tan^2\theta + 1)} = \sqrt{4\sec^2\theta} = 2\sec\theta$$
> 
> Now, substitute $\sqrt{x^2 + 4}$ and $dx$ back into our modified integral:
> 
> $$\frac{1}{2} \int \frac{1}{2\sec\theta} \cdot (2\sec^2\theta \, d\theta)$$
> 
> Cancel out the common factors:
> 
> $$\frac{1}{2} \int \sec\theta \, d\theta$$
> 
> ## Step 3: Evaluate the Trigonometric Integral
> 
> The integral of $\sec\theta$ is a standard calculus formula:
> 
> $$\int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta|$$
> 
> Applying this gives us the antiderivative in terms of $\theta$:
> 
> $$\frac{1}{2}\ln|\sec\theta + \tan\theta| + C$$
> 
> ## Step 4: Convert Back to the Original Variable $x$
> 
> We need to convert our terms back to the variable $x$ using our initial substitution relation:
> 
> $$\text{since } x = 2\tan\theta \implies \tan\theta = \frac{x}{2}$$
> 
> Using a reference right triangle where the opposite side is $x$ and the adjacent side is **2**:
> 
> - $\tan\theta = \frac{x}{2}$
> 
> - The hypotenuse is $\sqrt{x^2 + 2^2} = \sqrt{x^2 + 4}$
> 
> - Therefore, $\sec\theta = \frac{\text{hypotenuse}}{\text{adjacent}} = \frac{\sqrt{x^2 + 4}}{2}$
> 
> 
> Substitute these two values back into the logarithmic result:
> 
> $$\frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4}}{2} + \frac{x}{2} \right| + C$$
> 
> Combine the terms over a common denominator:
> 
> $$\frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4} + x}{2} \right| + C$$
> 
> ## Final Answer
> 
> Using logarithm properties ($\ln|\frac{A}{B}| = \ln|A| - \ln|B|$), the constant denominator of **2** can be absorbed into the integration constant $C$. Either form below is correct:
> 
> $$\int \frac{1}{\sqrt{4x^2 + 16}} \, dx = \frac{1}{2}\ln\left| \frac{\sqrt{x^2 + 4} + x}{2} \right| + C$$
> 
> $$\text{or simplified as: } \frac{1}{2}\ln\left| \sqrt{x^2 + 4} + x \right| + C$$

#### Active Practice Problem
$$\int \frac{1}{\sqrt{x^2 - 100}} \, dx$$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step 1: Choose the Substitution
> 
> The integrand contains a term of the form $\sqrt{x^2 - a^2}$, where $a^2 = 100$ (so $a = 10$). For this specific form, we use the secant substitution because the identity $\sec^2\theta - 1 = \tan^2\theta$ allows us to simplify the radical.
> 
> - **Let:** $x = 10\sec\theta$
> 
> - **Differentiate both sides:** $dx = 10\sec\theta\tan\theta \, d\theta$
> 
> 
> ## Step 2: Substitute into the Integral
> 
> Next, transform the radical expression $\sqrt{x^2 - 100}$ using the Pythagorean identity:
> 
> $$\sqrt{x^2 - 100} = \sqrt{(10\sec\theta)^2 - 100} = \sqrt{100\sec^2\theta - 100} = \sqrt{100(\sec^2\theta - 1)} = \sqrt{100\tan^2\theta} = 10\tan\theta$$
> 
> Now, substitute both the simplified radical and $dx$ back into the original integral:
> 
> $$\int \frac{1}{10\tan\theta} \cdot (10\sec\theta\tan\theta \, d\theta)$$
> 
> Simplify the expression by canceling out the common $10\tan\theta$ terms from the numerator and denominator:
> 
> $$\int \sec\theta \, d\theta$$
> 
> ## Step 3: Evaluate the Trigonometric Integral
> 
> The integral of $\sec\theta$ is a standard calculus formula:
> 
> $$\int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta|$$
> 
> Applying this gives us our antiderivative in terms of $\theta$:
> 
> $$\ln|\sec\theta + \tan\theta| + C$$
> 
> ## Step 4: Convert Back to the Original Variable $x$
> 
> We need to convert our terms back to the original variable $x$ using our initial substitution relation:
> 
> $$\text{Since } x = 10\sec\theta \implies \sec\theta = \frac{x}{10}$$
> 
> Using a reference right triangle where the hypotenuse is $x$ and the adjacent side is **10**:
> 
> - $\sec\theta = \frac{\text{hypotenuse}}{\text{adjacent}} = \frac{x}{10}$
> 
> - The opposite side is found via the Pythagorean theorem: $\sqrt{x^2 - 10^2} = \sqrt{x^2 - 100}$
> 
> - Therefore, $\tan\theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{\sqrt{x^2 - 100}}{10}$
> 
> 
> Substitute these two values back into our logarithmic result:
> 
> $$\ln\left| \frac{x}{10} + \frac{\sqrt{x^2 - 100}}{10} \right| + C$$
> 
> Combine the fractions over their common denominator:
> 
> $$\ln\left| \frac{x + \sqrt{x^2 - 100}}{10} \right| + C$$
> 
> ## Final Answer
> 
> By applying logarithm properties ($\ln|\frac{A}{B}| = \ln|A| - \ln|B|$), the constant denominator of **10** inside the natural log can be separated out ($-\ln(10)$) and absorbed entirely into the constant of integration $C$. Either form below is mathematically correct:
> 
> $$\int \frac{1}{\sqrt{x^2 - 100}} \, dx = \ln\left| \frac{x + \sqrt{x^2 - 100}}{10} \right| + C$$
> 
> $$\text{or simplified as: } \ln\left| x + \sqrt{x^2 - 100} \right| + C$$

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Sub)
> $$\int \frac{x}{\sqrt{x^2 - 4}} \, dx$$
> 
> > [!check]- Solution
> > ## Step 1: Choose the Substitution
> > 
> > The integrand contains a term of the form $\sqrt{x^2 - a^2}$, where $a^2 = 4$ (so $a = 2$). For this form, we use the secant substitution:
> > 
> > - **Let:** $x = 2\sec\theta$
> > 
> > - **Differentiate both sides:** $dx = 2\sec\theta\tan\theta \, d\theta$
> > 
> > 
> > ## Step 2: Substitute into the Integral
> > 
> > Next, transform the radical expression $\sqrt{x^2 - 4}$ using the Pythagorean identity $\sec^2\theta - 1 = \tan^2\theta$:
> > 
> > $$\sqrt{x^2 - 4} = \sqrt{(2\sec\theta)^2 - 4} = \sqrt{4\sec^2\theta - 4} = \sqrt{4(\sec^2\theta - 1)} = \sqrt{4\tan^2\theta} = 2\tan\theta$$
> > 
> > Now, substitute $x$, $\sqrt{x^2 - 4}$, and $dx$ back into the original integral:
> > 
> > $$\int \frac{2\sec\theta}{2\tan\theta} \cdot (2\sec\theta\tan\theta \, d\theta)$$
> > 
> > Simplify the expression by canceling out the common $2\tan\theta$ terms from the numerator and denominator:
> > 
> > $$\int (2\sec\theta) \cdot (\sec\theta \, d\theta) = \int 2\sec^2\theta \, d\theta$$
> > 
> > ## Step 3: Evaluate the Trigonometric Integral
> > 
> > The integral of $\sec^2\theta$ is a basic, standard integration formula because the derivative of $\tan\theta$ is $\sec^2\theta$:
> > 
> > $$\int 2\sec^2\theta \, d\theta = 2\tan\theta + C$$
> > 
> > ## Step 4: Convert Back to the Original Variable $x$
> > 
> > We need to convert the result back to the original variable $x$. Refer back to our step 2 simplification where we already established the relationship for $\tan\theta$:
> > 
> > $$\sqrt{x^2 - 4} = 2\tan\theta \implies \tan\theta = \frac{\sqrt{x^2 - 4}}{2}$$
> > 
> > Substitute this directly back into our integrated result:
> > 
> > $$2 \left( \frac{\sqrt{x^2 - 4}}{2} \right) + C$$
> > 
> > Cancel out the constant **2**:
> > 
> > $$\sqrt{x^2 - 4} + C$$
> > 
> > ## Final Answer
> > 
> > $$\int \frac{x}{\sqrt{x^2 - 4}} \, dx = \sqrt{x^2 - 4} + C$$
> > 
> > **Pro-Tip:** While trigonometric substitution works perfectly here, this specific integral can be solved much faster using standard $u$-substitution! If you let $u = x^2 - 4$, then $du = 2x \, dx$ (meaning $x \, dx = \frac{1}{2} \, du$). The integral becomes $\frac{1}{2} \int u^{-1/2} \, du$, which yields the exact same answer ($\sqrt{x^2 - 4} + C$) in just two steps. Keep an eye out for that shortcut on future problems where an $x$ sits perfectly outside the radical!
> 

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Right Triangle Geometry & Back-Substitution
> [!note]- Theory & Derivations
> An integral that begins in terms of the spatial variable $x$ must ultimately be answered in terms of $x$. **Skill 3** centers on the geometric bridge used to exit "theta-space" ($\theta$) and return safely to your original coordinate system using right triangles and trigonometric ratios.
> 
> ## 1. Core Explanational Notes
> 
> ### The Geometric Framework
> 
> Once you have successfully integrated a trigonometric expression, the mathematical result is expressed in terms of $\theta$. To convert these values back into $x$, you must map your initial substitution equation onto a reference right triangle. This process turns an abstract trigonometric expression back into physical algebraic components.
> 
> 1. **Map Known Sides:** Use your initial substitution to define two sides of a right triangle. For example, if you chose the substitution $x = a\sin\theta$, you can rewrite it as $\sin\theta = \frac{x}{a}$. Since sine represents $\frac{\text{Opposite}}{\text{Hypotenuse}}$, you label the opposite side as $x$ and the hypotenuse as $a$.
>     
> 2. **Find the Missing Side:** Use the Pythagorean theorem ($A^2 + B^2 = C^2$) to solve for the remaining unknown side. This step will always naturally reproduce the exact radical expression found in your original problem statement.
>     
> 3. **Extract the Target Ratios:** Read the required trigonometric terms ($\tan\theta$, $\cos\theta$, $\sec\theta$, etc.) directly off your newly completed reference triangle to replace the $\theta$ variables in your antiderivative.
>     
> 
> ### Decoding the Three Structural Configurations
> 
> Depending on your initial substitution choice, your reference triangle will be constructed in one of three ways:
> 
> |**Chosen Substitution**|**Isolation Ratio**|**Opposite Side**|**Adjacent Side**|**Hypotenuse**|**Remaining Ratios PDF**|
> |---|---|---|---|---|---|
> |**$x = a\sin\theta$**|$\sin\theta = \frac{x}{a}$|$x$|$\sqrt{a^2 - x^2}$|$a$|$\cos\theta = \frac{\sqrt{a^2-x^2}}{a}$, $\tan\theta = \frac{x}{\sqrt{a^2-x^2}}$|
> |**$x = a\tan\theta$**|$\tan\theta = \frac{x}{a}$|$x$|$a$|$\sqrt{x^2 + a^2}$|$\cos\theta = \frac{a}{\sqrt{x^2+a^2}}$, $\sin\theta = \frac{x}{\sqrt{x^2+a^2}}$|
> |**$x = a\sec\theta$**|$\sec\theta = \frac{x}{a}$|$\sqrt{x^2 - a^2}$|$a$|$x$|$\tan\theta = \frac{\sqrt{x^2-a^2}}{a}$, $\cos\theta = \frac{a}{x}$, $\sin\theta = \frac{\sqrt{x^2-a^2}}{x}$|
> 
> ## 2. Sample Pure-Math Problems
> 
> ### Sample Problem 1: Decoding Compound Sine-Cosine Products
> 
> **Evaluate the integral using a reference triangle to finish:**
> 
> $$\int \sqrt{9 - x^2} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Substitute:** Let $x = 3\sin\theta \implies dx = 3\cos\theta \, d\theta$. The radical simplifies to $3\cos\theta$.
>     
> 2. **Integrate:**
>     
>     $$\int (3\cos\theta)(3\cos\theta) \, d\theta = 9\int \cos^2\theta \, d\theta = \frac{9}{2}(\theta + \sin\theta\cos\theta) + C$$
>     
> 3. **Construct the Reference Triangle (Skill 3):**
>     
>     - Since $\sin\theta = \frac{x}{3}$, label the **Opposite = $x$** and the **Hypotenuse = 3**.
>         
>     - Solve for the adjacent side: $\text{Adjacent} = \sqrt{3^2 - x^2} = \sqrt{9 - x^2}$.
>         
> 4. **Extract Ratios:**
>     
>     - $\theta = \arcsin\left(\frac{x}{3}\right)$
>         
>     - $\sin\theta = \frac{x}{3}$
>         
>     - From the triangle, $\cos\theta = \frac{\text{Adjacent}}{\text{Hypotenuse}} = \frac{\sqrt{9 - x^2}}{3}$.
>         
> 5. **Back-Substitute:** Replace the trigonometric functions with these algebraic fractions:
>     
>     $$\frac{9}{2}\left( \arcsin\left(\frac{x}{3}\right) + \left(\frac{x}{3}\right)\left(\frac{\sqrt{9-x^2}}{3}\right) \right) + C = \frac{9}{2}\arcsin\left(\frac{x}{3}\right) + \frac{x\sqrt{9-x^2}}{2} + C$$
>     
> 
> ### Sample Problem 2: Decoding Reciprocal Trig Functions
> 
> **Evaluate the integral:**
> 
> $$\int \frac{1}{x^2\sqrt{x^2 - 4}} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> 1. **Substitute:** Let $x = 2\sec\theta \implies dx = 2\sec\theta\tan\theta \, d\theta$. The radical simplifies to $2\tan\theta$.
>     
> 2. **Integrate:**
>     
>     $$\int \frac{2\sec\theta\tan\theta}{(4\sec^2\theta)(2\tan\theta)} \, d\theta = \frac{1}{4}\int \frac{1}{\sec\theta} \, d\theta = \frac{1}{4}\int \cos\theta \, d\theta = \frac{1}{4}\sin\theta + C$$
>     
> 3. **Construct the Reference Triangle (Skill 3):**
>     
>     - Since $\sec\theta = \frac{x}{2}$, label the **Hypotenuse = $x$** and the **Adjacent = 2**.
>         
>     - Solve for the opposite side: $\text{Opposite} = \sqrt{x^2 - 2^2} = \sqrt{x^2 - 4}$.
>         
> 4. **Extract Ratios:** We need to replace $\sin\theta$. Looking at our triangle:
>     
>     $$\sin\theta = \frac{\text{Opposite}}{\text{Hypotenuse}} = \frac{\sqrt{x^2 - 4}}{x}$$
>     
> 5. **Back-Substitute:**
>     
>     $$\frac{1}{4}\left( \frac{\sqrt{x^2 - 4}}{x} \right) + C = \frac{\sqrt{x^2 - 4}}{4x} + C$$
>     
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Robotic Joint Coordinate Workspace Transformation]]
> [[Robotic Joint Coordinate Workspace Transformation Solution]]
> 
> ### Engineering Problem 2: [[Fluid Casing Hydrostatic Pressure Distribution]]
> [[Fluid Casing Hydrostatic Pressure Distribution Solution]]


#### Worked Example
$$\int \frac{x}{\sqrt{3 - 2x - x^2}} \, dx$$

> [!check]- Worked Solution
> ## Step 1: Complete the Square
> 
> The quadratic expression under the radical ($3 - 2x - x^2$) isn't in a standard $a^2 - u^2$ or $u^2 + a^2$ form yet. Let's rewrite it by completing the square:
> 
> 1. Factor out a negative sign from the $x$ terms:
> 
> $$3 - (x^2 + 2x)$$
> 
> 2. Take half of the $x$-coefficient ($\frac{2}{2} = 1$), square it ($1^2 = 1$), and both add and subtract it inside:
> 
> $$3 - (x^2 + 2x + 1 - 1)$$
> 
> 3. Group the perfect square trinomial and distribute the outer negative sign to the remaining $-1$:
> 
> $$3 - [(x + 1)^2 - 1] = 3 - (x + 1)^2 + 1 = 4 - (x + 1)^2$$
> 
> 
> Now, substitute this back into our radical. The integral becomes:
> 
> $$\int \frac{x}{\sqrt{4 - (x + 1)^2}} \, dx$$
> 
> ## Step 2: Choose the Substitution
> 
> The radical now perfectly matches the form $\sqrt{a^2 - u^2}$, where $a^2 = 4$ (so $a = 2$) and $u = x + 1$. For this form, we use the sine substitution:
> 
> - **Let:** $x + 1 = 2\sin\theta \implies x = 2\sin\theta - 1$
> 
> - **Differentiate both sides:** $dx = 2\cos\theta \, d\theta$
> 
> 
> ## Step 3: Substitute into the Integral
> 
> First, transform the radical denominator using the Pythagorean identity $1 - \sin^2\theta = \cos^2\theta$:
> 
> $$\sqrt{4 - (x + 1)^2} = \sqrt{4 - (2\sin\theta)^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4(1 - \sin^2\theta)} = 2\cos\theta$$
> 
> Now substitute the expressions for $x$, the radical denominator, and $dx$ back into the integral:
> 
> $$\int \frac{2\sin\theta - 1}{2\cos\theta} \cdot (2\cos\theta \, d\theta)$$
> 
> Notice how beautifully the $2\cos\theta$ terms cancel out from the numerator and denominator:
> 
> $$\int (2\sin\theta - 1) \, d\theta$$
> 
> ## Step 4: Evaluate the Trigonometric Integral
> 
> Now we integrate each term individually using standard trigonometric rules:
> 
> - $\int \sin\theta \, d\theta = -\cos\theta$
> 
> - $\int 1 \, d\theta = \theta$
> 
> 
> This gives us the antiderivative in terms of $\theta$:
> 
> $$-2\cos\theta - \theta + C$$
> 
> ## Step 5: Convert Back to the Original Variable $x$
> 
> We need to change our terms back to functions of $x$ using our initial substitution setup:
> 
> - From $x + 1 = 2\sin\theta$, we know that $\sin\theta = \frac{x + 1}{2}$, which means $\theta = \arcsin\left(\frac{x + 1}{2}\right)$.
> 
> 
> To find $\cos\theta$, we use a reference right triangle where the **opposite** side is $(x + 1)$ and the **hypotenuse** is **2**:
> 
> - The **adjacent** side is found via the Pythagorean theorem: $\sqrt{2^2 - (x+1)^2} = \sqrt{3 - 2x - x^2}$
> 
> - Therefore, $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}} = \frac{\sqrt{3 - 2x - x^2}}{2}$
> 
> 
> Substitute these back into our integrated result:
> 
> $$-2\left( \frac{\sqrt{3 - 2x - x^2}}{2} \right) - \arcsin\left(\frac{x + 1}{2}\right) + C$$
> 
> Cancel the constant factor of **2** in the first term:
> 
> $$-\sqrt{3 - 2x - x^2} - \arcsin\left(\frac{x + 1}{2}\right) + C$$
> 
> ## Final Answer
> 
> $$\int \frac{x}{\sqrt{3 - 2x - x^2}} \, dx = -\sqrt{3 - 2x - x^2} - \arcsin\left(\frac{x + 1}{2}\right) + C$$

#### Active Practice Problem
$$\int \sqrt{x^2 + 2x} \, dx$$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step 1: Complete the Square
> 
> The expression under the radical ($x^2 + 2x$) needs to be rewritten into a standard square form ($u^2 \pm a^2$).
> 
> 1. Take half of the $x$-coefficient ($\frac{2}{2} = 1$) and square it ($1^2 = 1$).
> 
> 2. Add and subtract this value inside the expression:
> 
> $$x^2 + 2x + 1 - 1$$
> 
> 3. Group the perfect square trinomial:
> 
> $$(x^2 + 2x + 1) - 1 = (x + 1)^2 - 1$$
> 
> 
> Now substitute this back into the radical. The integral becomes:
> 
> $$\int \sqrt{(x + 1)^2 - 1} \, dx$$
> 
> ## Step 2: Choose the Substitution
> 
> The expression inside the radical matches the form $\sqrt{u^2 - a^2}$, where $a^2 = 1$ (so $a = 1$) and $u = x + 1$. For this structure, we use the secant substitution:
> 
> - **Let:** $x + 1 = \sec\theta \implies x = \sec\theta - 1$
> 
> - **Differentiate both sides:** $dx = \sec\theta\tan\theta \, d\theta$
> 
> 
> ## Step 3: Substitute into the Integral
> 
> Transform the radical term using the Pythagorean identity $\sec^2\theta - 1 = \tan^2\theta$:
> 
> $$\sqrt{(x + 1)^2 - 1} = \sqrt{\sec^2\theta - 1} = \sqrt{\tan^2\theta} = \tan\theta$$
> 
> Now substitute both the simplified radical and $dx$ back into the integral:
> 
> $$\int (\tan\theta) \cdot (\sec\theta\tan\theta \, d\theta) = \int \sec\theta\tan^2\theta \, d\theta$$
> 
> ## Step 4: Evaluate the Trigonometric Integral
> 
> To integrate $\sec\theta\tan^2\theta$, convert $\tan^2\theta$ back into secant terms using $\tan^2\theta = \sec^2\theta - 1$:
> 
> $$\int \sec\theta(\sec^2\theta - 1) \, d\theta = \int (\sec^3\theta - \sec\theta) \, d\theta$$
> 
> This leaves us with two separate standard trigonometric integrals to evaluate:
> 
> 1. **The integral of $\sec^3\theta$** is a classic result typically solved using integration by parts:
> 
> $$\int \sec^3\theta \, d\theta = \frac{1}{2}\sec\theta\tan\theta + \frac{1}{2}\ln|\sec\theta + \tan\theta|$$
> 
> 2. **The integral of $\sec\theta$** is a known standard log rule:
> 
> $$\int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta|$$
> 
> 
> Combine these two parts together:
> 
> $$\left( \frac{1}{2}\sec\theta\tan\theta + \frac{1}{2}\ln|\sec\theta + \tan\theta| \right) - \ln|\sec\theta + \tan\theta| + C$$
> 
> Combine the like logarithmic terms ($\frac{1}{2} - 1 = -\frac{1}{2}$):
> 
> $$\frac{1}{2}\sec\theta\tan\theta - \frac{1}{2}\ln|\sec\theta + \tan\theta| + C$$
> 
> ## Step 5: Convert Back to the Original Variable $x$
> 
> We need to revert the trigonometric components back into functions of $x$ using our initial substitution relationships:
> 
> - From our substitution, we directly know that $\sec\theta = x + 1$.
> 
> - From Step 3, we already established that $\tan\theta = \sqrt{(x + 1)^2 - 1} = \sqrt{x^2 + 2x}$.
> 
> 
> Substitute these algebraic terms back into our integrated expression:
> 
> $$\frac{1}{2}(x + 1)\sqrt{x^2 + 2x} - \frac{1}{2}\ln\left| (x + 1) + \sqrt{x^2 + 2x} \right| + C$$
> 
> ## Final Answer
> 
> $$\int \sqrt{x^2 + 2x} \, dx = \frac{1}{2}(x + 1)\sqrt{x^2 + 2x} - \frac{1}{2}\ln\left| x + 1 + \sqrt{x^2 + 2x} \right| + C$$

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 16 and overview of homework homework assignment.
