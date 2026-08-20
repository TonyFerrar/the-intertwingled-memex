## Solution

To evaluate this triple integral, we recognize that the region $E$ is already explicitly defined in cylindrical coordinate boundaries. We need to account for the standard Jacobian factor when dealing with cylindrical coordinates before performing the integration.

### Step 1: Identify the Integration Limits and Jacobian
The limits for the region $E$ are already provided directly in cylindrical form:
* $1 \le r \le 2$
* $0 \le \theta \le \pi$
* $0 \le z \le 1$

When changing to or integrating within cylindrical coordinates, the standard differential volume element scales by the Jacobian determinant factor $|J| = r$:
$$dV = r \, dz \, dr \, d\theta$$

---

### Step 2: Set Up the Integral
The given function inside the integral is $r$. Substituting the limits, the given function, and the Jacobian volume element yields:

$$\iiint_{E} r \, dV = \int_{0}^{\pi} \int_{1}^{2} \int_{0}^{1} (r) \cdot r \, dz \, dr \, d\theta$$

Simplifying the integrand expression:
$$\iiint_{E} r \, dV = \int_{0}^{\pi} \int_{1}^{2} \int_{0}^{1} r^2 \, dz \, dr \, d\theta$$

---

### Step 3: Evaluate the Integral
Because all limits are constants and the integrand components are independent, we can separate this into three individual single-variable integrals:

$$\iiint_{E} r \, dV = \left( \int_{0}^{\pi} 1 \, d\theta \right) \cdot \left( \int_{1}^{2} r^2 \, dr \right) \cdot \left( \int_{0}^{1} 1 \, dz \right)$$

1. **Evaluate the $\theta$-integral:**
   $$\int_{0}^{\pi} 1 \, d\theta = \Big[ \theta \Big]_{0}^{\pi} = \pi$$

2. **Evaluate the $z$-integral:**
   $$\int_{0}^{1} 1 \, dz = \Big[ z \Big]_{0}^{1} = 1$$

3. **Evaluate the $r$-integral:**
   $$\int_{1}^{2} r^2 \, dr = \left[ \frac{1}{3}r^3 \right]_{1}^{2} = \frac{1}{3}(2)^3 - \frac{1}{3}(1)^3 = \frac{8}{3} - \frac{1}{3} = \frac{7}{3}$$

4. **Multiply the individual results together:**
   $$\iiint_{E} r \, dV = \pi \cdot \frac{7}{3} \cdot 1 = \frac{7\pi}{3}$$

### Final Answer
The value of the integral is **$\frac{7\pi}{3}$**.