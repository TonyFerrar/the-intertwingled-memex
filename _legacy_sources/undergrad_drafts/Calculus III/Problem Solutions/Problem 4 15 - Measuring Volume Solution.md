To evaluate the triple integral over a general region $E$:
$$\iiint_{E}(5x-3y)\,dV$$
where $E$ is the tetrahedron in the first octant bounded by $x=0$, $y=0$, $z=0$, and $x+y+z=1$, using the integration order $dz\,dy\,dx$.

### Step 1: Set Up the Bounds
1. **Find the inner $z$ bounds:** The region is bounded below by the $xy$-plane ($z=0$) and above by the plane $x+y+z=1$. Solving for $z$:
   $$0 \le z \le 1 - x - y$$

2. **Find the middle $y$ bounds:** Projecting the tetrahedron onto the $xy$-plane by setting $z=0$ gives the line $x+y=1$. In the first octant ($y \ge 0$), solving for $y$ yields:
   $$0 \le y \le 1 - x$$

3. **Find the outer $x$ bounds:** The region extends along the $x$-axis from the origin up to the $x$-intercept:
   $$0 \le x \le 1$$

Putting it all together into the ordered iterated integral:
$$I = \int_{0}^{1} \int_{0}^{1-x} \int_{0}^{1-x-y} (5x - 3y) \, dz \, dy \, dx$$

---

### Step 2: Integrate with respect to $z$
Treating $x$ and $y$ as constants:
$$\int_{0}^{1-x-y} (5x - 3y) \, dz = \Big[ (5x - 3y)z \Big]_{0}^{1-x-y}$$
$$= (5x - 3y)(1 - x - y)$$
$$= 5x - 5x^2 - 5xy - 3y + 3xy + 3y^2$$
$$= 5x - 5x^2 - 2xy - 3y + 3y^2$$

---

### Step 3: Integrate with respect to $y$
Substitute this into the second layer of integration:
$$\int_{0}^{1-x} (5x - 5x^2 - 2xy - 3y + 3y^2) \, dy = \left[ (5x - 5x^2)y - xy^2 - \frac{3}{2}y^2 + y^3 \right]_{0}^{1-x}$$

Now plug in $y = 1-x$:
$$= (5x - 5x^2)(1-x) - x(1-x)^2 - \frac{3}{2}(1-x)^2 + (1-x)^3$$

We can factor out $(1-x)^2$ to make simplification easier, noting that $(5x - 5x^2)(1-x) = 5x(1-x)^2$:
$$= (1-x)^2 \left[ 5x - x - \frac{3}{2} + (1-x) \right]$$
$$= (1-x)^2 \left[ 3x - \frac{1}{2} \right]$$

Expand the expression:
$$= (1 - 2x + x^2)\left(3x - \frac{1}{2}\right)$$
$$= 3x - \frac{1}{2} - 6x^2 + x + 3x^3 - \frac{1}{2}x^2$$
$$= 3x^3 - \frac{13}{2}x^2 + 4x - \frac{1}{2}$$

---

### Step 4: Integrate with respect to $x$
Finally, evaluate the outermost single integral:
$$\int_{0}^{1} \left( 3x^3 - \frac{13}{2}x^2 + 4x - \frac{1}{2} \right) \, dx = \left[ \frac{3}{4}x^4 - \frac{13}{6}x^3 + 2x^2 - \frac{1}{2}x \right]_{0}^{1}$$

Substitute the limits $x=1$ and $x=0$:
$$= \left( \frac{3}{4} - \frac{13}{6} + 2 - \frac{1}{2} \right) - 0$$

Find a common denominator of 12:
$$= \frac{9}{12} - \frac{26}{12} + \frac{24}{12} - \frac{6}{12} = \frac{1}{12}$$

### Final Answer
$$I = \frac{1}{12}$$