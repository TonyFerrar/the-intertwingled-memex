# Problem
Consider the function $f(x)$ that satisfies the following conditions:
* $f(x)$ is continuous for all $x$ except $x = -2$, $x = 0$ and $x = 3$.
* $f(0)$ is undefined
* $\lim_{x \to 0} f(x) = 3$
* $\lim_{x \to -2^{-}} f(x) = -\infty$
* $\lim_{x \to -2^{+}} f(x) = \infty$
* $\lim_{x \to 3^{-}} f(x) = \infty$
* $\lim_{x \to 3^{+}} f(x) = -\infty$
* $\lim_{x \to -\infty} f(x) = 5$
* $\lim_{x \to \infty} f(x) = 5$

(a) State the equation(s) for any horizontal asymptote(s) on the graph $f(x)$.  
(b) State the equation(s) for any vertical asymptote(s) on the graph $f(x)$.  
(c) At what x-value(s) does $f(x)$ have any discontinuities? What type are they? If there are none, state that.  
(d) Sketch a possible graph of $f(x)$ on the grid below.  

---

# Solution

### (a) Horizontal Asymptotes
Horizontal asymptotes are determined by examining the behavior of the function as $x \to \infty$ and $x \to -\infty$.
* Given $\lim_{x \to -\infty} f(x) = 5$
* Given $\lim_{x \to \infty} f(x) = 5$

**Equation of Horizontal Asymptote:** $$y = 5$$

---

### (b) Vertical Asymptotes
Vertical asymptotes occur where a function approaches $\pm\infty$ from either side of a finite $x$-value.
* At $x = -2$: $\lim_{x \to -2^{-}} f(x) = -\infty$ and $\lim_{x \to -2^{+}} f(x) = \infty$
* At $x = 3$: $\lim_{x \to 3^{-}} f(x) = \infty$ and $\lim_{x \to 3^{+}} f(x) = -\infty$

**Equations of Vertical Asymptotes:** $$x = -2 \quad \text{and} \quad x = 3$$

---

### (c) Discontinuities and Their Types
The problem explicitly states that $f(x)$ is discontinuous at $x = -2$, $x = 0$, and $x = 3$.

1. **At $x = -2$:** Since the function goes to $\pm\infty$ here, it is an **infinite discontinuity** (associated with a vertical asymptote).
2. **At $x = 0$:** The limit exists ($\lim_{x \to 0} f(x) = 3$), but the function value $f(0)$ is undefined. This is a **removable discontinuity** (a "hole" in the graph).
3. **At $x = 3$:** Since the function goes to $\pm\infty$ here, it is an **infinite discontinuity** (associated with a vertical asymptote).

---

### (d) Sketch of a Possible Graph

Below is a visualization mapping out the key features required by the criteria:
* Horizontal asymptote at $y = 5$ on both ends.
* Vertical asymptotes at $x = -2$ and $x = 3$.
* A removable "hole" at $(0, 3)$.
