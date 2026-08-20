Here is the complete step-by-step solution to solve the mesh current equations using the matrix inverse method.

### Part 1: Write the System as a Matrix Equation ($Ax = b$)

To express the mesh current equations as a matrix equation, align the variables ($I_1$ and $I_2$) so that rows correspond to equations and columns correspond to variable coefficients:

$$\begin{cases} 8I_1 - 3I_2 = 12 \\ -3I_1 + 6I_2 = -5 \end{cases}$$

- **Coefficient Matrix ($A$):** Pull the numerical multipliers from each variable.
    
    $$A = \begin{bmatrix} 8 & -3 \\ -3 & 6 \end{bmatrix}$$
    
- **Variable Column Vector ($x$):** The vertical column of unknowns.
    
    $$x = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$$
    
- **Constant Column Vector ($b$):** The column containing values from the right-hand side of the equations.
    
    $$b = \begin{bmatrix} 12 \\ -5 \end{bmatrix}$$
    

Combining these elements into the canonical $Ax = b$ layout gives:

$$\begin{bmatrix} 8 & -3 \\ -3 & 6 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 12 \\ -5 \end{bmatrix}$$

### Part 2: Compute the Inverse Matrix ($A^{-1}$)

To solve for our variables, we must calculate the inverse of the coefficient matrix ($A^{-1}$). For any $2 \times 2$ matrix, the standard algebraic shortcut to find the inverse follows a strict formula:

1. **Calculate the determinant ($\det(A)$):**
    
    $$\det(A) = (a)(d) - (b)(c)$$
    
    $$\det(A) = (8)(6) - (-3)(-3) = 48 - 9 = 39$$
    
    Because $\det(A) \neq 0$, the matrix is non-singular, meaning a unique solution is guaranteed to exist.
    
2. **Form the Adjugate Matrix:**
    
    Swap the positions of $a$ and $d$ on the main diagonal (8 and 6 swap places), and reverse the signs of $b$ and $c$ on the off-diagonal ($-3$ and $-3$ become $3$ and $3$):
    
    $$\text{Adjugate}(A) = \begin{bmatrix} 6 & 3 \\ 3 & 8 \end{bmatrix}$$
    
3. **Scale by $1/\det(A)$:**
    
    $$A^{-1} = \frac{1}{39} \begin{bmatrix} 6 & 3 \\ 3 & 8 \end{bmatrix} = \begin{bmatrix} \frac{6}{39} & \frac{3}{39} \\ \frac{3}{39} & \frac{8}{39} \end{bmatrix} = \begin{bmatrix} \frac{2}{13} & \frac{1}{13} \\ \frac{1}{13} & \frac{8}{39} \end{bmatrix}$$
    

### Part 3: Calculate the Current Vector ($x = A^{-1}b$)

Now, find the solution vector by multiplying the calculated inverse matrix by the constants vector $b$. Keep in mind that order matters because matrix multiplication is not commutative ($A^{-1}b \neq bA^{-1}$):

$$x = A^{-1}b$$

$$x = \frac{1}{39} \begin{bmatrix} 6 & 3 \\ 3 & 8 \end{bmatrix} \begin{bmatrix} 12 \\ -5 \end{bmatrix}$$

Using the "row down column" multiplication rules:

- **Top row calculation ($I_1$):** $(6)(12) + (3)(-5) = 72 - 15 = 57$
    
- **Bottom row calculation ($I_2$):** $(3)(12) + (8)(-5) = 36 - 40 = -4$
    

This leaves us with:

$$x = \frac{1}{39} \begin{bmatrix} 57 \\ -4 \end{bmatrix} = \begin{bmatrix} \frac{57}{39} \\ -\frac{4}{39} \end{bmatrix}$$

Reducing the fractions yields the exact exact solution parameters:

$$x = \begin{bmatrix} \frac{19}{13} \\ -\frac{4}{39} \end{bmatrix}$$

### Final Engineering Interpretation

Interpreting each specific variable's value in its physical engineering context:

- **Loop Current 1 ($I_1$):** $\frac{19}{13}\text{ A} \approx 1.462\text{ A}$
    
- **Loop Current 2 ($I_2$):** $-\frac{4}{39}\text{ A} \approx -0.103\text{ A}$
    

> **Physical Note:** The negative sign for $I_2$ indicates to the engineer that the actual physical current in the second loop is moving in the exact opposite direction of the arrow assumed during circuit setup.