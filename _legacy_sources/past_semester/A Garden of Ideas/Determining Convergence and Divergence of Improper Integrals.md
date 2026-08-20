# Determining Convergence and Divergence of Improper Integrals
This is the central objective of the entire session. Regardless of the integral type, the final goal is to determine if the integral **converges** (yields a real number) or **diverges** (the limit does not exist or is infinite). This skill is exercised through direct evaluation using limits, as well as through the **Comparison Test**, where a function's behavior is determined by comparing it to a known convergent or divergent integral.

The ultimate goal for any improper integral is to determine its **convergence or divergence**. If the limit of the integral exists and results in a **finite real number**, the integral converges; if the limit is infinite or does not exist, the integral diverges. Beyond direct evaluation, this skill involves using the **Comparison Test**, where a complex integral is compared to a "benchmark" function like a **p-integral** to determine its behavior without fully solving it.

**p-Integrals** take the form
$$\int_1^\infty \frac{1}{x^p} \, dx$$

**Worked Example: Determine the convergence of the following integral using the p-integral rule**

$$\int_1^\infty \frac{1}{x^2} \, dx$$

1. **Identify the form**: This is a p-integral where $f(x)=1/x^p$​ and $p=2$.
2. **Apply the rule**: A p-integral **converges if** $p>1$ and **diverges if** $p \le 1$.
3. **Evaluate**: Since $p=2$, and $2>1$, the rule dictates that the integral is convergent.
4. **Verification (Optional)**: If evaluated directly:
$$ \lim_{t \rightarrow \infty} \int_1^t x^{-2} \, dx = \lim_{t \rightarrow \infty} \left( - \frac{1}{x} \right)_1^t$$
$$ = \lim_{t \rightarrow \infty} \left( - \frac{1}{t} - (-1) \right) = \lim_{t \rightarrow \infty} \left( 1 - \frac{1}{t}\right) = 1$$

5. **Conclusion**: Because the limit is the real number $1$, the integral **converges**.

