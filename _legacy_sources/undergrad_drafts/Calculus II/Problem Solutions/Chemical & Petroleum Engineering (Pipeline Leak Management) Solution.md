A high-pressure crude oil pipeline develops a subsurface structural fracture. Environmental monitoring systems show that oil is escaping into the containment field at a decaying rate modeled by the rational function $Q'(t) = \frac{-60}{(t+3)^2}$ thousand gallons per hour, where $t \ge 0$ is the time in hours since the breach occurred.

- Calculate the total volume of oil that escapes the pipeline between the 2nd hour and the 7th hour of the spill.
    

### Solution to Engineering Problem 1

To isolate the total volume of fluid lost, integrate the magnitude (absolute value) of the leakage rate over the interval $[2, 7]$:

$$\text{Volume Lost} = \int_{2}^{7} \frac{60}{(t+3)^2} \, dt$$

Rewrite the fraction with a negative exponent to prepare it for integration:

$$\text{Volume Lost} = \int_{2}^{7} 60(t+3)^{-2} \, dt$$

Integrate using the basic power rule:

$$F(t) = \frac{60(t+3)^{-1}}{-1} = -\frac{60}{t+3}$$

Evaluate across the definite boundaries:

$$\text{Volume Lost} = \left[ -\frac{60}{t+3} \right]_{2}^{7}$$

$$\text{Volume Lost} = \left( -\frac{60}{7+3} \right) - \left( -\frac{60}{2+3} \right)$$

$$\text{Volume Lost} = \left( -\frac{60}{10} \right) - \left( -\frac{60}{5} \right) = -6 - (-12) = 6 \text{ thousand gallons}$$

**Meaning & Real-Life Application:** The calculated net change of 6 thousand gallons (or 6,000 gallons) signifies the precise quantity of hazardous material that contaminated the local ecosystem during that 5-hour window. Chemical and safety engineers use this data to perform Environmental Impact Assessments (EIAs). Knowing the exact volume of contaminant dictates the scale of the cleanup operation, the amount of neutralizing agents required, and helps determine the legal and financial liabilities under environmental safety regulations.