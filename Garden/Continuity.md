---
title: "Continuity"
type: garden
course: [[MATH-181]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Continuity

> [!tip] Core Definition
> A function $f(x)$ is continuous at a point $c$ if and only if three conditions are satisfied: (1) $f(c)$ is defined, (2) $\lim_{x \to c} f(x)$ exists, and (3) $\lim_{x \to c} f(x) = f(c)$. If any of these conditions fail, the function is discontinuous at $c$.

## Concept Explanation
Continuity ensures a function has no sudden jumps, breaks, or asymptotic escapes. We classify discontinuities into: 
* **Removable:** A single missing point (hole) that can be redefined.
* **Jump:** Left and right-hand limits exist but are unequal.
* **Infinite:** The function approaches $\pm\infty$ (vertical asymptote).

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/continuity-demo-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/continuity-demo-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Used to verify that physical systems don't experience impossible sudden state changes. Civil engineers verify continuity in road transitions, mechanical engineers model structural joints to prevent stress failures, and aerospace engineers analyze discontinuous shockwaves in supersonic aerodynamics.

### Example Problem
Find the value of $k$ that makes $f(x)$ continuous at $x = 2$:
$$f(x) = \begin{cases} kx^2 & x \le 2 \\ 2x + k & x > 2 \end{cases}$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> For $f(x)$ to be continuous at $x=2$, the left-hand limit, right-hand limit, and function value must all be equal.
> 
> **Step 1: Find left-hand limit and function value**
> $$f(2) = \lim_{x \to 2^-} f(x) = k(2)^2 = 4k$$
> 
> **Step 2: Find right-hand limit**
> $$\lim_{x \to 2^+} f(x) = 2(2) + k = 4 + k$$
> 
> **Step 3: Set them equal and solve for $k$**
> $$4k = 4 + k \implies 3k = 4 \implies k = \frac{4}{3}$$

---

## Connections & References
- **Parent Concepts:** [[Limits]]
- **Sub-concepts:** [[Differentiability]]
- **Course Links:** [[Courses/Calc-1/Session 05 - Special Limits and Continuity|Calc-1 Session 05]]
