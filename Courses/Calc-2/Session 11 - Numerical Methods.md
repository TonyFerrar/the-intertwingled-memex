---
title: "Session 11 - Numerical Methods"
type: course-session
course: MATH-182
semester: Fall 2026
publish: true
cssclasses: []
updated: 2026-08-18
---

# Session 11 - Numerical Methods

## Session Objectives
By the end of this session, you will be able to:
- Algorithmic Iteration and Numerical Analysis (Newton-Raphson)
- Linear Algebra Translation and Matrix Manipulations
- Spreadsheet Syntax and Cell Referencing Logic

## Session Timeline
- **00:00 - 00:10 (10 mins)**: Micro-Lecture
- **00:10 - 00:25 (15 mins)**: Skill Block 1
- **00:25 - 00:30 (5 mins)**: Regroup 1
- **00:30 - 00:45 (15 mins)**: Skill Block 2
- **00:45 - 00:50 (5 mins)**: Regroup 2
- **00:50 - 01:05 (15 mins)**: Skill Block 3
- **01:05 - 01:10 (5 mins)**: Regroup 3
- **01:10 - 01:15 (5 mins)**: Synthesis Wrap-up

## Session Content

### Micro-Lecture
#### Engineering Context: Engineering Calculus II Application
In this session, we investigate the mathematical principles of **Numerical Methods** and explore how engineers apply these concepts to analyze real-world physical and structural systems.

### Skill Block 1
## 1. Explanatory Notes

### The Core Philosophy of Root-Finding

In engineering, you will often encounter complex nonlinear equations where a target variable is trapped inside exponents, logarithms, or trigonometric terms. Isolating this variable by hand using traditional algebra is frequently impossible.

Numerical methods solve this challenge by using computational algorithms to make an educated initial "guess" and then automatically refine that guess through a repeating loop until it converges on the exact answer.

### The Geometric Mechanics of Newton-Raphson

The Newton-Raphson method is an optimization strategy designed to find the real roots of an equation formatted as $f(x) = 0$. It relies on a simple geometric shortcut: solving a straight linear equation for zero is mathematically effortless compared to solving a complex curve.

The algorithm follows this sequence:

1. **Establish a Point:** You supply an initial starting guess ($x_n$). The computer finds the corresponding point on the actual curve: $(x_n, f(x_n))$.
    
2. **Calculate the Slope:** The computer evaluates the first derivative of the function, $f'(x_n)$, which acts as the exact slope of the curve at your current guess.
    
3. **Strike a Tangent Line:** Using this point and slope, the solver builds a linear approximation (a straight tangent line) that mimics the trajectory of the function at that precise snapshot:
    
    $$y = f(x_n) + f'(x_n)(x - x_n)$$
    
4. **Solve for Zero:** The engine calculates exactly where this _straight tangent line_ crosses the x-axis ($y = 0$). Because the tangent line points in the general direction of the root, this new x-intercept ($x_{n+1}$) is physically closer to the true root than your previous guess.
    

By setting $y = 0$ and rearranging the tangent line formula to isolate $x$, we get the standard Newton-Raphson iterative formula:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

### Designing the Spreadsheet Loop

To execute this process efficiently without manual recalculations, engineers map the iterative formula into a structured spreadsheet architecture:

- **The Tracker Columns:** You build four columns to monitor each element of the formula: $x_n$, $f(x_n)$, $f'(x_n)$, and $x_{n+1}$.
    
- **The Initial Seeding (Row 2):** Your manual initial guess is typed directly into cell `A2` ($x_1$). Cells `B2`, `C2`, and `D2` evaluate the functions based on that guess.
    
- **The Automated Bridge (Row 3):** To transform this into a continuous feedback loop, the starting value of the second iteration (cell `A3`) must dynamically pull the optimized output calculated at the end of the first step (cell `D2`).
    
    Therefore, you type the recursive formula into cell `A3`:
    
    Plaintext
    
    ```
    =D2
    ```
    
