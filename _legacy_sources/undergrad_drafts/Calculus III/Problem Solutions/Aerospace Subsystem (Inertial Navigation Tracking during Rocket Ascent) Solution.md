**Problem:** A sounding rocket launches into the upper atmosphere to drop sensor payloads. Its guidance computer tracks the velocity vector through telemetry streaming from an IMU sensor during a crucial thrust maneuver between $t = 1$ and $t = 4$ seconds:
$$\vec{v}(t) = \left[ 4t^3\hat{i} + (2t + 6)\hat{j} + 10e^{0.5t}\hat{k} \right] \text{ m/s}$$
Evaluate the definite integral over the active thruster timeline $[1, 4]$ to determine the total 3D displacement vector $\Delta\vec{r}$ of the vehicle.

**Solution:**
Set up and evaluate the definite integral for each coordinate plane independently:
$$\Delta\vec{r} = \int_{1}^{4} \vec{v}(t) \, dt$$

1. **Evaluate the $\hat{i}$-component (Horizontal Track):**
   $$\int_{1}^{4} 4t^3 \, dt = \Big[ t^4 \Big]_{1}^{4} = (4)^4 - (1)^4 = 256 - 1 = 255$$
2. **Evaluate the $\hat{j}$-component (Crosswind Drift):**
   $$\int_{1}^{4} (2t + 6) \, dt = \Big[ t^2 + 6t \Big]_{1}^{4} = \left[(4)^2 + 6(4)\right] - \left[(1)^2 + 6(1)\right] = [16 + 24] - [1 + 6] = 40 - 7 = 33$$
3. **Evaluate the $\hat{k}$-component (Vertical Elevation Ascent):**
   $$\int_{1}^{4} 10e^{0.5t} \, dt = \left[ \frac{10}{0.5}e^{0.5t} \right]_{1}^{4} = \Big[ 20e^{0.5t} \Big]_{1}^{4} = 20e^{2} - 20e^{0.5} \approx 20(7.389) - 20(1.649) = 147.78 - 32.98 = 114.8$$

Combine the net changes into the displacement vector:
$$\Delta\vec{r} = 255\hat{i} + 33\hat{j} + 114.8\hat{k} \text{ meters}$$

**Meaning of the Answer & Real-Life Application:**
The calculated vector result $\Delta\vec{r} = \langle 255, \, 33, \, 114.8 \rangle \text{ m}$ represents the exact **net displacement change** in the rocket's position over the 3-second thrust window. 
Guidance and control engineers utilize this integrated definite result to perform **inertial dead reckoning updates**. It tells the mission control safety software that during this brief thrust interval, the rocket surged 255 meters forward along its primary heading ($x$), drifted 33 meters laterally due to atmospheric wind shears ($y$), and gained 114.8 meters in vertical altitude ($z$). This allows the trajectory safety systems to verify that the rocket is ascending safely within its projected downrange corridor rather than veering off-course into populated airspace boundaries.