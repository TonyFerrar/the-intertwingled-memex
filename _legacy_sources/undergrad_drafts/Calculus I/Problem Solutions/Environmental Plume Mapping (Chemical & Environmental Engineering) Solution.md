**Problem Description:** A subterranean pipe rupture has caused an industrial liquid contaminant to leak out into a thin, uniform circular pool over a flat clay barrier layer. Environmental sensors indicate that as the puddle spreads, its surface area expands at a constant rate of $12\text{ m}^2/\text{hr}$. Field technicians need to set up a containment perimeter ring around the hazard site. Calculate how fast the radius of the toxic spill is pushing outward at the exact moment the radius reaches $15\text{ meters}$.

#### Mathematical Modeling Solution:
1. **Identify Variables:** Let $A$ be the circular surface area of the chemical spill ($\text{m}^2$) and $r$ be the radius of the boundary ($\text{m}$).
2. **Given Data & Goal:** $\frac{dA}{dt} = +12\text{ m}^2/\text{hr}$. At the snapshot, $r = 15\text{ m}$. Find $\frac{dr}{dt}$.
3. **Primary Equation:** $$A = \pi r^2$$
4. **Differentiation & Calculation:** $$\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$
   $$12 = 2\pi (15) \frac{dr}{dt} \implies 12 = 30\pi \frac{dr}{dt} \implies \frac{dr}{dt} = \frac{12}{30\pi} = \frac{2}{5\pi} \approx 0.127\text{ m/hr}$$

#### Meaning of the Answer & Real-Life Application:
* **The Meaning:** The physical radius of the contaminated pool is expanding outward at a speed of $0.127\text{ meters per hour}$ ($12.7\text{ cm/hr}$).
* **Real-Life Engineering Application:** Environmental engineers and emergency containment crews use this output to plan physical safety zones and coordinate disaster logistics. Knowing $\frac{dr}{dt}$ tells the engineers exactly how fast the perimeter is expanding, allowing them to calculate the precise buffer distance required for sandbagging or setting up physical bentonite clay trenches before the expanding wave of toxic chemicals breaches critical boundaries.
