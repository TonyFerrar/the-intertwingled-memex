**Scenario:** An aerospace engineer is analyzing data from a model rocket test flight. The rocket's upward acceleration $a(t)$ (in meters per second squared, $\text{m/s}^2$) during the first 3 seconds of booster ignition is tracked by the following time-dependent function:
$$a(t) = 6t - t^2$$
According to kinematic physics, the definite integral of an acceleration function over a time interval yields the net change in velocity ($\Delta v = v(b) - v(a)$).

**Question:** If the rocket starts from rest ($v(0) = 0$), use the FTOC to compute its exact velocity at $t = 3$ seconds.

**Step-by-Step Solution:**
1. Set up the definite integral for velocity change over the interval $[0, 3]$:
   $$\Delta v = \int_{0}^{3} (6t - t^2) \, dt$$
2. Determine the antiderivative using the Power Rule:
   $$V(t) = 3t^2 - \frac{1}{3}t^3$$
3. Apply the FTOC brackets:
   $$\int_{0}^{3} (6t - t^2) \, dt = \left[ 3t^2 - \frac{1}{3}t^3 \right]_{0}^{3}$$
4. Evaluate at the upper bound ($t = 3$):
   $$F(3) = 3(3)^2 - \frac{1}{3}(3)^3 = 3(9) - \frac{1}{3}(27) = 27 - 9 = 18$$
5. Evaluate at the lower bound ($t = 0$):
   $$F(0) = 3(0)^2 - \frac{1}{3}(0)^3 = 0$$
6. Subtract lower from upper:
   $$\Delta v = 18 - 0 = 18\text{ m/s}$$

#### 💡 Meaning of the Answer & Real-Life Application
* **Meaning of the Value:** The answer of $18\text{ m/s}$ indicates that the rocket's speed increased by exactly 18 meters per second over the 3-second ignition window. Since it started from rest, its velocity at $t = 3$ is exactly $18\text{ m/s}$.
* **Real-Life Application:** Aerospace engineers use telemetry data to verify that solid fuel rocket boosters are burning at the correct rate. If the computed velocity change from the integral doesn't match the design parameters, it indicates a defect in fuel chemistry or nozzle geometry. This informs engineers whether the payload will successfully reach its target orbit or if the launch sequence must abort.
