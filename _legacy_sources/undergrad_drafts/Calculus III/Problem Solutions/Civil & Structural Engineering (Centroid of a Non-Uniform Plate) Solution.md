**Problem:** A structural steel gusset plate used to reinforce a bridge joint is shaped like a general region $R$ in the $xy$-plane, bounded below by the parabola $y = \frac{1}{2}x^2$ and above by the line $y = 2$ (with dimensions in meters). To balance structural dead loads, civil engineers must determine the exact vertical geometric center (the centroid coordinate $\bar{y}$) of the plate. Find $\bar{y}$ using the formula:

$$\bar{y} = \frac{\iint_R y \, dA}{\iint_R 1 \, dA}$$

**Solution:**

1. **Establish Boundaries:**
    
    Find where $y = \frac{1}{2}x^2$ and $y = 2$ intersect:
    
    $$\frac{1}{2}x^2 = 2 \implies x^2 = 4 \implies x = -2 \text{ and } x = 2$$
    
    Setting this up as a Type 1 region: $x \in [-2, 2]$, with a lower bound of $y = \frac{1}{2}x^2$ and an upper bound of $y = 2$.
    
2. **Calculate the Denominator (Total Area, $\iint_R 1 \, dA$):**
    
    $$\text{Area} = \int_{-2}^{2} \int_{\frac{1}{2}x^2}^{2} 1 \, dy \, dx = \int_{-2}^{2} \left( 2 - \frac{1}{2}x^2 \right) \, dx$$
    
    $$\text{Area} = \left[ 2x - \frac{x^3}{6} \right]_{-2}^{2} = \left( 4 - \frac{8}{6} \right) - \left( -4 - \frac{-8}{6} \right) = \frac{16}{3}\text{ m}^2$$
    
3. **Calculate the Numerator ($\iint_R y \, dA$):**
    
    $$\iint_R y \, dA = \int_{-2}^{2} \int_{\frac{1}{2}x^2}^{2} y \, dy \, dx = \int_{-2}^{2} \left[ \frac{y^2}{2} \right]_{\frac{1}{2}x^2}^{2} \, dx$$
    
    $$= \int_{-2}^{2} \left( \frac{4}{2} - \frac{(\frac{1}{2}x^2)^2}{2} \right) \, dx = \int_{-2}^{2} \left( 2 - \frac{x^4}{8} \right) \, dx$$
    
    $$= \left[ 2x - \frac{x^5}{40} \right]_{-2}^{2} = \left( 4 - \frac{32}{40} \right) - \left( -4 - \frac{-32}{40} \right) = 8 - \frac{64}{40} = 8 - 1.6 = 6.4 = \frac{32}{5}$$
    
4. **Compute the Centroid Coordinate $\bar{y}$:**
    
    $$\bar{y} = \frac{32 / 5}{16 / 3} = \frac{32}{5} \times \frac{3}{16} = \frac{2 \times 3}{5} = \frac{6}{5} = 1.2\text{ m}$$
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The value $\bar{y} = 1.2\text{ m}$ indicates that the geometric center of mass sits exactly $1.2\text{ meters}$ above the base coordinate ($y=0$). This value is slightly higher than the physical midpoint of the vertical bounding lines ($y=1.0$), which reflects the fact that the plate narrows at the bottom parabola and holds wider, heavier mass at the top line.
    
- **How it applies in real life:** Bridge engineers must know the exact centroid coordinates of custom fabricated plates to predict where structural vectors and forces compress or twist the joint. Miscalculating the centroid coordinates causes unintended twisting torques (eccentric loading) that can produce cracks and catastrophic metal fatigue under fluctuating heavy traffic loads.
    