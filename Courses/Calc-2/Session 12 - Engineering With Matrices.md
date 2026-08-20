---
title: "Session 12 - Engineering With Matrices"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 12 - Engineering With Matrices

> [!abstract] Session Objectives & Overview
> By the end of this session, you will be able to:
> - Representing Linear Systems as Matrices

## Timeline & Session Breakdown

### 00:00 - 00:10 (10 mins) — Micro-Lecture: Motivation & Theory
> [!example] Engineering Context: Engineering Calculus II Application
> In this session, we investigate the mathematical principles of **Engineering With Matrices** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### 00:10 - 00:25 (15 mins) — Skill Block 1: Representing Linear Systems as Matrices
> [!note]- Theory & Derivations
> Matrix equations act as an engineer's universal language for modeling complex, multi-variable systems. Whether you are a mechanical engineer computing forces in a truss, an electrical engineer tracking circuit currents, a civil engineer balancing structural loads, or an entertainment engineer programming automated motion arrays, mastering how to express a system as a matrix equation sets the foundation for advanced computational modeling.
> 
> ## Explanatory Notes
> 
> ### 1. The Core Concept
> 
> A system of $n$ linear equations with $n$ variables can be written in a compact, standardized matrix form:
> 
> $$Ax = b$$
> 
> Where:
> 
> - **$A$ (Coefficient Matrix):** An $n \times n$ square array storing all the numerical multipliers attached to the variables.
>     
> - **$x$ (Variable Column Vector):** A vertical vector grouping all the unknown parameters you need to solve for.
>     
> - **$b$ (Constant Column Vector):** A vertical vector holding the fixed target constants or loading values on the right-hand side of the equal signs.
>     
> 
> ### 2. The Canonical Form
> 
> Before building a matrix, equations must be arranged into **Canonical Form**. This means all variables are aligned sequentially on the left side of the equals sign, while all pure constants sit on the right side:
> 
> $$\begin{matrix} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\ \vdots \\ a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n \end{matrix}$$
> 
> ### 3. Step-by-Step Setup Process
> 
> To convert any raw system into a matrix equation, follow these three steps:
> 
> 1. **Identify and Align:** Rearrange the equations into canonical form, ensuring every variable appears in the exact same column order across all rows. If a variable is missing from a row, explicitly write it with a coefficient of `0`.
>     
> 2. **Form the Arrays:** Extract the numerical multipliers to construct matrix $A$, place the ordered unknowns into vector $x$, and place the right-side values into vector $b$.
>     
> 3. **Assemble:** Write the final layout clearly in the structure $[A][x] = [b]$.
>     
> 
> > **⚠️ Common Pitfall to Avoid:** Always keep row and column definitions uniform. A single misplaced coefficient or mixed-up sign is the leading cause of corrupted engineering simulation results.
> 
> ## General Sample Problems
> 
> ### Sample Problem 1: Standard $2 \times 2$ System
> 
> **Problem:** Convert the following system of linear equations into matrix form:
> 
> $$\begin{cases} 5x - 2y = 11 \\ 3y + 4x = 8 \end{cases}$$
> 
> **Solution:**
> 
> 1. _Align the variables:_ The second equation has $y$ before $x$. Rearrange it to align with the first row:
>     
>     $$\begin{cases} 5x - 2y = 11 \\ 4x + 3y = 8 \end{cases}$$
>     
> 2. _Extract the components:_
>     
>     $$A = \begin{bmatrix} 5 & -2 \\ 4 & 3 \end{bmatrix}, \quad x = \begin{bmatrix} x \\ y \end{bmatrix}, \quad b = \begin{bmatrix} 11 \\ 8 \end{bmatrix}$$
>     
> 3. _Assemble:_
>     
>     $$\begin{bmatrix} 5 & -2 \\ 4 & 3 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 11 \\ 8 \end{bmatrix}$$
>     
> 
> ### Sample Problem 2: $3 \times 3$ System with Missing Variables
> 
> **Problem:** Convert the following system into matrix form:
> 
> $$\begin{cases} 2x_1 + x_3 = 4 \\ -3x_1 + 5x_2 - 2x_3 = -1 \\ x_2 + 6x_3 = 7 \end{cases}$$
> 
> **Solution:**
> 
> 1. _Expose hidden coefficients:_ Write in the implicit `0` placeholders for missing variables:
>     
>     $$\begin{cases} 2x_1 + 0x_2 + 1x_3 = 4 \\ -3x_1 + 5x_2 - 2x_3 = -1 \\ 0x_1 + 1x_2 + 6x_3 = 7 \end{cases}$$
>     
> 2. _Assemble into $Ax = b$:_
>     
>     $$\begin{bmatrix} 2 & 0 & 1 \\ -3 & 5 & -2 \\ 0 & 1 & 6 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 4 \\ -1 \\ 7 \end{bmatrix}$$
>     
> 
> ## Real-Life Engineering Application Problems
> 
> ### Application 1: [[Civil & Structural Engineering – Truss Joint Analysis]]
> [[Civil & Structural Engineering – Truss Joint Analysis Solution]]
> 
>     
> 
> ### Application 2: [[Electrical Engineering – Microchip Mesh Current Analysis]]
> [[Electrical Engineering – Microchip Mesh Current Analysis Solution]]
> 
> 
> ### Application 3: [[Chemical & Environmental Engineering – Bioreactor Stream Balance]]
> [[Chemical & Environmental Engineering – Bioreactor Stream Balance Solution]]
> 
> 
> ### Application 4: [[Aerospace Engineering – Automated Flight Control Trim]]
> [[Aerospace Engineering – Automated Flight Control Trim Solution]]
> -


