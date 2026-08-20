# Skill 3: Linear Approximations — Study Guide & Engineering Applications

## 1. Core Lecture Notes & Concept Explanation

In single-variable calculus, a tangent line can be used to estimate the value of a function near the point of tangency. This is called a local linear approximation. In multivariable calculus, we extend this exact concept to three dimensions by using a **tangent plane** to approximate the value of a multi-input function $z = f(x, y)$ near a known base point $(x_0, y_0)$. 



When a surface is smooth and differentiable, zooming in close enough to any point makes the surface look completely flat. Therefore, if we want to evaluate a highly complex, non-linear function at a difficult decimal coordinate $(x, y)$, we can construct a flat tangent plane at a nearby "clean" integer coordinate $(x_0, y_0)$ and plug our decimal numbers into the plane instead. 

### The Essential Formulas

* **The Linearization Function $L(x,y)$:**
  The mathematical equation for the linear approximation (or linearization) of $f(x,y)$ at the base point $(x_0, y_0)$ is identical to the equation of the tangent plane:
  $$L(x,y) = f(x_{0}, y_{0}) + f_{x}(x_{0}, y_{0})(x - x_{0}) + f_{y}(x_{0}, y_{0})(y - y_{0})$$

* **Key Vocabulary Meanings:**
  * **Base Point $(x_0, y_0)$:** The "clean," easily calculated coordinate where the tangent plane perfectly touches the true function.
  * **Target Point $(x, y)$:** The real-world, often messy decimal coordinate where you want to estimate the function's value.
  * **$\Delta x = (x - x_0)$ and $\Delta y = (y - y_0)$:** The small changes or displacements away from your baseline position.

---

## 2. Guided Notes Sample Problem

### Problem Statement
Use a linear approximation at the base point $(2, 1)$ to estimate the value of $f(2.1, 0.9)$ for the function $f(x,y) = \sqrt{x^{2} + y}$.

### Step-by-Step Solution

1. **Evaluate the true function at the clean base point $(2, 1)$:**
   $$f(2, 1) = \sqrt{2^2 + 1} = \sqrt{4 + 1} = \sqrt{5}$$

2. **Find the general partial derivatives of the function:**
   Using the Chain Rule ($\frac{d}{dx}[\sqrt{u}] = \frac{1}{2\sqrt{u}} \cdot u'$):
   $$f_x(x,y) = \frac{1}{2\sqrt{x^2+y}} \cdot (2x) = \frac{x}{\sqrt{x^2+y}}$$
   $$f_y(x,y) = \frac{1}{2\sqrt{x^2+y}} \cdot (1) = \frac{1}{2\sqrt{x^2+y}}$$

3. **Evaluate the partial derivatives at the base point $(2, 1)$:**
   $$f_x(2, 1) = \frac{2}{\sqrt{2^2+1}} = \frac{2}{\sqrt{5}}$$
   $$f_y(2, 1) = \frac{1}{2\sqrt{2^2+1}} = \frac{1}{2\sqrt{5}}$$

4. **Construct the Linearization Function $L(x,y)$:**
   $$L(x,y) = \sqrt{5} + \frac{2}{\sqrt{5}}(x - 2) + \frac{1}{2\sqrt{5}}(y - 1)$$

5. **Substitute the messy target point $(2.1, 0.9)$ into $L(x,y)$:**
   Identify offsets: $(x - x_0) = 2.1 - 2 = 0.1$ and $(y - y_0) = 0.9 - 1 = -0.1$.
   $$L(2.1, 0.9) = \sqrt{5} + \frac{2}{\sqrt{5}}(0.1) + \frac{1}{2\sqrt{5}}(-0.1)$$
   $$L(2.1, 0.9) = \sqrt{5} + \frac{0.2}{\sqrt{5}} - \frac{0.05}{\sqrt{5}}$$
   $$L(2.1, 0.9) = \sqrt{5} + \frac{0.15}{\sqrt{5}}$$
   
   Using the approximation $\sqrt{5} \approx 2.23606$:
   $$L(2.1, 0.9) \approx 2.23606 + \frac{0.15}{2.23606} \approx 2.23606 + 0.06708 = 2.30314$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Robotics & Drone Guidance State Estimation]]
[[Robotics & Drone Guidance State Estimation Solution]]


---

### Engineering Problem 2: [[Electrical Engineering & Semiconductor Circuit Simulation]]
[[Electrical Engineering & Semiconductor Circuit Simulation Solution]]
