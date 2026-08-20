A mechanical engineer is testing a solid alloy transmission axle for an off-road vehicle. When the vehicle accelerates, the internal cumulative shear stress $S$ (in Pascals) along the cross-sectional radius of the shaft is determined by integrating the radius $r$ against the internal thermal-elastic resistance profile:

$$S = \int_{0}^{0.05} \frac{r}{(r^2 + 0.01)^2} \, dr$$

Evaluate the total cumulative shear stress across this section of the shaft.

#### Step-by-Step Solution:

- **Step 1: Recognize the pattern.**
    
    The denominator contains the quadratic term $r^2 + 0.01$ raised to a power. The numerator contains a single linear variable $r$, which is a scalar multiple of the derivative of the inner function.
    
    Let $u = r^2 + 0.01$
    
    Then $du = 2r \, dr \implies \frac{1}{2} \, du = r \, dr$
    
- **Step 2: Change the limits of integration.** Convert the $r$ limits to $u$ limits using $u = r^2 + 0.01$:
    
    - Lower limit: If $r = 0 \implies u = (0)^2 + 0.01 = 0.01$
        
    - Upper limit: If $r = 0.05 \implies u = (0.05)^2 + 0.01 = 0.0025 + 0.01 = 0.0125$
        
- **Step 3: Substitute and integrate.**
    
    $$S = \int_{0.01}^{0.0125} \frac{1}{u^2} \cdot \left(\frac{1}{2} \, du\right) = \frac{1}{2} \int_{0.01}^{0.0125} u^{-2} \, du$$
    
    $$S = \frac{1}{2} \left[ -u^{-1} \right]_{0.01}^{0.0125} = -\frac{1}{2} \left[ \frac{1}{u} \right]_{0.01}^{0.0125}$$
    
- **Step 4: Evaluate the definite boundaries.**
    
    $$S = -\frac{1}{2} \left( \frac{1}{0.0125} - \frac{1}{0.01} \right)$$
    
    $$S = -\frac{1}{2} \left( 80 - 100 \right) = -\frac{1}{2}(-20) = 10 \text{ Pa}$$
    

#### Meaning of the Answer & Engineering Real-Life Application:

The final integration value reveals that the cumulative internal mechanical shear stress experienced by the axle under load is **10 Pascals**.

In mechanical component design, components fail when internal stress concentrations surpass the material's yield strength. Engineers match this integrated stress value directly against the physical specifications of various metals (like carbon steel vs. titanium alloys). If the calculated stress value approaches the metal's breaking point, the engineer knows they must either increase the axle's radius ($r$) or alter the mechanical manufacturing process to prevent the axle from snapping in half under sudden engine acceleration.