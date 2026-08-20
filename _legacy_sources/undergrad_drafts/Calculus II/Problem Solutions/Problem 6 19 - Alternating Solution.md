## Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} \frac{(-1)^n n}{5^n}$$

## Step-by-Step Solution

### Step 1: Test for Absolute Convergence

As a standard best practice, we begin by testing for **absolute convergence**. We do this by taking the absolute value of the general term to strip away the alternating $(-1)^n$ factor:

$$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^n n}{5^n} \right\vert{} = \sum_{n=1}^{\infty} \frac{n}{5^n}$$

### Step 2: Choose the Best Test

The terms of our absolute series are $a_n = \frac{n}{5^n}$.

Because this expression contains a mix of an algebraic term ($n$) and an exponential term ($5^n$), the **Ratio Test** is the most effective tool to analyze its behavior.

### Step 3: Set up the Ratio Test

To find the next term ($a_{n+1}$), replace every $n$ in the expression with $(n+1)$:

$$a_{n+1} = \frac{n+1}{5^{n+1}}$$

Now, set up the limit $L$ of the ratio of the consecutive terms as $n$ approaches infinity:

$$L = \lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{\frac{n+1}{5^{n+1}}}{\frac{n}{5^n}}$$

### Step 4: Simplify the Fraction

Multiply the numerator by the reciprocal of the denominator:

$$L = \lim_{n \to \infty} \left( \frac{n+1}{5^{n+1}} \cdot \frac{5^n}{n} \right)$$

Group the like terms together to make cancellation straightforward:

$$L = \lim_{n \to \infty} \left( \frac{n+1}{n} \cdot \frac{5^n}{5^{n+1}} \right)$$

Using exponent rules, we know that $5^{n+1} = 5 \cdot 5^n$. Substituting this allows us to cancel out $5^n$:

$$L = \lim_{n \to \infty} \left( \frac{n+1}{n} \cdot \frac{5^n}{5 \cdot 5^n} \right)$$

$$L = \lim_{n \to \infty} \left( \frac{n+1}{n} \cdot \frac{1}{5} \right)$$

### Step 5: Evaluate the Limit

Pull the constant $\frac{1}{5}$ out of the limit:

$$L = \frac{1}{5} \cdot \lim_{n \to \infty} \frac{n+1}{n}$$

Since the degrees of the polynomial in the numerator and denominator are equal, the limit of $\frac{n+1}{n}$ as $n \to \infty$ is simply the ratio of their leading coefficients, which is $1$:

$$L = \frac{1}{5} \cdot 1 = \frac{1}{5}$$

## Final Conclusion

The Ratio Test states that:

- If $L < 1$, the series converges absolutely.
    
- If $L > 1$, the series diverges.
    

Since our limit is $L = \frac{1}{5}$, which is strictly less than $1$, the series of absolute values converges. Therefore, the original series **converges absolutely**.