#### Worked Example
Mechanical Engineering – Truss Analysis

- **Context:** This problem extends the concept of modeling structural equilibrium at a truss joint using a matrix equation.
    
- **Problem:** At a structural truss joint, the horizontal and vertical force balance equations are determined to be:
    
    $$\begin{cases} F_1 \cos(45^\circ) - F_2 = 150 \\ F_1 \sin(45^\circ) + F_3 = 300 \end{cases}$$
    
    Express this system in the canonical matrix form $Ax = b$. Explicitly define the coefficient matrix $A$, the variable column vector $x$, and the constant column vector $b$ for the unknowns $F_1$, $F_2$, and $F_3$.

> [!check]- Worked Solution
> ## Step 1: Align the Equations and Expose Hidden Coefficients
> 
> To build a matrix properly, every variable must appear in every equation in the exact same order ($F_1$, then $F_2$, then $F_3$). If a variable is missing from an equation, its coefficient is implicitly `0`.
> 
> Rewriting your system to show all variables gives:
> 
> 1. **Horizontal Balance:** $(\cos(45^\circ))F_1 + (-1)F_2 + (0)F_3 = 150$
> 
> 2. **Vertical Balance:** $(\sin(45^\circ))F_1 + (0)F_2 + (1)F_3 = 300$
> 
> 
> ## Step 2: Extract the Variable Column Vector ($x$)
> 
> The variable vector $x$ lists all the unknowns in the system as a single column. As specified by the problem, your unknowns are $F_1$, $F_2$, and $F_3$:
> 
> $$x = \begin{bmatrix} F_1 \\ F_2 \\ F_3 \end{bmatrix}$$
> 
> ## Step 3: Extract the Constant Column Vector ($b$)
> 
> The constant vector $b$ consists of the values on the right-hand side of the equal signs:
> 
> $$b = \begin{bmatrix} 150 \\ 300 \end{bmatrix}$$
> 
> ## Step 4: Extract the Coefficient Matrix ($A$)
> 
> The coefficient matrix $A$ is formed by pulling the numerical multipliers of each variable from our aligned equations in Step 1. Each row corresponds to an equation, and each column corresponds to a variable:
> 
> $$A = \begin{bmatrix} \cos(45^\circ) & -1 & 0 \\ \sin(45^\circ) & 0 & 1 \end{bmatrix}$$
> 
> **Engineering Note:** Since $\cos(45^\circ) = \sin(45^\circ) = \frac{\sqrt{2}}{2} \approx 0.7071$, engineers frequently write this matrix using decimal approximations to make computational solver entry straightforward:
> 
> $$A \approx \begin{bmatrix} 0.7071 & -1 & 0 \\ 0.7071 & 0 & 1 \end{bmatrix}$$
> 
> ## Final Matrix Equation ($Ax = b$)
> 
> Combining all components into the universal $Ax = b$ format yields the complete system representation:
> 
> $$\begin{bmatrix} \cos(45^\circ) & -1 & 0 \\ \sin(45^\circ) & 0 & 1 \end{bmatrix} \begin{bmatrix} F_1 \\ F_2 \\ F_3 \end{bmatrix} = \begin{bmatrix} 150 \\ 300 \end{bmatrix}$$

#### Active Practice Problem
Chemical Engineering – Bioreactor Mass Balance

- **Context:** This problem applies matrix setups to multi-variable steady-state systems common in chemical processes.
    
- **Problem:** A chemical plant manages three interconnected mixing tanks. The steady-state mass balance equations for a specific compound across the three streams are:
    
    $$\begin{cases} 0.6x_1 + 0.1x_2 + 0.2x_3 = 120 \\ 0.2x_1 + 0.7x_2 + 0.1x_3 = 200 \\ 0.2x_1 + 0.2x_2 + 0.7x_3 = 150 \end{cases}$$
    
    Convert this linear system into its equivalent matrix equation, $Ax = b$.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step 1: Verify Variable Alignment
