## Step 1: Compute the Total Mass ($M$)

To calculate the radius of gyration later on, we first need to know the total mass of the object. The sheet has a uniform density $\rho = 1$ over a perfect rectangle.

The formula for mass is:

$$M = \iint_R \rho(x,y) \, dA$$

Setting up our limits from the given boundaries ($0 \le x \le 3$ and $0 \le y \le 2$):

$$M = \int_{0}^{3} \int_{0}^{2} 1 \, dy \, dx$$

**1. Inner integration (with respect to $y$):**

$$\int_{0}^{2} 1 \, dy = [y]_0^2 = 2$$

**2. Outer integration (with respect to $x$):**

$$M = \int_{0}^{3} 2 \, dx = [2x]_0^3 = 6$$

> **Why we do this:** We need the total mass as a baseline measure of the material quantity before analyzing how resistant it is to spinning. (Quick check: $\text{Area} = 3 \times 2 = 6$. Since $\rho = 1$, $\text{Mass} = 6$).

## Step 2: Compute the Moment of Inertia about the x-axis ($I_x$)

The second moment of inertia $I_x$ measures how difficult it is to rotate the object _around the x-axis_.

The formula is:

$$I_x = \iint_R y^2 \rho(x,y) \, dA$$

> **Why the integrand uses $y^2$:** A point's distance _from_ the x-axis is measured vertically by its $y$-coordinate. Rotational inertia scales with the _square_ of the distance from the axis of rotation.

Substituting $\rho = 1$ and our boundaries:

$$I_x = \int_{0}^{3} \int_{0}^{2} y^2 (1) \, dy \, dx$$

**1. Inner integration (with respect to $y$):**

$$\int_{0}^{2} y^2 \, dy = \left[ \frac{y^3}{3} \right]_0^2 = \frac{8}{3}$$

**2. Outer integration (with respect to $x$):**

$$I_x = \int_{0}^{3} \frac{8}{3} \, dx = \left[ \frac{8}{3}x \right]_0^3 = \frac{8}{3}(3) - 0 = 8$$

## Step 3: Compute the Moment of Inertia about the y-axis ($I_y$)

The moment of inertia $I_y$ measures the resistance to rotation _around the y-axis_.

The formula is:

$$I_y = \iint_R x^2 \rho(x,y) \, dA$$

> **Why the integrand uses $x^2$:** A point's distance _from_ the y-axis is measured horizontally by its $x$-coordinate. Don't fall into the common pitfall of swapping these variables!

Substituting our values:

$$I_y = \int_{0}^{3} \int_{0}^{2} x^2 (1) \, dy \, dx$$

**1. Inner integration (with respect to $y$):**

Since $x^2$ is treated as a constant here:

$$\int_{0}^{2} x^2 \, dy = [x^2 y]_0^2 = 2x^2$$

**2. Outer integration (with respect to $x$):**

$$I_y = \int_{0}^{3} 2x^2 \, dx = \left[ \frac{2}{3}x^3 \right]_0^3 = \frac{2}{3}(27) - 0 = 18$$

## Step 4: Compute the Polar Moment of Inertia ($I_z$)

The question asks for the radius of gyration about the _origin_ (which implies rotation in the xy-plane around the z-axis). To do this, we need the polar moment of inertia, $I_z$.

The formula is a straightforward combination of our previous two steps:

$$I_z = I_x + I_y$$

$$I_z = 8 + 18 = 26$$

> **Why we do this:** The distance squared from any point to the origin is $x^2 + y^2$. By integration linearity, $\iint (x^2+y^2) \, dA = \iint x^2 \, dA + \iint y^2 \, dA$, which means we can simply sum our standalone axis values to find the shared polar inertia.

## Step 5: Compute the Radius of Gyration ($k_z$)

The radius of gyration $k_z$ represents the radical distance from the axis at which the entire mass could be concentrated into a single point mass while keeping the exact same rotational inertia.

The formula is:

$$k_z = \sqrt{\frac{I_z}{M}}$$

Substituting our calculated mass ($M = 6$) and polar inertia ($I_z = 26$):

$$k_z = \sqrt{\frac{26}{6}} = \sqrt{\frac{13}{3}} \approx 2.08$$

## Final Answer

- **Moment of Inertia about x-axis ($I_x$):** $8$
    
- **Moment of Inertia about y-axis ($I_y$):** $18$
    
- **Radius of Gyration about the origin ($k_z$):** $\sqrt{\frac{13}{3}}$ (or roughly **2.08**)