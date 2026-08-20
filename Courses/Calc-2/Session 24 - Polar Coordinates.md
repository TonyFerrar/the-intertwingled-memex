---
title: "Session 24 - Polar Coordinates"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 24 - Polar Coordinates

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Differential Analysis of Non-Linear Polar Paths
> - Integral Calculus for Polar Geometry (Area & Path Lengths)
> - Multi-System Coordinate Fluency & Equation Transformation

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> Mastering polar coordinate transformations and calculus allows engineers to elegantly model circular and curved geometries that are highly impractical to track on a standard rectangular grid. Mechanical engineers utilize polar derivatives and tangent lines to analyze velocities and directional forces in spinning wheels, fans, DJ turntables, engine pistons, and suspension shocks. Similarly, electrical, optical, and computer engineers rely on these equations to design laser optics, map out the lobe-shaped radiation intensity patterns of LEDs, and render smooth virtual models for console or PC graphics hardware. Finally, civil and aerospace engineers apply polar area and arc length integrations to calculate fluid capacity in round pipes, analyze cross-sections of electrical wires, and determine structural integrity for load-bearing pillars or pressurized vessels.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Differential Analysis of Non-Linear Polar Paths
> [!note]- Theory & Derivations
> ## 1. Comprehensive Notes: Derivatives and Tangents in Polar Coordinates
> 
> When dealing with objects moving along curved paths, engineers and mathematicians need to know two crucial rates of change:
> 1.  **How fast the object is moving away from or toward the center ($dr/d\theta$):** This represents the radial expansion or contraction of the curve relative to the angle.
> 2.  **The actual directional slope of the path at any given moment ($dy/dx$):** This tells us the trajectory an object would take if it suddenly detached and flew off tangentially.
> 
> ### Finding the Radial Rate of Change ($dr/d\theta$)
> If a polar curve is defined as $r = f(\theta)$, finding how the radius changes with respect to the angle simply requires taking the standard derivative of $f(\theta)$ with respect to $\theta$.
> 
> ### Finding the Tangent Slope ($dy/dx$)
> Finding the Cartesian slope ($dy/dx$) of a polar curve is more complex because $x$ and $y$ depend on *both* $r$ and $\theta$. 
> We start with the conversion formulas:
> *   $x = r\cos(\theta)$
> *   $y = r\sin(\theta)$
> 
> Since $r$ is a function of $\theta$ (i.e., $r(\theta)$), we must apply the **Product Rule** to take the derivatives of $x$ and $y$ with respect to $\theta$:
> *   $\frac{dx}{d\theta} = \frac{dr}{d\theta}\cos(\theta) - r\sin(\theta)$
> *   $\frac{dy}{d\theta} = \frac{dr}{d\theta}\sin(\theta) + r\cos(\theta)$
> 
> Using the **Chain Rule** in parametric form, the slope of the tangent line is:
> $$ \frac{dy}{dx} = \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}} = \frac{\frac{dr}{d\theta}\sin(\theta) + r\cos(\theta)}{\frac{dr}{d\theta}\cos(\theta) - r\sin(\theta)} $$
> 
> ---
> 
> ## 2. Sample Mathematical Problems
> 
> ### Problem 1: Radial Rate of Change
> **Prompt:** A curve is defined by $r = 2\sin(3\theta)$. Find the rate of change of the radius with respect to the angle when $\theta = \frac{\pi}{4}$.
> 
> **Solution:**
> 1.  Take the derivative of $r$ with respect to $\theta$:
>     $$\frac{dr}{d\theta} = 2 \cdot \cos(3\theta) \cdot 3 = 6\cos(3\theta)$$
> 2.  Evaluate at $\theta = \frac{\pi}{4}$:
>     $$\frac{dr}{d\theta} \bigg|_{\theta = \pi/4} = 6\cos\left(3\left(\frac{\pi}{4}\right)\right) = 6\cos\left(\frac{3\pi}{4}\right)$$
>     $$6\left(-\frac{\sqrt{2}}{2}\right) = -3\sqrt{2}$$
> 3.  **Answer:** $-3\sqrt{2}$ (The radius is shrinking at this specific angle).
> 
> ### Problem 2: Finding the Tangent Slope
> **Prompt:** Find the slope of the tangent line $\frac{dy}{dx}$ to the curve $r = 2 - \sin(\theta)$ at $\theta = \pi$.
> 
> **Solution:**
> 1.  Evaluate $r$ and $\frac{dr}{d\theta}$ at $\theta = \pi$:
>     *   $r(\pi) = 2 - \sin(\pi) = 2 - 0 = 2$
>     *   $\frac{dr}{d\theta} = -\cos(\theta) \implies -\cos(\pi) = -(-1) = 1$
> 2.  Identify the values of $\sin(\theta)$ and $\cos(\theta)$ at $\theta = \pi$:
>     *   $\sin(\pi) = 0$
>     *   $\cos(\pi) = -1$
> 3.  Plug all values into the polar slope formula:
>     $$ \frac{dy}{dx} = \frac{(1)(0) + (2)(-1)}{(1)(-1) - (2)(0)} $$
>     $$ \frac{dy}{dx} = \frac{0 - 2}{-1 - 0} = \frac{-2}{-1} = 2 $$
> 4.  **Answer:** The slope of the tangent line is $2$.
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Mechanical Engineering (Cam and Follower Design)]]
> [[Mechanical Engineering (Cam and Follower Design) Solution]]
> 
> ---
> 
> ### Engineering Problem 2: [[Autonomous Robotics & Inertial Trajectories]]
> [[Autonomous Robotics & Inertial Trajectories Solution]]


