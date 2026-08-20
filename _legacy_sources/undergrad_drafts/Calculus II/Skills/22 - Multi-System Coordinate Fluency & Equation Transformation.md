# Skill 1: Multi-System Coordinate Fluency & Equation Transformation

## 1. Comprehensive Notes: Bridging Cartesian and Polar Systems

In engineering and mathematics, spatial information is traditionally represented using the **Cartesian coordinate system** $(x, y)$, which maps points on a flat, rectangular grid. While this is excellent for linear motion, it becomes highly complex and cumbersome when dealing with circles, rotations, waves, or radial emissions. 

To resolve this, engineers use the **Polar coordinate system** $(r, \theta)$, where:
*   **$r$ (radius):** The direct, straight-line distance from the origin (the pole) to the point.
*   **$\theta$ (angle):** The counterclockwise angle measured in radians from the positive x-axis (the polar axis) to the line segment connecting the origin to the point.

### Point-to-Point Conversion Formulas
To switch between systems seamlessly, we rely on foundational trigonometry and the Pythagorean theorem:

**Cartesian to Polar $(x, y) \rightarrow (r, \theta)$:**
1.  **Radius:** $r = \sqrt{x^2 + y^2}$
2.  **Angle:** $\theta = \tan^{-1}\left(\frac{y}{x}\right)$ 
    *(Note: You must adjust the angle $\theta$ based on the quadrant of the original $(x,y)$ point by adding $\pi$ or $2\pi$ if necessary).*

**Polar to Cartesian $(r, \theta) \rightarrow (x, y)$:**
1.  **X-coordinate:** $x = r\cos(\theta)$
2.  **Y-coordinate:** $y = r\sin(\theta)$

### Equation Transformation Principles
Converting an entire equation translates the underlying geometry from a rectangular map to a radial one (or vice versa).
*   **To convert to Polar:** Substitute all $x$ and $y$ variables with $r\cos(\theta)$ and $r\sin(\theta)$, respectively, and simplify. The goal is typically to isolate $r$.
*   **To convert to Cartesian:** Use algebraic manipulation (like multiplying both sides by $r$, squaring both sides, or completing the square) to construct terms like $r^2$, $r\cos(\theta)$, and $r\sin(\theta)$, which can then be directly replaced by $x^2 + y^2$, $x$, and $y$.

---

## 2. Sample Mathematical Problems

### Problem 1: Converting a Point (Rectangular to Polar)
**Prompt:** Convert the Cartesian coordinates $(-4, 4)$ into polar coordinates $(r, \theta)$. Express $\theta$ in exact radians.

**Solution:**
1.  Find $r$: 
    $$r = \sqrt{(-4)^2 + 4^2} = \sqrt{16 + 16} = \sqrt{32} = 4\sqrt{2}$$
2.  Find $\theta$:
    $$\tan(\theta) = \frac{4}{-4} = -1$$
    Since the point $(-4, 4)$ is in Quadrant II, the reference angle is $\frac{\pi}{4}$, and the actual angle is $\pi - \frac{\pi}{4} = \frac{3\pi}{4}$.
3.  **Final Polar Point:** $(4\sqrt{2}, \frac{3\pi}{4})$

### Problem 2: Converting a Point (Polar to Rectangular)
**Prompt:** Convert the polar coordinates $(5, \frac{7\pi}{6})$ to rectangular coordinates $(x, y)$.

**Solution:**
1.  Find $x$:
    $$x = 5\cos\left(\frac{7\pi}{6}\right) = 5\left(-\frac{\sqrt{3}}{2}\right) = -\frac{5\sqrt{3}}{2}$$
2.  Find $y$:
    $$y = 5\sin\left(\frac{7\pi}{6}\right) = 5\left(-\frac{1}{2}\right) = -\frac{5}{2}$$
3.  **Final Rectangular Point:** $\left(-\frac{5\sqrt{3}}{2}, -\frac{5}{2}\right)$

### Problem 3: Transforming an Equation (Rectangular to Polar)
**Prompt:** Convert the parabolic equation $y = x^2$ into polar form, isolating $r$.

**Solution:**
1.  Substitute $x = r\cos(\theta)$ and $y = r\sin(\theta)$:
    $$r\sin(\theta) = (r\cos(\theta))^2$$
    $$r\sin(\theta) = r^2\cos^2(\theta)$$
2.  Divide both sides by $r$ (assuming $r \neq 0$):
    $$\sin(\theta) = r\cos^2(\theta)$$
3.  Solve for $r$:
    $$r = \frac{\sin(\theta)}{\cos^2(\theta)} = \frac{\sin(\theta)}{\cos(\theta)} \cdot \frac{1}{\cos(\theta)} = \tan(\theta)\sec(\theta)$$
4.  **Final Polar Equation:** $r = \tan(\theta)\sec(\theta)$

### Problem 4: Transforming an Equation (Polar to Rectangular)
**Prompt:** Convert the polar equation $r = -6\sin(\theta)$ into rectangular form and identify the geometric shape.

**Solution:**
1.  Multiply both sides by $r$:
    $$r^2 = -6r\sin(\theta)$$
2.  Substitute $r^2 = x^2 + y^2$ and $r\sin(\theta) = y$:
    $$x^2 + y^2 = -6y$$
3.  Move all terms to one side and complete the square for $y$:
    $$x^2 + y^2 + 6y = 0$$
    $$x^2 + (y^2 + 6y + 9) = 9$$
    $$x^2 + (y+3)^2 = 9$$
4.  **Final Rectangular Equation & Shape:** This represents a **circle** with a radius of $3$, centered at $(0, -3)$.

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Computer Graphics & Virtual Models (Radar Sweeps)]]
[[Computer Graphics & Virtual Models (Radar Sweeps) Solution]]

---

### Engineering Problem 2: [[Mechanical Robotics & Circular Motion]]
[[Mechanical Robotics & Circular Motion Solution]]

---

### Engineering Problem 3: [[Optical Engineering & LED Radiation]]
[[Optical Engineering & LED Radiation Solution]]
