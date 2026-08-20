---
title: "Multiple Integrals"
type: garden
course: [[MATH-283]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Multiple Integrals

> [!tip] Core Definition
> Integrals of multivariable functions over 2D regions (double integrals) or 3D regions (triple integrals). A double integral is defined as a limit of double Riemann sums:
$$\iint_{D} f(x, y) \, dA = \lim_{\Delta A_i \to 0} \sum_{i} f(x_i^*, y_i^*) \Delta A_i$$

## Concept Explanation
Multiple integrals accumulate quantities over geometric domains. A double integral of a surface $z = f(x, y)$ over a region $R$ evaluates the volume under the surface. Integrating over polar, cylindrical, or spherical coordinates simplifies calculations for rotationally symmetric domains.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/double-integrals-polar-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/double-integrals-polar-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Engineers use multiple integrals to find spatial averages, compute the center of gravity and moments of inertia for irregular structural components, and calculate total mass of variable density materials.

### Example Problem
Evaluate the double integral: $$\iint_{R} x y \, dA \quad \text{where } R = [0, 2] \times [1, 3]$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> Using Fubini's Theorem, convert the double integral into iterated integrals:
> $$\iint_{R} x y \, dA = \int_{0}^{2} \int_{1}^{3} x y \, dy \, dx$$
> 
> **Step 1: Integrate the inner integral with respect to $y$**
> $$\int_{1}^{3} x y \, dy = x \Big[ \frac{1}{2} y^2 \Big]_1^3 = x \left( \frac{9}{2} - \frac{1}{2} \right) = 4x$$
> 
> **Step 2: Integrate the outer integral with respect to $x$**
> $$\int_{0}^{2} 4x \, dx = \Big[ 2x^2 \Big]_0^2 = 2(4) - 2(0) = 8$$

---

## Connections & References
- **Parent Concepts:** [[Definite Integrals]], [[Partial Derivatives]]
- **Sub-concepts:** [[Line Integrals]]
- **Course Links:** [[Courses/Calc-3/Session 14 - Double Integrals|Calc-3 Session 14]] | [[Courses/Calc-3/Session 16 - Triple Integrals|Calc-3 Session 16]]
