An electrical engineer is measuring the cumulative electrical charge $Q$ (in Coulombs) entering a high-capacity storage capacitor inside an intermittent green-energy circuit. The dynamic charging current over a specific time window from $t = 0$ to $t = 3$ seconds is modeled by integrating an exponential decay profile:

$$Q = \int_{0}^{3} 4e^{-0.5t} \, dt$$

Calculate the total electrical charge stored in the component during this 3-second operational window.

#### Step-by-Step Solution:

- **Step 1: Choose $u$ and calculate $du$.** Choose the inner function located in the exponent:
    
    $$u = -0.5t$$
    
    $$du = -0.5 \, dt$$
    
- **Step 2: Algebraically introduce the balancing constant.** The integrand has a $dt$ multiplied by a coefficient of 4. Isolate $dt$ in the derivative equation by multiplying both sides by $-2$:
    
    $$-2 \, du = dt$$
    
- **Step 3: Update the definite integration boundaries.** Convert the time limits ($t$) into substitute limits ($u$) using $u = -0.5t$:
    
    - Lower limit: When $t = 0 \implies u = -0.5(0) = 0$
        
    - Upper limit: When $t = 3 \implies u = -0.5(3) = -1.5$
        
- **Step 4: Substitute and factor out constants.**
    
    $$Q = \int_{0}^{-1.5} 4e^u \cdot (-2 \, du) = -8 \int_{0}^{-1.5} e^u \, du$$
    
    Eliminate the negative sign by reversing the direction of the integration limits:
    
    $$Q = 8 \int_{-1.5}^{0} e^u \, du$$
    
- **Step 5: Integrate and evaluate across the updated boundaries.**
    
    $$Q = 8 \Big[ e^u \Big]_{-1.5}^{0} = 8 \left( e^0 - e^{-1.5} \right)$$
    
    Since $e^0 = 1$ and $e^{-1.5} \approx 0.2231$:
    
    $$Q = 8(1 - 0.2231) = 8(0.7769) \approx 6.22 \text{ Coulombs}$$
    

#### Meaning of the Answer & Engineering Real-Life Application:

The integration calculation establishes that **6.22 Coulombs** of total electrical charge accumulated inside the component.

In circuit board architecture, engineers must verify that storage components receive an exact quantity of charge within precise time windows to smooth out power surges from renewable inputs like solar or wind. If the calculated charge exceeds the safe storage limits of the chosen capacitor rating, it can rupture or fail. This mechanical precision helps engineers optimize safety margins for power grids and handheld devices.
