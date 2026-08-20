A mechanical engineer is designing a solid cylindrical rotor component for a jet engine turbine core. The rotor occupies a solid domain $E$ bounded by the cylinder $x^2 + y^2 \le 9$ (radius of $3\text{ meters}$) and the horizontal planes $z = 0$ to $z = 4$ (height of $4\text{ meters}$). Due to centrifugal casting processes, the material mass density distribution increases continuously away from the rotational axis, modeled by the function $\rho(x,y,z) = \sqrt{x^2+y^2}$ (measured in kilograms per cubic meter, $\text{kg/m}^3$). 

The structural moment of inertia $I_z$ about the rotational center ($z$-axis) is given by the formula:
$$I_z = \iiint_E (x^2 + y^2) \cdot \rho(x,y,z) \, dV$$
Calculate the exact moment of inertia $I_z$ using the standard cylindrical coordinate transformation.
**Given Transformation:** $x = r\cos\theta, y = r\sin\theta, z = z$, where $|J| = r$.

#### Solution:
1. **Determine the Limits:**
   * Cylindrical boundaries: $0 \le r \le 3$
   * Angular rotation: $0 \le \theta \le 2\pi$
   * Vertical span: $0 \le z \le 4$

2. **Set Up the Value Formula:**
   Substitute $x^2+y^2 = r^2$ and $\rho = \sqrt{r^2} = r$. The integrand becomes $r^2 \cdot r = r^3$. Adding the volume Jacobian $|J| = r$:
   $$I_z = \int_{0}^{2\pi} \int_{0}^{3} \int_{0}^{4} (r^3) \cdot r \, dz \, dr \, d\theta = \int_{0}^{2\pi} \int_{0}^{3} \int_{0}^{4} r^4 \, dz \, dr \, d\theta$$

3. **Evaluate:**
   $$I_z = \left( \int_{0}^{2\pi} 1 \, d\theta \right) \cdot \left( \int_{0}^{3} r^4 \, dr \right) \cdot \left( \int_{0}^{4} 1 \, dz \right)$$
   * $\int_{0}^{2\pi} 1 \, d\theta = 2\pi$$
   * $\int_{0}^{4} 1 \, dz = 4$$
   * $\int_{0}^{3} r^4 \, dr = \left[ \frac{1}{5}r^5 \right]_{0}^{3} = \frac{243}{5}$
   
   $$I_z = 2\pi \cdot \frac{243}{5} \cdot 4 = \frac{1944\pi}{5} = 388.8\pi \approx 1221.45$$

#### Meaning & Real-Life Application:
* **Meaning of the Answer:** The value of $388.8\pi \approx 1221.45 \text{ kg}\cdot\text{m}^2$ is the precise polar moment of inertia of the component around its rotational axis.
* **Engineering Application:** This exact parameter tells aerospace engineers how much rotational resistance the engine turbine core exerts. It directly dictates the required startup torque specifications for the auxiliary starter motor and allows engineers to evaluate transient engine responsiveness during swift throttle adjustments in flight operations.
