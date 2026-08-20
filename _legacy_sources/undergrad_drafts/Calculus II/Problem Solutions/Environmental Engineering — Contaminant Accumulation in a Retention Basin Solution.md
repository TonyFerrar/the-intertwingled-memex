During a manufacturing plant malfunction, a valve slips and begins leaking an acidic industrial solvent into a municipal emergency retention pond. Over an 8-hour emergency repair shift, the rate of the chemical leak drops continuously as technicians slowly tighten secondary manual isolation valves. The rate of the leak is modeled by the function:
$$L'(t) = \frac{100}{t+1}\text{ liters/hour}$$
where $t$ represents hours ($0 \le t \le 8$). Before the accident began, the pond already contained $50\text{ liters}$ of stagnant, neutralized chemical runoff from an earlier rainstorm. Calculate the total volume of solvent present in the pond at the end of the 8-hour shift.

#### Calculus Setup & Solution:
1. **Apply the Net Change Theorem:** The total volume at $t = 8$ is given by:
   $$V(8) = V(0) + \int_{0}^{8} \frac{100}{t+1} \, dt$$
2. **Evaluate the integral:** Using the natural log integration rule $\int \frac{1}{u} \, du = \ln|u|$:
   $$\int_{0}^{8} \frac{100}{t+1} \, dt = \left[ 100 \ln|t+1| \right]_{0}^{8}$$
   $$\text{Net Leakage} = 100 \ln(8+1) - 100 \ln(0+1) = 100 \ln(9) - 100 \ln(1)$$
3. **Compute the numerical value:** Since $\ln(1) = 0$ and $\ln(9) \approx 2.1972$:
   $$\text{Net Leakage} \approx 100(2.1972) - 0 = 219.72\text{ liters}$$
4. **Determine the final total volume:**
   $$V(8) = 50\text{ liters} + 219.72\text{ liters} = 269.72\text{ liters}$$

#### Meaning of the Answer & Real-Life Engineering Application:
* **The Meaning:** The integral shows that despite the engineers successfully reducing the severity of the leak over time, an additional **$219.72\text{ liters}$** of pure toxic solvent accumulated in the pond, resulting in a total final volume of **$269.72\text{ liters}$**.
* **The Engineering Application:** Environmental engineers use these accumulation totals to prevent ecological catastrophes. Retention basins are designed with strict maximum volume capacities and chemical threshold limits before they overflow into local water tables or rivers. By executing this integral, engineers calculate the exact scale of the cleanup required. This number dictates the size and quantity of emergency vacuum tanker trucks that must be dispatched to the scene, and tells chemical engineers exactly how many kilograms of basic neutralizing agents (like lime or sodium bicarbonate) must be added to the pond to neutralize the accumulated $269.72\text{ L}$ of acid before it breaches the containment borders.