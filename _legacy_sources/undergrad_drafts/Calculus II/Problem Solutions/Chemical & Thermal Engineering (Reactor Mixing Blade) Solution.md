A chemical engineer is designing a highly specialized curved impeller blade for a industrial chemical mixing tank. The curved edge of the blade follows the equation $y = \frac{1}{2}x^3$ cm from $x = 0$ to $x = 1$ cm. The blade element is manufactured by revolving this curve entirely about the central $x$-axis. Find the exact surface area of the blade component.

**Step-by-Step Solution:**

1. **Differentiate and square:**
    
    $$\frac{dy}{dx} = \frac{3}{2}x^2 \implies \left(\frac{dy}{dx}\right)^2 = \frac{9}{4}x^4$$
    
2. **Set up the surface area equation:**
    
    $$S = \int_{0}^{1} 2\pi \left(\frac{1}{2}x^3\right) \sqrt{1 + \frac{9}{4}x^4} \, dx = \pi \int_{0}^{1} x^3 \sqrt{1 + \frac{9}{4}x^4} \, dx$$
    
3. **Execute $u$-substitution with direct boundary conversion:** Let $u = 1 + \frac{9}{4}x^4$, which means $du = 9x^3 \, dx \implies x^3 \, dx = \frac{1}{9}du$.
    
    - Shifting boundaries: When $x=0$, $u = 1 + \frac{9}{4}(0) = 1$. When $x=1$, $u = 1 + \frac{9}{4}(1) = \frac{13}{4}$.
        
        $$S = \pi \int_{1}^{13/4} \sqrt{u} \cdot \frac{1}{9} \, du = \frac{\pi}{9} \int_{1}^{13/4} u^{1/2} \, du$$
        
4. **Evaluate the definite integral:**
    
    $$S = \frac{\pi}{9} \left[ \frac{2}{3}u^{3/2} \right]_{1}^{13/4} = \frac{2\pi}{27} \left( \left(\frac{13}{4}\right)^{3/2} - 1^{3/2} \right)$$
    
    Simplifying the fractional exponent: $\left(\frac{13}{4}\right)^{3/2} = \frac{13\sqrt{13}}{8}$.
    
    $$S = \frac{2\pi}{27} \left( \frac{13\sqrt{13}}{8} - 1 \right) = \frac{2\pi}{27} \left( \frac{13\sqrt{13} - 8}{8} \right) = \frac{\pi}{108}(13\sqrt{13} - 8) \text{ cm}^2$$
    

**Meaning of the Answer & Real-Life Application:**

The calculated surface area simplifies to $\frac{\pi}{108}(13\sqrt{13} - 8) \approx 1.13\text{ cm}^2$. In chemical plant engineering, the surface area of a mixing impeller directly dictates the amount of fluid friction drag and the fluid shear rate inside a reactor. Using this exact integration value, engineers can calculate the precise torque requirements for the mixing motor. If the surface area calculation is inaccurate, the motor could overheat under unexpected fluid drag or fail to mix the solution uniformly, ruining massive batches of chemical product.