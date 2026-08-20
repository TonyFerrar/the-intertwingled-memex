---
title: "Dot and Cross Products"
type: garden
course: [[MATH-181]] | [[MATH-283]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Dot and Cross Products

> [!tip] Core Definition
> Two ways to multiply vectors:
1. **Dot Product:** Yields a scalar mapping projection:
$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = |\mathbf{a}| |\mathbf{b}| \cos\theta$$
2. **Cross Product:** Yields an orthogonal vector:
$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \mathbf{n} |\mathbf{a}| |\mathbf{b}| \sin\theta$$

## Concept Explanation
The dot product measures alignment; it evaluates to zero for orthogonal vectors. The cross product measures rotation/area; it evaluates to zero for parallel vectors and produces a vector perpendicular to the plane formed by the input vectors.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/dot-cross-products-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/dot-cross-products-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Dot products calculate mechanical work ($W = \mathbf{F} \cdot \mathbf{d}$) and electrical power flow. Cross products compute torque ($\mathbf{\tau} = \mathbf{r} \times \mathbf{F}$) and the electromagnetic Lorentz force.

### Example Problem
Compute the cross product of $\mathbf{a} = \langle 1, 0, 2 \rangle$ and $\mathbf{b} = \langle 0, 3, -1 \rangle$.

> [!workspace] Practice Space
> 

> [!check]- Solution
> Set up the determinant:
> $$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 0 & 2 \\ 0 & 3 & -1 \end{vmatrix}$$
> 
> Expand the components:
> $$\mathbf{i} (0(-1) - 2(3)) - \mathbf{j} (1(-1) - 2(0)) + \mathbf{k} (1(3) - 0(0))$$
> $$= \mathbf{i} (-6) - \mathbf{j} (-1) + \mathbf{k} (3)$$
> $$= \langle -6, 1, 3 \rangle$$

---

## Connections & References
- **Parent Concepts:** [[Vectors]]
- **Sub-concepts:** [[Vector Valued Functions]]
- **Course Links:** [[Courses/Calc-1/Session 19 - Vector Operations and Engineering Applications|Calc-1 Session 19]] | [[Courses/Calc-3/Session 03 - Dot and Cross Product|Calc-3 Session 03]]
