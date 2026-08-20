Mechanical engineers design municipal water pipelines to avoid a destructive phenomenon known as fluid cavitation. Cavitation happens when liquid velocity surges so violently that the localized fluid pressure collapses to zero, instantly vaporizing the water into pockets of gas that implode and pit the steel walls of the pipe. 

The kinetic pressure profile $P$ inside a high-velocity flow restriction venturi nozzle over a spatial position coordinate $x$ near a narrow channel choke point is modeled by the tracking function:
$$P(x) = \frac{200}{x^2 - 4x - 12}$$
Analyze the continuity profile of this hydraulic system. Find the positive position $x$ where a discontinuity occurs, classify its specific type, and determine the structural hazard it poses to the pipeline.



#### Step-by-Step Solution:
* **Step 1: Locate domain restrictions.** Discontinuities in rational functions occur where the denominator evaluates to zero:
  $$x^2 - 4x - 12 = 0$$
  Factor the quadratic equation:
  $$(x - 6)(x + 2) = 0 \implies x = 6 \quad \text{and} \quad x = -2$$
  Since spatial distances inside the nozzle must be positive metrics, we isolate our analysis to the boundary coordinate **$x = 6$**.
* **Step 2: Evaluate the limit behavior as $x \to 6$.** Check the directional limit trends surrounding this index:
  * As $x \to 6^{-}$, the denominator approaches $0$ through negative values, causing the pressure equation to drop dramatically:
    $$\lim_{x \to 6^{-}} \frac{200}{(x - 6)(x + 2)} = -\infty$$
  * As $x \to 6^{+}$, the denominator approaches $0$ through positive values, causing the function to spike:
    $$\lim_{x \to 6^{+}} \frac{200}{(x - 6)(x + 2)} = \infty$$
* **Step 3: Classify the discontinuity.** Because the outputs drive toward infinite boundaries on either side of the coordinate, a vertical asymptote forms.

#### Engineering Conclusion:
The pipeline pressure profile exhibits an **infinite discontinuity** at $x = 6$. For a mechanical engineer, this vertical asymptote indicates a critical physical threshold where the fluid dynamics model completely breaks down due to an absolute structural pressure drop. At this coordinate, severe cavitation will rip through the fluid stream. Engineers use this discontinuity mapping to modify the physical geometry of the valve or inject a back-pressure buffer before $x=6$ to prevent the pipe from tearing itself apart.