> 
> Before extracting coefficients, ensure that the variables in every equation are perfectly ordered and aligned. In this system, the variables already flow sequentially from left to right as $x_1$, then $x_2$, and finally $x_3$ for all three equations:
> 
> 1. $0.6x_1 + 0.1x_2 + 0.2x_3 = 120$
> 
> 2. $0.2x_1 + 0.7x_2 + 0.1x_3 = 200$
> 
> 3. $0.2x_1 + 0.2x_2 + 0.7x_3 = 150$
> 
> 
> ## Step 2: Extract the Variable Column Vector ($x$)
> 
> The variable vector $x$ groups all of your unknowns into a single vertical column:
> 
> $$x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$$
> 
> ## Step 3: Extract the Constant Column Vector ($b$)
> 
> The constant vector $b$ holds the steady-state target values located on the right-hand side of the equal signs:
> 
> $$b = \begin{bmatrix} 120 \\ 200 \\ 150 \end{bmatrix}$$
> 
> ## Step 4: Extract the Coefficient Matrix ($A$)
> 
> The coefficient matrix $A$ captures the numerical multipliers for each variable. Because we have 3 equations and 3 unknowns, this forms a $3 \times 3$ square matrix:
> 
> $$A = \begin{bmatrix} 0.6 & 0.1 & 0.2 \\ 0.2 & 0.7 & 0.1 \\ 0.2 & 0.2 & 0.7 \end{bmatrix}$$
> 
> ## Final Matrix Equation ($Ax = b$)
> 
> Bringing all three components together into the standard $Ax = b$ framework gives the final matrix system:
> 
> $$\begin{bmatrix} 0.6 & 0.1 & 0.2 \\ 0.2 & 0.7 & 0.1 \\ 0.2 & 0.2 & 0.7 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 120 \\ 200 \\ 150 \end{bmatrix}$$

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Matrices)
> Electrical Engineering – Mesh Current Analysis

- **Context:** This problem practices using the matrix inverse method ($x = A^{-1}b$) to solve for electrical circuit variables.
    
- **Problem:** Applying Kirchhoff's voltage law to a two-loop circuit yields the following mesh current equations:
    
    $$\begin{cases} 8I_1 - 3I_2 = 12 \\ -3I_1 + 6I_2 = -5 \end{cases}$$
    
    1. Write the system as a matrix equation, $Ax = b$.
        
    2. Compute the inverse matrix $A^{-1}$ manually or via a matrix calculator.
        
    3. Calculate the current vector $x = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$ using $x = A^{-1}b$.
> 
> > [!check]- Solution
> > Here is the complete step-by-step solution to solve the mesh current equations using the matrix inverse method.
> > 
> > ### Part 1: Write the System as a Matrix Equation ($Ax = b$)
> > 
> > To express the mesh current equations as a matrix equation, align the variables ($I_1$ and $I_2$) so that rows correspond to equations and columns correspond to variable coefficients:
> > 
> > $$\begin{cases} 8I_1 - 3I_2 = 12 \\ -3I_1 + 6I_2 = -5 \end{cases}$$
> > 
> > - **Coefficient Matrix ($A$):** Pull the numerical multipliers from each variable.
> > 
> > $$A = \begin{bmatrix} 8 & -3 \\ -3 & 6 \end{bmatrix}$$
> > 
> > - **Variable Column Vector ($x$):** The vertical column of unknowns.
> > 
> > $$x = \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$$
> > 
> > - **Constant Column Vector ($b$):** The column containing values from the right-hand side of the equations.
> > 
> > $$b = \begin{bmatrix} 12 \\ -5 \end{bmatrix}$$
> > 
> > 
> > Combining these elements into the canonical $Ax = b$ layout gives:
> > 
> > $$\begin{bmatrix} 8 & -3 \\ -3 & 6 \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} 12 \\ -5 \end{bmatrix}$$
> > 
> > ### Part 2: Compute the Inverse Matrix ($A^{-1}$)
> > 
> > To solve for our variables, we must calculate the inverse of the coefficient matrix ($A^{-1}$). For any $2 \times 2$ matrix, the standard algebraic shortcut to find the inverse follows a strict formula:
> > 
> > 1. **Calculate the determinant ($\det(A)$):**
> > 
> > $$\det(A) = (a)(d) - (b)(c)$$
> > 
> > $$\det(A) = (8)(6) - (-3)(-3) = 48 - 9 = 39$$
> > 
> > Because $\det(A) \neq 0$, the matrix is non-singular, meaning a unique solution is guaranteed to exist.
> > 
> > 2. **Form the Adjugate Matrix:**
> > 
> > Swap the positions of $a$ and $d$ on the main diagonal (8 and 6 swap places), and reverse the signs of $b$ and $c$ on the off-diagonal ($-3$ and $-3$ become $3$ and $3$):
> > 
> > $$\text{Adjugate}(A) = \begin{bmatrix} 6 & 3 \\ 3 & 8 \end{bmatrix}$$
> > 
> > 3. **Scale by $1/\det(A)$:**
> > 
> > $$A^{-1} = \frac{1}{39} \begin{bmatrix} 6 & 3 \\ 3 & 8 \end{bmatrix} = \begin{bmatrix} \frac{6}{39} & \frac{3}{39} \\ \frac{3}{39} & \frac{8}{39} \end{bmatrix} = \begin{bmatrix} \frac{2}{13} & \frac{1}{13} \\ \frac{1}{13} & \frac{8}{39} \end{bmatrix}$$
> > 
> > 
> > ### Part 3: Calculate the Current Vector ($x = A^{-1}b$)
> > 
> > Now, find the solution vector by multiplying the calculated inverse matrix by the constants vector $b$. Keep in mind that order matters because matrix multiplication is not commutative ($A^{-1}b \neq bA^{-1}$):
> > 
> > $$x = A^{-1}b$$
> > 
> > $$x = \frac{1}{39} \begin{bmatrix} 6 & 3 \\ 3 & 8 \end{bmatrix} \begin{bmatrix} 12 \\ -5 \end{bmatrix}$$
> > 
> > Using the "row down column" multiplication rules:
> > 
> > - **Top row calculation ($I_1$):** $(6)(12) + (3)(-5) = 72 - 15 = 57$
> > 
> > - **Bottom row calculation ($I_2$):** $(3)(12) + (8)(-5) = 36 - 40 = -4$
> > 
> > 
> > This leaves us with:
> > 
> > $$x = \frac{1}{39} \begin{bmatrix} 57 \\ -4 \end{bmatrix} = \begin{bmatrix} \frac{57}{39} \\ -\frac{4}{39} \end{bmatrix}$$
> > 
> > Reducing the fractions yields the exact exact solution parameters:
> > 
> > $$x = \begin{bmatrix} \frac{19}{13} \\ -\frac{4}{39} \end{bmatrix}$$
> > 
> > ### Final Engineering Interpretation
> > 
> > Interpreting each specific variable's value in its physical engineering context:
> > 
> > - **Loop Current 1 ($I_1$):** $\frac{19}{13}\text{ A} \approx 1.462\text{ A}$
> > 
> > - **Loop Current 2 ($I_2$):** $-\frac{4}{39}\text{ A} \approx -0.103\text{ A}$
> > 
> > 
> > **Physical Note:** The negative sign for $I_2$ indicates to the engineer that the actual physical current in the second loop is moving in the exact opposite direction of the arrow assumed during circuit setup.
> 

