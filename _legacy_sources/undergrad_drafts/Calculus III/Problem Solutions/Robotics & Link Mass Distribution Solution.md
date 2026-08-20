A mechanical engineer is designing a flat, specialized structural link for a high-speed robotic arm. Due to tight mechanical clearances inside the robot joint assembly, the link must be manufactured as a skewed parallelogram shape. In the manufacturing design plane, the region $R$ of the link is bounded by the line equations $2x - 3y = 0$, $2x - 3y = 2$, $x + y = -1$, and $x + y = 2$. 

To optimize strength-to-weight ratios, the link is constructed out of a composite material whose area mass density varies according to the profile $\sigma(x,y) = 2x - 3y + 2$ (measured in kilograms per square meter, $\text{kg/m}^2$). Determine the total mass of the manufactured robotic link.
**Given Transformation:** $u = 2x - 3y$ and $v = x + y$.

#### Solution:
1. **Determine the New Limits:**
   * $2x - 3y = 0 \implies u = 0$
   * $2x - 3y = 2 \implies u = 2$
   * $x + y = -1 \implies v = -1$
   * $x + y = 2 \implies v = 2$
   
   Limits are $0 \le u \le 2$ and $-1 \le v \le 2$.

2. **Compute the Jacobian:**
   $$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} 2 & -3 \\ 1 & 1 \end{bmatrix} = (2)(1) - (-3)(1) = 2 + 3 = 5$$
   $$|J| = \left|\frac{1}{5}\right| = \frac{1}{5}$$

3. **Set Up and Evaluate the Integral:**
   The density function becomes $\sigma(u,v) = u + 2$.
   $$\text{Total Mass} = \int_{-1}^{2} \int_{0}^{2} (u + 2) \cdot \left(\frac{1}{5}\right) \, du \, dv$$
   $$\int_{0}^{2} \left(\frac{1}{5}u + \frac{2}{5}\right) \, du = \left[ \frac{1}{10}u^2 + \frac{2}{5}u \right]_{0}^{2} = \frac{4}{10} + \frac{4}{5} = \frac{2}{5} + \frac{4}{5} = \frac{6}{5}$$
   $$\int_{-1}^{2} \frac{6}{5} \, dv = \frac{6}{5}(2 - (-1)) = \frac{6}{5}(3) = \frac{18}{5} = 3.6$$

#### Meaning & Real-Life Application:
* **Meaning of the Answer:** The answer of $3.6$ means that the total physical mass of this manufactured robot link is exactly $3.6\text{ kilograms}$.
* **Engineering Application:** Control engineers require the exact mass properties of individual links to program the robot’s dynamic equations of motion. Because the link has non-uniform density and a skewed profile, this Jacobian integration method provides the precise mass needed to tune the motor torque control loops. Accurate mass figures ensure that when the robot is moving rapidly on an assembly line, its joints deliver the exact amount of force required to accelerate smoothly without overshooting or straining the electric actuators.