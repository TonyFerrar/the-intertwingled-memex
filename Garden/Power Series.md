---
title: "Power Series"
type: garden
course: [[MATH-182]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Power Series

> [!tip] Core Definition
> An infinite series of the form:
$$\sum_{n=0}^{\infty} c_n (x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots$$
where $x$ is a variable, $c_n$ are coefficients, and $a$ is a constant center. A special type is the Taylor Series representation of a smooth function $f(x)$ centered at $a$:
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$

## Concept Explanation
Power series approximate complex transcendental functions (like $e^x, \sin x, \ln x$) using infinite polynomial combinations. The **Radius of Convergence** ($R$) determines the range over which the series accurately matches the target function.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/taylor-series-sine-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/taylor-series-sine-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Engineers use power series to solve differential equations in mechanical vibration, construct digital signal filters, and approximate structural stress calculations when exact analytic formulas do not exist.

### Example Problem
Find the Taylor series (Maclaurin series) for $f(x) = e^x$ centered at $a = 0$.

> [!workspace] Practice Space
> 

> [!check]- Solution
> **Step 1: Compute derivatives of $f(x)$**
> $$f^{(n)}(x) = e^x \quad \text{for all } n$$
> 
> **Step 2: Evaluate derivatives at center $a = 0$**
> $$f^{(n)}(0) = e^0 = 1 \quad \text{for all } n$$
> 
> **Step 3: Construct the Taylor series**
> $$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!} x^n = \sum_{n=0}^{\infty} \frac{x^n}{n!}$$
> $$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$

---

## Connections & References
- **Parent Concepts:** [[Improper Integrals]]
- **Sub-concepts:** [[Vectors]]
- **Course Links:** [[Courses/Calc-2/Session 19 - Sequences and Infinite Series|Calc-2 Session 19]] | [[Courses/Calc-2/Session 22 - Representing Functions as Power Series|Calc-2 Session 22]]
