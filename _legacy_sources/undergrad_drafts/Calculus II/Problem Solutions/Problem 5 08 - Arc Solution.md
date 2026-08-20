
### **The Surface Area of Revolution Formula (Around the $x$-axis)**

When a smooth curve $y = f(x)$ is rotated around the $x$-axis over an interval $x \in [a, b]$, the surface area $S$ of the resulting solid is given by:

$$S = \int_{a}^{b} 2\pi y \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

Think of this as summing up the circumferences of infinitely thin cylindrical bands ($2\pi y$) multiplied by their slanted width ($ds = \sqrt{1 + (y')^2} \, dx$).

### **Part (a)**

**Curve:** $y = 2x + 3$ over the interval $x \in [0, 2]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**
    
    $$\frac{dy}{dx} = \frac{d}{dx}(2x + 3) = 2$$
    
- **Step 2: Simplify the square root part ($\sqrt{1 + (y')^2}$)**
    
    $$\sqrt{1 + (2)^2} = \sqrt{1 + 4} = \sqrt{5}$$
    
- **Step 3: Set up and evaluate the integral**
    
    Substitute $y = 2x + 3$, the square root value, and the limits ($0$ to $2$) into the formula:
    
    $$S = \int_{0}^{2} 2\pi (2x + 3) \sqrt{5} \, dx$$
    
    Pull the constants ($2\pi\sqrt{5}$) out front:
    
    $$S = 2\pi\sqrt{5} \int_{0}^{2} (2x + 3) \, dx$$
    
    Integrate the polynomial inside:
    
    $$S = 2\pi\sqrt{5} \Big[ x^2 + 3x \Big]_{0}^{2}$$
    
    Evaluate at the boundaries:
    
    - Upper limit ($x = 2$): $(2)^2 + 3(2) = 4 + 6 = 10$
        
    - Lower limit ($x = 0$): $(0)^2 + 3(0) = 0$
        
    
    $$S = 2\pi\sqrt{5} (10 - 0) = 20\pi\sqrt{5}$$
    

**Answer (a):** The area of the surface is **$20\pi\sqrt{5}$** (approx. **140.50** square units).

### **Part (b)**

**Curve:** $y = \sqrt{4 - x^2}$ over the interval $x \in [-1, 1]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**
    
    Using the chain rule:
    
    $$\frac{dy}{dx} = \frac{1}{2\sqrt{4 - x^2}} \cdot (-2x) = \frac{-x}{\sqrt{4 - x^2}}$$
    
- **Step 2: Simplify inside the square root ($1 + (y')^2$)**
    
    First, square the derivative:
    
    $$\left(\frac{dy}{dx}\right)^2 = \frac{x^2}{4 - x^2}$$
    
    Next, add 1 and find a common denominator:
    
    $$1 + \frac{x^2}{4 - x^2} = \frac{4 - x^2}{4 - x^2} + \frac{x^2}{4 - x^2} = \frac{4}{4 - x^2}$$
    
    Now take the square root of this expression:
    
    $$\sqrt{\frac{4}{4 - x^2}} = \frac{2}{\sqrt{4 - x^2}}$$
    
- **Step 3: Set up and evaluate the integral**
    
    Substitute $y = \sqrt{4 - x^2}$ and our simplified radical expression into the formula:
    
    $$S = \int_{-1}^{1} 2\pi \left(\sqrt{4 - x^2}\right) \left(\frac{2}{\sqrt{4 - x^2}}\right) \, dx$$
    
    Notice how beautifully the $\sqrt{4 - x^2}$ terms cancel out completely!
    
    $$S = \int_{-1}^{1} 2\pi \cdot 2 \, dx = \int_{-1}^{1} 4\pi \, dx$$
    
    Integrate the constant:
    
    $$S = 4\pi \Big[ x \Big]_{-1}^{1}$$
    
    $$S = 4\pi (1 - (-1)) = 4\pi (2) = 8\pi$$
    

**Answer (b):** The area of the surface is **$8\pi$** (approx. **25.13** square units).

> _Geometric Insight:_ The equation $y = \sqrt{4-x^2}$ represents the top half of a circle with a radius of $R = 2$. Revolving this section creates a central zone of a sphere. A neat classical geometry rule (Archimedes' Hat-Box Theorem) states that the surface area of a spherical zone depends only on the radius of the sphere and the height of the zone: $S = 2\pi R h$. Here, radius $R = 2$ and height $h = 1 - (-1) = 2$. Multiplying them out gives $2\pi(2)(2) = 8\pi$, confirming our calculus answer perfectly!