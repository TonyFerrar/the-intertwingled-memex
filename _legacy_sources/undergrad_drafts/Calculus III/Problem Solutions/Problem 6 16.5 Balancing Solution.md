## Step 1: Convert to Cylindrical Coordinates and Set Limits

When working with a cylindrical object aligned with the z-axis, rectangular coordinates ($x, y, z$) make integration limits unnecessarily complex. Converting to **cylindrical coordinates** $(r, \theta, z)$ simplifies the boundaries:

- $x = r\cos\theta$
    
- $y = r\sin\theta$
    
- Distance squared from the z-axis: $x^2 + y^2 = r^2$
    
- Volume element: **$dV = r \, dz \, dr \, d\theta$** (where $r$ is the Jacobian factor)
    

### Determining the Limits:

Since the cylinder is centered on the z-axis with radius $R$ and height $h$ resting on $z = 0$:

- **Radial distance ($r$):** Spans from the central axis out to the outer edge: $0 \le r \le R$
    
- **Angle ($\theta$):** Sweeps full circles around the axle: $0 \le \theta \le 2\pi$
    
- **Height ($z$):** Extends from base to top: $0 \le z \le h$
    

The density function becomes:

$$\rho(r, \theta, z) = 1 + z$$

> **Why we do this:** Because all six limits of integration are independent constants ($R, h, 2\pi$), the triple integral becomes **separable**, allowing us to split a 3D integral into three simple 1D integrals multiplied together!

## Step 2: Compute the Total Mass ($M$)

The formula for 3D mass with variable density is:

$$M = \iiint_E \rho(x,y,z) \, dV$$

Substituting our cylindrical variables and limits:

$$M = \int_{0}^{2\pi} \int_{0}^{R} \int_{0}^{h} (1 + z) \cdot r \, dz \, dr \, d\theta$$

Since the integrand $(1+z) \cdot r$ is a product of separate variable functions and all limits are constants, we factor the integral:

$$M = \left( \int_{0}^{2\pi} d\theta \right) \left( \int_{0}^{R} r \, dr \right) \left( \int_{0}^{h} (1 + z) \, dz \right)$$

**1. Evaluate the $\theta$-integral:**

$$\int_{0}^{2\pi} d\theta = [\theta]_0^{2\pi} = 2\pi$$

**2. Evaluate the $r$-integral:**

$$\int_{0}^{R} r \, dr = \left[ \frac{r^2}{2} \right]_0^R = \frac{R^2}{2}$$

**3. Evaluate the $z$-integral:**

$$\int_{0}^{h} (1 + z) \, dz = \left[ z + \frac{z^2}{2} \right]_0^h = h + \frac{h^2}{2} = h\left(1 + \frac{h}{2}\right)$$

**4. Combine the three components:**

$$M = (2\pi) \cdot \left(\frac{R^2}{2}\right) \cdot \left(h + \frac{h^2}{2}\right) = \pi R^2 h \left(1 + \frac{h}{2}\right)$$

## Step 3: Compute the Moment of Inertia about the z-axis ($I_z$)

The moment of inertia $I_z$ measures the component's resistance to angular acceleration around its central rotational axle.

The formula for 3D inertia about the z-axis is:

$$I_z = \iiint_E (x^2 + y^2) \rho(x,y,z) \, dV$$

Substituting $x^2 + y^2 = r^2$, $\rho = 1 + z$, and $dV = r \, dz \, dr \, d\theta$:

$$I_z = \int_{0}^{2\pi} \int_{0}^{R} \int_{0}^{h} (r^2) \cdot (1 + z) \cdot r \, dz \, dr \, d\theta = \int_{0}^{2\pi} \int_{0}^{R} \int_{0}^{h} r^3 (1 + z) \, dz \, dr \, d\theta$$

Factoring into three single integrals:

$$I_z = \left( \int_{0}^{2\pi} d\theta \right) \left( \int_{0}^{R} r^3 \, dr \right) \left( \int_{0}^{h} (1 + z) \, dz \right)$$

**1. Evaluate the $\theta$-integral:**

$$\int_{0}^{2\pi} d\theta = 2\pi$$

**2. Evaluate the $r$-integral:**

$$\int_{0}^{R} r^3 \, dr = \left[ \frac{r^4}{4} \right]_0^R = \frac{R^4}{4}$$

**3. Evaluate the $z$-integral:**

$$\int_{0}^{h} (1 + z) \, dz = h + \frac{h^2}{2}$$

**4. Combine the three components:**

$$I_z = (2\pi) \cdot \left(\frac{R^4}{4}\right) \cdot \left(h + \frac{h^2}{2}\right) = \frac{\pi R^4 h}{2} \left(1 + \frac{h}{2}\right)$$

## Step 4: Express $I_z$ in Terms of Total Mass $M$

In mechanical engineering, it is often useful to express rotational inertia directly in terms of the object's overall mass $M$:

Compare our expressions for $M$ and $I_z$:

- $M = \pi R^2 h \left(1 + \frac{h}{2}\right)$
    
- $I_z = \frac{R^2}{2} \cdot \left[ \pi R^2 h \left(1 + \frac{h}{2}\right) \right]$
    

Substituting $M$ into $I_z$:

$$I_z = \frac{1}{2} M R^2$$

## Final Answer

- **Total Mass ($M$):**
    
    $$\mathbf{M = \pi R^2 h \left(1 + \frac{h}{2}\right)}$$
    
- **Moment of Inertia ($I_z$):**
    
    $$\mathbf{I_z = \frac{\pi R^4 h}{2} \left(1 + \frac{h}{2}\right) = \frac{1}{2} M R^2}$$
    

### Engineering Reality Check

Why did $I_z = \frac{1}{2} M R^2$ turn out to be the classic textbook formula for a uniform cylinder, even though density varies along the length?

Because the density gradient $\rho(z) = 1 + z$ varies **only along the z-axis**, any cross-sectional horizontal slice at height $z$ remains radially symmetric. The horizontal distribution of mass relative to the center line hasn't shifted radially—there is just more mass toward the top. Therefore, the rotational inertia scales perfectly with total mass just like a standard uniform cylinder!