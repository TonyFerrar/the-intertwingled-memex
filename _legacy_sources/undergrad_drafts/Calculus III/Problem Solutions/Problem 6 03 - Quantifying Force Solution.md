Here is the step-by-step solution to the problem in the image:

### **Problem Statement**

Calculate $\vec{p} \times \vec{q}$ given $\vec{p} = 2\hat{i} + 4\hat{j} - 4\hat{k}$ and $\vec{q} = -4\hat{i} - 5\hat{j} - 2\hat{k}$.

### **Formula**

The cross product of two full 3D vectors is computed using a $3 \times 3$ matrix determinant:

$$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ p_x & p_y & p_z \\ q_x & q_y & q_z \end{vmatrix}$$

### **Step-by-Step Calculation**

1. **Set up the determinant matrix**:
    
    $$\vec{p} \times \vec{q} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 4 & -4 \\ -4 & -5 & -2 \end{vmatrix}$$
    
2. **Expand the determinant** along the top row:
    
    $$\vec{p} \times \vec{q} = \hat{i}\begin{vmatrix} 4 & -4 \\ -5 & -2 \end{vmatrix} - \hat{j}\begin{vmatrix} 2 & -4 \\ -4 & -2 \end{vmatrix} + \hat{k}\begin{vmatrix} 2 & 4 \\ -4 & -5 \end{vmatrix}$$
    
3. **Evaluate each 2x2 minor**:
    
    - **$\hat{i}$ component:**
        
        $$(4 \cdot -2) - (-4 \cdot -5) = -8 - (20) = -28$$
        
    - **$\hat{j}$ component:**
        
        $$(2 \cdot -2) - (-4 \cdot -4) = -4 - (16) = -20$$
        
        _(Remember the negative sign in front of the $\hat{j}$ bracket: $-(-20) = +20$)_
        
    - **$\hat{k}$ component:**
        
        $$(2 \cdot -5) - (4 \cdot -4) = -10 - (-16) = -10 + 16 = 6$$
        
4. **Combine the components**:
    
    $$\vec{p} \times \vec{q} = -28\hat{i} - (-20)\hat{j} + 6\hat{k}$$
    
    $$\vec{p} \times \vec{q} = -28\hat{i} + 20\hat{j} + 6\hat{k}$$
    

### **Final Answer**

The cross product is **$-28\hat{i} + 20\hat{j} + 6\hat{k}$** (or written in component form as $\langle -28, 20, 6 \rangle$).