Here is the step-by-step solution to the piston problem using the multivariable chain rule.

### **1. Identify the Given Information**

- **Height function:** $h(r, \theta) = r^2 \sin(\theta)$
    
- **Parametric equations:** $r = 2t$ and $\theta = \pi t$
    
- **Target time:** $t = 0.25$
    

We need to find the total derivative $\frac{dh}{dt}$ at $t = 0.25$.

### **2. Set Up the Multivariable Chain Rule**

Because $h$ depends on $r$ and $\theta$, and both $r$ and $\theta$ depend on $t$, the chain rule gives:

$$\frac{dh}{dt} = \frac{\partial h}{\partial r}\frac{dr}{dt} + \frac{\partial h}{\partial \theta}\frac{d\theta}{dt}$$

### **3. Compute the Required Derivatives**

#### **Find the Partial Derivatives of $h(r, \theta)$**

- **With respect to $r$** (treat $\theta$ as a constant):
    
    $$\frac{\partial h}{\partial r} = \frac{\partial}{\partial r}\big(r^2 \sin(\theta)\big) = 2r \sin(\theta)$$
    
- **With respect to $\theta$** (treat $r$ as a constant):
    
    $$\frac{\partial h}{\partial \theta} = \frac{\partial}{\partial \theta}\big(r^2 \sin(\theta)\big) = r^2 \cos(\theta)$$
    

#### **Find the Time Derivatives**

- **Derivative of $r(t)$**:
    
    $$\frac{dr}{dt} = \frac{d}{dt}(2t) = 2$$
    
- **Derivative of $\theta(t)$**:
    
    $$\frac{d\theta}{dt} = \frac{d}{dt}(\pi t) = \pi$$
    

### **4. Evaluate the Variables at $t = 0.25$**

Let's find the specific values of $r$, $\theta$, and the partial derivatives when $t = 0.25$:

- $r = 2(0.25) = 0.5$
    
- $\theta = \pi(0.25) = \frac{\pi}{4}$
    

Now, evaluate the partial derivatives at these values:

- $\frac{\partial h}{\partial r} = 2(0.5) \sin\left(\frac{\pi}{4}\right) = 1 \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2}}{2}$
    
- $\frac{\partial h}{\partial \theta} = (0.5)^2 \cos\left(\frac{\pi}{4}\right) = 0.25 \cdot \frac{\sqrt{2}}{2} = \frac{\sqrt{2}}{8}$
    

### **5. Assemble the Final Answer**

Substitute everything back into the main chain rule equation:

$$\frac{dh}{dt} = \left(\frac{\partial h}{\partial r}\right)\left(\frac{dr}{dt}\right) + \left(\frac{\partial h}{\partial \theta}\right)\left(\frac{d\theta}{dt}\right)$$

$$\frac{dh}{dt} = \left(\frac{\sqrt{2}}{2}\right)(2) + \left(\frac{\sqrt{2}}{8}\right)(\pi)$$

$$\frac{dh}{dt} = \sqrt{2} + \frac{\pi\sqrt{2}}{8}$$

To make it cleaner, you can factor out $\sqrt{2}$:

$$\frac{dh}{dt} = \sqrt{2}\left(1 + \frac{\pi}{8}\right)$$

### **Final Answer**

$$\frac{dh}{dt} = \sqrt{2} + \frac{\pi\sqrt{2}}{8} \approx 1.97$$