#### Worked Example
Convert the Cartesian coordinates $(x, y) = (3, 2)$ into polar coordinates $(r, \theta)$. Express $\theta$ in radians (rounded to three decimal places) and $r$ in exact radical form.

> [!check]- Worked Solution
> Convert the Cartesian coordinates $(x, y) = (3, 2)$ into polar coordinates $(r, \theta)$. Express $\theta$ in radians (rounded to three decimal places) and $r$ in exact radical form.
> 
> #### **Solution:**
> 
> - **Find the radius ($r$):** We use the relation $r^2 = x^2 + y^2$:
> 
> $$r = \sqrt{3^2 + 2^2} = \sqrt{9 + 4} = \sqrt{13}$$
> 
> - **Find the angle ($\theta$):** We use the trigonometric relation $\tan\theta = \frac{y}{x}$:
> 
> $$\theta = \tan^{-1}\left(\frac{2}{3}\right) \approx 0.588\text{ rad}$$
> 
> - **Polar Point:**
> 
> $$(r, \theta) = (\sqrt{13}, 0.588\text{ rad})$$

#### Active Practice Problem
Convert the polar point $(r, \theta) = \left(6, \frac{\pi}{3}\right)$ to rectangular coordinates $(x, y)$. Provide exact values.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Convert the polar point $(r, \theta) = \left(6, \frac{\pi}{3}\right)$ to rectangular coordinates $(x, y)$. Provide exact values.
> 
> #### **Solution:**
> 
> - **Find $x$:**
> 
> $$x = r\cos\theta$$
> 
> $$x = 6\cos\left(\frac{\pi}{3}\right) = 6 \cdot \left(\frac{1}{2}\right) = 3$$
> 
> - **Find $y$:**
> 
> $$y = r\sin\theta$$
> 
> $$y = 6\sin\left(\frac{\pi}{3}\right) = 6 \cdot \left(\frac{\sqrt{3}}{2}\right) = 3\sqrt{3}$$
> 
> - **Rectangular Point:**
> 
> $$(x, y) = (3, 3\sqrt{3})$$

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Polar)
> Convert the polar equation $r = 2\cos\theta$ into rectangular coordinates and identify the shape of its graph.
> 
> > [!check]- Solution
> > Convert the polar equation $r = 2\cos\theta$ into rectangular coordinates and identify the shape of its graph.
> > 
> > #### **Solution:**
> > 
> > - **Multiply both sides of the equation by $r$:**
> > 
> > $$r^2 = 2r\cos\theta$$
> > 
> > - **Substitute the rectangular variables ($r^2 = x^2 + y^2$ and $r\cos\theta = x$):**
> > 
> > $$x^2 + y^2 = 2x$$
> > 
> > - **Complete the square to find the standard form of the shape:**
> > 
> > $$x^2 - 2x + y^2 = 0$$
> > 
> > $$(x^2 - 2x + 1) + y^2 = 1$$
> > 
> > $$(x-1)^2 + y^2 = 1$$
> > 
> > - **Conclusion:** This equation represents a **circle** with a radius of $1$ centered at $(1, 0)$.
> 

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Integral Calculus for Polar Geometry (Area & Path Lengths)
> [!note]- Theory & Derivations
> ## 1. Comprehensive Notes: Integrals in Polar Coordinates
> 
> While derivatives tell us about the instantaneous changes along a path, integral calculus in polar coordinates allows us to measure physical space: the **area bounded by curves** and the **total physical length of the curve itself**.
> 
> ### Polar Area Accumulation
> In the Cartesian system, area is found by adding up an infinite number of infinitely thin vertical rectangles ($A = \int y \, dx$). 
> In the polar system, area is found by adding up an infinite number of infinitely thin **circular sectors (wedges)**. 
> *   The area of a single thin sector is $dA = \frac{1}{2}r^2 \, d\theta$.
> *   To find the total area between two angles, we integrate:
>     $$A = \int_{\theta_1}^{\theta_2} \frac{1}{2}r^2 \, d\theta$$
> 
> **Area Between Two Polar Curves:**
> If you want the area trapped *between* an outer curve ($r_{out}$) and an inner curve ($r_{in}$), you subtract the inner area from the outer area:
> $$A = \frac{1}{2} \int_{\theta_1}^{\theta_2} \left[ (r_{out})^2 - (r_{in})^2 \right] \, d\theta$$
> *Note: Finding the limits of integration ($\theta_1, \theta_2$) usually requires setting the two equations equal to each other to find their points of intersection.*
> 
> ### Polar Arc Length
> To find the actual distance traveled along a curved path (like measuring with a piece of string), we use the polar arc length formula. This is derived from the Pythagorean theorem applied to infinitesimally small changes in the radial and angular directions.
> $$L = \int_{\theta_1}^{\theta_2} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2} \, d\theta$$
> 
> *   **Integration Tip:** These integrals often result in complex trigonometric expressions under a square root. You will frequently need to use half-angle identities (e.g., $\sin^2\theta = \frac{1-\cos(2\theta)}{2}$) or trigonometric conjugates to simplify the integrand.
> 
> ---
> 
> ## 2. Sample Mathematical Problems
> 
> ### Problem 1: Area of a Single Loop
> **Prompt:** Find the area enclosed by one loop of the rose curve $r = 4\cos(3\theta)$.
> 
> **Solution:**
> 1.  **Find the limits:** A loop begins and ends where $r = 0$.
>     $$4\cos(3\theta) = 0 \implies 3\theta = -\frac{\pi}{2} \text{ and } 3\theta = \frac{\pi}{2}$$
>     $$\theta = -\frac{\pi}{6} \text{ to } \theta = \frac{\pi}{6}$$
> 2.  **Set up the integral:**
>     $$A = \frac{1}{2}\int_{-\pi/6}^{\pi/6} (4\cos(3\theta))^2 \, d\theta = \frac{1}{2}\int_{-\pi/6}^{\pi/6} 16\cos^2(3\theta) \, d\theta$$
>     $$A = 8\int_{-\pi/6}^{\pi/6} \cos^2(3\theta) \, d\theta$$
> 3.  **Apply Half-Angle Identity:** $\cos^2(3\theta) = \frac{1+\cos(6\theta)}{2}$
>     $$A = 8 \int_{-\pi/6}^{\pi/6} \frac{1+\cos(6\theta)}{2} \, d\theta = 4 \int_{-\pi/6}^{\pi/6} (1+\cos(6\theta)) \, d\theta$$
> 4.  **Integrate:**
>     $$A = 4 \left[ \theta + \frac{1}{6}\sin(6\theta) \right]_{-\pi/6}^{\pi/6}$$
>     $$A = 4 \left[ \left(\frac{\pi}{6} + \frac{1}{6}\sin(\pi)\right) - \left(-\frac{\pi}{6} + \frac{1}{6}\sin(-\pi)\right) \right]$$
>     $$A = 4 \left[ \frac{\pi}{6} - \left(-\frac{\pi}{6}\right) \right] = 4 \left( \frac{2\pi}{6} \right) = \frac{4\pi}{3}$$
> 5.  **Answer:** The area of one loop is $\frac{4\pi}{3}$.
> 
> ### Problem 2: Arc Length of a Curve
> **Prompt:** Find the total arc length of the spiral $r = e^{\theta}$ from $\theta = 0$ to $\theta = \ln(3)$.
> 
> **Solution:**
> 1.  **Find the components:**
>     *   $r = e^{\theta}$
>     *   $\frac{dr}{d\theta} = e^{\theta}$
> 2.  **Set up the square root expression:**
>     $$r^2 + \left(\frac{dr}{d\theta}\right)^2 = (e^{\theta})^2 + (e^{\theta})^2 = e^{2\theta} + e^{2\theta} = 2e^{2\theta}$$
> 3.  **Set up the integral:**
>     $$L = \int_{0}^{\ln(3)} \sqrt{2e^{2\theta}} \, d\theta = \int_{0}^{\ln(3)} \sqrt{2}e^{\theta} \, d\theta$$
> 4.  **Integrate:**
>     $$L = \sqrt{2} \left[ e^{\theta} \right]_{0}^{\ln(3)}$$
>     $$L = \sqrt{2} (e^{\ln(3)} - e^{0}) = \sqrt{2}(3 - 1)$$
> 5.  **Answer:** The arc length is $2\sqrt{2}$.
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Structural & Fluid Engineering (Pipe Cross-Sections)]]
> [[Structural & Fluid Engineering (Pipe Cross-Sections) Solution]]
> 
> ---
> 
> ### Engineering Problem 2: [[Aerospace Engineering (Wire Spools & Shielding)]]
> [[Aerospace Engineering (Wire Spools & Shielding) Solution]]


