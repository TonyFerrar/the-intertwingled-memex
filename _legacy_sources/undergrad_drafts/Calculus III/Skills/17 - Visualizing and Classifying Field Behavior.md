# Calc 3 Session 17: Skill 2 — Visualizing and Classifying Field Behavior

## Comprehensive Study Guide & Engineering Applications

---

## 1. Topic Notes & Core Concepts

### Visualizing Vector Fields
To visualize a vector field geometrically, we sample a grid of points $(x,y)$ in space and draw an arrow at each point. The tail of the arrow is anchored exactly at the coordinates $(x,y)$, its orientation matches the direction of the vector $\vec{F}(x,y)$, and its scaled length corresponds to the vector's magnitude $\|\vec{F}(x,y)\|$.

### Core Classifications of Field Geometry

1. **Radial Fields**
   * **Mathematical Form:** $\vec{F}(x,y) = k\langle x, y \rangle$ (where $k$ is a constant scaling factor).
   * **Geometric Behavior:** Every arrow points along a straight line either directly away from the origin ($k > 0$) or directly inward toward the origin ($k < 0$). 
   * **Symmetry:** The magnitude is constant along concentric circles centered at the origin, meaning the field has radial symmetry.

2. **Rotational Fields**
   * **Mathematical Form:** $\vec{G}(x,y) = k\langle -y, x \rangle$ or $\vec{G}(x,y) = k\langle y, -x \rangle$.
   * **Geometric Behavior:** Taking the dot product with the position vector reveals orthogonality ($\langle x,y \rangle \cdot \langle -y,x \rangle = 0$). As a result, the vectors are always perpendicular to the path from the origin, creating a continuous spinning flow (vortex) along concentric circles.

3. **Saddle (Hyperbolic) Fields**
   * **Mathematical Form:** $\vec{H}(x,y) = \langle kx, -ky \rangle$ or similar alternating signs.
   * **Geometric Behavior:** Fluid or particles flow toward the origin along one axis but are deflected away from the origin along the other axis, resembling a mountain pass or a structural saddle point.

---

## 2. Mathematical Sample Problems

### Sample Problem 2.1: Sketching and Classifying a Simple Field
Consider the vector field $\vec{A}(x,y) = \langle 0, x \rangle$. 
1. Evaluate the field vectors at points $(1,0)$, $(2,0)$, $(0,1)$, and $(-1,0)$.
2. Classify the field behavior.

#### Solution:
1. Substitute the coordinates into the component functions:
   * At $(1,0)$: $\vec{A}(1,0) = \langle 0, 1 \rangle$ (Points straight up)
   * At $(2,0)$: $\vec{A}(2,0) = \langle 0, 2 \rangle$ (Points straight up, twice as long)
   * At $(0,1)$: $\vec{A}(0,1) = \langle 0, 0 \rangle$ (Zero vector at the $y$-axis)
   * At $(-1,0)$: $\vec{A}(-1,0) = \langle 0, -1 \rangle$ (Points straight down)

2. **Classification:** This is a **Shear Field**. The vectors are always parallel to the $y$-axis, but their direction and magnitude depend entirely on how far right or left you are from the $y$-axis.

---

## 3. Real-Life Engineering Application Problems

### Application 1: [[Aerodynamics Engineering (Wingtip Vortex and Wake Turbulence)]]
[[Aerodynamics Engineering (Wingtip Vortex and Wake Turbulence) Solution]]

---

### Application 2: [[Hydraulic Engineering (Pump Intake and Cavitation Prevention)]]
[[Hydraulic Engineering (Pump Intake and Cavitation Prevention) Solution]]

---

### Application 3: [[Structural Wind Engineering (Airflow Separation Around a Skyscraper)]]
[[Structural Wind Engineering (Airflow Separation Around a Skyscraper) Solution]]
