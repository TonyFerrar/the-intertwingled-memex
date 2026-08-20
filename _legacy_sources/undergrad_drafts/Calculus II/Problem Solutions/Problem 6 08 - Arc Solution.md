### **The Surface Area of Revolution Formula (Around the $y$-axis)**

When a smooth curve $x = g(y)$ is rotated around the $y$-axis over an interval $y \in [c, d]$, the surface area $S$ of the resulting solid is given by:

$$S = \int_{c}^{d} 2\pi x \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

Since the curve is explicitly defined in terms of $y$, we substitute $g(y)$ directly in place of $x$:

$$S = \int_{c}^{d} 2\pi g(y) \sqrt{1 + \left(\frac{dx}{dy}\right)^2} \, dy$$

### **Part (a)**

**Curve:** $x = y + 3$ over the interval $y \in [0, 1]$

- **Step 1: Find the derivative $\frac{dx}{dy}$**
    
    $$\frac{dx}{dy} = \frac{d}{dy}(y + 3) = 1$$
    
- **Step 2: Simplify the square root part ($\sqrt{1 + (x')^2}$)**
    
    $$\sqrt{1 + (1)^2} = \sqrt{1 + 1} = \sqrt{2}$$
    
- **Step 3: Set up and evaluate the integral**
    
    Substitute $x = y + 3$, the square root value, and the limits ($0$ to $1$) into the formula:
    
    $$S = \int_{0}^{1} 2\pi (y + 3) \sqrt{2} \, dy$$
    
    Pull the constants ($2\pi\sqrt{2}$) out of the integral:
    
    $$S = 2\pi\sqrt{2} \int_{0}^{1} (y + 3) \, dy$$
    
    Integrate the linear polynomial expression:
    
    $$S = 2\pi\sqrt{2} \left[ \frac{y^2}{2} + 3y \right]_{0}^{1}$$
    
    Evaluate at the boundaries:
    
    - Upper limit ($y = 1$): $\frac{1^2}{2} + 3(1) = \frac{1}{2} + 3 = \frac{7}{2}$
        
    - Lower limit ($y = 0$): $\frac{0^2}{2} + 3(0) = 0$
        
    
    Multiply the integrated result by the front constants:
    
    $$S = 2\pi\sqrt{2} \left(\frac{7}{2}\right) = 7\pi\sqrt{2}$$
    

**Answer (a):** The area of the surface is **$7\pi\sqrt{2}$** (approx. **31.10** square units).

### **Part (b)**

**Curve:** $x = \sqrt{y}$ over the interval $y \in [1, 2]$

- **Step 1: Find the derivative $\frac{dx}{dy}$**
    
    $$\frac{dx}{dy} = \frac{d}{dy}(y^{1/2}) = \frac{1}{2\sqrt{y}}$$
    
- **Step 2: Simplify inside the square root ($1 + (x')^2$)**
    
    First, square the derivative:
    
    $$\left(\frac{dx}{dy}\right)^2 = \left(\frac{1}{2\sqrt{y}}\right)^2 = \frac{1}{4y}$$
    
    Next, add 1 and find a common denominator:
    
    $$1 + \frac{1}{4y} = \frac{4y + 1}{4y}$$
    
    Now take the square root of the entire expression:
    
    $$\sqrt{\frac{4y + 1}{4y}} = \frac{\sqrt{4y + 1}}{2\sqrt{y}}$$
    
- **Step 3: Set up the integral**
    
    Substitute $x = \sqrt{y}$ and our simplified radical expression into the formula:
    
    $$S = \int_{1}^{2} 2\pi (\sqrt{y}) \left(\frac{\sqrt{4y + 1}}{2\sqrt{y}}\right) \, dy$$
    
    Notice that the $\sqrt{y}$ in the numerator and denominator cancel out completely, and the $2$ values cancel out as well:
    
    $$S = \pi \int_{1}^{2} \sqrt{4y + 1} \, dy$$
    
- **Step 4: Evaluate using $u$-substitution**
    
    Let $u = 4y + 1$, which means $du = 4 \, dy$, or $dy = \frac{du}{4}$.
    
    Next, convert the integration limits to match our new variable $u$:
    
    - Upper limit ($y = 2$): $u = 4(2) + 1 = 9$
        
    - Lower limit ($y = 1$): $u = 4(1) + 1 = 5$
        
    
    Substitute these components back into the integral:
    
    $$S = \pi \int_{5}^{9} \sqrt{u} \cdot \frac{du}{4} = \frac{\pi}{4} \int_{5}^{9} u^{1/2} \, du$$
    
    Integrate using the power rule:
    
    $$S = \frac{\pi}{4} \left[ \frac{2}{3}u^{3/2} \right]_{5}^{9} = \frac{\pi}{6} \left[ u^{3/2} \right]_{5}^{9}$$
    
    Evaluate at the boundaries:
    
    $$S = \frac{\pi}{6} \left( 9^{3/2} - 5^{3/2} \right)$$
    
    Since $9^{3/2} = (\sqrt{9})^3 = 27$ and $5^{3/2} = 5\sqrt{5}$:
    
    $$S = \frac{\pi}{6} (27 - 5\sqrt{5})$$
    

**Answer (b):** The area of the surface is **$\frac{\pi}{6}(27 - 5\sqrt{5})$** (approx. **8.28** square units).