### 00:25 - 00:30 (5 mins) — Regroup 1: Class Discussion
- Review common misconceptions and clarify key notations.

### 00:30 - 00:45 (15 mins) — Skill Block 2: Advanced Concept Practice 2
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Worked Example
Environmental Engineering – Fluid Flow in Reservoirs

- **Context:** This problem utilizes a $3 \times 3$ matrix inverse to solve an environmental tracking scenario.
    
- **Problem:** The concentration levels of a tracking dye in three cascading retention ponds ($C_1, C_2, C_3$) satisfy the following steady-state system:
    
    $$\begin{cases} 4C_1 - C_2 = 8 \\ -C_1 + 3C_2 - C_3 = 12 \\ -C_2 + 2C_3 = 4 \end{cases}$$
    
    Using a matrix calculator, find the inverse of the coefficient matrix ($A^{-1}$) and solve for the concentration vector $x = A^{-1}b$.

> [!check]- Worked Solution
> ### Step 1: Write the System as a Matrix Equation ($Ax = b$)
> 
> To construct the matrix form, align the concentration variables ($C_1$, $C_2$, and $C_3$) in order for all three equations. If a variable is missing from a specific pond's equation, insert a `0` coefficient to preserve the alignment:
> 
> 1. **Pond 1:** $4C_1 - 1C_2 + 0C_3 = 8$
> 
> 2. **Pond 2:** $-1C_1 + 3C_2 - 1C_3 = 12$
> 
> 3. **Pond 3:** $0C_1 - 1C_2 + 2C_3 = 4$
> 
> 
> Now we separate this system into the standard $Ax = b$ matrix components:
> 
> - **Coefficient Matrix ($A$):**
> 
> $$A = \begin{bmatrix} 4 & -1 & 0 \\ -1 & 3 & -1 \\ 0 & -1 & 2 \end{bmatrix}$$
> 
> - **Variable Column Vector ($x$):**
> 
> $$x = \begin{bmatrix} C_1 \\ C_2 \\ C_3 \end{bmatrix}$$
> 
> - **Constant Column Vector ($b$):**
> 
> $$b = \begin{bmatrix} 8 \\ 12 \\ 4 \end{bmatrix}$$
> 
> 
> Combined matrix representation:
> 
> $$\begin{bmatrix} 4 & -1 & 0 \\ -1 & 3 & -1 \\ 0 & -1 & 2 \end{bmatrix} \begin{bmatrix} C_1 \\ C_2 \\ C_3 \end{bmatrix} = \begin{bmatrix} 8 \\ 12 \\ 4 \end{bmatrix}$$
> 
> ### Step 2: Compute the Inverse Matrix ($A^{-1}$)
> 
> Following the problem instructions to use a matrix calculator to find $A^{-1}$, entering matrix $A$ provides the following exact fraction outputs and corresponding decimal approximations:
> 
> $$A^{-1} = \begin{bmatrix} \frac{5}{18} & \frac{1}{9} & \frac{1}{18} \\ \frac{1}{9} & \frac{4}{9} & \frac{2}{9} \\ \frac{1}{18} & \frac{2}{9} & \frac{11}{18} \end{bmatrix} \approx \begin{bmatrix} 0.2778 & 0.1111 & 0.0556 \\ 0.1111 & 0.4444 & 0.2222 \\ 0.0556 & 0.2222 & 0.6111 \end{bmatrix}$$
> 
> ### Step 3: Solve for the Concentration Vector ($x = A^{-1}b$)
> 
> Now, multiply the inverse matrix $A^{-1}$ by the constants vector $b$ to isolate the unknown concentrations:
> 
> $$x = A^{-1}b$$
> 
> $$x = \begin{bmatrix} \frac{5}{18} & \frac{1}{9} & \frac{1}{18} \\ \frac{1}{9} & \frac{4}{9} & \frac{2}{9} \\ \frac{1}{18} & \frac{2}{9} & \frac{11}{18} \end{bmatrix} \begin{bmatrix} 8 \\ 12 \\ 4 \end{bmatrix}$$
> 
> Perform row-by-column matrix multiplication:
> 
> - **Top Row ($C_1$):**
> 
> $$\left(\frac{5}{18} \cdot 8\right) + \left(\frac{1}{9} \cdot 12\right) + \left(\frac{1}{18} \cdot 4\right) = \frac{40}{18} + \frac{24}{18} + \frac{4}{18} = \frac{68}{18} = \frac{34}{9}$$
> 
> - **Middle Row ($C_2$):**
> 
> $$\left(\frac{1}{9} \cdot 8\right) + \left(\frac{4}{9} \cdot 12\right) + \left(\frac{2}{9} \cdot 4\right) = \frac{8}{9} + \frac{48}{9} + \frac{8}{9} = \frac{64}{9}$$
> 
> - **Bottom Row ($C_3$):**
> 
> $$\left(\frac{1}{18} \cdot 8\right) + \left(\frac{2}{9} \cdot 12\right) + \left(\frac{11}{18} \cdot 4\right) = \frac{8}{18} + \frac{48}{18} + \frac{44}{18} = \frac{100}{18} = \frac{50}{9}$$
> 
> 
> This gives the final solution vector:
> 
> $$x = \begin{bmatrix} \frac{34}{9} \\ \frac{64}{9} \\ \frac{50}{9} \end{bmatrix}$$
> 
> ### Final Engineering Interpretation
> 
> Interpreting each computed value back into the environmental tracking context:
> 
> - **Dye concentration in Pond 1 ($C_1$):** $\frac{34}{9} \approx \mathbf{3.78 \text{ units}}$
> 
> - **Dye concentration in Pond 2 ($C_2$):** $\frac{64}{9} \approx \mathbf{7.11 \text{ units}}$
> 
> - **Dye concentration in Pond 3 ($C_3$):** $\frac{50}{9} \approx \mathbf{5.56 \text{ units}}$

