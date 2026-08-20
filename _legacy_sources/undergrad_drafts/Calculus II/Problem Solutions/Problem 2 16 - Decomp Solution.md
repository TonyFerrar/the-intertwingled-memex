
### Step 1: Factor the Denominator

First, look at the polynomial in the denominator, $x^3 - 3x^2$. We can factor out a greatest common factor of $x^2$:

$$x^3 - 3x^2 = x^2(x - 3)$$

### Step 2: Set Up the Partial Fraction Decomposition

Because we have a **repeated linear factor** ($x^2$) and a **distinct linear factor** ($x - 3$), our setup must include a fraction for every power of the repeated factor up to its exponent:

$$\frac{3}{x^2(x - 3)} = \frac{A}{x} + \frac{B}{x^2} + \frac{C}{x - 3}$$

### Step 3: Clear the Fractions

Multiply every term by the least common denominator, $x^2(x - 3)$, to clear out the fractions:

$$3 = Ax(x - 3) + B(x - 3) + Cx^2$$

### Step 4: Solve for the Constants $A$, $B$, and $C$

We can pick convenient values for $x$ to make terms disappear and solve for our variables.

- **To find $B$, let $x = 0$:**
    
    $$3 = A(0)(-3) + B(0 - 3) + C(0)^2$$
    
    $$3 = -3B$$
    
    $$B = -1$$
    
- **To find $C$, let $x = 3$:**
    
    $$3 = A(3)(0) + B(0) + C(3)^2$$
    
    $$3 = 9C$$
    
    $$C = \frac{1}{3}$$
    
- **To find $A$, equate the $x^2$ coefficients:**
    
    Let's look at the $x^2$ terms on both sides of our cleared equation. On the left side, there are no $x^2$ terms ($0$). On the right side, expanding $Ax(x-3)$ gives $Ax^2$, and we also have $Cx^2$.
    
    $$0 = A + C$$
    
    Since we know $C = \frac{1}{3}$:
    
    $$0 = A + \frac{1}{3} \implies A = -\frac{1}{3}$$
    

### Step 5: Substitute Back and Integrate

Now rewrite the original integral with our solved constants:

$$\int \left( \frac{-\frac{1}{3}}{x} + \frac{-1}{x^2} + \frac{\frac{1}{3}}{x - 3} \right) dx$$

We can integrate these term by term. Note that for the middle term, $\int -x^{-2} \, dx = -\frac{x^{-1}}{-1} = \frac{1}{x}$.

$$\int -\frac{1}{3x} \, dx - \int x^{-2} \, dx + \int \frac{1}{3(x - 3)} \, dx = -\frac{1}{3}\ln|x| + \frac{1}{x} + \frac{1}{3}\ln|x - 3| + C$$

### Final Answer

You can leave the answer expanded, or combine the natural logarithms using log properties ($\ln|a| - \ln|b| = \ln\left|\frac{a}{b}\right|$):

$$\frac{1}{3}\ln\left|\frac{x - 3}{x}\right| + \frac{1}{x} + C$$

_(where $C$ is the constant of integration)_