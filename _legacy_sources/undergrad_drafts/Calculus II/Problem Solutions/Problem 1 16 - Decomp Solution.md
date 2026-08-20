### Step 1: Factor the Denominator

First, we need to factor the quadratic polynomial in the denominator, $x^2 - 3x + 2$. We look for two numbers that multiply to $2$ and add up to $-3$. Those numbers are $-1$ and $-2$.

$$x^2 - 3x + 2 = (x - 1)(x - 2)$$

### Step 2: Set Up the Partial Fraction Decomposition

Because the denominator has two distinct linear factors, we can express the integrand as a sum of simpler fractions with unknown constants $A$ and $B$:

$$\frac{5x - 7}{(x - 1)(x - 2)} = \frac{A}{x - 1} + \frac{B}{x - 2}$$

### Step 3: Clear the Fractions

Multiply both sides of the equation by the least common denominator, $(x - 1)(x - 2)$, to eliminate the fractions:

$$5x - 7 = A(x - 2) + B(x - 1)$$

### Step 4: Solve for the Constants $A$ and $B$

The easiest way to find $A$ and $B$ is to pick "convenient" values of $x$ that make one of the terms on the right side drop out.

- **To find $A$, let $x = 1$:**
    
    $$5(1) - 7 = A(1 - 2) + B(1 - 1)$$
    
    $$-2 = A(-1) + 0$$
    
    $$A = 2$$
    
- **To find $B$, let $x = 2$:**
    
    $$5(2) - 7 = A(2 - 2) + B(2 - 1)$$
    
    $$10 - 7 = 0 + B(1)$$
    
    $$B = 3$$
    

### Step 5: Substitute Back and Integrate

Now replace $A$ and $B$ in our partial fraction setup and split the original integral into two simple integrals:

$$\int \frac{5x - 7}{x^2 - 3x + 2} \, dx = \int \left( \frac{2}{x - 1} + \frac{3}{x - 2} \right) dx$$

Using the natural logarithm integration rule ($\int \frac{1}{u} \, du = \ln|u| + C$), we get:

$$\int \frac{2}{x - 1} \, dx + \int \frac{3}{x - 2} \, dx = 2\ln|x - 1| + 3\ln|x - 2| + C$$

### Final Answer

$$2\ln|x - 1| + 3\ln|x - 2| + C$$

_(where $C$ is the constant of integration)_