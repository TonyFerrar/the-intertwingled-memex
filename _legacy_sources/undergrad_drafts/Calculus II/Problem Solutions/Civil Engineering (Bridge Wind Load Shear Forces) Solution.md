A structural engineer is analyzing a $6\text{-meter}$ support beam on a suspension bridge subject to variable vertical wind shear force $w(x)$ (measured in kilonewtons per meter, $\text{kN/m}$). An upward gust creates a lifting force forming a right triangle from $x = 0$ to $x = 4\text{ meters}$, peaking at $+3\text{ kN/m}$. Concurrently, localized structural deadweight creates a downward crushing force forming a rectangle from $x = 4$ to $x = 6\text{ meters}$ with a constant magnitude of $-2\text{ kN/m}$.

Find the net vertical force exerted on the beam by evaluating:

$$\int_{0}^{6} w(x) \, dx$$

#### Step-by-Step Solution:

1. **Calculate Upward Wind Lift ($x = 0$ to $x = 4$):**
    
    - Triangle: $\text{base} = 4$, $\text{height} = 3$
        
    - $\text{Area}_{\text{lift}} = \frac{1}{2} \times 4 \times 3 = 6\text{ kN}$ (Positive)
        
2. **Calculate Downward Load ($x = 4$ to $x = 6$):**
    
    - Rectangle: $\text{base} = 2$, $\text{height} = 2$
        
    - $\text{Area}_{\text{down}} = 2 \times 2 = 4\text{ kN}$ (Negative)
        
3. **Compute Net Force:**
    
    $$\int_{0}^{6} w(x) \, dx = 6 - 4 = +2\text{ kN}$$
    

#### Engineering Meaning of the Answer:

> The definite integral evaluates to **$+2\text{ kN}$**. This positive value tells the civil engineer that despite the heavy localized downward crushing load on the right side of the beam, the net aerodynamic effect of the wind is an **overall lifting force**. When designing the bridge's joints, the engineer must ensure the anchor bolts are rated for _tension_ (preventing the beam from being ripped upward) rather than just designing the foundations to handle downward _compression_.