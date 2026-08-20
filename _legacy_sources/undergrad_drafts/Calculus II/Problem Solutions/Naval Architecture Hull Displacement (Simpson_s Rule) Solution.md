**Problem:** A naval architect is designing a 20-meter-long boat. To ensure the ship will float properly, the engineer measures the cross-sectional area of the submerged hull at 5 evenly spaced measurement stations ($n = 4$) from the front (bow) to the back (stern). The measured cross-sectional areas are:

- $y_0 = 0 \text{ m}^2$ (at the bow tip)
    
- $y_1 = 12 \text{ m}^2$
    
- $y_2 = 18 \text{ m}^2$ (widest center section)
    
- $y_3 = 10 \text{ m}^2$
    
- $y_4 = 0 \text{ m}^2$ (at the stern tip)
    

Use Simpson's Rule to calculate the total submerged volume of the hull.

**Step-by-Step Solution:**

1. **Find the step size:** The total length is 20 meters across $n = 4$ intervals.
    
    $$\Delta x = \frac{20 - 0}{4} = 5 \text{ meters}$$
    
2. **Apply Simpson's Rule directly to the area data points:**
    
    $$S(4) = \frac{\Delta x}{3} \left[ y_0 + 4y_1 + 2y_2 + 4y_3 + y_4 \right]$$
    
    $$S(4) = \frac{5}{3} \left[ 0 + 4(12) + 2(18) + 4(10) + 0 \right]$$
    
    $$S(4) = \frac{5}{3} \left[ 0 + 48 + 36 + 40 + 0 \right]$$
    
    $$S(4) = \frac{5}{3} \left[ 124 \right] = \frac{620}{3} \approx 206.67 \text{ m}^3$$
    

**Meaning of the Answer & Real-Life Application:**

The calculated answer of $206.67 \text{ m}^3$ represents the total physical volume of the ship's hull that sits beneath the water line. By multiplying this integrated volumetric value by the standard density of seawater ($\approx 1025 \text{ kg/m}^3$), engineers compute the ship's overall mass displacement (approximately $211,837 \text{ kg}$ or $211.8$ metric tonnes). This calculation dictates exactly how much steel, fuel, and cargo the vessel can safely hold before running the risk of capsizing or riding dangerously low in the water.