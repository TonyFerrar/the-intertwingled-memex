**Problem Description:** An automated defense radar system is tracking an inbound supersonic drone moving horizontally at a constant altitude of $8\text{ km}$ above the ground. The radar dish is locked onto the target. At the precise moment the straight-line distance (slant range) from the radar station to the drone is $10\text{ km}$, the radar instruments detect that the target is closing in, causing the slant range distance to decrease at a rate of $400\text{ m/s}$ ($0.4\text{ km/s}$). Determine the actual horizontal speed of the drone.

#### Mathematical Modeling Solution:
1. **Identify Variables:** Let $x$ be the horizontal distance from the radar station to the drone ($\text{km}$), $y$ be the vertical altitude ($\text{km}$), and $z$ be the straight-line slant range ($\text{km}$).
2. **Given Data & Goal:** $\frac{dz}{dt} = -0.4\text{ km/s}$ (negative because the distance is decreasing). The altitude is static ($y = 8\text{ km}$, meaning $\frac{dy}{dt} = 0$). At the snapshot, $z = 10\text{ km}$. Find $\frac{dx}{dt}$.
3. **Primary Equation:** $$x^2 + y^2 = z^2$$
   Since $y$ is static, plug it in before differentiating:
   $$x^2 + 8^2 = z^2 \implies x^2 + 64 = z^2$$
4. **Differentiation & Calculation:** $$2x\frac{dx}{dt} = 2z\frac{dz}{dt} \implies x\frac{dx}{dt} = z\frac{dz}{dt}$$
   Find the snapshot value of $x$: $x^2 + 64 = 10^2 \implies x^2 = 36 \implies x = 6\text{ km}$.
   $$6\frac{dx}{dt} = 10(-0.4) \implies 6\frac{dx}{dt} = -4 \implies \frac{dx}{dt} = -\frac{4}{6} = -0.667\text{ km/s}$$

#### Meaning of the Answer & Real-Life Application:
* **The Meaning:** The horizontal distance between the radar station and the drone is shrinking at a speed of $0.667\text{ kilometers per second}$ (which translates to $2,400\text{ km/h}$ or roughly Mach 2).
* **Real-Life Engineering Application:** Aerospace and defense software engineers code these exact geometric relations directly into target acquisition microcontrollers. Because radar sensors can only easily measure the raw direct return time of a radio ping ($\frac{dz}{dt}$), related rates equations are mandatory to calculate the true horizontal velocity vector ($\frac{dx}{dt}$) of the target. Without this processing layer, anti-missile intercept systems would calculate intercept trajectories incorrectly, causing them to fire behind or ahead of the threat.
