An electrical engineer is measuring the total energy dissipation inside an AC filtering capacitor bank over a standard cycle. Through circuit analysis, the total energy calculation simplifies to a pure trigonometric integral representing the square of the periodic voltage wave:


$$E = \int_{0}^{\pi/2} 12\cos^2\theta \, d\theta$$


Calculate the exact energy value ($E$).

#### Step-by-Step Solution:

1. **Identify the Required Identity:** To integrate an even power of a cosine function, invoke the half-angle power-reduction identity:



$$\cos^2\theta = \frac{1 + \cos2\theta}{2}$$


2. **Restructure the Definite Integral:**

$$E = \int_{0}^{\pi/2} 12 \left( \frac{1 + \cos2\theta}{2} \right) d\theta = 6 \int_{0}^{\pi/2} (1 + \cos2\theta) \, d\theta$$


3. **Integrate Term-by-Term:**

$$6 \left[ \theta + \frac{1}{2}\sin2\theta \right]_{0}^{\pi/2}$$


4. **Evaluate the Definite Limits:**

$$6 \left[ \left( \frac{\pi}{2} + \frac{1}{2}\sin(\pi) \right) - \left( 0 + \frac{1}{2}\sin(0) \right) \right] = 6 \left[ \frac{\pi}{2} + 0 - 0 \right] = 3\pi$$



#### Meaning of the Answer & Real-Life Application:

> The resulting mathematical evaluation of $3\pi \approx 9.42\text{ Joules}$ defines the net thermal energy accumulation inside the hardware during a single operational half-cycle. Electrical engineers use this calculation to design thermal cooling systems and select proper capacitor power ratings. If the integration of these wave patterns is miscalculated, the component may overheat and suffer a catastrophic thermal breakdown under high-frequency operation.
