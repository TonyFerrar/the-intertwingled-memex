### Step 1: Factor the Denominator

The polynomial in the denominator, $x^2 - 25$, is a classic **difference of squares** ($a^2 - b^2 = (a - b)(a + b)$). We can factor it like this:

$$x^2 - 25 = (x - 5)(x + 5)$$

### Step 2: Set Up the Partial Fraction Decomposition

Since we have two distinct linear factors in the denominator, we can set up our decomposition with two unknown constants, $A$ and $B$:

$$\frac{x + 1}{(x - 5)(x + 5)} = \frac{A}{x - 5} + \frac{B}{x + 5}$$

### Step 3: Clear the Fractions

Multiply both sides of the equation by the entire denominator, $(x - 5)(x + 5)$, to clear the fractions:

$$x + 1 = A(x + 5) + B(x - 5)$$

### Step 4: Solve for the Constants $A$ and $B$

We can pick convenient values for $x$ that will make one of our terms disappear, allowing us to isolate each constant.

- **To find $A$, let $x = 5$:**
    
    $$5 + 1 = A(5 + 5) + B(5 - 5)$$
    
    $$6 = 10A$$
    
    $$A = \frac{6}{10} = \frac{3}{5}$$
    
- **To find $B$, let $x = -5$:**
    
    $$-5 + 1 = A(-5 + 5) + B(-5 - 5)$$
    
    $$-4 = -10B$$
    
    $$B = \frac{-4}{-10} = \frac{2}{5}$$
    

### Step 5: Substitute Back and Integrate

Now, replace $A$ and $B$ in our partial fraction setup and split the original expression into two separate integrals:

$$\int \left( \frac{\frac{3}{5}}{x - 5} + \frac{\frac{2}{5}}{x + 5} \right) dx$$

Pull the constants out in front of each integral and integrate using the natural log rule ($\int \frac{1}{u} \, du = \ln|u| + C$):

$$\frac{3}{5} \int \frac{1}{x - 5} \, dx + \frac{2}{5} \int \frac{1}{x + 5} \, dx = \frac{3}{5}\ln|x - 5| + \frac{2}{5}\ln|x + 5| + C$$

### Final Answer

$$\frac{3}{5}\ln|x - 5| + \frac{2}{5}\ln|x + 5| + C$$

_(where $C$ is the constant of integration)_