#### Worked Example
Convert the equation of a circle $x^2 + y^2 = a^2$ (where $a > 0$) into polar coordinates.

> [!check]- Worked Solution
> #### **Solution:**
> 
> - **Substitute $x = r\cos\theta$ and $y = r\sin\theta$:**
> 
> $$(r\cos\theta)^2 + (r\sin\theta)^2 = a^2$$
> 
> - **Factor out $r^2$:**
> 
> $$r^2(\cos^2\theta + \sin^2\theta) = a^2$$
> 
> - **Apply the Pythagorean identity ($\cos^2\theta + \sin^2\theta = 1$):**
> 
> $$r^2(1) = a^2$$
> 
> $$r^2 = a^2$$
> 
> - **Solve for $r$:**
> 
> $$r = a$$

#### Active Practice Problem
Find the slope of the tangent line $\frac{dy}{dx}$ to the cardioid $r = 1 + \sin\theta$ at the point where $\theta = 0$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Find the slope of the tangent line $\frac{dy}{dx}$ to the cardioid $r = 1 + \sin\theta$ at the point where $\theta = 0$.
> 
> #### **Solution:**
> 
> - **Recall the derivative formula in polar coordinates:**
> 
> $$\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$$
> 
> - **Calculate the components for $r = 1+\sin\theta$:**
> 
> - $\frac{dr}{d\theta} = \cos\theta$
> 
> - At $\theta = 0$:
> 
> - $r = 1 + \sin(0) = 1$
> 
> - $\frac{dr}{d\theta} = \cos(0) = 1$
> 
> - **Substitute the values at $\theta = 0$ into the formula:**
> 
> $$\frac{dy}{dx} = \frac{(1)\sin(0) + (1)\cos(0)}{(1)\cos(0) - (1)\sin(0)} = \frac{0 + 1}{1 - 0} = 1$$
> 
> - **Alternative algebraic simplification (from the notes):**
> 
> $$\frac{dy}{dx} = \frac{\cos\theta(1+2\sin\theta)}{(1+\sin\theta)(1-2\sin\theta)}$$
> 
> $$\text{At } \theta = 0: \quad m = \frac{\cos(0)(1+2\sin(0))}{(1+\sin(0))(1-2\sin(0))} = \frac{1(1)}{1(1)} = 1$$
> 
> - **Answer:** The slope of the tangent line at $\theta = 0$ is **$1$**.

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Polar)
> Find the area enclosed by exactly one loop of the four-leaved rose curve $r = \cos(2\theta)$.
> 
> > [!check]- Solution
> > Find the area enclosed by exactly one loop of the four-leaved rose curve $r = \cos(2\theta)$.
> > 
> > #### **Solution:**
> > 
> > - **Determine the limits of integration:** A single loop starts and ends at the origin where $r = 0$:
> > 
> > $$\cos(2\theta) = 0 \implies 2\theta = -\frac{\pi}{2} \text{ or } \frac{\pi}{2} \implies \theta = -\frac{\pi}{4} \text{ to } \frac{\pi}{4}$$
> > 
> > - **Set up the area integral:**
> > 
> > $$A = \int_{\theta_1}^{\theta_2} \frac{1}{2}r^2 d\theta = \int_{-\pi/4}^{\pi/4} \frac{1}{2}\cos^2(2\theta) d\theta$$
> > 
> > - **Apply the half-angle formula ($\cos^2 x = \frac{1+\cos(2x)}{2}$):**
> > 
> > $$A = \frac{1}{2} \int_{-\pi/4}^{\pi/4} \frac{1+\cos(4\theta)}{2} d\theta = \frac{1}{4} \int_{-\pi/4}^{\pi/4} \big(1 + \cos(4\theta)\big) d\theta$$
> > 
> > - **Integrate:**
> > 
> > $$A = \frac{1}{4} \left[ \theta + \frac{1}{4}\sin(4\theta) \right]_{-\pi/4}^{\pi/4}$$
> > 
> > $$A = \frac{1}{4} \left[ \left(\frac{\pi}{4} + \frac{1}{4}\sin(\pi)\right) - \left(-\frac{\pi}{4} + \frac{1}{4}\sin(-\pi)\right) \right]$$
> > 
> > $$A = \frac{1}{4} \left[ \frac{\pi}{4} - \left(-\frac{\pi}{4}\right) \right] = \frac{1}{4} \left(\frac{\pi}{2}\right) = \frac{\pi}{8}$$
> 

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Multi-System Coordinate Fluency & Equation Transformation
> [!note]- Theory & Derivations
> ## 1. Comprehensive Notes: Bridging Cartesian and Polar Systems
> 
> In engineering and mathematics, spatial information is traditionally represented using the **Cartesian coordinate system** $(x, y)$, which maps points on a flat, rectangular grid. While this is excellent for linear motion, it becomes highly complex and cumbersome when dealing with circles, rotations, waves, or radial emissions. 
> 
> To resolve this, engineers use the **Polar coordinate system** $(r, \theta)$, where:
> *   **$r$ (radius):** The direct, straight-line distance from the origin (the pole) to the point.
> *   **$\theta$ (angle):** The counterclockwise angle measured in radians from the positive x-axis (the polar axis) to the line segment connecting the origin to the point.
> 
> ### Point-to-Point Conversion Formulas
> To switch between systems seamlessly, we rely on foundational trigonometry and the Pythagorean theorem:
> 
> **Cartesian to Polar $(x, y) \rightarrow (r, \theta)$:**
> 1.  **Radius:** $r = \sqrt{x^2 + y^2}$
> 2.  **Angle:** $\theta = \tan^{-1}\left(\frac{y}{x}\right)$ 
>     *(Note: You must adjust the angle $\theta$ based on the quadrant of the original $(x,y)$ point by adding $\pi$ or $2\pi$ if necessary).*
> 
> **Polar to Cartesian $(r, \theta) \rightarrow (x, y)$:**
> 1.  **X-coordinate:** $x = r\cos(\theta)$
> 2.  **Y-coordinate:** $y = r\sin(\theta)$
> 
> ### Equation Transformation Principles
> Converting an entire equation translates the underlying geometry from a rectangular map to a radial one (or vice versa).
> *   **To convert to Polar:** Substitute all $x$ and $y$ variables with $r\cos(\theta)$ and $r\sin(\theta)$, respectively, and simplify. The goal is typically to isolate $r$.
> *   **To convert to Cartesian:** Use algebraic manipulation (like multiplying both sides by $r$, squaring both sides, or completing the square) to construct terms like $r^2$, $r\cos(\theta)$, and $r\sin(\theta)$, which can then be directly replaced by $x^2 + y^2$, $x$, and $y$.
> 
> ---
> 
> ## 2. Sample Mathematical Problems
> 
> ### Problem 1: Converting a Point (Rectangular to Polar)
> **Prompt:** Convert the Cartesian coordinates $(-4, 4)$ into polar coordinates $(r, \theta)$. Express $\theta$ in exact radians.
> 
> **Solution:**
> 1.  Find $r$: 
>     $$r = \sqrt{(-4)^2 + 4^2} = \sqrt{16 + 16} = \sqrt{32} = 4\sqrt{2}$$
> 2.  Find $\theta$:
>     $$\tan(\theta) = \frac{4}{-4} = -1$$
>     Since the point $(-4, 4)$ is in Quadrant II, the reference angle is $\frac{\pi}{4}$, and the actual angle is $\pi - \frac{\pi}{4} = \frac{3\pi}{4}$.
> 3.  **Final Polar Point:** $(4\sqrt{2}, \frac{3\pi}{4})$
> 
> ### Problem 2: Converting a Point (Polar to Rectangular)
> **Prompt:** Convert the polar coordinates $(5, \frac{7\pi}{6})$ to rectangular coordinates $(x, y)$.
> 
> **Solution:**
> 1.  Find $x$:
>     $$x = 5\cos\left(\frac{7\pi}{6}\right) = 5\left(-\frac{\sqrt{3}}{2}\right) = -\frac{5\sqrt{3}}{2}$$
> 2.  Find $y$:
>     $$y = 5\sin\left(\frac{7\pi}{6}\right) = 5\left(-\frac{1}{2}\right) = -\frac{5}{2}$$
> 3.  **Final Rectangular Point:** $\left(-\frac{5\sqrt{3}}{2}, -\frac{5}{2}\right)$
> 
> ### Problem 3: Transforming an Equation (Rectangular to Polar)
> **Prompt:** Convert the parabolic equation $y = x^2$ into polar form, isolating $r$.
> 
> **Solution:**
> 1.  Substitute $x = r\cos(\theta)$ and $y = r\sin(\theta)$:
>     $$r\sin(\theta) = (r\cos(\theta))^2$$
>     $$r\sin(\theta) = r^2\cos^2(\theta)$$
> 2.  Divide both sides by $r$ (assuming $r \neq 0$):
>     $$\sin(\theta) = r\cos^2(\theta)$$
> 3.  Solve for $r$:
>     $$r = \frac{\sin(\theta)}{\cos^2(\theta)} = \frac{\sin(\theta)}{\cos(\theta)} \cdot \frac{1}{\cos(\theta)} = \tan(\theta)\sec(\theta)$$
> 4.  **Final Polar Equation:** $r = \tan(\theta)\sec(\theta)$
> 
> ### Problem 4: Transforming an Equation (Polar to Rectangular)
> **Prompt:** Convert the polar equation $r = -6\sin(\theta)$ into rectangular form and identify the geometric shape.
> 
> **Solution:**
> 1.  Multiply both sides by $r$:
>     $$r^2 = -6r\sin(\theta)$$
> 2.  Substitute $r^2 = x^2 + y^2$ and $r\sin(\theta) = y$:
>     $$x^2 + y^2 = -6y$$
> 3.  Move all terms to one side and complete the square for $y$:
>     $$x^2 + y^2 + 6y = 0$$
>     $$x^2 + (y^2 + 6y + 9) = 9$$
>     $$x^2 + (y+3)^2 = 9$$
> 4.  **Final Rectangular Equation & Shape:** This represents a **circle** with a radius of $3$, centered at $(0, -3)$.
> 
> ---
> 
> ## 3. Real-Life Engineering Application Problems
> 
> ### Engineering Problem 1: [[Computer Graphics & Virtual Models (Radar Sweeps)]]
> [[Computer Graphics & Virtual Models (Radar Sweeps) Solution]]
> 
> ---
> 
> ### Engineering Problem 2: [[Mechanical Robotics & Circular Motion]]
> [[Mechanical Robotics & Circular Motion Solution]]
> 
> ---
> 
> ### Engineering Problem 3: [[Optical Engineering & LED Radiation]]
> [[Optical Engineering & LED Radiation Solution]]


