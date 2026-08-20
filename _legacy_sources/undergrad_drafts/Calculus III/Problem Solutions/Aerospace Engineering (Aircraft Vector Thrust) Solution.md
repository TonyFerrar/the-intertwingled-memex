**Context:** During a takeoff sequence, a commercial drone's propulsion system generates a thrust vector $\vec{T}$ with a total magnitude of $|\vec{T}| [cite_start]= 7\text{ Newtons}$ (N) anchored at its center of mass. Because of a sudden localized wind gust, the drone is currently angled upward, making a $30^{\circ}$ angle with the horizontal ground plane (x-axis).

**Task:** 1. Determine the horizontal ($T_x$) and vertical ($T_z$) components of the drone's thrust vector $\vec{T}$. (Note: $\cos(30^{\circ}) [cite_start]= \sqrt{3}/2$ and $\sin(30^{\circ}) = 1/2$). 2. Explain how an aerospace flight control system uses these components to maintain stable flight.

**Mathematical Solution:**

1. **Determine Components:**
    
    $$T_x = |\vec{T}| \cdot \cos(30^{\circ}) = 7 \cdot \frac{\sqrt{3}}{2} \approx 6.06\text{ N}$$
    
    $$T_z = |\vec{T}| \cdot \sin(30^{\circ}) = 7 \cdot \frac{1}{2} = 3.5\text{ N}$$
    
    In vector component notation: $\vec{T} = \langle 6.06, 3.5 \rangle$
    

**Real-Life Application Meaning:**

The flight computer breaks down the total $7\text{ N}$ engine force into its distinct spatial impacts. The vertical component ($T_z = 3.5\text{ N}$) is the direct upward lifting force fighting against gravity. If the total weight vector of the drone is greater than $3.5\text{ N}$, the drone will begin losing altitude despite the engines running. Concurrently, the horizontal component ($T_x = 6.06\text{ N}$) is the force propelling the drone forward. Avionics engineers program internal algorithms to constantly monitor these vector splits so the onboard computers can automatically adjust individual rotor speeds to guarantee there is enough vertical component to stay airborne while maintaining forward speed.