**Scenario:** A chemical process engineer needs to calculate the volumetric flow rate ($Q$) of a highly viscous polymer blending solution running through a circular delivery pipe of radius $R = 0.5\text{ meters}$. Due to friction along the outer pipe walls, the fluid exhibits a parabolic velocity profile (laminar flow) described in rectangular coordinates as:

$$v(x,y) = 4\left(0.25 - (x^2 + y^2)\right) \quad \text{[meters per second]}$$

To find the total volume of fluid passing through a cross-section per second, the engineer must integrate the velocity over the circular area of the pipe: $\iint_D v(x,y) \, dA$.

Convert this problem to polar coordinates and calculate the volumetric flow rate.

#### Solution:

1. **Define the Bounds in Polar Coordinates:**
    
    - The pipe cross-section is a full circle centered at the origin with radius $R = 0.5\text{ m}$.
        
    - Radial bounds: $0 \le r \le 0.5$
        
    - Angular bounds: $0 \le \theta \le 2\pi$
        
2. **Transform the Velocity Function and Area Element:**
    
    - $v(x,y) = 4(0.25 - (x^2+y^2)) \to v(r) = 4(0.25 - r^2) = 1 - 4r^2$
        
    - $dA = r \, dr \, d\theta$
        
3. **Set Up and Evaluate the Integral:**
    
    $$Q = \int_{0}^{2\pi} \int_{0}^{0.5} (1 - 4r^2) \cdot r \, dr \, d\theta = \int_{0}^{2\pi} \int_{0}^{0.5} \left(r - 4r^3\right) dr \, d\theta$$
    
    - Evaluate the inner radial integral:
        
        $$\int_{0}^{0.5} \left(r - 4r^3\right) dr = \left[ \frac{1}{2}r^2 - r^4 \right]_{0}^{0.5} = \left( \frac{1}{2}(0.25) - (0.0625) \right) = 0.125 - 0.0625 = 0.0625 = \frac{1}{16}$$
        
    - Evaluate the outer angular integral:
        
        $$Q = \int_{0}^{2\pi} \frac{1}{16} \, d\theta = \left[ \frac{1}{16}\theta \right]_{0}^{2\pi} = \frac{2\pi}{16} = \frac{\pi}{8} \approx 0.393\text{ m}^3/\text{s}$$
        

#### Meaning of the Answer & Real-Life Application:

- **The Meaning of the Answer:** The value of $\approx 0.393\text{ m}^3/\text{s}$ (cubic meters per second) represents the total bulk volume of polymer fluid successfully transported through the pipe every second.
    
- **How it Applies:** In chemical manufacturing, this specific calculation directly prevents operational failures. By knowing the precise volumetric output ($Q$), engineers can correctly select and size industrial feed pumps, calculate pressure drops across the pipeline system, and monitor input-to-output ratios to ensure chemicals are mixing in correct stoichiometric proportions further down the assembly line.
    