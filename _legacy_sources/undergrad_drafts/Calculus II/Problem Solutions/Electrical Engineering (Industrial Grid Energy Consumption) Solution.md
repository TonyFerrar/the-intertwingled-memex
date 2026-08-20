**Problem:** A power plant monitor tracks the fluctuating electrical draw of a manufacturing facility over a 4-hour operating period. The power draw function is defined as $P(t) = 4t$ Megawatts (MW). Readings are recorded at hours $t = \{1, 2, 3, 4\}$ meaning the time intervals are precisely 1 hour long ($\Delta t = 1$).
1. Write the energy accumulation expression in compact Sigma notation.
2. Evaluate the power draws and calculate the total energy consumed in Megawatt-hours (MWh).

**Solution:**
1. **Set up the Sigma notation:**
   $$\text{Energy} \approx \Delta t \sum_{i=1}^{4} P(t_i) = 1 \cdot \sum_{i=1}^{4} 4(i)$$
2. **Evaluate and compute:**
   Evaluate $P(t) = 4t$ at each point:
   * $P(1) = 4(1) = 4\text{ MW}$
   * $P(2) = 4(2) = 8\text{ MW}$
   * $P(3) = 4(3) = 12\text{ MW}$
   * $P(4) = 4(4) = 16\text{ MW}$
   
   Calculate the total sum:
   $$\text{Energy} \approx 1 \cdot [4 + 8 + 12 + 16] = 1 \cdot [40] = 40\text{ MWh}$$

**Meaning of the Answer & Real-Life Application:**
The calculation reveals that the factory consumed $40\text{ MWh}$ of total electrical energy over the 4-hour shift. Because factories turn heavy machinery on and off, power demand fluctuates continuously. Electrical engineers use this exact summation technique to process data logs from smart meters. This enables power plants to calculate total usage patterns, bill industrial clients accurately, and adjust generator outputs to prevent power grid overloads and blackouts.