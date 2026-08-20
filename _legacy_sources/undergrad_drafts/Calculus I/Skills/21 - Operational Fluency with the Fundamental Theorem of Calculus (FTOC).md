# Skill 2: Operational Fluency with the Fundamental Theorem of Calculus (FTOC)

## 📘 Concept Explanations & Notes

The Fundamental Theorem of Calculus (FTOC) is the bridge connecting the two main branches of calculus: differential calculus (slopes and rates) and integral calculus (accumulation and areas). 

### The Core Theorem
If a function $f(x)$ is continuous on the interval $[a, b]$, and $F(x)$ is any antiderivative of $f(x)$ such that $F'(x) = f(x)$, then the definite integral is calculated as:
$$\int_{a}^{b} f(x) \, dx = \Big[ F(x) \Big]_{a}^{b} = F(b) - F(a)$$

### ⚠️ Common Arithmetic Traps & Best Practices
While finding the antiderivative $F(x)$ requires algorithmic rules, evaluating $F(b) - F(a)$ is where most algebraic mistakes occur. To ensure accuracy, follow these structural rules:

1. **The Double Negative Trap:** When subtracting a negative lower boundary evaluation, use explicit nested brackets: 
   $$F(b) - [F(a)]$$
2. **Fraction Management:** Keep terms grouped by their common denominators before performing final subtraction.
3. **No Constant of Integration ($C$):** For definite integrals, $+C$ is omitted because it naturally cancels out during subtraction: 
   $$(F(b) + C) - (F(a) + C) = F(b) - F(a)$$

---

## ✏️ Sample Problems (From Guided Notes)

### Example 1: Evaluation of a Constant
**Problem:** Compute the net area between the function $f(x) = 2$ and the $x$-axis on the interval $[1, 4]$ using the Fundamental Theorem of Calculus.

**Solution:**
1. Find the antiderivative of the constant function $f(x) = 2$:
   $$F(x) = 2x$$
2. Set up the FTOC bounds notation:
   $$\int_{1}^{4} 2 \, dx = \Big[ 2x \Big]_{1}^{4}$$
3. Evaluate at the upper limit ($x = 4$) and subtract the evaluation at the lower limit ($x = 1$):
   $$F(4) - F(1) = 2(4) - 2(1) = 8 - 2 = 6$$

---

### Example 2: Polynomial Integration with Bounds Separation
**Problem:** Compute the net area between the function $f(x) = 1 - x^2$ and the $x$-axis on the interval $[0, 2]$.

**Solution:**
1. Find the antiderivative of each term using the Power Rule:
   $$F(x) = x - \frac{1}{3}x^3$$
2. Set up the bounds tracking:
   $$\int_{0}^{2} (1 - x^2) \, dx = \left[ x - \frac{1}{3}x^3 \right]_{0}^{2}$$
3. Evaluate at the upper limit $x = 2$:
   $$F(2) = (2) - \frac{1}{3}(2)^3 = 2 - \frac{8}{3} = \frac{6}{3} - \frac{8}{3} = -\frac{2}{3}$$
4. Evaluate at the lower limit $x = 0$:
   $$F(0) = (0) - \frac{1}{3}(0)^3 = 0$$
5. Subtract $F(2) - F(0)$:
   $$\text{Net Area} = -\frac{2}{3} - 0 = -\frac{2}{3}$$

---

### Example 3: Additional Polynomial & Trigonometric Exercises
**Problems:** Compute the net area for:
1. $f(x) = 9 - x^2$ on $[0, 3]$
2. $f(x) = \cos(x)$ on $[0, \pi]$

**Solutions:**
* **Part 1:** Find antiderivative $\left[ 9x - \frac{1}{3}x^3 \right]_{0}^{3}$.
  * Upper limit: $9(3) - \frac{1}{3}(3)^3 = 27 - 9 = 18$
  * Lower limit: $9(0) - \frac{1}{3}(0)^3 = 0$
  * Value: $18 - 0 = 18$
* **Part 2:** Find antiderivative $\Big[ \sin(x) \Big]_{0}^{\pi}$.
  * Upper limit: $\sin(\pi) = 0$
  * Lower limit: $\sin(0) = 0$
  * Value: $0 - 0 = 0$

---

## 🏗️ Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Rocket Trajectory and Velocity Analysis]]
[[Aerospace Rocket Trajectory and Velocity Analysis Solution]]

---

### Engineering Problem 2: [[Mechanical Systems Engine Flywheel Torque]]
[[Mechanical Systems Engine Flywheel Torque Solution]]
