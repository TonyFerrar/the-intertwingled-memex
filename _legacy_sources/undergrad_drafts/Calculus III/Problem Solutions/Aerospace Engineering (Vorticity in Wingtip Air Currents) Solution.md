An aerospace engineer runs a wind tunnel simulation to analyze the swirling air currents shedding off an experimental drone wingtip. The local velocity field $\mathbf{V}$ (in meters per second) of the air is structurally mapped as:

$$\mathbf{V}(x,y,z) = (2z^2)\mathbf{i} + (x^2y)\mathbf{j} + (3xy)\mathbf{k}$$

Calculate the local vorticity vector (the curl of the velocity field, $\nabla \times \mathbf{V}$) at the spatial coordinate point $(1, 3, 2)$.

#### **Solution:**

1. **Isolate the Components:**
    
    - $P = 2z^2$
        
    - $Q = x^2y$
        
    - $R = 3xy$
        
2. **Execute the Structural Matrix Map:**
    
    - $\mathbf{i}\text{-component}: \frac{\partial}{\partial y}(3xy) - \frac{\partial}{\partial z}(x^2y) = 3x - 0 = 3x$
        
    - $\mathbf{j}\text{-component}: \frac{\partial}{\partial z}(2z^2) - \frac{\partial}{\partial x}(3xy) = 4z - 3y$
        
    - $\mathbf{k}\text{-component}: \frac{\partial}{\partial x}(x^2y) - \frac{\partial}{\partial y}(2z^2) = 2xy - 0 = 2xy$
        
    
    $$\nabla \times \mathbf{V} = (3x)\mathbf{i} + (4z - 3y)\mathbf{j} + (2xy)\mathbf{k}$$
    
3. **Evaluate at the Coordinate Grid $(1, 3, 2)$:**
    
    - $\mathbf{i}\text{-component}: 3(1) = 3$
        
    - $\mathbf{j}\text{-component}: 4(2) - 3(3) = 8 - 9 = -1$
        
    - $\mathbf{k}\text{-component}: 2(1)(3) = 6$
        
    
    $$\nabla \times \mathbf{V}(1,3,2) = 3\mathbf{i} - 1\mathbf{j} + 6\mathbf{k}$$
    

#### **Meaning of the Answer & Real-Life Application:**

The calculated curl results in a full 3D vector: $3\mathbf{i} - \mathbf{j} + 6\mathbf{k}$.

In aerodynamics, the curl of a velocity field is known as **vorticity**. The fact that all three spatial components are non-zero tells the engineer that the air currents are spinning in an oblique, tilted orientation relative to the wing rather than flat along a single axis. By calculating the exact magnitude and 3D angle of this vector, the engineer maps out the core path of the wingtip vortex. This spatial mapping allows the development team to alter the winglets' physical curves, reducing induced drag and drastically boosting the drone's aerodynamic range and flight stability.