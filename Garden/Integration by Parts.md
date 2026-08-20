---
title: "Integration by Parts"
type: garden
course: [[MATH-182]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Integration by Parts

> [!tip] Core Definition
> A rule of integration that reverses the Product Rule of differentiation. For differentiable functions $u(x)$ and $v(x)$:
$$\int u \, dv = uv - \int v \, du$$

## Concept Explanation
Integration by parts converts a difficult product integral into a simpler one. To select $u$ effectively, use the **LIATE** mnemonic priority (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential). You differentiate $u$ to get $du$, and integrate $dv$ to get $v$.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/integration-by-parts-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/integration-by-parts-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Extensively applied in signal analysis to solve Fourier series coefficients, evaluating center of mass integrals, and modeling mechanical dampening parameters in vibration analysis.

### Example Problem
Evaluate: $$\int x \ln x \, dx$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> Using LIATE, we select $u = \ln x$ (logarithmic) and $dv = x \, dx$ (algebraic).
> 
> **Step 1: Compute derivatives and integrals**
> * $u = \ln x \implies du = \frac{1}{x} \, dx$
> * $dv = x \, dx \implies v = \frac{1}{2} x^2$
> 
> **Step 2: Apply the formula**
> $$\int x \ln x \, dx = (\ln x)\left(\frac{1}{2} x^2\right) - \int \left(\frac{1}{2} x^2\right)\left(\frac{1}{2x} \, dx\right)$$
> $$= \frac{1}{2} x^2 \ln x - \frac{1}{2} \int x \, dx$$
> $$= \frac{1}{2} x^2 \ln x - \frac{1}{2}\left(\frac{1}{2} x^2\right) + C$$
> $$= \frac{1}{2} x^2 \ln x - \frac{1}{4} x^2 + C$$

---

## Connections & References
- **Parent Concepts:** [[Substitution Rule]]
- **Sub-concepts:** [[Improper Integrals]]
- **Course Links:** [[Courses/Calc-2/Session 14 - Integration by Parts|Calc-2 Session 14]]
