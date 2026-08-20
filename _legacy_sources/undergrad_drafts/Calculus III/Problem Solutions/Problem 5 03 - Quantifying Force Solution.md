Here is the step-by-step solution to the problem in the image:

### **Problem Statement**

Calculate $\vec{r} \times \vec{F}$ where $\vec{r} = \langle 3, 2 \rangle$ and $\vec{F} = \langle -2, 5 \rangle$.

### **Formula**

For 2D vectors lying in the $xy$-plane, we extend them into 3D by setting their $z$-components to $0$ ($r_z = 0$ and $F_z = 0$). The cross product is computed using a $3 \times 3$ determinant:

$$\vec{r} \times \vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix}$$

### **Step-by-Step Calculation**

1. **Set up the determinant matrix**:
    
    $$\vec{r} \times \vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 3 & 2 & 0 \\ -2 & 5 & 0 \end{vmatrix}$$
    
2. **Expand the determinant along the top row**:
    
    $$\vec{r} \times \vec{F} = \hat{i}\begin{vmatrix} 2 & 0 \\ 5 & 0 \end{vmatrix} - \hat{j}\begin{vmatrix} 3 & 0 \\ -2 & 0 \end{vmatrix} + \hat{k}\begin{vmatrix} 3 & 2 \\ -2 & 5 \end{vmatrix}$$
    
3. **Evaluate the 2x2 minors**:
    
    - **$\hat{i}$ component:** $(2 \cdot 0) - (0 \cdot 5) = 0$
        
    - **$\hat{j}$ component:** $(3 \cdot 0) - (0 \cdot -2) = 0$
        
    - **$\hat{k}$ component:** $(3 \cdot 5) - (2 \cdot -2) = 15 - (-4) = 15 + 4 = 19$
        
4. **Combine the components**:
    
    $$\vec{r} \times \vec{F} = 0\hat{i} - 0\hat{j} + 19\hat{k}$$
    
    $$\vec{r} \times \vec{F} = 19\hat{k}$$
    

### **Final Answer**

The cross product is **$19\hat{k}$** (or written in component form as $\langle 0, 0, 19 \rangle$).