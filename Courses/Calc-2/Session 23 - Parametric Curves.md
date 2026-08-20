---
title: "Session 23 - Parametric Curves"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 23 - Parametric Curves

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Calculus in Parameter Space (Rates & Accumulation)
> - Eliminating the Parameter (The Decoder Ring)
> - Graphing and Tracking Orientation (The Movie Reel)

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In this session, we investigate the mathematical principles of **Parametric Curves** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Calculus in Parameter Space (Rates & Accumulation)
> [!note]- Theory & Derivations
> ## Topic Overview: Rates & Accumulation
> 
> Once you have established the path and orientation of a parametric curve, you often need to analyze its physical properties, such as the direction of travel at a specific instant or the total space it encompasses. 
> 
> The most powerful aspect of parametric calculus is that **you do not need to convert the equations back to $x$ and $y$ to use calculus**. You can find slopes (derivatives) and areas (integrals) directly using the parameter $t$.
> 
> ### 1. Finding Slopes (Derivatives)
> To find the slope of a tangent line (which represents the instantaneous direction of motion or trajectory) at a specific point on the curve, you use the **Parametric Derivative Theorem**:
> 
> $$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$$
> *(provided that $\frac{dx}{dt} \neq 0$)*
> 
> **Concept:** The overall slope (change in $y$ over change in $x$) is calculated by taking the vertical velocity ($\frac{dy}{dt}$) and dividing it by the horizontal velocity ($\frac{dx}{dt}$).
> 
> ### 2. Finding Areas (Integration)
> To find the area under a parametric curve, you adapt the standard integral formula $\int y \, dx$. You substitute $y$ with your $g(t)$ function, and replace the differential $dx$ with $f'(t) \, dt$ (the derivative of the $x$-equation with respect to $t$).
> 
> **Area Under a Parametric Curve's Theorem:**
> $$A = \int_{a}^{b} g(t) \cdot f'(t) \, dt$$
> where $x = f(t)$ and $y = g(t)$, and the bounds $a$ and $b$ are the $t$-values that correspond to the start and end of the curve.
> 
> ---
> 
> ## Sample Problems (Derivatives and Integrals)
> 
> ### Sample Problem 1: Finding the Tangent Slope
> **Given:** $x = t^2$ and $y = t^3 - 3t$
> **Goal:** Find the slope of the tangent line when $t = 2$.
> 
> **Step 1: Find the derivatives with respect to $t$.**
> $\frac{dx}{dt} = 2t$
> $\frac{dy}{dt} = 3t^2 - 3$
> 
> **Step 2: Apply the Parametric Derivative Theorem.**
> $\frac{dy}{dx} = \frac{3t^2 - 3}{2t}$
> 
> **Step 3: Evaluate at $t = 2$.**
> $\frac{dy}{dx}\bigg|_{t=2} = \frac{3(2)^2 - 3}{2(2)} = \frac{12 - 3}{4} = \frac{9}{4}$
> *Conclusion: At the moment $t=2$, the tangent slope of the curve is $\frac{9}{4}$.*
> 
> ### Sample Problem 2: Finding Area
> **Given:** $x = 2t$ and $y = t^2$, for $0 \le t \le 3$.
> **Goal:** Find the area under the curve relative to the $x$-axis.
> 
> **Step 1: Identify $g(t)$ and find $f'(t)$.**
> $g(t) = y = t^2$
> $f(t) = x = 2t \implies f'(t) = 2$
> 
> **Step 2: Set up the integral using the theorem.**
> $A = \int_{0}^{3} (t^2)(2) \, dt$
> $A = \int_{0}^{3} 2t^2 \, dt$
> 
> **Step 3: Evaluate the integral.**
> $A = \left[ \frac{2t^3}{3} \right]_{0}^{3} = \frac{2(3)^3}{3} - 0 = \frac{54}{3} = 18$
> *Conclusion: The area under the curve from $t=0$ to $t=3$ is 18 square units.*
> 
> ---
> 
> ## Engineering Application Problems
> 
> ### Application 1: [[Rotary Motion in Machinery (Centrifugal Detachment)]]
> [[Rotary Motion in Machinery (Centrifugal Detachment) Solution]]
> 
> 
> ---
> 
> ### Application 2: [[Time-Dependent Trajectory Analysis (Solar Panel Sweeping Area)]]
> [[Time-Dependent Trajectory Analysis (Solar Panel Sweeping Area) Solution]]


