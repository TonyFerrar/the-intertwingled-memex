An aerospace engineer is calculating the total energy output (work done) by a rocket's propulsion system during launch. The thrust profile function $T(h)$ varies continuously with altitude $h$.

- System logs show the work done during the first launch stage from an altitude of $0\text{ to }30\text{ km}$ is $\int_{0}^{30} T(h) \, dh = 150\text{ GJ}$.
    
- The work done during the second stage from $30\text{ to }100\text{ km}$ is $\int_{30}^{100} T(h) \, dh = 300\text{ GJ}$.
    

Due to a new performance-enhancing fuel additive, the thrust output is boosted uniformly by a scaling factor of 1.2 across the entire flight profile. Compute the total work done by the upgraded propulsion system across the entire flight path:

$$\int_{0}^{100} 1.2 T(h) \, dh$$

#### Step-by-Step Solution:

1. **Apply the Constant Multiple Rule:** Pull out the fuel efficiency scale factor.
    
    $$\int_{0}^{100} 1.2 T(h) \, dh = 1.2 \int_{0}^{100} T(h) \, dh$$
    
2. **Apply the Additivity Rule:** Split the main flight path into the two distinct booster burn intervals ($0\text{ to }30\text{ km}$ and $30\text{ to }100\text{ km}$).
    
    $$1.2 \int_{0}^{100} T(h) \, dh = 1.2 \left( \int_{0}^{30} T(h) \, dh + \int_{30}^{100} T(h) \, dh \right)$$
    
3. **Substitute and Compute:** Plug in the baseline work outputs logged by the telemetry system.
    
    $$1.2 \cdot (150 + 300) = 1.2 \cdot (450) = 540\text{ GJ}$$
    

#### Engineering Meaning of the Answer:

> The resulting evaluation of **540 GJ** represents the total kinetic energy delivered to the vehicle by the upgraded engine across its entire journey into upper atmospheric flight. Flight dynamicists use this exact integrated value to determine if the rocket will reach the mandatory escape velocity required for orbit insertion, or if the increased energy output will generate excessive thermal friction stress on the nose cone.