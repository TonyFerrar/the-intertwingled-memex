## Step 1: Verify Variable Alignment

Before extracting coefficients, ensure that the variables in every equation are perfectly ordered and aligned. In this system, the variables already flow sequentially from left to right as $x_1$, then $x_2$, and finally $x_3$ for all three equations:

1. $0.6x_1 + 0.1x_2 + 0.2x_3 = 120$
    
2. $0.2x_1 + 0.7x_2 + 0.1x_3 = 200$
    
3. $0.2x_1 + 0.2x_2 + 0.7x_3 = 150$
    

## Step 2: Extract the Variable Column Vector ($x$)

The variable vector $x$ groups all of your unknowns into a single vertical column:

$$x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$$

## Step 3: Extract the Constant Column Vector ($b$)

The constant vector $b$ holds the steady-state target values located on the right-hand side of the equal signs:

$$b = \begin{bmatrix} 120 \\ 200 \\ 150 \end{bmatrix}$$

## Step 4: Extract the Coefficient Matrix ($A$)

The coefficient matrix $A$ captures the numerical multipliers for each variable. Because we have 3 equations and 3 unknowns, this forms a $3 \times 3$ square matrix:

$$A = \begin{bmatrix} 0.6 & 0.1 & 0.2 \\ 0.2 & 0.7 & 0.1 \\ 0.2 & 0.2 & 0.7 \end{bmatrix}$$

## Final Matrix Equation ($Ax = b$)

Bringing all three components together into the standard $Ax = b$ framework gives the final matrix system:

$$\begin{bmatrix} 0.6 & 0.1 & 0.2 \\ 0.2 & 0.7 & 0.1 \\ 0.2 & 0.2 & 0.7 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 120 \\ 200 \\ 150 \end{bmatrix}$$