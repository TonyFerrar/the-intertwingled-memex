---
title: "Session 04 - U Substitution"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 04 - U Substitution

## Session Objectives
- Algebraic Flexibility Rewriting and Variable Manipulation
- Pattern Recognition Spotting the Inner Function and its Derivative
- Precision in Mechanics Handling Constants, Limits, and Core Rules

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
> [!example] Engineering Context: Engineering Calculus II Application
> In engineering, mastering the substitution rule is essential for modeling and controlling the physical world, as it translates complex mathematical systems into simpler, solvable forms. For example, electrical engineers use the mechanics of **introducing constants** to evaluate dynamic AC power and exponential capacitor charging integrals , while civil and mechanical engineers rely on **pattern recognition** to isolate trapped "inner functions" when mapping hydrostatic fluid pressure and structural stress. Additionally, aerospace engineers and roboticists employ **variable manipulation** to transform complex three-dimensional paths into simpler coordinate systems , while chemical and nuclear engineers depend on absolute **precision when transforming definite integration limits** to ensure thermal safety systems deploy at the exact correct physical thresholds. Ultimately, the ability to successfully substitute a complex expression with a single manageable variable allows engineers to efficiently calculate the critical, real-time equations that keep modern infrastructure, flight guidance software, and power grids operating safely.

### Skill Block 1
> [!note]- Theory & Derivations
> Integrals in the real world rarely arrive perfectly configured for a basic substitution. Often, the "inner function" or its "derivative partner" is visually obscured. To uncover them, you must develop **Algebraic Flexibility**, which primarily manifests in two ways:
> 
> ### Sub-Technique A: Rewriting the Integrand Upfront
> 
> Sometimes, a standard choice of $u$ fails because its exact derivative is nowhere to be found in the integrand. When this happens, you must use algebraic or trigonometric identities to alter the appearance of the expression _before_ attempting a substitution.
> 
> - For example, recognizing exponential relationships like $e^{2x} = (e^x)^2$ allows you to transform a confusing denominator into a recognizable geometric or inverse trigonometric pattern.
>     
> 
> ### Sub-Technique B: Back-Substitution (Variable Manipulation)
> 
> The explicit goal of $u$-substitution is to rewrite the _entire_ integrand completely in terms of $u$ and $du$. However, you will frequently encounter cases where, after substituting $u$ and $du$, you are still left with an "extra" $x$ variable floating around.
> 
> - Instead of giving up, you can use algebra to **manipulate your original substitution equation**. By isolating and solving for $x$ in terms of $u$, you can perform a "back-substitution" to eliminate the remaining $x$ terms.
>     
> 
> ## 2. Standard Sample Problems
> 
> ### Sample Problem 1: Rewriting Upfront
> 
> Evaluate the following indefinite integral:
> 
> $$\int \frac{e^x}{1 + e^{2x}} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> - **Step 1: Rewrite the integrand.** Direct substitution of the denominator ($u = 1 + e^{2x}$) leaves us with a $du$ that does not exist in the numerator. Instead, rewrite the exponential term in the denominator:
>     
>     $$\int \frac{e^x}{1 + (e^x)^2} \, dx \text{}$$
>     
> - Step 2: Choose $u$ and find $du$ . Now, the inner function $e^x$ is apparent. Let $u = e^x$ Then $du = e^x \, dx$
>     
> - Step 3: Substitute into the integral.
>     
>     $$\int \frac{1}{1 + u^2} \, du \text{}$$
>     
> - **Step 4: Integrate and substitute back.** This matches the standard inverse tangent derivative rule:
>     
>     $$\int \frac{1}{1 + u^2} \, du = \tan^{-1}(u) + C$$
>     
>     $$\quad = \tan^{-1}(e^x) + C$$
>     
> 
> ### Sample Problem 2: Variable Manipulation (Back-Substitution)
> 
> Evaluate the following indefinite integral:
> 
> $$\int x\sqrt{x + 2} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> - **Step 1: Choose $u$ and find $du$.** Let $u = x + 2$
>     
>     Then $du = dx$
>     
> - **Step 2: Isolate $x$ to handle the leftover variable.** Substituting $u$ and $du$ leaves the front $x$ untouched. We must manipulate our $u$ equation to solve for $x$:
>     
>     $$u = x + 2 \implies x = u - 2$$
>     
> - **Step 3: Substitute everything back into the integral.**
>     
>     $$\int \underbrace{(u - 2)}_{x} \cdot \underbrace{u^{1/2}}_{\sqrt{x+2}} \, \underbrace{du}{dx}$$
>     
> - **Step 4: Distribute and integrate.**
>     
>     $$\int (u^{3/2} - 2u^{1/2}) \, du$$
>     
>     Using the power rule:
>     
>     $$\frac{2}{5}u^{5/2} - 2\left(\frac{2}{3}u^{3/2}\right) + C = \frac{2}{5}u^{5/2} - \frac{4}{3}u^{3/2} + C$$
>     
> - **Step 5: Return to the original variable $x$.**
>     
>     $$\frac{2}{5}(x + 2)^{5/2} - \frac{4}{3}(x + 2)^{3/2} + C$$
>     
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Electrical Engineering — Non-linear Power Dissipation]]
> [[Electrical Engineering — Non-linear Power Dissipation Solution]]
> 
> ### Engineering Problem 2: [[Aerospace Engineering — Thermal Damping Wave Propagation]]
> [[Aerospace Engineering — Thermal Damping Wave Propagation Solution]]


