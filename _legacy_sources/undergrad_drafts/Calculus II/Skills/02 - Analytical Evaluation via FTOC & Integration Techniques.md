# Skill 3 Learning Page: Analytical Evaluation via FTOC & Integration Techniques

## Core Conceptual Notes

When visual graphs or simple geometric shapes are unavailable, you must transition from spatial estimation to pure symbolic computation. This analytical evaluation relies entirely on **The Fundamental Theorem of Calculus (FTOC)**, which bridges the gap between derivatives and integrals.

If a function $f(x)$ is continuous on the interval $[a, b]$, and you can find its antiderivative $F(x)$ (such that $F'(x) = f(x)$), then the definite integral evaluates to the difference between the antiderivative at the boundaries:

$$\int_{a}^{b} f(x) \, dx = \Big[ F(x) \Big]_{a}^{b} = F(b) - F(a)$$

### Core Integration Rules

* **The Power Rule:** $\int x^n \, dx = \frac{x^{n+1}}{n+1} \quad (n \neq -1)$
* **The Logarithmic Rule:** $\int \frac{1}{x} \, dx = \ln|x|$
* **The Exponential Rule:** $\int e^x \, dx = e^x$

### Advanced Technique: $u$-Substitution

When integrating composite functions (a function inside another function), you must use $u$-substitution to reverse the chain rule.

1. Define a new variable $u$ equal to the inner function.
2. Differentiate $u$ to find $du = u'(x) \, dx$.
3. **Crucial Step:** Calculate new integration bounds by plugging the original $x$-bounds ($a$ and $b$) into your $u$-equation. This removes the need to "back-substitute" your variables at the end.

---

## Pure Mathematical Sample Problems

### Sample Problem 1: Polynomial Evaluation via Power Rule

Evaluate the following definite integral:


$$\int_{1}^{3} (6x^2 - 2x + 5) \, dx$$

#### Step-by-Step Solution:

1. **Find the antiderivative term-by-term using the power rule:**
* For $6x^2$: $\frac{6x^3}{3} = 2x^3$
* For $-2x$: $-\frac{2x^2}{2} = -x^2$
* For $5$: $5x$

$$F(x) = 2x^3 - x^2 + 5x$$




2. **Evaluate at the upper limit ($x = 3$):**

$$F(3) = 2(3)^3 - (3)^2 + 5(3) = 2(27) - 9 + 15 = 54 - 9 + 15 = 60$$


3. **Evaluate at the lower limit ($x = 1$):**

$$F(1) = 2(1)^3 - (1)^2 + 5(1) = 2 - 1 + 5 = 6$$


4. **Subtract the lower limit from the upper limit ($F(3) - F(1)$):**

$$\text{Value} = 60 - 6 = 54$$



---

### Sample Problem 2: $u$-Substitution with Boundary Shifting

Evaluate the following definite integral:


$$\int_{0}^{2} 4x(x^2 + 1)^3 \, dx$$

#### Step-by-Step Solution:

1. **Identify $u$ and find $du$:**
* Let the inner function be $u = x^2 + 1$.
* Differentiating gives $du = 2x \, dx$, which means $2 \, du = 4x \, dx$.


2. **Transform the integration boundaries:**
* **Lower bound ($x = 0$):** $u = (0)^2 + 1 = 1$
* **Upper bound ($x = 2$):** $u = (2)^2 + 1 = 5$


3. **Rewrite the integral entirely in terms of $u$:**

$$\int_{1}^{5} u^3 \cdot (2 \, du) = 2 \int_{1}^{5} u^3 \, du$$


4. **Integrate and evaluate using the new limits:**

$$2 \left[ \frac{u^4}{4} \right]_{1}^{5} = \left[ \frac{u^4}{2} \right]_{1}^{5}$$


$$\text{Value} = \left( \frac{5^4}{2} \right) - \left( \frac{1^4}{2} \right) = \frac{625}{2} - \frac{1}{2} = \frac{624}{2} = 312$$



---

## Real-Life Engineering Application Problems

### Problem 1: [[Robotics & Kinematics (Automated Joint Tracking)]]
[[Robotics & Kinematics (Automated Joint Tracking) Solution]]

---

### Problem 2: [[Mechanical Engineering (Hyperloop Magnetic Braking Work)]]
[[Mechanical Engineering (Hyperloop Magnetic Braking Work) Solution]]