#### Worked Example
Set up and evaluate the integral to find the area of the region that lies inside the circle $r = 3\sin\theta$ and outside the cardioid $r = 1 + \sin\theta$.

> [!check]- Worked Solution
> Set up and evaluate the integral to find the area of the region that lies inside the circle $r = 3\sin\theta$ and outside the cardioid $r = 1 + \sin\theta$.
> 
> #### **Solution:**
> 
> - **Find the points of intersection:** Set the two equations equal to each other:
> 
> $$3\sin\theta = 1 + \sin\theta$$
> 
> $$2\sin\theta = 1 \implies \sin\theta = \frac{1}{2}$$
> 
> $$\theta = \frac{\pi}{6} \quad \text{and} \quad \theta = \frac{5\pi}{6}$$
> 
> - **Set up the integral:** The area is the difference between the outer curve (circle $r_2 = 3\sin\theta$) and the inner curve (cardioid $r_1 = 1+\sin\theta$):
> 
> $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big[(3\sin\theta)^2 - (1+\sin\theta)^2\big] d\theta$$
> 
> $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(9\sin^2\theta - (1 + 2\sin\theta + \sin^2\theta)\big) d\theta$$
> 
> $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(8\sin^2\theta - 2\sin\theta - 1\big) d\theta$$
> 
> - **Integrate and Evaluate:** Using the half-angle formula $\sin^2\theta = \frac{1-\cos(2\theta)}{2}$:
> 
> $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(4(1-\cos(2\theta)) - 2\sin\theta - 1\big) d\theta$$
> 
> $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6} \big(3 - 4\cos(2\theta) - 2\sin\theta\big) d\theta$$
> 
> $$A = \frac{1}{2} \Big[ 3\theta - 2\sin(2\theta) + 2\cos\theta \Big]_{\pi/6}^{5\pi/6}$$
> 
> Evaluating this definite integral yields:
> 
> $$A = \pi$$

