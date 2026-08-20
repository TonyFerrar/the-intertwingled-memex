An aerospace engineer is designing a prototype fuel tank located in the nose cone of an experimental aircraft. The interior space of the tank occupies a general 3D region $E$ bounded below by the flat deck $z = 0$ and above by a sloped structural bulkhead plane $x + y + z = 1$ in the first octant ($x, y, z \ge 0$, where coordinates are measured in meters). Due to the anti-slosh baffling material inside the tank, the density of the fuel distribution is non-uniform and varies along the length of the tank according to the function:

$$\rho(x,y,z) = x \quad (\text{kg/m}^3)$$

Calculate the **total mass ($M$)** of the fuel contained in this tank.

#### Solution:

To find the total mass, we evaluate the triple integral of the density function over the general region $E$:

$$M = \iiint_{E} \rho(x,y,z) \, dV = \int_{0}^{1} \int_{0}^{1-x} \int_{0}^{1-x-y} x \, dz \, dy \, dx$$

**Step 1: Integrate with respect to $z$**

Treating $x$ and $y$ as constants:

$$\int_{0}^{1-x-y} x \, dz = [xz]_{0}^{1-x-y} = x(1 - x - y) = x - x^2 - xy$$

**Step 2: Integrate with respect to $y$**

Substitute the result into the next layer:

$$\int_{0}^{1-x} (x - x^2 - xy) \, dy = \left[ (x - x^2)y - \frac{1}{2}xy^2 \right]_{0}^{1-x}$$

Substitute $y = 1 - x$:

$$= (x - x^2)(1 - x) - \frac{1}{2}x(1 - x)^2$$

Notice that $(x - x^2) = x(1-x)$, so the first term is $x(1-x)^2$:

$$= x(1 - x)^2 - \frac{1}{2}x(1 - x)^2 = \frac{1}{2}x(1 - x)^2$$

Expand the expression:

$$= \frac{1}{2}x(1 - 2x + x^2) = \frac{1}{2}x - x^2 + \frac{1}{2}x^3$$

**Step 3: Integrate with respect to $x$**

Evaluate the final outer single integral:

$$M = \int_{0}^{1} \left( \frac{1}{2}x - x^2 + \frac{1}{2}x^3 \right) \, dx = \left[ \frac{1}{4}x^2 - \frac{1}{3}x^3 + \frac{1}{8}x^4 \right]_{0}^{1}$$

$$M = \frac{1}{4} - \frac{1}{3} + \frac{1}{8}$$

Find a common denominator of 24:

$$M = \frac{6}{24} - \frac{8}{24} + \frac{3}{24} = \frac{1}{24} \text{ kg}$$

#### Meaning of the Answer & Real-Life Application:

The total mass of the fuel is exactly $\frac{1}{24}\text{ kg}$ ($\approx 0.0417\text{ kg}$). In aerospace flight dynamics, finding the total mass of non-uniform volumes is critical for calculating the aircraft's moment of inertia and tracking how the vehicle's Center of Gravity (CG) shifts as fuel burns. Because fuel density varies due to the baffling, an incorrect uniform-volume estimate would cause flight control computers to miscalculate the required tail-flap deflection angles, leading to aerodynamic instability or autopilot over-correction during high-speed maneuvers.