#### Worked Example
$$\int (2x+1)\sqrt[5]{x^{2}+x} \, dx$$

> [!check]- Worked Solution
> ## Step-by-Step Solution
> 
> We want to evaluate the following indefinite integral:
> 
> $$\int (2x+1)\sqrt[5]{x^2+x} \, dx$$
> 
> This problem is a perfect candidate for **$u$-substitution** because the derivative of the expression inside the radical, $x^2 + x$, is exactly the other term in the integrand, $2x + 1$.
> 
> ### Step 1: Choose $u$ and find $du$
> 
> Let's define our substitute variable $u$ as the inside function:
> 
> $$u = x^2 + x$$
> 
> Now, take the derivative of $u$ with respect to $x$ to find $du$:
> 
> $$du = (2x + 1) \, dx$$
> 
> ### Step 2: Substitute $u$ and $du$ into the original integral
> 
> Notice how the pieces of our original integral perfectly match our substitution components:
> 
> - $\sqrt[5]{x^2+x}$ becomes $\sqrt[5]{u}$ (or $u^{1/5}$)
> 
> - $(2x + 1) \, dx$ becomes $du$
> 
> 
> Rewriting the integral gives:
> 
> $$\int u^{1/5} \, du$$
> 
> ### Step 3: Integrate with respect to $u$
> 
> Using the power rule for integration, $\int u^n \, du = \frac{u^{n+1}}{n+1} + C$:
> 
> $$\int u^{1/5} \, du = \frac{u^{\frac{1}{5} + 1}}{\frac{1}{5} + 1} + C$$
> 
> $$\quad = \frac{u^{6/5}}{\frac{6}{5}} + C$$
> 
> $$\quad = \frac{5}{6}u^{6/5} + C$$
> 
> ### Step 4: Substitute the original expression back in
> 
> Finally, replace $u$ with our original expression $x^2 + x$ to get the final answer in terms of $x$:
> 
> $$\frac{5}{6}(x^2 + x)^{6/5} + C$$
> 
> **Final Answer:**
> 
> $$\frac{5}{6}\sqrt[5]{(x^2 + x)^6} + C$$
> 
> _(Note: $C$ represents the constant of integration.)_

