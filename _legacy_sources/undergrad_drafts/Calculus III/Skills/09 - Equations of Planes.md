# Skill 1: Equations of Planes — Study Guide & Engineering Applications

## 1. Core Lecture Notes & Concept Explanation

To uniquely define a straight line in two-dimensional space ($2\text{D}$), you need a point and a direction (slope). In three-dimensional space ($3\text{D}$), defining a flat surface—a **plane**—requires a point on the plane and a direction that is completely perpendicular to it. This perpendicular vector is called the **normal vector**, denoted as $\vec{n}$.

### The Essential Formulas

* **Normal Vector ($\vec{n}$):** $$\vec{n} = \langle a, b, c \rangle = a\hat{i} + b\hat{j} + c\hat{k}$$
    This vector dictates the tilt or orientation of the plane in $3\text{D}$ space.
    
* **Point-Normal Form:**
    If a plane passes through a known starting point $P(x_0, y_0, z_0)$ and has a normal vector $\vec{n} = \langle a, b, c \rangle$, any arbitrary point $(x, y, z)$ on the plane must satisfy:
    $$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$
    *Geometric logic:* The vector connecting our known point to an arbitrary point on the plane is $\langle x-x_0, y-y_0, z-z_0 \rangle$. Because the normal vector is perpendicular to the plane, its dot product with this in-plane vector must equal $0$.

* **General Form:**
    By distributing and simplifying the point-normal form, we get the standard linear equation for a plane:
    $$ax + by + cz = d$$
    Where $d = ax_0 + by_0 + cz_0$.

---

## 2. Guided Notes Sample Problem

### Problem Statement
Given a normal vector $\vec{n} = \langle 0, 2, 6 \rangle$ and a point $P(2, 5, 6)$ from which the normal vector originates, find the equation of the plane.

### Step-by-Step Solution
1. **Identify the given components:**
   * Normal vector components: $a = 0$, $b = 2$, $c = 6$
   * Base point coordinates: $x_0 = 2$, $y_0 = 5$, $z_0 = 6$

2. **Substitute into the Point-Normal Form:**
   $$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$
   $$0(x - 2) + 2(y - 5) + 6(z - 6) = 0$$

3. **Simplify to find the General Form:**
   $$0 + 2y - 10 + 6z - 36 = 0$$
   $$2y + 6z - 46 = 0$$
   $$2y + 6z = 46$$

4. **Reduce to simplest terms:**
   Divide the entire equation by 2:
   $$y + 3z = 23$$

---

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Robotics & Collision-Avoidance Boundaries]]
[[Robotics & Collision-Avoidance Boundaries Solution]]

---

### Engineering Problem 2: [[Civil Engineering & BIM Facade Alignment]]
[[Civil Engineering & BIM Facade Alignment Solution]]
