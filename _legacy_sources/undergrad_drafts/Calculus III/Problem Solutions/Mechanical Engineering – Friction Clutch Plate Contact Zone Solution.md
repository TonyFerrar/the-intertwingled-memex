**Scenario:** A mechanical engineer is designing a wet-friction clutch plate for an automotive transmission. To manage heat dissipation and torque transfer, the friction material is only applied to an outer annular sector of the circular plate. The region is geometrically bounded between an inner radius of $r = 6\text{ cm}$ and an outer radius of $r = 10\text{ cm}$. Due to oil cooling channels, the friction pads only span the angles between $\theta = -\frac{\pi}{4}$ and $\theta = \frac{\pi}{4}$ (and its symmetrical opposite).

Find the surface area of this specific pad region by bounding it and evaluating the polar double integral.

#### Solution:

1. **Define the Bounds:**
    
    - Radial limits: $6 \le r \le 10$
        
    - Angular limits: $-\frac{\pi}{4} \le \theta \le \frac{\pi}{4}$
        
2. **Set up and Evaluate the Integral:**
    
    $$\text{Area} = \int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \int_{6}^{10} r \, dr \, d\theta$$
    
    - Evaluate the inner integral:
        
        $$\int_{6}^{10} r \, dr = \left[ \frac{1}{2}r^2 \right]_{6}^{10} = \frac{1}{2}(100 - 36) = \frac{1}{2}(64) = 32\text{ cm}^2$$
        
    - Evaluate the outer integral:
        
        $$\text{Area} = \int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} 32 \, d\theta = [32\theta]_{-\frac{\pi}{4}}^{\frac{\pi}{4}} = 32\left(\frac{\pi}{4} - \left(-\frac{\pi}{4}\right)\right) = 32\left(\frac{\pi}{2}\right) = 16\pi \approx 50.27\text{ cm}^2$$
        

#### Meaning of the Answer & Real-Life Application:

- **The Meaning of the Answer:** The calculated value of $\approx 50.27\text{ cm}^2$ represents the exact physical surface area of a single friction pad sector.
    
- **How it Applies:** In mechanical engineering, the total friction area directly determines the maximum torque ($T$) the clutch can safely transmit without slipping ($T = \frac{2}{3}\mu F N \frac{r_2^3 - r_1^3}{r_2^2 - r_1^2}$). Knowing the exact area allows the engineer to calculate the uniform clamping force ($F$) required from the hydraulic piston and ensure that the thermal energy generated during engagement does not exceed the material's structural melting limits.
    
