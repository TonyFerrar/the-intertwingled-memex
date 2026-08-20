**Scenario:** An environmental engineer manages an equalization basin at a wastewater treatment plant. The rate of fluid flow into the basin minus the rate of pumping out creates a net flow rate function $Q(t)$ (measured in cubic meters per hour, $\text{m}^3/\text{hr}$). Over a critical $4$-hour maintenance shift, the net flow rate changes linearly:
$$Q(t) = 10 - 5t$$
The net area under this rate curve over the interval $[0, 4]$ hours represents the total volume change of water inside the storage basin.

**Question:** Compute the net change in water volume within the reservoir over the interval $[0, 4]$ hours using geometric net area.

**Step-by-Step Solution:**
1. Locate where the net flow rate drops to zero:
   $$10 - 5t = 0 \implies t = 2\text{ hours}$$
2. Split the interval $[0, 4]$ into two symmetric geometric regions:
   * **Positive Inflow Triangle ($t = 0$ to $t = 2$):** * Base = $2\text{ hours}$
     * Height = $Q(0) = 10\text{ m}^3/\text{hr}$
     * $\text{Area}_{\text{above}} = \frac{1}{2} \cdot 2 \cdot 10 = 10\text{ m}^3$
   * **Negative Outflow Triangle ($t = 2$ to $t = 4$):** * Base = $4 - 2 = 2\text{ hours}$
     * Height = $|Q(4)| = |10 - 5(4)| = |-10| = 10\text{ m}^3/\text{hr}$
     * $\text{Area}_{\text{below}} = \frac{1}{2} \cdot 2 \cdot 10 = 10\text{ m}^3$
3. Compute the Net Area:
   $$\text{Net Volume Change} = \text{Area}_{\text{above}} - \text{Area}_{\text{below}} = 10 - 10 = 0$$

#### 💡 Meaning of the Answer & Real-Life Application
* **Meaning of the Value:** A net area of $0\text{ m}^3$ indicates that at the exact end of the $4$-hour shift, the total volume of water inside the basin has returned to the precise level it was at when the shift began.
* **Real-Life Application:** Even though hundreds of gallons of water flowed through the system, the net accumulation is perfectly zeroed out. Plant engineers rely heavily on calculating net zeros to program automated pumping loops. Ensuring that positive inflow area exactly mirrors negative outflow area prevents water treatment reservoirs from overflowing (creating environmental hazards) or completely draining dry (damaging expensive pump hardware).