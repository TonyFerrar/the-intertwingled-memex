# Skill 3: Matrix Methods for Multiple Equations

## 1. Explanatory Notes

### The Computational Boundary of Manual Algebra

Substitution and elimination work effectively for small systems of equations, but they quickly become highly impractical as systems scale up to handle complex engineering networks (such as tracking four or more unknown variables simultaneously). To evaluate any linear system, a fundamental rule must first be met: you must possess exactly $N$ independent equations to solve for $N$ unknown variables. When systems satisfy this condition, matrix linear algebra allows a computer to bypass manual calculation steps entirely, which is essential for workflows like Partial Fraction Expansion.

### Formulating the Matrix System ($[A][x] = [b]$)

To allow a computer tool to solve multiple equations at once, the system must be grouped into a standard matrix format notation:

$$[A][x] = [b]$$

This system is built by pulling data from the equations into three distinct components:

- **The Coefficient Matrix ($[A]$):** A square matrix containing only the numerical coefficients multiplying the unknown variables, arranged row-by-row to mirror the equations.
    
- **The Unknown Variable Vector ($[x]$):** A single column vector stacking the target unknown variables in the exact order their corresponding coefficients appear from left to right.
    
- **The Constant Vector ($[b]$):** A single column vector collecting the standalone constants located on the right side of the equals signs.
    

### Matrix Multiplication Mechanics

The relationship between the coefficient matrix and the variable vector is governed by matrix multiplication. The core mechanism can be conceptualized as a process where you **"dump rows down columns"**.

To find the values of a row in the resulting matrix, you take a horizontal row from the first matrix, rotate it vertically, and multiply its matching elements across the vertical column of the second matrix before adding the products together.

### Solving via Inversion

To isolate the unknown variable vector $[x]$ from the equation $[A][x] = [b]$, you cannot simply divide by a matrix, as matrix division does not exist. Instead, you multiply both sides from the left by the matrix's inverse, denoted as $[A]^{-1}$. Because a matrix multiplied by its inverse cancels out to form an identity matrix, the isolation formula becomes:

$$[x] = [A]^{-1}[b]$$

Finding an inverse matrix manually is computationally challenging, which is why engineering software handles this step automatically, allowing the user to simply evaluate the final vector product.

## 2. Standard Practice Problems

### Problem A: Translating to Matrix Form

Convert the following system of linear equations into its standard matrix equation format ($[A][x] = [b]$) and verify the structure using row-by-column multiplication:

$$2x + 5y = 11$$

$$-3x + 4y = 5$$

#### Solution A

Extracting the coefficients, variables, and constants yields the system:

$$\begin{bmatrix} 2 & 5 \\ -3 & 4 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 11 \\ 5 \end{bmatrix}$$

Verification via "dumping rows down columns":

- **Row 1:** $(2 \cdot x) + (5 \cdot y) = 2x + 5y$ (Matches Equation 1 left-hand side)
    
- **Row 2:** $(-3 \cdot x) + (4 \cdot y) = -3x + 4y$ (Matches Equation 2 left-hand side)
    

### Problem B: Solving with a Given Inverse

A computational tool has determined that the inverse of a system's coefficient matrix is $[A]^{-1} = \begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix}$.

Calculate the exact values of the unknown variable vector $[x]$ if the constant vector is $[b] = \begin{bmatrix} 3 \\ 14 \end{bmatrix}$.

#### Solution B

Apply the matrix isolation formula $[x] = \begin{bmatrix} A \end{bmatrix}^{-1}\begin{bmatrix} b \end{bmatrix}$:

$$[x] = \begin{bmatrix} 2 & -1 \\ -5 & 3 \end{bmatrix} \begin{bmatrix} 3 \\ 14 \end{bmatrix}$$

Perform the row-by-column calculations:

- **Top Element:** $(2 \cdot 3) + (-1 \cdot 14) = 6 - 14 = -8$
    
- **Bottom Element:** $(-5 \cdot 3) + (3 \cdot 14) = -15 + 42 = 27$
    

$$[x] = \begin{bmatrix} -8 \\ 27 \end{bmatrix}$$

## 3. Real-Life Engineering Application Problems

### Problem 1: [[Electrical Engineering (Mesh Current Analysis)]]
[[Electrical Engineering (Mesh Current Analysis) Solution]]


### Problem 2: [[Structural Engineering (Truss Member Forces)]]
[[Structural Engineering (Truss Member Forces) Solution]]

    

### Problem 3: [[Control Systems Engineering (Drone Stabilization Loops)]]
[[Control Systems Engineering (Drone Stabilization Loops) Solution]]
