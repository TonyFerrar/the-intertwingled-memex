Here is the step-by-step solution to the problem in the image:

### **Problem Statement**

Let $\vec{r} = \vec{OP} = (2\hat{i} + \hat{j})\text{ m}$. A force $\vec{F} = \langle 0, 12, 0 \rangle\text{ N}$ is applied at $P$. Find the torque about $O$ that is produced, measured in $\text{N} \cdot \text{m}$.

### **Formula**

Torque ($\vec{\tau}$) is a vector quantity calculated using the cross product of the position vector ($\vec{r}$) and the force vector ($\vec{F}$):

$$\vec{\tau} = \vec{r} \times \vec{F}$$

We compute this using a $3 \times 3$ matrix determinant:

$$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix}$$

### **Step-by-Step Calculation**

#### **Step 1: Identify vector components**

- **Position vector ($\vec{r}$):** Given as $2\hat{i} + \hat{j}\text{ m}$, which means:
    
    $$r_x = 2, \ r_y = 1, \ r_z = 0$$
    
- **Force vector ($\vec{F}$):** Given as $\langle 0, 12, 0 \rangle\text{ N}$, which means:
    
    $$F_x = 0, \ F_y = 12, \ F_z = 0$$
    

#### **Step 2: Set up the matrix determinant**

$$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 1 & 0 \\ 0 & 12 & 0 \end{vmatrix}$$

#### **Step 3: Expand along the top row**

$$\vec{\tau} = \hat{i}\begin{vmatrix} 1 & 0 \\ 12 & 0 \end{vmatrix} - \hat{j}\begin{vmatrix} 2 & 0 \\ 0 & 0 \end{vmatrix} + \hat{k}\begin{vmatrix} 2 & 1 \\ 0 & 12 \end{vmatrix}$$

#### **Step 4: Evaluate the 2x2 minors**

- **$\hat{i}$ component:** $(1 \cdot 0) - (0 \cdot 12) = 0$
    
- **$\hat{j}$ component:** $(2 \cdot 0) - (0 \cdot 0) = 0$
    
- **$\hat{k}$ component:** $(2 \cdot 12) - (1 \cdot 0) = 24 - 0 = 24$
    

Combine the components:

$$\vec{\tau} = 0\hat{i} - 0\hat{j} + 24\hat{k} = 24\hat{k}$$

### **Final Answer**

The torque about $O$ is **$24\hat{k}\text{ N}\cdot\text{m}$** (or simply a magnitude of **$24\text{ N}\cdot\text{m}$** pointing out along the $z$-axis).