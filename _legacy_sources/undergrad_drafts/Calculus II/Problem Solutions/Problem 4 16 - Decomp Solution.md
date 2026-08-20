### Step 1: Factor the Denominator

The denominator is already fully factored for us: $x^3(x+1)$.

### Step 2: Set Up the Partial Fraction Decomposition

Because we have a **repeated linear factor** ($x^3$) and a **distinct linear factor** ($x+1$), our setup must include a fraction for every single power of the repeated factor up to its highest exponent:

$$\frac{2}{x^3(x+1)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x^3} + \frac{D}{x+1}$$

### Step 3: Clear the Fractions

Multiply both sides of the equation by the entire denominator, $x^3(x+1)$, to clear out the fractions:

$$2 = Ax^2(x+1) + Bx(x+1) + C(x+1) + Dx^3$$

If we expand the right side to group like terms, it looks like this:

$$2 = A(x^3 + x^2) + B(x^2 + x) + C(x + 1) + Dx^3$$

$$2 = (A + D)x^3 + (A + B)x^2 + (B + C)x + C$$

### Step 4: Solve for the Constants $A, B, C,$ and $D$

We can use a mix of plugging in convenient $x$-values and comparing coefficients to solve for our four variables.

- **To find $C$, let $x = 0$:**
    
    $$2 = A(0) + B(0) + C(0 + 1) + D(0)$$
    
    $$C = 2$$
    
- **To find $D$, let $x = -1$:**
    
    $$2 = A(0) + B(0) + C(0) + D(-1)^3$$
    
    $$2 = -D \implies D = -2$$
    
- **To find $B$, look at the $x$ coefficients:**
    
    There is no $x$ term on the left side ($0$). On the right side, the coefficient of $x$ is $B + C$.
    
    $$0 = B + C \implies B = -C \implies B = -2$$
    
- **To find $A$, look at the $x^2$ coefficients:**
    
    There is no $x^2$ term on the left side ($0$). On the right side, the coefficient of $x^2$ is $A + B$.
    
    $$0 = A + B \implies A = -B \implies A = 2$$
    

_(Quick check: The $x^3$ coefficients give $A + D = 2 + (-2) = 0$, which perfectly matches the left side!)_

### Step 5: Substitute Back and Integrate

Now replace $A, B, C,$ and $D$ in our breakdown and write the expression as separate, simpler integrals:

$$\int \left( \frac{2}{x} - \frac{2}{x^2} + \frac{2}{x^3} - \frac{2}{x+1} \right) dx$$

We can integrate these term by term. For the middle terms, rewrite them with negative exponents ($\int -2x^{-2} \, dx$ and $\int 2x^{-3} \, dx$) and use the power rule:

- $\int \frac{2}{x} \, dx = 2\ln|x|$
    
- $\int -2x^{-2} \, dx = \frac{-2x^{-1}}{-1} = \frac{2}{x}$
    
- $\int 2x^{-3} \, dx = \frac{2x^{-2}}{-2} = -\frac{1}{x^2}$
    
- $\int -\frac{2}{x+1} \, dx = -2\ln|x+1|$
    

### Final Answer

Combining all the integrated pieces gives:

$$2\ln|x| + \frac{2}{x} - \frac{1}{x^2} - 2\ln|x+1| + C$$

Using logarithm properties ($\ln|a| - \ln|b| = \ln\left|\frac{a}{b}\right|$), you can optionally simplify the log terms into a single expression:

$$2\ln\left|\frac{x}{x+1}\right| + \frac{2}{x} - \frac{1}{x^2} + C$$

_(where $C$ is the constant of integration)_