#### Active Practice Problem
1. Use the properties of the line parametrization to sketch the graph of the following curves:
   (a) $x=5t$, $y=1-2t^2$, for $-\infty < t < \infty$

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step 1: Understand the Parametric Equations
> 
> You are given the following parametric equations:
> 
> $$x = 5t$$
> 
> $$y = 1 - 2t^2$$
> 
> For the domain:
> 
> $$-\infty < t < \infty$$
> 
> The parameter is $t$. To understand what geometric shape these equations form, we need to eliminate $t$ and find a direct relationship between $x$ and $y$.
> 
> ## Step 2: Eliminate the Parameter ($t$)
> 
> First, we isolate $t$ in the simpler equation, which is the equation for $x$:
> 
> $$x = 5t \implies t = \frac{x}{5}$$
> 
> Next, we substitute this expression for $t$ into the equation for $y$:
> 
> $$y = 1 - 2\left(\frac{x}{5}\right)^2$$
> 
> Now, simplify the equation:
> 
> $$y = 1 - 2\left(\frac{x^2}{25}\right)$$
> 
> $$y = -\frac{2}{25}x^2 + 1$$
> 
> ## Step 3: Identify the Geometric Curve
> 
> The resulting equation, $y = -\frac{2}{25}x^2 + 1$, is a quadratic equation in terms of $x$.
> 
> - This tells us that the curve is a **parabola**.
> 
> - Because the leading coefficient ($-\frac{2}{25}$) is negative, the parabola **opens downward**.
> 
> 
> ## Step 4: Find Key Points to Sketch the Graph
> 
> To draw an accurate sketch, we find the critical features of this parabola:
> 
> - **Vertex:** The equation is in the form $y = ax^2 + k$, where the vertex is at $(0, k)$. Thus, the vertex is at **$(0, 1)$**.
> 
> - **$y$-intercept:** Set $x = 0$, which gives $y = 1$. The $y$-intercept is the vertex itself: **$(0, 1)$**.
> 
> - **$x$-intercepts:** Set $y = 0$ and solve for $x$:
> 
> $$0 = -\frac{2}{25}x^2 + 1$$
> 
> $$\frac{2}{25}x^2 = 1$$
> 
> $$x^2 = \frac{25}{2}$$
> 
> $$x = \pm \sqrt{\frac{25}{2}} = \pm \frac{5}{\sqrt{2}} \approx \pm 3.54$$
> 
> So, the $x$-intercepts are approximately **$(3.54, 0)$** and **$(-3.54, 0)$**.
> 
> 
> ## Step 5: Determine the Orientation (Direction of Motion)
> 
> Parametric curves have an orientation, meaning they are traced in a specific direction as $t$ increases from $-\infty$ to $\infty$. Let's plug in a few values for $t$ to find the direction:
> 
> - **At $t = -1$:**
> 
> $$x = 5(-1) = -5$$
> 
> $$y = 1 - 2(-1)^2 = -1$$
> 
> Point: **$(-5, -1)$**
> 
> - **At $t = 0$:**
> 
> $$x = 5(0) = 0$$
> 
> $$y = 1 - 2(0)^2 = 1$$
> 
> Point: **$(0, 1)$** (Vertex)
> 
> - **At $t = 1$:**
> 
> $$x = 5(1) = 5$$
> 
> $$y = 1 - 2(1)^2 = -1$$
> 
> Point: **$(5, -1)$**
> 
> 
> As $t$ increases, the graph moves from the left side ($x = -5$) through the vertex ($x = 0$) toward the right side ($x = 5$).
> 
> ## How to Sketch the Graph
> 
> 1. Draw a standard Cartesian $xy$-plane.
> 
> 2. Plot the vertex at **$(0, 1)$**.
> 
> 3. Plot the $x$-intercepts at roughly **$(3.54, 0)$** and **$(-3.54, 0)$**.
> 
> 4. Plot a couple of symmetric guide points, like **$(-5, -1)$** and **$(5, -1)$**.
> 
> 5. Smoothly connect the points to form a downward-opening parabola.
> 
> 6. **Add arrows** pointing from left to right along the curve to show the orientation as $t$ increases.

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Eliminating the Parameter (The Decoder Ring)
> [!note]- Theory & Derivations
> ## Topic Overview: The "Decoder Ring"
> 
> In calculus and physics, parametric curves use a "third variable"—the parameter, usually $t$ (time) or $theta$ (angle)—to control the $x$ and $y$ coordinates. This allows us to track a point moving through space over time. 
> 
> However, sometimes it is difficult to visualize the overall geometric shape of the path just by looking at $x(t)$ and $y(t)$. **Eliminating the parameter** is the algebraic process of removing $t$ to combine the parametric equations into a single, familiar rectangular equation in the form $y = f(x)$ or an implicit equation. 
> 
> ### How to Eliminate the Parameter
> Depending on the equations, you will generally use one of two methods:
> 
> 1.  **Solve and Substitute (For Algebraic Equations):**
>     *   Choose the simpler of the two equations (usually the linear one).
>     *   Solve that equation for $t$.
>     *   Substitute the resulting expression for $t$ into the second equation.
>     *   Simplify to find the rectangular equation.
> 
> 2.  **Trigonometric Identities (For Circular/Elliptical Equations):**
>     *   If the equations involve $\sin(t)$ and $\cos(t)$, **do not** try to solve for $t$ directly using inverse trig functions.
>     *   Instead, isolate the trigonometric functions.
>     *   Use the Pythagorean Identity: $\sin^2(t) + \cos^2(t) = 1$.
>     *   Substitute the isolated terms into the identity to get an equation in terms of $x$ and $y$.
> 
> ---
> 
> ## Sample Problems (Algebraic & Trigonometric)
> 
> ### Sample Problem 1: Algebraic Substitution
> **Given:** $x = 3t - 2$ and $y = t^2 + 1$
> **Goal:** Eliminate the parameter to find the rectangular equation.
> 
> **Step 1: Solve for $t$ in the simpler equation.**
> $$x = 3t - 2$$
> $$x + 2 = 3t$$
> $$t = \frac{x + 2}{3}$$
> 
> **Step 2: Substitute this expression into the $y$ equation.**
> $$y = \left(\frac{x + 2}{3}\right)^2 + 1$$
> 
> **Step 3: Simplify.**
> $$y = \frac{(x + 2)^2}{9} + 1$$
> *Conclusion: The path is a parabola opening upwards with its vertex at $(-2, 1)$.*
> 
> ### Sample Problem 2: Trigonometric Identity
> **Given:** $x = 4\cos(\theta)$ and $y = 4\sin(\theta)$
> **Goal:** Eliminate the parameter to find the rectangular equation.
> 
> **Step 1: Isolate the trigonometric functions.**
> $$\cos(\theta) = \frac{x}{4}$$
> $$\sin(\theta) = \frac{y}{4}$$
> 
> **Step 2: Use the Pythagorean identity.**
> $$\cos^2(\theta) + \sin^2(\theta) = 1$$
> 
> **Step 3: Substitute and simplify.**
> $$\left(\frac{x}{4}\right)^2 + \left(\frac{y}{4}\right)^2 = 1$$
> $$\frac{x^2}{16} + \frac{y^2}{16} = 1$$
> $$x^2 + y^2 = 16$$
> *Conclusion: The path is a circle centered at the origin with a radius of 4.*
> 
> ---
> 
> ## Engineering Application Problems
> 
> ### Application 1: [[Time-Dependent Trajectory Analysis (Drone Flight)]]
> [[Time-Dependent Trajectory Analysis (Drone Flight) Solution]]
> 
> 
> ---
> 
> ### Application 2: [[Rotary Motion in Machinery (Flywheel Manufacturing)]]
> [[Rotary Motion in Machinery (Flywheel Manufacturing) Solution]]


