# Skill 1: Working with Vector-Valued Functions (Characteristics of Vectors)

## Explanatory Notes

A **vector-valued function** is a function where the independent variable is a scalar parameter (typically denoted as $t$) and the dependent output is a vector. In three-dimensional Cartesian space, a vector-valued function maps a real number input $t$ to a position vector $\vec{r}(t)$:

$$\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k} = \langle f(t), g(t), h(t) \rangle$$

Here, $f(t)$, $g(t)$, and $h(t)$ are real-valued component scalar functions representing the $x$, $y$, and $z$ coordinates, respectively. As the parameter $t$ varies continuously over an interval, the terminal point of the vector $\vec{r}(t)$ traces out a trajectory in space known as a **space curve**.

### Evaluating Vector-Valued Functions
To evaluate a vector-valued function at any specific parameter value $t = c$, substitute $c$ directly into each of the scalar component functions independently:
$$\vec{r}(c) = \langle f(c), g(c), h(c) \rangle$$

### Finding the Domain
The **domain** of a vector-valued function is the set of all valid real numbers $t$ for which the vector outputs are completely defined. Because a vector is only mathematically valid if *all* of its component scalar values exist as real numbers, the overall domain of $\vec{r}(t)$ is the **intersection (overlap)** of the domains of its individual component functions $f(t)$, $g(t)$, and $h(t)$.

When determining algebraic domains, evaluate three primary component-level restrictions:
1. **Even-indexed radicals:** The expression inside a square root must be non-negative ($\text{radicand} \ge 0$).
2. **Rational expressions:** The expression forming a denominator cannot equal zero ($\text{denominator} \neq 0$).
3. **Logarithmic expressions:** The argument inside a natural or common logarithm must be strictly positive ($\text{argument} > 0$).

---

## New Conceptual Sample Problems

### Sample Problem 1.1
**Problem:** Determine the domain of the following vector-valued function:
$$\vec{r}(t) = \left\langle \sqrt{2t + 8}, \, \frac{12}{t - 4}, \, \ln(10 - t) \right\rangle$$

**Solution:**
1. **$x$-component:** The radical requires that $2t + 8 \ge 0 \implies 2t \ge -8 \implies t \ge -4$.
2. **$y$-component:** The denominator requires that $t - 4 \neq 0 \implies t \neq 4$.
3. **$z$-component:** The logarithm requires that $10 - t > 0 \implies 10 > t \implies t < 10$.

**Intersection Analysis:**
We combine the conditions: $t \ge -4$, $t < 10$, and $t \neq 4$. 
This forms the continuous interval $[-4, 10)$ with a break at $t = 4$.
* **Final Domain:** $[-4, 4) \cup (4, 10)$

---

### Sample Problem 1.2
**Problem:** Determine the domain of the following vector-valued function:
$$\vec{r}(t) = \left\langle \frac{5}{\sqrt{t + 3}}, \, \sqrt{7 - t}, \, \frac{t + 1}{t^2 - 1} \right\rangle$$

**Solution:**
1. **$x$-component:** The radical is in the denominator, so the expression inside must be strictly positive: $t + 3 > 0 \implies t > -3$.
2. **$y$-component:** The square root requires that $7 - t \ge 0 \implies 7 \ge t \implies t \le 7$.
3. **$z$-component:** The denominator cannot be zero: $t^2 - 1 \neq 0 \implies (t - 1)(t + 1) \neq 0 \implies t \neq 1$ and $t \neq -1$.

**Intersection Analysis:**
Combining $t > -3$ and $t \le 7$ yields the bounded interval $(-3, 7]$. Within this range, we must drop the specific single values of $t = -1$ and $t = 1$.
* **Final Domain:** $(-3, -1) \cup (-1, 1) \cup (1, 7]$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Pathing (Drone Delivery Landing Corridor)]]
[[Aerospace Pathing (Drone Delivery Landing Corridor) Solution]]

---

### Engineering Problem 2: [[Robotics and Manufacturing (Automated Plasma Cutting Torch)]]
[[Robotics and Manufacturing (Automated Plasma Cutting Torch) Solution]]
