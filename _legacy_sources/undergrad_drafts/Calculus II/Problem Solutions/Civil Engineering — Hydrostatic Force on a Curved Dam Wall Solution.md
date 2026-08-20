A civil engineer is designing a concrete retaining wall for a water reservoir. Due to the curvature of the base, the total hydrostatic force $F$ (in Newtons) exerted by the water against a specific section of the dam depends on the changing depth $y$ (in meters) and is modeled by the following definite integral:

$$F = 9800 \int_{0}^{3} y\sqrt{9 - y^2} \, dy$$

Find the total hydrostatic force acting on this section of the dam wall.

#### Step-by-Step Solution:

- **Step 1: Recognize the pattern.** The inner function trapped under the radical is $9 - y^2$. Its derivative would yield a linear $y$ term, which perfectly matches the $y$ multiplying the outside of the radical. Let $u = 9 - y^2$ Then $du = -2y \, dy \implies -\frac{1}{2} \, du = y \, dy$
    
- **Step 2: Change the limits of integration.** We must convert our $y$ limits to $u$ limits using $u = 9 - y^2$:
    
    - Lower limit: If $y = 0 \implies u = 9 - (0)^2 = 9$
        
    - Upper limit: If $y = 3 \implies u = 9 - (3)^2 = 0$
        
- **Step 3: Substitute and simplify.**
    
    $$F = 9800 \int_{9}^{0} \sqrt{u} \cdot \left(-\frac{1}{2} \, du\right) \text{ [cite: 51]}$$
    
    Pull out the constant $-\frac{1}{2}$ and flip the limits of integration to eliminate the negative sign:
    
    $$F = 4900 \int_{0}^{9} u^{1/2} \, du$$
    
- **Step 4: Integrate and evaluate.**
    
    $$F = 4900 \left[ \frac{2}{3}u^{3/2} \right]_{0}^{9} \text{ [cite: 53]}$$
    
    $$F = 4900 \cdot \frac{2}{3} \left( 9^{3/2} - 0^{3/2} \right)$$
    
    Since $9^{3/2} = (\sqrt{9})^3 = 27$:
    
    $$F = 4900 \cdot \frac{2}{3} (27) = 4900 \cdot 18 = 88,200 \text{ N}$$
    

#### Meaning of the Answer & Engineering Real-Life Application:

The calculation tells us that the total physical load pushing against this specific structural section is **88,200 Newtons** (or approximately 9 metric tons of force).

In real-life civil engineering, guessing or relying purely on flat approximations for fluid pressure distribution leads to structural failure. An engineer uses this exact resultant force to determine the minimum thickness of the poured concrete wall and the exact density of the steel rebar grids embedded inside it. Knowing the precise force ensures the dam can safely resist the massive fluid weight over decades of operation without developing catastrophic structural cracks.