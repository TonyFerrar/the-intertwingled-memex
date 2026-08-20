#### Scenario:

A theatrical production company is building a decorative parabolic stage prop designed to hang seamlessly from a single vertical overhead cable. The prop is bounded below by the line $y = 0$ and above by the parabola $y = 4 - x^2$ (measured in meters).

Because heavy LED lighting fixtures and wiring harnesses are mounted near the upper curved section, the density distribution of the prop is non-uniform and varies vertically:

$$\rho(x,y) = 1 + y \quad (\text{in kg/m}^2)$$

Determine the exact coordinates $(\overline{x}, \overline{y})$ where the overhead suspension cable must be attached to ensure the prop hangs perfectly level without tilting.

```
       y
       ^
    4 +|       .---.          y = 4 - x^2
      |     /   |   \
    2 +|    |    * (0, 2.02)  <-- Cable Attachment Point
      |    /     |     \
    0 +|---+-----+-----+---> x
      -2   0     2
```

#### Step-by-Step Solution:

**1. Symmetry Analysis:**

The boundary $y = 4 - x^2$ is symmetric about the y-axis over $x \in [-2, 2]$. The density function $\rho(y) = 1 + y$ depends only on $y$. Therefore, by horizontal symmetry:

$$\overline{x} = 0$$

**2. Calculate Total Mass ($M$):**

$$M = \int_{-2}^{2} \int_{0}^{4-x^2} (1 + y) \, dy \, dx = 2 \int_{0}^{2} \int_{0}^{4-x^2} (1 + y) \, dy \, dx$$

Inner integral:

$$\int_{0}^{4-x^2} (1 + y) \, dy = \left[ y + \frac{y^2}{2} \right]_0^{4-x^2} = (4 - x^2) + \frac{(4 - x^2)^2}{2}$$

$$= 4 - x^2 + \frac{16 - 8x^2 + x^4}{2} = 12 - 5x^2 + \frac{x^4}{2}$$

Outer integral:

$$M = 2 \int_{0}^{2} \left(12 - 5x^2 + \frac{x^4}{2}\right) \, dx = 2 \left[ 12x - \frac{5x^3}{3} + \frac{x^5}{10} \right]_0^2$$

$$M = 2 \left( 24 - \frac{40}{3} + \frac{32}{10} \right) = 2 \left( \frac{360 - 200 + 48}{15} \right) = 2 \left( \frac{208}{15} \right) = \frac{416}{15} \approx 27.73 \text{ kg}$$

**3. Calculate First Moment $M_x$:**

$$M_x = 2 \int_{0}^{2} \int_{0}^{4-x^2} y(1 + y) \, dy \, dx = 2 \int_{0}^{2} \int_{0}^{4-x^2} (y + y^2) \, dy \, dx$$

Inner integral:

$$\int_{0}^{4-x^2} (y + y^2) \, dy = \left[ \frac{y^2}{2} + \frac{y^3}{3} \right]_0^{4-x^2} = \frac{(4 - x^2)^2}{2} + \frac{(4 - x^2)^3}{3}$$

$$= \left( 8 - 4x^2 + \frac{x^4}{2} \right) + \left( \frac{64}{3} - 16x^2 + 4x^4 - \frac{x^6}{3} \right) = \frac{88}{3} - 20x^2 + \frac{9x^4}{2} - \frac{x^6}{3}$$

Outer integral:

$$M_x = 2 \int_{0}^{2} \left( \frac{88}{3} - 20x^2 + \frac{9x^4}{2} - \frac{x^6}{3} \right) \, dx$$

$$M_x = 2 \left[ \frac{88x}{3} - \frac{20x^3}{3} + \frac{9x^5}{10} - \frac{x^7}{21} \right]_0^2 = 2 \left( \frac{176}{3} - \frac{160}{3} + \frac{288}{10} - \frac{128}{21} \right)$$

$$M_x = 2 \left( \frac{16}{3} + \frac{144}{5} - \frac{128}{21} \right) = 2 \left( \frac{2944}{105} \right) = \frac{5888}{105} \approx 56.08 \text{ kg}\cdot\text{m}$$

**4. Compute Vertical Balance Coordinate $\overline{y}$:**

$$\overline{y} = \frac{M_x}{M} = \frac{5888 / 105}{416 / 15} = \frac{5888}{105} \cdot \frac{15}{416} = \frac{184}{91} \approx 2.02 \text{ m}$$

#### Meaning of the Answer & Real-Life Engineering Application:

- **Physical Meaning of the Solution:** The balance point sits at $(\overline{x}, \overline{y}) = (0, 2.02 \text{ m})$. If the plate were made of uniform material ($\rho = \text{constant}$), its geometric centroid would sit lower at $y = 1.60 \text{ m}$. Because the wiring and lights increase density toward the top ($\rho = 1 + y$), the center of mass is pulled upward by approximately **0.42 m**.
    
- **Practical Engineering Application:** To hang this stage prop cleanly without it tilting forward, backward, or sideways, the rigging hardware must be anchored directly along the vertical line passing through $x = 0 \text{ m}$ at height $y = 2.02 \text{ m}$. Aligning the cable directly with this center of mass eliminates rotational torque, keeping the prop stable and protecting overhead suspension motors from uneven strain.
    