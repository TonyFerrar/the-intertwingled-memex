---
title: "Session 09 - Implicit Differentiation and Logarithmic Differentiation"
type: course-session
course: MATH-181
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 09 - Implicit Differentiation and Logarithmic Differentiation

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - The Mechanics of Implicit Differentiation
> - Higher-Order Implicit Differentiation
> - Logarithmic Differentiation

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Hidden Relationships in Complex Systems
> In real-world engineering, systems are rarely bound by clean, explicit formulas, making the concepts from these notes essential for modeling complex physical relationships. **Implicit differentiation** is heavily used in mechanical engineering and robotics to map kinematics and joint velocities along geometric constraints, in thermodynamics to find rates of pressure change ($\frac{dP}{dV}$) within non-linear equations of state, and in cryptography to compute tangent lines on elliptic security curves. Meanwhile, **logarithmic differentiation** provides a shortcut for electrical and materials engineers to differentiate tedious, multi-factor formulas like signal decay or to isolate fractional rates of change ($\frac{y'}{y}$) for structural strain calculations, and it forms the bedrock of AI deep learning by converting computationally heavy probability products into simple addition layers during network training.

### 00:10 - 00:25 (15 mins) — Skill Block 1: The Mechanics of Implicit Differentiation
> [!note]- Theory & Derivations
> ## Conceptual Notes
> 
> ### 1. Explicit vs. Implicit Relations
> Up to this point in calculus, most equations have been presented in **explicit form**, written cleanly as $y = f(x)$. In these cases, the dependent variable $y$ is isolated entirely on one side of the equation (for example, $y = x^2 + 2x + 1$). 
> 
> However, many mathematical and physical relationships are expressed in **implicit form**, where the variables $x$ and $y$ are intimately intertwined (such as $x^2 + y^2 = 1$ or $x^2y - 2 = 3y^3$). In an implicit relation, it is often algebraically difficult, or entirely impossible, to isolate $y$ as a single function of $x$. 
> 
> 
> 
> Geometrically, implicit equations often describe curves that fail the Vertical Line Test, meaning a single $x$-value can map to multiple $y$-values. Despite not being standard functions, we can still find the slope of the tangent line ($\frac{dy}{dx}$) at any specific point on these curves using **Implicit Differentiation**.
> 
> ---
> 
> ### 2. The Core Mechanism: Global Chain Rule
> The foundational secret to implicit differentiation is treating $y$ not as an independent variable, but as an implicit, nested function of $x$ (effectively, $y = y(x)$). 
> 
> When we differentiate both sides of an equation with respect to $x$:
> * Differentiating an $x$ term follows standard derivative rules: 
>   $$\frac{d}{dx}[x^2] = 2x$$
> * Differentiating a $y$ term **strictly requires the Chain Rule**. You take the derivative of the outer layer with respect to $y$, and then multiply by the derivative of the inner layer ($\frac{dy}{dx}$):
>   $$\frac{d}{dx}[y^2] = 2y \cdot \frac{dy}{dx}$$
> 
> ⚠️ **CRITICAL REMINDER:** Every single time you differentiate an expression containing $y$, you must append a factor of $\frac{dy}{dx}$ to account for this chain rule step.
> 
> ---
> 
> ### 3. Step-by-Step Procedure
> 1. **Differentiate:** Take the derivative of both sides of the equation with respect to $x$. Apply product, quotient, and chain rules where necessary, making sure to generate a $\frac{dy}{dx}$ term whenever differentiating a $y$ variable.
> 2. **Isolate:** Use algebra to collect all terms containing $\frac{dy}{dx}$ onto one side of the equation (typically the left side) and move all terms without $\frac{dy}{dx}$ to the opposite side.
> 3. **Factor:** Factor out $\frac{dy}{dx}$ from the gathered terms.
> 4. **Solve:** Divide both sides by the remaining algebraic expression to cleanly isolate $\frac{dy}{dx}$.
> 
> ---
> 
> ## Sample Problems (Guided Notes Examples)
> 
> ### Example 1: Differentiating Basic Relationships
> Find $\frac{dy}{dx}$ for the implicit relation: 
> $$x^2y - 2 = 3y^3$$
> 
> **Step 1: Differentiate both sides with respect to $x$.**
> Note that the first term, $x^2y$, is a product of two functions ($x^2$ and $y$), so we must apply the Product Rule: $\frac{d}{dx}[uv] = u'v + uv'$.
> $$\frac{d}{dx}[x^2y] - \frac{d}{dx}[2] = \frac{d}{dx}[3y^3]$$
> $$\left(2x \cdot y + x^2 \cdot \frac{dy}{dx}\right) - 0 = 9y^2 \cdot \frac{dy}{dx}$$
> $$2xy + x^2\frac{dy}{dx} = 9y^2\frac{dy}{dx}$$
> 
> **Step 2: Collect all $\frac{dy}{dx}$ terms on one side.**
> Move $x^2\frac{dy}{dx}$ to the right side to group it with the other derivative term:
> $$2xy = 9y^2\frac{dy}{dx} - x^2\frac{dy}{dx}$$
> 
> **Step 3: Factor out $\frac{dy}{dx}$.**
> $$2xy = \frac{dy}{dx}(9y^2 - x^2)$$
> 
> **Step 4: Isolate $\frac{dy}{dx}$ by dividing.**
> $$\frac{dy}{dx} = \frac{2xy}{9y^2 - x^2}$$
> 
> ---
> 
> ### Example 2: Managing Trigonometric Layers
> Find $\frac{dy}{dx}$ for the equation:
> $$\cos(y) = x^2 - y^2$$
> 
> **Step 1: Differentiate both sides with respect to $x$.**
> Apply the chain rule to the left side: the derivative of $\cos(\text{blob})$ is $-\sin(\text{blob}) \cdot \text{blob}'$.
> $$-\sin(y) \cdot \frac{dy}{dx} = 2x - 2y \cdot \frac{dy}{dx}$$
> 
> **Step 2: Collect all $\frac{dy}{dx}$ terms on one side.**
> Add $2y\frac{dy}{dx}$ to the left side:
> $$2y\frac{dy}{dx} - \sin(y)\frac{dy}{dx} = 2x$$
> 
> **Step 3: Factor out $\frac{dy}{dx}$.**
> $$\frac{dy}{dx}(2y - \sin y) = 2x$$
> 
> **Step 4: Isolate $\frac{dy}{dx}$.**
> $$\frac{dy}{dx} = \frac{2x}{2y - \sin y}$$
> 
> ---
> 
> ### Example 3: Solving the Equation
> Find $\frac{dy}{dx}$ for the equation:
> $$y^2 - 2x = 1 - 2y$$
> 
> **Step 1: Differentiate both sides with respect to $x$.**
> $$2y\frac{dy}{dx} - 2 = 0 - 2\frac{dy}{dx}$$
> 
> **Step 2: Collect all $\frac{dy}{dx}$ terms on the left side and constants on the right.**
> $$2y\frac{dy}{dx} + 2\frac{dy}{dx} = 2$$
> 
> **Step 3: Factor out $\frac{dy}{dx}$.**
> $$\frac{dy}{dx}(2y + 2) = 2$$
> 
> **Step 4: Isolate and simplify by canceling common factors.**
> $$\frac{dy}{dx} = \frac{2}{2y + 2} = \frac{2}{2(y + 1)} = \frac{1}{y + 1}$$
> 
> ---
> 
> ## Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Mechanical Kinematics (Robotic Linkages)]]
> [[Mechanical Kinematics (Robotic Linkages) Solution]]
> 
> ---
> 
> ### Problem 2: [[Chemical & Aerospace Engineering (Non-Linear Fluids)]]
> [[Chemical & Aerospace Engineering (Non-Linear Fluids) Solution]]


#### Worked Example
For the functions $y=f(x)$ implicitly defined by the following equations, find $\frac{dy}{dx}$.

   (a) $x^{5}+y^{5}=1+xy$

   (b) $e^{x-y}=2xy$

   (c) $\sin\left(\frac{y}{x}\right)=2x^{3}-3y^{2}$

> [!check]- Worked Solution
> Here are the step-by-step solutions for finding $\frac{dy}{dx}$ using implicit differentiation.
> 
> ---
> 
> ### (a) $x^{5}+y^{5}=1+xy$
> 
> **Step 1: Differentiate both sides with respect to $x$.**
> Remember to apply the chain rule to terms with $y$ (treating $y$ as a function of $x$), and use the product rule for $xy$.
> $$\frac{d}{dx}(x^{5}) + \frac{d}{dx}(y^{5}) = \frac{d}{dx}(1) + \frac{d}{dx}(xy)$$
> 
> $$5x^{4} + 5y^{4}\frac{dy}{dx} = 0 + \left(1 \cdot y + x \cdot \frac{dy}{dx}\right)$$
> 
> $$5x^{4} + 5y^{4}\frac{dy}{dx} = y + x\frac{dy}{dx}$$
> 
> **Step 2: Collect all terms involving $\frac{dy}{dx}$ on one side.**
> Move the $x\frac{dy}{dx}$ term to the left and $5x^{4}$ to the right:
> $$5y^{4}\frac{dy}{dx} - x\frac{dy}{dx} = y - 5x^{4}$$
> 
> **Step 3: Factor out $\frac{dy}{dx}$ and solve.**
> $$\frac{dy}{dx}(5y^{4} - x) = y - 5x^{4}$$
> 
> $$\frac{dy}{dx} = \frac{y - 5x^{4}}{5y^{4} - x}$$
> 
> ---
> 
> ### (b) $e^{x-y}=2xy$
> 
> **Step 1: Differentiate both sides with respect to $x$.**
> Use the chain rule on the left side and the product rule on the right side.
> $$e^{x-y} \cdot \frac{d}{dx}(x - y) = 2\left(1 \cdot y + x \cdot \frac{dy}{dx}\right)$$
> 
> $$e^{x-y}\left(1 - \frac{dy}{dx}\right) = 2y + 2x\frac{dy}{dx}$$
> 
> **Step 2: Expand the left side to isolate $\frac{dy}{dx}$.**
> $$e^{x-y} - e^{x-y}\frac{dy}{dx} = 2y + 2x\frac{dy}{dx}$$
> 
> **Step 3: Group the $\frac{dy}{dx}$ terms together.**
> Move the $\frac{dy}{dx}$ terms to the right side to keep things positive:
> $$e^{x-y} - 2y = 2x\frac{dy}{dx} + e^{x-y}\frac{dy}{dx}$$
> 
> **Step 4: Factor out $\frac{dy}{dx}$ and solve.**
> $$e^{x-y} - 2y = \frac{dy}{dx}(2x + e^{x-y})$$
> 
> $$\frac{dy}{dx} = \frac{e^{x-y} - 2y}{2x + e^{x-y}}$$
> 
> *(Note: Since original equation states $e^{x-y} = 2xy$, you can also substitute $2xy$ in place of $e^{x-y}$ to get $\frac{2xy - 2y}{2x + 2xy} = \frac{2y(x - 1)}{2x(1 + y)} = \frac{y(x - 1)}{x(1 + y)}$, but the un-substituted form is perfectly correct.)*
> 
> ---
> 
> ### (c) $\sin\left(\frac{y}{x}\right)=2x^{3}-3y^{2}$
> 
> **Step 1: Differentiate both sides with respect to $x$.**
> Use the chain rule on the left side (with the quotient rule for the inner function $\frac{y}{x}$) and standard implicit differentiation on the right side.
> $$\cos\left(\frac{y}{x}\right) \cdot \frac{d}{dx}\left(\frac{y}{x}\right) = 6x^{2} - 6y\frac{dy}{dx}$$
> 
> $$\cos\left(\frac{y}{x}\right) \cdot \left[\frac{\frac{dy}{dx} \cdot x - y \cdot 1}{x^{2}}\right] = 6x^{2} - 6y\frac{dy}{dx}$$
> 
> **Step 2: Multiply through by $x^{2}$ to eliminate the fraction.**
> $$\cos\left(\frac{y}{x}\right) \cdot \left(x\frac{dy}{dx} - y\right) = 6x^{4} - 6x^{2}y\frac{dy}{dx}$$
> 
> **Step 3: Distribute the cosine term.**
> $$x\cos\left(\frac{y}{x}\right)\frac{dy}{dx} - y\cos\left(\frac{y}{x}\right) = 6x^{4} - 6x^{2}y\frac{dy}{dx}$$
> 
> **Step 4: Gather all $\frac{dy}{dx}$ terms on the left.**
> $$x\cos\left(\frac{y}{x}\right)\frac{dy}{dx} + 6x^{2}y\frac{dy}{dx} = 6x^{4} + y\cos\left(\frac{y}{x}\right)$$
> 
> **Step 5: Factor out $\frac{dy}{dx}$ and solve.**
> $$\frac{dy}{dx}\left[x\cos\left(\frac{y}{x}\right) + 6x^{2}y\right] = 6x^{4} + y\cos\left(\frac{y}{x}\right)$$
> 
> $$\frac{dy}{dx} = \frac{6x^{4} + y\cos\left(\frac{y}{x}\right)}{x\cos\left(\frac{y}{x}\right) + 6x^{2}y}$$

#### Active Practice Problem
Consider the curve defined by the equation $y+\sin y=x+\pi.$ Find the equation of the tangent line to the curve at the point $(\pi,2\pi)$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here is the step-by-step solution to find the equation of the tangent line.
> 
> ---
> 
> ### **Step 1: Find the derivative $\frac{dy}{dx}$ using implicit differentiation**
> 
> Given the equation of the curve:
> $$y + \sin y = x + \pi$$
> 
> Differentiate both sides with respect to $x$, applying the chain rule to the terms with $y$:
> $$\frac{d}{dx}(y) + \frac{d}{dx}(\sin y) = \frac{d}{dx}(x) + \frac{d}{dx}(\pi)$$
> 
> $$\frac{dy}{dx} + \cos y \cdot \frac{dy}{dx} = 1 + 0$$
> 
> Factor out $\frac{dy}{dx}$ on the left side:
> $$\frac{dy}{dx}(1 + \cos y) = 1$$
> 
> Isolate $\frac{dy}{dx}$:
> $$\frac{dy}{dx} = \frac{1}{1 + \cos y}$$
> 
> ---
> 
> ### **Step 2: Find the slope ($m$) at the point $(\pi, 2\pi)$**
> 
> Substitute the $y$-coordinate ($y = 2\pi$) into the derivative formula to calculate the slope of the tangent line:
> $$m = \left. \frac{dy}{dx} \right|_{(\pi, 2\pi)} = \frac{1}{1 + \cos(2\pi)}$$
> 
> Since $\cos(2\pi) = 1$:
> $$m = \frac{1}{1 + 1} = \frac{1}{2}$$
> 
> ---
> 
> ### **Step 3: Write the equation of the tangent line**
> 
> Using the point-slope formula $y - y_1 = m(x - x_1)$ with the point $(x_1, y_1) = (\pi, 2\pi)$ and slope $m = \frac{1}{2}$:
> 
> $$y - 2\pi = \frac{1}{2}(x - \pi)$$
> 
> #### **Final Answer Forms:**
> * **Point-Slope Form:** $$y - 2\pi = \frac{1}{2}(x - \pi)$$
> * **Slope-Intercept Form:** $$y = \frac{1}{2}x - \frac{\pi}{2} + 2\pi$$
> $$y = \frac{1}{2}x + \frac{3\pi}{2}$$

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Higher-Order Implicit Differentiation
> [!note]- Theory & Derivations
> ## Conceptual Notes
> 
> ### 1. Understanding Higher-Order Derivatives Implicitly
> A first derivative, $\frac{dy}{dx}$, provides the instantaneous slope of a curve at any coordinate point $(x, y)$. The second derivative, $\frac{d^2y}{dx^2}$, represents the rate of change of that slope, telling us about the **concavity** of the implicit curve. 
> 
> Finding a higher-order derivative implicitly requires a sequential process:
> 1. Differentiate the original implicit relation to find the first derivative ($\frac{dy}{dx}$).
> 2. Differentiate the first derivative expression with respect to $x$ a second time to find $\frac{d^2y}{dx^2}$.
> 
> ---
> 
> ### 2. The Core Mechanism: The Nested Quotient Rule and Back-Substitution
> When taking the second derivative of an implicit relation, you will practically always encounter two major calculus checkpoints:
> 
> * **The Derivative of $\frac{dy}{dx}$ Rules:** Because the expression for the first derivative ($\frac{dy}{dx}$) usually ends up as a fraction containing both $x$ and $y$, taking its derivative a second time almost always requires the **Quotient Rule**:
>   $$\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2}$$
>   Crucially, when you differentiate any $y$ variable in this step, it yields a $\frac{dy}{dx}$ term inside your new numerator.
> 
> * **The Back-Substitution Step:** An answer for a second derivative must be written exclusively in terms of the position coordinates $x$ and $y$. Leaving a $\frac{dy}{dx}$ term inside your final $\frac{d^2y}{dx^2}$ expression is incomplete. You must **substitute the expression found for the first derivative** into the $\frac{dy}{dx}$ placeholder within your second derivative equation.
> 
> 
> 
> ---
> 
> ### 3. Step-by-Step Procedure
> 1. **Find the First Derivative:** Use standard implicit differentiation to solve completely for $\frac{dy}{dx}$.
> 2. **Differentiate Again:** Take the derivative of both sides of your isolated $\frac{dy}{dx}$ equation with respect to $x$. This sets up $\frac{d^2y}{dx^2}$ on the left side and generally triggers the quotient rule on the right side.
> 3. **Substitute $\frac{dy}{dx}$:** Replace the $\frac{dy}{dx}$ term inside your new equation with the full algebraic expression discovered in Step 1.
> 4. **Simplify with the Original Constraint:** Clean up fractions within the numerator. Where possible, look for opportunities to substitute parts of the *original* equation back into the numerator to compress the final answer into a neat, elegant form.
> 
> ---
> 
> ## Sample Problems (Guided Notes Examples)
> 
> ### Example 1: Finding the Second Derivative of a Circle Relation
> Find $\frac{d^2y}{dx^2}$ given the implicit curve:
> $$x^2 + y^2 = 1$$
> 
> **Step 1: Find the first derivative, $\frac{dy}{dx}$.**
> $$2x + 2y\frac{dy}{dx} = 0$$
> $$2y\frac{dy}{dx} = -2x \implies \frac{dy}{dx} = -\frac{x}{y}$$
> 
> **Step 2: Differentiate a second time using the Quotient Rule.**
> $$\frac{d^2y}{dx^2} = \frac{d}{dx}\left[-\frac{x}{y}\right] = -\left[ \frac{(1)(y) - (x)\left(\frac{dy}{dx}\right)}{y^2} \right] = \frac{-y + x\frac{dy}{dx}}{y^2}$$
> 
> **Step 3: Back-substitute the first derivative ($\frac{dy}{dx} = -\frac{x}{y}$).**
> $$\frac{d^2y}{dx^2} = \frac{-y + x\left(-\frac{x}{y}\right)}{y^2} = \frac{-y - \frac{x^2}{y}}{y^2}$$
> 
> **Step 4: Clean up fractions and substitute the original equation constraint.**
> Multiply the entire top and bottom by $y$ to clear the complex fraction:
> $$\frac{d^2y}{dx^2} = \frac{-y^2 - x^2}{y^3} = \frac{-(x^2 + y^2)}{y^3}$$
> Because our original constraint states that $x^2 + y^2 = 1$, we can substitute $1$ directly into the numerator:
> $$\frac{d^2y}{dx^2} = \frac{-(1)}{y^3} = -\frac{1}{y^3}$$
> 
> ---
> 
> ### Example 2: Scaffolding a Higher-Order Polynomial Relationship
> Find $\frac{d^2y}{dx^2}$ for the relation:
> $$2x^3 - 3y^2 = 8$$
> 
> **Step 1: Find the first derivative, $\frac{dy}{dx}$.**
> $$6x^2 - 6y\frac{dy}{dx} = 0$$
> $$-6y\frac{dy}{dx} = -6x^2 \implies \frac{dy}{dx} = \frac{-6x^2}{-6y} = \frac{x^2}{y}$$
> 
> **Step 2: Differentiate a second time using the Quotient Rule.**
> $$\frac{d^2y}{dx^2} = \frac{\frac{d}{dx}[x^2] \cdot y - x^2 \cdot \frac{d}{dx}[y]}{y^2}$$
> $$\frac{d^2y}{dx^2} = \frac{2xy - x^2\left(\frac{dy}{dx}\right)}{y^2}$$
> 
> **Step 3: Back-substitute the first derivative ($\frac{dy}{dx} = \frac{x^2}{y}$).**
> $$\frac{d^2y}{dx^2} = \frac{2xy - x^2\left(\frac{x^2}{y}\right)}{y^2} = \frac{2xy - \frac{x^4}{y}}{y^2}$$
> 
> **Step 4: Simplify the complex fraction.**
> Multiply both the numerator and denominator by $y$:
> $$\frac{d^2y}{dx^2} = \frac{12xy^2 - 9x^4}{4y^3}$$
> 
> ---
> 
> ## Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Aerospace Engineering (Structural Integrity under Thermal Expansion)]]
> [[Aerospace Engineering (Structural Integrity under Thermal Expansion) Solution]]
> An aerospace bulkhead contains a circular viewing port. Due to intense heat changes during atmospheric re-entry, the internal boundary changes shape, tracking an implicit curve governed by the expansion stress formula:
> $$x^2 + y^2 = 25$$
> A structural engineer focuses on the physical point $(x, y) = (3, 4)$ to look for stress points.
> 
> 
> 
> **Engineering Task:** Compute the second derivative $\frac{d^2y}{dx^2}$ at the point $(3, 4)$. 
> 
> #### **Solution:**
> 1. Find the first derivative $\frac{dy}{dx}$ by differentiating implicitly with respect to $x$:
>    $$2x + 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{x}{y}$$
> 2. Find the second derivative using the quotient rule on $-\frac{x}{y}$:
>    $$\frac{d^2y}{dx^2} = \frac{(-1)(y) - (-x)\left(\frac{dy}{dx}\right)}{y^2} = \frac{-y + x\frac{dy}{dx}}{y^2}$$
> 3. Back-substitute $\frac{dy}{dx} = -\frac{x}{y}$ into the second derivative equation:
>    $$\frac{d^2y}{dx^2} = \frac{-y + x\left(-\frac{x}{y}\right)}{y^2} = \frac{-y^2 - x^2}{y^3} = \frac{-(x^2 + y^2)}{y^3}$$
> 4. Utilize the original bulkhead equation constraint ($x^2 + y^2 = 25$):
>    $$\frac{d^2y}{dx^2} = -\frac{25}{y^3}$$
> 5. Evaluate the second derivative at the coordinate spot $(3, 4)$ by substituting $y = 4$:
>    $$\frac{d^2y}{dx^2} = -\frac{25}{(4)^3} = -\frac{25}{64} \approx -0.3906\text{ m}^{-1}$$
> 
> #### **Engineering Meaning & Real-Life Application:**
> * **Meaning of the Answer ($-\frac{25}{64}$):** The second derivative is negative, indicating that the bulkhead curve is strictly concave down at this point. Numerically, this value determines the physical **curvature** of the window frame boundary.
> * **Real-Life Application:** In aerospace structural mechanics, calculating the structural curvature and its rate of change ($\frac{d^2y}{dx^2}$) is vital for tracking mechanical strain. Sharp shifts in curvature amplify stress concentrations. If a metal frame expands unevenly under atmospheric friction, a negative second derivative value that exceeds material allowances warns structural engineers that the window frame is bowing excessively. This mathematical threshold alerts engineers that the window glass might crack under pressure, indicating they need to add stabilizing brackets or switch to a material with a lower thermal expansion coefficient, like titanium.
> 
> ---
> 
> ### Problem 2: [[Automotive Engineering (Suspension Camber & Curvature Analysis)]]
> [[Automotive Engineering (Suspension Camber & Curvature Analysis) Solution]]
> An automotive suspension engineer designs a new double-wishbone suspension linkage. As the car turns and hitting bumps causes the wheel to compress upward, the movement path of the tire's contact patch relative to the chassis is modeled by the implicit polynomial equation:
> $$x^3 - y^2 = 4$$
> Where $x$ is horizontal track width shift and $y$ is vertical suspension travel (both measured in decimeters). The normal riding baseline point sits at $(x, y) = (2, 2)$.
> 
> **Engineering Task:** Calculate the first derivative $\frac{dy}{dx}$ and second derivative $\frac{d^2y}{dx^2}$ at the baseline configuration point $(2, 2)$.
> 
> #### **Solution:**
> 1. Find the first derivative $\frac{dy}{dx}$ using implicit differentiation:
>    $$\frac{d}{dx}[x^3] - \frac{d}{dx}[y^2] = \frac{d}{dx}[4]$$
>    $$3x^2 - 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = \frac{3x^2}{2y}$$
> 2. Calculate the value of the first derivative at $(2, 2)$:
>    $$\left.\frac{dy}{dx}\right|_{(2,2)} = \frac{3(2)^2}{2(2)} = \frac{12}{4} = 3$$
> 3. Differentiate $\frac{dy}{dx} = \frac{3x^2}{2y}$ using the Quotient Rule to establish the second derivative formula:
>    $$\frac{d^2y}{dx^2} = \frac{(6x)(2y) - (3x^2)\left(2\frac{dy}{dx}\right)}{(2y)^2} = \frac{12xy - 6x^2\frac{dy}{dx}}{4y^2}$$
> 4. Back-substitute the first derivative expression ($\frac{dy}{dx} = \frac{3x^2}{2y}$):
>    $$\frac{d^2y}{dx^2} = \frac{12xy - 6x^2\left(\frac{3x^2}{2y}\right)}{4y^2} = \frac{12xy - \frac{18x^4}{2y}}{4y^2} = \frac{12xy - \frac{9x^4}{y}}{4y^2}$$
> 5. Clear the complex fraction by multiplying the numerator and denominator by $y$:
>    $$\frac{d^2y}{dx^2} = \frac{12xy^2 - 9x^4}{4y^3}$$
> 6. Evaluate the second derivative directly at the suspension position $(2, 2)$:
>    $$\frac{d^2y}{dx^2} = \frac{12(2)(2)^2 - 9(2)^4}{4(2)^3} = \frac{12(2)(4) - 9(16)}{4(8)} = \frac{96 - 144}{32} = \frac{-48}{32} = -1.5\text{ dm}^{-1}$$
> 
> #### **Engineering Meaning & Real-Life Application:**
> * **Meaning of the Answer ($-1.5$):** The first derivative of $3$ indicates that as the tire moves outward, it rapidly cycles upward. The second derivative of $-1.5$ shows that this rate of upward travel is slowing down relative to horizontal displacement, confirming a concave-down path geometry.
> * **Real-Life Application:** Suspension engineers track this second derivative value to manage a vehicle's **wheel camber angle**—the angle of the tire relative to the road surface during extreme cornering maneuvers. A wheel assembly moving along a curve with a second derivative of $-1.5$ means the tire will tip inward (gaining negative camber) as the car leans into a high-speed turn. This keeps the tire tread perfectly flat against the asphalt, maximizing grip and preventing the car from sliding out out of control. Knowing the exact value of the second derivative allows engineers to optimize the lengths of the suspension arms to balance high-speed handling performance with even tire wear.


#### Active Practice Problem
For the functions $y=f(x)$ implicitly defined by the following equations, find $\frac{d^{2}y}{dx^{2}}$.


   (a) $x^{2}-y^{2}=1$

   (b) $y+\cos y=x-\frac{\pi}{3}$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here are the step-by-step solutions for finding the second derivative $\frac{d^{2}y}{dx^{2}}$ using implicit differentiation.
> 
> ---
> 
> ### (a) $x^{2}-y^{2}=1$
> 
> **Step 1: Find the first derivative $\frac{dy}{dx}$.**
> Differentiate both sides with respect to $x$:
> $$\frac{d}{dx}(x^{2}) - \frac{d}{dx}(y^{2}) = \frac{d}{dx}(1)$$
> 
> $$2x - 2y\frac{dy}{dx} = 0$$
> 
> Isolate $\frac{dy}{dx}$:
> $$2x = 2y\frac{dy}{dx}$$
> 
> $$\frac{dy}{dx} = \frac{x}{y}$$
> 
> **Step 2: Find the second derivative $\frac{d^{2}y}{dx^{2}}$.**
> Differentiate $\frac{dy}{dx} = \frac{x}{y}$ with respect to $x$ using the quotient rule:
> $$\frac{d^{2}y}{dx^{2}} = \frac{\frac{d}{dx}(x) \cdot y - x \cdot \frac{d}{dx}(y)}{y^{2}}$$
> 
> $$\frac{d^{2}y}{dx^{2}} = \frac{1 \cdot y - x \cdot \frac{dy}{dx}}{y^{2}}$$
> 
> **Step 3: Substitute $\frac{dy}{dx} = \frac{x}{y}$ into the equation.**
> $$\frac{d^{2}y}{dx^{2}} = \frac{y - x\left(\frac{x}{y}\right)}{y^{2}}$$
> 
> $$\frac{d^{2}y}{dx^{2}} = \frac{\frac{y^{2} - x^{2}}{y}}{y^{2}} = \frac{y^{2} - x^{2}}{y^{3}}$$
> 
> **Step 4: Simplify using the original equation.**
> Since the original equation states $x^{2} - y^{2} = 1$, we know that $y^{2} - x^{2} = -1$. Substituting this in:
> $$\frac{d^{2}y}{dx^{2}} = \frac{-1}{y^{3}}$$
> 
> ---
> 
> ### (b) $y+\cos y=x-\frac{\pi}{3}$
> 
> **Step 1: Find the first derivative $\frac{dy}{dx}$.**
> Differentiate both sides with respect to $x$:
> $$\frac{d}{dx}(y) + \frac{d}{dx}(\cos y) = \frac{d}{dx}(x) - \frac{d}{dx}\left(\frac{\pi}{3}\right)$$
> 
> $$\frac{dy}{dx} - \sin y\frac{dy}{dx} = 1 - 0$$
> 
> Factor out $\frac{dy}{dx}$:
> $$\frac{dy}{dx}(1 - \sin y) = 1$$
> 
> $$\frac{dy}{dx} = \frac{1}{1 - \sin y} = (1 - \sin y)^{-1}$$
> 
> **Step 2: Find the second derivative $\frac{d^{2}y}{dx^{2}}$.**
> Differentiate with respect to $x$ using the chain rule:
> $$\frac{d^{2}y}{dx^{2}} = -1(1 - \sin y)^{-2} \cdot \frac{d}{dx}(1 - \sin y)$$
> 
> $$\frac{d^{2}y}{dx^{2}} = -\frac{1}{(1 - \sin y)^{2}} \cdot \left(-\cos y \frac{dy}{dx}\right)$$
> 
> $$\frac{d^{2}y}{dx^{2}} = \frac{\cos y}{(1 - \sin y)^{2}} \cdot \frac{dy}{dx}$$
> 
> **Step 3: Substitute $\frac{dy}{dx} = \frac{1}{1 - \sin y}$ into the equation.**
> $$\frac{d^{2}y}{dx^{2}} = \frac{\cos y}{(1 - \sin y)^{2}} \cdot \left(\frac{1}{1 - \sin y}\right)$$
> 
> $$\frac{d^{2}y}{dx^{2}} = \frac{\cos y}{(1 - \sin y)^{3}}$$

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Logarithmic Differentiation
> [!note]- Theory & Derivations
> ## Conceptual Notes
> 
> ### 1. The Strategy behind Logarithmic Differentiation
> Up to this point, finding the derivatives of highly complex products, quotients, or powers required a rigorous application of standard product, quotient, and chain rules. **Logarithmic Differentiation** is a powerful technique that relies on the operational properties of natural logarithms ($\ln$) to simplify a complex equation *before* taking the derivative.
> 
> This technique is used in two primary scenarios:
> 1. To take the derivative of a function containing a variable in both the base and the exponent, matching the form $y = f(x)^{g(x)}$ (e.g., $y = x^x$ or $y = (\sin x)^x$). Standard power rules and exponential rules **do not apply** to these functions.
> 2. To simplify highly tedious algebraic products and quotients by breaking them down into separate addition and subtraction steps.
> 
> ---
> 
> ### 2. The Core Mechanism: Logarithm Properties & Implicit Chain Rule
> Logarithmic differentiation relies entirely on three foundational log rules to rewrite expressions:
> * **Product Property:** $\ln(AB) = \ln A + \ln B$
> * **Quotient Property:** $\ln\left(\frac{A}{B}\right) = \ln A - \ln B$
> * **Power Property:** $\ln(A^B) = B \cdot \ln A$
> 
> 
> 
> Once the natural log expands the expression, we differentiate implicitly with respect to $x$. Differentiating the left side ($\ln y$) always yields the exact same structure because of the Chain Rule:
> $$\frac{d}{dx}[\ln y] = \frac{1}{y} \cdot \frac{dy}{dx}$$
> 
> To finish the problem, you isolate $\frac{dy}{dx}$ by multiplying both sides by $y$, and then back-substitute the original equation expression in place of $y$ so the final answer remains strictly in terms of $x$.
> 
> ---
> 
> ### 3. Step-by-Step Procedure
> 1. **Take the Logarithm:** Apply the natural logarithm ($\ln$) to both sides of the equation.
> 2. **Expand:** Use log properties to expand products, quotients, and pull exponents down into coefficients.
> 3. **Differentiate:** Differentiate both sides implicitly with respect to $x$, turning the left side into $\frac{1}{y}\frac{dy}{dx}$.
> 4. **Isolate:** Multiply both sides of the equation by $y$ to solve for $\frac{dy}{dx}$.
> 5. **Back-Substitute:** Replace $y$ with its original definition in terms of $x$ to complete the derivative expression.
> 
> ---
> 
> ## Sample Problems (Guided Notes Examples)
> 
> ### Example 1: Handling a Variable Base and Variable Exponent
> Find $\frac{dy}{dx}$ for the function:
> $$y = x^x$$
> 
> **Step 1: Take the natural logarithm of both sides.**
> $$\ln y = \ln(x^x)$$
> 
> **Step 2: Bring the exponent down using the Power Property.**
> $$\ln y = x \cdot \ln x$$
> 
> **Step 3: Differentiate both sides with respect to $x$.**
> The left side becomes $\frac{1}{y}\frac{dy}{dx}$. The right side requires the Product Rule ($u=x, v=\ln x$):
> $$\frac{1}{y}\frac{dy}{dx} = \frac{d}{dx}[x] \cdot \ln x + x \cdot \frac{d}{dx}[\ln x]$$
> $$\frac{1}{y}\frac{dy}{dx} = 1 \cdot \ln x + x \cdot \left(\frac{1}{x}\right)$$
> $$\frac{1}{y}\frac{dy}{dx} = \ln x + 1$$
> 
> **Step 4: Multiply by $y$ and back-substitute.**
> $$\frac{dy}{dx} = y(\ln x + 1)$$
> Substitute $y = x^x$ back into the expression:
> $$\frac{dy}{dx} = x^x(\ln x + 1)$$
> 
> ---
> 
> ### Example 2: Simplifying a Multi-Factor Fraction Expression
> Find $\frac{dy}{dx}$ for the function:
> $$y = \frac{x \cdot \sqrt[3]{2x-7}}{(x^3 + 1)^4}$$
> 
> **Step 1: Take the natural logarithm of both sides and convert roots to fractional powers.**
> $$\ln y = \ln\left[ \frac{x(2x-7)^{1/3}}{(x^3 + 1)^4} \right]$$
> 
> **Step 2: Fully expand using Quotient, Product, and Power Properties.**
> $$\ln y = \ln x + \ln(2x-7)^{1/3} - \ln(x^3 + 1)^4$$
> $$\ln y = \ln x + \frac{1}{3}\ln(2x-7) - 4\ln(x^3 + 1)$$
> 
> **Step 3: Differentiate both sides with respect to $x$, using the Chain Rule where necessary.**
> $$\frac{1}{y}\frac{dy}{dx} = \frac{1}{x} + \frac{1}{3} \cdot \left(\frac{2}{2x-7}\right) - 4 \cdot \left(\frac{3x^2}{x^3 + 1}\right)$$
> $$\frac{1}{y}\frac{dy}{dx} = \frac{1}{x} + \frac{2}{3(2x-7)}-\frac{12x^2}{x^3 + 1}$$
> 
> **Step 4 & 5: Multiply by $y$ and back-substitute the original expression.**
> $$\frac{dy}{dx} = y \left( \frac{1}{x} + \frac{2}{3(2x-7)} - \frac{12x^2}{x^3 + 1} \right)$$
> $$\frac{dy}{dx} = \frac{x \cdot \sqrt[3]{2x-7}}{(x^3 + 1)^4} \left( \frac{1}{x} + \frac{2}{3(2x-7)} - \frac{12x^2}{x^3 + 1} \right)$$
> 
> ---
> 
> ## Real-Life Engineering Application Problems
> 
> ### Problem 1: [[Electrical Engineering (Signal Degradation & Attenuation)]]
> [[Electrical Engineering (Signal Degradation & Attenuation) Solution]]
> 
> ---
> 
> ### Problem 2: [[Materials Engineering (Non-Linear Fractional Material Strain)]]
> [[Materials Engineering (Non-Linear Fractional Material Strain) Solution]]


#### Active Practice Problem
Find the derivatives of the following. Simplify only by canceling common factors and combining like terms as appropriate.

(a) $y=x^{\ln x}$

(b) $y=(\cos x)^{\sin x}$

(c) $y=\left(\frac{x+1}{x^{2}+1}\right)^{x^{3}}$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Here are the step-by-step solutions for finding the derivatives using logarithmic differentiation.
> 
> ---
> 
> ### (a) $y=x^{\ln x}$
> 
> **Step 1: Take the natural logarithm ($\ln$) of both sides.**
> $$\ln y = \ln\left(x^{\ln x}\right)$$
> 
> **Step 2: Use log properties to bring the exponent down.**
> $$\ln y = (\ln x) \cdot (\ln x)$$
> $$\ln y = (\ln x)^2$$
> 
> **Step 3: Differentiate both sides with respect to $x$.**
> Use the chain rule on both sides:
> $$\frac{1}{y} \cdot \frac{dy}{dx} = 2(\ln x) \cdot \frac{1}{x}$$
> $$\frac{1}{y} \frac{dy}{dx} = \frac{2\ln x}{x}$$
> 
> **Step 4: Solve for $\frac{dy}{dx}$ and substitute back $y$.**
> $$\frac{dy}{dx} = y \cdot \left(\frac{2\ln x}{x}\right)$$
> $$\frac{dy}{dx} = x^{\ln x} \cdot \frac{2\ln x}{x}$$
> 
> ---
> 
> ### (b) $y=(\cos x)^{\sin x}$
> 
> **Step 1: Take the natural logarithm ($\ln$) of both sides.**
> $$\ln y = \ln\left((\cos x)^{\sin x}\right)$$
> 
> **Step 2: Use log properties to bring the exponent down.**
> $$\ln y = \sin x \cdot \ln(\cos x)$$
> 
> **Step 3: Differentiate both sides with respect to $x$.**
> Use the product rule on the right side and the chain rule for $\ln(\cos x)$:
> $$\frac{1}{y} \frac{dy}{dx} = \frac{d}{dx}(\sin x) \cdot \ln(\cos x) + \sin x \cdot \frac{d}{dx}(\ln(\cos x))$$
> $$\frac{1}{y} \frac{dy}{dx} = \cos x \cdot \ln(\cos x) + \sin x \cdot \left(\frac{1}{\cos x} \cdot (-\sin x)\right)$$
> $$\frac{1}{y} \frac{dy}{dx} = \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x}$$
> 
> **Step 4: Solve for $\frac{dy}{dx}$ and substitute back $y$.**
> $$\frac{dy}{dx} = y \cdot \left[ \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x} \right]$$
> $$\frac{dy}{dx} = (\cos x)^{\sin x} \left[ \cos x \ln(\cos x) - \frac{\sin^2 x}{\cos x} \right]$$
> 
> ---
> 
> ### (c) $y=\left(\frac{x+1}{x^{2}+1}\right)^{x^{3}}$
> 
> **Step 1: Take the natural logarithm ($\ln$) of both sides.**
> $$\ln y = \ln\left[\left(\frac{x+1}{x^{2}+1}\right)^{x^{3}}\right]$$
> 
> **Step 2: Use log properties to expand the right side.**
> $$\ln y = x^3 \cdot \ln\left(\frac{x+1}{x^2+1}\right)$$
> $$\ln y = x^3 \cdot \left[\ln(x + 1) - \ln(x^2 + 1)\right]$$
> 
> **Step 3: Differentiate both sides with respect to $x$.**
> Use the product rule on the right side:
> $$\frac{1}{y} \frac{dy}{dx} = \frac{d}{dx}(x^3) \cdot \left[\ln(x + 1) - \ln(x^2 + 1)\right] + x^3 \cdot \frac{d}{dx}\left[\ln(x + 1) - \ln(x^2 + 1)\right]$$
> $$\frac{1}{y} \frac{dy}{dx} = 3x^2 \left[\ln(x + 1) - \ln(x^2 + 1)\right] + x^3 \left[\frac{1}{x+1} - \frac{2x}{x^2+1}\right]$$
> 
> **Step 4: Solve for $\frac{dy}{dx}$ and substitute back $y$.**
> $$\frac{dy}{dx} = y \cdot \left\{ 3x^2 \ln\left(\frac{x+1}{x^2+1}\right) + \frac{x^3}{x+1} - \frac{2x^4}{x^2+1} \right\}$$
> $$\frac{dy}{dx} = \left(\frac{x+1}{x^{2}+1}\right)^{x^{3}} \left\{ 3x^2 \ln\left(\frac{x+1}{x^2+1}\right) + \frac{x^3}{x+1} - \frac{2x^4}{x^2+1} \right\}$$

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 09 and overview of homework Knewton: *Implicit Differentiation*.
