---
title: "Line Integrals"
type: garden
course: [[MATH-283]]
semester: Fall 2026
publish: true
updated: 2026-08-18
cssclasses: []
---

# Line Integrals

> [!tip] Core Definition
> An integral where the function is evaluated along a curve $C$. For a vector field $\mathbf{F}$ along a curve parameterized by $\mathbf{r}(t)$ on $t \in [a, b]$:
$$\int_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$$

## Concept Explanation
Line integrals evaluate quantities (like potential changes, fluid flow, or mass) along a specific spatial trajectory. If a vector field $\mathbf{F}$ is conservative (gradient of a scalar potential), the line integral is path-independent and depends only on endpoints.

### Visual / Geometric Intuition
[Interactive Desmos Graph](https://www.desmos.com/calculator/line-integrals-vector-field-placeholder)
<!-- <iframe src="https://www.desmos.com/calculator/line-integrals-vector-field-placeholder" width="100%" height="400px" style="border: 1px solid #ccc"></iframe> -->

## Engineering Applications
Widely used to calculate mechanical work done by variable force fields along trajectories, analyze circulation in fluid mechanics (lift equations in flight), and solve voltage changes along wire loops in electromagnetics.

### Example Problem
Evaluate the line integral $\int_{C} \mathbf{F} \cdot d\mathbf{r}$ for the field $\mathbf{F}(x, y) = \langle y, -x \rangle$ along the straight line path $\mathbf{r}(t) = \langle t, t \rangle$ for $t \in [0, 1]$.

> [!workspace] Practice Space
> 

> [!check]- Solution
> **Step 1: Compute $d\mathbf{r} = \mathbf{r}'(t) \, dt$**
> $$\mathbf{r}'(t) = \langle 1, 1 \rangle \implies d\mathbf{r} = \langle 1, 1 \rangle \, dt$$
> 
> **Step 2: Substitute $\mathbf{r}(t)$ into the vector field $\mathbf{F}$**
> $$\mathbf{F}(\mathbf{r}(t)) = \langle y(t), -x(t) \rangle = \langle t, -t \rangle$$
> 
> **Step 3: Evaluate the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$**
> $$\langle t, -t \rangle \cdot \langle 1, 1 \rangle = t(1) + (-t)(1) = 0$$
> 
> **Step 4: Integrate**
> $$\int_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{0}^{1} 0 \, dt = 0$$

---

## Connections & References
- **Parent Concepts:** [[Multiple Integrals]]
- **Sub-concepts:** [[Vector Fields]]
- **Course Links:** [[Courses/Calc-3/Session 21 - Line Integrals|Calc-3 Session 21]] | [[Courses/Calc-3/Session 22 - Green’s Theorem, Curl & Divergence|Calc-3 Session 22]]
