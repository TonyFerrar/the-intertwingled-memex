An electronic systems engineer tests the thermal profile of a high-power gallium-nitride (GaN) transistor during a scheduled 6-second operational duty cycle. The internal junction temperature $T$ (in degrees Celsius, $^\circ\text{C}$) over the closed time interval $[0, 6]$ seconds is precisely modeled by the function:

$$T(t) = t^3 - 9t^2 + 15t + 100 \quad \text{for} \quad 0 \le t \le 6$$

Using the Closed Interval Method Algorithm, find the **absolute maximum temperature** and **absolute minimum temperature** along with their exact **locations**, and explain how this impacts component safety and diagnostic testing.

#### **Solution:**

- **Step 1: Continuity and Domain.** $T(t)$ is a polynomial function (continuous everywhere) on the closed interval $[0, 6]$.
    
- **Step 2: Differentiate.**
    
    $$T'(t) = 3t^2 - 18t + 15$$
    
- **Step 3: Locate and filter critical points.**
    
    Set $T'(t) = 0$:
    
    $$3(t^2 - 6t + 5) = 0 \implies 3(t - 1)(t - 5) = 0 \implies t = 1 \quad \text{and} \quad t = 5$$
    
    Both timing marks $t = 1\text{ s}$ and $t = 5\text{ s}$ fit within the interior interval $(0, 6)$.
    
- **Step 4: Evaluate the original temperature function $T(t)$ at all candidates.**
    
    - **Cycle Start Boundary ($t = 0$):** $T(0) = (0)^3 - 9(0)^2 + 15(0) + 100 = 100^\circ\text{C}$
        
    - **First Critical Point ($t = 1$):** $T(1) = (1)^3 - 9(1)^2 + 15(1) + 100 = 1 - 9 + 15 + 100 = 107^\circ\text{C}$
        
    - **Second Critical Point ($t = 5$):** $T(5) = (5)^3 - 9(5)^2 + 15(5) + 100 = 125 - 225 + 75 + 100 = 75^\circ\text{C}$
        
    - **Cycle End Boundary ($t = 6$):** $T(6) = (6)^3 - 9(6)^2 + 15(6) + 100 = 216 - 324 + 90 + 100 = 82^\circ\text{C}$
        
- **Step 5: Compare results.**
    
    - **Absolute Maximum Thermal Value:** $107^\circ\text{C}$ occurring at time location $t = 1\text{ second}$.
        
    - **Absolute Minimum Thermal Value:** $75^\circ\text{C}$ occurring at time location $t = 5\text{ seconds}$.
        

#### **Meaning & Application:**

The absolute maximum value of $107^\circ\text{C}$ is the critical diagnostic indicator for component safety. The engineer compares this peak output against the silicon substrate's maximum safe rated ceiling (e.g., $125^\circ\text{C}$) to ensure the microchip will not melt or undergo permanent thermal breakdown during execution. Conversely, finding the absolute minimum location at $t = 5\text{ seconds}$ where the temperature drops to $75^\circ\text{C}$ reveals the exact moment the transistor is coolest due to circuit phase shifting. The engineer applies this calculus baseline to program precise low-noise signal calibration readings exactly at the 5-second mark, when thermal electronic interference is at its absolute lowest level.