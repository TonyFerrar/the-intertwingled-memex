A mechanical engineer is designing a steel transmission clutch component on a rotational CNC lathe. The cross-sectional radius profile of the part is modeled by the function $R(x) = 3x - x^2$ over the specific engagement interval from $x = 1$ to $x = 2$ decimeters. The manufacturing process spins this profile entirely around the horizontal $x$-axis. Determine the exact volume of steel required to machine this component.

#### Setup & Variable Selection Strategy:

Rotation around the $x$-axis requires vertical slicing ($dx$). The base profile sits flush against the axis of rotation, meaning this is a solid object that can be modeled using the standard **disk method**:

$$V = \int_{1}^{2} \pi [R(x)]^2 \, dx = \pi \int_{1}^{2} (3x - x^2)^2 \, dx$$

#### Mathematical Execution:

Following the algebraic expansion and fraction calculation verified in Sample Problem 2:

$$V = \pi \int_{1}^{2} (9x^2 - 6x^3 + x^4) \, dx = \pi \left[ 3x^3 - \frac{3}{2}x^4 + \frac{x^5}{5} \right]_{1}^{2}$$

$$V = \frac{32\pi}{5} - \frac{17\pi}{10} = \frac{47\pi}{10} \approx 14.77 \text{ dm}^3$$

#### Meaning of the Answer & Real-Life Application:

The mathematical value **$14.77 \text{ dm}^3$** represents the exact volume of steel contained within the finished clutch component.

In mechanical manufacturing, raw material sourcing relies entirely on volumetric capacity. Because $1 \text{ dm}^3 = 1,000 \text{ cm}^3$, the engineer multiplies the total volume ($14,770 \text{ cm}^3$) by the density of structural steel ($\approx 7.85 \text{ g/cm}^3$) to deduce that the component will weigh precisely **$115.9$ kilograms**. If the engineer had committed a classic algebraic error during binomial expansion (e.g., expanding the radius to $9x^2 - x^4$), the calculated volume would be incorrect, causing the factory to purchase the wrong amount of raw steel bar stock and underestimating the final component weight, which could compromise the mechanical integrity of the transmission system.