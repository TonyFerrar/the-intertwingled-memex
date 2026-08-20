## The Final Matrix Equation

The complete system written in the standard format $[A][x] = [b]$ is:

$$\begin{bmatrix} 3 & 2 \\ -2 & 1 \end{bmatrix} \begin{bmatrix} A \\ B \end{bmatrix} = \begin{bmatrix} 6 \\ 2 \end{bmatrix}$$

## Step-by-Step Breakdown

To convert a linear system of equations into matrix form, we separate the system into three distinct parts: the numbers multiplying the variables, the variables themselves, and the answers on the right side.

### 1. Identify the Coefficient Matrix $[A]$

The coefficient matrix collects only the numbers (coefficients) attached to the front of our unknown variables. We align them row by row, keeping columns dedicated to the same variable:

- **Row 1:** From $3A + 2B$, the coefficients are **3** and **2**.
    
- **Row 2:** From $-2A + B$, the coefficients are **-2** and **1** (since $B$ is implicitly $1B$).
    

Putting these rows together gives a $2 \times 2$ matrix:

$$[A] = \begin{bmatrix} 3 & 2 \\ -2 & 1 \end{bmatrix}$$

### 2. Identify the Unknown Variable Vector $[x]$

The unknown variable vector is a column vector listing all the variable names we are trying to calculate. They must be written in the exact same left-to-right order as they appear in the columns of our coefficient matrix:

- Our variables are $A$ and $B$.
    

This forms the column vector:

$$[x] = \begin{bmatrix} A \\ B \end{bmatrix}$$

### 3. Identify the Constant Vector $[b]$

The constant vector is a column vector containing the numbers on the right side of the equals signs. These values do not have any variables attached to them:

- **Row 1 Constant:** **6**
    
- **Row 2 Constant:** **2**
    

This forms the column vector:

$$[b] = \begin{bmatrix} 6 \\ 2 \end{bmatrix}$$