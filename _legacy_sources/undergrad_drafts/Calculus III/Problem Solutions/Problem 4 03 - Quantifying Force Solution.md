Here is the step-by-step solution to the problem in the image:

### **Problem Statement**

Calculate $\vec{p} \times \vec{q}$ using a determinant if $\vec{p} = 2\hat{i} + 4\hat{j}$ and $\vec{q} = -4\hat{i} - 5\hat{j}$.

### **Formula**

Even though these vectors are in 2D ($\hat{i}$ and $\hat{j}$ components), the cross product requires a 3D space because the resulting vector points perpendicular to the $xy$-plane (along the $\hat{k}$ axis). We treat the $\hat{k}$ components as $0$:

$$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ p_x & p_y & p_z \\ q_x & q_y & q_z \end{vmatrix}$$

### **Step-by-Step Calculation**

1. **Set up the matrix determinant** with $p_z = 0$ and $q_z = 0$:
    
    $$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 4 & 0 \\ -4 & -5 & 0 \end{vmatrix}$$
    
2. **Expand the determinant** along the top row:
    
    $$\vec{p} \times \vec{q} = \hat{i}\begin{vmatrix} 4 & 0 \\ -5 & 0 \end{vmatrix} - \hat{j}\begin{vmatrix} 2 & 0 \\ -4 & 0 \end{vmatrix} + \hat{k}\begin{vmatrix} 2 & 4 \\ -4 & -5 \end{vmatrix}$$
    
3. **Evaluate each 2x2 minor**:
    
    - **$\hat{i}$ component:** $(4 \cdot 0) - (0 \cdot -5) = 0$
        
    - **$\hat{j}$ component:** $(2 \cdot 0) - (0 \cdot -4) = 0$
        
    - **$\hat{k}$ component:** $(2 \cdot -5) - (4 \cdot -4) = -10 - (-16) = -10 + 16 = 6$
        
4. **Combine the components**:
    
    $$\vec{p} \times \vec{q} = 0\hat{i} - 0\hat{j} + 6\hat{k}$$
    
    $$\vec{p} \times \vec{q} = 6\hat{k}$$
    

### **Final Answer**

The cross product is **$6\hat{k}$** (or $\langle 0, 0, 6 \rangle$).