**Problem:** An industrial smart meter records the fluctuating power consumption of a manufacturing plant over a 2-hour production shift (the interval $[0, 2]$ hours). Because the power draws spike up and down unpredictably, the meter samples the factory's power usage at 3 separate milestones ($n = 2$ intervals, so $\Delta t = 1 \text{ hour}$):

- At $t_0 = 0 \text{ hr}$, Power $P_0 = 45 \text{ kW}$
    
- At $t_1 = 1 \text{ hr}$, Power $P_1 = 60 \text{ kW}$
    
- At $t_2 = 2 \text{ hr}$, Power $P_2 = 50 \text{ kW}$
    

Use the Trapezoidal Rule to approximate the total electrical energy consumed by the plant during this shift.

**Step-by-Step Solution:**

1. **Identify parameters:** $\Delta t = 1 \text{ hour}$, $y_0 = 45$, $y_1 = 60$, $y_2 = 50$.
    
2. **Apply the Trapezoidal formula:**
    
    $$T(2) = \frac{\Delta t}{2} \left[ y_0 + 2y_1 + y_2 \right]$$
    
    $$T(2) = \frac{1}{2} \left[ 45 + 2(60) + 50 \right]$$
    
    $$T(2) = 0.5 \left[ 45 + 120 + 50 \right]$$
    
    $$T(2) = 0.5 \left[ 215 \right] = 107.5 \text{ kWh}$$
    

**Meaning of the Answer & Real-Life Application:**

The answer of $107.5 \text{ kWh}$ represents the total cumulative electrical energy expended by the plant during the 2-hour operating window. Because power grids operate dynamically, electrical utility companies run these trapezoidal approximations across millions of nodes every second. Calculating this area allows power providers to accurately bill industrial clients, predict shifting local load surges, and scale electrical grid output up or down in real time to prevent cascading city-wide blackouts.