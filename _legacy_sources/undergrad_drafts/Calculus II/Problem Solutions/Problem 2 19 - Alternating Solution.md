## Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt[4]{n^3}}$$

## Step-by-Step Solution

### Step 1: Test for Absolute Convergence

To see if the series converges absolutely, we take the absolute value of its terms to remove the alternating $(-1)^n$ component:

$$\sum_{n=1}^{\infty} \left\vert{} \frac{(-1)^n}{\sqrt[4]{n^3}} \right\vert{} = \sum_{n=1}^{\infty} \frac{1}{\sqrt[4]{n^3}}$$

We can rewrite the radical in the denominator using a fractional exponent ($\sqrt[4]{n^3} = n^{3/4}$):

$$\sum_{n=1}^{\infty} \frac{1}{n^{3/4}}$$

This is a **$p$-series** where $p = \frac{3}{4}$.

- The $p$-series test states that a series converges only if $p > 1$.
    
- Since $\frac{3}{4} \le 1$, the absolute series **diverges**.
    

> **What this means so far:** The series is **not** absolutely convergent. It is either conditionally convergent or completely divergent. Now we must test the original alternating series.

### Step 2: Test the Original Series using the Alternating Series Test (AST)

The original series is alternating, written in the form $\sum_{n=1}^{\infty} (-1)^n b_n$, where:

$$b_n = \frac{1}{n^{3/4}}$$

To show that this alternating series converges, $b_n$ must satisfy two conditions:

1. **The terms must be decreasing:** As $n$ grows larger, the denominator $n^{3/4}$ grows larger, which means the overall fraction gets smaller. Thus, $b_{n+1} \le b_n$ for all $n$.
    
2. **The limit must approach 0:** We take the limit as $n$ goes to infinity:
    
    $$\lim_{n \to \infty} b_n = \lim_{n \to \infty} \frac{1}{n^{3/4}} = 0$$
    

Since both conditions of the Alternating Series Test are satisfied, the original series **converges**.

## Final Conclusion

Because the original alternating series converges, but its absolute value series diverges, the series **converges conditionally**.