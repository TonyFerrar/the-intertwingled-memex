---
title: "Definite Integrals"
type: garden
course: [[MATH-181]] | [[MATH-182]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Definite Integrals

> [!tip] Core Definition
> The limit of Riemann sums representing the net signed area bounded by a function $f(x)$ on an interval $[a, b]$. If the limit exists:
$$\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x$$
Calculated via the **Fundamental Theorem of Calculus (FTOC)**:
$$\int_{a}^{b} f(x) \, dx = F(b) - F(a) \quad \text{where } F'(x) = f(x)$$

## Concept Explanation
Definite integration accumulates continuous variable quantities over an interval. If a graph is positive, the definite integral matches the area under the curve. Negative regions subtract from the total sum, yielding a net signed area.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/riemann-sum-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/riemann-sum-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Engineers use integrals to sum variable rates over time. Mechanical engineers integrate variable force to compute work ($W = \int F \, dx$), electrical engineers integrate power to compute total energy, and civil engineers integrate loads to design bridge supports.

### Example Problem
Evaluate the definite integral: $$\int_{1}^{3} (3x^2 - 1) \, dx$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> **Step 1: Find the antiderivative $F(x)$**
> $$F(x) = \int (3x^2 - 1) \, dx = x^3 - x$$
> 
> **Step 2: Apply the Fundamental Theorem of Calculus**
> $$\int_{1}^{3} (3x^2 - 1) \, dx = F(3) - F(1)$$
> $$F(3) = 3^3 - 3 = 27 - 3 = 24$$
> $$F(1) = 1^3 - 1 = 1 - 1 = 0$$
> 
> **Step 3: Subtract**
> $$\int_{1}^{3} (3x^2 - 1) \, dx = 24 - 0 = 24$$

---

## Connections & References
- **Parent Concepts:** [[Limits]]
- **Sub-concepts:** [[Substitution Rule]], [[Integration by Parts]], [[Multiple Integrals]]
- **Course Links:** [[Courses/Calc-1/Session 23 - Definite Integrals and the Fundamental Theorem of Calculus|Calc-1 Session 23]] | [[Courses/Calc-2/Session 02 - Area Under the Curve|Calc-2 Session 02]]
