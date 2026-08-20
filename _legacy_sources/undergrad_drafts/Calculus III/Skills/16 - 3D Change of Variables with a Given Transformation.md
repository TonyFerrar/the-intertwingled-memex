# Calc 3: Skill 2 — Given 3D Transformations

## Concept Notes: Understanding 3D Change of Variables

In three dimensions, evaluating a triple integral over a complex solid region $E$ (such as a skewed parallelepiped, a cylinder, or a sphere) can become mathematically intractable using standard Cartesian coordinates ($dx\,dy\,dz$). By executing a **3D Change of Variables**, we transform a complicated spatial domain $E$ in $xyz$-space into a highly manageable, rectangular solid region $E'$ in a new $uvw$-coordinate system.



### The Fundamental Formula

$$\iiint_{E} f(x,y,z) \, dx \, dy \, dz = \iiint_{E'} f(x(u,v,w), y(u,v,w), z(u,v,w)) \, |J| \, du \, dv \, dw$$

Where:
* **$E'$** represents the transformed solid region bounded by constant integration limits for $u$, $v$, and $w$.
* **$f(x(u,v,w), y(u,v,w), z(u,v,w))$** is the original integrand fully translated into the new variable definitions.
* **$|J|$** is the absolute value of the **3D Jacobian determinant**, which acts as a local volume-scaling factor to ensure the differential volume element $dV$ updates accurately between coordinate systems.

### Calculating the 3D Jacobian Matrix

The 3D Jacobian matrix is a $3 \times 3$ matrix consisting of all first-order partial derivatives of the coordinate mapping:

$$J = \frac{\partial(x,y,z)}{\partial(u,v,w)} = \begin{bmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\ \frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} \end{bmatrix}$$

#### Standard 3D Special Cases
Cylindrical and Spherical coordinate systems are highly common predefined 3D transformations:
1. **Cylindrical Coordinates:** ($x = r\cos\theta, y = r\sin\theta, z = z$) yields a Jacobian volume element of:
   $$dV = r \, dz \, dr \, d\theta$$
2. **Spherical Coordinates:** ($x = \rho\sin\phi\cos\theta, y = \rho\sin\phi\sin\theta, z = \rho\cos\phi$) yields a Jacobian volume element of:
   $$dV = \rho^2 \sin\phi \, d\rho \, d\phi \, d\theta$$

---

## Standard Sample Problems

### Sample Problem 1
**Evaluate:** $$\iiint_E z \sqrt{x^2+y^2} \, dV$$
where $E$ is the solid cylinder bounded by $x^2+y^2 \le 4$ and $0 \le z \le 3$.
**Given Transformation (Cylindrical Coordinates):** $x = r\cos\theta, y = r\sin\theta, z = z$, where $|J| = r$.

#### Solution:
1. **Determine the New Limits:**
   Converting the boundaries of the solid cylinder into cylindrical parameters:
   * $x^2 + y^2 \le 4 \implies r^2 \le 4 \implies 0 \le r \le 2$
   * Tracing the full cylinder requires a complete rotation: $0 \le \theta \le 2\pi$
   * The height bounds are explicitly constant: $0 \le z \le 3$

2. **Transform the Integrand and Set Up the Integral:**
   The component $\sqrt{x^2+y^2}$ simplifies to $r$. Thus, the integrand becomes $z \cdot r$. Including the Jacobian factor $|J| = r$:
   $$\iiint_E z \sqrt{x^2+y^2} \, dV = \int_{0}^{2\pi} \int_{0}^{2} \int_{0}^{3} (zr) \cdot r \, dz \, dr \, d\theta = \int_{0}^{2\pi} \int_{0}^{2} \int_{0}^{3} zr^2 \, dz \, dr \, d\theta$$

3. **Evaluate the Integral:**
   Since all boundaries are constants and variables are decoupled, we separate the terms:
   $$\iiint_E z \sqrt{x^2+y^2} \, dV = \left( \int_{0}^{2\pi} 1 \, d\theta \right) \cdot \left( \int_{0}^{2} r^2 \, dr \right) \cdot \left( \int_{0}^{3} z \, dz \right)$$
   * $\int_{0}^{2\pi} 1 \, d\theta = 2\pi$
   * $\int_{0}^{2} r^2 \, dr = \left[ \frac{1}{3}r^3 \right]_{0}^{2} = \frac{8}{3}$
   * $\int_{0}^{3} z \, dz = \left[ \frac{1}{2}z^2 \right]_{0}^{3} = \frac{9}{2}$
   
   $$\text{Total Value} = 2\pi \cdot \frac{8}{3} \cdot \frac{9}{2} = 24\pi$$

**Final Answer:** $24\pi$

---

### Sample Problem 2
**Evaluate:** $$\iiint_E (x + y + z) \, dV$$
where $E$ is the solid bounded by the planes $x+y=0$, $x+y=2$, $x-y=0$, $x-y=4$, $z=0$, and $z=3$.
**Given Transformation:** $u = x+y$, $v = x-y$, and $w = z$.

#### Solution:
1. **Determine the New Limits:**
   * $x+y=0 \implies u=0$ and $x+y=2 \implies u=2$
   * $x-y=0 \implies v=0$ and $x-y=4 \implies v=4$
   * $z=0 \implies w=0$ and $z=3 \implies w=3$
   
   Limits are $0 \le u \le 2$, $0 \le v \le 4$, and $0 \le w \le 3$.

2. **Compute the Jacobian:**
   Using the inverse Jacobian relationship for 3D fields:
   $$\frac{\partial(u,v,w)}{\partial(x,y,z)} = \det \begin{bmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = 1((-1)(1) - (0)(0)) - 1((1)(1) - (0)(0)) = -1 - 1 = -2$$
   $$|J| = \left| \frac{1}{-2} \right| = \frac{1}{2}$$

3. **Set Up and Evaluate the Integral:**
   Substituting $x+y = u$ and $z = w$, the integrand converts to $(u + w)$:
   $$\iiint_E (x+y+z) \, dV = \int_{0}^{3} \int_{0}^{4} \int_{0}^{2} (u + w) \cdot \left(\frac{1}{2}\right) \, du \, dv \, dw$$
   * **Integrate with respect to $u$:** $\int_{0}^{2} \left(\frac{1}{2}u + \frac{1}{2}w\right) du = \left[ \frac{1}{4}u^2 + \frac{1}{2}uw \right]_{0}^{2} = 1 + w$
   * **Integrate with respect to $v$:** $\int_{0}^{4} (1 + w) \, dv = \left[ (1 + w)v \right]_{0}^{4} = 4 + 4w$
   * **Integrate with respect to $w$:** $\int_{0}^{3} (4 + 4w) \, dw = \left[ 4w + 2w^2 \right]_{0}^{3} = 12 + 2(9) = 30$$

**Final Answer:** $30$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering — Turbine Rotor Moment of Inertia]]
[[Aerospace Engineering — Turbine Rotor Moment of Inertia Solution]]

---

### Engineering Problem 2: [[Antenna Engineering — Radar Dome Power Output]]
[[Antenna Engineering — Radar Dome Power Output Solution]]
