A civil engineer manages a drinking water reservoir during an intense summer storm cycle. Runoff from surrounding hills streams into the basin, while water is simultaneously discharged through spillway gates to prevent structural failure. The net rate of change of the water volume is given by the function $V'(t) = 100t - 3t^2$ liters per minute, where $t$ is the duration of the storm in minutes.

- Compute the net change in water volume inside the reservoir during the first 4 minutes of the storm.
    

### Solution to Engineering Problem 2

Apply the Net Change Theorem to the net volumetric rate function over the time interval $[0, 4]$:

$$\text{Net Change} = \int_{0}^{4} (100t - 3t^2) \, dt$$

Find the antiderivative using the power rule:

$$F(t) = 50t^2 - t^3$$

Evaluate from $0$ to $4$:

$$\text{Net Change} = \left[ 50t^2 - t^3 \right]_{0}^{4}$$

$$\text{Net Change} = \left( 50(4)^2 - (4)^3 \right) - 0$$

$$\text{Net Change} = (50(16) - 64) = 800 - 64 = 736 \text{ liters}$$

**Meaning & Real-Life Application:** The result of 736 liters means that during the first 4 minutes of the storm, the reservoir experienced a net gain of 736 liters of water. In hydraulic engineering, calculating this net volumetric accumulation is essential for flood routing calculations and infrastructure protection. If the net accumulation exceeds the safety thresholds of the dam's retaining walls, engineers must open additional auxiliary spillway gates to intentionally increase the outflow rate, ensuring the structural integrity of the dam is maintained.