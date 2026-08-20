# Problem
Find a value of $k$ for which $g(x)$ is continuous everywhere:
$$g(x)=\begin{cases}\frac{x^{2}-9}{x-3}&:x\ne3\\ kx&:x=3\end{cases}$$ 

---

# Solution

For a piecewise function to be continuous everywhere, the individual pieces must be continuous on their intervals, and they must seamlessly connect at the transition point, $x = 3$. This means the limit of the function as $x$ approaches $3$ must equal the actual value of the function at $x = 3$.

### Step 1: Find the value of the function at $x = 3$
Using the second piece of the function where $x = 3$:
$$g(3) = k(3) = 3k$$

### Step 2: Evaluate the limit as $x \to 3$
To find the limit, we look at the piece defined for $x \neq 3$:
$$\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$$

Direct substitution of $x = 3$ gives the indeterminate form $\frac{0}{0}$. We can resolve this by factoring the numerator (difference of squares):
$$\lim_{x \to 3} \frac{(x - 3)(x + 3)}{x - 3}$$

Since $x \to 3$ means $x \neq 3$, we can safely cancel the common factor $(x - 3)$ from the numerator and denominator:
$$\lim_{x \to 3} (x + 3)$$

Now, apply direct substitution:
$$3 + 3 = 6$$

### Step 3: Equate the limit to the function value
For $g(x)$ to be continuous at $x = 3$, the limit must equal the function value:
$$\lim_{x \to 3} g(x) = g(3)$$
$$6 = 3k$$

Solve for $k$:
$$k = \frac{6}{3}$$
$$k = 2$$

---

# Final Answer
The value of $k$ for which $g(x)$ is continuous everywhere is **$k = 2$**.