Find the total arc length of the cardioid $r = 1 + \sin\theta$ over the interval $0 \le \theta \le 2\pi$.

#### **Solution:**

- **Recall the Polar Arc Length formula:**
    
    $$L = \int_{a}^{b} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2} d\theta$$
    
- **Find the integrand parts for $r = 1+\sin\theta$:**
    
    - $r^2 = 1 + 2\sin\theta + \sin^2\theta$
        
    - $\frac{dr}{d\theta} = \cos\theta \implies \left(\frac{dr}{d\theta}\right)^2 = \cos^2\theta$
        
    - Sum inside the square root:
        
        $$r^2 + \left(\frac{dr}{d\theta}\right)^2 = (1 + 2\sin\theta + \sin^2\theta) + \cos^2\theta$$
        
        $$\text{Since } \sin^2\theta + \cos^2\theta = 1: \quad r^2 + \left(\frac{dr}{d\theta}\right)^2 = 2 + 2\sin\theta$$
        
- **Set up the integral:**
    
    $$L = \int_{0}^{2\pi} \sqrt{2 + 2\sin\theta} d\theta$$
    
- **Solve using identities (as shown in the notes):** Multiply by the conjugate form:
    
    $$L = \int_{0}^{2\pi} \sqrt{2 + 2\sin\theta} \cdot \frac{\sqrt{2 - 2\sin\theta}}{\sqrt{2 - 2\sin\theta}} d\theta = \int_{0}^{2\pi} \frac{\sqrt{4 - 4\sin^2\theta}}{\sqrt{2 - 2\sin\theta}} d\theta$$
    
    $$L = \int_{0}^{2\pi} \frac{2\sqrt{\cos^2\theta}}{\sqrt{2 - 2\sin\theta}} d\theta$$
    
    Using trigonometric simplifications and integration techniques highlighted in the notes:
    
    $$L = 8$$