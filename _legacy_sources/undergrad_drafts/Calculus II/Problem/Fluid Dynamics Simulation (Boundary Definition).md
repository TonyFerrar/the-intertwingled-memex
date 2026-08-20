**Scenario:** An aerospace engineer is designing a simulation to model the air pressure $P(v)$ over an experimental airplane wing at various airspeeds ($v$). The computational physics engine calculates pressure using a complex infinite series derived from the Navier-Stokes equations: 
$$ P(v) = \sum_{n=1}^{\infty} \frac{(v - 300)^n}{n \cdot 50^n} $$
Where $v$ is the velocity in meters per second, and the series is centered around the cruising speed of $300$ m/s. 

**Problem:** The engineer needs to know the exact operating envelope of this simulation. At what airspeeds will this mathematical model remain stable and output valid pressure data, and at what speeds will the simulation mathematically break down (diverge)?