- **Convergence:** When you drag Row 3 downward using Autofill, the spreadsheet continuously pipes the output of each line as the input for the next. You stop iterating when the value in the $x$ column stops changing across consecutive rows, indicating full numerical convergence.
    

## 2. Standard Practice Problems

### Problem A: Analytical Iteration Setup

You need to use the Newton-Raphson method to numerically calculate the square root of $5$ ($\sqrt{5}$). This can be modeled as finding the root of the polynomial equation:

$$0 = x^2 - 5$$

1. Identify the function $f(x)$ and compute its analytical derivative $f'(x)$.
    
2. Substitute these components into the general Newton-Raphson formula to write the explicit algebraic expression for $x_{n+1}$ in terms of $x_n$.
    

#### Solution A

1. **Identify and Differentiate:**
    
    - Our target function is: $f(x) = x^2 - 5$
        
    - Applying the power rule yields the derivative: $f'(x) = 2x$
        
2. **Build the Expression:**
    
    - Substituting these into the standard formula ($x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$) yields:
        
        $$x_{n+1} = x_n - \frac{x_n^2 - 5}{2x_n}$$
        

### Problem B: Spreadsheet Execution Troubleshooting

An engineer sets up a spreadsheet to run a Newton-Raphson solver for a structural depth equation. In cell `A2`, they input an initial guess of `10`. In cell `A3`, instead of chaining the formulas recursively, they accidentally type `=A2+1` and drag it down, creating a sequence of $10, 11, 12, 13...$ down Column A.

Explain what structural breakdown occurs in this automated calculation and why it fails as a Newton-Raphson solver.

#### Solution B

- **Explanation of Breakdown:** The Newton-Raphson method relies on a closed feedback loop where the straight tangent line dictates exactly where the next guess should look. By hardcoding an arbitrary step size (`=A2+1`), the engineer has completely severed the link between the function's physical slope and the next guess. The spreadsheet is no longer performing an algorithmic search; it is merely evaluating the function at arbitrary integers, destroying the solver's ability to converge on a root.
    

## 3. Real-Life Engineering Application Problems

### Problem 1: [[Chemical Engineering (Real Gas Molar Volume)]]
[[Chemical Engineering (Real Gas Molar Volume) Solution]]


### Problem 2: [[Civil & Environmental Hydraulics (Open Channel Flow Depth)]]
[[Civil & Environmental Hydraulics (Open Channel Flow Depth) Solution]]

#### Worked Example
Entering Formulas

You need to evaluate the mathematical function $f(x)=\frac{3x^{2}+4x-7}{x^{2}-e^{x}}$ across a series of inputs. The $x$-values are listed sequentially down column A, starting in cell `A2`.

- Write out the exact syntax of the formula you would type into cell `B2` so that it can be successfully computed by a spreadsheet program like Google Sheets.
    
- Hint: Consider how built-in exponential functions are expressed and where you need to place parentheses.

##### Solution
Here is the step-by-step solution to convert the mathematical function into a spreadsheet formula for Google Sheets.

###### The Final Formula

Type the following exact syntax into cell **`B2`**:

Plaintext

```
=(3*A2^2+4*A2-7)/(A2^2-EXP(A2))
```

###### Step-by-Step Breakdown

To translate the mathematical function $f(x)=\frac{3x^{2}+4x-7}{x^{2}-e^{x}}$ into a spreadsheet formula, we break it down into five key components:

###### 1. Start with the Equals Sign (`=`)

Every formula in Google Sheets or Excel must begin with an equals sign. This tells the spreadsheet to calculate a value rather than just treating the entry as regular text.

###### 2. Swap $x$ with the Cell Reference (`A2`)

Because your $x$-values are listed sequentially down column A starting at row 2, any time the equation calls for $x$, you must reference cell **`A2`**.

###### 3. Translate the Numerator

The numerator is $3x^{2}+4x-7$. In a spreadsheet:

- Implied multiplication (like $3x$ or $4x$) must be explicitly written out using the asterisk symbol (`*`).

- Exponents ($x^2$) are written using the caret symbol (`^`).

- **Spreadsheet translation:** `3*A2^2+4*A2-7`


