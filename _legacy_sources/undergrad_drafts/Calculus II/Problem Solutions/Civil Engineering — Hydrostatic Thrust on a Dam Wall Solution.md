A vertical, rectangular concrete dam wall is built to hold back a drinking water reservoir. The wall is $30\text{ meters}$ wide, and the water depth reaches a maximum of $12\text{ meters}$. Fluid mechanics dictates that hydrostatic pressure is depth-dependent and follows the variable function $P(y) = \rho g y$, where:
* $y$ is the depth measured down from the water surface ($y = 0$ at the top, $y = 12$ at the bottom).
* $\rho$ (water density) $= 1000\text{ kg/m}^3$.
* $g$ (gravitational acceleration) $= 9.8\text{ m/s}^2$.

Calculate the total hydrostatic force (thrust) exerted by the water against the dam wall.

#### Calculus Setup & Solution:
1. **Slice the system:** Divide the vertical wall into thin horizontal rectangular strips of thickness $\Delta y$ at a depth of $y$.
2. **Model a single slice:** The area of a single strip is $\text{Width} \times \text{Thickness} = 30 \cdot \Delta y$. The hydrostatic force acting on a single slice is:
   $$\Delta F = \text{Pressure} \times \text{Area} = (\rho g y) \cdot (30 \Delta y) = 30\rho g y \Delta y$$
3. **Integrate across the domain:** Accumulate all force slices from depth $y = 0$ to $y = 12$:
   $$F = \int_{0}^{12} 30\rho g y \, dy = 30\rho g \int_{0}^{12} y \, dy$$
   $$F = 30(1000)(9.8) \left[ \frac{y^2}{2} \right]_{0}^{12}$$
   $$F = 294,000 \cdot \left( \frac{12^2}{2} - 0 \right) = 294,000 \cdot 72 = 21,168,000\text{ Newtons}$$

#### Meaning of the Answer & Real-Life Engineering Application:
* **The Meaning:** The answer of **$21.168\text{ Mega-Newtons (MN)}$** represents the massive cumulative crushing force pushing outward against the concrete wall due to the weight of the water. 
* **The Engineering Application:** Civil and structural engineers use this exact force profile to design the physical geometry of the dam. Because the pressure and resultant force increase linearly with depth, dams are not built as uniform blocks; they are designed with a **trapezoidal cross-section** (thin at the top and extremely thick at the base). This total force calculation tells engineers precisely how wide the base must be to prevent the entire dam from tipping over, sliding forward on its foundations, or shearing apart under the continuous load.
