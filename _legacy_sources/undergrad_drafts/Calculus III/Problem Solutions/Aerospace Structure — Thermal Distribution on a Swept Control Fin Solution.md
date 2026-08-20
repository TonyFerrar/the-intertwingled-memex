An aerospace engineer is analyzing the steady-state heat distribution across a flat, swept-wing control fin on an atmospheric drone. The structural fin forms a geometric domain $R$ bounded by the lines $x - y = 0$, $x - y = 2$, $x + 2y = 3$, and $x + 2y = 6$. 

During high-speed flight, aerodynamic skin friction creates a variable temperature profile across the surface of the component, mathematically described by the function $T(x,y) = e^{x-y}$ (measured in degrees Celsius, $^\circ\text{C}$). Determine the average integrated thermal load experienced over this control surface area.

#### Solution:
1. **Select the Transformation & Find the Limits:**
   Isolating repeating algebraic terms from the boundaries yields:
   * Let $u = x - y \implies 0 \le u \le 2$
   * Let $v = x + 2y \implies 3 \le v \le 6$

2. **Compute the Jacobian:**
   $$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} 1 & -1 \\ 1 & 2 \end{bmatrix} = (1)(2) - (-1)(1) = 2 + 1 = 3$$
   $$|J| = \left|\frac{1}{3}\right| = \frac{1}{3}$$

3. **Set Up and Evaluate the Integral:**
   The temperature profile simplifies to $e^u$.
   $$\text{Integrated Thermal Load} = \int_{3}^{6} \int_{0}^{2} e^u \cdot \left(\frac{1}{3}\right) \, du \, dv$$
   $$\int_{0}^{2} \frac{1}{3}e^u \, du = \left[ \frac{1}{3}e^u \right]_{0}^{2} = \frac{1}{3}(e^2 - 1)$$
   $$\int_{3}^{6} \frac{1}{3}(e^2 - 1) \, dv = \frac{1}{3}(e^2 - 1)(6 - 3) = e^2 - 1 \approx 6.39$$

#### Meaning & Real-Life Application:
* **Meaning of the Answer:** The result of $e^2 - 1 \approx 6.39$ is the net integrated thermal energy metric distributed across the geometric face of the control fin.
* **Engineering Application:** When designing high-speed aircraft, structures engineers face severe geometric constraints because fins must be swept backward at sharp angles to minimize drag. This geometric skewing makes tracking heat transfer in standard $xy$ coordinates incredibly difficult. By inventing a custom coordinate transformation, the engineer can seamlessly integrate the heat profile to find structural hot spots, helping them choose the right thermal protective coatings and materials to prevent the metal from warping or failing mid-flight.