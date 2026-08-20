Chemical engineers monitor the thermal energy profiles inside chemical batch reactors. If an exotic reaction shifts from endothermic (absorbing heat) to sharply exothermic (generating heat), the core internal temperature $T$ over an elapsed time tracking index $x$ near a critical catalytic mixing point can be modeled by a tracking function:
$$T(x) = \frac{8}{x^2 - x - 6}$$
Analyze the continuity profile of this reactor system. Find the positive $x$-value where a discontinuity occurs, classify its specific type, and determine the structural safety hazard it represents.

#### Step-by-Step Solution:
* **Step 1: Locate domain restrictions.** Discontinuities in rational functions occur where the denominator is forced to zero:
  $$x^2 - x - 6 = 0$$
  Factor the quadratic equation:
  $$(x - 3)(x + 2) = 0 \implies x = 3 \quad \text{and} \quad x = -2$$
  Since time metrics must be positive, we focus our safety analysis on the boundary **$x = 3$**.
* **Step 2: Evaluate the limit behavior as $x \to 3$.** Check the directional limits surrounding this index:
  * As $x \to 3^{-}$, the denominator approaches $0$ through negative values, causing the function to dive:
    $$\lim_{x \to 3^{-}} \frac{8}{(x - 3)(x + 2)} = -\infty$$
  * As $x \to 3^{+}$, the denominator approaches $0$ through positive values, causing the function to skyrocket:
    $$\lim_{x \to 3^{+}} \frac{8}{(x - 3)(x + 2)} = \infty$$
* **Step 3: Classify the discontinuity.** Because the outputs drive toward infinite values, a vertical asymptote forms at the coordinate boundary.

#### Engineering Conclusion:
The reactor system exhibits an **infinite discontinuity** at $x = 3$. This indicates a localized thermal runaway threshold where the theoretical temperature spikes infinitely high. Chemical engineers use this data to program automated pneumatic safety relief valves that vent the vessel at $x = 2.99$, ensuring the system never reaches the catastrophic infinite boundary.