## Step-by-Step Solution

When functions are given as $x$ in terms of $y$ (i.e., $x = f(y)$), it is much easier to integrate with respect to $y$. Instead of finding "upper minus lower" curves, we look for the **"rightmost curve minus leftmost curve"** over the given $y$-interval.

### Step 1: Identify the Right and Left Functions

Looking at the interval $y \in [0, 1]$ along the vertical axis:

- To determine which curve is further to the right, we can test a value in the interval, such as $y = 0.5$:
    
    - For $x = y^2 \implies (0.5)^2 = 0.25$
        
    - For $x = y^3 \implies (0.5)^3 = 0.125$
        
- Since $0.25 > 0.125$, the curve $x = y^2$ is further to the right.
    
    - **Right function ($x_{\text{right}}$):** $x = y^2$
        
    - **Left function ($x_{\text{left}}$):** $x = y^3$
        

### Step 2: Set Up the Area Integral

The formula for the area $A$ between two curves integrated with respect to $y$ from $y = c$ to $y = d$ is:

$$A = \int_{c}^{d} (x_{\text{right}} - x_{\text{left}}) \, dy$$

Substituting our boundaries ($c = 0, d = 1$) and our functions:

$$A = \int_{0}^{1} (y^2 - y^3) \, dy$$

### Step 3: Find the Antiderivative

Integrate each term using the power rule ($\int y^n \, dy = \frac{y^{n+1}}{n+1}$):

$$\int (y^2 - y^3) \, dy = \frac{y^3}{3} - \frac{y^4}{4}$$

### Step 4: Evaluate the Definite Integral

Apply the Fundamental Theorem of Calculus by plugging in the upper limit (1) and subtracting the lower limit (0):

$$A = \left[ \frac{y^3}{3} - \frac{y^4}{4} \right]_{0}^{1}$$

$$A = \left( \frac{1^3}{3} - \frac{1^4}{4} \right) - \left( \frac{0^3}{3} - \frac{0^4}{4} \right)$$

$$A = \left( \frac{1}{3} - \frac{1}{4} \right) - 0$$

### Step 5: Find a Common Denominator and Solve

Find a common denominator for 3 and 4, which is 12:

$$\frac{1}{3} = \frac{4}{12}$$

$$\frac{1}{4} = \frac{3}{12}$$

Subtract the fractions:

$$A = \frac{4}{12} - \frac{3}{12} = \frac{1}{12}$$

### Final Answer

The exact area of the shaded region is **$\frac{1}{12}$** (or approximately **0.0833**).