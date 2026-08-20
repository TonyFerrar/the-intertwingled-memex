---
title: "Chain Rule"
type: garden
course: [[MATH-181]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Chain Rule

> [!tip] Core Definition
> A formula to compute the derivative of the composition of two or more functions. If $h(x) = f(g(x))$, then:
$$h'(x) = f'(g(x)) \cdot g'(x)$$
In Leibniz notation, if $y = f(u)$ and $u = g(x)$:
$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

## Concept Explanation
The Chain Rule describes how rates of change propagate through nested systems. If variable $y$ changes $A$ times faster than $u$, and $u$ changes $B$ times faster than $x$, then $y$ changes $A \times B$ times faster than $x$.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/chain-rule-demo-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/chain-rule-demo-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Used to compute rates of change in multi-component engineering systems, such as finding torque transmission ratios in mechanical gearboxes, modeling pressure changes in fluid systems, or predicting thermochemical reactions.

### Example Problem
Differentiate $y = \sin(3x^2)$ with respect to $x$.

> [!workspace] Practice Space
> 

> [!check]- Solution
> Let $u = 3x^2$ (inner function) and $y = \sin(u)$ (outer function).
> 
> **Step 1: Find the derivative of the outer function with respect to $u$**
> $$\frac{dy}{du} = \cos(u)$$
> 
> **Step 2: Find the derivative of the inner function with respect to $x$**
> $$\frac{du}{dx} = 6x$$
> 
> **Step 3: Combine them using the Chain Rule**
> $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \cos(u) \cdot 6x$$
> 
> **Step 4: Substitute back $u = 3x^2$**
> $$\frac{dy}{dx} = 6x \cos(3x^2)$$

---

## Connections & References
- **Parent Concepts:** [[Derivatives]]
- **Sub-concepts:** [[Implicit Differentiation]]
- **Course Links:** [[Courses/Calc-1/Session 08 - Chain Rule and Derivatives of Exponential, Logarithmic, and Inverse Trig Functions|Calc-1 Session 08]]
