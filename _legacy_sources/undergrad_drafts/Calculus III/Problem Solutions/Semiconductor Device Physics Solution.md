An electrical engineer is analyzing a rectangular silicon chip substrate inside a sensor. The chip spans the domain $E = [0, 2] \times [0, 2] \times [0, 1]$ where all measurements are in millimeters ($\text{mm}$). During production doping, a non-uniform concentration of free electrical charge accumulates in the device. The volumetric charge density function $\rho_e(x,y,z)$ inside the silicon region is modeled by:

$$\rho_e(x, y, z) = x^2yz \quad (\text{nanocoulombs/mm}^3)$$

Calculate the **total enclosed electrical charge ($Q$)** contained entirely within this rectangular piece of silicon.

#### Solution:

To find the total enclosed charge, we must integrate the variable charge density function over the entire 3D volume of the rectangular region $E$:

$$Q = \iiint_{E} \rho_e(x,y,z) \, dV = \int_{0}^{2} \int_{0}^{2} \int_{0}^{1} x^2yz \, dz \, dy \, dx$$

Because the variables in the function are multiplied together ($x^2 \cdot y \cdot z$) and all the integration boundaries are strictly constant ranges, we can completely separate this triple integral into three independent single integrals:

$$Q = \left( \int_{0}^{2} x^2 \, dx \right) \times \left( \int_{0}^{2} y \, dy \right) \times \left( \int_{0}^{1} z \, dz \right)$$

**Step 1: Evaluate the $x$-integral**

$$\int_{0}^{2} x^2 \, dx = \left[ \frac{1}{3}x^3 \right]_{0}^{2} = \frac{8}{3}$$

**Step 2: Evaluate the $y$-integral**

$$\int_{0}^{2} y \, dy = \left[ \frac{1}{2}y^2 \right]_{0}^{2} = \frac{1}{2}(4) = 2$$

**Step 3: Evaluate the $z$-integral**

$$\int_{0}^{1} z \, dz = \left[ \frac{1}{2}z^2 \right]_{0}^{1} = \frac{1}{2}$$

**Step 4: Multiply the results together**

$$Q = \left( \frac{8}{3} \right) \times (2) \times \left( \frac{1}{2} \right) = \frac{8}{3} \approx 2.67 \text{ nanocoulombs}$$

#### Meaning of the Answer & Real-Life Application:

The total electrical charge trapped inside the silicon substrate block is $2.67\text{ nC}$. According to Gauss's Law (one of Maxwell's fundamental equations in electrical engineering), this net internal charge determines the total electric field flux exiting the faces of the silicon block.

By calculating this exact quantity, a microelectronics engineer can accurately simulate the device's parasitic capacitance and electrical voltage profiles. This directly dictates the signal-to-noise ratio of the sensor and ensures the chip will not experience unintended leakage currents or dielectric breakdown during operation.