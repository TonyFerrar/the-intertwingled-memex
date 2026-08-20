## Solution

To evaluate the triple integral over the rectangular box:

$$I = \int_{-1}^{5} \int_{2}^{4} \int_{0}^{1} (x + yz^2) \, dz \, dy \, dx$$

We integrate from the inside out: first with respect to $z$, then $y$, and finally $x$.

### Step 1: Integrate with respect to $z$

Treating $x$ and $y$ as constants:

$$\int_{0}^{1} (x + yz^2) \, dz = \left[ xz + y\frac{z^3}{3} \right]_{0}^{1}$$

Substitute the limits $z = 1$ and $z = 0$:

$$= \left( x(1) + y\frac{1^3}{3} \right) - (0) = x + \frac{1}{3}y$$

### Step 2: Integrate with respect to $y$

Now substitute this result into the next layer of the integral:

$$\int_{2}^{4} \left( x + \frac{1}{3}y \right) \, dy = \left[ xy + \frac{1}{6}y^2 \right]_{2}^{4}$$

Substitute the limits $y = 4$ and $y = 2$:

$$= \left( 4x + \frac{1}{6}(4)^2 \right) - \left( 2x + \frac{1}{6}(2)^2 \right)$$

$$= \left( 4x + \frac{16}{6} \right) - \left( 2x + \frac{4}{6} \right)$$

$$= 2x + \frac{12}{6} = 2x + 2$$

### Step 3: Integrate with respect to $x$

Finally, integrate the remaining expression with respect to $x$:

$$\int_{-1}^{5} (2x + 2) \, dx = \left[ x^2 + 2x \right]_{-1}^{5}$$

Substitute the limits $x = 5$ and $x = -1$:

$$= \left( (5)^2 + 2(5) \right) - \left( (-1)^2 + 2(-1) \right)$$

$$= (25 + 10) - (1 - 2)$$

$$= 35 - (-1)$$

$$= 35 + 1 = 36$$

### Final Answer

$$I = 36$$


