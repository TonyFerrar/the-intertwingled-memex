
---

## 1. Find and Sketch the Level Curves $f(x,y) = c$ for $c = 1, 4, 9$

To find the level curves, we set the output of the function equal to the constant value $c$:
$$x^2 + y^2 = c$$

Substituting the given values for $c$:
* **For $c = 1$:** $x^2 + y^2 = 1$ (A circle centered at the origin with a radius of $1$)
* **For $c = 4$:** $x^2 + y^2 = 4$ (A circle centered at the origin with a radius of $2$)
* **For $c = 9$:** $x^2 + y^2 = 9$ (A circle centered at the origin with a radius of $3$)

### **Description**
The level curves form a set of concentric circles centered at the origin $(0,0)$ in the $xy$-plane. As the constant value $c$ increases, the radius of the corresponding circle increases by $\sqrt{c}$.

---

## 2. Find the Vertical Traces when $x = 0$ and when $y = 0$

Vertical traces are found by holding one of the input variables constant, which creates a 2D slice of the 3D graph.

### **Trace when $x = 0$ (Slicing along the $yz$-plane)**
Substitute $x = 0$ into the surface equation $z = x^2 + y^2$:
$$z = (0)^2 + y^2 \implies z = y^2$$

* **Description:** This trace is a standard parabola opening upwards in the $yz$-plane, with its vertex sitting at the origin $(0,0,0)$.

### **Trace when $y = 0$ (Slicing along the $xz$-plane)**
Substitute $y = 0$ into the surface equation $z = x^2 + y^2$:
$$z = x^2 + (0)^2 \implies z = x^2$$

* **Description:** This trace is a standard parabola opening upwards in the $xz$-plane, with its vertex sitting at the origin $(0,0,0)$.

---

## 3. Use Slices to Describe the Shape of the Graph $z = f(x,y)$

By combining the structural insights gained from both the level curves and the vertical traces, we can fully describe the 3D surface:

* **Vertical Profile:** Looking at the surface from either the front or side views ($x=0$ or $y=0$ planes), the cross-sections are parabolas that open upwards.
* **Horizontal Profile:** Looking at the surface from a top-down view at any height $z = c > 0$, the cross-sections are perfect circles.

### **Conclusion**
The 3D surface $z = x^2 + y^2$ forms a circular **paraboloid**. It resembles a smooth, symmetrical bowl shape that has its lowest point (vertex) resting exactly at the origin $(0,0,0)$ and opens upward infinitely into three-dimensional space.