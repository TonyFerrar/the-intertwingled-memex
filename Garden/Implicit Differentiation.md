---
title: "Implicit Differentiation"
type: garden
course: [[MATH-181]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Implicit Differentiation

> [!tip] Core Definition
> A method to find the derivative $\frac{dy}{dx}$ of an implicit equation (where $y$ is not isolated on one side) by differentiating both sides of the equation with respect to $x$, treating $y$ as a differentiable function of $x$, and applying the Chain Rule.

## Concept Explanation
Many equations representing curves (like circles, ellipses, or trajectories) cannot be easily solved for $y$ explicitly. Implicit differentiation bypasses this by differentiating the relation directly, yielding a derivative formula that depends on both $x$ and $y$.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/implicit-differentiation-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/implicit-differentiation-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Engineers use implicit differentiation to track the rate of orbital expansion, analyze contour lines of multidimensional surfaces, and design cam and gear profiles whose shapes are defined by implicit geometric constraints.

### Example Problem
Find the slope of the tangent line to the circle $x^2 + y^2 = 25$ at the point $(3, 4)$.

> [!workspace] Practice Space
> 

> [!check]- Solution
> We differentiate both sides with respect to $x$. Remember that $y$ is a function of $x$, so we apply the Chain Rule to $y^2$:
> $$\frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) = \frac{d}{dx}(25)$$
> $$2x + 2y \frac{dy}{dx} = 0$$
> 
> Now, isolate $\frac{dy}{dx}$:
> $$2y \frac{dy}{dx} = -2x \implies \frac{dy}{dx} = -\frac{x}{y}$$
> 
> Substitute the point $(3, 4)$ into the derivative:
> $$\left. \frac{dy}{dx} \right|_{(3,4)} = -\frac{3}{4}$$

---

## Connections & References
- **Parent Concepts:** [[Chain Rule]]
- **Sub-concepts:** [[Partial Derivatives]]
- **Course Links:** [[Courses/Calc-1/Session 09 - Implicit Differentiation and Logarithmic Differentiation|Calc-1 Session 09]]
