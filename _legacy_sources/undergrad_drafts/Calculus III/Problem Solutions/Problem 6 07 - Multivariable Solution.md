# Solution: Skill 3 Demo 2 — Level Surfaces and Cross-Sections

Below is the analytical breakdown and solution for the level surfaces and cross-sections of the three-variable function $g(x,y,z) = x^2 + y^2 + z^2$.

---

## 1. Find and Sketch the Level Surfaces $g(x,y,z) = c$ for $c = 1, 4, 9$

To determine the level surfaces, we hold the output of our three-variable function constant by equating it to the given value $c$:
$$x^2 + y^2 + z^2 = c$$

Substituting the given values for $c$:
* **For $c = 1$:** $x^2 + y^2 + z^2 = 1$ (A sphere centered at the origin with a radius of $1$)
* **For $c = 4$:** $x^2 + y^2 + z^2 = 4$ (A sphere centered at the origin with a radius of $2$)
* **For $c = 9$:** $x^2 + y^2 + z^2 = 9$ (A sphere centered at the origin with a radius of $3$)

### **Description**
The level surfaces form a nested set of concentric, hollow spheres centered at the origin $(0,0,0)$ in three-dimensional space ($xyz$-space). As the constant output value $c$ grows larger, the radius of the matching sphere boundary expands by $\sqrt{c}$.

---

## 2. Find the Cross-Section when $z = 0$

A cross-section (or horizontal trace) is found by setting one of the independent input variables to a constant value. 

Substituting $z = 0$ into the function's structural relationship:
$$g(x,y,0) = x^2 + y^2 + (0)^2 \implies g(x,y,0) = x^2 + y^2$$

### **Description**
Setting $z = 0$ collapses the calculation down to the standard 2D $xy$-plane. On this specific cutting plane, the function values match the squared distance from the origin, tracing out concentric circular contours for fixed outputs.

---

## 3. Use Slices to Describe the Shape of the Function

By analyzing the geometry of our structural slices, we can thoroughly describe how the function behaves:

* **Geometric Framework:** Because every single level surface configuration $g(x,y,z) = c$ corresponds to a perfect sphere, the output values are entirely determined by how far a point $(x,y,z)$ sits from the origin.
* **Behavior:** The function reaches its absolute minimum value of $0$ exactly at the origin $(0,0,0)$. Moving outward uniformly in any radial direction causes the function values to increase quadratically.

### **Conclusion**
The function describes a radially symmetric hyperspace field whose level structures are nested 3D **spheres**. The outputs remain identical along any spherical shell layer and grow larger at an accelerating rate the further you travel outward from the coordinate center.