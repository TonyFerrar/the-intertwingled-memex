A high-voltage power line hanging between two utility towers is modeled by the catenary curve $y = \frac{5}{2}(e^{x/5} + e^{-x/5})$ over the horizontal span $x \in [-5, 5]$ meters. Find the total physical length of the cable required.

**Step-by-Step Solution:**

1. **Find the derivative:** Use the exponential derivative rule and chain rule.
    
    $$\frac{dy}{dx} = \frac{5}{2}\left(\frac{1}{5}e^{x/5} - \frac{1}{5}e^{-x/5}\right) = \frac{1}{2}(e^{x/5} - e^{-x/5})$$
    
2. **Square the derivative:**
    
    $$\left(\frac{dy}{dx}\right)^2 = \frac{1}{4}(e^{2x/5} - 2 + e^{-2x/5})$$
    
3. **Simplify the expression inside the root ($1 + (y')^2$):**
    
    $$1 + \frac{1}{4}(e^{2x/5} - 2 + e^{-2x/5}) = \frac{1}{4}(e^{2x/5} + 2 + e^{-2x/5}) = \left[\frac{1}{2}(e^{x/5} + e^{-x/5})\right]^2$$
    
4. **Set up and solve the integral:**
    
    $$L = \int_{-5}^{5} \sqrt{\left[\frac{1}{2}(e^{x/5} + e^{-x/5})\right]^2} \, dx = \int_{-5}^{5} \frac{1}{2}(e^{x/5} + e^{-x/5}) \, dx$$
    
    Integrate using basic exponential rules:
    
    $$L = \left[ \frac{5}{2}e^{x/5} - \frac{5}{2}e^{-x/5} \right]_{-5}^{5}$$
    
    $$L = \left(\frac{5}{2}e^{1} - \frac{5}{2}e^{-1}\right) - \left(\frac{5}{2}e^{-1} - \frac{5}{2}e^{1}\right) = 5(e - e^{-1}) \text{ meters}$$
    

**Meaning of the Answer & Real-Life Application:**

The calculated value $5(e - e^{-1}) \approx 11.75$ meters represents the actual physical length of copper-aluminum wire that must be manufactured and reeled out to span a 10-meter horizontal gap between two towers. In power-grid engineering, knowing this exact value allows teams to calculate the line tension. If the line is cut too short, thermal contraction during winter freezes will over-tension the wire and snap the line; if it is cut too long, the wire will droop into ground-clearance safety zones, creating wildfire hazards.
