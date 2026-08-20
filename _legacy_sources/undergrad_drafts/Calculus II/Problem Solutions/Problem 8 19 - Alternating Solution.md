## Ground Rules: The Integral Test

To use the Integral Test for a series $\sum a_n$, we find a matching function $f(x)$ by replacing $n$ with $x$. For the test to be valid, $f(x)$ must meet three strict requirements on the interval being tested:

1. **Continuous** (no breaks, holes, or vertical asymptotes)
    
2. **Positive** (outputs stay above the x-axis)
    
3. **Decreasing** (the terms continuously shrink)
    

If these conditions are met, then the series $\sum_{n=k}^{\infty} a_n$ and the improper integral $\int_{k}^{\infty} f(x) \, dx$ share the exact same fate: they **both converge** or **both diverge**.

## Solution for Problem 1

$$\sum_{n=1}^{\infty} \frac{1}{(n+1)^5}$$

### Step 1: Check the Conditions

Let $f(x) = \frac{1}{(x+1)^5}$ on the interval $[1, \infty)$.

- **Continuous?** Yes. The only problem spot is at $x = -1$, which is well outside our interval of $[1, \infty)$.
    
- **Positive?** Yes. For any $x \ge 1$, $(x+1)^5$ is positive, so $\frac{1}{\text{positive}}$ is positive.
    
- **Decreasing?** Yes. As $x$ grows, the denominator grows, which forces the overall fraction to shrink.
    

Since all three conditions are satisfied, we can safely proceed with the test.

### Step 2: Set up the Improper Integral

We change the upper bound to a variable $t$ and evaluate it as a limit approaching infinity:

$$\int_{1}^{\infty} \frac{1}{(x+1)^5} \, dx = \lim_{t \to \infty} \int_{1}^{t} (x+1)^{-5} \, dx$$

### Step 3: Integrate

We can integrate this using a simple power rule reverse step (or a mental $u$-substitution where $u = x+1$ and $du = dx$):

$$\int (x+1)^{-5} \, dx = \frac{(x+1)^{-4}}{-4} = -\frac{1}{4(x+1)^4}$$

Now, apply the integration bounds from $1$ to $t$:

$$\lim_{t \to \infty} \left[ -\frac{1}{4(x+1)^4} \right]_{1}^{t}$$

### Step 4: Evaluate the Limit

Substitute the upper bound $t$ and lower bound $1$ into our expression:

$$= \lim_{t \to \infty} \left( -\frac{1}{4(t+1)^4} - \left( -\frac{1}{4(1+1)^4} \right) \right)$$

$$= \lim_{t \to \infty} \left( -\frac{1}{4(t+1)^4} + \frac{1}{4(2)^4} \right)$$

As $t \to \infty$, the fraction $-\frac{1}{4(t+1)^4}$ has a fixed numerator and an infinitely growing denominator, meaning it approaches $0$:

$$= 0 + \frac{1}{4(16)} = \frac{1}{64}$$

### Conclusion for 1

Because the improper integral evaluates to a clean, finite value ($\frac{1}{64}$), the integral converges. Therefore, the series **converges** by the Integral Test.

## Solution for Problem 2

$$\sum_{n=1}^{\infty} \frac{n^2}{n^3 - 1}$$

> **A Quick Heads-Up:** Notice that if you plug $n=1$ into the denominator, you get $1^3 - 1 = 0$, causing a division-by-zero error. This is a tiny technical typo on the worksheet! Because the behavior of a series at infinity isn't changed by ignoring the very first broken term, we will test the "tail" of the series starting from $n=2$ to $\infty$.

### Step 1: Check the Conditions

Let $f(x) = \frac{x^2}{x^3 - 1}$ on the interval $[2, \infty)$.

- **Continuous?** Yes. The vertical asymptote is at $x = 1$, which we safely avoid by starting at $2$.
    
- **Positive?** Yes. For $x \ge 2$, both $x^2$ and $x^3 - 1$ are strictly positive.
    
- **Decreasing?** We can double-check with the quotient rule:
    
    $$f'(x) = \frac{(2x)(x^3-1) - (x^2)(3x^2)}{(x^3-1)^2} = \frac{2x^4 - 2x - 3x^4}{(x^3-1)^2} = \frac{-x^4 - 2x}{(x^3-1)^2}$$
    
    Since the numerator is negative for all $x \ge 2$, $f'(x) < 0$, meaning the function is officially decreasing.
    

### Step 2: Set up the Improper Integral

$$\int_{2}^{\infty} \frac{x^2}{x^3 - 1} \, dx = \lim_{t \to \infty} \int_{2}^{t} \frac{x^2}{x^3 - 1} \, dx$$

### Step 3: Integrate Using $u$-Substitution

Let's use $u$-substitution to compute the antiderivative:

- Let $u = x^3 - 1$
    
- Then $du = 3x^2 \, dx \implies \frac{1}{3} \, du = x^2 \, dx$
    

Substitute these into the integral:

$$\int \frac{x^2}{x^3 - 1} \, dx = \frac{1}{3} \int \frac{1}{u} \, du = \frac{1}{3} \ln\vert{}u\vert{} = \frac{1}{3} \ln\vert{}x^3 - 1\vert{}$$

Now, bring back the limits and evaluation bounds:

$$\lim_{t \to \infty} \left[ \frac{1}{3} \ln(x^3 - 1) \right]_{2}^{t}$$

### Step 4: Evaluate the Limit

Plug in our bounds:

$$= \lim_{t \to \infty} \left( \frac{1}{3} \ln(t^3 - 1) - \frac{1}{3} \ln(2^3 - 1) \right)$$

$$= \lim_{t \to \infty} \left( \frac{1}{3} \ln(t^3 - 1) \right) - \frac{1}{3} \ln(7)$$

As $t \to \infty$, the term $(t^3 - 1)$ grows infinitely large. The natural log of infinity is still infinity:

$$= \infty - \frac{1}{3}\ln(7) = \infty$$

### Conclusion for 2

Because the improper integral evaluates to $\infty$, the integral diverges. Therefore, the series **diverges** by the Integral Test.