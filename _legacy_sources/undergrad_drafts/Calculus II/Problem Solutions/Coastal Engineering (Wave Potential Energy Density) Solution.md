In fluid dynamics, the surface profile of an ocean wave can be modeled as a stable cosine wave. To construct durable maritime defenses (like seawalls or breakwaters), coastal engineers must compute the average **Potential Energy Density ($E_p$)** contained within a shallow-water wave train over a single wavelength $L$.

The potential energy per unit area is calculated via the definite integral:

$$E_p = \frac{1}{L} \int_{0}^{L} \rho g H^2 \cos^2\left(\frac{2\pi}{L}x\right) \, dx$$

Where $\rho$ is the density of seawater, $g$ is acceleration due to gravity, and $H$ is the wave height. Evaluate this integral using Skill 1.

**Solution:**

1. Pull all constant physical parameters ($\rho, g, H^2$) outside the integral:
    
    $$E_p = \frac{\rho g H^2}{L} \int_{0}^{L} \cos^2\left(\frac{2\pi}{L}x\right) \, dx$$
    
2. Use the **half-angle formula** to rewrite the squared cosine term:
    
    $$E_p = \frac{\rho g H^2}{L} \int_{0}^{L} \frac{1 + \cos\left(2 \cdot \frac{2\pi}{L}x\right)}{2} \, dx$$
    
    $$E_p = \frac{\rho g H^2}{2L} \int_{0}^{L} \left(1 + \cos\left(\frac{4\pi}{L}x\right)\right) \, dx$$
    
3. Integrate each term across the boundaries:
    
    $$E_p = \frac{\rho g H^2}{2L} \left[ x + \frac{L}{4\pi}\sin\left(\frac{4\pi}{L}x\right) \right]_{0}^{L}$$
    
4. Plug in the upper limit $L$ and lower limit $0$:
    
    $$E_p = \frac{\rho g H^2}{2L} \left( \left[ L + \frac{L}{4\pi}\sin(4\pi) \right] - \left[ 0 + \frac{L}{4\pi}\sin(0) \right] \right)$$
    
5. Because $\sin(4\pi) = 0$ and $\sin(0) = 0$:
    
    $$E_p = \frac{\rho g H^2}{2L} (L) = \frac{1}{2}\rho g H^2$$
    

#### **Meaning of the Answer & Real-Life Application**

The solution $E_p = \frac{1}{2}\rho g H^2$ mathematically proves that the total potential energy stored in an ocean wave is directly proportional to the **square of its height** ($H^2$).

When coastal engineers design offshore structures like wind turbines, oil rigs, or concrete harbor barriers, they use this calculated energy density to predict the crushing force incoming storm surges will exert. Because the energy scales quadratically, a wave that doubles in height actually quadruples in destructive kinetic and potential energy. This specific integration profile tells engineers exactly how much raw mechanical force a barrier must absorb or deflect to prevent catastrophic erosion and structural failures.