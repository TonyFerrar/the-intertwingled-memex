#### Scenario:

An aerospace engineer is analyzing a triangular structural mounting bracket inside an aircraft wing. The bracket is bounded by the coordinate axes $x = 0$, $y = 0$, and the structural support boundary line $x + 2y = 4$ (where $x$ and $y$ are in decimeters).

During manufacturing, liquid metal cooling caused a linear density gradient along the length of the bracket:

$$\rho(x,y) = 3x + 1 \quad (\text{in kg/dm}^2)$$

Find the bracket's total mass $M$ and its center of mass coordinates $(\overline{x}, \overline{y})$ to determine proper mounting rivet placement.

#### Step-by-Step Solution:

**1. Define Integration Boundaries:**

Rearranging the boundary equation $x + 2y = 4$ for $y$ yields $y = 2 - \frac{x}{2}$.

- Inner bounds ($y$): From $y = 0$ to $y = 2 - \frac{x}{2}$
    
- Outer bounds ($x$): From $x = 0$ to $x = 4$
    

**2. Calculate Total Mass ($M$):**

$$M = \int_{0}^{4} \int_{0}^{2 - x/2} (3x + 1) \, dy \, dx$$

Inner integral:

$$\int_{0}^{2 - x/2} (3x + 1) \, dy = (3x + 1)\left(2 - \frac{x}{2}\right) = 6x - \frac{3x^2}{2} + 2 - \frac{x}{2} = 2 + \frac{11x}{2} - \frac{3x^2}{2}$$

Outer integral:

$$M = \int_{0}^{4} \left(2 + \frac{11x}{2} - \frac{3x^2}{2}\right) \, dx = \left[ 2x + \frac{11x^2}{4} - \frac{x^3}{2} \right]_0^4$$

$$M = (2(4) + 11(4) - 32) - 0 = 8 + 44 - 32 = 20 \text{ kg}$$

**3. Calculate First Moment $M_y$:**

$$M_y = \int_{0}^{4} \int_{0}^{2 - x/2} x(3x + 1) \, dy \, dx = \int_{0}^{4} (3x^2 + x)\left(2 - \frac{x}{2}\right) \, dx$$

$$= \int_{0}^{4} \left( 6x^2 - \frac{3x^3}{2} + 2x - \frac{x^2}{2} \right) \, dx = \int_{0}^{4} \left( 2x + \frac{11x^2}{2} - \frac{3x^3}{2} \right) \, dx$$

Evaluating:

$$M_y = \left[ x^2 + \frac{11x^3}{6} - \frac{3x^4}{8} \right]_0^4 = 16 + \frac{11(64)}{6} - \frac{3(256)}{8} = 16 + \frac{352}{3} - 96 = \frac{352}{3} - 80 = \frac{112}{3} \text{ kg}\cdot\text{dm}$$

**4. Calculate First Moment $M_x$:**

$$M_x = \int_{0}^{4} \int_{0}^{2 - x/2} y(3x + 1) \, dy \, dx = \int_{0}^{4} (3x + 1) \left[ \frac{y^2}{2} \right]_0^{2 - x/2} \, dx$$

$$= \int_{0}^{4} \frac{3x + 1}{2} \left( 4 - 2x + \frac{x^2}{4} \right) \, dx = \frac{1}{2} \int_{0}^{4} \left( 4 + 10x - \frac{23x^2}{4} + \frac{3x^3}{4} \right) \, dx$$

Evaluating:

$$M_x = \frac{1}{2} \left[ 4x + 5x^2 - \frac{23x^3}{12} + \frac{3x^4}{16} \right]_0^4 = \frac{1}{2} \left( 16 + 80 - \frac{368}{3} + 48 \right)$$

$$M_x = \frac{1}{2} \left( 144 - \frac{368}{3} \right) = \frac{1}{2} \left( \frac{64}{3} \right) = \frac{32}{3} \text{ kg}\cdot\text{dm}$$

**5. Compute Center of Mass Coordinates:**

$$\overline{x} = \frac{M_y}{M} = \frac{112/3}{20} = \frac{28}{15} \approx 1.87 \text{ dm}$$

$$\overline{y} = \frac{M_x}{M} = \frac{32/3}{20} = \frac{8}{15} \approx 0.53 \text{ dm}$$

#### Meaning of the Answer & Real-Life Engineering Application:

- **Physical Meaning of the Solution:** The center of mass is at $(\overline{x}, \overline{y}) = (1.87 \text{ dm}, 0.53 \text{ dm})$. A uniform triangular plate with these dimensions has a purely geometric centroid at $\overline{x}_{\text{geo}} = 1.33 \text{ dm}$ and $\overline{y}_{\text{geo}} = 0.67 \text{ dm}$. The density gradient $\rho = 3x + 1$ significantly shifts the mass rightward toward $x = 4 \text{ dm}$.
    
- **Practical Engineering Application:** When mounting this bracket inside an aircraft wing subject to extreme flight vibrations, load distribution is critical. If structural engineers placed fastening rivets assuming the geometric center ($1.33, 0.67$), the actual heavier right side ($1.87$) would create an unexpected torque under G-forces, leading to rivet shear and fatigue failure. Knowing the exact mass center allows engineers to align primary load-bearing fasteners with $(1.87, 0.53)$ to ensure pure shear loading without bending moments.