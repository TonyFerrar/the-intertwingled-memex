## Step-by-Step Solution

Unlike the previous problems where the integration intervals were explicitly given, this problem requires us to find where the two curves intersect to determine our limits of integration.

### Step 1: Identify the Upper and Lower Functions

Looking at the shaded region in the graph:

- **Upper function ($y_{\text{upper}}$):** $y = 2 - x$ (the straight line forming the top boundary)
    
- **Lower function ($y_{\text{lower}}$):** $y = x^2$ (the parabola forming the bottom boundary)
    

### Step 2: Find the Intersection Points (Limits of Integration)

To find the boundaries where the region starts and ends, set the two equations equal to each other:

$$x^2 = 2 - x$$

Move all terms to one side to form a quadratic equation:

$$x^2 + x - 2 = 0$$

Factor the quadratic equation:

$$(x + 2)(x - 1) = 0$$

Setting each factor to zero gives our limits of integration:

- $x = -2$ (lower limit, $a$)
    
- $x = 1$ (upper limit, $b$)
    

### Step 3: Set Up the Area Integral

The formula for the area $A$ between the curves is:

$$A = \int_{a}^{b} (y_{\text{upper}} - y_{\text{lower}}) \, dx$$

Substituting our boundaries and functions:

$$A = \int_{-2}^{1} ((2 - x) - x^2) \, dx$$

$$A = \int_{-2}^{1} (2 - x - x^2) \, dx$$

### Step 4: Find the Antiderivative

Integrate each term individually using the power rule:

$$\int (2 - x - x^2) \, dx = 2x - \frac{x^2}{2} - \frac{x^3}{3}$$

### Step 5: Evaluate the Definite Integral

Apply the Fundamental Theorem of Calculus by evaluating the antiderivative at the upper limit (1) and subtracting the value at the lower limit (-2):

$$A = \left[ 2x - \frac{x^2}{2} - \frac{x^3}{3} \right]_{-2}^{1}$$

**Evaluate at $x = 1$:**

$$\left( 2(1) - \frac{1^2}{2} - \frac{1^3}{3} \right) = 2 - \frac{1}{2} - \frac{1}{3}$$

$$= \frac{12}{6} - \frac{3}{6} - \frac{2}{6} = \frac{7}{6}$$

**Evaluate at $x = -2$:**

$$\left( 2(-2) - \frac{(-2)^2}{2} - \frac{(-2)^3}{3} \right) = -4 - \frac{4}{2} - \left(-\frac{8}{3}\right)$$

$$= -4 - 2 + \frac{8}{3} = -6 + \frac{8}{3}$$

$$= -\frac{18}{3} + \frac{8}{3} = -\frac{10}{3} = -\frac{20}{6}$$

**Subtract the lower limit value from the upper limit value:**

$$A = \frac{7}{6} - \left(-\frac{20}{6}\right)$$

$$A = \frac{7}{6} + \frac{20}{6} = \frac{27}{6}$$

Simplify the fraction by dividing the numerator and denominator by 3:

$$A = \frac{9}{2}$$

### Final Answer

The exact area of the enclosed region is **$\frac{9}{2}$** (or **4.5**).