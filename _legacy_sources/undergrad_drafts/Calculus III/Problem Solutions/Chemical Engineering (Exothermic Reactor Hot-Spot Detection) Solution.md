A chemical processing engineer monitors the heat flux vector field $\mathbf{q}$ (the transfer rate of thermal energy per unit area) inside an exothermic cylindrical reactor wall surrounded by a cooling jacket. The heat flux field is modeled as:

$$\mathbf{q}(x,y,z) = (x^2 \cos(yz))\mathbf{i} + (y e^{-x^2})\mathbf{j} + (z^2 \ln(y+2))\mathbf{k}$$

Evaluate $\nabla \cdot \mathbf{q}$ at the location $(2, -1, 0)$ to assess thermal accumulation.

#### **Solution:**

1. **Compute $\frac{\partial P}{\partial x}$ via variable isolation:**
    
    Treat the entire trigonometric expression $\cos(yz)$ strictly as a constant multiplier.
    
    $$\frac{\partial P}{\partial x} = \cos(yz) \cdot \frac{\partial}{\partial x}(x^2) = 2x\cos(yz)$$
    
2. **Compute $\frac{\partial Q}{\partial y}$ via variable isolation:**
    
    Treat the exponential term $e^{-x^2}$ strictly as a constant multiplier.
    
    $$\frac{\partial Q}{\partial y} = e^{-x^2} \cdot \frac{\partial}{\partial y}(y) = e^{-x^2}$$
    
3. **Compute $\frac{\partial R}{\partial z}$ via variable isolation:**
    
    Treat the logarithmic term $\ln(y+2)$ strictly as a constant multiplier.
    
    $$\frac{\partial R}{\partial z} = \ln(y+2) \cdot \frac{\partial}{\partial z}(z^2) = 2z\ln(y+2)$$
    

Combine the expressions to yield the symbolic equation:

$$\nabla \cdot \mathbf{q} = 2x\cos(yz) + e^{-x^2} + 2z\ln(y+2)$$

Now, evaluate at the coordinate position $(2, -1, 0)$:

$$\nabla \cdot \mathbf{q}(2,-1,0) = 2(2)\cos((-1)(0)) + e^{-(2)^2} + 2(0)\ln((-1)+2)$$

$$\nabla \cdot \mathbf{q}(2,-1,0) = 4\cos(0) + e^{-4} + 0 = 4(1) + e^{-4} \approx 4 + 0.0183 = 4.0183\text{ W/m}^3$$

#### **Meaning of the Answer & Real-Life Application:**

The calculated divergence value is **positive** ($\nabla \cdot \mathbf{q} \approx 4.0183$).

In chemical process engineering, a positive divergence of a heat flux field reveals that thermal energy is net-expanding outward from that coordinate location—making it a **thermal source**. This means the internal chemical reaction is generating heat faster than the surrounding physical structures can dissipate it. The engineer uses this value to pinpoint dangerous, developing hot-spots inside the core, adjusting the local coolant flow rates to stabilize the system before a thermal runaway ruins the batch or compromises structural safety.