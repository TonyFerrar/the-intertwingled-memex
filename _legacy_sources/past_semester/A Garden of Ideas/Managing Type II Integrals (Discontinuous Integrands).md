# Managing Type II Integrals (Discontinuous Integrands)
This skill focuses on integrals where the function being integrated is not continuous over the interval $[a,b]$, such as when there is a vertical asymptote at an endpoint or a point within the domain. These problems can be sneaky: first you must identify these "hidden" improper integrals and use one-sided limits to approach the point of discontinuity for evaluation.

**Type II integrals** involve a function that is **discontinuous** at some point within the interval of integration, often due to a vertical asymptote. Even if the limits of integration ($a$ and $b$) appear to be finite numbers, the integral is improper if the function is undefined at $a$, $b$, or any point $c$ between them. Evaluation requires using a **one-sided limit** to approach the point of discontinuity from within the domain.

**Worked Example: Evaluate** 
$$\int_0^1 \frac{1}{x} \, dx$$


1. **Identify the discontinuity**: The function $f(x)= 1/x$​ has a vertical asymptote at $x=0$, which is the lower limit of integration.
2. **Set up the limit**: Use a one-sided limit to approach $0$ from the right:
$$ \lim_{t \rightarrow 0^+} \int_t^1 \frac{1}{x} \, dx$$

3. **Integrate**: [ln∣x∣]t1​=ln1−ln∣t∣=0−lnt=−lnt.

$$ \ln |x|_t^1 = \ln|1| - \ln|t| = - \ln t$$

4. **Evaluate the limit**: Find 
$$\lim_{t \rightarrow 0+} \left( - \ln t \right)$$
As $t$ approaches $0$ from the right, $\ln t$ approaches $− \infty$.

5. **Conclusion**: Therefore, $− \ln t$ approaches $\infty$. The integral is **divergent**.