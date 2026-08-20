### **The Arc Length Formula**

For a smooth curve defined by $y = f(x)$ over an interval $[a, b]$, the arc length $L$ is expressed by the definite integral:

$$L = \int_{a}^{b} \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx$$

### **Part (a)**

**Curve:** $y = x^3 + 1$ over the interval $x \in [1, 2]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**
    
    $$\frac{dy}{dx} = \frac{d}{dx}(x^3 + 1) = 3x^2$$
    
- **Step 2: Square the derivative**
    
    $$\left(\frac{dy}{dx}\right)^2 = (3x^2)^2 = 9x^4$$
    
- **Step 3: Set up the definite integral**
    
    Substitute the squared derivative and the interval limits ($a = 1$ and $b = 2$) into the arc length formula:
    
    $$L = \int_{1}^{2} \sqrt{1 + 9x^4} \, dx$$
    

### **Part (b)**

**Curve:** $y = e^x + e^{-x}$ over the interval $x \in [0, 1]$

- **Step 1: Find the derivative $\frac{dy}{dx}$**
    
    $$\frac{dy}{dx} = \frac{d}{dx}(e^x + e^{-x}) = e^x - e^{-x}$$
    
- **Step 2: Square the derivative**
    
    $$\left(\frac{dy}{dx}\right)^2 = (e^x - e^{-x})^2$$
    
    Expanding this expression yields:
    
    $$(e^x)^2 - 2(e^x)(e^{-x}) + (e^{-x})^2 = e^{2x} - 2 + e^{-2x}$$
    
- **Step 3: Simplify the term inside the square root ($1 + \left(\frac{dy}{dx}\right)^2$)**
    
    $$1 + (e^{2x} - 2 + e^{-2x}) = e^{2x} - 1 + e^{-2x}$$
    
- **Step 4: Set up the definite integral**
    
    Substitute the terms and the interval limits ($a = 0$ and $b = 1$) into the formula:
    
    $$L = \int_{0}^{1} \sqrt{1 + (e^x - e^{-x})^2} \, dx$$
    
    _Or in its expanded form:_
    
    $$L = \int_{0}^{1} \sqrt{e^{2x} - 1 + e^{-2x}} \, dx$$