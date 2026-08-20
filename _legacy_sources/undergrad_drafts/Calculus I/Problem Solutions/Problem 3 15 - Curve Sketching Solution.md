# Calculus I
**Learning Activity #14 — Summary of Curve Sketching**

## Solution for Function 3: $h(x) = \frac{4x^2}{x^2 - 4}$

---

### Step 1: Domain and Symmetry
* **Domain:** The function is undefined where the denominator is zero:
  $$x^2 - 4 = 0 \implies x = \pm 2$$
  Thus, the domain is:
  $$(-\infty, -2) \cup (-2, 2) \cup (2, \infty)$$
* **Symmetry:** Test $h(-x)$:
  $$h(-x) = \frac{4(-x)^2}{(-x)^2 - 4} = \frac{4x^2}{x^2 - 4} = h(x)$$
  Since $h(-x) = h(x)$, the function is **even** and symmetric with respect to the $y$-axis.

---

### Step 2: Intercepts
* **$y$-intercept:** Set $x = 0$:
  $$h(0) = \frac{4(0)^2}{(0)^2 - 4} = 0 \implies (0, 0)$$
* **$x$-intercept:** Set the numerator to 0:
  $$4x^2 = 0 \implies x = 0 \implies (0, 0)$$

---

### Step 3: Asymptotes and End Behavior
* **Vertical Asymptotes:** Occur where the denominator equals zero while the numerator is non-zero:
  **$x = -2$** and **$x = 2$**
  * As $x \to 2^+$, $h(x) \to \infty$
  * As $x \to 2^-$, $h(x) \to -\infty$
* **Horizontal Asymptote:** Evaluate the limit as $x \to \pm\infty$:
  $$\lim_{x \to \pm\infty} \frac{4x^2}{x^2 - 4} = \lim_{x \to \pm\infty} \frac{4}{1 - \frac{4}{x^2}} = 4$$
  * This confirms a **Horizontal Asymptote** at **$y = 4$**.

---

### Step 4: First Derivative (Intervals of Increase/Decrease & Extrema)
Find the first derivative using the Quotient Rule:
$$h'(x) = \frac{(8x)(x^2 - 4) - (4x^2)(2x)}{(x^2 - 4)^2}$$
$$h'(x) = \frac{8x^3 - 32x - 8x^3}{(x^2 - 4)^2} = \frac{-32x}{(x^2 - 4)^2}$$

Set $h'(x) = 0$ to find critical numbers:
$$-32x = 0 \implies x = 0$$

#### Sign Chart Analysis for $h'(x)$:
*(Remember to include the vertical asymptotes $x = \pm 2$ as boundaries)*
* **$(-\infty, -2)$**: $h'(x) > 0 \implies$ **Increasing**
* **$(-2, 0)$**: $h'(x) > 0 \implies$ **Increasing**
* **$(0, 2)$**: $h'(x) < 0 \implies$ **Decreasing**
* **$(2, \infty)$**: $h'(x) < 0 \implies$ **Decreasing**

#### Relative Extrema Coordinates:
* **Relative Maximum:** Changes from increasing to decreasing at $x = 0$:
  $$h(0) = 0 \implies (0, 0)$$
* **Relative Minimum:** None.

---

### Step 5: Second Derivative (Concavity & Points of Inflection)
Find the second derivative using the Quotient Rule on $h'(x) = \frac{-32x}{(x^2 - 4)^2}$:
$$h''(x) = \frac{(-32)(x^2 - 4)^2 - (-32x \cdot 2(x^2 - 4) \cdot 2x)}{(x^2 - 4)^4}$$
Factor out $(x^2 - 4)$ from the numerator:
$$h''(x) = \frac{(x^2 - 4)[-32(x^2 - 4) + 128x^2]}{(x^2 - 4)^4}$$
$$h''(x) = \frac{-32x^2 + 128 + 128x^2}{(x^2 - 4)^3} = \frac{96x^2 + 128}{(x^2 - 4)^3}$$

Set $h''(x) = 0$:
$$96x^2 + 128 = 0 \implies \text{No real solutions}$$

#### Sign Chart Analysis for $h''(x)$:
The numerator is always positive ($96x^2 + 128 > 0$), so the sign depends entirely on the denominator $(x^2 - 4)^3$:
* **$(-\infty, -2)$**: $h''(x) > 0 \implies$ **Concave Up**
* **$(-1, 1)$**: $h''(x) < 0 \implies$ **Concave Down**
* **$(2, \infty)$**: $h''(x) > 0 \implies$ **Concave Up**

#### Points of Inflection Coordinates:
* **None**. Even though concavity changes sign across $x = -2$ and $x = 2$, these values are vertical asymptotes and do not belong to the domain of the function.

---

### Summary Table for Plotting

| Feature | Type / Behavior | Coordinates / Intervals |
| :--- | :--- | :--- |
| **Intercepts** | Axis crossing | $(0, 0)$ |
| **Vertical Asymptotes** | Dashed vertical boundaries | $x = -2$ and $x = 2$ |
| **Horizontal Asymptote** | Dashed horizontal boundary | $y = 4$ |
| **Relative Max** | Local peak | $(0, 0)$ |
| **Inflection Points** | Curvature shift | None |
| **Concavity** | Concave Up ($\cup$) | $(-\infty, -2) \cup (2, \infty)$ |
| | Concave Down ($\cap$) | $(-2, 2)$ |

---

### Graph Sketching Guide
1. Draw **vertical dashed lines** at $x = -2$ and $x = 2$.
2. Draw a **horizontal dashed line** at $y = 4$.
3. Plot the single intercept and relative maximum point at the origin **$(0,0)$**.
4. Sketch the **central branch**: For the interval $(-2, 2)$, the curve is entirely concave down (like an upside-down parabola), rising from $-\infty$ next to $x = -2$, peaking at $(0,0)$, and falling back down to $-\infty$ as it approaches $x = 2$.
5. Sketch the **outer branches**: 
   * On the left $(-\infty, -2)$, draw a curve that stays completely above $y = 4$, sliding down from the left horizontal asymptote and lifting up toward $+\infty$ as it approaches $x = -2$ from the left.
   * On the right $(2, \infty)$, draw a symmetric curve that drops down from $+\infty$ next to $x = 2$ and flattens out toward the horizontal asymptote $y = 4$ on the far right.

### Graph 
![[15 - Curve Sketching Image 4.png]]