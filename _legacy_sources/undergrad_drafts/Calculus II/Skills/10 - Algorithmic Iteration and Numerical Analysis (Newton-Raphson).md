# Skill 2: Algorithmic Iteration and Numerical Analysis (Newton-Raphson)

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