###### 4. Translate the Denominator

The denominator is $x^{2}-e^{x}$. In a spreadsheet:

- The exponential constant $e$ raised to a power ($e^x$) cannot just be typed as text. You must use the spreadsheet's built-in function **`EXP()`** and place the exponent inside the parentheses.

- **Spreadsheet translation:** `A2^2-EXP(A2)`


###### 5. Group with Parentheses for Order of Operations

If you type `=3*A2^2+4*A2-7/A2^2-EXP(A2)`, the spreadsheet will follow standard mathematical order of operations (BODMAS/PEMDAS) and only divide $-7$ by $A2^2$.

To force the program to calculate the _entire_ numerator before dividing it by the _entire_ denominator, you must wrap both parts in their own sets of parentheses:

- **Final combined structure:** `=(Numerator)/(Denominator)`
#### Active Practice Problem
Absolute Referencing (Cell Freezing)

You are building a sheet to compute the area of a triangle ($A=\frac{1}{2}bh$). The base length ($b=4$) is a fixed constant located in cell `B1`. The varying heights ($h$) are entered down column A starting at cell `A4`.

- If you type the formula `=0.5*A4*B1` into cell `B4` and use the Autofill feature to drag it down through row 24, what specific problem or error occurs in the subsequent rows?
    
- Show how to modify the formula using the `$` symbol to fix this Autofill failure.

##### Workspace

##### Solution
###### Part 1: What went wrong? (The Autofill Failure)

When you type `=0.5*A4*B1` into cell `B4` and drag it down, the spreadsheet uses **relative referencing**. This means it assumes that when you move down one row, every cell reference inside the formula should also move down one row.

As a result, the spreadsheet automatically increments the row numbers in the subsequent cells like this:

- **Cell `B4`:** `=0.5*A4*B1` (Correctly calculates the area using Height in `A4` and Base in `B1`)

- **Cell `B5`:** `=0.5*A5*B2` (Looks at `A5` for height, but shifts down to `B2` for the base length)

- **Cell `B6`:** `=0.5*A6*B3` (Looks at `A6` for height, but shifts down to `B3` for the base length)


###### The Consequence:

Because the base length constant (4) lives exclusively in cell `B1`, shifting down to `B2`, `B3`, and beyond means the spreadsheet is suddenly multiplying by blank cells or text labels (like the column header "Area" in cell `B3`). This causes the spreadsheet to output frustrating **zeros** or **`#VALUE!` errors** down your column.

###### Part 2: The Solution (Using Cell Freezing)

To keep Autofill from breaking your sheet, you need to tell it: _"Hey, track the changing heights down column A, but do not move away from cell B1!"_ You do this by placing a dollar sign (`$`) right before the coordinate you want to lock in place.

###### The Correct Formula for Cell `B4`:

Plaintext

```
=0.5*A4*B$1
```

(Note: Using `=0.5*A4*$B$1` is also completely valid, but since you are only dragging vertically down a single column, locking just the row number with `B$1` is all that is strictly required ).

###### How it Works Now:

When you drag this modified formula down, the `$` acts as a pin:

- **Cell `B4`:** `=0.5*A4*B$1`

- **Cell `B5`:** `=0.5*A5*B$1`

- **Cell `B6`:** `=0.5*A6*B$1`

- **Cell `B7`:** `=0.5*A7*B$1`


The height reference (`A4`, `A5`, `A6`...) successfully increments row by row, while your base reference stays securely frozen on cell `B1`. Your Autofill now works perfectly!
##### Extra Practice & Extensions
> ##### Extension Problem (Numerical)
> Mixed Referencing in a 2D Grid

You are tasked with generating a volume lookup grid for a cylinder using the formula $V=\pi r^{2}h$. The changing height values ($h$) are arranged horizontally across row 1 (starting at cell `B1`), and the changing radius values ($r$) are arranged vertically down column A (starting at cell `A4`).