#### Active Practice Problem
Find the total arc length of the cardioid $r = 1 + \sin\theta$ over the interval $0 \le \theta \le 2\pi$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> Find the total arc length of the cardioid $r = 1 + \sin\theta$ over the interval $0 \le \theta \le 2\pi$.
> 
> #### **Solution:**
> 
> - **Recall the Polar Arc Length formula:**
> 
> $$L = \int_{a}^{b} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2} d\theta$$
> 
> - **Find the integrand parts for $r = 1+\sin\theta$:**
> 
> - $r^2 = 1 + 2\sin\theta + \sin^2\theta$
> 
> - $\frac{dr}{d\theta} = \cos\theta \implies \left(\frac{dr}{d\theta}\right)^2 = \cos^2\theta$
> 
> - Sum inside the square root:
> 
> $$r^2 + \left(\frac{dr}{d\theta}\right)^2 = (1 + 2\sin\theta + \sin^2\theta) + \cos^2\theta$$
> 
> $$\text{Since } \sin^2\theta + \cos^2\theta = 1: \quad r^2 + \left(\frac{dr}{d\theta}\right)^2 = 2 + 2\sin\theta$$
> 
> - **Set up the integral:**
> 
> $$L = \int_{0}^{2\pi} \sqrt{2 + 2\sin\theta} d\theta$$
> 
> - **Solve using identities (as shown in the notes):** Multiply by the conjugate form:
> 
> $$L = \int_{0}^{2\pi} \sqrt{2 + 2\sin\theta} \cdot \frac{\sqrt{2 - 2\sin\theta}}{\sqrt{2 - 2\sin\theta}} d\theta = \int_{0}^{2\pi} \frac{\sqrt{4 - 4\sin^2\theta}}{\sqrt{2 - 2\sin\theta}} d\theta$$
> 
> $$L = \int_{0}^{2\pi} \frac{2\sqrt{\cos^2\theta}}{\sqrt{2 - 2\sin\theta}} d\theta$$
> 
> Using trigonometric simplifications and integration techniques highlighted in the notes:
> 
> $$L = 8$$

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 24 and overview of homework homework assignment.
