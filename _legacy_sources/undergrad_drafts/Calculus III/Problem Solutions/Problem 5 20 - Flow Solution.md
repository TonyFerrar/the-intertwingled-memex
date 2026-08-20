### **Given Vector Field**

$$\mathbf{F}(x,y) = -y\mathbf{i} + x\mathbf{j}$$

### **Task 1: Compute the divergence $\nabla \cdot \mathbf{F}(x,y)$**

For a 2D vector field where $\mathbf{F} = P\mathbf{i} + Q\mathbf{j}$, the components are $P(x,y) = -y$ and $Q(x,y) = x$.

The divergence is calculated as:

$$\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}$$

1. **Find $\frac{\partial P}{\partial x}$:**
    
    $$\frac{\partial}{\partial x}(-y) = 0$$
    
2. **Find $\frac{\partial Q}{\partial y}$:**
    
    $$\frac{\partial}{\partial y}(x) = 0$$
    

Summing them together:

$$\nabla \cdot \mathbf{F} = 0 + 0 = 0$$

### **Task 2: Compute the 2D curl (scalar)**

The 2D scalar curl is defined as:

$$\text{curl } \mathbf{F} = \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$$

1. **Find $\frac{\partial Q}{\partial x}$:**
    
    $$\frac{\partial}{\partial x}(x) = 1$$
    
2. **Find $\frac{\partial P}{\partial y}$:**
    
    $$\frac{\partial}{\partial y}(-y) = -1$$
    

Subtracting the two partial derivatives:

$$\text{curl } \mathbf{F} = 1 - (-1) = 1 + 1 = 2$$

### **Task 3: Classify the field**

- **Incompressible or not:** Because the divergence is exactly $0$, the field is **incompressible**.
    
- **Rotational or irrotational:** Because the curl is non-zero ($+2$), the field is **rotational**.
    

### **Task 4: Plain language explanation**

This model perfectly captures a pure, steady vortex of swirling air:

- **The Rotation (Curl = 2):** The positive value tells us that the air under the ceiling fan is spinning in a uniform, counterclockwise direction around the center point (the origin). If you dropped a tiny leaf into this airflow, it would circle around the room while spinning on its own axis.
    
- **The Flow Consistency (Divergence = 0):** A divergence of zero means that air is neither bunching up (compressing) nor thinning out (expanding) anywhere in the plane. The air simply moves along closed circular paths at a steady rate—whatever volume of air enters a region pushes an equal volume out, maintaining a perfectly balanced, continuous circulation.