An aerospace engineer uses sensors to map out supersonic airflow passing through a narrowing engine inlet duct. The air velocity vector field $\mathbf{V}$ (in meters per second) is modeled by:

$$\mathbf{V}(x,y,z) = \ln(x^2 + y^2 + 1)\mathbf{i} + (e^{-xy})\mathbf{j} + (5z - z^2)\mathbf{k}$$

Calculate the divergence of the velocity field at the point $(0, 2, 3)$ to check for localized aerodynamic choking.

#### **Solution:**

1. **Compute $\frac{\partial P}{\partial x}$ using the Chain Rule:**
    
    Isolate $y$ and $1$ as constants.
    
    $$\frac{\partial P}{\partial x} = \frac{1}{x^2 + y^2 + 1} \cdot \frac{\partial}{\partial x}(x^2 + y^2 + 1) = \frac{2x}{x^2 + y^2 + 1}$$
    
2. **Compute $\frac{\partial Q}{\partial y}$ using the Chain Rule:**
    
    Isolate the negative variable coefficient $x$ as a constant.
    
    $$\frac{\partial Q}{\partial y} = e^{-xy} \cdot \frac{\partial}{\partial y}(-xy) = -x e^{-xy}$$
    
3. **Compute $\frac{\partial R}{\partial z}$ using basic power rules:**
    
    $$\frac{\partial R}{\partial z} = 5 - 2z$$
    

Combine the terms to yield the symbolic equation:

$$\nabla \cdot \mathbf{V} = \frac{2x}{x^2 + y^2 + 1} - x e^{-xy} + 5 - 2z$$

Now, evaluate at the spatial coordinate point $(0, 2, 3)$:

$$\nabla \cdot \mathbf{V}(0,2,3) = \frac{2(0)}{0^2 + 2^2 + 1} - (0)e^{-(0)(2)} + 5 - 2(3) = 0 - 0 + 5 - 6 = -1\text{ s}^{-1}$$

#### **Meaning of the Answer & Real-Life Application:**

The calculated divergence value is **negative** ($\nabla \cdot \mathbf{V} = -1$).

In aerospace design, a negative velocity divergence indicates that fluid mass is compressing locally into a smaller space, serving as a fluid sink. Because air is highly compressible at high speeds, this structural accumulation indicates a rapid density spike inside the intake. The engineer uses this value to calculate pressure distribution along the intake walls, ensuring the geometry prevents boundary layer separation or shock wave formations that could trigger a catastrophic engine stall.