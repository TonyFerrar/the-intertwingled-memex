Mechanical engineers are designing internal cooling passages for a high-efficiency gas turbine blade. The rate of heat energy dissipation per unit length changes drastically along the radial distance $r$ (in centimeters) from the rotor hub due to varying centrifugal forces and gas temperatures. The heat dissipation profile requires evaluating an exponential rate function. To determine the general equation for the total cumulative thermal energy dissipated $E(r)$ (in Joules), the engineer must evaluate the following indefinite integral:

$$E(r) = \int r^2 e^{-0.5r^3}\,dr$$

#### **Mathematical Solution using Skill 2:**

1. **Identify the Target (Structural Vision):** The inner function is the cubic expression inside the exponential power: $u = -0.5r^3$.
    
2. **Compute the Differential:** Taking the derivative yields:
    
    $$du = -1.5r^2\,dr$$
    
3. **Balance the Differential (Skill 2):** The integrand contains $r^2\,dr$, but our differential package includes a $-1.5$ multiplier. We balance the equation by dividing by $-1.5$ (which is $-\frac{3}{2}$):
    
    $$-\frac{2}{3}du = r^2\,dr$$
    
4. **Substitute and Evaluate:** Substitute $u$ and the balanced differential package into the expression:
    
    $$\int e^u \left(-\frac{2}{3}du\right) = -\frac{2}{3}\int e^u\,du = -\frac{2}{3}e^u + C$$
    
5. **Revert back to the original domain:** Substitute $-0.5r^3$ back in for $u$:
    
    $$E(r) = -\frac{2}{3}e^{-0.5r^3} + C$$
    

#### **The Physical Meaning & Application:**

- **Meaning of the Answer:** The derived function, $E(r) = -\frac{2}{3}e^{-0.5r^3} + C$, represents the **general mathematical profile of cumulative heat energy dissipation** radiating out from the base of the turbine rotor.
    
- **Real-Life Engineering Application:** In power plants and jet engines, turbine blades operate near the melting point of their target alloys. Mechanical engineers embed this general indefinite expression into thermodynamic simulation software to analyze thermal gradients under varying load conditions. This allows them to design internal cooling air pathways that scale perfectly with the radial geometry, preventing local hot spots that could cause catastrophic structural creep or blade snapping mid-operation.