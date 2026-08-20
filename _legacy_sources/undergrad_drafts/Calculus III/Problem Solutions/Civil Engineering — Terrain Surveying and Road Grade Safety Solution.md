A civil engineer models the localized elevation profile $z$ (in hundreds of meters) of a rocky hillside using the following radical function based on surveyed coordinate grids $x$ and $y$ (measured in kilometers from a base station):
$$z = f(x,y) = \sqrt{16 - x^2 - y^2}$$

A planned road layout requires heavy equipment to navigate coordinates at the point $(3, 2)$.

1. Determine the mathematical domain and range of this terrain function.
2. Evaluate if the point $(3, 2)$ can be safely plotted within the valid landscape domain.
3. **Meaning & Real-Life Application:** Explain what the domain, range, and evaluation results represent for safety, construction site boundaries, and project limits.

#### **Solution:**
1. **Domain and Range:**
   * **Domain:** The terrain exists where $16 - x^2 - y^2 \ge 0 \implies x^2 + y^2 \le 16$. This represents a circular region of land with a radius of $4\text{ km}$ surrounding the base station.
   * **Range:** Inside this region, $x^2 + y^2$ varies from $0$ to $16$. The elevation $z$ varies from $\sqrt{16-16}=0$ to $\sqrt{16-0}=4$. In actual units, the elevation ranges between $0\text{ meters}$ and $400\text{ meters}$.
2. **Point Evaluation:**
   * Substitute $(3,2)$ into the domain condition: $3^2 + 2^2 = 9 + 4 = 13$. Since $13 \le 16$, the point sits inside the domain. 
   * The terrain elevation at this location is $z = \sqrt{16 - 13} = \sqrt{3} \approx 1.732$, which corresponds to $173.2\text{ meters}$ above the base level.

#### **Meaning & Real-Life Application:**
* **Domain Meaning:** The domain establishes the physical boundary lines for the project layout. Beyond the boundary $x^2 + y^2 = 16$, the radical function ceases to yield real values, indicating that the mathematical model drops off (e.g., a steep vertical cliff edge or the edge of the surveyed land tracking grid). Surveying equipment cannot map coordinates outside this disk.
* **Range Meaning:** The range specifies the absolute height extremes of the land ($0$ to $400\text{ m}$). Knowing the maximum elevation ($400\text{ m}$ at the origin center) allows structural engineers to plan drainage patterns and predict high-pressure runoff flow velocities.
* **Application to Evaluation:** Finding that $(3,2)$ sits inside the domain tells road designers that solid ground exists at those coordinates. The resulting height computation ($173.2\text{ m}$) is vital for calculating the road grade (slope). If the elevation changes too quickly between adjacent grid points, construction equipment cannot safely navigate the climb without cutting away earth to level the path.
