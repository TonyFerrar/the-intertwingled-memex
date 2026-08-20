A CNC machinist must program a precise cutting path for an experimental parabolic mirror bracket. The path follows the curve $y = \frac{x^2}{4} - \frac{\ln(x)}{2}$ from $x = 1$ to $x = 2$ cm. Calculate the exact length of the toolpath to optimize cutting time.

**Step-by-Step Solution:**

1. **Differentiate:**
    
    $$\frac{dy}{dx} = \frac{2x}{4} - \frac{1}{2x} = \frac{x}{2} - \frac{1}{2x}$$
    
2. **Square the derivative:** Note that the middle term expansion is $2(\frac{x}{2})(\frac{1}{2x}) = \frac{1}{2}$.
    
    $$\left(\frac{dy}{dx}\right)^2 = \frac{x^2}{4} - \frac{1}{2} + \frac{1}{4x^2}$$
    
3. **Add 1 to flip the sign:**
    
    $$1 + \left(\frac{dy}{dx}\right)^2 = 1 + \frac{x^2}{4} - \frac{1}{2} + \frac{1}{4x^2} = \frac{x^2}{4} + \frac{1}{2} + \frac{1}{4x^2}$$
    
4. **Factor into a perfect square:**
    
    $$\frac{x^2}{4} + \frac{1}{2} + \frac{1}{4x^2} = \left(\frac{x}{2} + \frac{1}{2x}\right)^2$$
    
5. **Integrate to find the arc length:** Cancel the radical:
    
    $$L = \int_{1}^{2} \left(\frac{x}{2} + \frac{1}{2}x^{-1}\right) \, dx = \left[ \frac{x^2}{4} + \frac{1}{2}\ln(x) \right]_{1}^{2}$$
    
    $$L = \left(\frac{4}{4} + \frac{1}{2}\ln(2)\right) - \left(\frac{1}{4} + \frac{1}{2}\ln(1)\right) = 1 + \frac{1}{2}\ln(2) - \frac{1}{4} = \frac{3}{4} + \frac{1}{2}\ln(2) \text{ cm}$$
    

**Meaning of the Answer & Real-Life Application:**

The exact toolpath distance is $\frac{3}{4} + \frac{1}{2}\ln(2) \approx 1.10$ cm. In automated manufacturing, a CNC machine cannot guess paths; it relies on exact line coordinates to maintain a constant "feed rate" (velocity). Knowing the exact arc length down to a fraction of a millimeter allows engineers to calculate the exact cycle run-time and prevents the machine tool from lingering too long on a curve, which would cause friction spikes, overheat the metal alloy, and potentially snap expensive diamond-tipped drill bits.