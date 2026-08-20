---
title: "Partial Derivatives"
type: garden
course: [[MATH-283]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Partial Derivatives

> [!tip] Core Definition
> The derivative of a multivariable function $f(x, y, \dots)$ with respect to one variable while holding all other variables constant. For $f(x, y)$, the partial derivative with respect to $x$ is:
$$\frac{\partial f}{\partial x} = \lim_{h \to 0} \frac{f(x+h, y) - f(x, y)}{h}$$

## Concept Explanation
In multivariable space, a surface has different slopes depending on the direction of travel. Partial derivatives measure the rate of change directly along the principal coordinate axes. Combining these partial derivatives yields the **Gradient** vector ($\nabla f$), pointing in the direction of steepest ascent.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/multivariable-slopes-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/multivariable-slopes-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Engineers use partial derivatives to model heat diffusion gradients across metal plates, solve electrostatics potential fields, and optimize multi-variable parameters like fluid pressure distribution.

### Example Problem
Compute the partial derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for:
$$f(x, y) = x^2 y^3 + 5x$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> **Step 1: Compute $\frac{\partial f}{\partial x}$ (treat $y$ as a constant)**
> $$\frac{\partial f}{\partial x} = \frac{d}{dx}(x^2) \cdot y^3 + \frac{d}{dx}(5x)$$
> $$= 2xy^3 + 5$$
> 
> **Step 2: Compute $\frac{\partial f}{\partial y}$ (treat $x$ as a constant)**
> $$\frac{\partial f}{\partial y} = x^2 \cdot \frac{d}{dy}(y^3) + \frac{d}{dy}(5x)$$
> $$= 3x^2 y^2 + 0 = 3x^2 y^2$$

---

## Connections & References
- **Parent Concepts:** [[Derivatives]], [[Vector Valued Functions]]
- **Sub-concepts:** [[Multiple Integrals]]
- **Course Links:** [[Courses/Calc-3/Session 09 - Partial Derivatives|Calc-3 Session 09]] | [[Courses/Calc-3/Session 12 - Gradient and Directional Derivatives|Calc-3 Session 12]]
