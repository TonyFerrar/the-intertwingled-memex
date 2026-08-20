# Skill 2: Differential Analysis & Local Behavior Interpretation (Calculus Core)

Once the foundational algebraic boundaries are established, calculus allows us to analyze the dynamic behavior of the curve. By tracking the first and second derivatives, we can determine exactly where a function rises, falls, peaks, valleys, and how it bends.

---

## 1. The First Derivative: Direction and Extrema
The first derivative, $f'(x)$, measures the instantaneous rate of change (or slope of the tangent line) at any point along the curve.

* **Increasing Behavior:** If $f'(x) > 0$ on an interval, the tangent slopes are positive, meaning the function $f(x)$ is **increasing** (moving upward from left to right).
* **Decreasing Behavior:** If $f'(x) < 0$ on an interval, the tangent slopes are negative, meaning the function $f(x)$ is **decreasing** (moving downward from left to right).
* **Critical Numbers:** These are the internal points within the domain where $f'(x) = 0$ or where $f'(x)$ is undefined. They represent the only x-coordinates where a curve can switch from rising to falling, or vice versa.

### The First Derivative Test for Local Extrema:
By observing the sign changes of $f'(x)$ across a critical number $x = c$:
* **Relative Maximum:** If $f'(x)$ changes from **positive to negative** at $c$, the curve reaches a local peak.
* **Relative Minimum:** If $f'(x)$ changes from **negative to positive** at $c$, the curve hits a local valley.

---

## 2. The Second Derivative: Concavity and Inflection
The second derivative, $f''(x)$, is the derivative of the derivative. It measures how fast the slope itself is changing, which dictates the **concavity** (the curvature) of the graph.

* **Concave Up ($\cup$):** If $f''(x) > 0$ on an interval, the slopes are increasing. The graph curves upward like a cup (it holds water). Tangent lines lie *below* the curve.
* **Concave Down ($\cap$):** If $f''(x) < 0$ on an interval, the slopes are decreasing. The graph curves downward like a cap (it sheds water). Tangent lines lie *above* the curve.
* **Points of Inflection:** A point $(c, f(c))$ on the graph where the function is continuous and the concavity changes sign (from concave up to concave down, or vice versa). This requires $f''(c) = 0$ or to be undefined at that point, accompanied by a definitive sign flip.



![[15 - Curve Sketching Image 5.png]]


---

## Sample Problems (Guided Notes Examples)

### Sample Problem 1: Differential Analysis of $f(x) = x^3 - 3x$
**Problem:** Find the critical points, intervals of increase/decrease, relative extrema, concavity, and inflection points for $f(x) = x^3 - 3x$.

**Solution:**
1. **First Derivative Analysis:**
   $$f'(x) = 3x^2 - 3$$
   Set $f'(x) = 0 \implies 3(x^2 - 1) = 0 \implies x = \pm 1$ (Critical Numbers).
   * **Sign Chart for $f'(x)$:**
     * $(-\infty, -1)$: $f'(-2) = 3(-2)^2 - 3 = 9 > 0 \implies$ **Increasing**
     * $(-1, 1)$: $f'(0) = 3(0)^2 - 3 = -3 < 0 \implies$ **Decreasing**
     * $(1, \infty)$: $f'(2) = 3(2)^2 - 3 = 9 > 0 \implies$ **Increasing**
   * **Extrema:** * At $x = -1$, $f'$ changes from $+$ to $-\implies$ **Relative Maximum** at $(-1, f(-1)) = (-1, 2)$.
     * At $x = 1$, $f'$ changes from $-$ to $+\implies$ **Relative Minimum** at $(1, f(1)) = (1, -2)$.

2. **Second Derivative Analysis:**
   $$f''(x) = 6x$$
   Set $f''(x) = 0 \implies 6x = 0 \implies x = 0$.
   * **Sign Chart for $f''(x)$:**
     * $(-\infty, 0)$: $f''(-1) = 6(-1) = -6 < 0 \implies$ **Concave Down**
     * $(0, \infty)$: $f''(1) = 6(1) = 6 > 0 \implies$ **Concave Up**
   * **Inflection Point:** Concavity changes at $x = 0$. The point is $(0, f(0)) = (0, 0)$.

### Sample Problem 2: Differential Analysis of $f(x) = \frac{1}{4}x^4 - x^3$
**Problem:** Find the critical points, intervals of increase/decrease, relative extrema, concavity, and inflection points for $f(x) = \frac{1}{4}x^4 - x^3$.

**Solution:**
1. **First Derivative Analysis:**
   $$f'(x) = x^3 - 3x^2$$
   Set $f'(x) = 0 \implies x^2(x - 3) = 0 \implies x = 0, \, x = 3$ (Critical Numbers).
   * **Sign Chart for $f'(x)$:**
     * $(-\infty, 0)$: $f'(-1) = (-1)^3 - 3(-1)^2 = -4 < 0 \implies$ **Decreasing**
     * $(0, 3)$: $f'(1) = (1)^3 - 3(1)^2 = -2 < 0 \implies$ **Decreasing**
     * $(3, \infty)$: $f'(4) = (4)^3 - 3(4)^2 = 16 > 0 \implies$ **Increasing**
   * **Extrema:** * At $x = 0$, $f'$ does not change sign $\implies$ No extremum.
     * At $x = 3$, $f'$ changes from $-$ to $+\implies$ **Relative Minimum** at $(3, f(3)) = (3, -6.75)$.

2. **Second Derivative Analysis:**
   $$f''(x) = 3x^2 - 6x$$
   Set $f''(x) = 0 \implies 3x(x - 2) = 0 \implies x = 0, \, x = 2$.
   * **Sign Chart for $f''(x)$:**
     * $(-\infty, 0)$: $f''(-1) = 3(-1)^2 - 6(-1) = 9 > 0 \implies$ **Concave Up**
     * $(0, 2)$: $f''(1) = 3(1)^2 - 6(1) = -3 < 0 \implies$ **Concave Down**
     * $(2, \infty)$: $f''(3) = 3(3)^2 - 6(3) = 9 > 0 \implies$ **Concave Up**
   * **Inflection Points:** Concavity changes at both $x=0$ and $x=2$. 
     * Points: $(0, 0)$ and $(2, -4)$.

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Engineering & Reinforced Beam Design]]
[[Structural Engineering & Reinforced Beam Design Solution]]

---

### Engineering Problem 2: [[Chemical Engineering & Reactor Runaway Safeguards]]
[[Chemical Engineering & Reactor Runaway Safeguards Solution]]
