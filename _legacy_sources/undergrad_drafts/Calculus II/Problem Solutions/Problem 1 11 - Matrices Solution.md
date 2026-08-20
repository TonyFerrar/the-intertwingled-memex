
## Step 1: Align the Equations and Expose Hidden Coefficients

To build a matrix properly, every variable must appear in every equation in the exact same order ($F_1$, then $F_2$, then $F_3$). If a variable is missing from an equation, its coefficient is implicitly `0`.

Rewriting your system to show all variables gives:

1. **Horizontal Balance:** $(\cos(45^\circ))F_1 + (-1)F_2 + (0)F_3 = 150$
    
2. **Vertical Balance:** $(\sin(45^\circ))F_1 + (0)F_2 + (1)F_3 = 300$
    

## Step 2: Extract the Variable Column Vector ($x$)

The variable vector $x$ lists all the unknowns in the system as a single column. As specified by the problem, your unknowns are $F_1$, $F_2$, and $F_3$:

$$x = \begin{bmatrix} F_1 \\ F_2 \\ F_3 \end{bmatrix}$$

## Step 3: Extract the Constant Column Vector ($b$)

The constant vector $b$ consists of the values on the right-hand side of the equal signs:

$$b = \begin{bmatrix} 150 \\ 300 \end{bmatrix}$$

## Step 4: Extract the Coefficient Matrix ($A$)

The coefficient matrix $A$ is formed by pulling the numerical multipliers of each variable from our aligned equations in Step 1. Each row corresponds to an equation, and each column corresponds to a variable:

$$A = \begin{bmatrix} \cos(45^\circ) & -1 & 0 \\ \sin(45^\circ) & 0 & 1 \end{bmatrix}$$

> **Engineering Note:** Since $\cos(45^\circ) = \sin(45^\circ) = \frac{\sqrt{2}}{2} \approx 0.7071$, engineers frequently write this matrix using decimal approximations to make computational solver entry straightforward:
> 
> $$A \approx \begin{bmatrix} 0.7071 & -1 & 0 \\ 0.7071 & 0 & 1 \end{bmatrix}$$

## Final Matrix Equation ($Ax = b$)

Combining all components into the universal $Ax = b$ format yields the complete system representation:

$$\begin{bmatrix} \cos(45^\circ) & -1 & 0 \\ \sin(45^\circ) & 0 & 1 \end{bmatrix} \begin{bmatrix} F_1 \\ F_2 \\ F_3 \end{bmatrix} = \begin{bmatrix} 150 \\ 300 \end{bmatrix}$$