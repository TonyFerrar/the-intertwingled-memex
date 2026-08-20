---
title: "Limits"
type: garden
course: [[MATH-181]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Limits

> [!tip] Core Definition
> The value that a function approaches as the input approaches a target point. Formally, for a function $f(x)$ defined on an open interval around $c$ (except possibly at $c$ itself), we write $\lim_{x \to c} f(x) = L$ if for every $\epsilon > 0$ there exists a $\delta > 0$ such that if $0 < |x - c| < \delta$, then $|f(x) - L| < \epsilon$.

## Concept Explanation
Limits analyze the behavior of a function *near* a point rather than *at* that point. This is crucial for evaluating functions at coordinates where they are algebraically undefined (such as $\frac{0}{0}$ indeterminate forms). In higher dimensions (Calculus III), a limit exists only if the function approaches the same value $L$ along *every possible path* approaching $c$.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/limits-demo-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/limits-demo-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Engineers use limits to model transient responses in electrical circuits, determine critical stability limits in control systems, and resolve aerodynamic singularities in fluid simulation software near boundary layers.

### Example Problem
Evaluate the limit analytically: $$\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> Factor the numerator as a difference of squares:
> $$\frac{x^2 - 9}{x - 3} = \frac{(x - 3)(x + 3)}{x - 3}$$
> 
> Since a limit evaluates behavior as $x \to 3$ but $x \neq 3$, we can cancel the common factor $(x - 3)$:
> $$\lim_{x \to 3} \frac{(x - 3)(x + 3)}{x - 3} = \lim_{x \to 3} (x + 3)$$
> 
> Now, substitute $x = 3$ directly:
> $$3 + 3 = 6$$

---

## Connections & References
- **Parent Concepts:** [[Calculus Foundations]]
- **Sub-concepts:** [[Continuity]], [[Derivatives]]
- **Course Links:** [[Courses/Calc-1/Session 02 - Introduction to Limits|Calc-1 Session 02]] | [[Courses/Calc-1/Session 03 - Computing Limits with Algebraic Techniques|Calc-1 Session 03]]
