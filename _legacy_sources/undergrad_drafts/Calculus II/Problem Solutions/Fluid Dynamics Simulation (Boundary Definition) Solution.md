**Scenario:** An aerospace engineer is designing a simulation to model the air pressure $P(v)$ over an experimental airplane wing at various airspeeds ($v$). The computational physics engine calculates pressure using a complex infinite series derived from the Navier-Stokes equations: 
$$ P(v) = \sum_{n=1}^{\infty} \frac{(v - 300)^n}{n \cdot 50^n} $$
Where $v$ is the velocity in meters per second, and the series is centered around the cruising speed of $300$ m/s. 

**Problem:** The engineer needs to know the exact operating envelope of this simulation. At what airspeeds will this mathematical model remain stable and output valid pressure data, and at what speeds will the simulation mathematically break down (diverge)?

**Solution:** Apply the Ratio Test to find the Interval of Convergence.
$$ \lim_{n \to \infty} \left| \frac{(v-300)^{n+1}}{(n+1)50^{n+1}} \cdot \frac{n \cdot 50^n}{(v-300)^n} \right| < 1 $$
$$ \lim_{n \to \infty} \left| \frac{(v-300)}{50} \cdot \frac{n}{n+1} \right| < 1 $$
As $n \to \infty$, $\frac{n}{n+1} \to 1$.
$$ \left| \frac{v-300}{50} \right| < 1 $$
$$ |v - 300| < 50 $$
This creates the interval:
$$ -50 < v - 300 < 50 $$
$$ 250 < v < 350 $$

**Meaning in Real-Life Application:**
The engineer has mathematically proven that the physics simulation is only valid for airspeeds strictly between $250$ m/s and $350$ m/s. If the simulation is run at $360$ m/s, the pressure polynomial will diverge to infinity, crashing the software or outputting physically impossible data (like infinite pressure). By defining this boundary, the engineer knows they must write *different* mathematical models for low-speed takeoff (e.g., centered at $100$ m/s) and supersonic flight.
