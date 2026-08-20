Here is the step-by-step solution to compute and verify the partial derivatives for the given exponential function.

### **1. Identify the Given Information**

- **Function:** $f(x,y) = e^{x^2y}$
    

We need to compute $f_{xx}$, $f_{yy}$, and $f_{xy}$ and verify if $f_{xy} = f_{yx}$.

### **2. Compute the First-Order Partial Derivatives**

We will use the single-variable chain rule for exponential functions ($\frac{d}{du}[e^u] = e^u \cdot u'$).

- **Find $f_x$** (treat $y$ as a constant):
    
    $$f_x = e^{x^2y} \cdot \frac{\partial}{\partial x}(x^2y) = e^{x^2y} \cdot (2xy) = 2xye^{x^2y}$$
    
- **Find $f_y$** (treat $x$ as a constant):
    
    $$f_y = e^{x^2y} \cdot \frac{\partial}{\partial y}(x^2y) = e^{x^2y} \cdot (x^2) = x^2e^{x^2y}$$
    

### **3. Compute the Second-Order Partial Derivatives**

#### **Find $f_{xx}$**

Differentiate $f_x = 2xye^{x^2y}$ with respect to $x$ using the **product rule** ($[uv]' = u'v + uv'$):

- Let $u = 2xy \implies u_x = 2y$
    
- Let $v = e^{x^2y} \implies v_x = 2xye^{x^2y}$
    

$$f_{xx} = (2y)(e^{x^2y}) + (2xy)(2xye^{x^2y})$$

$$f_{xx} = 2ye^{x^2y} + 4x^2y^2e^{x^2y}$$

$$f_{xx} = 2y(1 + 2x^2y)e^{x^2y}$$

#### **Find $f_{yy}$**

Differentiate $f_y = x^2e^{x^2y}$ with respect to $y$ (here, $x^2$ is just a constant multiplier):

$$f_{yy} = x^2 \cdot \left(e^{x^2y} \cdot \frac{\partial}{\partial y}(x^2y)\right)$$

$$f_{yy} = x^2 \cdot (x^2e^{x^2y})$$

$$f_{yy} = x^4e^{x^2y}$$

### **4. Compute and Verify the Mixed Partial Derivatives**

#### **Find $f_{xy}$**

Differentiate $f_x = 2xye^{x^2y}$ with respect to $y$ using the **product rule**:

- Let $u = 2xy \implies u_y = 2x$
    
- Let $v = e^{x^2y} \implies v_y = x^2e^{x^2y}$
    

$$f_{xy} = (2x)(e^{x^2y}) + (2xy)(x^2e^{x^2y})$$

$$f_{xy} = 2xe^{x^2y} + 2x^3ye^{x^2y}$$

$$f_{xy} = 2x(1 + x^2y)e^{x^2y}$$

#### **Find $f_{yx}$**

Differentiate $f_y = x^2e^{x^2y}$ with respect to $x$ using the **product rule**:

- Let $u = x^2 \implies u_x = 2x$
    
- Let $v = e^{x^2y} \implies v_x = 2xye^{x^2y}$
    

$$f_{yx} = (2x)(e^{x^2y}) + (x^2)(2xye^{x^2y})$$

$$f_{yx} = 2xe^{x^2y} + 2x^3ye^{x^2y}$$

$$f_{yx} = 2x(1 + x^2y)e^{x^2y}$$

### **Conclusion**

Comparing the mixed partial derivatives:

- $f_{xy} = 2x(1 + x^2y)e^{x^2y}$
    
- $f_{yx} = 2x(1 + x^2y)e^{x^2y}$
    

Since both expressions match perfectly, we have successfully verified **Clairaut's Theorem** ($f_{xy} = f_{yx}$).