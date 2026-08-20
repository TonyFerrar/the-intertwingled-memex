Aerospace engineers are analyzing the laminar flow of high-viscosity jet fuel through a cylindrical fuel injection nozzle. Due to fluid friction against the inner walls of the nozzle, the velocity of the fuel varies based on its distance $r$ (in millimeters) from the center axis. To derive a general mathematical function for the cumulative volumetric flow rate $Q(r)$ (in cubic millimeters per second) from the center out to a given radial distance, the engineer must evaluate the indefinite area integral:

$$Q(r) = \int \frac{6r}{(1 + r^2)^2}\,dr$$

#### **Mathematical Solution using Skill 1:**

1. **Identify the Target (Structural Vision):** The expression $(1 + r^2)$ is trapped inside a power in the denominator. We set our target:
    
    $$u = 1 + r^2$$
    
2. **Compute the Differential Package:** Taking the derivative yields $du = 2r\,dr$. We isolate the structural match needed for the numerator ($6r\,dr$) by multiplying both sides by 3:
    
    $$3\,du = 6r\,dr$$
    
3. **Substitute and Evaluate:** Rewrite the integral using our $u$ terms:
    
    $$\int \frac{3}{u^2}\,du = 3 \int u^{-2}\,du = 3 \left( \frac{u^{-1}}{-1} \right) + C = -\frac{3}{u} + C$$
    
4. **Revert back to the original domain:** Substitute $1 + r^2$ back in for $u$:
    
    $$Q(r) = -\frac{3}{1+r^2} + C$$
    

#### **The Physical Meaning & Application:**

- **Meaning of the Answer:** The derived function, $Q(r) = -\frac{3}{1+r^2} + C$, represents the **general cumulative profile of fuel volume moving through the nozzle per second** relative to the radial geometry of the tube.
    
- **Real-Life Engineering Application:** Aerospace engineers require the general indefinite integral function to optimize fuel system parameters. Because different jet models use different nozzle pipe sizes ($R$), having the un-bounded general function allows engineers to easily analyze varied nozzle designs without re-calculating the calculus from scratch. They use this profile to calibrate digital engine control units, ensuring the exact right fuel-to-air ratio is maintained at different pipe radii to support stable combustion and prevent engine stalls mid-flight.