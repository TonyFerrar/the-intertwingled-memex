# Solution: Problem 3.1 — Level Curves and Traces (Saddle Surface)

Below is the analytical breakdown and solution for the domain, level curves, vertical traces, and shape synthesis of the function $f(x,y) = x^2 - y^2$.

---

## 1. Domain: State the Domain in the $xy$-plane

This function is a simple polynomial function of two variables. There are no fractional denominators, square roots, or logarithms to restrict incoming inputs.
* **Description:** The domain includes every single point across the flat two-dimensional surface.
* **Set-Builder Notation:** $D = \{(x,y) \in \mathbb{R}^2\}$

---

## 2. Level Curves: Solve $f(x,y) = c$ for $c \in \{-4, -1, 0, 1, 4\}$

To find the level curves, we fix the output of our expression to a constant value $c$:
$$x^2 - y^2 = c$$

Let us analyze the curves for each specified value of $c$:

* **For $c = 4$:** $x^2 - y^2 = 4 \implies \frac{x^2}{4} - \frac{y^2}{4} = 1$
  * This is a hyperbola opening along the horizontal $x$-axis with vertices located at $(\pm 2, 0)$.
* **For $c = 1$:** $x^2 - y^2 = 1$
  * This is a hyperbola opening along the horizontal $x$-axis with vertices located at $(\pm 1, 0)$.
* **For $c = 0$:** $x^2 - y^2 = 0 \implies x^2 = y^2 \implies y = \pm x$
  * This simplifies down to a pair of intersecting lines passing through the origin with slopes of $1$ and $-1$.
* **For $c = -1$:** $x^2 - y^2 = -1 \implies y^2 - x^2 = 1$
  * This is a hyperbola opening along the vertical $y$-axis with vertices located at $(0, \pm 1)$.
* **For $c = -4$:** $x^2 - y^2 = -4 \implies \frac{y^2}{4} - \frac{x^2}{4} = 1$
  * This is a hyperbola opening along the vertical $y$-axis with vertices located at $(0, \pm 2)$.

### **Geometrical Interpretation**
The contours shift from horizontally opening hyperbolas when $c$ is positive, to intersecting diagonal boundary guidelines when $c$ is exactly zero, to vertically opening hyperbolas when $c$ is negative.

---

## 3. Vertical Traces: Sketch the Traces for $x = 0$ and $y = 0$

We evaluate the vertical profiles by freezing individual variables to slice the surface with vertical planes.

### **Trace when $x = 0$ (Slicing along the $yz$-plane)**
Substitute $x = 0$ into our graph equation $z = x^2 - y^2$:
$$z = (0)^2 - y^2 \implies z = -y^2$$

* **Description:** This trace forms a standard parabola that opens directly downward in the $yz$-plane, centered with its highest peak sitting at the origin $(0,0,0)$.

### **Trace when $y = 0$ (Slicing along the $xz$-plane)**
Substitute $y = 0$ into our graph equation $z = x^2 - y^2$:
$$z = x^2 - (0)^2 \implies z = x^2$$

* **Description:** This trace forms a standard parabola that opens directly upward in the $xz$-plane, centered with its lowest trough sitting at the origin $(0,0,0)$.

---

## 4. Synthesis: Describe the 3D Surface $z = f(x,y)$ in Words

By blending our horizontal contours and vertical views together, we gain a clear mental image of the graph:

* **Bending Directions:** If you travel parallel to the $x$-axis, the surface paths curve upward like a valley. If you travel parallel to the $y$-axis, the surface paths curve downward like a hill crest.
* **The Balancing Point:** Right at the origin $(0,0,0)$, these opposing curves meet perfectly. It behaves as a local minimum from one angle and a local maximum from another.

### **Conclusion**
The 3D surface $z = x^2 - y^2$ forms a **hyperbolic paraboloid**. This mathematical landscape is universally recognized as a classic **saddle shape** (or a Pringles potato chip), where the center point balances out as a classic mountain pass or saddle point.