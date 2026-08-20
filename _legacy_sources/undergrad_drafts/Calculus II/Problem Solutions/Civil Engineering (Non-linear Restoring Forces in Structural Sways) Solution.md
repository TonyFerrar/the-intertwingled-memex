During an earthquake, a skyscraper undergoes non-linear structural oscillations. A civil engineer monitoring structural deflection calculates the cumulative energy dissipation ($U$) of a localized damping shock absorber over a specific movement sweep from $\theta = 0$ to $\theta = \pi$ radians.

The physical process yields the following high-power definite integral:

$$U = \int_{0}^{\pi} F_0 \cos^4(\theta) \, d\theta$$

Where $F_0$ represents the base structural constraint stiffness. Use Skill 3 to evaluate the total energy dissipation $U$.

**Solution:**

1. Pull the constant $F_0$ out of the integral and note that $n = 4$:
    
    $$U = F_0 \int_{0}^{\pi} \cos^4(\theta) \, d\theta$$
    
2. Apply the **cosine reduction formula** for $n = 4$:
    
    $$\int \cos^4(\theta) \, d\theta = \left[ \frac{\cos^3(\theta)\sin(\theta)}{4} \right]_{0}^{\pi} + \frac{3}{4}\int_{0}^{\pi} \cos^2(\theta) \, d\theta$$
    
3. Evaluate the reduced integral ($\int \cos^2(\theta) \, d\theta$) by applying the formula again for $n = 2$:
    
    $$\int \cos^2(\theta) \, d\theta = \left[ \frac{\cos(\theta)\sin(\theta)}{2} \right]_{0}^{\pi} + \frac{1}{2}\int_{0}^{\pi} 1 \, d\theta$$
    
4. Assemble the complete expression within the definite boundaries:
    
    $$U = F_0 \left[ \frac{\cos^3(\theta)\sin(\theta)}{4} + \frac{3}{8}\cos(\theta)\sin(\theta) + \frac{3}{8}\theta \right]_{0}^{\pi}$$
    
5. Plug in the boundary limits ($\theta = \pi$ and $\theta = 0$). Note that $\sin(\pi) = 0$ and $\sin(0) = 0$, causing the first two terms to drop out entirely:
    
    $$U = F_0 \left( \left[ 0 + 0 + \frac{3}{8}\pi \right] - [0 + 0 + 0] \right) = \frac{3}{8}\pi F_0$$
    

#### **Meaning of the Answer & Real-Life Application**

The evaluated result, $U = \frac{3}{8}\pi F_0 \approx 1.178 F_0$, defines the exact amount of mechanical energy dissipated by the shock absorber during a large lateral building sway.

In structural civil engineering, tall structures must be designed to safely flex rather than fracture during high-wind storms or seismic activity. Because structural deformations often exhibit higher-order non-linear behavior, engineers use this exact reduction workflow to quantify total system fatigue. This calculation lets them ensure that the building's tuned mass dampers can successfully absorb and bleed off enough kinetic energy to protect the main steel and concrete skeletal frames from failing.