#### Active Practice Problem
Civil Engineering – Indeterminate Foundation Supports

- **Context:** This problem highlights what happens when a system lacks a unique solution due to redundant structural constraints.
    
- **Problem:** A concrete foundation beam rests on three vertical supports. Due to static indeterminacy, the vertical equilibrium and moment balances only yield two equations for the three unknown reaction forces ($R_1, R_2, R_3$):
    
    $$\begin{cases} R_1 + R_2 + R_3 = 80 \\ 2R_1 + 4R_2 + 6R_3 = 240 \end{cases}$$
    
    Explain mathematically why this system cannot yield a single, unique solution vector. What does this condition mean for a civil engineer trying to calculate the exact load on each individual support?

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ## Step 1: Write the System in Matrix Form ($Ax = b$)
> 
> To see how the numbers interact, let's group the system of equations into the standard matrix structure:
> 
> $$\begin{cases} R_1 + R_2 + R_3 = 80 \\ 2R_1 + 4R_2 + 6R_3 = 240 \end{cases}$$
> 
> - **Coefficient Matrix ($A$):** Pulling the weights from the reactions gives a rectangular layout with 2 rows and 3 columns.
> 
> $$A = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 4 & 6 \end{bmatrix}$$
> 
> - **Variable Vector ($x$):** The 3 unknown foundation forces.
> 
> $$x = \begin{bmatrix} R_1 \\ R_2 \\ R_3 \end{bmatrix}$$
> 
> - **Constant Vector ($b$):** The loading conditions.
> 
> $$b = \begin{bmatrix} 80 \\ 240 \end{bmatrix}$$
> 
> 
> ## Step 2: The Mathematical Explanation (Why it lacks a unique solution)
> 
> There are two primary reasons why this matrix configuration cannot isolate a single unique answer:
> 
> ### 1. The System is Underdetermined (Non-Square Matrix)
> 
> A unique solution requires a perfect one-to-one balance between constraints and unknowns. Because matrix $A$ is a rectangular $2 \times 3$ shape, it represents fewer equations (2 constraints) than variables (3 unknowns).
> 
> ### 2. The Matrix Inversion Method Fails
> 
> To compute a unique solution vector via $x = A^{-1}b$, the coefficient matrix must be square ($n \times n$) to calculate a determinant and find an inverse ($A^{-1}$). Because $A$ is not square, **$\det(A)$ is undefined and $A^{-1}$ does not exist**.
> 
> ### 3. The Equations "Overlap" (Consistent, Dependent System)
> 
> If you reduce the rows to see how they interact algebraically:
> 
> - Multiply the first equation by 2: $2R_1 + 2R_2 + 2R_3 = 160$
> 
> - Subtract this from the second equation: $(2R_1 + 4R_2 + 6R_3) - (2R_1 + 2R_2 + 2R_3) = 240 - 160$
> 
> - This simplifies to: $2R_2 + 4R_3 = 80 \implies R_2 + 2R_3 = 40$
> 
> 
> We can choose _any_ value for $R_3$ (making it a "free variable"), and calculate valid matching numbers for $R_1$ and $R_2$. Because the equations are mathematically compatible but leave a variable free, the system falls under the **Consistent, Dependent** category, meaning it contains **infinitely many solutions**.
> 
> ## Step 3: Physical Engineering Interpretation
> 
> For a civil engineer, this mathematical condition represents **static indeterminacy**.
> 
> When a foundation beam rests on three rigid supports, basic rigid-body physics equations (balancing upward forces and balancing rotational moments) only give you 2 equations of equilibrium. This is physically not enough information to pinpoint how the load splits among the columns.
> 
> ### What it means for the designer:
> 
> - **Statics alone is insufficient:** You cannot solve the true load on each individual support using simple force balances.
> 
> - **Material properties matter:** In reality, the exact distribution of those 80 units of force depends heavily on physical variables missing from basic linear setups —such as how much the concrete beam flexes, the elasticity of the support columns, and whether the ground soil undergoes minor settling underneath one of the locations.
> 
> - **Next Steps:** To get a single exact target answer, the engineer must upgrade their structural model to incorporate material deformation equations (compatibility equations) alongside these base matrix constraints.

