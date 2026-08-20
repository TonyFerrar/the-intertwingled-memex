A hardware engineer is optimizing the placement of components on a square microchip substrate. The chip occupies the closed region defined by $-2 \le x \le 2$ and $-2 \le y \le 2$ (measured in centimeters from the center). Under active computing loads, the temperature distribution surface $T(x, y)$ (in degrees Celsius) across the chip is modeled by:

$$T(x, y) = x^2 + 2y^2 - 2x + 100$$

To prevent localized material degradation or chip burnout, the engineer must find the **absolute maximum temperature** and the **absolute minimum temperature** across the entire chip.

#### Solution:

**Step 1: Find interior hotspots (Critical Points).**

$$\frac{\partial T}{\partial x} = 2x - 2 = 0 \implies x = 1$$

$$\frac{\partial T}{\partial y} = 4y = 0 \implies y = 0$$

The point **$(1, 0)$** lies cleanly inside our $-2 \le x, y \le 2$ boundaries.

- Evaluate: $T(1, 0) = (1)^2 + 2(0)^2 - 2(1) + 100 = 1 - 2 + 100 = 99^\circ\text{C}$
    

**Step 2: Check the perimeter boundary edges.**

- **Edge 1: Right Edge ($x = 2$, $-2 \le y \le 2$)**
    
    Substitute $x = 2$: $T(2, y) = 2^2 + 2y^2 - 2(2) + 100 = 2y^2 + 100$
    
    Derivative with respect to $y$: $4y = 0 \implies y = 0$. Candidate point: **$(2, 0)$**.
    
    - Evaluate: $T(2, 0) = 2(0)^2 + 100 = 100^\circ\text{C}$
        
- **Edge 2: Left Edge ($x = -2$, $-2 \le y \le 2$)**
    
    Substitute $x = -2$: $T(-2, y) = (-2)^2 + 2y^2 - 2(-2) + 100 = 2y^2 + 108$
    
    Derivative with respect to $y$: $4y = 0 \implies y = 0$. Candidate point: **$(-2, 0)$**.
    
    - Evaluate: $T(-2, 0) = 2(0)^2 + 108 = 108^\circ\text{C}$
        
- **Edge 3: Top Edge ($y = 2$, $-2 \le x \le 2$)**
    
    Substitute $y = 2$: $T(x, 2) = x^2 + 2(2)^2 - 2x + 100 = x^2 - 2x + 108$
    
    Derivative with respect to $x$: $2x - 2 = 0 \implies x = 1$. Candidate point: **$(1, 2)$**.
    
    - Evaluate: $T(1, 2) = 1^2 - 2(1) + 108 = 107^\circ\text{C}$
        
- **Edge 4: Bottom Edge ($y = -2$, $-2 \le x \le 2$)**
    
    Substitute $y = -2$: $T(x, -2) = x^2 + 2(-2)^2 - 2x + 100 = x^2 - 2x + 108$
    
    Derivative with respect to $x$: $2x - 2 = 0 \implies x = 1$. Candidate point: **$(1, -2)$**.
    
    - Evaluate: $T(1, -2) = 1^2 - 2(1) + 108 = 107^\circ\text{C}$
        

**Step 3: Check the four corner vertices.**

1. **$(-2, -2)$**: $T(-2, -2) = (-2)^2 - 2(-2) + 108 = 4 + 4 + 108 = 116^\circ\text{C}$
    
2. **$(-2, 2)$**: $T(-2, 2) = (-2)^2 - 2(-2) + 108 = 4 + 4 + 108 = 116^\circ\text{C}$
    
3. **$(2, -2)$**: $T(2, -2) = (2)^2 - 2(2) + 108 = 4 - 4 + 108 = 108^\circ\text{C}$
    
4. **$(2, 2)$**: $T(2, 2) = (2)^2 - 2(2) + 108 = 4 - 4 + 108 = 108^\circ\text{C}$
    

#### Real-Life Meaning of the Answer:

- **Absolute Maximum Temperature:** **$116^\circ\text{C}$** at the corners **$(-2, -2)$** and **$(-2, 2)$**.
    
- **Absolute Minimum Temperature:** **$99^\circ\text{C}$** at the interior point **$(1, 0)$**.
    

For the microchip design engineer, this calculation dictates safety limits. It shows that thermal energy tends to compound heavily at the far-left corners of the silicon boundary under stress, reaching $116^\circ\text{C}$. This tells the engineer that they _must_ place high-capacity cooling vents or heat-sink connections directly over the coordinates $(-2, -2)$ and $(-2, 2)$ to avoid structural melting. Conversely, $(1,0)$ represents the coolest operating sweet-spot on the chip, making it the perfect coordinate to place sensitive clock-generators or cache modules that perform best at lower temperatures.
