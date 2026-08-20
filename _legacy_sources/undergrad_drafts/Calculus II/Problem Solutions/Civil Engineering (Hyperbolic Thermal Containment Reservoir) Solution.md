A civil engineer is designing a concrete containment basin for hot industrial runoff. The internal containment wall follows the curve $x = y^2 + 2$ from a base height of $y = 0$ to a rim height of $y = 2 \text{ meters}$. The outer boundary of the containment structure is fixed at a flat outer radius of $x = 6 \text{ meters}$. To integrate an underground drainage track beneath the foundation, the entire cross-section is rotated around an anchor reference line located at the horizontal line $y = -1 \text{ meter}$.

Using **Skill 2**, formulate the shell components to find the total volume of concrete needed to construct this reservoir.

**Solution:**

1. **Component Setup:** The axis of rotation is the horizontal line $y = -1$. Slicing parallel to this axis requires horizontal slices ($dy$) spanning vertically from $y = 0$ to $y = 2$.
    
2. **Radius Formulation ($r(y)$):** The horizontal axis of rotation lies **below** the region $[0, 2]$. The vertical distance from a horizontal slice at height $y$ to the line $y = -1$ is $y - L$:
    
    $$r(y) = y - (-1) = y + 1$$
    
3. **Height Formulation ($h(y)$):** The horizontal length of a slice is determined by the rightmost boundary minus the leftmost boundary:
    
    $$h(y) = \text{Right} - \text{Left} = 6 - (y^2 + 2) = 4 - y^2$$
    
4. **Integration:**
    
    $$V = \int_{0}^{2} 2\pi (y + 1)(4 - y^2) \, dy = 2\pi \int_{0}^{2} (4y - y^3 + 4 - y^2) \, dy$$
    
    $$V = 2\pi \left[ 2y^2 - \frac{y^4}{4} + 4y - \frac{y^3}{3} \right]_{0}^{2} = 2\pi \left( 8 - 4 + 8 - \frac{8}{3} \right)$$
    
    $$V = 2\pi \left( 12 - \frac{8}{3} \right) = 2\pi \left( \frac{28}{3} \right) = \frac{56\pi}{3} \text{ m}^3$$
    

#### Meaning of the Answer & Real-Life Application

The exact volume of concrete needed to pour the containment basin is $\frac{56\pi}{3} \approx 58.64 \text{ cubic meters}$. In large-scale civil works, structural materials like concrete are mixed and ordered by volume. By establishing the exact radius profile relative to the offset underground track ($y = -1$), the engineer can generate an exact material cost estimate, determine the required number of concrete mixing trucks for a continuous pour, and calculate the total weight of the basin to ensure the foundational soil underneath can support the structural load without settling unevenly.