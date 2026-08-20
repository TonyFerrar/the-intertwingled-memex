
### Step 1: Write the System as a Matrix Equation ($Ax = b$)

To construct the matrix form, align the concentration variables ($C_1$, $C_2$, and $C_3$) in order for all three equations. If a variable is missing from a specific pond's equation, insert a `0` coefficient to preserve the alignment:

1. **Pond 1:** $4C_1 - 1C_2 + 0C_3 = 8$
    
2. **Pond 2:** $-1C_1 + 3C_2 - 1C_3 = 12$
    
3. **Pond 3:** $0C_1 - 1C_2 + 2C_3 = 4$
    

Now we separate this system into the standard $Ax = b$ matrix components:

- **Coefficient Matrix ($A$):**
    
    $$A = \begin{bmatrix} 4 & -1 & 0 \\ -1 & 3 & -1 \\ 0 & -1 & 2 \end{bmatrix}$$
    
- **Variable Column Vector ($x$):**
    
    $$x = \begin{bmatrix} C_1 \\ C_2 \\ C_3 \end{bmatrix}$$
    
- **Constant Column Vector ($b$):**
    
    $$b = \begin{bmatrix} 8 \\ 12 \\ 4 \end{bmatrix}$$
    

Combined matrix representation:

$$\begin{bmatrix} 4 & -1 & 0 \\ -1 & 3 & -1 \\ 0 & -1 & 2 \end{bmatrix} \begin{bmatrix} C_1 \\ C_2 \\ C_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 12 \\ 4 \end{bmatrix}$$

### Step 2: Compute the Inverse Matrix ($A^{-1}$)

Following the problem instructions to use a matrix calculator to find $A^{-1}$, entering matrix $A$ provides the following exact fraction outputs and corresponding decimal approximations:

$$A^{-1} = \begin{bmatrix} \frac{5}{18} & \frac{1}{9} & \frac{1}{18} \\ \frac{1}{9} & \frac{4}{9} & \frac{2}{9} \\ \frac{1}{18} & \frac{2}{9} & \frac{11}{18} \end{bmatrix} \approx \begin{bmatrix} 0.2778 & 0.1111 & 0.0556 \\ 0.1111 & 0.4444 & 0.2222 \\ 0.0556 & 0.2222 & 0.6111 \end{bmatrix}$$

### Step 3: Solve for the Concentration Vector ($x = A^{-1}b$)

Now, multiply the inverse matrix $A^{-1}$ by the constants vector $b$ to isolate the unknown concentrations:

$$x = A^{-1}b$$

$$x = \begin{bmatrix} \frac{5}{18} & \frac{1}{9} & \frac{1}{18} \\ \frac{1}{9} & \frac{4}{9} & \frac{2}{9} \\ \frac{1}{18} & \frac{2}{9} & \frac{11}{18} \end{bmatrix} \begin{bmatrix} 8 \\ 12 \\ 4 \end{bmatrix}$$

Perform row-by-column matrix multiplication:

- **Top Row ($C_1$):**
    
    $$\left(\frac{5}{18} \cdot 8\right) + \left(\frac{1}{9} \cdot 12\right) + \left(\frac{1}{18} \cdot 4\right) = \frac{40}{18} + \frac{24}{18} + \frac{4}{18} = \frac{68}{18} = \frac{34}{9}$$
    
- **Middle Row ($C_2$):**
    
    $$\left(\frac{1}{9} \cdot 8\right) + \left(\frac{4}{9} \cdot 12\right) + \left(\frac{2}{9} \cdot 4\right) = \frac{8}{9} + \frac{48}{9} + \frac{8}{9} = \frac{64}{9}$$
    
- **Bottom Row ($C_3$):**
    
    $$\left(\frac{1}{18} \cdot 8\right) + \left(\frac{2}{9} \cdot 12\right) + \left(\frac{11}{18} \cdot 4\right) = \frac{8}{18} + \frac{48}{18} + \frac{44}{18} = \frac{100}{18} = \frac{50}{9}$$
    

This gives the final solution vector:

$$x = \begin{bmatrix} \frac{34}{9} \\ \frac{64}{9} \\ \frac{50}{9} \end{bmatrix}$$

### Final Engineering Interpretation

Interpreting each computed value back into the environmental tracking context:

- **Dye concentration in Pond 1 ($C_1$):** $\frac{34}{9} \approx \mathbf{3.78 \text{ units}}$
    
- **Dye concentration in Pond 2 ($C_2$):** $\frac{64}{9} \approx \mathbf{7.11 \text{ units}}$
    
- **Dye concentration in Pond 3 ($C_3$):** $\frac{50}{9} \approx \mathbf{5.56 \text{ units}}$