> [!info]- Extra Practice & Extensions
> ##### Extension Problem (Matrices)
> Structural Dynamics – Inconsistent Constraints

- **Context:** This problem requires evaluating the determinant to catch conflicting physical models.
    
- **Problem:** An engineer attempts to calibrate a dual-mass dampening system and sets up the following matrix equation:
    
    $$\begin{bmatrix} 3 & -6 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 9 \\ 4 \end{bmatrix}$$
    
    1. Compute the determinant of the coefficient matrix, $\det(A)$.
        
    2. Using the criteria for types of systems, classify this system as _Consistent Independent_, _Consistent Dependent_, or _Inconsistent_.
        
    3. Interpret what this mathematical result indicates about the physical parameters chosen for the dampening system.
> 
> > [!check]- Solution
> > ### Part 1: Compute the Determinant of the Coefficient Matrix, $\det(A)$
> > 
> > Given the matrix equation:
> > 
> > $$\begin{bmatrix} 3 & -6 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 9 \\ 4 \end{bmatrix}$$
> > 
> > The coefficient matrix is:
> > 
> > $$A = \begin{bmatrix} 3 & -6 \\ -1 & 2 \end{bmatrix}$$
> > 
> > For a $2 \times 2$ matrix $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the determinant formula is $\det(A) = ad - bc$. Substituting your values:
> > 
> > $$\det(A) = (3)(2) - (-6)(-1)$$
> > 
> > $$\det(A) = 6 - 6 = 0$$
> > 
> > Because $\det(A) = 0$, the matrix $A$ is singular, meaning it cannot be inverted ($A^{-1}$ does not exist) and the system has no unique solution.
> > 
> > ### Part 2: Classify the System Type
> > 
> > To determine whether the system has _infinitely many solutions_ or _no solution_, let's look at how the algebraic constraints interact by reducing both equations to their simplest forms:
> > 
> > 1. **Equation 1:** $3x_1 - 6x_2 = 9$
> > 
> > Divide the entire equation by $3$:
> > 
> > $$x_1 - 2x_2 = 3$$
> > 
> > 2. **Equation 2:** $-1x_1 + 2x_2 = 4$
> > 
> > Multiply the entire equation by $-1$:
> > 
> > $$x_1 - 2x_2 = -4$$
> > 
> > 
> > ### Classification:
> > 
> > The simplified equations state that the expression $x_1 - 2x_2$ must simultaneously equal $3$ and $-4$. Because these two values cannot be equal at the same time ($3 \neq -4$), the equations **contradict** each other.
> > 
> > According to the classification criteria:
> > 
> > - **Condition:** $\det(A) = 0$ and the equations contradict.
> > 
> > - **System Type:** **Inconsistent**.
> > 
> > - **Meaning:** **No solution** exists.
> > 
> > 
> > ### Part 3: Physical Engineering Interpretation
> > 
> > In structural dynamics, a system model turning out to be **inconsistent** provides critical diagnostic feedback to the engineer.
> > 
> > - **Physically Impossible Target:** It means the engineer has defined an impossible configuration for the dual-mass dampening system. The baseline constraints dictated by the hardware's internal parameters (matrix $A$, representing physical properties like stiffness or mass distributions) are mathematically incapable of balancing out or producing the target requirements specified on the right-hand side (constants vector $b$, representing target loads or performance metrics).
> > 
> > - **What to fix:** A common pitfall when this happens is a sign error or misentry during calibration setup. If the mathematical input is verified to be accurate, the engineer must structurally change the physical system—such as re-selecting physical dampers with completely different rates—because the current physical arrangement can never satisfy these performance targets.
> 

### 00:45 - 00:50 (5 mins) — Regroup 2: Reflection
- Reflect on the physical modeling applications and mathematical setups.

### 00:50 - 01:05 (15 mins) — Skill Block 3: Advanced Concept Practice 3
> [!note]- Theory & Derivations
> Explanations and derivations of the core concepts.


#### Worked Example
Industrial Engineering – Production Line Optimization 

- **Context:** A multi-step optimization problem requiring both representation and numerical inversion.
    
