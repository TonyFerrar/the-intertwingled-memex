# Skill 3: Advanced Algebraic Management ($u$-Substitution & Boundary Shifting)

## 📘 Concept Explanations & Notes

When an integrand is a composite function, standard power or trigonometric rules cannot be applied directly. We rely on **$u$-substitution** to simplify the integral by reversing the chain rule of differentiation. 

While students often learn to substitute back into the "original variable world" at the end of an indefinite integral, doing so with **definite integrals** introduces unnecessary algebraic complexity and leaves room for arithmetic errors. The most mathematically elegant and efficient approach is to permanently shift the integration boundaries from the $x$-world to the $u$-world.

### The Substitution Rule for Definite Integrals
If $u = g(x)$ and $g'(x)$ is continuous on $[a, b]$, and $f$ is continuous on the range of $g$, then:
$$\int_{a}^{b} f(g(x))g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du$$

### 🛠️ The Boundary Tracking Box (Best Practice)
To prevent the common mistake of integrating a $u$-variable across $x$-boundaries, always construct a clear mapping grid before calculating the antiderivative:

| $x$-World Component | Transformation Rule | $u$-World Component |
| :--- | :--- | :--- |
| **Integrand Component** | Define $u = g(x)$ | $u$ |
| **Differential** | Find $du = g'(x)dx$ | Solve for $dx$ or match $du$ |
| **Upper Bound ($b$)** | Evaluate $u_{\text{upper}} = g(b)$ | **New Upper Limit** |
| **Lower Bound ($a$)** | Evaluate $u_{\text{lower}} = g(a)$ | **New Lower Limit** |

*Note: Once you transition to the $u$-world limits, you evaluate the definite integral completely within the $u$-world. There is absolutely no need to convert back to $x$.*

---

## ✏️ Sample Problems (From Guided Notes)

### Example 1: Basic Radical $u$-Substitution
**Problem:** Evaluate $\int_{1}^{\sqrt{2}} 2x\sqrt{x^2 - 1} \, dx$ using the substitution rule.

**Solution:**
1. **Set up the substitution:**
   Let $u = x^2 - 1 \implies du = 2x \, dx$
2. **Shift the boundaries:**
   * Lower limit: When $x = 1 \implies u = (1)^2 - 1 = 0$
   * Upper limit: When $x = \sqrt{2} \implies u = (\sqrt{2})^2 - 1 = 1$
3. **Rewrite the integral entirely in the $u$-world:**
   $$\int_{0}^{1} \sqrt{u} \, du = \int_{0}^{1} u^{1/2} \, du$$
4. **Integrate and evaluate:**
   $$\left[ \frac{2}{3}u^{3/2} \right]_{0}^{1} = \frac{2}{3}(1)^{3/2} - \frac{2}{3}(0)^{3/2} = \frac{2}{3} - 0 = \frac{2}{3}$$

---

### Example 2: Rational Function with a Shifting Denominator
**Problem:** Evaluate $\int_{-1}^{2} \frac{x}{x^2 - 5} \, dx$ using the substitution rule.

**Solution:**
1. **Set up the substitution:**
   Let $u = x^2 - 5 \implies du = 2x \, dx \implies \frac{1}{2}du = x \, dx$
2. **Shift the boundaries:**
   * Lower limit: When $x = -1 \implies u = (-1)^2 - 5 = -4$
   * Upper limit: When $x = 2 \implies u = (2)^2 - 5 = -1$
3. **Rewrite the integral:**
   $$\int_{-4}^{-1} \frac{1}{u} \cdot \left(\frac{1}{2} \, du\right) = \frac{1}{2} \int_{-4}^{-1} \frac{1}{u} \, du$$
4. **Integrate using natural log ($\ln|u|$):**
   $$\frac{1}{2} \Big[ \ln|u| \Big]_{-4}^{-1} = \frac{1}{2} \Big( \ln|-1| - \ln|-4| \Big)$$
   Since $\ln(1) = 0$:
   $$\frac{1}{2}(0 - \ln(4)) = -\frac{\ln(4)}{2}$$

---

## 🏗️ Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Grid AC Signal Processing (Root Mean Square)]]
[[Electrical Grid AC Signal Processing (Root Mean Square) Solution]]

---

### Engineering Problem 2: [[Chemical Process Engineering (Catalytic Concentration Decay)]]
[[Chemical Process Engineering (Catalytic Concentration Decay) Solution]]