#### Active Practice Problem
$$\int \frac{x}{x^{2}+1} \, dx$$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step-by-Step Solution
> 
> We want to evaluate the following indefinite integral:
> 
> $$\int \frac{x}{x^2+1} \, dx$$
> 
> This is another classic **$u$-substitution** problem. The degree of the polynomial in the denominator ($x^2+1$) is 2, and the degree of the numerator ($x$) is 1. Since the numerator is a scalar multiple of the derivative of the denominator, $u$-substitution is the perfect tool.
> 
> ### Step 1: Choose $u$ and find $du$
> 
> Let's set $u$ equal to the entire denominator:
> 
> $$u = x^2 + 1$$
> 
> Now, take the derivative of $u$ with respect to $x$:
> 
> $$du = 2x \, dx$$
> 
> ### Step 2: Adjust for the numerator
> 
> Looking at our original integral, the numerator only has $x \, dx$, not $2x \, dx$. We can adjust our $du$ equation by dividing both sides by 2:
> 
> $$\frac{1}{2} \, du = x \, dx$$
> 
> ### Step 3: Substitute into the original integral
> 
> Now replace the terms in the original integral with $u$ and $du$:
> 
> - The denominator $x^2 + 1$ becomes $u$.
> 
> - The numerator and differential $x \, dx$ become $\frac{1}{2} \, du$.
> 
> 
> $$\int \frac{x}{x^2+1} \, dx = \int \frac{1}{u} \cdot \left(\frac{1}{2} \, du\right)$$
> 
> Pull the constant factor $\frac{1}{2}$ outside the integral:
> 
> $$\frac{1}{2} \int \frac{1}{u} \, du$$
> 
> ### Step 4: Integrate with respect to $u$
> 
> The integral of $\frac{1}{u}$ is a standard rule: $\int \frac{1}{u} \, du = \ln|u| + C$.
> 
> $$\frac{1}{2} \int \frac{1}{u} \, du = \frac{1}{2} \ln|u| + C$$
> 
> ### Step 5: Substitute the original expression back in
> 
> Replace $u$ with $x^2 + 1$:
> 
> $$\frac{1}{2} \ln|x^2 + 1| + C$$
> 
> _(Note: Because $x^2 + 1$ is always positive for any real number $x$, you can safely drop the absolute value bars and use parentheses instead)._
> 
> **Final Answer:**
> 
> $$\frac{1}{2} \ln(x^2 + 1) + C$$

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
> [!note]- Theory & Derivations
> When confronted with a complex, intimidating integral, your first line of defense is always **Pattern Recognition**. The substitution rule is essentially the **Chain Rule in reverse**.
> 
> Recall from differential calculus that the Chain Rule for a composite function is written as:
> 
> $$\frac{d}{dx}[f(g(x))] = f^{\prime}(g(x))g^{\prime}(x) \text{ [cite: 29]}$$
> 
> By reversing this logic to find an antiderivative, we get:
> 
> $$\int f^{\prime}(g(x))g^{\prime}(x) \, dx = f(g(x)) + C \text{ [cite: 31]}$$
> 
> The absolute core of Skill 1 is learning how to split an integrand into two distinct roles:
> 
> 1. **The Inner Function ($u$):** A function $g(x)$ that is "trapped" inside another function.
>     
> 2. **The Derivative Partner ($du$):** The exact derivative of that inner function ($g^{\prime}(x) \, dx$), floating freely elsewhere in the integrand.
>     
> 
> ### How to Spot the Pattern
> 
> Train your eyes to scan for algebraic pairings. If you choose $u = g(x)$, you must be able to see its derivative $g^{\prime}(x)$ multiplying the rest of the expression. Common nesting spots for the inner function include:
> 
> - Inside a radical: $\sqrt{g(x)}$
>     
> - In the denominator: $\frac{1}{g(x)}$
>     
> - As an exponent: $e^{g(x)}$
>     
> - Inside a trigonometric function: $\sin(g(x))$
>     
> 
> ## 2. Standard Sample Problems
> 
> ### Sample Problem 1: The Polynomial Pair
> 
> Evaluate the following indefinite integral:
> 
> $$\int 3x^2 \cos(x^3 + 4) \, dx$$
> 
> #### Step-by-Step Solution:
> 
> - **Step 1: Identify the inner function ($u$) and its derivative ($du$).** Looking at the integrand, $x^3 + 4$ is trapped inside the cosine function. Its derivative is $3x^2$. This is a perfect match. Let $u = x^3 + 4$ Then $du = 3x^2 \, dx$
>     
> - **Step 2: Substitute components into the integral.**
>     
>     $$\int \underbrace{\cos(x^3 + 4)}_{\cos(u)} \cdot \underbrace{3x^2 \, dx}_{du} = \int \cos(u) \, du \text{ [cite: 51]}$$
>     
> - **Step 3: Integrate with respect to $u$.**
>     
>     $$\int \cos(u) \, du = \sin(u) + C \text{ [cite: 53]}$$
>     
> - **Step 4: Substitute back in terms of $x$.**
>     
>     $$\sin(x^3 + 4) + C \text{ [cite: 54]}$$
>     
> 
> ### Sample Problem 2: The Hidden Fraction Pattern
> 
> Evaluate the following indefinite integral:
> 
> $$\int \frac{\ln(x)}{x} \, dx$$
> 
> #### Step-by-Step Solution:
> 
> - **Step 1: Identify the inner function ($u$) and its derivative ($du$).**
>     
>     This expression can be rewritten to reveal the pattern more clearly: $\int \ln(x) \cdot \frac{1}{x} \, dx$.
>     
>     Let $u = \ln(x)$
>     
>     Then $du = \frac{1}{x} \, dx$
>     
> - **Step 2: Substitute components into the integral.**
>     
>     $$\int (u) \, du$$
>     
> - **Step 3: Integrate using the power rule.**
>     
>     $$\int u^1 \, du = \frac{1}{2}u^2 + C$$
>     
> - **Step 4: Substitute back in terms of $x$.**
>     
>     $$\frac{1}{2}(\ln(x))^2 + C$$
>     
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Civil Engineering — Hydrostatic Force on a Curved Dam Wall]]
> [[Civil Engineering — Hydrostatic Force on a Curved Dam Wall Solution]]
> 
> 
> ### Engineering Problem 2: [[Mechanical Engineering — Mechanical Shear Stress in a Shaft]]
> [[Mechanical Engineering — Mechanical Shear Stress in a Shaft Solution]]


