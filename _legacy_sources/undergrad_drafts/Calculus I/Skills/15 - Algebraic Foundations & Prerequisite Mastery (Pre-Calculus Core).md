# Skill 1: Algebraic Foundations & Prerequisite Mastery (Pre-Calculus Core)

Before applying any calculus rules to sketch a curve, you must understand its foundational, pre-calculus blueprint. Analyzing a function's domain, finding where it breaks, and identifying where it crosses the axes maps out the fundamental boundaries within which the calculus operates. 

---

## 1. Domain and Discontinuities
The **domain** of a function is the set of all possible input values ($x$) for which the function is real and defined. When working with analytical graphs, we actively look for where a function fails to exist, which manifests as **discontinuities**.

### Core Domain Restrictions:
1. **Rational Functions (Division by Zero):** If $f(x) = \frac{g(x)}{h(x)}$, the denominator cannot equal zero ($h(x) \neq 0$). Values that cause division by zero create either **vertical asymptotes** (infinite discontinuities) or **holes** (removable discontinuities).
2. **Even Roots (Negative Radicands):** If $f(x) = \sqrt[2n]{g(x)}$, the expression under the radical must be non-negative ($g(x) \ge 0$).
3. **Logarithmic Functions (Non-positive Arguments):** If $f(x) = \ln(g(x))$, the argument must be strictly positive ($g(x) > 0$).

---

## 2. Intercepts
Intercepts tell us exactly where the curve anchors itself to the coordinate axes.

* **$y$-intercept:** The point where the graph crosses the $y$-axis. Find this by evaluating the function at $x = 0$, yielding the coordinate $(0, f(0))$. A function can have at most *one* $y$-intercept.
* **$x$-intercepts (Roots/Zeros):** The points where the graph crosses or touches the $x$-axis. Find these by setting the entire function to zero and solving for $x$: $f(x) = 0$. A function can have zero, one, or multiple $x$-intercepts.

---

## 3. Symmetry
Symmetry simplifies curve sketching by allowing you to mirror half of your calculus calculations across an axis or the origin.

* **Even Functions ($y$-axis Symmetry):** A function is even if replacing $x$ with $-x$ results in the original function:
  $$f(-x) = f(x)$$
  *Graphical Meaning:* If the point $(x, y)$ is on the graph, then $(-x, y)$ is also on the graph.
* **Odd Functions (Origin Symmetry):** A function is odd if replacing $x$ with $-x$ results in the exact negation of the original function:
  $$f(-x) = -f(x)$$
  *Graphical Meaning:* If the point $(x, y)$ is on the graph, then $(-x, -y)$ is also on the graph. Rotating the graph $180^\circ$ around the origin leaves it unchanged.

---

## Sample Problems (Guided Notes Examples)

### Sample Problem 1: Analyzing $f(x) = x^3 - 3x$
**Problem:** Find the domain, intercepts, and symmetry for $f(x) = x^3 - 3x$.

**Solution:**
1. **Domain:** The function is a polynomial. It contains no fractions, roots, or logarithms. 
   $$\text{Domain: } (-\infty, \infty)$$
2. **Intercepts:**
   * **$y$-intercept:** Set $x = 0$:
     $$f(0) = (0)^3 - 3(0) = 0 \implies (0,0)$$
   * **$x$-intercepts:** Set $f(x) = 0$ and factor:
     $$x^3 - 3x = 0 \implies x(x^2 - 3) = 0$$
     $$x = 0 \quad \text{or} \quad x^2 = 3 \implies x = \pm\sqrt{3} \approx \pm 1.732$$
     $$\text{Intercepts: } (0,0), (\sqrt{3}, 0), (-\sqrt{3}, 0)$$
3. **Symmetry:** Test $f(-x)$:
     $$f(-x) = (-x)^3 - 3(-x) = -x^3 + 3x = -(x^3 - 3x) = -f(x)$$
   Because $f(-x) = -f(x)$, the function is **odd** (symmetric with respect to the origin).

### Sample Problem 2: Analyzing $f(x) = \frac{1}{4}x^4 - x^3$
**Problem:** Find the domain and intercepts for $f(x) = \frac{1}{4}x^4 - x^3$.

**Solution:**
1. **Domain:** This is a polynomial function. 
   $$\text{Domain: } (-\infty, \infty)$$
2. **Intercepts:**
   * **$y$-intercept:** Set $x = 0$:
     $$f(0) = \frac{1}{4}(0)^4 - (0)^3 = 0 \implies (0,0)$$
   * **$x$-intercepts:** Set $f(x) = 0$ and factor out the lowest power of $x$:
     $$\frac{1}{4}x^4 - x^3 = 0 \implies x^3\left(\frac{1}{4}x - 1\right) = 0$$
     $$x^3 = 0 \implies x = 0$$
     $$\frac{1}{4}x - 1 = 0 \implies \frac{1}{4}x = 1 \implies x = 4$$
     $$\text{Intercepts: } (0,0) \text{ and } (4,0)$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Engineering & Beam Deflection Boundaries]]
[[Structural Engineering & Beam Deflection Boundaries Solution]]

---

### Engineering Problem 2: [[Aerospace Engineering & Airfoil Camber Symmetry]]
[[Aerospace Engineering & Airfoil Camber Symmetry Solution]]
