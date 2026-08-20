**Problem:** A naval architect is modeling the cross-sectional area of a ship's lower hull submerged under water. The symmetric profile of one side of the hull is bounded by the vertical centerline $x = 0$, the water surface line $y = 3$, and the curved hull line $x = \ln(y)$ (with units in meters). The static pressure distribution requires evaluating the integral:

$$M = \int_{1}^{3} \int_{0}^{\ln(y)} y \, dx \, dy$$

To simplify optimization formulas, **switch the order of integration** to a Type 1 layout ($dy \, dx$) and evaluate $M$.

**Solution:**

1. **Extract the original bounds and invert the function:**
    
    The original Type 2 horizontal bounds are $1 \le y \le 3$ and $0 \le x \le \ln(y)$.
    
    Inverting the curve to solve for $y$: $x = \ln(y) \implies y = e^x$.
    
2. **Determine new Type 1 limits from the geometry:**
    
    The region begins horizontally at $x = 0$. The maximum value of $x$ occurs at the water surface line where $y = 3 \implies x = \ln(3)$.
    
    - The constant bounds for $x$ are $0 \le x \le \ln(3)$.
        
    - Taking a vertical slice, it enters the region at the lower curved hull line $y = e^x$ and exits at the flat water line $y = 3$.
        
        New bounds: $0 \le x \le \ln(3)$ and $e^x \le y \le 3$.
        
3. **Set up and evaluate the switched integral:**
    
    $$M = \int_{0}^{ln(3)} \int_{e^x}^{3} y \, dy \, dx$$
    
    _Inner Integral ($dy$):_
    
    $$\int_{e^x}^{3} y \, dy = \left[ \frac{y^2}{2} \right]_{e^x}^{3} = \frac{(3)^2}{2} - \frac{(e^x)^2}{2} = \frac{9}{2} - \frac{1}{2}e^{2x}$$
    
    _Outer Integral ($dx$):_
    
    $$M = \int_{0}^{ln(3)} \left( \frac{9}{2} - \frac{1}{2}e^{2x} \right) \, dx = \left[ \frac{9}{2}x - \frac{1}{4}e^{2x} \right]_{0}^{ln(3)}$$
    
    Evaluate at the limits:
    
    $$= \left( \frac{9}{2}\ln(3) - \frac{1}{4}e^{2\ln(3)} \right) - \left( 0 - \frac{1}{4}e^0 \right)$$
    
    Since $e^{2\ln(3)} = e^{\ln(3^2)} = 9$:
    
    $$= \left( \frac{9}{2}\ln(3) - \frac{9}{4} \right) + \frac{1}{4} = \frac{9}{2}\ln(3) - \frac{8}{4} = \frac{9}{2}\ln(3) - 2 \approx 2.944$$
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The numerical value represents a specialized geometric-pressure moment of the submerged profile, capturing how the water volume interacts with the curving slope of the hull plate.
    
- **How it applies in real life:** When a ship rolls in rough seas, the shape of the submerged hull section changes dynamically, shifting the center of buoyancy. Naval architects evaluate these integrals over switched, simplified bounds to quickly simulate buoyancy stability curves, ensuring that if a vessel tilts due to high waves, the hydrodynamics create a natural righting moment that prevents the ship from capsizing.