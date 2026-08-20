# Skill 2: Tangent Planes at a Point — Study Guide & Engineering Applications

## 1. Core Lecture Notes & Concept Explanation

In single-variable calculus, the derivative $f'(x_0)$ provides the slope of the tangent line to a curve at a given point. In multivariable calculus, a surface defined by a function $z = f(x, y)$ has infinitely many tangent lines passing through a single point $(x_0, y_0, z_0)$. Together, these tangent lines sweep out a single flat surface called the **tangent plane**.



The direction and tilt of this tangent plane are uniquely determined by the surface's **partial derivatives** with respect to $x$ and $y$, evaluated at the specific point. These partial derivatives represent the rates of change (slopes) in the standalone direction of the $x$-axis ($f_x$) and the $y$-axis ($f_y$).

### The Essential Formulas

* **Tangent Plane Equation in 3D:**
  Given a surface $z = f(x, y)$ and a baseline coordinate point $(x_0, y_0)$ where $z_0 = f(x_0, y_0)$, the equation of the tangent plane is:
  $$z = z_{0} + f_{x}(x_{0}, y_{0})[x - x_{0}] + f_{y}(x_{0}, y_{0})[y - y_{0}]$$

* **Relating to Point-Normal Form:**
  We can rearrange the tangent plane equation into the point-normal form ($a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$):
  $$f_{x}(x_{0}, y_{0})[x - x_{0}] + f_{y}(x_{0}, y_{0})[y - y_{0}] - 1[z - z_{0}] = 0$$
  This reveals that the **normal vector** $\vec{n}$ to a surface at any given point is:
  $$\vec{n} = \langle f_{x}(x_{0}, y_{0}),\ f_{y}(x_{0}, y_{0}),\ -1 \rangle$$

---

## 2. Guided Notes Sample Problem

### Problem Statement
Find the equation of the tangent plane to the surface $z = \sin(xy)$ at the coordinate $(x_{0}, y_{0}) = (0, \pi)$, where $z_{0} = 0$.

### Step-by-Step Solution
1. **Find the partial derivatives of the surface function:**
   Using the Chain Rule, differentiate $f(x,y) = \sin(xy)$:
   $$f_x(x,y) = \frac{\partial}{\partial x}[\sin(xy)] = y\cos(xy)$$
   $$f_y(x,y) = \frac{\partial}{\partial y}[\sin(xy)] = x\cos(xy)$$

2. **Evaluate the partial derivatives at the given point $(0, \pi)$:**
   $$f_x(0, \pi) = \pi \cdot \cos(0 \cdot \pi) = \pi \cdot \cos(0) = \pi(1) = \pi$$
   $$f_y(0, \pi) = 0 \cdot \cos(0 \cdot \pi) = 0 \cdot \cos(0) = 0(1) = 0$$

3. **Substitute the components into the Tangent Plane Equation:**
   $$z = z_0 + f_x(x_0, y_0)[x - x_0] + f_y(x_0, y_0)[y - y_0]$$
   $$z = 0 + \pi[x - 0] + 0[y - \pi]$$

4. **Simplify the final equation:**
   $$z = \pi x$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering & Aerodynamic Pressure Analysis]]
[[Aerospace Engineering & Aerodynamic Pressure Analysis Solution]]


---

### Engineering Problem 2: [[Mechanical Engineering & Stress Analysis on Curved Machine Parts]]
[[Mechanical Engineering & Stress Analysis on Curved Machine Parts Solution]]
