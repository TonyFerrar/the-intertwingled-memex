We will use the standard arc length formula:

$$L = \int_{a}^{b} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

### **Part (a)**

**Curve:** $y = 3x + 1$ over the interval $x \in [1, 2]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**
    
    $$\frac{dy}{dx} = \frac{d}{dx}(3x + 1) = 3$$
    
- **Step 2: Square the derivative and add 1**
    
    $$\left(\frac{dy}{dx}\right)^2 = 3^2 = 9$$
    
    $$1 + \left(\frac{dy}{dx}\right)^2 = 1 + 9 = 10$$
    
- **Step 3: Evaluate the integral**
    
    Substitute these values into the arc length formula:
    
    $$L = \int_{1}^{2} \sqrt{10} \, dx$$
    
    Since $\sqrt{10}$ is a constant, we can pull it out of the integral:
    
    $$L = \sqrt{10} \int_{1}^{2} 1 \, dx = \sqrt{10} \Big[ x \Big]_{1}^{2}$$
    
    $$L = \sqrt{10} (2 - 1) = \sqrt{10}$$
    

**Answer (a):** The arc length is **$\sqrt{10}$** (approx. **3.16**).

> _Fun Fact:_ Since $y = 3x + 1$ is a straight line, you could also verify this using the standard geometric distance formula between the endpoints $(1, 4)$ and $(2, 7)$, which gives $\sqrt{(2-1)^2 + (7-4)^2} = \sqrt{1 + 9} = \sqrt{10}$.

### **Part (b)**

**Curve:** $y = \frac{1}{2}(e^x + e^{-x})$ over the interval $x \in [0, 1]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**
    
    $$\frac{dy}{dx} = \frac{1}{2}(e^x - e^{-x})$$
    
- **Step 2: Square the derivative**
    
    $$\left(\frac{dy}{dx}\right)^2 = \left[\frac{1}{2}(e^x - e^{-x})\right]^2 = \frac{1}{4}(e^{2x} - 2 + e^{-2x})$$
    
- **Step 3: Simplify the term inside the square root ($1 + \left(\frac{dy}{dx}\right)^2$)**
    
    $$1 + \frac{1}{4}(e^{2x} - 2 + e^{-2x}) = \frac{4}{4} + \frac{e^{2x} - 2 + e^{-2x}}{4}$$
    
    $$= \frac{e^{2x} + 2 + e^{-2x}}{4}$$
    
    Notice that the numerator perfectly factors back into a perfect square:
    
    $$\frac{(e^x + e^{-x})^2}{4} = \left[\frac{1}{2}(e^x + e^{-x})\right]^2$$
    
- **Step 4: Evaluate the integral**
    
    Now take the square root of that perfect square inside the integral:
    
    $$L = \int_{0}^{1} \sqrt{\left[\frac{1}{2}(e^x + e^{-x})\right]^2} \, dx$$
    
    $$L = \int_{0}^{1} \frac{1}{2}(e^x + e^{-x}) \, dx$$
    
    Integrate term-by-term:
    
    $$L = \frac{1}{2} \Big[ e^x - e^{-x} \Big]_{0}^{1}$$
    
    Plug in the upper limit ($x = 1$) and lower limit ($x = 0$):
    
    $$L = \frac{1}{2} \left[ (e^1 - e^{-1}) - (e^0 - e^0) \right]$$
    
    $$L = \frac{1}{2}(e - e^{-1}) - 0 = \frac{e - e^{-1}}{2}$$
    

**Answer (b):** The arc length is **$\frac{e - e^{-1}}{2}$** (or written using hyperbolic functions as **$\sinh(1)$**, which is approx. **1.18**).