- **Problem:** A manufacturing plant uses two primary automated assembly machines ($M_1$ and $M_2$) to produce two types of medical sensors (Sensor A and Sensor B).
    
    - Each unit of Sensor A requires 3 hours on $M_1$ and 2 hours on $M_2$.
        
    - Each unit of Sensor B requires 4 hours on $M_1$ and 5 hours on $M_2$.
        
    - The factory has exactly 70 hours of available time on $M_1$ and 70 hours of available time on $M_2$ this week.
        
    
    1. Set up a system of linear equations and write it in the matrix form $Ax = b$.
        
    2. Compute $A^{-1}$ and solve the matrix equation to find exactly how many units of Sensor A and Sensor B should be produced to completely utilize the available machine hours.

> [!check]- Worked Solution
> Here is the complete step-by-step solution to represent and solve the production line optimization problem using the matrix inverse method.
> 
> ### Part 1: Set up the System and Matrix Form ($Ax = b$)
> 
> First, define the decision variables for the manufacturing line:
> 
> - $x_1 =$ number of units of Sensor A to produce
> 
> - $x_2 =$ number of units of Sensor B to produce
> 
> 
> Using the time allocations specified for each machine, we establish the following linear system:
> 
> $$\begin{cases} 3x_1 + 4x_2 = 70 \quad \text{(Machine 1 hours)} \\ 2x_1 + 5x_2 = 70 \quad \text{(Machine 2 hours)} \end{cases}$$
> 
> To express this production system in the standard matrix form $Ax = b$:
> 
> - **Coefficient Matrix ($A$):** Captures the hourly processing rates for both sensors on each machine.
> 
> $$A = \begin{bmatrix} 3 & 4 \\ 2 & 5 \end{bmatrix}$$
> 
> - **Variable Column Vector ($x$):** The column containing our production unknowns.
> 
> $$x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}$$
> 
> - **Constant Column Vector ($b$):** The maximum available operating capacity for the week.
> 
> $$b = \begin{bmatrix} 70 \\ 70 \end{bmatrix}$$
> 
> 
> Combining these terms yields the full matrix setup:
> 
> $$\begin{bmatrix} 3 & 4 \\ 2 & 5 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 70 \\ 70 \end{bmatrix}$$
> 
> ### Part 2: Compute the Inverse Matrix ($A^{-1}$)
> 
> To isolate our production target variables, we need to find the inverse of the $2 \times 2$ coefficient matrix.
> 
> 1. **Calculate the determinant ($\det(A)$):**
> 
> $$\det(A) = (3)(5) - (4)(2)$$
> 
> $$\det(A) = 15 - 8 = 7$$
> 
> Because $\det(A) \neq 0$, the matrix is non-singular, confirming a single unique production schedule exists.
> 
> 2. **Form the Adjugate Matrix:**
> 
> Swap the elements on the main diagonal (3 and 5 swap places) and switch the signs of the off-diagonal elements (4 and 2 become $-4$ and $-2$):
> 
> $$\text{Adjugate}(A) = \begin{bmatrix} 5 & -4 \\ -2 & 3 \end{bmatrix}$$
> 
> 3. **Scale by $1/\det(A)$:**
> 
> $$A^{-1} = \frac{1}{7} \begin{bmatrix} 5 & -4 \\ -2 & 3 \end{bmatrix} = \begin{bmatrix} \frac{5}{7} & -\frac{4}{7} \\ -\frac{2}{7} & \frac{3}{7} \end{bmatrix}$$
> 
> 
> ### Part 3: Solve the Matrix Equation ($x = A^{-1}b$)
> 
> Now, multiply the calculated inverse matrix by our target hour vector $b$. Keep in mind that the order of operations matters here because matrix multiplication is non-commutative ($A^{-1}b \neq bA^{-1}$):
> 
> $$x = A^{-1}b$$
> 
> $$x = \frac{1}{7} \begin{bmatrix} 5 & -4 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 70 \\ 70 \end{bmatrix}$$
> 
> Perform row-by-column multiplication:
> 
> - **Top Row Calculation ($x_1$):** $(5)(70) + (-4)(70) = 350 - 280 = 70$
> 
> - **Bottom Row Calculation ($x_2$):** $(-2)(70) + (3)(70) = -140 + 210 = 70$
> 
> 
> Divide the calculated rows by our remaining scaling factor of 7:
> 
> $$x = \frac{1}{7} \begin{bmatrix} 70 \\ 70 \end{bmatrix} = \begin{bmatrix} 10 \\ 10 \end{bmatrix}$$
> 
> ### Final Engineering Interpretation
> 
> Interpreting each specific variable's value back into our plant optimization context:
> 
> - **Sensor A Target ($x_1$):** **10 units**
> 
> - **Sensor B Target ($x_2$):** **10 units**
> 
> 
> By scheduling exactly **10 units** of Sensor A and **10 units** of Sensor B for production, the plant will completely utilize the **70 hours** of operational capacity on both machine $M_1$ and machine $M_2$ without leaving any idle machine time.

#### Active Practice Problem
Aerospace Engineering – Flight Trim Configurations 

- **Context:** This problem tests the critical step of checking the determinant before executing an automated simulation solution.
    
