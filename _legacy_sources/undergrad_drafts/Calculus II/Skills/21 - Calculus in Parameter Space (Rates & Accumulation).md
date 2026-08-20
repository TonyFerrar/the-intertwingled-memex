# Parametric Curves: Skill 3 – Calculus in Parameter Space

## Topic Overview: Rates & Accumulation

Once you have established the path and orientation of a parametric curve, you often need to analyze its physical properties, such as the direction of travel at a specific instant or the total space it encompasses. 

The most powerful aspect of parametric calculus is that **you do not need to convert the equations back to $x$ and $y$ to use calculus**. You can find slopes (derivatives) and areas (integrals) directly using the parameter $t$.

### 1. Finding Slopes (Derivatives)
To find the slope of a tangent line (which represents the instantaneous direction of motion or trajectory) at a specific point on the curve, you use the **Parametric Derivative Theorem**:

$$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$$
*(provided that $\frac{dx}{dt} \neq 0$)*

**Concept:** The overall slope (change in $y$ over change in $x$) is calculated by taking the vertical velocity ($\frac{dy}{dt}$) and dividing it by the horizontal velocity ($\frac{dx}{dt}$).

### 2. Finding Areas (Integration)
To find the area under a parametric curve, you adapt the standard integral formula $\int y \, dx$. You substitute $y$ with your $g(t)$ function, and replace the differential $dx$ with $f'(t) \, dt$ (the derivative of the $x$-equation with respect to $t$).

**Area Under a Parametric Curve's Theorem:**
$$A = \int_{a}^{b} g(t) \cdot f'(t) \, dt$$
where $x = f(t)$ and $y = g(t)$, and the bounds $a$ and $b$ are the $t$-values that correspond to the start and end of the curve.

---

## Sample Problems (Derivatives and Integrals)

### Sample Problem 1: Finding the Tangent Slope
**Given:** $x = t^2$ and $y = t^3 - 3t$
**Goal:** Find the slope of the tangent line when $t = 2$.

**Step 1: Find the derivatives with respect to $t$.**
$\frac{dx}{dt} = 2t$
$\frac{dy}{dt} = 3t^2 - 3$

**Step 2: Apply the Parametric Derivative Theorem.**
$\frac{dy}{dx} = \frac{3t^2 - 3}{2t}$

**Step 3: Evaluate at $t = 2$.**
$\frac{dy}{dx}\bigg|_{t=2} = \frac{3(2)^2 - 3}{2(2)} = \frac{12 - 3}{4} = \frac{9}{4}$
*Conclusion: At the moment $t=2$, the tangent slope of the curve is $\frac{9}{4}$.*

### Sample Problem 2: Finding Area
**Given:** $x = 2t$ and $y = t^2$, for $0 \le t \le 3$.
**Goal:** Find the area under the curve relative to the $x$-axis.

**Step 1: Identify $g(t)$ and find $f'(t)$.**
$g(t) = y = t^2$
$f(t) = x = 2t \implies f'(t) = 2$

**Step 2: Set up the integral using the theorem.**
$A = \int_{0}^{3} (t^2)(2) \, dt$
$A = \int_{0}^{3} 2t^2 \, dt$

**Step 3: Evaluate the integral.**
$A = \left[ \frac{2t^3}{3} \right]_{0}^{3} = \frac{2(3)^3}{3} - 0 = \frac{54}{3} = 18$
*Conclusion: The area under the curve from $t=0$ to $t=3$ is 18 square units.*

---

## Engineering Application Problems

### Application 1: [[Rotary Motion in Machinery (Centrifugal Detachment)]]
[[Rotary Motion in Machinery (Centrifugal Detachment) Solution]]


---

### Application 2: [[Time-Dependent Trajectory Analysis (Solar Panel Sweeping Area)]]
[[Time-Dependent Trajectory Analysis (Solar Panel Sweeping Area) Solution]]
