Here is the step-by-step solution to the problem using the multivariable chain rule.

### **1. Identify the Given Information**

- **Function:** $z = 3x^2y + \sin(y)$
    
- **Parametric paths:** $x = e^t$ and $y = \cos(t)$
    

We need to find the total derivative $\frac{dz}{dt}$.

### **2. Set Up the Multivariable Chain Rule**

Since $z$ is a function of $x$ and $y$, and both $x$ and $y$ are functions of the single parameter $t$, the chain rule formula is:

$$\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}$$

### **3. Compute the Required Derivatives**

#### **Find the Partial Derivatives of $z$**

- **With respect to $x$** (treating $y$ as a constant):
    
    $$\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}\big(3x^2y + \sin(y)\big) = 6xy$$
    
- **With respect to $y$** (treating $x$ as a constant):
    
    $$\frac{\partial z}{\partial y} = \frac{\partial}{\partial y}\big(3x^2y + \sin(y)\big) = 3x^2 + \cos(y)$$
    

#### **Find the Derivatives with Respect to $t$**

- **Derivative of $x$**:
    
    $$\frac{dx}{dt} = \frac{d}{dt}(e^t) = e^t$$
    
- **Derivative of $y$**:
    
    $$\frac{dy}{dt} = \frac{d}{dt}(\cos(t)) = -\sin(t)$$
    

### **4. Assemble the Chain Rule Equation**

Substitute the derivatives computed above back into the chain rule formula:

$$\frac{dz}{dt} = (6xy)(e^t) + \big(3x^2 + \cos(y)\big)(-\sin(t))$$

Simplify the signs:

$$\frac{dz}{dt} = 6xy e^t - \big(3x^2 + \cos(y)\big)\sin(t)$$

### **5. Substitute $x$ and $y$ to Express in Terms of $t$**

To get the final answer completely in terms of the independent variable $t$, replace $x$ with $e^t$ and $y$ with $\cos(t)$:

$$\frac{dz}{dt} = 6(e^t)(\cos(t))(e^t) - \big(3(e^t)^2 + \cos(\cos(t))\big)\sin(t)$$

Combine the exponential terms ($e^t \cdot e^t = e^{2t}$):

$$\frac{dz}{dt} = 6e^{2t}\cos(t) - \big(3e^{2t} + \cos(\cos(t))\big)\sin(t)$$

### **Final Answer**

$$\frac{dz}{dt} = 6e^{2t}\cos(t) - 3e^{2t}\sin(t) - \sin(t)\cos(\cos(t))$$