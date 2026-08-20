**Problem Description:** During a heavy rainstorm, environmental engineers must manage the water height inside a wedge-shaped concrete detention reservoir. The reservoir is modeled as a right triangular prism where the width at the top is always equal to its depth ($w = h$). The length of the reservoir is a fixed $100\text{ meters}$. If stormwater is rushing into the reservoir, forcing the total volume of trapped water to increase at a rate of $25\text{ m}^3/\text{min}$, track the rate at which the water level is rising when the depth of the water hits $4\text{ meters}$.

#### Mathematical Modeling Solution:
1. **Identify Variables:** Let $V$ be the volume of water ($\text{m}^3$), $h$ be the depth ($\text{m}$), and $w$ be the surface width ($\text{m}$). The length $L = 100\text{ m}$ is static.
2. **Given Data & Goal:** $\frac{dV}{dt} = +25\text{ m}^3/\text{min}$. At the snapshot, $h = 4\text{ m}$. Find $\frac{dh}{dt}$.
3. **Primary Equation:** The volume of a triangular prism is the area of the triangular cross-section multiplied by the length:
   $$V = \left(\frac{1}{2} \cdot w \cdot h\right) \cdot L$$
   Since the constraint states $w = h$, substitute this into the equation before differentiating:
   $$V = \frac{1}{2}h^2(100) \implies V = 50h^2$$
4. **Differentiation & Calculation:** $$\frac{dV}{dt} = 100h\frac{dh}{dt}$$
   $$25 = 100(4)\frac{dh}{dt} \implies 25 = 400\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{25}{400} = 0.0625\text{ m/min}$$

#### Meaning of the Answer & Real-Life Application:
* **The Meaning:** The water level is rising at a vertical rate of $0.0625\text{ meters per minute}$ (or $6.25\text{ cm/min}$). 
* **Real-Life Engineering Application:** Civil engineers use this specific rate calculation to prevent catastrophic dam failures or urban flash flooding. If sensor telemetry shows $\frac{dh}{dt}$ is too high, it tells engineers exactly how much time remains before the reservoir breaches its emergency spillway walls. This allows them to calculate how wide to open the downstream auxiliary discharge gates to safely stabilize the structural load.
