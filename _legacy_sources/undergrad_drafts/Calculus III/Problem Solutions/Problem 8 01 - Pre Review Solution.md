Here is the step-by-step solution to evaluate the limit for **Question 8**.

### Step 1: Substitute the Value to Check for an Indeterminate Form

First, test if you can evaluate the limit by directly substituting $x = -2$ into the function:

$$\text{Numerator:} \quad -(-2)^2 + 5(-2) + 14 = -4 - 10 + 14 = 0$$

$$\text{Denominator:} \quad -5(-2)^2 - 2(-2) + 16 = -5(4) + 4 + 16 = -20 + 20 = 0$$

Since direct substitution results in $\frac{0}{0}$, this is an **indeterminate form**. This tells us there is a common factor of $(x + 2)$ in both the numerator and the denominator causing the expression to equal zero.

### Step 2: Factor the Numerator and Denominator

To resolve the indeterminate form, factor both polynomials completely.

#### 1. Factor the Numerator: $-x^2 + 5x + 14$

Factor out a negative sign first:

$$-(x^2 - 5x - 14)$$

Find two numbers that multiply to $-14$ and add to $-5$. Those numbers are $-7$ and $+2$:

$$-(x - 7)(x + 2)$$

#### 2. Factor the Denominator: $-5x^2 - 2x + 16$

Since we already know $(x + 2)$ must be a factor, we can set up the factoring as:

$$(x + 2)(\text{something}) = -5x^2 - 2x + 16$$

By matching the leading term ($-5x^2$) and the constant term ($+16$), the other factor must be $(-5x + 8)$:

$$(x + 2)(-5x + 8)$$

_(Verify: $-5x^2 + 8x - 10x + 16 = -5x^2 - 2x + 16$)_

### Step 3: Simplify the Expression

Substitute the factored forms back into the limit expression:

$$\lim_{x \to -2} \frac{-(x - 7)(x + 2)}{(x + 2)(-5x + 8)}$$

Since $x$ approaches $-2$ but does not equal $-2$, we can safely cancel out the common factor of $(x + 2)$ from the numerator and denominator:

$$\lim_{x \to -2} \frac{-(x - 7)}{-5x + 8}$$

### Step 4: Evaluate the Limit by Substitution

Now that the common factor causing the $\frac{0}{0}$ form has been removed, substitute $x = -2$ into the simplified expression:

$$\frac{-(-2 - 7)}{-5(-2) + 8} = \frac{-(-9)}{10 + 8} = \frac{9}{18}$$

Reduce the fraction to its simplest form by dividing the numerator and denominator by 9:

$$\frac{9}{18} = \frac{1}{2}$$

### Final Answer

$$\frac{1}{2}$$