---
title: "Vectors"
type: garden
course: [[MATH-181]] | [[MATH-283]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Vectors

> [!tip] Core Definition
> A mathematical object characterized by both a magnitude (length) and a direction. Algebraically represented by components relative to standard axes, written as $\mathbf{v} = \langle v_1, v_2, v_3 \rangle$ in 3D cartesian coordinates.

## Concept Explanation
Unlike scalars (which only represent quantity), vectors establish direction in coordinate space. Addition of vectors coordinates spatial combining (head-to-tail), and multiplication by scalars scales magnitude without changing orientation (unless the scalar is negative).

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/3d-vector-basis-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/3d-vector-basis-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Everywhere in force analysis. Mechanical engineers use vectors to resolve load weights on bridges, electrical engineers use vectors to define electromagnetic fields, and dynamics systems track motion trajectories using velocity and acceleration vectors.

### Example Problem
Find the magnitude and unit vector in the direction of $\mathbf{v} = \langle 3, -4, 0 \rangle$.

> [!workspace] Practice Space
> 

> [!check]- Solution
> **Step 1: Find the magnitude $|\mathbf{v}|$**
> $$|\mathbf{v}| = \sqrt{3^2 + (-4)^2 + 0^2} = \sqrt{9 + 16} = 5$$
> 
> **Step 2: Find the unit vector $\mathbf{u}$**
> $$\mathbf{u} = \frac{\mathbf{v}}{|\mathbf{v}|} = \frac{1}{5}\langle 3, -4, 0 \rangle = \left\langle \frac{3}{5}, -\frac{4}{5}, 0 \right\rangle$$

---

## Connections & References
- **Parent Concepts:** [[Calculus Foundations]]
- **Sub-concepts:** [[Dot and Cross Products]], [[Vector Valued Functions]]
- **Course Links:** [[Courses/Calc-1/Session 18 - Vectors in 2D and 3D|Calc-1 Session 18]] | [[Courses/Calc-3/Session 02 - Vectors in 2D and 3D|Calc-3 Session 02]]
