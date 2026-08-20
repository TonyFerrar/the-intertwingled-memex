## Solution

To evaluate this triple integral using cylindrical coordinates, we determine the new limits of integration for the solid region $E$, identify the Jacobian scaling factor, and then set up and evaluate the integral.

### Step 1: Determine the New Limits of Integration
The solid region $E$ is bounded by a cylinder and two horizontal planes:
* $x^2 + y^2 \le 1$: This is a solid cylinder of radius $1$ centered along the $z$-axis. In polar/cylindrical coordinates, $x^2 + y^2 = r^2$, so $r^2 \le 1 \implies 0 \le r \le 1$.
* To trace out the complete circle enclosing the cylinder, the angle $\theta$ ranges over a full rotation: $0 \le \theta \le 2\pi$.
* $0 \le z \le 2$: The height limits remain exactly as given.

Thus, our limits in cylindrical coordinates $(r, \theta, z)$ are:
* $0 \le r \le 1$
* $0 \le \theta \le 2\pi$
* $0 \le z \le 2$

---

### Step 2: Identify the Jacobian Factor
For a standard cylindrical transformation ($x = r\cos\theta, y = r\sin\theta, z = z$), the volume element $dV = dx\,dy\,dz$ scales by the absolute value of the 3D Jacobian determinant:

$$|J| = \left| \frac{\partial(x,y,z)}{\partial(r,\theta,z)} \right| = r$$

This means the differential volume element updates as follows:
$$dV = r \, dz \, dr \, d\theta$$

---

### Step 3: Set Up and Evaluate the Integral
The integrand expression is simply $z$. Substituting the limits, the integrand, and the Jacobian factor gives:

$$\iiint_{E} z \, dV = \int_{0}^{2\pi} \int_{0}^{1} \int_{0}^{2} z \cdot r \, dz \, dr \, d\theta$$

Because the boundaries are all constants and the integrand is separable into independent functions of $z$, $r$, and $\theta$, we can evaluate this as the product of three single integrals:

$$\iiint_{E} z \, dV = \left( \int_{0}^{2\pi} 1 \, d\theta \right) \cdot \left( \int_{0}^{1} r \, dr \right) \cdot \left( \int_{0}^{2} z \, dz \right)$$

1. **Evaluate the $\theta$-integral:**
   $$\int_{0}^{2\pi} 1 \, d\theta = \Big[ \theta \Big]_{0}^{2\pi} = 2\pi$$

2. **Evaluate the $r$-integral:**
   $$\int_{0}^{1} r \, dr = \left[ \frac{1}{2}r^2 \right]_{0}^{1} = \frac{1}{2}(1)^2 - 0 = \frac{1}{2}$$

3. **Evaluate the $z$-integral:**
   $$\int_{0}^{2} z \, dz = \left[ \frac{1}{2}z^2 \right]_{0}^{2} = \frac{1}{2}(2)^2 - 0 = 2$$

4. **Multiply the results together:**
   $$\iiint_{E} z \, dV = (2\pi) \cdot \left(\frac{1}{2}\right) \cdot (2) = 2\pi$$

### Final Answer
The value of the integral is **$2\pi$**.