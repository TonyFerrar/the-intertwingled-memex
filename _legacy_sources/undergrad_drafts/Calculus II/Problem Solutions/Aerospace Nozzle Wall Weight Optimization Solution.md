An aerospace engineer is designing the solid titanium wall casing for a small thruster nozzle. The inner profile of the nozzle chamber is modeled by the curve $x = e^y$, spanning from $y = 0$ to $y = 2$ centimeters. The outer structural shell is a straight cylinder modeled by $x = 8$ centimeters over the same vertical span. The component is manufactured by rotating this bounded area around the vertical $y$-axis on a CNC lathe. Find the exact volume of titanium metal required to manufacture the nozzle casing.

#### Setup & Variable Selection Strategy:

Because the rotation occurs around the vertical $y$-axis, slicing perpendicular to the axis means taking horizontal slices ($dy$). The functions are already conveniently written in terms of $y$ ($x = e^y$ and $x = 8$). This is a hollow object with a central cavity where exhaust gases flow, meaning we must use the **washer method**.

- **Outer Radius ($R(y)$):** Distance to the outer cylindrical shell $\implies R(y) = 8$.
    
- **Inner Radius ($r(y)$):** Distance to the interior nozzle profile $\implies r(y) = e^y$.
    
- **Limits:** Evaluated directly along the $y$-axis from $c = 0$ to $d = 2$.
    

#### Mathematical Execution:

$$V = \int_{0}^{2} \pi \left( (8)^2 - (e^y)^2 \right) \, dy$$

$$V = \pi \int_{0}^{2} (64 - e^{2y}) \, dy$$

$$V = \pi \left[ 64y - \frac{1}{2}e^{2y} \right]_{0}^{2}$$

$$V = \pi \left( \left( 64(2) - \frac{1}{2}e^{4} \right) - \left( 64(0) - \frac{1}{2}e^{0} \right) \right)$$

$$V = \pi \left( 128 - \frac{1}{2}e^4 - \left( 0 - \frac{1}{2} \right) \right) = \pi \left( 128.5 - \frac{1}{2}e^4 \right)$$

$$V \approx \pi (128.5 - 27.299) \approx 101.2\pi \approx 317.93 \text{ cm}^3$$

#### Meaning of the Answer & Real-Life Application:

The value **$317.93 \text{ cm}^3$** represents the exact volume of solid titanium needed to form the walls of the nozzle casing.

In aerospace engineering, mass is the ultimate constraint because every extra gram requires more rocket fuel to launch. Knowing this volume allows the engineer to multiply it by the density of titanium ($\approx 4.5 \text{ g/cm}^3$) to determine that the component will weigh exactly **$1,430.7$ grams**. If this structural weight violates the rocket's payload safety margins, the engineer will adjust the outer function ($x = 8$) down to a smaller value or trim the integration limits to shave off critical weight before sending the structural blueprints to production.
