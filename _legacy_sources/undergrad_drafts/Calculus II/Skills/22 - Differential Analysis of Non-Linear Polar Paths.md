# Skill 2: Differential Analysis of Non-Linear Polar Paths

## 1. Comprehensive Notes: Derivatives and Tangents in Polar Coordinates

When dealing with objects moving along curved paths, engineers and mathematicians need to know two crucial rates of change:
1.  **How fast the object is moving away from or toward the center ($dr/d\theta$):** This represents the radial expansion or contraction of the curve relative to the angle.
2.  **The actual directional slope of the path at any given moment ($dy/dx$):** This tells us the trajectory an object would take if it suddenly detached and flew off tangentially.

### Finding the Radial Rate of Change ($dr/d\theta$)
If a polar curve is defined as $r = f(\theta)$, finding how the radius changes with respect to the angle simply requires taking the standard derivative of $f(\theta)$ with respect to $\theta$.

### Finding the Tangent Slope ($dy/dx$)
Finding the Cartesian slope ($dy/dx$) of a polar curve is more complex because $x$ and $y$ depend on *both* $r$ and $\theta$. 
We start with the conversion formulas:
*   $x = r\cos(\theta)$
*   $y = r\sin(\theta)$

Since $r$ is a function of $\theta$ (i.e., $r(\theta)$), we must apply the **Product Rule** to take the derivatives of $x$ and $y$ with respect to $\theta$:
*   $\frac{dx}{d\theta} = \frac{dr}{d\theta}\cos(\theta) - r\sin(\theta)$
*   $\frac{dy}{d\theta} = \frac{dr}{d\theta}\sin(\theta) + r\cos(\theta)$

Using the **Chain Rule** in parametric form, the slope of the tangent line is:
$$ \frac{dy}{dx} = \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}} = \frac{\frac{dr}{d\theta}\sin(\theta) + r\cos(\theta)}{\frac{dr}{d\theta}\cos(\theta) - r\sin(\theta)} $$

---

## 2. Sample Mathematical Problems

### Problem 1: Radial Rate of Change
**Prompt:** A curve is defined by $r = 2\sin(3\theta)$. Find the rate of change of the radius with respect to the angle when $\theta = \frac{\pi}{4}$.

**Solution:**
1.  Take the derivative of $r$ with respect to $\theta$:
    $$\frac{dr}{d\theta} = 2 \cdot \cos(3\theta) \cdot 3 = 6\cos(3\theta)$$
2.  Evaluate at $\theta = \frac{\pi}{4}$:
    $$\frac{dr}{d\theta} \bigg|_{\theta = \pi/4} = 6\cos\left(3\left(\frac{\pi}{4}\right)\right) = 6\cos\left(\frac{3\pi}{4}\right)$$
    $$6\left(-\frac{\sqrt{2}}{2}\right) = -3\sqrt{2}$$
3.  **Answer:** $-3\sqrt{2}$ (The radius is shrinking at this specific angle).

### Problem 2: Finding the Tangent Slope
**Prompt:** Find the slope of the tangent line $\frac{dy}{dx}$ to the curve $r = 2 - \sin(\theta)$ at $\theta = \pi$.

**Solution:**
1.  Evaluate $r$ and $\frac{dr}{d\theta}$ at $\theta = \pi$:
    *   $r(\pi) = 2 - \sin(\pi) = 2 - 0 = 2$
    *   $\frac{dr}{d\theta} = -\cos(\theta) \implies -\cos(\pi) = -(-1) = 1$
2.  Identify the values of $\sin(\theta)$ and $\cos(\theta)$ at $\theta = \pi$:
    *   $\sin(\pi) = 0$
    *   $\cos(\pi) = -1$
3.  Plug all values into the polar slope formula:
    $$ \frac{dy}{dx} = \frac{(1)(0) + (2)(-1)}{(1)(-1) - (2)(0)} $$
    $$ \frac{dy}{dx} = \frac{0 - 2}{-1 - 0} = \frac{-2}{-1} = 2 $$
4.  **Answer:** The slope of the tangent line is $2$.

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Mechanical Engineering (Cam and Follower Design)]]
[[Mechanical Engineering (Cam and Follower Design) Solution]]

---

### Engineering Problem 2: [[Autonomous Robotics & Inertial Trajectories]]
[[Autonomous Robotics & Inertial Trajectories Solution]]
