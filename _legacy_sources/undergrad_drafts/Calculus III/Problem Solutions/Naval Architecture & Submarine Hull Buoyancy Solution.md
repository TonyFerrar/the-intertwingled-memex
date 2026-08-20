A naval architect is validating the stability of an experimental unmanned underwater vehicle (UUV). The lower section of the sub's ballast keel forms a 3D general region $E$ bounded laterally by the parabolic hull form $y = x^2$, capped behind by the flat bulkhead wall $y = 1$, bounded below by the baseline floor $z = 0$, and capped on top by a slanted drainage deck $z = y$. To calculate the buoyant displacement force acting on this keel section, the architect must determine its **exact geometric volume ($V$)**.

#### Solution:

To find the volume, we evaluate the triple integral of $1$ over the region $E$:

$$V = \iiint_{E} 1 \, dV$$

**Step 1: Identify the integration bounds**

- **Inner bounds ($z$):** The keel goes from the bottom floor $z = 0$ up to the slanted deck $z = y$, so $0 \le z \le y$.
    
- **2D Projection ($D$):** Projecting onto the $xy$-plane, the region is enclosed by the parabola $y = x^2$ and the line $y = 1$.
    
- **Middle bounds ($y$):** For a given $x$, $y$ goes from the hull curve up to the bulkhead line: $x^2 \le y \le 1$.
    
- **Outer bounds ($x$):** The intersection points of $y = x^2$ and $y = 1$ are $x^2 = 1 \implies x = -1$ to $x = 1$.
    

**Step 2: Set up and evaluate the iterated integral**

$$V = \int_{-1}^{1} \int_{x^2}^{1} \int_{0}^{y} 1 \, dz \, dy \, dx$$

_Inner $z$-integration:_

$$\int_{0}^{y} 1 \, dz = y$$

_Middle $y$-integration:_

$$\int_{x^2}^{1} y \, dy = \left[ \frac{1}{2}y^2 \right]_{x^2}^{1} = \frac{1}{2} - \frac{1}{2}(x^2)^2 = \frac{1}{2} - \frac{1}{2}x^4$$

_Outer $x$-integration:_

$$V = \int_{-1}^{1} \left( \frac{1}{2} - \frac{1}{2}x^4 \right) \, dx$$

Using symmetry to integrate from $0$ to $1$:

$$V = 2 \int_{0}^{1} \left( \frac{1}{2} - \frac{1}{2}x^4 \right) \, dx = 2 \left[ \frac{1}{2}x - \frac{1}{10}x^5 \right]_{0}^{1} = 2 \left( \frac{1}{2} - \frac{1}{10} \right) = 2 \left( \frac{4}{10} \right) = \frac{8}{10} = 0.8 \text{ m}^3$$

#### Meaning of the Answer & Real-Life Application:

The total internal volume of this hull section is $0.8\text{ m}^3$. In naval engineering, according to Archimedes' Principle, the buoyant upward force exerted on a submerged object is equal to the weight of the water fluid it displaces ($F_{\text{buoyant}} = \rho_{\text{water}} \cdot g \cdot V$).

By finding this precise volume using a general triple integral, the engineer can multiply $0.8\text{ m}^3$ by the density of seawater ($\approx 1025\text{ kg/m}^3$) and gravity ($9.81\text{ m/s}^2$) to calculate the exact upward lift force. This ensures that when the ballast tanks are flooded, the submarine achieves perfect neutral buoyancy and will neither unintentionally sink to the ocean floor nor float uncontrollably to the surface.