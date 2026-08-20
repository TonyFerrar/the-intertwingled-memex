A civil engineer designs an urban storm drainage basin to handle heavy floodwaters. The velocity field $\mathbf{V}$ (in meters per second) of the water draining near a central overflow pipe is structurally modeled by:

$$\mathbf{V}(x,y,z) = (-y + 3x)\mathbf{i} + (x + 3y)\mathbf{j} - 6z\mathbf{k}$$

Compute the divergence ($\nabla \cdot \mathbf{V}$) and curl ($\nabla \times \mathbf{V}$) of the water flow, then translate what these values mean for the basin's drainage performance.

#### **Solution:**

1. **Compute Divergence:**
    
    $$\nabla \cdot \mathbf{V} = \frac{\partial}{\partial x}(-y + 3x) + \frac{\partial}{\partial y}(x + 3y) + \frac{\partial}{\partial z}(-6z) = 3 + 3 - 6 = 0$$
    
2. **Compute Curl:**
    
    - $\mathbf{i}\text{-component}: \frac{\partial}{\partial y}(-6z) - \frac{\partial}{\partial z}(x + 3y) = 0 - 0 = 0$
        
    - $\mathbf{j}\text{-component}: \frac{\partial}{\partial z}(-y + 3x) - \frac{\partial}{\partial x}(-6z) = 0 - 0 = 0$
        
    - $\mathbf{k}\text{-component}: \frac{\partial}{\partial x}(x + 3y) - \frac{\partial}{\partial y}(-y + 3x) = 1 - (-1) = 2$
        
        $$\nabla \times \mathbf{V} = 2\mathbf{k}$$
        

#### **Meaning of the Answer & Real-Life Application:**

The math yields a divergence of **$0$** and a curl vector of **$2\mathbf{k}$**.

- **The Translation:** A divergence of zero confirms that the storm water is behaving as a perfectly **incompressible fluid**. There are no empty air pockets forming within the fluid mass, and water is not spontaneously vanishing. The volume of water rushing into the drain area is perfectly matched by the volume exiting it.
    
- **The Application:** The curl vector $2\mathbf{k}$ translates to a uniform, **counterclockwise vortex** spinning around the vertical drainage axis. For a civil engineer, this indicates that a stable whirlpool has formed over the drain. Because the horizontal inward pulling forces ($3x\mathbf{i} + 3y\mathbf{j}$) perfectly balance the downward rushing evacuation flow ($-6z\mathbf{k}$), the drain is operating at its maximum structural mass-balance capacity without backing up or surging.
    