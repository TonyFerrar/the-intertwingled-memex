---
title: "Vector Valued Functions"
type: garden
course: [[MATH-283]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Vector Valued Functions

> [!tip] Core Definition
> A function that maps a real scalar (often parameter time $t$) to a vector space, defining a parametric curve in space:
$$\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle$$

## Concept Explanation
Vector valued functions track motion paths. The derivative $\mathbf{r}'(t)$ represents the instantaneous velocity vector (tangent to the curve), and the second derivative $\mathbf{r}''(t)$ represents the acceleration vector.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/space-curve-helix-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/space-curve-helix-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Aerospace engineers use space curves to design missile or aircraft trajectories, structural engineers trace spatial geometries like suspension bridge wires, and animation systems interpolate character movements.

### Example Problem
Find the velocity vector $\mathbf{v}(t)$ and acceleration vector $\mathbf{a}(t)$ for the helical path:
$$\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$$

> [!workspace] Practice Space
> 

> [!check]- Solution
> **Step 1: Differentiate to find velocity $\mathbf{v}(t) = \mathbf{r}'(t)$**
> $$\mathbf{v}(t) = \frac{d}{dt}\langle \cos t, \sin t, t \rangle = \langle -\sin t, \cos t, 1 \rangle$$
> 
> **Step 2: Differentiate velocity to find acceleration $\mathbf{a}(t) = \mathbf{v}'(t)$**
> $$\mathbf{a}(t) = \frac{d}{dt}\langle -\sin t, \cos t, 1 \rangle = \langle -\cos t, -\sin t, 0 \rangle$$

---

## Connections & References
- **Parent Concepts:** [[Vectors]]
- **Sub-concepts:** [[Partial Derivatives]]
- **Course Links:** [[Courses/Calc-3/Session 05 - Vector-Valued Functions and Derivatives|Calc-3 Session 05]] | [[Courses/Calc-3/Session 06 - Arc Length and Curvature|Calc-3 Session 06]]
