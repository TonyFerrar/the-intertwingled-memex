# Skill 3: Solving Multi-Variable Linear Systems (Matrix Methods)

## 1. Core Concepts & Lecture Notes

### The Engineering Challenge: Interconnected Systems

In many engineering systems, physical variables are completely dependent on one another. Changing a single constraint—such as a structural load on a bridge truss or a voltage source in a circuit—instantly shifts the balance across the entire system.

When you model these networks mathematically using laws like $\Sigma F = 0$ (force equilibrium) or Kirchhoff's laws, you end up with a large system of linear equations with multiple unknowns. Trying to solve a system of 5, 10, or 100 equations by hand using old-school algebraic substitution is mathematically painful and highly prone to arithmetic errors.

### The Matrix Solution Setup

To handle massive networks efficiently, engineers pull the numbers out of the text equations and organize them into structured arrays called **matrices**. Any system of linear equations can be cleanly rewritten in the standard matrix form:

$$[A][X] = [B]$$

Where:

- $[A]$ is the **Coefficient Matrix** (an $n \times n$ grid containing all the fixed numerical multipliers attached to your variables).
    
- $[X]$ is the **Unknown Vector** (a single column containing the unknown variables you want to solve for, such as currents $I_1, I_2$ or forces $F_1, F_2$).
    
- $[B]$ is the **Constant Vector** (a single column containing the fixed output constants or external forces from the right side of the equals signs).
    

### Matrix Multiplication Mechanics: "Dropping Rows down Columns"

To translate a matrix equation back into standard algebraic equations, or vice versa, you follow the fundamental rule of matrix multiplication: **drop rows down columns**.

When multiplying a matrix by a column vector, you take the horizontal elements of a row from the first matrix, rotate them vertically, multiply them element-by-element by the corresponding vertical pieces of the column vector, and add the products together.

### Isolating the Unknowns via Matrix Inversion

In basic algebra, if you have $4x = 12$, you solve for $x$ by dividing by 4 ($x = \frac{12}{4}$). In matrix algebra, **division does not exist**. Instead, to clear out the coefficient matrix $[A]$ and isolate your unknowns, you must multiply by the matrix equivalent of a reciprocal: the **Inverse Matrix**, denoted as $[A]^{-1}$.

By multiplying both sides of our standard matrix equation by the inverse from the left, we isolate our solution vector:

$$[A]^{-1}[A][X] = [A]^{-1}[B]$$

$$[X] = [A]^{-1}[B]$$

In practice, engineers don't calculate inverses for large matrices by hand. They input matrix $[A]$ and matrix $[B]$ into a computational tool (like Google Sheets using the built-in functions `=MINVERSE` and `=MMULT`) to find the unknown values instantly.

## 2. General Sample Problems

### Problem 1: System Translation to Matrix Notation

An engineer derives the following simultaneous equations while modeling an equilibrium system:

$$\begin{aligned} 5x - 3y + z &= 14 \\ 2x + 8y - 4z &= -2 \\ -x + 4y + 6z &= 21 \end{aligned}$$

Translate this system into the standard matrix form $[A][X] = [B]$.

#### Solution

$$\begin{bmatrix} 5 & -3 & 1 \\ 2 & 8 & -4 \\ -1 & 4 & 6 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 14 \\ -2 & \\ 21 \end{bmatrix}$$

- **Why?** Matrix $[A]$ strips away the variable letters and collects only the coefficients. Notice that the negative signs remain attached to their respective values, and the $-x$ in row 3 is recorded as a coefficient of $-1$.
    

### Problem 2: Matrix Multiplication Verification

Perform the manual matrix multiplication below by dropping the row down into the column vector:

$$\begin{bmatrix} 4 & -2 \\ 1 & 5 \end{bmatrix} \begin{bmatrix} 3 \\ 2 \end{bmatrix}$$

#### Solution

- **Top Entry Calculation:** Multiply the first row by the column: $(4 \times 3) + (-2 \times 2) = 12 - 4 = 8$
    
- **Bottom Entry Calculation:** Multiply the second row by the column: $(1 \times 3) + (5 \times 2) = 3 + 10 = 13$
    
- **Final Output Vector:**
    
    $$\begin{bmatrix} 8 \\ 13 \end{bmatrix}$$
    

## 3. Real-Life Engineering Application Problems

### Problem 3: [[Structural Engineering — Joint Load Analysis on a Bridge Truss]]
[[Structural Engineering — Joint Load Analysis on a Bridge Truss Solution]]

### Problem 4: [[Electrical Engineering — Nodal Voltage Distribution in a Circuit]]
[[Electrical Engineering — Nodal Voltage Distribution in a Circuit Solution]]


### Problem 5: [[Robotics & Automation — Kinematic Position Controls]]
[[Robotics & Automation — Kinematic Position Controls Solution]]
