**Problem:** An autonomous package-delivery drone descends toward an urban landing pad. Its three-dimensional approach vector over a automated tracking timeline $t$ (measured in seconds) is planned using the vector-valued position function:
$$\vec{r}(t) = \left\langle \ln(t - 1), \, \sqrt{18 - 2t}, \, \frac{420}{t^2 - 25} \right\rangle$$
Determine the mathematically valid operational domain for this flight trajectory.

**Solution:**
1. **$x$-component (Telemetry Link):** The logarithmic argument must be positive: $t - 1 > 0 \implies t > 1$.
2. **$y$-component (Thruster Envelope):** The square root requires: $18 - 2t \ge 0 \implies 18 \ge 2t \implies t \le 9$.
3. **$z$-component (Altitude Descent Geometry):** The rational denominator cannot equal zero: $t^2 - 25 \neq 0 \implies (t - 5)(t + 5) \neq 0 \implies t \neq 5$ and $t \neq -5$.

**Intersection Analysis:**
Overlaying $t > 1$ and $t \le 9$ builds the standard operational interval $(1, 9]$. The value $t = -5$ falls completely outside this window, but the value $t = 5$ falls directly within it and must be excluded.
* **Operational Domain:** $(1, 5) \cup (5, 9]$

**Meaning of the Answer & Real-Life Application:**
The resulting domain tells the aerospace software engineer that the automated path can only safely operate between $1$ and $9$ seconds after launch sequence initiation, with a critical mathematical exclusion exactly at $t = 5$ seconds. 
* Physically, $t = 1$ is the absolute boundary where the tracking telemetry signal initializes. 
* The upper ceiling at $t = 9$ represents the point where aerodynamic lift equations hit a boundary constraint due to zero ground clearance.
* The critical exclusion at $t = 5$ marks a mathematical **control singularity**—a layout orientation where the drone's physical rotational axes overlap (gimbal lock). At this exact microsecond, the control matrix equations divide by zero, causing the autopilot to lose tracking stability. Flight engineers use this domain to program a trajectory patch that bypasses or bridges the flight path over $t = 5$ seconds to prevent a crash.
