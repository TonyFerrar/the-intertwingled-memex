An environmental engineer is modeling the chemical concentration field $C$ (in parts per million, $\text{ppm}$) of a liquid pollutant leaking underground from a point source. Due to porous rock structures, the dispersion profile is modeled as a rational function of three-dimensional spatial coordinates $(x, y, z)$ measured in meters from a reference wellhead:
$$C = g(x,y,z) = \frac{1}{x^2 + y^2 + z^2 - 9}$$

1. Determine the mathematical domain and range of this concentration function.
2. Evaluate the concentration at the coordinate location $(2, 1, 2)$.
3. **Meaning & Real-Life Application:** Explain what the domain, range, and evaluation results indicate about the physical behavior of the leak, containment walls, and environmental safety zones.

#### **Solution:**
1. **Domain and Range:**
   * **Domain:** The function becomes undefined when the denominator is zero: $x^2 + y^2 + z^2 - 9 = 0 \implies x^2 + y^2 + z^2 = 9$. The domain contains all points in 3D space except for coordinates lying exactly on a sphere with a radius of $3\text{ meters}$.
   * **Range:** The denominator spans $[-9, \infty)$ excluding $0$. The concentration output ranges across $(-\infty, -\frac{1}{9}] \cup (0, \infty)$.
2. **Point Evaluation:**
   * Substitute $(2,1,2)$ into the function: $C(2,1,2) = \frac{1}{2^2 + 1^2 + 2^2 - 9} = \frac{1}{4 + 1 + 4 - 9} = \frac{1}{0}$. This value is **undefined**.

#### **Meaning & Real-Life Application:**
* **Domain Meaning:** The excluded sphere surface $x^2 + y^2 + z^2 = 9$ represents the exact physical boundary layer of the pollutant source (such as the outer wall of a ruptured underground tank). The mathematical model breaks down on this boundary shell.
* **Range Meaning:** While negative concentrations ($C \le -\frac{1}{9}$) lack physical meaning, the positive range segment $(0, \infty)$ shows that concentration values grow rapidly as you move closer to the tank wall.
* **Application to Evaluation:** The undefined evaluation result at $(2,1,2)$ shows that this point sits directly on the structural boundary wall of the leaking containment container. As you approach this coordinate shell from the outside, the modeled chemical concentration shoots toward infinity ($C \to \infty$). Environmental engineers use these boundary locations to safely place monitoring wells and design thick clay containment barriers just outside this sphere to stop the chemical leak from spreading into local groundwater.