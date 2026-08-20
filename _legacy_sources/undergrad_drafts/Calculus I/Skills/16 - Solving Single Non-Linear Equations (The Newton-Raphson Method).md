# Skill 2: Solving Single Non-Linear Equations (The Newton-Raphson Method)

## 1. Core Concepts & Lecture Notes

### The Engineering Challenge: Implicit and Non-Linear Equations

In elementary algebra, you learned to solve equations by isolating the variable on one side (e.g., if $3x - 6 = 0$, then $x = 2$). However, the physical laws governing real-world engineering systems often generate equations where the unknown variable is trapped inside multiple non-linear functions at the same time—such as a polynomial combined with an exponent or a logarithm.

For example, in an equation like $2x^3 - e^x = 0$, it is mathematically impossible to cleanly isolate $x$ by hand using standard algebraic steps. To find where this function equals zero (finding its roots), engineers use numerical methods.

### The Newton-Raphson Strategy

The Newton-Raphson method is an iterative, calculus-based technique used to find the roots of a non-linear equation $f(x) = 0$. Instead of guessing blindly, the method uses the local derivative (the slope of the tangent line) to systematically guide its next guess closer to the true root.

Here is how the algorithm works conceptually:

1. **Initial Guess ($x_0$):** You choose a starting value near where you suspect the true root lies.
    
2. **Tangent Line Projection:** The algorithm evaluates the function value $f(x_0)$ and its derivative (slope) $f'(x_0)$ at that point. It constructs a tangent line to the curve.
    
3. **Tracking the Intercept:** The point where this local tangent line crosses the x-axis becomes your updated guess, $x_1$. Because the tangent line models the local path of the curve, its x-intercept is almost always much closer to the true root than the previous guess.
    
4. **The Loop:** This process repeats sequentially, turning $x_1$ into $x_2$, then $x_2$ into $x_3$, looping continuously until the value converges (stops changing).
    

### The Recurrence Relation Formula

By mapping out the equation of the tangent line and solving for its x-intercept, we derive the universal Newton-Raphson recurrence formula:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

Where:

- $x_n$ is your current guess.
    
- $f(x_n)$ is the height of the function at your current guess.
    
- $f'(x_n)$ is the analytical derivative (slope) of the function at your current guess.
    
- $x_{n+1}$ is the newly refined guess for the next step.
    

### Mapping the Solver into a Spreadsheet

Spreadsheets are perfectly suited for this loop because you can map the output of one row straight into the input of the next. The standard setup uses four columns:

- **Column A ($x_n$):** The current guess. For the very first row, this is your initial manual guess ($x_0$). For every row below it, the cell simply points to the result of the previous row's calculation (`=D2`).
    
- **Column B ($f(x_n)$):** The equation evaluated at the current guess.
    
- **Column C ($f'(x_n)$):** The analytical derivative of the equation evaluated at the current guess.
    
- **Column D ($x_{n+1}$):** The formula evaluating the recurrence step: `=A2 - (B2 / C2)`.
    

When you autofill these columns down, the spreadsheet rapidly updates. You know the exact root has been found when the numbers in column A stop changing between rows—this is called **convergence**.

## 2. General Sample Problems

### Problem 1: Deriving the Recurrence Relation Syntax

An engineer wants to find the root of the non-linear equation:

$$f(x) = 3x^3 - \ln(x) - 4 = 0$$

1. Find the analytical derivative $f'(x)$.
    
2. Assuming the current guess $x_n$ is stored in cell `A2`, write out the exact spreadsheet formula that should be placed in cell `D2` to calculate the next approximation $x_{n+1}$.
    

#### Solution

1. **Derivative Calculation:** Using standard calculus power rules and logarithm rules:
    
    $$f'(x) = 9x^2 - \frac{1}{x}$$
    
2. **Spreadsheet Formula for D2:**
    
    Excel
    
    ```
    =A2 - ((3*A2^3 - LN(A2) - 4) / (9*A2^2 - 1/A2))
    ```
    
    - _Note:_ Plentiful parentheses wrap the numerator and denominator cleanly to keep the order of operations exact during the division step.
        

### Problem 2: Manual Iteration Mechanics

Let's find the positive root of the function $f(x) = x^2 - 7 = 0$ (which is exactly $\sqrt{7}$). The derivative is $f'(x) = 2x$. Using an initial starting guess of $x_0 = 3$:

1. Calculate the exact numerical value of the first iteration ($x_1$).
    
2. Calculate the exact numerical value of the second iteration ($x_2$).
    

#### Solution

1. **First Step ($x_1$):**
    
    $$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 3 - \frac{3^2 - 7}{2(3)} = 3 - \frac{2}{6} = 3 - 0.33333 = 2.66667$$
    
2. **Second Step ($x_2$):**
    
    $$x_2 = 2.66667 - \frac{(2.66667)^2 - 7}{2(2.66667)} = 2.66667 - \frac{7.11111 - 7}{5.33333} = 2.66667 - \frac{0.11111}{5.33333} = 2.64583$$
    
    _(Note: The true value of $\sqrt{7} \approx 2.64575$. In just two iterations, the algorithm is accurate to four decimal places)._
    

## 3. Real-Life Engineering Application Problems

### Problem 3: [[Chemical Engineering — Molar Volume Analysis via the Van der Waals Equation]]
[[Chemical Engineering — Molar Volume Analysis via the Van der Waals Equation Solution]]


### Problem 4: [[Mechanical & Fluid Engineering — Pipe Friction Factors via the Colebrook Equation]]
[[Mechanical & Fluid Engineering — Pipe Friction Factors via the Colebrook Equation Solution]]
