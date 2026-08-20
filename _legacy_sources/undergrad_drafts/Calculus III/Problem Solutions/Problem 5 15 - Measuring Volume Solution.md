To find the volume of the first-octant tetrahedron bounded by the plane equation:
$$\frac{x}{2} + \frac{y}{1} + \frac{z}{3} = 1$$
with $x, y, z \ge 0$, we find the volume by evaluating the triple integral:
$$V = \iiint_{E} 1 \, dV$$

### Step 1: Set Up the Integration Bounds
We can use the standard integration order $dz \, dy \, dx$.

1. **Find the inner $z$ bounds:** Solve the plane equation for $z$:
   $$\frac{z}{3} = 1 - \frac{x}{2} - y \implies z = 3\left(1 - \frac{x}{2} - y\right)$$
   Since the region is in the first octant, $z$ goes from the $xy$-plane ($z=0$) up to this surface:
   $$0 \le z \le 3 - \frac{3}{2}x - 3y$$

2. **Find the middle $y$ bounds:** Project the plane into the $xy$-plane by setting $z=0$:
   $$\frac{x}{2} + y = 1 \implies y = 1 - \frac{x}{2}$$
   In the first octant, $y$ starts at $0$:
   $$0 \le y \le 1 - \frac{x}{2}$$

3. **Find the outer $x$ bounds:** Set $y=0$ in the projection line to find the maximum $x$-intercept:
   $$\frac{x}{2} = 1 \implies x = 2$$
   So the $x$ limits are:
   $$0 \le x \le 2$$

Putting it all together:
$$V = \int_{0}^{2} \int_{0}^{1 - x/2} \int_{0}^{3 - 3x/2 - 3y} 1 \, dz \, dy \, dx$$

---

### Step 2: Integrate with respect to $z$
$$\int_{0}^{3 - 3x/2 - 3y} 1 \, dz = [z]_{0}^{3 - 3x/2 - 3y} = 3 - \frac{3}{2}x - 3y$$

---

### Step 3: Integrate with respect to $y$
Substitute the result into the next layer:
$$\int_{0}^{1 - x/2} \left(3 - \frac{3}{2}x - 3y\right) \, dy = \left[ \left(3 - \frac{3}{2}x\right)y - \frac{3}{2}y^2 \right]_{0}^{1 - x/2}$$

Notice that we can factor out $3$ from the first grouped term: $3 - \frac{3}{2}x = 3\left(1 - \frac{x}{2}\right)$. Now substitute $y = 1 - \frac{x}{2}$:
$$= 3\left(1 - \frac{x}{2}\right)\left(1 - \frac{x}{2}\right) - \frac{3}{2}\left(1 - \frac{x}{2}\right)^2$$
$$= 3\left(1 - \frac{x}{2}\right)^2 - \frac{3}{2}\left(1 - \frac{x}{2}\right)^2$$
$$= \frac{3}{2}\left(1 - \frac{x}{2}\right)^2$$

Expand the squared term:
$$= \frac{3}{2}\left(1 - x + \frac{x^2}{4}\right) = \frac{3}{2} - \frac{3}{2}x + \frac{3}{8}x^2$$

---

### Step 4: Integrate with respect to $x$
Finally, evaluate the outermost single integral:
$$V = \int_{0}^{2} \left(\frac{3}{2} - \frac{3}{2}x + \frac{3}{8}x^2\right) \, dx$$
$$V = \left[ \frac{3}{2}x - \frac{3}{4}x^2 + \frac{1}{8}x^3 \right]_{0}^{2}$$

Substitute the upper limit $x = 2$:
$$V = \left( \frac{3}{2}(2) - \frac{3}{4}(2)^2 + \frac{1}{8}(2)^3 \right) - 0$$
$$V = 3 - 3 + 1 = 1$$

### Final Answer
$$V = 1$$