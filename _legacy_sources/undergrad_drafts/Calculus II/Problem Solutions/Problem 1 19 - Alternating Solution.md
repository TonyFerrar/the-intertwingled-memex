## Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^6}$$

## Step-by-Step Solution

### Step 1: Understand the Definitions

Before applying any tests, recall what the terms mean:

- **Absolute Convergence:** A series $\sum a_n$ converges absolutely if the series of its absolute values, $\sum \vert{}a_n\vert{}$, converges.
    
- **Conditional Convergence:** A series converges conditionally if the original series $\sum a_n$ converges, but the absolute series $\sum \vert{}a_n\vert{}$ diverges.
    
- **Divergence:** The series does not approach a finite limit.
    

> **Strategy Tip:** It is usually best to test for **absolute convergence** first. If the absolute value version of the series converges, the original series automatically converges absolutely, and your work is done!

### Step 2: Set up the Absolute Value Series

Take the absolute value of the terms in the given series to strip away the alternating $(-1)^{n+1}$ factor:

$$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^{n+1}}{n^6} \right\vert{} = \sum_{n=1}^{\infty} \frac{1}{n^6}$$

### Step 3: Analyze the Absolute Series using the $p$-Series Test

Now, we look at the resulting series: $\sum_{n=1}^{\infty} \frac{1}{n^6}$.

This is a standard **$p$-series**, which is any series in the form $\sum \frac{1}{n^p}$.

The rule for a $p$-series states:

- It **converges** if $p > 1$.
    
- It **diverges** if $p \le 1$.
    

In our series, $p = 6$. Since $6 > 1$, the series of absolute values **converges**.

## Final Conclusion

Because the series of absolute values converges, the original series **converges absolutely**.