- **Problem:** An automated flight control system calculates three elevator trim parameters ($p_1, p_2, p_3$) using the following matrix array:
    
    $$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & -1 & 4 \end{bmatrix}, \quad b = \begin{bmatrix} 10 \\ 20 \\ 5 \end{bmatrix}$$
    
    1. Before attempting to compute $A^{-1}$, calculate $\det(A)$.
        
    2. Based on your determinant calculations, will the flight control computer be able to find a _unique_ baseline trim setting using the matrix inverse method ($x = A^{-1}b$)? Why or why not?
        
    3. Identify if this specific system has _infinitely many solutions_ or _no solution_ by checking how the rows interact.

> [!workspace] Student Practice Space
> 

> [!check]- Solution
> ### Part 1: Calculate the Determinant, $\det(A)$
> 
> Given the system's coefficient matrix:
> 
> $$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & -1 & 4 \end{bmatrix}$$
> 
> To calculate the determinant of a $3 \times 3$ matrix, we can use **cofactor expansion** along the first row:
> 
> $$\det(A) = 1 \cdot \det\begin{bmatrix} 4 & 6 \\ -1 & 4 \end{bmatrix} - 2 \cdot \det\begin{bmatrix} 2 & 6 \\ 3 & 4 \end{bmatrix} + 3 \cdot \det\begin{bmatrix} 2 & 4 \\ 3 & -1 \end{bmatrix}$$
> 
> Now, compute the $2 \times 2$ determinants using the $ad - bc$ cross-multiplication method:
> 
> - **First component:** $\det\begin{bmatrix} 4 & 6 \\ -1 & 4 \end{bmatrix} = (4)(4) - (6)(-1) = 16 + 6 = 22$
> 
> - **Second component:** $\det\begin{bmatrix} 2 & 6 \\ 3 & 4 \end{bmatrix} = (2)(4) - (6)(3) = 8 - 18 = -10$
> 
> - **Third component:** $\det\begin{bmatrix} 2 & 4 \\ 3 & -1 \end{bmatrix} = (2)(-1) - (4)(3) = -2 - 12 = -14$
> 
> 
> Substitute these values back into the main expansion equation:
> 
> $$\det(A) = 1(22) - 2(-10) + 3(-14)$$
> 
> $$\det(A) = 22 + 20 - 42$$
> 
> $$\det(A) = 42 - 42 = 0$$
> 
> ### Part 2: Determine if a Unique Solution Exists via the Inverse Method
> 
> Based on the calculated determinant, **no**, the flight control computer will not be able to find a unique baseline trim setting using the matrix inverse method ($x = A^{-1}b$).
> 
> - **Why?** A system only possesses a single unique solution if its coefficient matrix is invertible. Matrix inversion requires dividing by the determinant. Because $\det(A) = 0$, the matrix $A$ is classified as **singular** (non-invertible). Attempting to evaluate $x = A^{-1}b$ would force an impossible mathematical division-by-zero error inside the simulation script.
> 
> 
> ### Part 3: Identify the System Type by Analyzing Row Interactions
> 
> Since $\det(A) = 0$, the system must be classified as either _Consistent Dependent_ (infinitely many solutions) or _Inconsistent_ (no solution). To identify which one it is, let's look closely at how the rows of the equations interact:
> 
> 1. **Equation 1 (Row 1):** $1p_1 + 2p_2 + 3p_3 = 10$
> 
> 2. **Equation 2 (Row 2):** $2p_1 + 4p_2 + 6p_3 = 20$
> 
> 3. **Equation 3 (Row 3):** $3p_1 - 1p_2 + 4p_3 = 5$
> 
> 
> Notice the exact proportional relationship between Row 1 and Row 2:
> 
> $$\text{Row 2} = 2 \times \text{Row 1}$$
> 
> $$2(1p_1 + 2p_2 + 3p_3) = 2(10) \implies 2p_1 + 4p_2 + 6p_3 = 20$$
> 
> Because the scaling applies perfectly across both the coefficients _and_ the target constant on the right side, the equations do not contradict each other. Instead, Equation 2 is completely redundant—it provides zero new physical constraints to the system.
> 
> According to our classification framework:
> 
> - **Condition:** $\det(A) = 0$ and the constraints perfectly overlap rather than contradict.
> 
> - **System Type:** **Consistent, Dependent**.
> 
> - **Meaning:** The system has **infinitely many solutions**.
> 
> 
> ### Flight System Diagnostic Interpretation
> 
> For an aerospace engineer calibrating automated control surfaces, this diagnostic output reveals a critical design trait:
> 
> - **Under-constrained Configuration:** Because one equation is redundant, you effectively only have 2 unique physical constraints governing 3 independent trim parameters ($p_1, p_2, p_3$).
> 
> - **Physical Impact:** The flight control computer cannot pick out one perfect baseline configuration on its own because there is a whole mathematical line of infinite combinations that will technically satisfy this balance. To fix this "free variable" problem, the software must either introduce an additional flight constraint (like prioritizing the setting that consumes the lowest battery power) or a human operator must manually freeze one of the three trim parameters to lock down a single baseline behavior.

### 01:05 - 01:10 (5 mins) — Regroup 3: Verification
- Verify calculations and mathematical reasoning.

### 01:10 - 01:15 (5 mins) — Synthesis Wrap-up
- Core takeaways from Session 12 and overview of homework homework assignment.
