**Problem:** An aerospace engineer is analyzing data from a static test fire of a maneuvering thruster. Over a 6-second window, the data tracking system logs the variable thrust profile $F(t) = t^2 + 10$ Newtons. The software takes data measurements at timestamps $t = \{1, 3, 5\}$ seconds, representing 2-second sampling intervals ($\Delta t = 2$). 
1. Set up the summation expression to approximate total impulse using factored Sigma notation.
2. Evaluate the heights (thrust values) and compute the accumulated numerical answer.

**Solution:**
1. **Set up the Sigma notation:**
   $$\text{Impulse} \approx \Delta t \sum_{i=1}^{3} F(t_i) = 2 \cdot [F(1) + f(3) + F(5)]$$
2. **Evaluate and compute:**
   Evaluate $F(t) = t^2 + 10$:
   * $F(1) = 1^2 + 10 = 11\text{ N}$
   * $F(3) = 3^2 + 10 = 19\text{ N}$
   * $F(5) = 5^2 + 10 = 35\text{ N}$
   
   Calculate the total sum:
   $$\text{Impulse} \approx 2 \cdot [11 + 19 + 35] = 2 \cdot [65] = 130\text{ N}\cdot\text{s}$$

**Meaning of the Answer & Real-Life Application:**
The calculated answer of $130\text{ N}\cdot\text{s}$ represents the *Total Impulse* delivered by the thruster during the test window. In aerospace engineering, impulse measures the overall change in momentum given to a spacecraft. By utilizing summation mechanics to process discrete thrust logs, engineers can calculate if a satellite's thruster has generated enough cumulative force to successfully change orbits or execute an attitude adjustment maneuver without wasting onboard chemical fuel.