An aerospace engineer is designing a low-pressure turbine blade for a jet engine. To ensure the engine does not vibrate catastrophically at high angular velocities, the engineer must compute the mass moment of inertia of a cross-sectional panel. The geometric boundary of the blade component spans from $x = 0$ to $x = \frac{\pi}{4}$ meters, and its structural mass distribution requires evaluating the following definite integral:

$$I = \int_{0}^{\pi/4} x \cos(2x) \, dx$$

#### Solution:

1. **Execute Bidirectional Calculus Operations:**
* **Differentiate $u$:** $u = x \implies du = dx$
* **Integrate $dv$:** $dv = \cos(2x) \, dx \implies v = \frac{1}{2}\sin(2x)$


2. **Apply the Definite Integration by Parts Formula:**

$$\int_{0}^{\pi/4} x \cos(2x) \, dx = \left[ \frac{1}{2}x\sin(2x) \right]_{0}^{\pi/4} - \int_{0}^{\pi/4} \frac{1}{2}\sin(2x) \, dx$$


3. **Complete the Final Integration:** The integral of $\sin(2x)$ is $-\frac{1}{2}\cos(2x)$.

$$\int_{0}^{\pi/4} x \cos(2x) \, dx = \left[ \frac{1}{2}x\sin(2x) + \frac{1}{4}\cos(2x) \right]_{0}^{\pi/4}$$


4. **Evaluate at the Boundaries:**
* **Upper Limit $\left(x = \frac{\pi}{4}\right)$:** $\frac{1}{2}\left(\frac{\pi}{4}\right)\sin\left(\frac{\pi}{2}\right) + \frac{1}{4}\cos\left(\frac{\pi}{2}\right) = \frac{\pi}{8}(1) + \frac{1}{4}(0) = \frac{\pi}{8}$
* **Lower Limit $(x = 0)$:** $\frac{1}{2}(0)\sin(0) + \frac{1}{4}\cos(0) = 0 + \frac{1}{4}(1) = \frac{1}{4}$

$$\text{Total} = \frac{\pi}{8} - \frac{1}{4} \approx 0.3927 - 0.25 = 0.1427$$





#### Meaning of the Answer & Real-Life Application:

The value of $0.1427 \, \text{kg}\cdot\text{m}^2$ is the exact mass moment of inertia for this specific section of the turbine blade. By knowing this exact metric, the propulsion engineer can calculate the exact centrifugal stresses acting on the engine rotor at 12,000 RPM. This allows them to strategically place counter-weights or alter the blade's alloy thickness to guarantee it won't experience sudden mechanical failure mid-flight.
