### **Given Vector Fields**

- **Field A (Airflow in a duct):** $\mathbf{F}_{A}(x,y,z) = (2x)\mathbf{i} + (2y)\mathbf{j} + (2z)\mathbf{k}$
    
- **Field B (Magnetic field model):** $\mathbf{F}_{B}(x,y,z) = -y\mathbf{i} + x\mathbf{j} + 0\mathbf{k}$
    

### **Task 1: Compute the divergence for each field**

The divergence formula is: $\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$

#### **Field A:**

$$\nabla \cdot \mathbf{F}_{A} = \frac{\partial}{\partial x}(2x) + \frac{\partial}{\partial y}(2y) + \frac{\partial}{\partial z}(2z)$$

$$\nabla \cdot \mathbf{F}_{A} = 2 + 2 + 2 = 6$$

#### **Field B:**

$$\nabla \cdot \mathbf{F}_{B} = \frac{\partial}{\partial x}(-y) + \frac{\partial}{\partial y}(x) + \frac{\partial}{\partial z}(0)$$

$$\nabla \cdot \mathbf{F}_{B} = 0 + 0 + 0 = 0$$

### **Task 2: Compute the curl for each field**

The curl formula is: $\nabla \times \mathbf{F} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\mathbf{i} + \left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right)\mathbf{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\mathbf{k}$

#### **Field A:**

- $\mathbf{i}$-component: $\frac{\partial}{\partial y}(2z) - \frac{\partial}{\partial z}(2y) = 0 - 0 = 0$
    
- $\mathbf{j}$-component: $\frac{\partial}{\partial z}(2x) - \frac{\partial}{\partial x}(2z) = 0 - 0 = 0$
    
- $\mathbf{k}$-component: $\frac{\partial}{\partial x}(2y) - \frac{\partial}{\partial y}(2x) = 0 - 0 = 0$
    

$$\nabla \times \mathbf{F}_{A} = 0\mathbf{i} + 0\mathbf{j} + 0\mathbf{k} = \mathbf{0}$$

#### **Field B:**

- $\mathbf{i}$-component: $\frac{\partial}{\partial y}(0) - \frac{\partial}{\partial z}(x) = 0 - 0 = 0$
    
- $\mathbf{j}$-component: $\frac{\partial}{\partial z}(-y) - \frac{\partial}{\partial x}(0) = 0 - 0 = 0$
    
- $\mathbf{k}$-component: $\frac{\partial}{\partial x}(x) - \frac{\partial}{\partial y}(-y) = 1 - (-1) = 2$
    

$$\nabla \times \mathbf{F}_{B} = 0\mathbf{i} + 0\mathbf{j} + 2\mathbf{k} = 2\mathbf{k}$$

### **Task 3: Classify each field**

- **Field A:** * **Source-like** (because the divergence is positive: $6 > 0$).
    
    - **Irrotational** (because the curl is the zero vector: $\mathbf{0}$).
        
- **Field B:** * **Incompressible** (because the divergence is exactly $0$).
    
    - **Rotational** (because the curl is non-zero: $2\mathbf{k}$).
        

### **Task 4: Interpreting the context**

- **For Field A (Airflow in a duct):** Since the divergence is a positive constant ($+6$), air is constantly moving outward from any local point. In the context of a duct system, this means fluid volume is actively being added to the stream, suggesting an **injection** of air along the path.
    
- **For Field B (Magnetic field model):** Since the curl is a constant vector pointing along the positive $z$-axis ($2\mathbf{k}$), it means the magnetic field lines exhibit a uniform **counterclockwise rotational behavior** swirling around the $z$-axis. This structurally mimics the magnetic field generated around a straight current-carrying wire.