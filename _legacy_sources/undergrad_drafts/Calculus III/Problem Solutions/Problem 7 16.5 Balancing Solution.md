
---

## Step 1: Convert to Spherical Coordinates and Set the Limits

When working with spheres or hemispheres centered at the origin, rectangular coordinates ($x, y, z$) yield messy square-root limits. **Spherical coordinates** $(\rho, \phi, \theta)$ turn these curved surface boundaries into simple constants:

* $x = \rho \sin\phi \cos\theta$

* $y = \rho \sin\phi \sin\theta$

* $z = \rho \cos\phi$

* Radial distance from origin: $r = \sqrt{x^2 + y^2 + z^2} = \rho$

* Volume element: **$dV = \rho^2 \sin\phi \, d\rho \, d\phi \, d\theta$** (where $\rho^2 \sin\phi$ is the Jacobian factor)



> **Notation Safety Check:** To avoid confusing the density function with the spherical radial coordinate $\rho$, we will write the density as $\delta(\rho) = c\rho$.
> 
> 

### Setting the Integration Limits:

For a hemisphere resting above the $xy$-plane ($z \ge 0$) with radius $a$:

* **Radial distance ($\rho$):** Expands from core to outer shell: $0 \le \rho \le a$

* **Polar angle ($\phi$):** Drops from the vertical z-axis ($\phi = 0$) down to the horizontal $xy$-plane ($\phi = \pi/2$)
* **Azimuthal angle ($\theta$):** Sweeps full $360^\circ$ circle around the z-axis: $0 \le \theta \le 2\pi$


---

## Step 2: Apply Rotational Symmetry for $\overline{x}$ and $\overline{y}$

Before calculating moments, we can analyze the structural symmetry:

* The hemispherical dome is perfectly symmetric about the z-axis.


* The density function $\delta = c\rho$ depends *only* on distance from the origin, meaning mass is distributed identically in every radial direction ($\theta$).



Because the dome and its density are completely symmetrical around the z-axis, the horizontal center of mass must sit right on the central vertical axis:


$$\overline{x} = 0, \quad \overline{y} = 0$$

> **Why we do this:** Symmetry eliminates two full 3D integral calculations ($M_{yz}$ and $M_{xz}$), leaving us with only the vertical balance coordinate $\overline{z}$ to compute.
> 
> 

---

## Step 3: Compute the Total Mass ($M$)

The 3D mass formula in spherical coordinates is:


$$M = \iiint_E \delta(x,y,z) \, dV$$

Substituting density $\delta = c\rho$ and $dV = \rho^2 \sin\phi \, d\rho \, d\phi \, d\theta$:


$$M = \int_{0}^{2\pi} \int_{0}^{\pi/2} \int_{0}^{a} (c\rho) \cdot (\rho^2 \sin\phi) \, d\rho \, d\phi \, d\theta = c \int_{0}^{2\pi} \int_{0}^{\pi/2} \int_{0}^{a} \rho^3 \sin\phi \, d\rho \, d\phi \, d\theta$$

Because all limits are constants and the integrand factors into separate single-variable terms, we split the triple integral into three independent 1D integrals:


$$M = c \left( \int_{0}^{2\pi} d\theta \right) \left( \int_{0}^{\pi/2} \sin\phi \, d\phi \right) \left( \int_{0}^{a} \rho^3 \, d\rho \right)$$

**1. Evaluate the $\theta$-integral:**


$$\int_{0}^{2\pi} d\theta = [\theta]_0^{2\pi} = 2\pi$$

**2. Evaluate the $\phi$-integral:**


$$\int_{0}^{\pi/2} \sin\phi \, d\phi = [-\cos\phi]_0^{\pi/2} = -\cos\left(\frac{\pi}{2}\right) - (-\cos(0)) = 0 - (-1) = 1$$

**3. Evaluate the $\rho$-integral:**


$$\int_{0}^{a} \rho^3 \, d\rho = \left[ \frac{\rho^4}{4} \right]_0^a = \frac{a^4}{4}$$

**4. Multiply the components together:**


$$M = c \cdot (2\pi) \cdot (1) \cdot \left(\frac{a^4}{4}\right) = \frac{\pi c a^4}{2}$$

---

## Step 4: Compute the First Moment about the $xy$-Plane ($M_{xy}$)

The moment $M_{xy}$ determines the vertical distribution of mass relative to the base plane. We integrate the height coordinate $z$ multiplied by density:


$$M_{xy} = \iiint_E z \cdot \delta(x,y,z) \, dV$$

Substituting $z = \rho \cos\phi$, $\delta = c\rho$, and $dV = \rho^2 \sin\phi \, d\rho \, d\phi \, d\theta$:


$$M_{xy} = \int_{0}^{2\pi} \int_{0}^{\pi/2} \int_{0}^{a} (\rho \cos\phi) \cdot (c\rho) \cdot (\rho^2 \sin\phi) \, d\rho \, d\phi \, d\theta$$

$$M_{xy} = c \int_{0}^{2\pi} \int_{0}^{\pi/2} \int_{0}^{a} \rho^4 \sin\phi \cos\phi \, d\rho \, d\phi \, d\theta$$

Factoring into three separate single integrals:


$$M_{xy} = c \left( \int_{0}^{2\pi} d\theta \right) \left( \int_{0}^{\pi/2} \sin\phi \cos\phi \, d\phi \right) \left( \int_{0}^{a} \rho^4 \, d\rho \right)$$

**1. Evaluate the $\theta$-integral:**


$$\int_{0}^{2\pi} d\theta = 2\pi$$

**2. Evaluate the $\phi$-integral:**
Using $u$-substitution with $u = \sin\phi, \, du = \cos\phi \, d\phi$:


$$\int_{0}^{\pi/2} \sin\phi \cos\phi \, d\phi = \left[ \frac{\sin^2\phi}{2} \right]_0^{\pi/2} = \frac{1^2}{2} - 0 = \frac{1}{2}$$

**3. Evaluate the $\rho$-integral:**


$$\int_{0}^{a} \rho^4 \, d\rho = \left[ \frac{\rho^5}{5} \right]_0^a = \frac{a^5}{5}$$

**4. Multiply the components together:**


$$M_{xy} = c \cdot (2\pi) \cdot \left(\frac{1}{2}\right) \cdot \left(\frac{a^5}{5}\right) = \frac{\pi c a^5}{5}$$

---

## Step 5: Calculate the Center of Mass Coordinates

Now, divide the first moment $M_{xy}$ by the total mass $M$ to get $\overline{z}$:

$$\overline{z} = \frac{M_{xy}}{M} = \frac{\frac{\pi c a^5}{5}}{\frac{\pi c a^4}{2}}$$

Canceling common factors $\pi, c,$ and $a^4$:


$$\overline{z} = \frac{a^5 / 5}{a^4 / 2} = \frac{2}{5}a = 0.4a$$

---

## Final Answer

The center of mass (balance point) of the hemispherical dome is located at:


$$\mathbf{(\overline{x}, \overline{y}, \overline{z}) = \left(0, 0, \frac{2}{5}a\right) = (0, 0, 0.4a)}$$

---

### Engineering & Physical Verification

* For a **uniform** solid hemisphere ($\delta = \text{constant}$), the center of mass lies at $\overline{z} = \frac{3}{8}a = 0.375a$.
* In our case, the material density increases with distance from the center core ($\delta = c\rho$), meaning material is heavier near the outer shell $r = a$ than near the core $r = 0$.

Because more weight is concentrated toward the upper outer shell, the balance point pulls upward from $0.375a$ to $0.4a$. The mathematical model matches physical reality!