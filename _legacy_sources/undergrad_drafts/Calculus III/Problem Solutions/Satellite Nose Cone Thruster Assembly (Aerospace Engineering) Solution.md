#### Scenario:

An aerospace engineer is designing a conical nose module for an orbital satellite thruster. The nose cone is bounded below by the conical surface $z = r$ and above by the flat mounting plate $z = 3 \text{ dm}$ (where $r$ and $z$ are in decimeters, $1 \text{ dm} = 0.1 \text{ m}$).

Due to dense internal avionics packed near the base ($z = 0$), the material density varies vertically:

$$\rho(z) = 4 - z \quad (\text{in kg/dm}^3)$$

1. Calculate the total mass $M$ and the vertical center of mass $\overline{z}$.
    
2. Compute the moment of inertia $I_z$ about the central thrust axis.
    

```
       z
       ^
    3 +|=========== (Plane z = 3)
      | \         /
      |  \       /    Cone z = r
      |   \     /     Density: rho(z) = 4 - z
    0 +----+---+---> r
```

#### Step-by-Step Solution:

**1. Determine Limits in Cylindrical Coordinates:**

- Height $z$: From $z = 0$ to $z = 3 \text{ dm}$
    
- Radius $r$: At height $z$, radius extends from $r = 0$ to $r = z$
    
- Angle $\theta$: Sweeps full circle $0 \le \theta \le 2\pi$
    

**2. Calculate Total Mass ($M$):**

$$M = \int_{0}^{2\pi} \int_{0}^{3} \int_{0}^{z} (4 - z) \cdot r \, dr \, dz \, d\theta = (2\pi) \int_{0}^{3} (4 - z) \left[ \frac{r^2}{2} \right]_0^z \, dz$$

$$M = 2\pi \int_{0}^{3} (4 - z) \frac{z^2}{2} \, dz = \pi \int_{0}^{3} (4z^2 - z^3) \, dz = \pi \left[ \frac{4z^3}{3} - \frac{z^4}{4} \right]_0^3$$

$$M = \pi \left( 36 - \frac{81}{4} \right) = \frac{63\pi}{4} \approx 49.48 \text{ kg}$$

**3. Calculate Vertical Center of Mass ($\overline{z}$):**

- By rotational symmetry around the z-axis: $\overline{x} = 0$ and $\overline{y} = 0$.
    
- Compute $M_{xy}$:
    
    $$M_{xy} = \int_{0}^{2\pi} \int_{0}^{3} \int_{0}^{z} z(4 - z) \cdot r \, dr \, dz \, d\theta = 2\pi \int_{0}^{3} z(4 - z) \frac{z^2}{2} \, dz$$
    
    $$M_{xy} = \pi \int_{0}^{3} (4z^3 - z^4) \, dz = \pi \left[ z^4 - \frac{z^5}{5} \right]_0^3 = \pi \left( 81 - \frac{243}{5} \right) = \frac{162\pi}{5} \approx 101.79 \text{ kg}\cdot\text{dm}$$
    

$$\overline{z} = \frac{M_{xy}}{M} = \frac{162\pi / 5}{63\pi / 4} = \frac{162}{5} \cdot \frac{4}{63} = \frac{72}{35} \approx 2.06 \text{ dm}$$

**4. Calculate Moment of Inertia $I_z$:**

$$I_z = \int_{0}^{2\pi} \int_{0}^{3} \int_{0}^{z} (r^2) \cdot (4 - z) \cdot r \, dr \, dz \, d\theta = 2\pi \int_{0}^{3} (4 - z) \left[ \frac{r^4}{4} \right]_0^z \, dz$$

$$I_z = \frac{\pi}{2} \int_{0}^{3} (4z^4 - z^5) \, dz = \frac{\pi}{2} \left[ \frac{4z^5}{5} - \frac{z^6}{6} \right]_0^3 = \frac{\pi}{2} \left( \frac{972}{5} - \frac{729}{6} \right)$$

$$I_z = \frac{\pi}{2} \left( \frac{1944 - 1215}{10} \right) = \frac{729\pi}{20} \approx 114.51 \text{ kg}\cdot\text{dm}^2$$

Convert $I_z$ to SI units ($\text{kg}\cdot\text{m}^2$): $114.51 \times 0.01 = 1.145 \text{ kg}\cdot\text{m}^2$.

#### Meaning of the Answer & Real-Life Engineering Application:

- **Physical Meaning of the Solution:** The nose cone mass is **49.48 kg**, and its vertical center of mass sits at $\overline{z} = 2.06 \text{ dm}$. A uniform solid cone of these dimensions would balance at $\overline{z}_{\text{geo}} = 2.25 \text{ dm}$. The density gradient $\rho = 4 - z$ shifts the mass center downward toward the avionics base ($z = 0$).
    
- **Practical Engineering Application:** In orbital spaceflight, thruster alignment is paramount. If the main rocket engine line of thrust does not pass directly through the 3D center of mass $(0, 0, 2.06 \text{ dm})$, firing the engines creates an unscheduled tumbling moment (pitch/yaw rotation). Furthermore, knowing $I_z = 1.145 \text{ kg}\cdot\text{m}^2$ allows attitude control systems to calculate the exact reaction-wheel torque required to spin or stabilize the satellite during maneuvers.
    