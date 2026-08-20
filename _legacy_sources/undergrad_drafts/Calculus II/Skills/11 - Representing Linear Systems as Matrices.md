# Skill 1: Representing Linear Systems as Matrices

Matrix equations act as an engineer's universal language for modeling complex, multi-variable systems. Whether you are a mechanical engineer computing forces in a truss, an electrical engineer tracking circuit currents, a civil engineer balancing structural loads, or an entertainment engineer programming automated motion arrays, mastering how to express a system as a matrix equation sets the foundation for advanced computational modeling.

## Explanatory Notes

### 1. The Core Concept

A system of $n$ linear equations with $n$ variables can be written in a compact, standardized matrix form:

$$Ax = b$$

Where:

- **$A$ (Coefficient Matrix):** An $n \times n$ square array storing all the numerical multipliers attached to the variables.
    
- **$x$ (Variable Column Vector):** A vertical vector grouping all the unknown parameters you need to solve for.
    
- **$b$ (Constant Column Vector):** A vertical vector holding the fixed target constants or loading values on the right-hand side of the equal signs.
    

### 2. The Canonical Form

Before building a matrix, equations must be arranged into **Canonical Form**. This means all variables are aligned sequentially on the left side of the equals sign, while all pure constants sit on the right side:

$$\begin{matrix} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\ \vdots \\ a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n \end{matrix}$$

### 3. Step-by-Step Setup Process

To convert any raw system into a matrix equation, follow these three steps:

1. **Identify and Align:** Rearrange the equations into canonical form, ensuring every variable appears in the exact same column order across all rows. If a variable is missing from a row, explicitly write it with a coefficient of `0`.
    
2. **Form the Arrays:** Extract the numerical multipliers to construct matrix $A$, place the ordered unknowns into vector $x$, and place the right-side values into vector $b$.
    
3. **Assemble:** Write the final layout clearly in the structure $[A][x] = [b]$.
    

> **⚠️ Common Pitfall to Avoid:** Always keep row and column definitions uniform. A single misplaced coefficient or mixed-up sign is the leading cause of corrupted engineering simulation results.

## General Sample Problems

### Sample Problem 1: Standard $2 \times 2$ System

**Problem:** Convert the following system of linear equations into matrix form:

$$\begin{cases} 5x - 2y = 11 \\ 3y + 4x = 8 \end{cases}$$

**Solution:**

1. _Align the variables:_ The second equation has $y$ before $x$. Rearrange it to align with the first row:
    
    $$\begin{cases} 5x - 2y = 11 \\ 4x + 3y = 8 \end{cases}$$
    
2. _Extract the components:_
    
    $$A = \begin{bmatrix} 5 & -2 \\ 4 & 3 \end{bmatrix}, \quad x = \begin{bmatrix} x \\ y \end{bmatrix}, \quad b = \begin{bmatrix} 11 \\ 8 \end{bmatrix}$$
    
3. _Assemble:_
    
    $$\begin{bmatrix} 5 & -2 \\ 4 & 3 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 11 \\ 8 \end{bmatrix}$$
    

### Sample Problem 2: $3 \times 3$ System with Missing Variables

**Problem:** Convert the following system into matrix form:

$$\begin{cases} 2x_1 + x_3 = 4 \\ -3x_1 + 5x_2 - 2x_3 = -1 \\ x_2 + 6x_3 = 7 \end{cases}$$

**Solution:**

1. _Expose hidden coefficients:_ Write in the implicit `0` placeholders for missing variables:
    
    $$\begin{cases} 2x_1 + 0x_2 + 1x_3 = 4 \\ -3x_1 + 5x_2 - 2x_3 = -1 \\ 0x_1 + 1x_2 + 6x_3 = 7 \end{cases}$$
    
2. _Assemble into $Ax = b$:_
    
    $$\begin{bmatrix} 2 & 0 & 1 \\ -3 & 5 & -2 \\ 0 & 1 & 6 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 4 \\ -1 \\ 7 \end{bmatrix}$$
    

## Real-Life Engineering Application Problems

### Application 1: [[Civil & Structural Engineering – Truss Joint Analysis]]
[[Civil & Structural Engineering – Truss Joint Analysis Solution]]

    

### Application 2: [[Electrical Engineering – Microchip Mesh Current Analysis]]
[[Electrical Engineering – Microchip Mesh Current Analysis Solution]]


### Application 3: [[Chemical & Environmental Engineering – Bioreactor Stream Balance]]
[[Chemical & Environmental Engineering – Bioreactor Stream Balance Solution]]


### Application 4: [[Aerospace Engineering – Automated Flight Control Trim]]
[[Aerospace Engineering – Automated Flight Control Trim Solution]]
- 