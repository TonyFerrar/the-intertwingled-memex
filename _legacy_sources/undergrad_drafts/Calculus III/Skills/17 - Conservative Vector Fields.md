# Calc 3 Session 17: Skill 3 — Conservative Vector Fields

## Comprehensive Study Guide & Engineering Applications

---

## 1. Topic Notes & Core Concepts

### What is a Conservative Vector Field?
A vector field $\vec{F}$ is called **conservative** if it is the gradient of some scalar function $f$. In mathematical terms, there exists a differentiable function $f$ such that:
$$\vec{F} = \nabla f$$

The scalar function $f$ is referred to as the **potential function** for the vector field $\vec{F}$. 

### The 2D Cross-Partial Test
If a 2D vector field is given by $\vec{F}(x,y) = \langle P(x,y), Q(x,y) \rangle$, and the component functions $P$ and $Q$ have continuous first-order partial derivatives on an open, simply-connected domain, then $\vec{F}$ is conservative if and only if:
$$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$

### Path Independence and Conservation of Energy
One of the most powerful features of a conservative field is **path independence**. When calculating a line integral (such as work done) from point $A$ to point $B$ inside a conservative field, the path taken between those points does not change the result. Furthermore, a round-trip line integral (starting and ending at the same point) in a conservative field is always exactly zero:
$$\oint_C \vec{F} \cdot d\vec{r} = 0$$

---

## 2. Mathematical Sample Problems

### Sample Problem 3.1: Proving a Field is Conservative
Determine whether the vector field $\vec{F}(x,y) = \langle 3x^2y^2 + 4x, 2x^3y - 5 \rangle$ is conservative.

#### Solution:
1. Identify the component functions:
   * $P(x,y) = 3x^2y^2 + 4x$
   * $Q(x,y) = 2x^3y - 5$

2. Compute the cross-partial derivatives:
   * Differentiate $P$ with respect to $y$:
     $$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(3x^2y^2 + 4x) = 6x^2y + 0 = 6x^2y$$
   * Differentiate $Q$ with respect to $x$:
     $$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2x^3y - 5) = 6x^2y - 0 = 6x^2y$$

3. Evaluate the test:
   Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} = 6x^2y$, the field passes the cross-partial test.

**Conclusion:** **Yes**, $\vec{F}(x,y)$ is a conservative vector field.

---

## 3. Real-Life Engineering Application Problems

### Application 1: [[Electrical Engineering (Electrostatic Fields and Microchips)]]
[[Electrical Engineering (Electrostatic Fields and Microchips) Solution]]


---

### Application 2: [[Aerospace Engineering (Gravitational Potentials and Spacecraft Orbits)]]
[[Aerospace Engineering (Gravitational Potentials and Spacecraft Orbits) Solution]]

---

### Application 3: [[Mechanical Engineering (Elastic Spring Mechanisms and Robotics)]]
[[Mechanical Engineering (Elastic Spring Mechanisms and Robotics) Solution]]
