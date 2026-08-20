A manufacturing engineer is programming an automated CNC lathe tool path to machine a custom lightweight racing piston head. The top surface profile curve of the piston is modeled by the equation $y = e^{x^2}$ over the interval from $x = 0$ to $x = 1 \text{ cm}$, bounded below by the flat wrist-pin reference line on the $x$-axis ($y = 0$). To construct the solid 3D piston head, the lathe rotates this profile around the component's central structural axis ($y$-axis).

Calculate the exact volume of metal required for this component using a standard $u$-substitution.

**Solution:**

1. **Setup:** Using the vertical shell method formula, the volume integral is structured as:
    
    $$V = \int_{0}^{1} 2\pi \cdot x \cdot e^{x^2} \, dx$$
    
2. **Execution:** Let $u = x^2 \implies du = 2x \, dx \implies x \, dx = \frac{1}{2} \, du$.
    
    - Convert the integration limits: When $x = 0 \implies u = 0$. When $x = 1 \implies u = 1^2 = 1$.
        
        $$V = 2\pi \int_{0}^{1} e^u \cdot \left(\frac{1}{2} \, du\right) = \pi \int_{0}^{1} e^u \, du$$
        
        $$V = \pi \Big[ e^u \Big]_{0}^{1} = \pi (e^1 - e^0) = \pi(e - 1) \text{ cm}^3$$
        

#### Meaning of the Answer & Real-Life Application

The exact volume of the completed piston head component is $\pi(e - 1) \approx 5.40 \text{ cm}^3$. In automated manufacturing, programming software must calculate the exact final volume of a component to cross-reference it with the total volume of the raw metal block fed into the machine. Subtracting the final component volume from the starting block volume tells the production engineer exactly how much metal scrap will be shaved away. This helps factory managers minimize material waste metrics, track tool wear, and estimate precise mass-production raw material costs.