#### Worked Example
$$\int_{0}^{\pi/4} \tan(x)\sec^{2}(x) \, dx$$

> [!check]- Worked Solution
> ## Step-by-Step Solution
> 
> We want to evaluate the following definite integral:
> 
> $$\int_{0}^{\pi/4} \tan(x)\sec^2(x) \, dx$$
> 
> This problem is a classic trigonometry-based **$u$-substitution**. Since the derivative of $\tan(x)$ is exactly $\sec^2(x)$, we have a perfect pairing ready to go. Because this is a _definite_ integral (it has upper and lower limits), we also need to update our limits of integration when we switch from $x$ to $u$.
> 
> ### Step 1: Choose $u$ and find $du$
> 
> Let's choose our substitution variable:
> 
> $$u = \tan(x)$$
> 
> Now, take the derivative of $u$ with respect to $x$:
> 
> $$du = \sec^2(x) \, dx$$
> 
> ### Step 2: Convert the limits of integration
> 
> Since we are changing variables from $x$ to $u$, we must plug the original $x$ limits into our substitution equation ($u = \tan(x)$) to find the new $u$ limits.
> 
> - **Lower limit ($x = 0$):**
> 
> $$u = \tan(0) = 0$$
> 
> - **Upper limit ($x = \frac{\pi}{4}$):**
> 
> $$u = \tan\left(\frac{\pi}{4}\right) = 1$$
> 
> 
> ### Step 3: Substitute into the integral
> 
> Now, swap out all the $x$ components for their $u$ equivalents:
> 
> - The limits change from $0 \to \frac{\pi}{4}$ to $0 \to 1$.
> 
> - $\tan(x)$ becomes $u$.
> 
> - $\sec^2(x) \, dx$ becomes $du$.
> 
> 
> $$\int_{0}^{1} u \, du$$
> 
> ### Step 4: Integrate and evaluate
> 
> Using the power rule for integration ($\int u \, du = \frac{1}{2}u^2$), we evaluate from $0$ to $1$:
> 
> $$\left[ \frac{1}{2}u^2 \right]_{0}^{1}$$
> 
> Now, apply the Fundamental Theorem of Calculus (plug in the top number, then subtract the bottom number):
> 
> $$\left( \frac{1}{2}(1)^2 \right) - \left( \frac{1}{2}(0)^2 \right)$$
> 
> $$\quad = \frac{1}{2} - 0 = \frac{1}{2}$$
> 
> **Final Answer:**
> 
> $$\frac{1}{2}$$
> 
> _(Fun side note: You can actually solve this by picking $u = \sec(x)$ instead, since the derivative of $\sec(x)$ is $\sec(x)\tan(x)$. If you try it that way, your new limits will be $1$ to $\sqrt{2}$, but the math beautifully shakes out to give you the exact same answer!)_