#### Active Practice Problem
2. Consider the following parametrization:
   $$x=\frac{t^2}{2}, \quad y=t+1 \quad \text{for} \quad -3 \le t \le 3$$

   (a) Using the Theorem for the Derivatives of Parametric Curves, find the slope of the line tangent to this curve at the point (2,3)

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step 1: Recall the Theorem for Derivatives of Parametric Curves
> 
> The slope of a tangent line in the standard $xy$-plane is represented by $\frac{dy}{dx}$.
> 
> According to the Theorem for the Derivatives of Parametric Curves, if $x$ and $y$ are both differentiable functions of a parameter $t$, the slope can be calculated using the derivatives with respect to $t$:
> 
> $$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} \quad \text{provided that } \frac{dx}{dt} \neq 0$$
> 
> ## Step 2: Find the Parameter ($t$) for the Given Point
> 
> We are asked to find the slope at the specific coordinate point $(x, y) = (2, 3)$. Because our derivatives will depend on $t$, we first need to determine what value of $t$ puts us at this exact location on the curve.
> 
> We can use either of the given parametric equations to solve for $t$:
> 
> 1. Using the $y$-equation (which is simpler):
> 
> $$y = t + 1 \implies 3 = t + 1$$
> 
> $$t = 2$$
> 
> 2. Let's verify this value using the $x$-equation to make sure it is consistent:
> 
> $$x = \frac{t^2}{2} \implies 2 = \frac{(2)^2}{2} = \frac{4}{2} = 2$$
> 
> 
> The equations match perfectly, which confirms that the point $(2, 3)$ occurs precisely when **$t = 2$**.
> 
> ## Step 3: Compute the Derivatives with Respect to $t$
> 
> Now, we find the individual derivatives of our parametric functions $x(t)$ and $y(t)$ using basic derivative rules:
> 
> - **Find $\frac{dx}{dt}$:** Take the derivative of $x = \frac{t^2}{2}$ with respect to $t$:
> 
> $$\frac{dx}{dt} = \frac{d}{dt}\left(\frac{1}{2}t^2\right) = \frac{1}{2}(2t) = t$$
> 
> - **Find $\frac{dy}{dt}$:** Take the derivative of $y = t + 1$ with respect to $t$:
> 
> $$\frac{dy}{dt} = \frac{d}{dt}(t + 1) = 1$$
> 
> 
> ## Step 4: Set up the General Formula for $\frac{dy}{dx}$
> 
> Substitute our two derivative pieces into the parametric derivative theorem formula:
> 
> $$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{1}{t}$$
> 
> This expression, $\frac{1}{t}$, gives us the formula to calculate the slope of the curve at any given value of $t$ along its path.
> 
> ## Step 5: Evaluate the Slope at the Given Point
> 
> To find the final slope at the point $(2, 3)$, substitute the value of $t = 2$ (from Step 2) into our slope formula:
> 
> $$\frac{dy}{dx}\bigg\vert{}_{t=2} = \frac{1}{2}$$
> 
> ### Final Answer
> 
> The slope of the line tangent to the curve at the point $(2, 3)$ is **$\frac{1}{2}$**.

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Graphing and Tracking Orientation (The Movie Reel)
> [!note]- Theory & Derivations
> ## Topic Overview: The "Movie Reel"
> 
> If eliminating the parameter tells you the overall geometric *shape* of a curve, tracking orientation tells you the *story* of how that curve is drawn. Standard Cartesian functions (like $y = x^2$) are just static shapes on a page. Parametric equations, however, possess a dynamic quality: they show a point moving through space as the parameter (usually $t$ for time) changes. 
> 
> This movement has a specific direction, known as the curve's **orientation**. 
> 
> ### How to Graph and Track Orientation
> To fully understand a parametric curve, you need to map out where the particle is at specific moments.
> 
> 1.  **Create a Parameter Table:**
>     *   Set up a table with columns for $t$, $x$, and $y$.
>     *   Choose a sequence of sequential values for $t$ within the given domain (e.g., $t = -2, -1, 0, 1, 2$).
> 2.  **Calculate Coordinates:**
>     *   Plug each $t$-value into the given $x(t)$ and $y(t)$ equations to generate coordinate pairs $(x, y)$.
> 3.  **Plot Chronologically:**
>     *   Plot the $(x, y)$ points on a Cartesian plane in the order of increasing $t$.
> 4.  **Draw and Indicate Direction:**
>     *   Connect the plotted points with a smooth curve.
>     *   **Crucial Step:** Draw arrows along the curve pointing in the direction of the movement as $t$ increases. This visually represents the positive orientation.
> 
> ---
> 
> ## Sample Problems (Linear and Non-Linear Paths)
> 
> ### Sample Problem 1: Linear Motion
> **Given:** $x = 1 + 2t$ and $y = 3 - t$ for $-1 \le t \le 3$.
> **Goal:** Sketch the curve and indicate its orientation.
> 
> **Step 1 & 2: Create a table and calculate points.**
> 
> | $t$ | $x = 1 + 2t$ | $y = 3 - t$ | Point $(x,y)$ |
> |:---:|:------------:|:-----------:|:-------------:|
> | -1  | $1 + 2(-1) = -1$ | $3 - (-1) = 4$ | $(-1, 4)$ |
> |  0  | $1 + 2(0) = 1$  | $3 - (0) = 3$  | $(1, 3)$  |
> |  1  | $1 + 2(1) = 3$  | $3 - (1) = 2$  | $(3, 2)$  |
> |  2  | $1 + 2(2) = 5$  | $3 - (2) = 1$  | $(5, 1)$  |
> |  3  | $1 + 2(3) = 7$  | $3 - (3) = 0$  | $(7, 0)$  |
> 
> **Step 3 & 4: Plot and track orientation.**
> *Conclusion: The graph is a line segment starting exactly at $(-1, 4)$ and ending at $(7, 0)$. Arrows should be drawn along the line pointing down and to the right, showing the direction of travel as time progresses from $t = -1$ to $t = 3$.*
> 
> ### Sample Problem 2: Circular Motion
> **Given:** $x = 3\cos(t)$ and $y = 3\sin(t)$ for $0 \le t \le \pi$.
> **Goal:** Sketch the curve and indicate its orientation.
> 
> **Step 1 & 2: Create a table using key angles.**
> 
> | $t$ | $x = 3\cos(t)$ | $y = 3\sin(t)$ | Point $(x,y)$ |
> |:---:|:--------------:|:--------------:|:-------------:|
> |  0  | $3(1) = 3$     | $3(0) = 0$     | $(3, 0)$      |
> | $\pi/2$| $3(0) = 0$     | $3(1) = 3$     | $(0, 3)$      |
> | $\pi$  | $3(-1) = -3$   | $3(0) = 0$     | $(-3, 0)$     |
> 
> **Step 3 & 4: Plot and track orientation.**
> *Conclusion: The graph is the top half of a circle centered at the origin with radius 3. The orientation arrows must point in a counter-clockwise direction, starting from the right $x$-axis at $(3,0)$ and ending on the left $x$-axis at $(-3,0)$.*
> 
> ---
> 
> ## Engineering Application Problems
> 
> ### Application 1: [[Rolling Mechanical Systems (Automotive Wiper Design)]]
> [[Rolling Mechanical Systems (Automotive Wiper Design) Solution]]
> 
> 
> ---
> 
> ### Application 2: [[Time-Dependent Trajectory Analysis (CNC Machining)]]
> [[Time-Dependent Trajectory Analysis (CNC Machining) Solution]]


### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 23 and overview of homework homework assignment.
