# Parametric Curves: Skill 1 – Eliminating the Parameter

## Topic Overview: The "Decoder Ring"

In calculus and physics, parametric curves use a "third variable"—the parameter, usually $t$ (time) or $theta$ (angle)—to control the $x$ and $y$ coordinates. This allows us to track a point moving through space over time. 

However, sometimes it is difficult to visualize the overall geometric shape of the path just by looking at $x(t)$ and $y(t)$. **Eliminating the parameter** is the algebraic process of removing $t$ to combine the parametric equations into a single, familiar rectangular equation in the form $y = f(x)$ or an implicit equation. 

### How to Eliminate the Parameter
Depending on the equations, you will generally use one of two methods:

1.  **Solve and Substitute (For Algebraic Equations):**
    *   Choose the simpler of the two equations (usually the linear one).
    *   Solve that equation for $t$.
    *   Substitute the resulting expression for $t$ into the second equation.
    *   Simplify to find the rectangular equation.

2.  **Trigonometric Identities (For Circular/Elliptical Equations):**
    *   If the equations involve $\sin(t)$ and $\cos(t)$, **do not** try to solve for $t$ directly using inverse trig functions.
    *   Instead, isolate the trigonometric functions.
    *   Use the Pythagorean Identity: $\sin^2(t) + \cos^2(t) = 1$.
    *   Substitute the isolated terms into the identity to get an equation in terms of $x$ and $y$.

---

## Sample Problems (Algebraic & Trigonometric)

### Sample Problem 1: Algebraic Substitution
**Given:** $x = 3t - 2$ and $y = t^2 + 1$
**Goal:** Eliminate the parameter to find the rectangular equation.

**Step 1: Solve for $t$ in the simpler equation.**
$$x = 3t - 2$$
$$x + 2 = 3t$$
$$t = \frac{x + 2}{3}$$

**Step 2: Substitute this expression into the $y$ equation.**
$$y = \left(\frac{x + 2}{3}\right)^2 + 1$$

**Step 3: Simplify.**
$$y = \frac{(x + 2)^2}{9} + 1$$
*Conclusion: The path is a parabola opening upwards with its vertex at $(-2, 1)$.*

### Sample Problem 2: Trigonometric Identity
**Given:** $x = 4\cos(\theta)$ and $y = 4\sin(\theta)$
**Goal:** Eliminate the parameter to find the rectangular equation.

**Step 1: Isolate the trigonometric functions.**
$$\cos(\theta) = \frac{x}{4}$$
$$\sin(\theta) = \frac{y}{4}$$

**Step 2: Use the Pythagorean identity.**
$$\cos^2(\theta) + \sin^2(\theta) = 1$$

**Step 3: Substitute and simplify.**
$$\left(\frac{x}{4}\right)^2 + \left(\frac{y}{4}\right)^2 = 1$$
$$\frac{x^2}{16} + \frac{y^2}{16} = 1$$
$$x^2 + y^2 = 16$$
*Conclusion: The path is a circle centered at the origin with a radius of 4.*

---

## Engineering Application Problems

### Application 1: [[Time-Dependent Trajectory Analysis (Drone Flight)]]
[[Time-Dependent Trajectory Analysis (Drone Flight) Solution]]


---

### Application 2: [[Rotary Motion in Machinery (Flywheel Manufacturing)]]
[[Rotary Motion in Machinery (Flywheel Manufacturing) Solution]]
