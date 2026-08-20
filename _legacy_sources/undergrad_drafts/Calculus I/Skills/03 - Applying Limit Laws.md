#  Calculus I Mastery: Skill 1 — Applying Limit Laws

**Core Concept:** If the individual limits $\lim_{x\to a} f(x)$ and $\lim_{x\to a} g(x)$ both exist, complex mathematical operations can be cleanly evaluated by distributing the limit operator across the individual functions using basic algebraic properties.

---

## 1. Fundamental Limit Laws

Assuming that $\lim_{x\rightarrow a}f(x) = L$ and $\lim_{x\rightarrow a}g(x) = M$ (where $L$ and $M$ are real numbers):

* **Sum Law:** The limit of a sum is the sum of the limits.
  $$\lim_{x\rightarrow a}(f(x)+g(x)) = \lim_{x\rightarrow a}f(x) + \lim_{x\rightarrow a}g(x) = L + M$$
* **Difference Law:** The limit of a difference is the difference of the limits.
  $$\lim_{x\rightarrow a}(f(x)-g(x)) = \lim_{x\rightarrow a}f(x) - \lim_{x\rightarrow a}g(x) = L - M$$
* **Constant Multiple Law:** The limit of a constant times a function is the constant times the limit.
  $$\lim_{x\rightarrow a}[c \cdot f(x)] = c \cdot \lim_{x\rightarrow a}f(x) = c \cdot L \quad \text{(where } c \text{ is a constant)}$$
* **Product Law:** The limit of a product is the product of the limits.
  $$\lim_{x\rightarrow a}(f(x)\cdot g(x)) = \left(\lim_{x\rightarrow a}f(x)\right) \cdot \left(\lim_{x\rightarrow a}g(x)\right) = L \cdot M$$
* **Quotient Law:** The limit of a quotient is the quotient of the limits, provided the denominator's limit is non-zero.
  $$\lim_{x\rightarrow a}\frac{f(x)}{g(x)} = \frac{\lim_{x\rightarrow a}f(x)}{\lim_{x\rightarrow a}g(x)} = \frac{L}{M} \quad \text{(provided } M \neq 0\text{)}$$
* **Power Law:** The limit of a function raised to a fractional power is the limit raised to that power.
  $$\lim_{x\rightarrow a}(f(x))^{\frac{n}{m}} = \left(\lim_{x\rightarrow a}f(x)\right)^{\frac{n}{m}} = L^{\frac{n}{m}} \quad \text{(where } n, m \text{ are integers and } m \neq 0\text{)}$$

### 💡 Important Instructor Note:
Limit laws *only* apply if the individual component limits exist as finite numbers. If an individual limit yields $\infty$ or an indeterminate form like $\frac{0}{0}$, you cannot separate them using these laws until the expression is simplified algebraically.

---

## 2. Standard Activity Problems

**Given Baseline Conditions:**
* $\lim_{x\to1}f(x) = 2$
* $\lim_{x\to1}g(x) = -3$
* $\lim_{x\to1}h(x) = 5$

### Problem 1(a) — Sum Law
Evaluate $\lim_{x\to1}(f(x)+g(x))$:
$$\lim_{x\to1}f(x) + \lim_{x\to1}g(x) = 2 + (-3) = -1$$
**Answer:** $-1$

### Problem 1(b) — Difference Law
Evaluate $\lim_{x\to1}(g(x)-h(x))$:
$$\lim_{x\to1}g(x) - \lim_{x\to1}h(x) = -3 - 5 = -8$$
**Answer:** $-8$

### Problem 1(c) — Product Law
Evaluate $\lim_{x\to1}(f(x)\cdot h(x))$:
$$\left(\lim_{x\to1}f(x)\right) \cdot \left(\lim_{x\to1}h(x)\right) = 2 \cdot 5 = 10$$
**Answer:** $10$

### Problem 1(d) — Power & Constant Multiple Laws
Evaluate $\lim_{x\to1}(3f(x))^{2}$:
$$\left[ 3 \cdot \lim_{x\to1}f(x) \right]^2 = [3 \cdot 2]^2 = 6^2 = 36$$
**Answer:** $36$

### Problem 1(e) — Quotient Law
Evaluate $\lim_{x\to1}\left(\frac{g(x)}{h(x)}\right)$ (Note: $\lim_{x\to1}h(x) = 5 \neq 0$):
$$\frac{\lim_{x\to1}g(x)}{\lim_{x\to1}h(x)} = \frac{-3}{5} = -\frac{3}{5}$$
**Answer:** $-\frac{3}{5}$

---

## 3. Real-Life & Engineering Application Problems

Real-world engineering quantities are often combinations of separate variables. We can use Limit Laws to predict how systems behave as they approach stable boundaries.

### Application Example 1: [[Rocket Payload Velocity (Product Law)]]
[[Rocket Payload Velocity (Product Law) Solution]]


---

### Application Example 2: [[Electrical Circuit Mesh Network (Sum & Difference Laws)]]
[[Electrical Circuit Mesh Network (Sum & Difference Laws) Solution]]


---

### Application Example 3: [[Chemical Fluid Concentration (Quotient Law)]]
[[Chemical Fluid Concentration (Quotient Law) Solution]]

