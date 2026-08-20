A planetary exploration rover maneuvers along a straight axis on Mars. Its onboard telemetry logs its velocity $v(t)$ in centimeters per second ($\text{cm/s}$) over a $10\text{-second}$ window.

- From $t = 0$ to $t = 6$, it moves forward, mapping out a positive trapezoidal region with a bottom base of $6\text{ s}$, a top flat peak base of $2\text{ s}$ (from $t = 2$ to $t = 4$), and a maximum forward speed of $+5\text{ cm/s}$.
    
- From $t = 6$ to $t = 10$, the wheels reverse to back away from an obstacle, forming a triangle below the axis with a base of $4\text{ s}$ and a peak reverse velocity of $-4\text{ cm/s}$.
    

Determine the rover's final position relative to its start by calculating its net displacement:

$$\int_{0}^{10} v(t) \, dt$$

#### Step-by-Step Solution:

1. **Calculate Forward Displacement ($t = 0$ to $t = 6$):**
    
    - Trapezoid Area: $\frac{1}{2} \times (b_1 + b_2) \times h = \frac{1}{2} \times (6 + 2) \times 5 = 20\text{ cm}$ (Positive)
        
2. **Calculate Reverse Displacement ($t = 6$ to $t = 10$):**
    
    - Triangle Area: $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 4 \times 4 = 8\text{ cm}$ (Negative)
        
3. **Compute Net Displacement:**
    
    $$\int_{0}^{10} v(t) \, dt = 20 - 8 = +12\text{ cm}$$
    

#### Engineering Meaning of the Answer:

> The net signed area equals **$+12\text{ cm}$**. This value informs the rover's automated guidance computer that it is located exactly $12\text{ cm}$ directly ahead of its initial starting point. Note that the total _physical distance_ traveled by the wheels was $28\text{ cm}$ ($20 + 8$), but the net signed area filters out the backtracking to maintain an accurate internal map tracking position via dead reckoning navigation.