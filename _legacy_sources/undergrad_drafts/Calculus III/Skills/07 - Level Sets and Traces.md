# Skill 3: Level Sets and Traces

## Comprehensive Lecture Notes

Visualizing a function of two variables $z = f(x, y)$ requires a three-dimensional coordinate system, which can often be difficult to interpret or sketch by hand. To overcome this, multivariable calculus utilizes lower-dimensional "geometric slices" to analyze and reconstruct 3D shapes. These techniques are divided into **Horizontal Slices (Level Sets)** and **Vertical Slices (Traces)**.

### 1. Level Sets (Level Curves and Level Surfaces)
A **level set** is a geometric collection of all incoming input coordinates that yield the exact same, fixed output constant $c$.

* **Level Curves (Functions of 2 Variables):** By setting the output of a two-variable function to a constant, $f(x, y) = c$, we create a two-dimensional curve in the $xy$-plane. If you plot multiple level curves for different values of $c$ on the same axes, you generate a **contour map**. Clustered lines indicate a steep slope, while widely spaced lines indicate a flat or gradual surface change.
* **Level Surfaces (Functions of 3 Variables):** By setting the output of a three-variable function to a constant, $f(x, y, z) = c$, we create a three-dimensional surface in $xyz$-space. Because graphing a 4D function $w = f(x,y,z)$ directly is impossible, level surfaces act as hollow 3D "shells" that show where the function holds a constant value.

### 2. Traces and Cross-Sections
While level sets hold the *output* constant, **traces** hold one of the *input* variables constant to see how the function changes with respect to the remaining variables.

* **Vertical Traces:** For a surface $z = f(x, y)$, setting an input variable to a fixed constant (such as $x = k$ or $y = k$) creates a vertical slice. The resulting 2D curve shows the side profile or front profile of the 3D surface.
* **Cross-Sections:** For 3D volumes or fields, freezing an input variable (e.g., $z = k$) cuts a flat slice through the space, revealing how the internal values behave across that specific plane.

---

## Guided Notes: Sample Problems

Below are analytical solutions to the core visualization exercises from your session demonstrations.

### Sample Problem 1: Level Curves & Traces of a Paraboloid
Let $f(x, y) = x^2 + y^2$.
1. Find the level curves $f(x,y) = c$ for $c = 1, 4, 9$.
2. Find the vertical traces when $x = 0$ and when $y = 0$.
3. Use these slices to describe the shape of the graph $z = f(x,y)$.

#### **Solution:**
1. **Level Curves:** Set $x^2 + y^2 = c$. 
   * For $c = 1$: $x^2 + y^2 = 1$ (Circle with radius $1$)
   * For $c = 4$: $x^2 + y^2 = 4$ (Circle with radius $2$)
   * For $c = 9$: $x^2 + y^2 = 9$ (Circle with radius $3$)
   * *Geometric Description:* Concentric circles centered at the origin that grow in radius as $c$ increases.
2. **Vertical Traces:**
   * **Trace $x = 0$ ($yz$-plane):** Substitute $x=0 \implies z = y^2$. This is an upward-opening parabola.
   * **Trace $y = 0$ ($xz$-plane):** Substitute $y=0 \implies z = x^2$. This is an upward-opening parabola.
3. **Synthesis:** Because the horizontal slices are circles and the vertical slices are parabolas, the 3D surface is a circular **paraboloid** (a smooth, symmetrical bowl shape resting at the origin).

---

### Sample Problem 2: Level Surfaces of a Spherical Field
Let $g(x, y, z) = x^2 + y^2 + z^2$.
1. Find the level surfaces $g(x,y,z) = c$ for $c = 1, 4, 9$.
2. Find the cross-section when $z = 0$.
3. Use these slices to describe the shape of the function.

#### **Solution:**
1. **Level Surfaces:** Set $x^2 + y^2 + z^2 = c$.
   * For $c = 1$: $x^2 + y^2 + z^2 = 1$ (Sphere with radius $1$)
   * For $c = 4$: $x^2 + y^2 + z^2 = 4$ (Sphere with radius $2$)
   * For $c = 9$: $x^2 + y^2 + z^2 = 9$ (Sphere with radius $3$)
   * *Geometric Description:* Concentric, nested 3D spherical shells expanding outward from the origin.
2. **Cross-Section ($z = 0$):** Substituting $z = 0$ yields $g(x,y,0) = x^2 + y^2$. This collapses the field onto the 2D $xy$-plane, where the values increase quadratically based on the distance from the center.
3. **Synthesis:** The function describes a radially symmetric field where outputs remain identical along any spherical shell layer and grow larger quadratically as you travel outward from the coordinate center.

---

## Real-Life Engineering Application Problems

### Application Problem 1: [[Civil Engineering — Topographical Contour Mapping & Road Grades]]
[[Civil Engineering — Topographical Contour Mapping & Road Grades Solution]]

---

### Application Problem 2: [[Aerospace & Mechanical Engineering — Structural Thermal Isosurfaces]]
[[Aerospace & Mechanical Engineering — Structural Thermal Isosurfaces Solution]]
