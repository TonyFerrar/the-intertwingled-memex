Civil and mechanical engineers designing hydraulic transport lines must compute fluid properties passing through non-standard pipeline junctions. Consider a fluid moving through a flat, skewed channel region $R$ in an industrial filter mechanism. The walls of the channel are bounded by the lines $y - 3x = -2$, $y - 3x = 2$, $2x + y = 1$, and $2x + y = 4$. 

Due to friction effects near the boundaries, the velocity field distribution of the liquid is modeled by the function $V(x,y) = (y - 3x)^2$ (measured in meters per second, $\text{m/s}$). Find the integrated velocity profile across the cross-sectional area of this filter channel.

#### Solution:
1. **Select the Transformation & Find the Limits:**
   Looking at the boundary pairings, we choose variables to normalize the bounds:
   * Let $u = y - 3x \implies -2 \le u \le 2$
   * Let $v = 2x + y \implies 1 \le v \le 4$

2. **Compute the Jacobian:**
   $$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} -3 & 1 \\ 2 & 1 \end{bmatrix} = (-3)(1) - (1)(2) = -5$$
   $$|J| = \left|-\frac{1}{5}\right| = \frac{1}{5}$$

3. **Set Up and Evaluate the Integral:**
   The velocity profile function becomes $V = u^2$.
   $$\text{Integrated Profile} = \int_{1}^{4} \int_{-2}^{2} u^2 \cdot \left(\frac{1}{5}\right) \, du \, dv$$
   $$\int_{-2}^{2} \frac{1}{5}u^2 \, du = \left[ \frac{1}{15}u^3 \right]_{-2}^{2} = \frac{8}{15} - \left(-\frac{8}{15}\right) = \frac{16}{15}$$
   $$\int_{1}^{4} \frac{16}{15} \, dv = \frac{16}{15}(4 - 1) = \frac{16}{15}(3) = \frac{16}{5} = 3.2$$

#### Meaning & Real-Life Application:
* **Meaning of the Answer:** The value of $3.2 \text{ m}^3/\text{s}$ represents the total volumetric flow flux rating occurring across this isolated segment of the plumbing.
* **Engineering Application:** Fluids engineers use custom-selected boundary variables to compute total fluid flow and pressure drop through irregularly shaped valves or manifolds. By using a transformation to convert the non-uniform pipeline cross-section into a basic $uv$ mathematical space, engineers can accurately verify whether the piping dimensions can carry the required fluid volume without throttling the system or causing pipe failure from over-pressurization.
