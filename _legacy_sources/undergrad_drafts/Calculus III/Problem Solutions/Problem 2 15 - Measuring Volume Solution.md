To evaluate the triple integral over the rectangular box $E$:
$$\iiint_{E}(3-x+2yz)\,dV$$
where $x \in [0,2]$, $y \in [-1,1]$, and $z \in [1,2]$.

Since the bounds are constants, we can choose any order of integration. Let's use the standard order $dz\,dy\,dx$:
$$I = \int_{0}^{2} \int_{-1}^{1} \int_{1}^{2} (3 - x + 2yz) \, dz \, dy \, dx$$

We integrate from the inside out:

### Step 1: Integrate with respect to $z$
Treating $x$ and $y$ as constants:
$$\int_{1}^{2} (3 - x + 2yz) \, dz = \left[ (3 - x)z + yz^2 \right]_{1}^{2}$$

Substitute the limits $z = 2$ and $z = 1$:
$$= \Big( (3 - x)(2) + y(2)^2 \Big) - \Big( (3 - x)(1) + y(1)^2 \Big)$$
$$= (6 - 2x + 4y) - (3 - x + y)$$
$$= 3 - x + 3y$$

### Step 2: Integrate with respect to $y$
Substitute this result into the next layer of the integral:
$$\int_{-1}^{1} (3 - x + 3y) \, dy = \left[ (3 - x)y + \frac{3}{2}y^2 \right]_{-1}^{1}$$

Substitute the limits $y = 1$ and $y = -1$:
$$= \left( (3 - x)(1) + \frac{3}{2}(1)^2 \right) - \left( (3 - x)(-1) + \frac{3}{2}(-1)^2 \right)$$
$$= \left( 3 - x + \frac{3}{2} \right) - \left( -3 + x + \frac{3}{2} \right)$$
$$= 3 - x + \frac{3}{2} + 3 - x - \frac{3}{2}$$
$$= 6 - 2x$$

### Step 3: Integrate with respect to $x$
Finally, integrate the remaining expression with respect to $x$:
$$\int_{0}^{2} (6 - 2x) \, dx = \left[ 6x - x^2 \right]_{0}^{2}$$

Substitute the limits $x = 2$ and $x = 0$:
$$= \big( 6(2) - (2)^2 \big) - \big( 6(0) - (0)^2 \big)$$
$$= (12 - 4) - 0 = 8$$

### Final Answer
$$I = 8$$