- Write a single spreadsheet formula for cell `B4` that utilizes mixed cell referencing (freezing only the necessary row or column components) so that it calculates correctly when Autofilled both horizontally across rows and vertically down columns.
> 
> > [!check]- Solution
> > ## The Final Formula
> > 
> > Type the following exact syntax into cell **`B4`**:
> > 
> > Plaintext
> > 
> > ```
> > =PI()*($A4^2)*B$1
> > ```
> > 
> > (Note: Spreadsheet formulas are case-insensitive, so typing `=pi()*($a4^2)*b$1` works exactly the same way ).
> > 
> > ## Step-by-Step Breakdown
> > 
> > When building a two-dimensional grid (where values change both down a column and across a row), you cannot use a fully absolute reference like `$B$1` or a fully relative reference like `B1`. Instead, you must use **mixed referencing** to freeze _only_ the row or _only_ the column.
> > 
> > ### 1. Representing Pi ($\pi$)
> > 
> > In Google Sheets, the mathematical constant $\pi$ is written using the built-in function **`PI()`** followed by an empty set of parentheses.
> > 
> > ### 2. Referencing the Radius ($r$)
> > 
> > The radius values are listed vertically down **Column A** (starting at cell `A4`).
> > 
> > - **When dragging horizontally (across columns):** You want the formula to always pull the radius from Column A, meaning the column must be frozen.
> > 
> > - **When dragging vertically (down rows):** You want row 4 to dynamically change to row 5, row 6, etc., to use the new radius values. The row must remain free.
> > 
> > - **Mixed Reference:** Place the `$` only in front of the column letter $\rightarrow$ **`$A4`**.
> > 
> > 
> > ### 3. Referencing the Height ($h$)
> > 
> > The height values are listed horizontally across **Row 1** (starting at cell `B1`).
> > 
> > - **When dragging horizontally (across columns):** You want Column B to dynamically change to Column C, Column D, etc., to pick up the changing heights. The column must remain free.
> > 
> > - **When dragging vertically (down rows):** You want the formula to always pull from Row 1, meaning the row must be frozen.
> > 
> > - **Mixed Reference:** Place the `$` only in front of the row number $\rightarrow$ **`B$1`**.
> > 
> > 
> > ### 4. Putting it Together
> > 
> > Plugging these components back into the cylinder volume equation ($V = \pi \cdot r^2 \cdot h$) gives you the complete, copy-pasteable grid formula:
> > 
> > $$\text{=PI()} \;\cdot\; \mathbf{(\$A4^{\wedge}2)} \;\cdot\; \mathbf{B\$1}$$
> > 
> > Now, when you Autofill cell `B4` across the entire spreadsheet grid, the formulas will perfectly align with their corresponding row and column inputs without creating errors!
>

### Regroup 1
- Review common misconceptions and clarify key notations.

### Skill Block 2
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

#### Worked Example
Conceptual Mechanics

The Newton-Raphson method is a numerical technique used by computational engines to find the roots of an equation where $f(x) = 0$.

- Based on the geometric principles outlined in the notes, explain how the solver uses a linear approximation (specifically, a tangent line) from an initial "guess" to step progressively closer to the true answer.

##### Solution
###### The Core Concept: Simplifying the Problem

The ultimate goal of the Newton-Raphson solver is to find the true root of a challenging, nonlinear equation where $f(x) = 0$.

Directly solving a complex nonlinear equation by hand or even computationally can be incredibly difficult or impossible. However, solving a **linear equation** (a perfectly straight line) to find where it crosses zero is mathematically very simple.

Newton-Raphson exploits this fact by repeatedly replacing the complex curve with a straight tangent line approximation.

###### Step-by-Step Geometric Mechanics

###### Step 1: Establish the Initial Guess ($x_1$)

You begin by providing the computer with an initial starting guess, $x_1$. The solver looks at the actual curve $f(x)$ at that exact location to establish a point on the graph: $(x_1, f(x_1))$.

###### Step 2: Draw the Linear Approximation (Tangent Line)

The solver calculates the derivative of the function, $f'(x_1)$, which represents the exact **slope** of the curve at your guess. Using this slope and your point, it constructs a straight **tangent line** that mimics the direction of the curve at that exact snapshot.

