An ocean engineer programs the cruise-control algorithm for an Autonomous Underwater Vehicle (AUV) mapping seafloor topography. The algorithm tracks the net electrical energy consumption rate $E$ (in watt-hours per kilometer) relative to the vehicle's forward cruising velocity $v$ (in knots). The hydrodynamics of the hull and the physical operating speeds of the thruster constrain the domain to the open velocity interval $(2, 30)$ knots. The energy profile is precisely modeled by the function:

$$E(v) = \frac{2000}{v} + v^2 \quad \text{for} \quad 2 < v < 30$$

Using sign analysis and the First Derivative Test, find the **absolute minimum energy consumption value** and its **location**, and explain how this application is used in mission planning.

#### **Solution:**
**Step 1: Find the derivative.**
Rewrite the function as $E(v) = 2000v^{-1} + v^2$.
$$E'(v) = -2000v^{-2} + 2v = -\frac{2000}{v^2} + 2v = \frac{2v^3 - 2000}{v^2}$$

**Step 2: Locate critical numbers.**
Set the derivative equal to $0$:
$$\frac{2v^3 - 2000}{v^2} = 0 \implies 2v^3 - 2000 = 0 \implies v^3 = 1000 \implies v = 10\text{ knots}$$
*(We ignore negative roots or complex roots since velocity must be a real positive number within our interval).*

**Step 3: Construct a sign chart for $E'(v)$ around $v = 10$.**
* **Interval $(2, 10)$:** Test $v = 5 \implies E'(5) = -\frac{2000}{5^2} + 2(5) = -80 + 10 = -70 < 0 \quad (-)$
* **Interval $(10, 30)$:** Test $v = 20 \implies E'(20) = -\frac{2000}{20^2} + 2(20) = -5 + 40 = +35 > 0 \quad (+)$


**Step 4: Classify the extremum.**
The derivative changes from negative to positive at $v = 10$, proving a relative minimum exists. Because $v = 10$ is the single critical point within the open interval $(2, 30)$, it represents the absolute minimum.
* **Absolute Minimum Value:** $E(10) = \frac{2000}{10} + 10^2 = 200 + 100 = 300\text{ watt-hours per kilometer}$

#### **Meaning & Application:**
The absolute minimum value of $300\text{ Wh/km}$ represents the **maximum range operating state** of the underwater vehicle. In real-world marine exploration, knowing the location of $v = 10\text{ knots}$ gives engineers the optimal velocity baseline for battery preservation. Programming the AUV to cruise at exactly 10 knots balances the mechanical drag forces of water resistance against the baseline electrical draw of the onboard computers, maximizing the distance the drone can travel on a single charge and allowing it to map significantly more ocean floor before requiring surface retrieval.
