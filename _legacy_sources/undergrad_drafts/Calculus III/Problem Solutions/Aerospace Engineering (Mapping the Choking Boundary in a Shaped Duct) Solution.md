An aerospace propulsion group is designing a highly customized ventilation duct. The complex 3D airflow velocity field inside the duct housing is modeled by the vector function:

$$\mathbf{V}(x,y,z) = (x^2 y)\mathbf{i} + (y^2 z)\mathbf{j} + (z)\mathbf{k}$$

Find the equation of the boundary surface where the air transitions from a compressing state to an expanding state. Isolate $z$ to define this geometric interface.

#### **Solution:**

1. **Compute the partial derivatives of the flow field:**
    
    - $\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(x^2 y) = 2xy$
        
    - $\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(y^2 z) = 2yz$
        
    - $\frac{\partial R}{\partial z} = \frac{\partial}{\partial z}(z) = 1$
        
2. **Establish the zero-expansion boundary condition ($\nabla \cdot \mathbf{V} = 0$):**
    
    $$2xy + 2yz + 1 = 0$$
    
3. **Isolate $z$ to map the physical boundary sheet:**
    
    $$2yz = -1 - 2xy$$
    
    $$z = \frac{-1 - 2xy}{2y} = -\frac{1}{2y} - x$$
    

#### **Meaning of the Answer & Real-Life Application:**

The synthesis reveals a continuous, curved hyperbolic paraboloid surface defined by $z = -x - \frac{1}{2y}$.

In aerospace duct design, this surface represents the exact physical boundary layer where the air transitions from a density sink ($\nabla \cdot \mathbf{V} < 0$) to an expanding source ($\nabla \cdot \mathbf{V} > 0$). Knowing the exact geometric coordinates of this invisible threshold allows engineers to structurally modify the duct's physical walls. By matching the hardware casing to this transition surface, they can minimize localized turbulence, eliminate pressure-drop zones, and prevent acoustic choking during high-velocity operation.
