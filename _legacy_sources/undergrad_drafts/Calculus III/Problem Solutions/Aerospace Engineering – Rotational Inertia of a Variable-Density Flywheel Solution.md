**Scenario:** An aerospace propulsion engineer is designing a carbon-composite flywheel disk for a satellite energy-storage system. The flywheel is a flat circular disk of radius $R = 20\text{ cm}$. To maximize rotational stability, it is engineered with variable density—the composite material is packed denser near the outer rim. Its density profile is modeled as:

$$\rho(x,y) = 3(x^2 + y^2) \quad \text{[grams per cm}^2\text{]}$$

The resistance of this component to changes in rotational speed is dictated by its Moment of Inertia ($I$) about the central axis, calculated via the double integral: $I = \iint_R (x^2+y^2)\rho(x,y) \, dA$.

Compute the exact rotational inertia using strategic polar evaluation.

#### Solution:

1. **Convert to Polar Form:**
    
    - Disk boundary: $0 \le r \le 20\text{ cm}$ and $0 \le \theta \le 2\pi$.
        
    - Integrand elements: Distance squared $(x^2+y^2) = r^2$, and density $\rho = 3(x^2+y^2) = 3r^2$.
        
    - Combined Integrand: $r^2 \cdot (3r^2) \cdot r \, dr \, d\theta = 3r^5 \, dr \, d\theta$.
        
2. **Execute Separable Evaluation:**
    
    $$I = \int_{0}^{2\pi} \int_{0}^{20} 3r^5 \, dr \, d\theta = \left( \int_{0}^{2\pi} d\theta \right) \times \left( \int_{0}^{20} 3r^5 \, dr \right)$$
    
    - $\theta$-Integral: $[\theta]_0^{2\pi} = 2\pi$
        
    - $r$-Integral: $\left[ \frac{3}{6}r^6 \right]_0^{20} = \frac{1}{2}(20)^6 = \frac{1}{2}(64,000,000) = 32,000,000\text{ g}\cdot\text{cm}^2$
        
3. **Combine:**
    
    $$I = 2\pi \times 32,000,000 = 64,000,000\pi \approx 201,061,929.8\text{ g}\cdot\text{cm}^2 = 20.11\text{ kg}\cdot\text{m}^2$$
    

#### Meaning of the Answer & Real-Life Application:

- **The Meaning of the Answer:** The value of $\approx 20.11\text{ kg}\cdot\text{m}^2$ is the absolute mass moment of inertia of the flywheel.
    
- **How it Applies:** In aerospace systems, this value determines the satellite's attitude control dynamics. Reaction wheels and flywheels store kinetic energy ($E_k = \frac{1}{2}I\omega^2$). By calculating the precise inertia, the engineer can establish how much angular velocity ($\omega$) the motor must apply to store a specific quantity of backup electrical power, and ensure the satellite can spin up quickly enough to execute maneuvers without destabilizing its structural mounts.
    
