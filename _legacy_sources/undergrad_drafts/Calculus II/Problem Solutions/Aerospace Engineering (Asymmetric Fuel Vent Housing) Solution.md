An aerospace propulsion engineer is designing a curved protective metal casing that shields a high-pressure rocket fuel vent. The interior clearance contour of the housing follows the curve $y = \sqrt{x-2}$ from an inner radius of $x = 2 \text{ cm}$ to an outer sealing rim at $x = 6 \text{ cm}$. The boundary is capped below by the injector's mechanical sealing plate on the $x$-axis ($y = 0$). The structural housing is formed by revolving this cross-section around the central fuel line ($y$-axis).

Find the total material volume enclosed within this protective structural shell using algebraic back-substitution.

**Solution:**

1. **Setup:** Applying the vertical shell method theorem yields:
    
    $$V = 2\pi \int_{2}^{6} x\sqrt{x-2} \, dx$$
    
2. **Execution:** Let $u = x - 2 \implies du = dx$.
    
    - Isolate the remaining outer variable $x$ by performing a change of variables: $x = u + 2$.
        
    - Convert the integration limits:
        
        - Lower limit: When $x = 2 \implies u = 2 - 2 = 0$.
            
        - Upper limit: When $x = 6 \implies u = 6 - 2 = 4$.
            
3. **Substitute and Integrate:**
    
    $$V = 2\pi \int_{0}^{4} (u + 2)u^{1/2} \, du = 2\pi \int_{0}^{4} (u^{3/2} + 2u^{1/2}) \, du$$
    
    $$V = 2\pi \left[ \frac{2}{5}u^{5/2} + 2\left(\frac{2}{3}u^{3/2}\right) \right]_{0}^{4} = 2\pi \left[ \frac{2}{5}u^{5/2} + \frac{4}{3}u^{3/2} \right]_{0}^{4}$$
    
    $$V = 2\pi \left( \left[ \frac{2}{5}(32) + \frac{4}{3}(8) \right] - 0 \right) = 2\pi \left( \frac{64}{5} + \frac{32}{3} \right)$$
    
    $$V = 2\pi \left( \frac{192 + 160}{15} \right) = \frac{704\pi}{15} \text{ cm}^3$$
    

#### Meaning of the Answer & Real-Life Application

The exact structural volume of the protective shield housing is $\frac{704\pi}{15} \approx 147.45 \text{ cm}^3$. For aerospace applications, calculating the exact material volume is vital to determine the physical mass of a component prior to manufacturing. By multiplying this volume by the material density of the chosen alloy (such as aluminum or titanium), engineers can verify that the component satisfies strict total vehicle payload weight restrictions while ensuring the protective casing wall remains thick enough to withstand extreme flight forces and thermal pressures.