#### Active Practice Problem
$$\int_{1}^{3} \frac{e^{1/x}}{x^{2}} \, dx$$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step-by-Step Solution
> 
> We want to evaluate the following definite integral:
> 
> $$\int_{1}^{3} \frac{e^{1/x}}{x^2} \, dx$$
> 
> This problem is a great candidate for **$u$-substitution**. If we rewrite the fraction slightly, it looks like $\int_{1}^{3} e^{1/x} \cdot \frac{1}{x^2} \, dx$. Since the derivative of $\frac{1}{x}$ is closely related to $\frac{1}{x^2}$, we can set up our substitution perfectly.
> 
> ### Step 1: Choose $u$ and find $du$
> 
> Let's choose the exponent of $e$ as our substitute variable:
> 
> $$u = \frac{1}{x} = x^{-1}$$
> 
> Now, take the derivative of $u$ with respect to $x$ using the power rule:
> 
> $$du = -1x^{-2} \, dx = -\frac{1}{x^2} \, dx$$
> 
> Since our original integral has a positive $\frac{1}{x^2} \, dx$, let's move the negative sign to the other side:
> 
> $$-du = \frac{1}{x^2} \, dx$$
> 
> ### Step 2: Convert the limits of integration
> 
> Because this is a definite integral, we need to update our lower and upper limits from $x$-values to $u$-values using our formula $u = \frac{1}{x}$.
> 
> - **Lower limit ($x = 1$):**
> 
> $$u = \frac{1}{1} = 1$$
> 
> - **Upper limit ($x = 3$):**
> 
> $$u = \frac{1}{3}$$
> 
> 
> ### Step 3: Substitute into the integral
> 
> Now, swap the $x$ variables and limits with their $u$ counterparts:
> 
> - The limits change from $1 \to 3$ to $1 \to \frac{1}{3}$.
> 
> - $e^{1/x}$ becomes $e^u$.
> 
> - $\frac{1}{x^2} \, dx$ becomes $-du$.
> 
> 
> $$\int_{1}^{1/3} e^u (-du) = -\int_{1}^{1/3} e^u \, du$$
> 
> _Pro-Tip:_ You can use the negative sign outside the integral to flip the lower and upper limits of integration back into standard increasing order:
> 
> $$\int_{1/3}^{1} e^u \, du$$
> 
> ### Step 4: Integrate and evaluate
> 
> The integral of $e^u$ is simply $e^u$. Now we evaluate it from $\frac{1}{3}$ to $1$:
> 
> $$\left[ e^u \right]_{1/3}^{1}$$
> 
> Apply the Fundamental Theorem of Calculus (plug in the upper limit, then subtract the lower limit):
> 
> $$e^1 - e^{1/3}$$
> 
> $$\quad = e - \sqrt[3]{e}$$
> 
> **Final Answer:**
> 
> $$e - \sqrt[3]{e}$$

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
> [!note]- Theory & Derivations
> Even if you possess perfect pattern recognition, a $u$-substitution can fall apart due to minor mechanical errors. Skill 3 focuses on execution precision: managing mismatched constant coefficients, transforming boundaries for definite integrals, and correctly applying final integration rules.
> 
> ### Sub-Technique A: Substitution by Introducing a Constant
> 
> When finding $du$, the derivative of your chosen $u$ will frequently contain a constant multiplier that does not perfectly match the constant sitting in the original integrand. Because constants can be factored out of integrals, you can algebraically manipulate the $du$ equation to introduce the necessary balancing constant factor.
> 
> ### Sub-Technique B: Transforming Boundaries for Definite Integrals
> 
> When evaluating a definite integral using substitution, the original boundaries are explicitly stated in terms of the original variable (e.g., $x = a$ to $x = b$). You must update these limits to $u$-limits immediately upon changing variables.
> 
> The fundamental framework for this mechanic requires following these sequential steps:
> 
> - **Step 1:** Select an appropriate inner expression for the new variable $u$.
>     
> - **Step 2:** Differentiate $u$ to calculate $du$ in terms of $x$ and $dx$.
>     
> - **Step 3:** Substitute all original variables, differentials, and boundary limits into their corresponding $u$ and $du$ representations.
>     
> - **Step 4:** Compute the newly simplified integral across the updated $u$-boundaries.
>     
> - **Step 5:** Complete the calculation depending on the integral type:
>     
>     - For **indefinite integrals**, substitute the original expression back into $u$ and append the constant of integration ($C$).
>         
>     - For **definite integrals**, evaluate the numerical boundaries directly in terms of $u$; there is no need to revert back to the original variable $x$.
>         
> 
> ## 2. Standard Sample Problem
> 
> ### Sample Problem: The Definite Constant Adjustment
> 
> Evaluate the following definite integral using the mechanics outlined above:
> 
> $$\int_{0}^{\frac{\pi}{2}} \sin(2x) \, dx$$
> 
> #### Step-by-Step Solution:
> 
> - Step 1: Choose $u$ and calculate $du$ . The inner function of the sine expression is $2x$.
>     
>     $$u = 2x$$
>     
>     $$du = 2 \, dx$$
>     
> - Step 2: Balance the constant factor. The original integrand contains only $dx$, not $2 \, dx$. Divide both sides by 2 to balance the differential component:
>     
>     $$\frac{1}{2} \, du = dx$$
>     
> - Step 3: Transform the integration limits . Use the boundary tracking formula $u = 2x$ to convert the limits from $x$ to $u$:
>     
>     - Lower limit: When $x = 0 \implies u = 2(0) = 0$
>         
>     - Upper limit: When $x = \frac{\pi}{2} \implies u = 2\left(\frac{\pi}{2}\right) = \pi$
>         
> - Step 4: Rewrite and integrate in terms of $u$ . Substitute the updated limits ($0 \to \pi$), replace $2x$ with $u$, and swap $dx$ for $\frac{1}{2} \, du$:
>     
>     $$\int_{0}^{\pi} \sin(u) \cdot \frac{1}{2} \, du = \frac{1}{2} \int_{0}^{\pi} \sin(u) \, du$$
>     
>     The antiderivative of $\sin(u)$ is $-\cos(u)$:
>     
>     $$\left[ -\frac{1}{2}\cos(u) \right]_{0}^{\pi}$$
>     
> - Step 5: Numerically evaluate the boundaries . Apply the fundamental integration limits directly to the $u$ terms without reverting back to $x$:
>     
>     $$\left(-\frac{1}{2}\cos(\pi)\right) - \left(-\frac{1}{2}\cos(0)\right)$$
>     
>     Knowing $\cos(\pi) = -1$ and $\cos(0) = 1$:
>     
>     $$\left(-\frac{1}{2} \cdot (-1)\right) + \left(\frac{1}{2} \cdot 1\right) = \frac{1}{2} + \frac{1}{2} = 1$$
>     
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Electrical Engineering — Capacitor Energy Charging]]
> [[Electrical Engineering — Capacitor Energy Charging Solution]]
> 
> ### Engineering Problem 2: [[Nuclear Engineering — Thermal Energy Generation Startup Phase]]
> [[Nuclear Engineering — Thermal Energy Generation Startup Phase Solution]]


