## Step 1: Convert to Cylindrical Coordinates and Map Boundaries

Because both the solid boundary (a paraboloid) and the density function are symmetric around the z-axis, using rectangular coordinates would lead to messy square roots. **Cylindrical coordinates** $(r, \theta, z)$ streamline the entire setup:

- $x^2 + y^2 = r^2$
    
- Density function: $\rho(r, \theta, z) = x^2 + y^2 = r^2$
    
- Volume element: **$dV = r \, dz \, dr \, d\theta$** (remembering the Jacobian factor $r$)
    

### Determining the Limits of Integration:

1. **Vertical span ($z$):** The rotor is bounded below by the paraboloid $z = x^2 + y^2 \implies z = r^2$ and bounded above by the flat plane $z = 4$. So:
    
    $$r^2 \le z \le 4$$
    
2. **Radial span ($r$):** The top edge of the paraboloid intersects the plane $z = 4$ where $r^2 = 4 \implies r = 2$. Thus, the radius spans from the center axis out to the outer rim:
    
    $$0 \le r \le 2$$
    
3. **Angular span ($\theta$):** The flywheel rotates in a full $360^\circ$ circle:
    
    $$0 \le \theta \le 2\pi$$
    

> **Why we do this:** Converting both the paraboloid $z = r^2$ and the density $\rho = r^2$ into cylindrical form eliminates all $x$ and $y$ variables, turning the boundary equations into simple algebraic terms.

## Step 2: Set Up the $I_z$ Integrand

The 3D formula for the moment of inertia about the z-axis is:

$$I_z = \iiint_E (x^2 + y^2) \cdot \rho(x,y,z) \, dV$$

Now, combine every piece carefully:

- Distance squared term: $(x^2 + y^2) \to r^2$
    
- Density function: $\rho(x,y,z) \to r^2$
    
- Differential volume: $dV \to r \, dz \, dr \, d\theta$
    

Multiplying these together yields the integrand:

$$(r^2) \cdot (r^2) \cdot (r \, dz \, dr \, d\theta) = r^5 \, dz \, dr \, d\theta$$

Our triple integral becomes:

$$I_z = \int_{0}^{2\pi} \int_{0}^{2} \int_{r^2}^{4} r^5 \, dz \, dr \, d\theta$$

> **Pitfall Warning:** Notice how the exponent jumps to $r^5$! One power of $r$ comes from the Jacobian $dV$, two powers come from the distance-squared term $(x^2+y^2)$, and two powers come from the variable density $\rho = x^2+y^2$. It's easy to drop a factor if you don't list them out separately!

## Step 3: Evaluate the Triple Integral Step-by-Step

### 1. Innermost Integral (with respect to $z$):

Since $r^5$ is constant with respect to $z$:

$$\int_{r^2}^{4} r^5 \, dz = r^5 [z]_{r^2}^4 = r^5(4 - r^2) = 4r^5 - r^7$$

### 2. Middle Integral (with respect to $r$):

Now integrate $(4r^5 - r^7)$ from $r = 0$ to $r = 2$:

$$\int_{0}^{2} (4r^5 - r^7) \, dr = \left[ \frac{4r^6}{6} - \frac{r^8}{8} \right]_0^2 = \left[ \frac{2}{3}r^6 - \frac{r^8}{8} \right]_0^2$$

Evaluate at $r = 2$:

- $2^6 = 64 \implies \frac{2}{3}(64) = \frac{128}{3}$
    
- $2^8 = 256 \implies \frac{256}{8} = 32$
    

$$\frac{128}{3} - 32 = \frac{128}{3} - \frac{96}{3} = \frac{32}{3}$$

### 3. Outermost Integral (with respect to $\theta$):

Finally, integrate with respect to $\theta$ over the full rotation:

$$I_z = \int_{0}^{2\pi} \frac{32}{3} \, d\theta = \frac{32}{3} [\theta]_0^{2\pi} = \frac{32}{3}(2\pi) = \frac{64\pi}{3}$$

## Final Answer

The moment of inertia $I_z$ of the parabolic flywheel about its rotational axis is:

$$\mathbf{I_z = \frac{64\pi}{3} \approx 67.02}$$

### Engineering Reality Check

Why is $I_z$ so large for this flywheel compared to a standard uniform object?

1. **Geometric flare:** The parabolic shape flares outward as it goes up, placing more physical volume further from the z-axis.
    
2. **Centrifugal density gradient:** The material density scales as $\rho = x^2 + y^2 = r^2$, meaning the outer rim is dramatically denser and heavier than the central core.
    

Because rotational inertia scales with distance squared ($r^2$), concentrating both **volume** and **mass** near the outer boundary ($r = 2$) gives this flywheel maximum energy storage and high resistance to structural twisting under intense acceleration!