A civil engineer is designing a concrete municipal drinking water reservoir. To ensure uniform structural stress distribution against outward water pressure, the interior basin is designed as a solid of revolution. The cross-sectional footprint of the excavation zone is bounded by the parabola $y = x^2$ and the upper horizontal waterline $y = 9$ (where dimensions are measured in decameters). To incorporate a central structural support pillar, the basin is hollowed out by rotating this region around the vertical shifted line $x = 4$. Find the total water capacity of the reservoir.

#### Modeling Strategy:

Because the rotation occurs around a vertical line ($x = 4$), the slices perpendicular to the axis are horizontal, requiring integration with respect to $y$ ($dy$). We must rewrite our boundaries in terms of $y$: $y = x^2 \implies x = \pm\sqrt{y}$. This region spans from $x = -\sqrt{y}$ on the left to $x = \sqrt{y}$ on the right. Spinning this around the line $x = 4$ forms hollow washers.

- **Outer Radius ($R(y)$):** The distance from the line $x = 4$ to the furthest boundary curve, which is the leftmost half of the parabola ($x = -\sqrt{y}$):
    
    $$R(y) = x_{\text{axis}} - x_{\text{left}} = 4 - (-\sqrt{y}) = 4 + \sqrt{y}$$
    
- **Inner Radius ($r(y)$):** The distance from the line $x = 4$ to the closest boundary curve, which is the rightmost half of the parabola ($x = \sqrt{y}$):
    
    $$r(y) = x_{\text{axis}} - x_{\text{right}} = 4 - \sqrt{y}$$
    
- **Area Function $A(y)$:** Subtracting the inner circular area from the outer circular area simplifies perfectly:
    
    $$A(y) = \pi \left( [R(y)]^2 - [r(y)]^2 \right) = \pi \left( (4 + \sqrt{y})^2 - (4 - \sqrt{y})^2 \right)$$
    
    $$A(y) = \pi \left( (16 + 8\sqrt{y} + y) - (16 - 8\sqrt{y} + y) \right) = \pi (16\sqrt{y}) = 16\pi y^{1/2}$$
    

#### Mathematical Execution:

Integrate the simplified area expression along the vertical axis from $y = 0$ to the waterline $y = 9$:

$$Volume = \int_{0}^{9} 16\pi y^{1/2} \, dy$$

$$Volume = 16\pi \left[ \frac{2}{3}y^{3/2} \right]_{0}^{9}$$

$$Volume = 16\pi \left( \frac{2}{3}(9)^{3/2} - 0 \right) = 16\pi \left( \frac{2}{3}(27) \right) = 16\pi (18) = 288\pi \text{ dam}^3$$

$$Volume \approx 288 \times 3.14159 \approx 904.78 \text{ cubic decameters}$$

#### Meaning of the Answer & Real-Life Application:

The value **$288\pi \text{ dam}^3$** converts directly to **$904,780 \text{ m}^3$** (or approximately $904.78$ million liters) of water storage capacity.

In municipal civil engineering, calculating exact fluid capacity is necessary to ensure reliable water management for a city's infrastructure. The engineer uses this precise volumetric calculation to determine if the reservoir can sustain the local population's water utility demands during a multi-week drought. Additionally, knowing the exact weight of the water volume ($\approx 904,780$ metric tons) allows structural engineers to design a concrete foundation thick enough to prevent shifting, cracking, or catastrophic structural failure under the immense pressure load.