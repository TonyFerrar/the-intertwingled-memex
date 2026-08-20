---
title: "Improper Integrals"
type: garden
course: [[MATH-182]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Improper Integrals

> [!tip] Core Definition
> An integral where either the interval of integration is infinite (Type I), or the integrand has an infinite discontinuity (vertical asymptote) on or within the interval $[a, b]$ (Type II). Formally defined as a limit of proper definite integrals:
$$\int_{a}^{\infty} f(x) \, dx = \lim_{t \to \infty} \int_{a}^{t} f(x) \, dx$$

## Concept Explanation
If the limit defining an improper integral exists and is finite, the integral **converges**. If the limit fails to exist or approaches infinity, it **diverges**. This tests whether infinite boundaries enclose a finite area.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/improper-integral-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/improper-integral-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Improper integration is crucial in aerospace engineering to determine a rocket's planetary escape velocity (integrating gravity out to infinity), modeling radioactive decay, and calculating electrical power distributions in signal processing using Laplace transforms.

### Example Problem
Evaluate the improper integral, or show that it diverges: $$\int_{1}^{\infty} \frac{1}{x^2} \, dx$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> **Step 1: Rewrite the integral as a limit**
> $$\int_{1}^{\infty} \frac{1}{x^2} \, dx = \lim_{t \to \infty} \int_{1}^{t} x^{-2} \, dx$$
> 
> **Step 2: Integrate**
> $$= \lim_{t \to \infty} \Big[ -x^{-1} \Big]_1^t = \lim_{t \to \infty} \left( -\frac{1}{t} - (-1) \right)$$
> 
> **Step 3: Evaluate the limit**
> $$= \lim_{t \to \infty} \left( 1 - \frac{1}{t} \right) = 1 - 0 = 1$$
> 
> Since the limit is finite, the integral **converges** to $1$.

---

## Connections & References
- **Parent Concepts:** [[Integration by Parts]]
- **Sub-concepts:** [[Power Series]]
- **Course Links:** [[Courses/Calc-2/Session 18 - Improper Integrals|Calc-2 Session 18]]
