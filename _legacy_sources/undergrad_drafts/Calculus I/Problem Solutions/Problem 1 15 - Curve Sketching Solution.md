# Calculus I
**Learning Activity #14 — Summary of Curve Sketching**

## Solution for Function 1: $f(x) = \frac{1}{2}x^4 - 3x^2$

---

### Step 1: Domain and Symmetry
* **Domain:** As a polynomial function, the domain is all real numbers:
  $$(-\infty, \infty)$$
* **Symmetry:** Test $f(-x)$:
  $$f(-x) = \frac{1}{2}(-x)^4 - 3(-x)^2 = \frac{1}{2}x^4 - 3x^2 = f(x)$$
  Since $f(-x) = f(x)$, the function is **even** and symmetric with respect to the $y$-axis.

---

### Step 2: Intercepts
* **$y$-intercept:** Set $x = 0$:
  $$f(0) = \frac{1}{2}(0)^4 - 3(0)^2 = 0 \implies (0, 0)$$
* **$x$-intercepts:** Set $f(x) = 0$:
  $$\frac{1}{2}x^4 - 3x^2 = 0$$
  $$x^2 \left(\frac{1}{2}x^2 - 3\right) = 0$$
  This yields $x = 0$ or $\frac{1}{2}x^2 = 3 \implies x^2 = 6 \implies x = \pm\sqrt{6} \approx \pm 2.45$.
  * Intercepts: **$(0,0)$**, **$(\sqrt{6}, 0)$**, and **$(-\sqrt{6}, 0)$**

---

### Step 3: Asymptotes and End Behavior
* **Asymptotes:** None. Polynomial functions do not have vertical, horizontal, or slant asymptotes.
* **End Behavior:** Determined by the leading term $\frac{1}{2}x^4$:
  $$\lim_{x \to \infty} f(x) = \infty \quad \text{and} \quad \lim_{x \to -\infty} f(x) = \infty$$
  The graph opens upward on both the far left and far right.

---

### Step 4: First Derivative (Intervals of Increase/Decrease & Extrema)
Find the first derivative:
$$f'(x) = 2x^3 - 6x$$

Set $f'(x) = 0$ to find the critical numbers:
$$2x(x^2 - 3) = 0 \implies x = 0, \quad x = \sqrt{3} \approx 1.73, \quad x = -\sqrt{3} \approx -1.73$$

#### Sign Chart Analysis for $f'(x)$:
* **$(-\infty, -\sqrt{3})$**: $f'(x) < 0 \implies$ **Decreasing**
* **$(-\sqrt{3}, 0)$**: $f'(x) > 0 \implies$ **Increasing**
* **$(0, \sqrt{3})$**: $f'(x) < 0 \implies$ **Decreasing**
* **$(\sqrt{3}, \infty)$**: $f'(x) > 0 \implies$ **Increasing**

#### Relative Extrema Coordinates:
* **Relative Minimums:** Occur at $x = \pm\sqrt{3}$:
  $$f(\pm\sqrt{3}) = \frac{1}{2}(3)^2 - 3(3) = 4.5 - 9 = -4.5 \implies (-\sqrt{3}, -4.5), \; (\sqrt{3}, -4.5)$$
* **Relative Maximum:** Occurs at $x = 0$:
  $$f(0) = 0 \implies (0, 0)$$

---

### Step 5: Second Derivative (Concavity & Points of Inflection)
Find the second derivative:
$$f''(x) = 6x^2 - 6$$

Set $f''(x) = 0$ to find potential inflection points:
$$6(x^2 - 1) = 0 \implies x = \pm 1$$

#### Sign Chart Analysis for $f''(x)$:
* **$(-\infty, -1)$**: $f''(x) > 0 \implies$ **Concave Up**
* **$(-1, 1)$**: $f''(x) < 0 \implies$ **Concave Down**
* **$(1, \infty)$**: $f''(x) > 0 \implies$ **Concave Up**

#### Points of Inflection Coordinates:
Since concavity changes at $x = -1$ and $x = 1$:
$$f(\pm 1) = \frac{1}{2}(\pm 1)^4 - 3(\pm 1)^2 = \frac{1}{2} - 3 = -2.5 \implies (-1, -2.5), \; (1, -2.5)$$

---

### Summary Table for Plotting

| Feature | Type / Behavior | Coordinates / Intervals |
| :--- | :--- | :--- |
| **Intercepts** | Axis crossings | $(0,0)$, $(2.45, 0)$, $(-2.45, 0)$ |
| **Relative Mins** | Local valleys | $(-\sqrt{3}, -4.5)$ and $(\sqrt{3}, -4.5)$ |
| **Relative Max** | Local peak | $(0, 0)$ |
| **Inflection Points** | Curvature shift | $(-1, -2.5)$ and $(1, -2.5)$ |
| **Concavity** | Concave Up ($\cup$) | $(-\infty, -1) \cup (1, \infty)$ |
| | Concave Down ($\cap$) | $(-1, 1)$ |

---

### Graph Sketching Guide
1. Plot the **$x$-intercepts** at approximately $\pm 2.45$ and the origin $(0,0)$.
2. Plot the **relative minimums** at $(\pm 1.73, -4.5)$ and the **relative maximum** at $(0,0)$.
3. Plot the **inflection points** at $(\pm 1, -2.5)$ where the curvature transitions.
4. Draw a smooth, symmetric **"W" shaped curve** that flows through these coordinates consistently with the intervals of increase/decrease and concavity outlined above.

### Graph 
![[15 - Curve Sketching Image 2.png]]