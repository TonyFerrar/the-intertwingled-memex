#### Scenario:

A mechanical engineer is designing a heavy-duty friction clutch disk for an industrial vehicle. The disk is an annular ring bounded by inner radius $r = 1 \text{ dm}$ and outer radius $r = 3 \text{ dm}$ (where $1 \text{ dm} = 0.1 \text{ m}$).

Due to composite material layering near the outer friction rim, the density varies radially:

$$\rho(r) = 2 + r \quad (\text{in kg/dm}^2)$$

1. Compute the total mass $M$, polar moment of inertia $I_z$, and polar radius of gyration $k_z$.
    
2. Calculate the engine torque $\tau$ required to accelerate the clutch plate at $\alpha = 10 \text{ rad/s}^2$.
    

#### Step-by-Step Solution:

**1. Calculate Total Mass ($M$):** Convert to polar coordinates ($dA = r \, dr \, d\theta$):

$$M = \int_{0}^{2\pi} \int_{1}^{3} (2 + r) \cdot r \, dr \, d\theta = \left( \int_{0}^{2\pi} d\theta \right) \left( \int_{1}^{3} (2r + r^2) \, dr \right)$$

$$M = (2\pi) \left[ r^2 + \frac{r^3}{3} \right]_1^3 = 2\pi \left[ \left(9 + 9\right) - \left(1 + \frac{1}{3}\right) \right] = 2\pi \left( 18 - \frac{4}{3} \right) = \frac{100\pi}{3} \approx 104.72 \text{ kg}$$

**2. Calculate Polar Moment of Inertia ($I_z$):** In polar coordinates, distance squared from the origin is $r^2$:

$$I_z = \int_{0}^{2\pi} \int_{1}^{3} r^2 \cdot (2 + r) \cdot r \, dr \, d\theta = \left( \int_{0}^{2\pi} d\theta \right) \left( \int_{1}^{3} (2r^3 + r^4) \, dr \right)$$

$$I_z = (2\pi) \left[ \frac{r^4}{2} + \frac{r^5}{5} \right]_1^3 = 2\pi \left[ \left(\frac{81}{2} + \frac{243}{5}\right) - \left(\frac{1}{2} + \frac{1}{5}\right) \right]$$

$$I_z = 2\pi \left( 40 + \frac{242}{5} \right) = 2\pi \left( \frac{442}{5} \right) = \frac{884\pi}{5} \approx 555.43 \text{ kg}\cdot\text{dm}^2$$

**3. Calculate Radius of Gyration ($k_z$):**

$$k_z = \sqrt{\frac{I_z}{M}} = \sqrt{\frac{884\pi / 5}{100\pi / 3}} = \sqrt{\frac{884}{5} \cdot \frac{3}{100}} = \sqrt{\frac{2652}{500}} = \sqrt{5.304} \approx 2.30 \text{ dm}$$

**4. Convert $I_z$ to SI Units ($\text{kg}\cdot\text{m}^2$) and Compute Required Torque ($\tau$):**

Since $1 \text{ dm} = 0.1 \text{ m}$, then $1 \text{ dm}^2 = 0.01 \text{ m}^2$:

$$I_{z,\text{SI}} = 555.43 \times 0.01 = 5.554 \text{ kg}\cdot\text{m}^2$$

Using Newton's second law for rotation ($\tau = I_z \cdot \alpha$):

$$\tau = (5.554 \text{ kg}\cdot\text{m}^2) \times (10 \text{ rad/s}^2) \approx 55.54 \text{ N}\cdot\text{m}$$

#### Meaning of the Answer & Real-Life Engineering Application:

- **Physical Meaning of the Solution:** $I_z \approx 5.55 \text{ kg}\cdot\text{m}^2$ measures the total rotational resistance of the clutch disk around its central drive shaft. The radius of gyration $k_z = 2.30 \text{ dm}$ ($0.23 \text{ m}$) reveals that the effective mass ring sits closer to the outer boundary ($r = 3 \text{ dm}$) because the composite material grows denser toward the outer rim.
    
- **Practical Engineering Application:** Automakers need to know the rotational inertia $I_z$ of drivetrain components to size the engine and clutch actuators. To accelerate this clutch disk from rest at a rate of $10 \text{ rad/s}^2$, the drivetrain must deliver at least $55.54 \text{ N}\cdot\text{m}$ of torque. Understanding this value ensures the clutch engages smoothly without slipping, stalling the engine, or causing excessive wear on the friction linings.