Here is the step-by-step solution to the pollutant concentration problem using the multivariable chain rule.

### **1. Identify the Given Information**

- **Concentration function:** $C(x,y) = 40e^{-0.1(x^2 + y^2)}$
    
- **Parametric paths:** $x(t) = 3 + t$ and $y(t) = 2t$
    
- **Target time:** $t = 0$
    

We need to find the total derivative $\frac{dC}{dt}$ at $t = 0$.

### **2. Set Up the Multivariable Chain Rule**

Because $C$ is a function of both $x$ and $y$, and both $x$ and $y$ vary with time ($t$), the chain rule formula states:

$$\frac{dC}{dt} = \frac{\partial C}{\partial x}\frac{dx}{dt} + \frac{\partial C}{\partial y}\frac{dy}{dt}$$

### **3. Compute the Required Derivatives**

#### **Find the Partial Derivatives of $C(x,y)$**

We use the single-variable chain rule for exponential functions ($\frac{d}{du}[e^u] = e^u \cdot u'$):

- **With respect to $x$** (treat $y$ as a constant):
    
    $$\frac{\partial C}{\partial x} = 40e^{-0.1(x^2 + y^2)} \cdot \frac{\partial}{\partial x}\big[-0.1(x^2 + y^2)\big]$$
    
    $$\frac{\partial C}{\partial x} = 40e^{-0.1(x^2 + y^2)} \cdot (-0.2x) = -8xe^{-0.1(x^2 + y^2)}$$
    
- **With respect to $y$** (treat $x$ as a constant):
    
    $$\frac{\partial C}{\partial y} = 40e^{-0.1(x^2 + y^2)} \cdot \frac{\partial}{\partial y}\big[-0.1(x^2 + y^2)\big]$$
    
    $$\frac{\partial C}{\partial y} = 40e^{-0.1(x^2 + y^2)} \cdot (-0.2y) = -8ye^{-0.1(x^2 + y^2)}$$
    

#### **Find the Time Derivatives of the Paths**

- **Derivative of $x(t)$**:
    
    $$\frac{dx}{dt} = \frac{d}{dt}(3 + t) = 1$$
    
- **Derivative of $y(t)$**:
    
    $$\frac{dy}{dt} = \frac{d}{dt}(2t) = 2$$
    

### **4. Evaluate the Variables at $t = 0$**

Let's find the specific values of $x$ and $y$ when $t = 0$ to simplify the numerical calculation:

- $x(0) = 3 + 0 = 3$
    
- $y(0) = 2(0) = 0$
    

Now, plug $x = 3$ and $y = 0$ into our partial derivatives:

- $\frac{\partial C}{\partial x} = -8(3)e^{-0.1(3^2 + 0^2)} = -24e^{-0.1(9)} = -24e^{-0.9}$
    
- $\frac{\partial C}{\partial y} = -8(0)e^{-0.1(3^2 + 0^2)} = 0$
    

### **5. Assemble the Final Answer**

Substitute the evaluated pieces back into the main chain rule formula:

$$\frac{dC}{dt} = \left(\frac{\partial C}{\partial x}\right)\left(\frac{dx}{dt}\right) + \left(\frac{\partial C}{\partial y}\right)\left(\frac{dy}{dt}\right)$$

$$\frac{dC}{dt} = (-24e^{-0.9})(1) + (0)(2)$$

$$\frac{dC}{dt} = -24e^{-0.9}$$

### **Final Answer**

$$\frac{dC}{dt} = -24e^{-0.9} \approx -9.76$$