To compute the total mass $M$ of the region $E$:
$$M = \iiint_{E} \rho(x,y,z) \, dV = \iiint_{E} (x + y + z) \, dV$$
where $E$ is the solid tetrahedron in the first octant bounded by $x, y, z \ge 0$ and $x + y + z \le 1$.

### Step 1: Set Up the Integration Bounds
Using the standard integration order $dz \, dy \, dx$, the bounds for this standard first-octant tetrahedron are:
* **Inner bounds ($z$):** From the $xy$-plane up to the bounding plane: $0 \le z \le 1 - x - y$
* **Middle bounds ($y$):** Setting $z=0$ gives the line $x+y=1$: $0 \le y \le 1 - x$
* **Outer bounds ($x$):** Extends from the origin to the intercept: $0 \le x \le 1$

Putting it all together:
$$M = \int_{0}^{1} \int_{0}^{1-x} \int_{0}^{1-x-y} (x + y + z) \, dz \, dy \, dx$$

---

### Step 2: Integrate with respect to $z$
Treating $x$ and $y$ as constants:
$$\int_{0}^{1-x-y} (x + y + z) \, dz = \left[ (x + y)z + \frac{1}{2}z^2 \right]_{0}^{1-x-y}$$

Substitute $z = 1-x-y$:
$$= (x + y)(1 - x - y) + \frac{1}{2}(1 - x - y)^2$$

To simplify, rewrite $(x+y)$ as $1 - (1-x-y)$:
$$= \Big(1 - (1-x-y)\Big)(1-x-y) + \frac{1}{2}(1 - x - y)^2$$
$$= (1-x-y) - (1-x-y)^2 + \frac{1}{2}(1-x-y)^2$$
$$= (1-x-y) - \frac{1}{2}(1-x-y)^2$$

---

### Step 3: Integrate with respect to $y$
Substitute this expression into the next layer of integration:
$$\int_{0}^{1-x} \left( (1-x-y) - \frac{1}{2}(1-x-y)^2 \right) \, dy$$

We can use u-substitution where $u = 1-x-y$, which means $dy = -du$. 
* When $y = 0$, $u = 1-x$.
* When $y = 1-x$, $u = 0$.

$$\int_{1-x}^{0} \left( u - \frac{1}{2}u^2 \right) (-du) = \int_{0}^{1-x} \left( u - \frac{1}{2}u^2 \right) \, du$$
$$= \left[ \frac{1}{2}u^2 - \frac{1}{6}u^3 \right]_{0}^{1-x}$$
$$= \frac{1}{2}(1-x)^2 - \frac{1}{6}(1-x)^3$$

---

### Step 4: Integrate with respect to $x$
Finally, evaluate the outermost single integral:
$$M = \int_{0}^{1} \left( \frac{1}{2}(1-x)^2 - \frac{1}{6}(1-x)^3 \right) \, dx$$

Using another u-substitution where $w = 1-x$, so $dx = -dw$.
* When $x = 0$, $w = 1$.
* When $x = 1$, $w = 0$.

$$M = \int_{1}^{0} \left( \frac{1}{2}w^2 - \frac{1}{6}w^3 \right) (-dw) = \int_{0}^{1} \left( \frac{1}{2}w^2 - \frac{1}{6}w^3 \right) \, dw$$
$$M = \left[ \frac{1}{6}w^3 - \frac{1}{24}w^4 \right]_{0}^{1}$$
$$M = \frac{1}{6} - \frac{1}{24} = \frac{4}{24} - \frac{1}{24} = \frac{3}{24} = \frac{1}{8}$$

### Final Answer
$$M = \frac{1}{8}$$