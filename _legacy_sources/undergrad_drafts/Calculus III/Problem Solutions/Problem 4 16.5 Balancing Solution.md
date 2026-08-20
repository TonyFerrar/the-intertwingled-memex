## Step 1: Apply the Symmetry Shortcut for $\overline{x}$

Before writing down long integrals, we can look for geometric and mass symmetry to save time.

- **The Geometry:** The region is a symmetric semi-circular ring centered on the origin, spanning evenly across the y-axis from $\theta = 0$ to $\theta = \pi$.
    
- **The Density:** The density is uniform ($\rho = \rho_0$), meaning mass is perfectly balanced on both the left and right sides.
    

Because the shape and mass are identical on both sides of the y-axis, the horizontal center of mass must sit exactly on that central axis. Therefore:

$$\overline{x} = 0$$

> **Why we do this:** Recognizing symmetry allows us to bypass calculating the first moment $M_y$ entirely. If you were to integrate it using $x = r\cos\theta$, the $\cos\theta$ term integrated from $0$ to $\pi$ would naturally evaluate to $0$.

## Step 2: Compute the Total Mass ($M$)

To find $\overline{y}$, we need the total mass of the semi-circular plate. The standard mass formula is:

$$M = \iint_R \rho(x,y) \, dA$$

Shifting to polar coordinates, our area element changes to **$dA = r \, dr \, d\theta$**. Our boundaries are constants given by the problem: $r$ ranges from $1$ to $3$, and $\theta$ ranges from $0$ to $\pi$.

$$M = \int_{0}^{\pi} \int_{1}^{3} \rho_0 \cdot r \, dr \, d\theta$$

> **Why we do this:** Polar coordinates are ideal here because integrating the circular boundaries ($x^2 + y^2 = 1$ and $x^2 + y^2 = 9$) in rectangular coordinates would require messy square roots. Don't forget to include the **Jacobian factor $r$** when converting $dA \to r \, dr \, d\theta$!

**1. Evaluate the inner integral (with respect to $r$):**

$$\int_{1}^{3} \rho_0 r \, dr = \rho_0 \left[ \frac{r^2}{2} \right]_1^3 = \rho_0 \left( \frac{3^2}{2} - \frac{1^2}{2} \right) = \rho_0 \left( \frac{9}{2} - \frac{1}{2} \right) = 4\rho_0$$

**2. Evaluate the outer integral (with respect to $\theta$):**

$$M = \int_{0}^{\pi} 4\rho_0 \, d\theta = [4\rho_0\theta]_0^{\pi} = 4\pi\rho_0$$

## Step 3: Compute the First Moment about the x-axis ($M_x$)

The moment $M_x$ measures the structural leverage relative to the horizontal x-axis, so we integrate the vertical distance variable $y$ multiplied by the density:

$$M_x = \iint_R y \cdot \rho(x,y) \, dA$$

To convert this completely into polar coordinates, we substitute **$y = r\sin\theta$** and **$dA = r \, dr \, d\theta$**:

$$M_x = \int_{0}^{\pi} \int_{1}^{3} (r\sin\theta) \cdot \rho_0 \cdot r \, dr \, d\theta = \rho_0 \int_{0}^{\pi} \int_{1}^{3} r^2 \sin\theta \, dr \, d\theta$$

**1. Evaluate the inner integral (with respect to $r$):**

Treat $\sin\theta$ as a constant during this step:

$$\int_{1}^{3} r^2 \sin\theta \, dr = \sin\theta \left[ \frac{r^3}{3} \right]_1^3 = \sin\theta \left( \frac{27}{3} - \frac{1}{3} \right) = \frac{26}{3}\sin\theta$$

**2. Evaluate the outer integral (with respect to $\theta$):**

$$M_x = \rho_0 \int_{0}^{\pi} \frac{26}{3}\sin\theta \, d\theta = \frac{26}{3}\rho_0 [-\cos\theta]_0^{\pi}$$

$$M_x = \frac{26}{3}\rho_0 \Big( -\cos(\pi) - (-\cos(0)) \Big) = \frac{26}{3}\rho_0 \Big( -(-1) + 1 \Big) = \frac{26}{3}\rho_0 (2) = \frac{52}{3}\rho_0$$

## Step 4: Calculate the Centroid Coordinate $\overline{y}$

Now, divide the first moment about the x-axis by the total mass to find the vertical center of balance:

$$\overline{y} = \frac{M_x}{M} = \frac{\frac{52}{3}\rho_0}{4\pi\rho_0}$$

The constant density factor $\rho_0$ cancels out cleanly:

$$\overline{y} = \frac{52}{12\pi} = \frac{13}{3\pi} \approx 1.38$$

## Final Answer

The center of mass (balance point) of the semi-circular component is located at:

$$\mathbf{(\overline{x}, \overline{y}) = \left(0, \frac{13}{3\pi}\right) \approx (0, 1.38)}$$

### Physical Verification

Let's make sure this location makes sense physically. The plate spans vertically from $y = 0$ out to an outermost radius of $y = 3$. Because it's a ring with the center cut out (from $r=0$ to $r=1$), more of its actual material is pushed toward the outer edge. A value of $\overline{y} \approx 1.38$ sits completely within the physical boundaries of the plate, exactly where you would expect it to balance on a stabilizer pin!