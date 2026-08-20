#### Scenario:

A civil engineer is designing a solid steel gusset plate used to stiffen a bridge joint. The plate cross-section is bounded below by the base axis $y = 0$ and above by the parabola $y = 3 - 3x^2$ (measured in meters, for $-1 \le x \le 1$).

The material density of the steel plate is uniform:

$$\rho = 5 \text{ kg/m}^2$$

Calculate the total mass $M$, the second moment of inertia $I_x$ about the base axis, and the radius of gyration $k_x$ to evaluate its bending resistance under vertical loads.

```
       y
       ^
    3 +|       .---.          y = 3 - 3x^2
      |     /   |   \
    2 +|   |    |    |
      |   /     |     \
    0 +|--+-----+-----+--> x
     -1   0     1
```

#### Step-by-Step Solution:

**1. Calculate Total Mass ($M$):**

$$M = \int_{-1}^{1} \int_{0}^{3-3x^2} 5 \, dy \, dx = 2 \int_{0}^{1} \int_{0}^{3-3x^2} 5 \, dy \, dx$$

$$M = 10 \int_{0}^{1} (3 - 3x^2) \, dx = 10 \left[ 3x - x^3 \right]_0^1 = 10 (3 - 1) = 20 \text{ kg}$$

**2. Calculate Moment of Inertia about Base Axis ($I_x$):**

$$I_x = \int_{-1}^{1} \int_{0}^{3-3x^2} y^2 (5) \, dy \, dx = 2 \int_{0}^{1} \int_{0}^{3-3x^2} 5y^2 \, dy \, dx$$

Inner integral:

$$5 \int_{0}^{3-3x^2} y^2 \, dy = 5 \left[ \frac{y^3}{3} \right]_0^{3-3x^2} = \frac{5}{3} (3 - 3x^2)^3 = \frac{5}{3} \cdot 27(1 - x^2)^3 = 45(1 - x^2)^3$$

Expanding $(1 - x^2)^3 = 1 - 3x^2 + 3x^4 - x^6$:

$$I_x = 2 \int_{0}^{1} 45 (1 - 3x^2 + 3x^4 - x^6) \, dx = 90 \left[ x - x^3 + \frac{3x^5}{5} - \frac{x^7}{7} \right]_0^1$$

$$I_x = 90 \left( 1 - 1 + \frac{3}{5} - \frac{1}{7} \right) = 90 \left( \frac{21 - 5}{35} \right) = 90 \left( \frac{16}{35} \right) = \frac{288}{7} \approx 41.14 \text{ kg}\cdot\text{m}^2$$

**3. Calculate Radius of Gyration ($k_x$):**

$$k_x = \sqrt{\frac{I_x}{M}} = \sqrt{\frac{288/7}{20}} = \sqrt{\frac{72}{35}} \approx 1.43 \text{ m}$$

#### Meaning of the Answer & Real-Life Engineering Application:

- **Physical Meaning of the Solution:** The second moment of inertia $I_x \approx 41.14 \text{ kg}\cdot\text{m}^2$ quantifies how the bracket's mass is distributed vertically relative to its base. The radius of gyration $k_x \approx 1.43 \text{ m}$ indicates that the flexural stiffness of this parabolic plate is identical to concentrating its entire $20 \text{ kg}$ mass at a distance of $1.43 \text{ m}$ above the base line.
    
- **Practical Engineering Application:** In structural design, beams and gusset plates flex under gravity and wind loads. The bending stress in a beam is inversely proportional to $I_x$. By calculating $I_x$, civil engineers verify that the bracket possesses enough flexural rigidity to resist sagging and buckling without adding excess dead weight to the bridge structure.
    