An aerospace engineer is designing a lightweight titanium component housing for a micro-turbojet engine. The profile design boundary matches the curve $y = e^{x^2}$ from $x = 0$ to $x = 1 \text{ cm}$, bounded below by the $x$-axis ($y = 0$). To manufacture it, this cross-section is rotated around the engine's central core line ($y$-axis).

Using **Skill 1**, justify why the shell method must be used instead of the washer method, then calculate the exact volume of titanium required.

**Solution:**

1. **Skill 1 Justification:** If we attempted to use the washer method, we would slice perpendicularly to the $y$-axis, requiring us to invert the equation to match a $dy$ integral. Inverting $y = e^{x^2}$ gives $x = \sqrt{\ln(y)}$. Integrating the square of this function requires integrating $\ln(y)$, which adds unnecessary algebraic steps. The shell method allows us to slice parallel to the $y$-axis, keeping our function as a $dx$ integral where the radius $x$ acts as an ideal $u$-substitution derivative helper.
    
2. **Setup:**
    
    $$V = \int_{0}^{1} 2\pi \cdot x \cdot e^{x^2} \, dx$$
    
3. **Integration via $u$-substitution:** Let $u = x^2$, so $du = 2x \, dx \implies x \, dx = \frac{1}{2} \, du$.
    
    - Limits: $x = 0 \implies u = 0$; $x = 1 \implies u = 1$.
        
        $$V = 2\pi \int_{0}^{1} e^u \cdot \left(\frac{1}{2} \, du\right) = \pi \int_{0}^{1} e^u \, du = \pi \left[ e^u \right]_{0}^{1} = \pi(e - 1) \text{ cm}^3$$
        

#### Meaning of the Answer & Real-Life Application

The calculated volume is exactly $\pi(e - 1) \approx 5.40 \text{ cm}^3$. In aerospace design, knowing the precise volumetric displacement of a curved component allows the engineer to multiply it by the structural density of titanium ($\approx 4.5 \text{ g/cm}^3$) to calculate the component's exact physical weight ($24.3 \text{ grams}$) long before a prototype is ever manufactured. This ensures the engine satisfies strict payload limitations and maintains rotational balance at high RPMs.