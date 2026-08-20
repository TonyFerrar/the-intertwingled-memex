Find the area enclosed by exactly one loop of the four-leaved rose curve $r = \cos(2\theta)$.

#### **Solution:**

- **Determine the limits of integration:** A single loop starts and ends at the origin where $r = 0$:
    
    $$\cos(2\theta) = 0 \implies 2\theta = -\frac{\pi}{2} \text{ or } \frac{\pi}{2} \implies \theta = -\frac{\pi}{4} \text{ to } \frac{\pi}{4}$$
    
- **Set up the area integral:**
    
    $$A = \int_{\theta_1}^{\theta_2} \frac{1}{2}r^2 d\theta = \int_{-\pi/4}^{\pi/4} \frac{1}{2}\cos^2(2\theta) d\theta$$
    
- **Apply the half-angle formula ($\cos^2 x = \frac{1+\cos(2x)}{2}$):**
    
    $$A = \frac{1}{2} \int_{-\pi/4}^{\pi/4} \frac{1+\cos(4\theta)}{2} d\theta = \frac{1}{4} \int_{-\pi/4}^{\pi/4} \big(1 + \cos(4\theta)\big) d\theta$$
    
- **Integrate:**
    
    $$A = \frac{1}{4} \left[ \theta + \frac{1}{4}\sin(4\theta) \right]_{-\pi/4}^{\pi/4}$$
    
    $$A = \frac{1}{4} \left[ \left(\frac{\pi}{4} + \frac{1}{4}\sin(\pi)\right) - \left(-\frac{\pi}{4} + \frac{1}{4}\sin(-\pi)\right) \right]$$
    
    $$A = \frac{1}{4} \left[ \frac{\pi}{4} - \left(-\frac{\pi}{4}\right) \right] = \frac{1}{4} \left(\frac{\pi}{2}\right) = \frac{\pi}{8}$$
    