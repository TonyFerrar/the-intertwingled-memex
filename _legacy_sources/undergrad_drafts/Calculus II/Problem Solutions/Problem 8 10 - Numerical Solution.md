## Part 1: Isolating the Unknown Vector $[x]$

To isolate the unknown vector $[x]$ from the standard linear system $[A][x] = [b]$ , you must multiply both sides of the equation from the left by the **inverse** of the coefficient matrix, denoted as $[A]^{-1}$.

Mathematically, multiplying a matrix by its own inverse cancels it out, reducing it to the identity matrix ($[A]^{-1}[A] = [I]$). This gives us the standard matrix isolation formula:

$$[x] = [A]^{-1}[b]$$

## Part 2: Computing the Exact Values

To find the exact values of the unknowns, substitute the given inverse matrix $[A]^{-1}$ and the constant vector $[b]$ directly into your isolation formula:

$$[x] = \begin{bmatrix} \frac{1}{7} & -\frac{2}{7} \\ \frac{2}{7} & \frac{3}{7} \end{bmatrix} \begin{bmatrix} 6 \\ 2 \end{bmatrix}$$

To calculate the resulting values, perform matrix multiplication by moving across the rows of the first matrix and down the column of the second matrix.

- **Top Unknown Variable ($A$):** Multiply the elements of the first row by the elements of the constant column:
    
    $$\left(\frac{1}{7} \cdot 6\right) + \left(-\frac{2}{7} \cdot 2\right) = \frac{6}{7} - \frac{4}{7} = \frac{2}{7}$$
    
- **Bottom Unknown Variable ($B$):** Multiply the elements of the second row by the elements of the constant column:
    
    $$\left(\frac{2}{7} \cdot 6\right) + \left(\frac{3}{7} \cdot 2\right) = \frac{12}{7} + \frac{6}{7} = \frac{18}{7}$$
    

## Final Vector Solution

Putting the computed elements back into the unknown vector gives the final exact answers for the system:

$$[x] = \begin{bmatrix} A \\ B \end{bmatrix} = \begin{bmatrix} \frac{2}{7} \\ \frac{18}{7} \end{bmatrix}$$