## Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} \left( \frac{n^2 - 3}{n^3 + 2} \right)^n$$

## Step-by-Step Solution

### Step 1: Identify the Best Test

The general term of the series is $a_n = \left( \frac{n^2 - 3}{n^3 + 2} \right)^n$.

Notice that the entire expression is raised to the **$n$-th power**. Whenever a series has its entire general term raised to an exponent of $n$, the **Root Test** is almost always the easiest and most effective tool to use. Taking the $n$-th root will perfectly cancel out that outer exponent.

### Step 2: Set up the Root Test

The Root Test requires us to find the limit $L$ of the $n$-th root of the absolute value of the terms as $n$ approaches infinity:

$$L = \lim_{n \to \infty} \sqrt[n]{\vert{}a_n\vert{}}$$

Substituting our term into the formula:

$$L = \lim_{n \to \infty} \sqrt[n]{\left\vert{} \left( \frac{n^2 - 3}{n^3 + 2} \right)^n \right\vert{}}$$

### Step 3: Simplify the Expression

As $n$ grows very large ($n \ge 2$), the value inside the parentheses $\frac{n^2 - 3}{n^3 + 2}$ is always positive. Therefore, we can safely remove the absolute value bars for the limit.

The $n$-th root ($\sqrt[n]{\dots}$) and the power of $n$ cancel each other out completely:

$$L = \lim_{n \to \infty} \frac{n^2 - 3}{n^3 + 2}$$

### Step 4: Evaluate the Limit

To evaluate this limit as $n \to \infty$, we compare the highest powers of $n$ in the numerator and the denominator:

- The highest power in the numerator is $n^2$.
    
- The highest power in the denominator is $n^3$.
    

Because the denominator has a higher degree than the numerator, the bottom fraction grows significantly faster than the top as $n$ goes to infinity. This forces the entire fraction to approach zero.

_(Formally, you can divide every term by the highest power, $n^3$):_

$$L = \lim_{n \to \infty} \frac{\frac{n^2}{n^3} - \frac{3}{n^3}}{\frac{n^3}{n^3} + \frac{2}{n^3}} = \lim_{n \to \infty} \frac{\frac{1}{n} - \frac{3}{n^3}}{1 + \frac{2}{n^3}} = \frac{0 - 0}{1 + 0} = 0$$

So, we find that:

$$L = 0$$

## Final Conclusion

The Root Test states that:

- If $L < 1$, the series converges absolutely.
    
- If $L > 1$, the series diverges.
    
- If $L = 1$, the test is inconclusive.
    

Since our limit is $L = 0$, which is less than $1$, the series **converges absolutely**.