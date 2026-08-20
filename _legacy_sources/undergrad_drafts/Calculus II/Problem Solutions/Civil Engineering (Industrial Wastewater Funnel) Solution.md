A civil engineer is overseeing the construction of a curved concrete wastewater sediment funnel. The inner profile of the funnel basin is determined by revolving the region bounded by $x = \sqrt{y}$, $x = 0$, and $y = 4 \text{ meters}$ around the horizontal surface line ($x$-axis).

Using **Skill 1**, establish the correct variable layout to find the volume capacity of the structural funnel.

**Solution:**

1. **Skill 1 Layout:** The rotation occurs about a horizontal line ($x$-axis). To keep slices parallel to this horizontal axis, the engineer must visualize horizontal slices stacked from the bottom of the basin up to the rim ($y = 0$ to $y = 4$). Slices with horizontal thickness require integrating with respect to $y$ ($dy$).
    
2. **Setup:**
    
    - $\text{Radius } r(y) = y$
        
    - $\text{Height } h(y) = \text{Right} - \text{Left} = \sqrt{y} - 0 = y^{1/2}$
        
3. **Integration:**
    
    $$V = \int_{0}^{4} 2\pi \cdot y \cdot (y^{1/2}) \, dy = 2\pi \int_{0}^{4} y^{3/2} \, dy$$
    
    $$V = 2\pi \left[ \frac{2}{5}y^{5/2} \right]_{0}^{4} = \frac{4\pi}{5} \left( 4^{5/2} \right) = \frac{4\pi}{5}(32) = \frac{128\pi}{5} \text{ m}^3$$
    

#### Meaning of the Answer & Real-Life Application

The volume capacity of the basin is exactly $\frac{128\pi}{5} \approx 80.42 \text{ m}^3$. For civil infrastructure, calculating the interior spatial volume is vital to determine the maximum fluid hold capacity of the water treatment site. Since $1 \text{ m}^3$ holds exactly $1,000 \text{ liters}$ of water, the engineer now knows this specific structural design can handle a maximum active sediment load of $80,420 \text{ liters}$ before overflowing, allowing them to pair it with the appropriate industrial drainage pumps.