#### Worked Example
$$\int x\sqrt{3-x} \, dx$$

> [!check]- Worked Solution
> ## Step-by-Step Solution
> 
> We want to evaluate the following indefinite integral:
> 
> $$\int x\sqrt{3-x} \, dx$$
> 
> This problem uses a special twist on **$u$-substitution** often called **back-substitution**. Notice that if we set $u = 3-x$, its derivative is just $-1$, which doesn't automatically cancel out the $x$ sitting outside the radical. To fix this, we will solve our substitution equation for $x$ and substitute that in too!
> 
> ### Step 1: Choose $u$ and find $du$
> 
> Let's choose the expression under the radical to be our $u$:
> 
> $$u = 3 - x$$
> 
> Now, find $du$:
> 
> $$du = -1 \, dx \implies -du = dx$$
> 
> ### Step 2: Solve for $x$ in terms of $u$
> 
> Since we have an extra $x$ left over in the integrand, let's rearrange our original $u$ equation to isolate $x$:
> 
> $$u = 3 - x$$
> 
> $$x = 3 - u$$
> 
> ### Step 3: Substitute everything into the original integral
> 
> Now replace every single part of the original $x$-integral with its $u$ equivalent:
> 
> - $x$ becomes $(3 - u)$
> 
> - $\sqrt{3-x}$ becomes $\sqrt{u}$ (or $u^{1/2}$)
> 
> - $dx$ becomes $-du$
> 
> 
> $$\int (3 - u) \cdot u^{1/2} \cdot (-du)$$
> 
> Pull the negative sign out front:
> 
> $$-\int (3 - u)u^{1/2} \, du$$
> 
> ### Step 4: Distribute and integrate
> 
> Before integrating, distribute $u^{1/2}$ into the parentheses:
> 
> $$-\int (3u^{1/2} - u^{3/2}) \, du$$
> 
> Distribute the negative sign to make the power rule cleaner:
> 
> $$\int (u^{3/2} - 3u^{1/2}) \, du$$
> 
> Now, apply the power rule ($\int u^n \, du = \frac{u^{n+1}}{n+1}$) to each term:
> 
> - For $u^{3/2}$: $\frac{u^{5/2}}{5/2} = \frac{2}{5}u^{5/2}$
> 
> - For $3u^{1/2}$: $3 \cdot \frac{u^{3/2}}{3/2} = 3 \cdot \frac{2}{3}u^{3/2} = 2u^{3/2}$
> 
> 
> Putting it together:
> 
> $$\frac{2}{5}u^{5/2} - 2u^{3/2} + C$$
> 
> ### Step 5: Substitute the original expression back in
> 
> Finally, replace $u$ with $3-x$:
> 
> $$\frac{2}{5}(3-x)^{5/2} - 2(3-x)^{3/2} + C$$
> 
> **Final Answer:**
> 
> $$\frac{2}{5}(3-x)^{5/2} - 2(3-x)^{3/2} + C$$

