**Scenario:** A mechanical engineer is testing a high-speed industrial grinding wheel. The position of a loose particle on the rim of the spinning wheel is defined by:
$x(t) = 10\cos(5t)$
$y(t) = 10\sin(5t)$
where $x$ and $y$ are in centimeters and $t$ is time in seconds.

**Problem:** If the particle detaches from the wheel at exactly $t = \frac{\pi}{20}$ seconds, it will fly off in a straight line tangent to the wheel. What is the slope of its trajectory the moment it detaches?

**Solution:**
1. Find $\frac{dx}{dt}$ and $\frac{dy}{dt}$:
   $\frac{dx}{dt} = -50\sin(5t)$
   $\frac{dy}{dt} = 50\cos(5t)$
2. Apply the theorem to find $\frac{dy}{dx}$:
   $\frac{dy}{dx} = \frac{50\cos(5t)}{-50\sin(5t)} = -\cot(5t)$
3. Evaluate at $t = \frac{\pi}{20}$:
   $\frac{dy}{dx}\bigg|_{t=\frac{\pi}{20}} = -\cot\left(5 \cdot \frac{\pi}{20}\right) = -\cot\left(\frac{\pi}{4}\right) = -1$

**Meaning & Real-Life Application:**
The math dictates that at the exact moment of detachment, the particle will fly off at a slope of $-1$ (a 45-degree downward angle). For the engineer, calculating this exact trajectory is a matter of safety. Knowing the exact path of potential debris allows them to design and position protective safety guards around the machinery to intercept high-speed projectiles before they can harm operators or damage other equipment.