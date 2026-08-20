
## Ground Rules: The Divergence Test

For any series $\sum a_n$, we evaluate the limit of its terms as $n$ approaches infinity ($\lim_{n \to \infty} a_n$):

- If the limit is **not equal to 0** (or does not exist), the series **diverges**.
    
- If the limit is **exactly 0**, the test is **inconclusive**. _(This means the series might converge or might still diverge, and you must use a different test)._
    

## Solution for Problem 1

$$\sum_{n=1}^{\infty} \frac{1-n}{2n+3}$$

### Step 1: Identify the general term

The general term of the series is:

$$a_n = \frac{1-n}{2n+3}$$

### Step 2: Set up and evaluate the limit

We need to find the limit of $a_n$ as $n \to \infty$:

$$\lim_{n \to \infty} \frac{1-n}{2n+3}$$

Notice that both the numerator ($1-n$) and the denominator ($2n+3$) are polynomials of degree 1. To evaluate the limit, we look at the coefficients of the highest power of $n$ (which is $n^1$):

- The coefficient of $n$ in the numerator is $-1$.
    
- The coefficient of $n$ in the denominator is $2$.
    

Dividing the leading coefficients gives:

$$\lim_{n \to \infty} \frac{1-n}{2n+3} = -\frac{1}{2}$$

### Step 3: Apply the test conclusion

Since the limit is $-\frac{1}{2}$, which is **not equal to 0**, the terms do not shrink to zero as we add them up infinitely.

**Conclusion for 1:** The series **diverges** by the Divergence Test.

## Solution for Problem 2

$$\sum_{n=1}^{\infty} \frac{\sqrt{n}}{n+1}$$

### Step 1: Identify the general term

The general term of the series is:

$$a_n = \frac{\sqrt{n}}{n+1} = \frac{n^{1/2}}{n+1}$$

### Step 2: Set up and evaluate the limit

We find the limit of $a_n$ as $n \to \infty$:

$$\lim_{n \to \infty} \frac{n^{1/2}}{n+1}$$

To evaluate this, compare the highest powers of $n$:

- The numerator has a power of $n^{1/2}$.
    
- The denominator has a higher power of $n^1$.
    

Because the denominator grows faster than the numerator, the fraction shrinks down to zero:

$$\lim_{n \to \infty} \frac{\sqrt{n}}{n+1} = 0$$

### Step 3: Apply the test conclusion

Because the limit is exactly 0, the Divergence Test cannot tell us whether this series builds up to a finite number or spans out to infinity.

**Conclusion for 2:** The Divergence Test is **inconclusive**.

> **Bonus Note:** If you needed to go further using a different test, you could use the _Limit Comparison Test_ with the divergent harmonic $p$-series $\sum \frac{1}{\sqrt{n}}$ to prove that this series actually diverges. But for this specific question, writing "inconclusive" is the correct final answer!