#### Active Practice Problem
$$\int_{0}^{\sqrt{\pi}} 4x\cos(x^{2}) \, dx$$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step-by-Step Solution
> 
> We want to evaluate the following definite integral:
> 
> $$\int_{0}^{\sqrt{\pi}} 4x \cos(x^2) \, dx$$
> 
> This problem is a classic **$u$-substitution** involving trigonometric functions. The inside function is $x^2$, and its derivative is closely related to the $4x$ term sitting outside the cosine function. Because it is a definite integral, we will also update our limits of integration as we switch from $x$ to $u$.
> 
> ### Step 1: Choose $u$ and find $du$
> 
> Let's choose the inside function of the cosine term to be our $u$:
> 
> $$u = x^2$$
> 
> Now, take the derivative of $u$ with respect to $x$:
> 
> $$du = 2x \, dx$$
> 
> ### Step 2: Adjust for the coefficients
> 
> Our original integral contains $4x \, dx$, but our derivative gives us $2x \, dx$. To match the integral perfectly, we can multiply both sides of our $du$ equation by 2:
> 
> $$2 \, du = 4x \, dx$$
> 
> ### Step 3: Convert the limits of integration
> 
> Since we are switching variables from $x$ to $u$, we must transform the upper and lower boundaries using our substitution equation $u = x^2$.
> 
> - **Lower limit ($x = 0$):**
> 
> $$u = (0)^2 = 0$$
> 
> - **Upper limit ($x = \sqrt{\pi}$):**
> 
> $$u = (\sqrt{\pi})^2 = \pi$$
> 
> 
> ### Step 4: Substitute into the integral
> 
> Now, replace all components of the original integral with our new $u$ terms:
> 
> - The limits change from $0 \to \sqrt{\pi}$ to $0 \to \pi$.
> 
> - $\cos(x^2)$ becomes $\cos(u)$.
> 
> - $4x \, dx$ becomes $2 \, du$.
> 
> 
> $$\int_{0}^{\pi} \cos(u) \cdot 2 \, du$$
> 
> Pull the constant factor 2 outside the integral:
> 
> $$2 \int_{0}^{\pi} \cos(u) \, du$$
> 
> ### Step 5: Integrate and evaluate
> 
> The antiderivative of $\cos(u)$ is $\sin(u)$. Now we evaluate this from $0$ to $\pi$:
> 
> $$2 \Big[ \sin(u) \Big]_{0}^{\pi}$$
> 
> Apply the Fundamental Theorem of Calculus (plug in the upper limit, then subtract the lower limit):
> 
> $$2 \big( \sin(\pi) - \sin(0) \big)$$
> 
> Recall the values of these trigonometric points on the unit circle:
> 
> - $\sin(\pi) = 0$
> 
> - $\sin(0) = 0$
> 
> 
> Substitute those values back into the equation:
> 
> $$2 (0 - 0) = 0$$
> 
> **Final Answer:**
> 
> $$0$$
> 
> _(Fun fact: The answer is exactly zero because the positive area under the curve from $0$ to $\sqrt{\pi/2}$ perfectly cancels out the negative area under the curve from $\sqrt{\pi/2}$ to $\sqrt{\pi}$!)_

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 04 and overview of homework homework assignment.
