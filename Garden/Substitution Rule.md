---
title: "Substitution Rule"
type: garden
course: [[MATH-182]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Substitution Rule

> [!tip] Core Definition
> A technique for integration that reverses the Chain Rule. If $u = g(x)$ is a differentiable function whose range is an interval, and $f$ is continuous on that interval:
$$\int f(g(x)) g'(x) \, dx = \int f(u) \, du$$

## Concept Explanation
Substitution simplifies integration by introducing a new variable $u$ that maps a complex composite function into a basic integration form. For definite integrals, you must transform the integration boundaries ($a$ and $b$) to match the variable $u$ using the relation $u = g(x)$.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/u-substitution-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/u-substitution-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Used to analyze frequency responses in signal processing, calculate electrical charging curves in RC circuits, and scale kinetic properties in thermodynamic simulations.

### Example Problem
Evaluate the definite integral: $$\int_{0}^{\sqrt{\ln 2}} x e^{x^2} \, dx$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> Let $u = x^2$. Then $du = 2x \, dx \implies x \, dx = \frac{1}{2} du$.
> 
> **Step 1: Translate the integration boundaries**
> * When $x = 0 \implies u = 0^2 = 0$
> * When $x = \sqrt{\ln 2} \implies u = (\sqrt{\ln 2})^2 = \ln 2$
> 
> **Step 2: Substitute and integrate**
> $$\int_{0}^{\sqrt{\ln 2}} x e^{x^2} \, dx = \int_{0}^{\ln 2} e^u \left(\frac{1}{2} \, du\right)$$
> $$= \frac{1}{2} \Big[ e^u \Big]_0^{\ln 2}$$
> $$= \frac{1}{2} (e^{\ln 2} - e^0)$$
> $$= \frac{1}{2} (2 - 1) = \frac{1}{2}$$

---

## Connections & References
- **Parent Concepts:** [[Definite Integrals]]
- **Sub-concepts:** [[Integration by Parts]]
- **Course Links:** [[Courses/Calc-2/Session 04 - U Substitution|Calc-2 Session 04]]
