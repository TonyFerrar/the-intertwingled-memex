

#### Step-by-Step Solution:

**1. Calculate Total Mass ($M$):**

$$M = \int_{0}^{2\pi} \int_{0}^{4} \int_{0}^{2} (1 + r^2) \cdot r \, dr \, dz \, d\theta = (2\pi)(4) \int_{0}^{2} (r + r^3) \, dr$$

$$M = 8\pi \left[ \frac{r^2}{2} + \frac{r^4}{4} \right]_0^2 = 8\pi (2 + 4) = 48\pi \approx 150.80 \text{ kg}$$

**2. Calculate Moment of Inertia $I_z$:**

$$I_z = \int_{0}^{2\pi} \int_{0}^{4} \int_{0}^{2} r^2 \cdot (1 + r^2) \cdot r \, dr \, dz \, d\theta = 8\pi \int_{0}^{2} (r^3 + r^5) \, dr$$

$$I_z = 8\pi \left[ \frac{r^4}{4} + \frac{r^6}{6} \right]_0^2 = 8\pi \left( 4 + \frac{64}{6} \right) = 8\pi \left( \frac{44}{3} \right) = \frac{352\pi}{3} \approx 368.61 \text{ kg}\cdot\text{dm}^2$$

Convert $I_z$ to SI units ($\text{kg}\cdot\text{m}^2$):

$$I_{z,\text{SI}} = 368.61 \times 0.01 = 3.686 \text{ kg}\cdot\text{m}^2$$

**3. Calculate Radius of Gyration ($k_z$):**

$$k_z = \sqrt{\frac{I_z}{M}} = \sqrt{\frac{352\pi / 3}{48\pi}} = \sqrt{\frac{22}{9}} = \frac{\sqrt{22}}{3} \approx 1.56 \text{ dm} \quad (0.156 \text{ m})$$

**4. Calculate Stored Kinetic Energy ($E_k$):**

$$E_k = \frac{1}{2} I_{z,\text{SI}} \, \omega^2 = \frac{1}{2} (3.686) (300)^2 = 1.843 \times 90,000 = 165,870 \text{ Joules} \approx 165.87 \text{ kJ}$$

#### Meaning of the Answer & Real-Life Engineering Application:

- **Physical Meaning of the Solution:** The flywheel has a rotational inertia of **$3.686 \text{ kg}\cdot\text{m}^2$** and a radius of gyration of **$k_z = 0.156 \text{ m}$**. The radius of gyration $k_z$ sits close to the outer rim ($R = 0.20 \text{ m}$) because the variable density $\rho = 1 + r^2$ concentrates the heaviest alloy near the outer radius.
    
- **Practical Engineering Application:** Flywheels store mechanical energy by maximizing rotational inertia $I_z$. By placing denser composite material near the outer perimeter, engineers increase $I_z$ without adding excessive dead weight at the central axle. At an operational speed of $300 \text{ rad/s}$, this compact rotor safely stores **$165.87 \text{ kJ}$** of energy to smooth out power spikes on the electrical grid without excessive mechanical stress on the center bearings.