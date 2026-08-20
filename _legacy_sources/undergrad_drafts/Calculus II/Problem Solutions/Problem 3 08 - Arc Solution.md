

### **The Arc Length Formula (with respect to $y$)**

When a smooth curve is defined by $x = g(y)$ over an interval $y \in [c, d]$, the formula for its arc length $L$ flips the variables but keeps the same structure:

$$L = \int_{c}^{d} \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

### **Part (a)**

**Curve:** $x = 2y - 1$ over the interval $y \in [-1, 1]$

- **Step 1: Find the derivative $\frac{dx}{dy}$**
    
    $$\frac{dx}{dy} = \frac{d}{dy}(2y - 1) = 2$$
    
- **Step 2: Square the derivative and add 1**
    
    $$\left(\frac{dx}{dy}\right)^2 = 2^2 = 4$$
    
    $$1 + \left(\frac{dx}{dy}\right)^2 = 1 + 4 = 5$$
    
- **Step 3: Evaluate the integral**
    
    Substitute into the formula with boundaries from $-1$ to $1$:
    
    $$L = \int_{-1}^{1} \sqrt{5} \, dy$$
    
    Since $\sqrt{5}$ is a constant, integrate it directly:
    
    $$L = \sqrt{5} \Big[ y \Big]_{-1}^{1}$$
    
    $$L = \sqrt{5} \left(1 - (-1)\right) = 2\sqrt{5}$$
    

**Answer (a):** The arc length is **$2\sqrt{5}$** (approx. **4.47**).

### **Part (b)**

**Curve:** $x = \frac{y^3}{3} + \frac{1}{4y}$ over the interval $y \in [1, 2]$

- **Step 1: Rewrite the equation and find the derivative $\frac{dx}{dy}$**
    
    To make taking the derivative easier, write it with exponents:
    
    $$x = \frac{1}{3}y^3 + \frac{1}{4}y^{-1}$$
    
    $$\frac{dx}{dy} = \frac{1}{3}(3y^2) + \frac{1}{4}(-1y^{-2}) = y^2 - \frac{1}{4y^2}$$
    
- **Step 2: Square the derivative**
    
    $$\left(\frac{dx}{dy}\right)^2 = \left(y^2 - \frac{1}{4y^2}\right)^2$$
    
    Expand it using the perfect square identity $(a - b)^2 = a^2 - 2ab + b^2$:
    
    $$\left(\frac{dx}{dy}\right)^2 = y^4 - 2(y^2)\left(\frac{1}{4y^2}\right) + \frac{1}{16y^4} = y^4 - \frac{1}{2} + \frac{1}{16y^4}$$
    
- **Step 3: Simplify inside the square root ($1 + \left(\frac{dx}{dy}\right)^2$)**
    
    Add 1 to your expanded derivative:
    
    $$1 + \left(y^4 - \frac{1}{2} + \frac{1}{16y^4}\right) = y^4 + \frac{1}{2} + \frac{1}{16y^4}$$
    
    > **The Algebraic Trick:** Notice that changing the middle term from $-\frac{1}{2}$ to $+\frac{1}{2}$ turns the expression back into a perfect square, just with a plus sign!
    > 
    > $$y^4 + \frac{1}{2} + \frac{1}{16y^4} = \left(y^2 + \frac{1}{4y^2}\right)^2$$
    
- **Step 4: Evaluate the integral**
    
    Now cancel the square root with the perfect square:
    
    $$L = \int_{1}^{2} \sqrt{\left(y^2 + \frac{1}{4y^2}\right)^2} \, dy$$
    
    $$L = \int_{1}^{2} \left(y^2 + \frac{1}{4}y^{-2}\right) \, dy$$
    
    Integrate term-by-term:
    
    $$L = \Big[ \frac{y^3}{3} - \frac{1}{4y} \Big]_{1}^{2}$$
    
    Plug in the upper limit ($y = 2$):
    
    $$\left(\frac{2^3}{3} - \frac{1}{4(2)}\right) = \frac{8}{3} - \frac{1}{8} = \frac{64 - 3}{24} = \frac{61}{24}$$
    
    Plug in the lower limit ($y = 1$):
    
    $$\left(\frac{1^3}{3} - \frac{1}{4(1)}\right) = \frac{1}{3} - \frac{1}{4} = \frac{4 - 3}{12} = \frac{1}{12} = \frac{2}{24}$$
    
    Subtract the lower limit from the upper limit:
    
    $$L = \frac{61}{24} - \frac{2}{24} = \frac{59}{24}$$
    

**Answer (b):** The arc length is **$\frac{59}{24}$** (approx. **2.46**).