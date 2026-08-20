### Step 1: Analyze the Denominator

The denominator is already factored into a **distinct linear factor** $(x + 1)$ and an **irreducible quadratic factor** $(x^2 + 1)$ (a quadratic polynomial that cannot be factored further using real numbers).

### Step 2: Set Up the Partial Fraction Decomposition

Because we have an irreducible quadratic factor, the numerator above it must be a linear expression ($Bx + C$) rather than a single constant:

$$\frac{4}{(x + 1)(x^2 + 1)} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 + 1}$$

### Step 3: Clear the Fractions

Multiply both sides of the equation by the entire denominator, $(x + 1)(x^2 + 1)$, to eliminate the fractions:

$$4 = A(x^2 + 1) + (Bx + C)(x + 1)$$

### Step 4: Solve for the Constants $A$, $B$, and $C$

We can find the constants by choosing a convenient value for $x$ and comparing polynomial coefficients.

- **To find $A$, let $x = -1$:**
    
    $$4 = A((-1)^2 + 1) + (B(-1) + C)(-1 + 1)$$
    
    $$4 = A(1 + 1) + 0$$
    
    $$4 = 2A \implies A = 2$$
    
- **Expand the cleared equation to find $B$ and $C$:**
    
    $$4 = Ax^2 + A + Bx^2 + Bx + Cx + C$$
    
    Group the terms by powers of $x$:
    
    $$4 = (A + B)x^2 + (B + C)x + (A + C)$$
    
- **Equate the $x^2$ coefficients:**
    
    There is no $x^2$ term on the left side ($0$). On the right side, the coefficient is $A + B$.
    
    $$0 = A + B \implies 0 = 2 + B \implies B = -2$$
    
- **Equate the constant terms:**
    
    The constant term on the left side is $4$. On the right side, it is $A + C$.
    
    $$4 = A + C \implies 4 = 2 + C \implies C = 2$$
    

### Step 5: Substitute Back and Integrate

Now, substitute $A = 2$, $B = -2$, and $C = 2$ back into the decomposition setup:

$$\int \left( \frac{2}{x + 1} + \frac{-2x + 2}{x^2 + 1} \right) dx$$

To make this easier to integrate, split the second fraction into two separate parts:

$$\int \frac{2}{x + 1} \, dx - \int \frac{2x}{x^2 + 1} \, dx + \int \frac{2}{x^2 + 1} \, dx$$

Now integrate each term individually:

1. **First term:** Uses the standard log rule.
    
    $$\int \frac{2}{x + 1} \, dx = 2\ln|x + 1|$$
    
2. **Second term:** Requires $u$-substitution ($u = x^2 + 1$, $du = 2x \, dx$).
    
    $$\int \frac{2x}{x^2 + 1} \, dx = \ln(x^2 + 1)$$
    
3. **Third term:** Recognizes the standard arctangent derivative ($\int \frac{1}{x^2+1} \, dx = \arctan(x)$).
    
    $$\int \frac{2}{x^2 + 1} \, dx = 2\arctan(x)$$
    

### Final Answer

Combining all parts together yields:

$$2\ln|x + 1| - \ln(x^2 + 1) + 2\arctan(x) + C$$

If you wish to combine the logarithms using log laws ($2\ln|x+1| = \ln((x+1)^2)$), it can also be cleanly written as:

$$\ln\left( \frac{(x + 1)^2}{x^2 + 1} \right) + 2\arctan(x) + C$$

_(where $C$ is the constant of integration)_