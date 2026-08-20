## Step 1: Write the System in Matrix Form ($Ax = b$)

To see how the numbers interact, let's group the system of equations into the standard matrix structure:

$$\begin{cases} R_1 + R_2 + R_3 = 80 \\ 2R_1 + 4R_2 + 6R_3 = 240 \end{cases}$$

- **Coefficient Matrix ($A$):** Pulling the weights from the reactions gives a rectangular layout with 2 rows and 3 columns.
    
    $$A = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 4 & 6 \end{bmatrix}$$
    
- **Variable Vector ($x$):** The 3 unknown foundation forces.
    
    $$x = \begin{bmatrix} R_1 \\ R_2 \\ R_3 \end{bmatrix}$$
    
- **Constant Vector ($b$):** The loading conditions.
    
    $$b = \begin{bmatrix} 80 \\ 240 \end{bmatrix}$$
    

## Step 2: The Mathematical Explanation (Why it lacks a unique solution)

There are two primary reasons why this matrix configuration cannot isolate a single unique answer:

### 1. The System is Underdetermined (Non-Square Matrix)

A unique solution requires a perfect one-to-one balance between constraints and unknowns. Because matrix $A$ is a rectangular $2 \times 3$ shape, it represents fewer equations (2 constraints) than variables (3 unknowns).

### 2. The Matrix Inversion Method Fails

To compute a unique solution vector via $x = A^{-1}b$, the coefficient matrix must be square ($n \times n$) to calculate a determinant and find an inverse ($A^{-1}$). Because $A$ is not square, **$\det(A)$ is undefined and $A^{-1}$ does not exist**.

### 3. The Equations "Overlap" (Consistent, Dependent System)

If you reduce the rows to see how they interact algebraically:

- Multiply the first equation by 2: $2R_1 + 2R_2 + 2R_3 = 160$
    
- Subtract this from the second equation: $(2R_1 + 4R_2 + 6R_3) - (2R_1 + 2R_2 + 2R_3) = 240 - 160$
    
- This simplifies to: $2R_2 + 4R_3 = 80 \implies R_2 + 2R_3 = 40$
    

We can choose _any_ value for $R_3$ (making it a "free variable"), and calculate valid matching numbers for $R_1$ and $R_2$. Because the equations are mathematically compatible but leave a variable free, the system falls under the **Consistent, Dependent** category, meaning it contains **infinitely many solutions**.

## Step 3: Physical Engineering Interpretation

For a civil engineer, this mathematical condition represents **static indeterminacy**.

When a foundation beam rests on three rigid supports, basic rigid-body physics equations (balancing upward forces and balancing rotational moments) only give you 2 equations of equilibrium. This is physically not enough information to pinpoint how the load splits among the columns.

### What it means for the designer:

- **Statics alone is insufficient:** You cannot solve the true load on each individual support using simple force balances.
    
- **Material properties matter:** In reality, the exact distribution of those 80 units of force depends heavily on physical variables missing from basic linear setups —such as how much the concrete beam flexes, the elasticity of the support columns, and whether the ground soil undergoes minor settling underneath one of the locations.
    
- **Next Steps:** To get a single exact target answer, the engineer must upgrade their structural model to incorporate material deformation equations (compatibility equations) alongside these base matrix constraints.