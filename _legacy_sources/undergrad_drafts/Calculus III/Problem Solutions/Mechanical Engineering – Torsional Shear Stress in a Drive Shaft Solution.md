[[Mechanical Engineering – Torsional Shear Stress in a Drive Shaft Solution]]
**Scenario:** A mechanical engineer is assessing the structural loading on a solid steel drive shaft of radius $R = 3\text{ cm}$ used in an industrial generator. When the engine twists the shaft, it introduces torsional shear stress ($\tau$). This shear stress scales linearly relative to the distance away from the center axis, expressed in rectangular coordinates as:

$$\tau(x,y) = 12\sqrt{x^2 + y^2} \quad \text{[Megapascals, MPa]}$$

To calculate the total resisting torque ($T$) generated inside the cross-section of the shaft, the engineer must integrate the product of stress and distance across the circular area of the shaft: $T = \iint_D \sqrt{x^2+y^2} \cdot \tau(x,y) \, dA$.

Convert this double integral into polar coordinates and solve for the internal torque.

#### Solution:

1. **Define the Bounds in Polar Coordinates:**
    
    - The shaft cross-section is a full circle of radius $R = 3\text{ cm}$.
        
    - Radial bounds: $0 \le r \le 3$
        
    - Angular bounds: $0 \le \theta \le 2\pi$
        
2. **Transform the Torque Integrand:**
    
    - Distance from center: $\sqrt{x^2+y^2} = r$
        
    - Stress function: $\tau = 12\sqrt{x^2+y^2} = 12r$
        
    - Full combined integrand: $\text{Distance} \cdot \text{Stress} = r \cdot (12r) = 12r^2$
        
    - Area Element: $dA = r \, dr \, d\theta$
        
3. **Set Up and Evaluate the Integral:**
    
    $$T = \int_{0}^{2\pi} \int_{0}^{3} \left(12r^2\right) \cdot r \, dr \, d\theta = \int_{0}^{2\pi} \int_{0}^{3} 12r^3 \, dr \, d\theta$$
    
    - Evaluate the inner radial integral:
        
        $$\int_{0}^{3} 12r^3 \, dr = \left[ 3r^4 \right]_{0}^{3} = 3(81) - 0 = 243$$
        
    - Evaluate the outer angular integral:
        
        $$T = \int_{0}^{2\pi} 243 \, d\theta = [243\theta]_{0}^{2\pi} = 486\pi \approx 1526.81\text{ N}\cdot\text{cm} = 15.27\text{ N}\cdot\text{m}$$
        

#### Meaning of the Answer & Real-Life Application:

- **The Meaning of the Answer:** The resulting value of $\approx 15.27\text{ N}\cdot\text{m}$ (Newton-meters) is the total magnitude of internal rotational torque being held or transmitted by the cross-section of the shaft.
    
- **How it Applies:** This calculation is vital for preventing mechanical material failure due to twisting fatigue. Mechanical engineers compare this calculated internal torque limit against the yield strength of the selected grade of steel. If the generator's active working torque exceeds this maximum value, the shaft will undergo permanent plastic deformation or catastrophic physical fracture, threatening the entire industrial machinery system.