**Problem:** An aerospace engineer is designing a custom aluminum structural bracket for a satellite housing. The cross-section of the bracket is shaped like a wedge region $R$ bounded by $y = 0$, $x = 4$, and $y = \sqrt{x}$. To determine the component's resistance to twisting forces (torsion), the engineer must calculate the polar moment of inertia $J_y$ using the following integral:

$$J_y = \int_{0}^{4} \int_{0}^{\sqrt{x}} x^2 \, dy \, dx$$

To double-check the structural code script, switch the order of integration to a Type 2 layout ($dx \, dy$) and evaluate the expression.

**Solution:**

1. **Extract the original bounds and invert functions:**
    
    The original Type 1 bounds are $0 \le x \le 4$ and $0 \le y \le \sqrt{x}$.
    
    Inverting the top curve: $y = \sqrt{x} \implies x = y^2$ (since $y \ge 0$).
    
2. **Determine new Type 2 limits from the geometry:**
    
    The region starts at $(0,0)$ and ends at the maximum point where $x=4 \implies y = \sqrt{4} = 2$.
    
    - The outer constant bounds for $y$ run from $y = 0$ to $y = 2$.
        
    - Taking a horizontal slice, it enters the region at the curve $x = y^2$ and exits at the vertical boundary line $x = 4$.
        
3. **Set up and evaluate the switched integral:**
    
    $$J_y = \int_{0}^{2} \int_{y^2}^{4} x^2 \, dx \, dy$$
    
    _Inner Integral ($dx$):_
    
    $$\int_{y^2}^{4} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{y^2}^{4} = \frac{(4)^3}{3} - \frac{(y^2)^3}{3} = \frac{64}{3} - \frac{y^6}{3}$$
    
    _Outer Integral ($dy$):_
    
    $$J_y = \int_{0}^{2} \left( \frac{64}{3} - \frac{y^6}{3} \right) \, dy = \left[ \frac{64}{3}y - \frac{y^7}{21} \right]_{0}^{2}$$
    
    Evaluate at $y = 2$:
    
    $$= \left( \frac{64}{3}(2) - \frac{(2)^7}{21} \right) - 0 = \frac{128}{3} - \frac{128}{21}$$
    
    Find a common denominator ($21$):
    
    $$= \frac{896}{21} - \frac{128}{21} = \frac{768}{21} = \frac{256}{7} \approx 36.57\text{ mm}^4$$
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The value $\frac{256}{7}$ represents the second moment of area relative to the y-axis, quantifying how the geometric shape resists rotational deflection around that line based on how far its area is distributed from the origin.
    
- **How it applies in real life:** Mechanical and aerospace engineers use moments of inertia to calculate whether a structural bracket will warp or break when a satellite undergoes heavy vibrations during a rocket launch. Switching the order of integration allows CAD/CAE software or engineers validating software outputs to solve geometric properties with less computational steps, minimizing the chance of mathematical rounding or modeling errors.
    