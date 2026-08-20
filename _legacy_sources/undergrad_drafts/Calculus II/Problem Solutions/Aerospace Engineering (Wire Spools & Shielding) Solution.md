**Scenario:** An aerospace engineer is designing the internal electronics bay of a satellite. They need to route a highly sensitive communications cable through a curved bulkhead. To fit the structural geometry, the cable must be routed along a specific path defined by the polar spiral $r = 5\theta$ (where $r$ is in inches and $\theta$ is in radians). The cable starts at the center hub ($\theta = 0$) and spirals outward to the edge of the bay at $\theta = 2\pi$. 
**Task:** Calculate the exact physical length of the cable required to make this run. *(For simplicity, set up the integral and use a numerical approximation to solve).*

**Calculation:**
1.  Identify the components:
    *   $r = 5\theta$
    *   $\frac{dr}{d\theta} = 5$
2.  Set up the polar arc length integral:
    $$L = \int_{0}^{2\pi} \sqrt{(5\theta)^2 + (5)^2} \, d\theta$$
    $$L = \int_{0}^{2\pi} \sqrt{25\theta^2 + 25} \, d\theta = \int_{0}^{2\pi} 5\sqrt{\theta^2 + 1} \, d\theta$$
3.  Using trigonometric substitution (or a calculator/integration table) to evaluate:
    $$L = \frac{5}{2} \left[ \theta\sqrt{\theta^2+1} + \ln\left|\theta + \sqrt{\theta^2+1}\right| \right]_{0}^{2\pi}$$
    Evaluating this yields approximately:
    $$L \approx 106.9 \text{ inches}$$

**Meaning of the Answer:** 
The total physical length of the cable required to perfectly trace the curved spiral path from the center out to the edge is approximately 106.9 inches.

**Application to Real-Life:** 
In aerospace and mechanical engineering, physical space and weight are at a massive premium. Engineers cannot simply "guess" how much wire, hydraulic tubing, or composite shielding material is needed to cover a curved frame. Polar arc length formulas allow engineers to calculate the exact material requirements for curved geometries, ensuring cost efficiency and strict weight management for aircraft and spacecraft