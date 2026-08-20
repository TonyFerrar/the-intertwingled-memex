**Problem Statement:** A chemical process engineer is evaluating the thermal stability of a cylindrical containment unit during an exothermic reaction. The internal heat dissipation rate $Q$ (in watts) is modeled as a function of the internal radius $r$ (in meters): $Q(r) = 90r^2 - 12r^3$. Physical plant floor constraints limit the radius of the unit to a closed domain of $r \in [0, 6]\text{ meters}$. Find the absolute maximum heat dissipation rate to prevent thermal runaway.

#### Solution:

1. **Find Critical Points:** Take the derivative of $Q(r)$ and set it to zero:
    
    $$Q'(r) = 180r - 36r^2$$
    
    $$36r(5 - r) = 0 \implies r = 0\text{ m} \quad \text{or} \quad r = 5\text{ m}$$
    
2. **Filter Through Domain:** Both $r = 0$ and $r = 5$ fall within the physical plant domain of $[0, 6]$.
    
3. **Evaluate and Compare Outputs:** Use the closed interval evaluation method:
    
    - **Endpoint:** $Q(0) = 90(0)^2 - 12(0)^3 = 0\text{ Watts}$
        
    - **Critical Point:** $Q(5) = 90(5)^2 - 12(5)^3 = 2250 - 1500 = 750\text{ Watts}$
        
    - **Endpoint:** $Q(6) = 90(6)^2 - 12(6)^3 = 3240 - 2592 = 648\text{ Watts}$
        

#### Meaning of the Answer & Real-Life Application:

- **The Meaning:** The absolute peak heat dissipation capability of the reactor design is $750\text{ Watts}$, which is achieved at an exact radius of $5\text{ meters}$.
    
- **Real-Life Application:** In chemical manufacturing plants, managing heat accumulation is a critical safety parameter to prevent dangerous pressure spikes or catastrophic explosions. By executing a strict global extrema verification, the process engineer mathematically proves that designing the tank with a maximum allowable radius of $6\text{ meters}$ actually degrades safety, reducing heat dissipation down to $648\text{ Watts}$ due to changing fluid dynamics and surface area ratios. Specifying a radius of exactly $5\text{ meters}$ ensures the plant operates at peak cooling efficiency, protecting personnel and equipment.