## Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} \frac{n!}{n^4}$$

## Step-by-Step Solution

### Step 1: Identify the Best Test

This series contains a factorial ($n!$). Whenever factorials are present in a series, the **Ratio Test** is almost always the most efficient tool to use.

Since all terms in this series are strictly positive for $n \ge 1$, we do not need to worry about alternating signs. If the series converges, it will automatically be absolute convergence.

### Step 2: Set up the Ratio Test

Let the general term of our series be $a_n = \frac{n!}{n^4}$.

To find the next term ($a_{n+1}$), we replace every $n$ with $(n+1)$:

$$a_{n+1} = \frac{(n+1)!}{(n+1)^4}$$

The Ratio Test requires us to find the limit $L$ of the absolute ratio of these consecutive terms as $n$ approaches infinity:

$$L = \lim_{n \to \infty} \left\vert{} \frac{a_{n+1}}{a_n} \right\vert{}$$

### Step 3: Simplify the Fraction

Substitute our terms into the limit formula:

$$L = \lim_{n \to \infty} \frac{\frac{(n+1)!}{(n+1)^4}}{\frac{n!}{n^4}}$$

To simplify, multiply the top fraction by the reciprocal of the bottom fraction:

$$L = \lim_{n \to \infty} \frac{(n+1)!}{(n+1)^4} \cdot \frac{n^4}{n!}$$

Now, rearrange the terms to group the factorials together and the algebraic powers together:

$$L = \lim_{n \to \infty} \left( \frac{(n+1)!}{n!} \cdot \frac{n^4}{(n+1)^4} \right)$$

### Step 4: Expand the Factorial and Cancel

Recall the definition of a factorial: $(n+1)! = (n+1) \cdot n!$. Let's substitute this into the limit to cancel out the $n!$ terms:

$$L = \lim_{n \to \infty} \left( \frac{(n+1) \cdot n!}{n!} \cdot \left(\frac{n}{n+1}\right)^4 \right)$$

The $n!$ in the numerator and denominator cancel out completely, leaving:

$$L = \lim_{n \to \infty} \left( (n+1) \cdot \left(\frac{n}{n+1}\right)^4 \right)$$

### Step 5: Evaluate the Limit

Let's look at the two parts of our limit as $n \to \infty$:

1. For the rational expression, dividing the numerator and denominator by $n$ gives $\lim_{n \to \infty} \frac{n}{n+1} = 1$. Raised to the fourth power, it remains $1^4 = 1$.
    
2. For the front term, $\lim_{n \to \infty} (n+1) = \infty$.
    

Multiplying them together gives:

$$L = \infty \cdot 1 = \infty$$

## Final Conclusion

The Ratio Test states that:

- If $L < 1$, the series converges absolutely.
    
- If $L > 1$ (including $L = \infty$), the series **diverges**.
    

Since our limit $L = \infty$, the series **diverges**.

> **Alternative Quick Check (The Divergence Test):**
> 
> You can also think of this intuitively. Factorials ($n!$) grow vastly faster than any polynomial power ($n^4$). Because the numerator grows so much quicker than the denominator, the individual terms grow infinitely large ($\lim_{n \to \infty} a_n = \infty$). Because the terms do not approach 0, the series must diverge.