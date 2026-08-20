# Calculus I
**Learning Activity #14 — Summary of Curve Sketching**

## Solution for Function 2: $g(x) = (3 - x)e^x$

---

### Step 1: Domain and Symmetry
* **Domain:** Both components $(3 - x)$ and $e^x$ are defined everywhere, making the domain all real numbers:
  $$(-\infty, \infty)$$
* **Symmetry:** Test $g(-x)$:
  $$g(-x) = (3 - (-x))e^{-x} = (3 + x)e^{-x}$$
  Since $g(-x) \neq g(x)$ and $g(-x) \neq -g(x)$, the function has **no symmetry**.

---

### Step 2: Intercepts
* **$y$-intercept:** Set $x = 0$:
  $$g(0) = (3 - 0)e^0 = 3(1) = 3 \implies (0, 3)$$
* **$x$-intercept:** Set $g(x) = 0$:
  $$(3 - x)e^x = 0$$
  Since $e^x > 0$ for all real numbers, we set $3 - x = 0 \implies x = 3$.
  * Intercept: **$(3, 0)$**

---

### Step 3: Asymptotes and End Behavior
* **Vertical Asymptotes:** None, as there are no values where $g(x)$ is undefined.
* **Right-hand End Behavior ($x \to \infty$):**
  $$\lim_{x \to \infty} (3 - x)e^x = (-\infty)(\infty) = - \infty$$
* **Left-hand End Behavior ($x \to -\infty$):**
  $$\lim_{x \to -\infty} (3 - x)e^x = \lim_{x \to -\infty} \frac{3 - x}{e^{-x}}$$
  Using L'Hôpital's Rule (evaluating the $\frac{\infty}{\infty}$ form):
  $$\lim_{x \to -\infty} \frac{-1}{-e^{-x}} = \lim_{x \to -\infty} \frac{1}{e^{-x}} = 0$$
  * This confirms a **Horizontal Asymptote** at **$y = 0$** as $x \to -\infty$.

---

### Step 4: First Derivative (Intervals of Increase/Decrease & Extrema)
Find the first derivative using the Product Rule:
$$g'(x) = (-1)e^x + (3 - x)e^x$$
$$g'(x) = e^x(-1 + 3 - x) = (2 - x)e^x$$

Set $g'(x) = 0$ to find the critical numbers:
$$(2 - x)e^x = 0 \implies x = 2$$

#### Sign Chart Analysis for $g'(x)$:
* **$(-\infty, 2)$**: $g'(x) > 0 \implies$ **Increasing**
* **$(2, \infty)$**: $g'(x) < 0 \implies$ **Decreasing**

#### Relative Extrema Coordinates:
* **Relative Maximum:** Occurs at $x = 2$ where the graph changes from increasing to decreasing:
  $$g(2) = (3 - 2)e^2 = e^2 \approx 7.39 \implies (2, e^2)$$
* **Relative Minimum:** None.

---

### Step 5: Second Derivative (Concavity & Points of Inflection)
Find the second derivative using the Product Rule on $g'(x) = (2 - x)e^x$:
$$g''(x) = (-1)e^x + (2 - x)e^x$$
$$g''(x) = e^x(-1 + 2 - x) = (1 - x)e^x$$

Set $g''(x) = 0$ to find potential inflection points:
$$(1 - x)e^x = 0 \implies x = 1$$

#### Sign Chart Analysis for $g''(x)$:
* **$(-\infty, 1)$**: $g''(x) > 0 \implies$ **Concave Up**
* **$(1, \infty)$**: $g''(x) < 0 \implies$ **Concave Down**

#### Points of Inflection Coordinates:
Since concavity changes at $x = 1$:
$$g(1) = (3 - 1)e^1 = 2e \approx 5.44 \implies (1, 2e)$$

---

### Summary Table for Plotting

| Feature | Type / Behavior | Coordinates / Intervals |
| :--- | :--- | :--- |
| **$y$-intercept** | Axis crossing | $(0, 3)$ |
| **$x$-intercept** | Axis crossing | $(3, 0)$ |
| **Horizontal Asymptote** | Left end flattening | $y = 0$ (as $x \to -\infty$) |
| **Relative Max** | Local peak | $(2, 7.39)$ |
| **Inflection Point** | Curvature shift | $(1, 5.44)$ |
| **Concavity** | Concave Up ($\cup$) | $(-\infty, 1)$ |
| | Concave Down ($\cap$) | $(1, \infty)$ |

---

### Graph Sketching Guide
1. Sketch a horizontal dashed line along the negative $x$-axis to mark the **horizontal asymptote** at $y = 0$.
2. Plot the key coordinate points: the intercepts **$(0,3)$** and **$(3,0)$**, the relative maximum **$(2, 7.39)$**, and the inflection point **$(1, 5.44)$**.
3. Draw the curve starting very close to $y = 0$ on the far left, climbing upward in a cup shape (concave up). 
4. At **$(1, 5.44)$**, transition the curve into an upside-down bowl shape (concave down), peak smoothly at **$(2, 7.39)$**, descend through **$(3,0)$**, and continue downwards steeply towards $-\infty$.

### Graph 
![[15 - Curve Sketching Image 3.png]]