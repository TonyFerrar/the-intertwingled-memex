
# Managing Type I Integrals (Unbounded Domains)
This skill involves handling integrals where at least one of the limits of integration is infinite. These are called integrals on "unbounded domains" and require specific strategies for evaluating them by setting up a limit (e.g., replacing $\infty$ with $t$ and finding the limit as $t \rightarrow \infty$).

**Type I integrals** occur when the domain of integration is infinite, meaning at least one of the limits of integration is $\infty$ or $-\infty$. To evaluate these, you replace the infinite bound with a variable $t$ and compute the definite integral over the finite interval $[a,t]$. Once the integral is expressed in terms of $t$, you evaluate the **limit** as $t$ approaches the infinite bound.

**Worked Example: Evaluate** 
$$\int_1^\infty \frac{1}{x} \, dx$$

1. **Set up the limit**: Because the upper bound is infinite, rewrite the integral as
$$\lim_{t \rightarrow \infty} \int_1^t \frac{1}{x} \, dx$$

2. **Integrate**: The antiderivative of $1/x$​ is $\ln |x|$. Applying the bounds gives:
$$ \ln |x|_1^t = \ln|t| - \ln|1| = \ln t$$
Why?
$$\ln|t| - \ln|1| = \ln|\frac{t}{1}| = \ln |t|$$
and $t \ge 0$.


3. **Evaluate the limit**: Find
$$\lim_{t \rightarrow \infty} \ln t$$

4. **Conclusion**: Since $\lim_{t \rightarrow \infty} \ln t = \infty$, the integral does not yield a real number and is therefore **divergent**.