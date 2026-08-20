## Step-by-Step Solution

To find the area of the region between two curves, you integrate the difference between the upper function and the lower function over the given interval.

### Step 1: Identify the Upper and Lower Functions

By looking at the graph and analyzing the functions on the interval [0, 1]:

- **Upper function ($y_{\text{upper}}$):** $y = x^2$ (the curve above the x-axis)
    
- **Lower function ($y_{\text{lower}}$):** $y = -2x^4$ (the curve below the x-axis)
    

### Step 2: Set Up the Area Integral

The formula for the area $A$ between two curves from $x = a$ to $x = b$ is:

$$A = \int_{a}^{b} (y_{\text{upper}} - y_{\text{lower}}) \, dx$$

Substituting the bounds $a = 0$ and $b = 1$, alongside our functions:

$$A = \int_{0}^{1} (x^2 - (-2x^4)) \, dx$$

$$A = \int_{0}^{1} (x^2 + 2x^4) \, dx$$

### Step 3: Find the Antiderivative

Integrate each term individually using the power rule, which states that $\int x^n \, dx = \frac{x^{n+1}}{n+1}$:

$$\int (x^2 + 2x^4) \, dx = \frac{x^3}{3} + \frac{2x^5}{5}$$

### Step 4: Evaluate the Definite Integral

Apply the Fundamental Theorem of Calculus by plugging in the upper limit (1) and subtracting the lower limit (0):

$$A = \left[ \frac{x^3}{3} + \frac{2x^5}{5} \right]_{0}^{1}$$

$$A = \left( \frac{1^3}{3} + \frac{2(1)^5}{5} \right) - \left( \frac{0^3}{3} + \frac{2(0)^5}{5} \right)$$

$$A = \left( \frac{1}{3} + \frac{2}{5} \right) - 0$$

### Step 5: Find a Common Denominator and Solve

To combine the fractions, find the least common multiple for the denominators 3 and 5, which is 15:

$$\frac{1}{3} = \frac{5}{15}$$

$$\frac{2}{5} = \frac{6}{15}$$

Now, add them together:

$$A = \frac{5}{15} + \frac{6}{15} = \frac{11}{15}$$

### Final Answer

The exact area of the shaded region is **$\frac{11}{15}$** (or approximately **0.733**).