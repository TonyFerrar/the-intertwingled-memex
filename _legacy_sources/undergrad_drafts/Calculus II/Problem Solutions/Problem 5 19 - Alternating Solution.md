Here is the step-by-step solution to determine the convergence of the fifth series.

## Given Problem

Determine whether the following series diverges, converges absolutely, or converges conditionally:

$$\sum_{n=1}^{\infty} (-1)^{n+1} \frac{n^n}{2}$$

## Step-by-Step Solution

### Step 1: Analyze the General Term and Choose a Test

Let the general term of our series be:

$$a_n = (-1)^{n+1} \frac{n^n}{2}$$

Before trying complex tests like the Ratio or Root tests, it is always wise to take a quick look at how the terms behave as $n$ goes to infinity.

- The numerator is $n^n$ (a variable base raised to a variable power), which is the fastest-growing standard function in calculus.
    
- The denominator is simply a constant, $2$.
    

Because the numerator is growing explosively while the denominator stays exactly the same, the terms are getting massive rather than shrinking toward $0$. This tells us that the **Divergence Test** (or $n$-th term test) is our best tool.

### Step 2: Apply the Divergence Test

The Divergence Test states that for any series $\sum a_n$:

- If $\lim_{n \to \infty} a_n \neq 0$, or if the limit does not exist, then the series **must diverge**.
    
- If $\lim_{n \to \infty} a_n = 0$, the test is inconclusive (and you must try a different test).
    

Let's test the limit of the magnitude (absolute value) of the terms first to see where they are heading:

$$\lim_{n \to \infty} \left\vert{} (-1)^{n+1} \frac{n^n}{2} \right\vert{} = \lim_{n \to \infty} \frac{n^n}{2}$$

### Step 3: Evaluate the Limit

As $n$ approaches infinity, $n^n$ approaches infinity at an extreme rate:

$$\lim_{n \to \infty} \frac{n^n}{2} = \frac{\infty}{2} = \infty$$

Because the absolute value of the terms goes to infinity, the actual alternating terms ($a_n$) will bounce back and forth between larger and larger positive and negative values without ever settling down.

Therefore, the limit does not exist:

$$\lim_{n \to \infty} a_n \neq 0$$

## Final Conclusion

Since the limit of the terms as $n \to \infty$ is not equal to $0$, the series **diverges** by the Divergence Test.