A mechanical engineer is designing an asymmetrical titanium component that acts as an offset alignment ring for an aircraft turbine assembly. The profile of the component is bounded by the curve $y = \sqrt{x}$, the $x$-axis ($y = 0$), and the line $x = 4 \text{ inches}$. To accommodate a central drive shaft, the component profile is rotated around an offset axis located at the vertical line $x = -1 \text{ inch}$.

Using **Skill 2**, formulate and evaluate the component's exact material volume.

**Solution:**

1. **Component Setup:** The axis of rotation is the vertical line $x = -1$. Slicing parallel to this axis requires vertical slices ($dx$) evaluated from $x = 0$ to $x = 4$.
    
2. **Radius Formulation ($r(x)$):** The axis $x = -1$ is to the **left** of our region $[0, 4]$. The distance from a slice at position $x$ to the axis is $x - L$:
    
    $$r(x) = x - (-1) = x + 1$$
    
3. **Height Formulation ($h(x)$):** The vertical height of the shell is bounded by the square root curve:
    
    $$h(x) = \sqrt{x} - 0 = x^{1/2}$$
    
4. **Integration:**
    
    $$V = \int_{0}^{4} 2\pi (x + 1)(x^{1/2}) \, dx = 2\pi \int_{0}^{4} (x^{3/2} + x^{1/2}) \, dx$$
    
    $$V = 2\pi \left[ \frac{2}{5}x^{5/2} + \frac{2}{3}x^{3/2} \right]_{0}^{4} = 2\pi \left( \frac{2}{5}(32) + \frac{2}{3}(8) \right)$$
    
    $$V = 2\pi \left( \frac{64}{5} + \frac{16}{3} \right) = 2\pi \left( \frac{192 + 80}{15} \right) = \frac{544\pi}{15} \text{ in}^3$$
    

#### Meaning of the Answer & Real-Life Application

The exact physical volume of the titanium alignment ring is $\frac{544\pi}{15} \approx 113.93 \text{ cubic inches}$. By implementing an offset radius ($x + 1$), the engineer has successfully mapped out a hollow inner core with a radius of exactly $1 \text{ inch}$ around the central axis. Knowing the exact volume of this solid allows the engineer to calculate the precise mass of the component by multiplying it by titanium's density. This enables them to running accurate stress simulations and structural load distributions on the aircraft frame before physical manufacturing begins.