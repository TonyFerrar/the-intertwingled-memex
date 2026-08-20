# Problem
Evaluate the following limit using appropriate methods:
$$\lim_{x \to \infty} \frac{1+e^{x}}{1-e^{x}}$$

---

# Solution

As $x \to \infty$, both the numerator ($1+e^x$) and the denominator ($1-e^x$) approach infinity, resulting in an indeterminate form of $\frac{\infty}{-\infty}$. To evaluate this limit, we can divide both the numerator and the denominator by the dominant term, which is $e^x$.

### Step 1: Algebraic Manipulation
Divide every term in the expression by $e^x$:
$$\lim_{x \to \infty} \frac{\frac{1}{e^x} + \frac{e^x}{e^x}}{\frac{1}{e^x} - \frac{e^x}{e^x}}$$

Simplify the fractions:
$$\lim_{x \to \infty} \frac{\frac{1}{e^x} + 1}{\frac{1}{e^x} - 1}$$

### Step 2: Evaluate the limit
As $x$ approaches $\infty$, the term $\frac{1}{e^x}$ approaches $0$ because the denominator grows infinitely large ($\lim_{x \to \infty} e^x = \infty$). 

Substitute $0$ for $\frac{1}{e^x}$:
$$\frac{0 + 1}{0 - 1} = \frac{1}{-1} = -1$$

---

# Final Answer
$$\lim_{x \to \infty} \frac{1+e^{x}}{1-e^{x}} = -1$$