The equation for this line is:

$$y = f(x_1) + f'(x_1)(x - x_1)$$

###### Step 3: Solve for Zero

Instead of trying to find where the complex curve crosses the x-axis, the solver finds where this _tangent line_ crosses the x-axis. It sets the line's height to zero ($y = 0$) and isolates the new $x$-value:

$$0 = f(x_1) + f'(x_1)(x - x_1)$$

Rearranging this algebraically gives us a new target point, $x_2$:

$$x_2 = x_1 - \frac{f(x_1)}{f'(x_1)}$$

Because the tangent line points in the general direction of the root, this new x-intercept ($x_2$) is mathematically **simpler to find** and gets physically **closer to the true answer** than your original guess.

###### Step 4: Loop and Repeat (Iteration)

The magic of Newton-Raphson is that it is entirely **loopable**. The solver takes the output of the first step ($x_2$) and automatically feeds it back into the system as the _new_ guess:

1. It drops down to find the new point on the curve: $(x_2, f(x_2))$.

2. It strikes a brand-new tangent line using the updated slope $f'(x_2)$.

3. It finds where this new line hits the x-axis to calculate $x_3$.


**Note:** As seen in the lecture graphics, each consecutive guess ($x_1 \rightarrow x_2 \rightarrow x_3$) steps rapidly closer to the true answer than the one before it. The software will automatically repeat this iterative process until the value of $x$ stops changing, signaling that it has arrived at the true root with your desired level of accuracy.
#### Active Practice Problem
Setting Up Iterations

You want to use the Newton-Raphson method to numerically solve the polynomial equation $0 = x^7 - 4x^3 + 1$.

- Given the standard iterative formula $x_{n+1}=x_{n}-\frac{f(x_{n})}{f^{\prime}(x_{n})}$ , determine the derivative $f'(x)$ and write out the explicit algebraic expression for $x_{n+1}$ in terms of $x_n$.

##### Workspace

##### Solution
###### Step-by-Step Solution

###### Step 1: Identify the Function $f(x)$

To use the Newton-Raphson method, we must identify the function from the root-finding form $f(x) = 0$. Based on your problem statement, our function is defined as:

$$f(x) = x^7 - 4x^3 + 1$$

###### Step 2: Determine the Derivative $f'(x)$

Next, we apply the standard power rule of calculus ($\frac{d}{dx}[x^k] = kx^{k-1}$) to differentiate the function term by term:

- The derivative of $x^7$ is $7x^6$.

- The derivative of $-4x^3$ is $-4 \cdot 3x^2 = -12x^2$.

- The derivative of the constant constant $1$ is $0$.


Combining these individual components gives us our final derivative function:

$$f'(x) = 7x^6 - 12x^2$$

###### Step 3: Construct the Explicit Algebraic Expression for $x_{n+1}$

The general iterative framework for the Newton-Raphson method is:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

To find the formula explicitly in terms of $x_n$, we rewrite our expressions for $f(x)$ and $f'(x)$ using $x_n$ as the input variable:

- **Numerator:** $f(x_n) = x_n^7 - 4x_n^3 + 1$

- **Denominator:** $f'(x_n) = 7x_n^6 - 12x_n^2$


Plugging these back into the setup gives you the complete algebraic loop expression:

$$x_{n+1} = x_n - \frac{x_n^7 - 4x_n^3 + 1}{7x_n^6 - 12x_n^2}$$
##### Extra Practice & Extensions
> ##### Extension Problem (Numerical)
> Spreadsheet Execution Architecture

To track a Newton-Raphson solution for $0 = \sqrt{e^x+4}-x^2$ in a spreadsheet, you set up a table with columns tracking $x_n$, $f(x_n)$, $f'(x_n)$, and $x_{n+1}$. Your initial guess ($x_1 = 1$) is placed manually into cell `A2`.

- Once the first row computes a value for $x_{n+1}$ in cell `D2` , what spreadsheet formula must you type into cell `A3` (the start of the second iteration) to seamlessly loop and continue the automated calculation downward?
> 
> > [!check]- Solution
> > Here is the step-by-step solution for setting up the automated iteration architecture in your spreadsheet.
> > 
> > ## The Formula for Cell `A3`
> > 
> > Type the following exact formula into cell **`A3`**:
> > 
> > Plaintext
> > 
> > ```
> > =D2
> > ```
> > 
> > ## Step-by-Step Breakdown
> > 
> > The power of using a spreadsheet for numerical methods like Newton-Raphson is its ability to automatically turn a linear calculation into a recursive loop. Here is exactly how that works:
> > 
> > ### 1. Linking Iteration 1 to Iteration 2
> > 
> > In the Newton-Raphson method, the improved approximation ($x_{n+1}$) calculated at the end of the current step becomes the starting guess ($x_n$) for the very next step.
> > 
> > - Your first row (Row 2) takes the initial guess from `A2` and outputs the updated value in cell `D2`.
> > 
> > - Therefore, the starting value for your second loop in cell `A3` must directly pull that calculated output from `D2`.
> > 
> > 
> > ### 2. Creating the Recursive Architecture
> > 
> > By typing `=D2` into cell `A3`, you establish a structural dependency.
> > 
> > Once you copy the formulas from Row 2 for columns B, C, and D down into Row 3, the spreadsheet naturally calculates the second iteration:
> > 
> > - **`B3`** will automatically evaluate $f(x_2)$ using the value now sitting in `A3`.
> > 
> > - **`C3`** will automatically evaluate $f'(x_2)$ using `A3`.
> > 
> > - **`D3`** will compute the newest approximation, $x_3$.
> > 
> > 
> > ### 3. Unleashing Autofill
> > 
> > Now that Row 3 is completely set up and referencing Row 2, the loop is completely dynamic. When you select Row 3 and use **Autofill** to drag it down through subsequent rows, relative cell referencing takes over automatically:
> > 
> > - Cell **`A4`** automatically updates to `=D3`
> > 
> > - Cell **`A5`** automatically updates to `=D4`
> > 
> > - Cell **`A6`** automatically updates to `=D5`
> > 
> > 
> > The spreadsheet will instantly chain these calculations together down the entire page. You can then simply look down the columns until the numbers stop changing, indicating that the solver has successfully converged on a true root.
>

### Regroup 2
- Reflect on the physical modeling applications and mathematical setups.

### Skill Block 3
## 1. Explanatory Notes

### Spreadsheet Formula Basics

To perform mathematical computations using a computer spreadsheet, you must translate standard algebraic expressions into a format the software can parse:

- **The Activation Operator (`=`):** Every formula must begin with an equals sign. Without it, the spreadsheet treats your entry as static text or a label.
    
- **Explicit Multiplication (`*`):** In algebra, multiplication is often implied (e.g., $3x$ or $2b$). In a spreadsheet, you must explicitly write out the asterisk symbol (`*`), otherwise the program treats the entry as a syntax error or a misspelled function name.
    
- **Exponentiation (`^`):** Raising a value to a power requires the caret symbol (`^`). For instance, $x^2$ is translated as `A2^2`.
    
- **Built-in Functions:** Specialized operations require uppercase named functions. For example, the exponential constant $e^x$ is evaluated using `EXP(x)` , and the constant $\pi$ is pulled using `PI()`.
    
- **Grouping Parentheses:** Spreadsheets strictly follow the mathematical order of operations (PEMDAS/BODMAS). You must use generous pairing of parentheses `()` to explicitly define the boundaries of numerators and denominators.
    

### Cell Referencing Styles

When you write a formula, you rarely hardcode numbers. Instead, you reference the cell addresses where those numbers reside. How those cell addresses behave when copied or dragged across a grid depends on your referencing style:

#### Relative Referencing (e.g., `A2`)

By default, cell references are relative. If a formula in cell `B2` points to `A2`, the spreadsheet interprets this internally as _"look at the cell exactly one column to my left"_. If you use Autofill to drag that formula down to row 3, the reference shifts relatively to `A3`.

#### Absolute Referencing (e.g., `$B$1`)

When you want a reference to remain entirely locked on a specific cell—regardless of where the formula is moved or copied—you must freeze both the column and the row by placing a dollar sign (`$`) in front of both coordinates.

#### Mixed Referencing (e.g., `$A4` or `B$1`)

Mixed referencing freezes only _one_ part of the cell address while leaving the other part free to change dynamically:

- **`$A4` (Column Locked, Row Free):** If you drag this horizontally across columns, it stays pinned to Column A. If you drag it vertically down rows, the row number increments (`$A4`, `$A5`, `$A6`...).
    
- **`B$1` (Column Free, Row Locked):** If you drag this horizontally, the column letter updates (`B$1`, `C$1`, `D$1`...). If you drag it vertically, the row stays locked to Row 1.
    

## 2. Standard Practice Problems

### Problem A: Formula Translation

An environmental engineer needs to evaluate the pollutant concentration decay model given by the function:

$$C(t) = \frac{5t^3 + 2t - 1}{t^2 + e^{-0.5t}}$$

The time values ($t$) are recorded down Column A, starting at cell `A2`. Write out the exact spreadsheet formula syntax for cell `B2` to calculate $C(t)$.

#### Solution A

Plaintext

```
=(5*A2^3+2*A2-1)/(A2^2+EXP(-0.5*A2))
```

- **Explanation:** The numerator and denominator are isolated inside their own outer parentheses to enforce the correct order division. Implied multiplications ($5t^3$, $2t$, and $-0.5t$) use the `*` operator, and $e^x$ is replaced by the `EXP()` function.
    

### Problem B: Debugging Autofill Shift

A mechanical technician builds a sheet to log raw sensor voltage offsets. In cell `C4`, they type the formula `=A4-B2`, where `A4` is the raw sensor reading and `B2` contains a static calibration offset constant. The technician copies the formula down from `C4` to `C5`.

1. What formula does cell `C5` contain?
    
2. Why will this create a calculation error, and how can it be fixed?
    

#### Solution B

1. Cell `C5` will contain `=A5-B3`.
    
2. **Explanation:** Because standard relative referencing was used, dragging the formula down one row increments both references by one row. While `A5` correctly targets the next sensor reading, `B2` erroneously shifts down to `B3`. Since `B3` is likely blank or text, it will output a `#VALUE!` or incorrect offset error. To fix this, absolute referencing must pin the calibration constant: `=A4-$B$2`.
    

## 3. Real-Life Engineering Application Problems

### Problem 1: [[Structural Engineering (Concrete Beam Mass Sizing)]]
[[Structural Engineering (Concrete Beam Mass Sizing) Solution]]


### Problem 2: [[Aerospace Engineering (Mass Budgeting Contingency)]]
[[Aerospace Engineering (Mass Budgeting Contingency) Solution]]

    

### Problem 3: [[HVAC Engineering (Multi-Zone Solar Heat Gain)]]
[[HVAC Engineering (Multi-Zone Solar Heat Gain) Solution]]

#### Worked Example
Formulating a Matrix System

You are presented with the following system of linear equations:

$$3A+2B=6$$

$$-2A+B=2$$

- Convert this linear system into its standard matrix format, $[A][x] = [b]$. Clearly identify the contents of the coefficient matrix $[A]$, the unknown variable vector $[x]$, and the constant vector $[b]$.

##### Solution
###### The Final Matrix Equation

The complete system written in the standard format $[A][x] = [b]$ is:

$$\begin{bmatrix} 3 & 2 \\ -2 & 1 \end{bmatrix} \begin{bmatrix} A \\ B \end{bmatrix} = \begin{bmatrix} 6 \\ 2 \end{bmatrix}$$

###### Step-by-Step Breakdown

To convert a linear system of equations into matrix form, we separate the system into three distinct parts: the numbers multiplying the variables, the variables themselves, and the answers on the right side.

###### 1. Identify the Coefficient Matrix $[A]$

The coefficient matrix collects only the numbers (coefficients) attached to the front of our unknown variables. We align them row by row, keeping columns dedicated to the same variable:

- **Row 1:** From $3A + 2B$, the coefficients are **3** and **2**.

- **Row 2:** From $-2A + B$, the coefficients are **-2** and **1** (since $B$ is implicitly $1B$).


Putting these rows together gives a $2 \times 2$ matrix:

$$[A] = \begin{bmatrix} 3 & 2 \\ -2 & 1 \end{bmatrix}$$

###### 2. Identify the Unknown Variable Vector $[x]$

The unknown variable vector is a column vector listing all the variable names we are trying to calculate. They must be written in the exact same left-to-right order as they appear in the columns of our coefficient matrix:

- Our variables are $A$ and $B$.


This forms the column vector:

$$[x] = \begin{bmatrix} A \\ B \end{bmatrix}$$

###### 3. Identify the Constant Vector $[b]$

The constant vector is a column vector containing the numbers on the right side of the equals signs. These values do not have any variables attached to them:

- **Row 1 Constant:** **6**

- **Row 2 Constant:** **2**


This forms the column vector:

$$[b] = \begin{bmatrix} 6 \\ 2 \end{bmatrix}$$
#### Active Practice Problem
Solving Systems with Inversion

When solving a complex multi-equation system represented by $[A][x] = [b]$ , performing substitution and elimination by hand becomes highly impractical.

- State the matrix algebra operation required to cleanly isolate the unknown vector $[x]$.
    
- If a computer matrix tool calculates the inverse matrix to be $[A]^{-1} = \begin{bmatrix} \frac{1}{7} & -\frac{2}{7} \\ \frac{2}{7} & \frac{3}{7} \end{bmatrix}$, use your matrix isolation formula to compute the exact values of the unknowns when the constant vector is $[b] = \begin{bmatrix} 6 \\ 2 \end{bmatrix}$.

##### Workspace

##### Solution
###### Part 1: Isolating the Unknown Vector $[x]$

To isolate the unknown vector $[x]$ from the standard linear system $[A][x] = [b]$ , you must multiply both sides of the equation from the left by the **inverse** of the coefficient matrix, denoted as $[A]^{-1}$.

Mathematically, multiplying a matrix by its own inverse cancels it out, reducing it to the identity matrix ($[A]^{-1}[A] = [I]$). This gives us the standard matrix isolation formula:

$$[x] = [A]^{-1}[b]$$

###### Part 2: Computing the Exact Values

To find the exact values of the unknowns, substitute the given inverse matrix $[A]^{-1}$ and the constant vector $[b]$ directly into your isolation formula:

$$[x] = \begin{bmatrix} \frac{1}{7} & -\frac{2}{7} \\ \frac{2}{7} & \frac{3}{7} \end{bmatrix} \begin{bmatrix} 6 \\ 2 \end{bmatrix}$$

To calculate the resulting values, perform matrix multiplication by moving across the rows of the first matrix and down the column of the second matrix.

- **Top Unknown Variable ($A$):** Multiply the elements of the first row by the elements of the constant column:

$$\left(\frac{1}{7} \cdot 6\right) + \left(-\frac{2}{7} \cdot 2\right) = \frac{6}{7} - \frac{4}{7} = \frac{2}{7}$$

- **Bottom Unknown Variable ($B$):** Multiply the elements of the second row by the elements of the constant column:

$$\left(\frac{2}{7} \cdot 6\right) + \left(\frac{3}{7} \cdot 2\right) = \frac{12}{7} + \frac{6}{7} = \frac{18}{7}$$


###### Final Vector Solution

Putting the computed elements back into the unknown vector gives the final exact answers for the system:

$$[x] = \begin{bmatrix} A \\ B \end{bmatrix} = \begin{bmatrix} \frac{2}{7} \\ \frac{18}{7} \end{bmatrix}$$

### Regroup 3
- Verify calculations and mathematical reasoning.

### Synthesis Wrap-up
- Core takeaways from Session 11 and overview of homework homework assignment.
