A civil engineer is designing a curved transit tunnel clearance profile through a mountain foundation. Due to shifting geological strata, the upper curved roof boundary profile is asymmetrical and modeled by the algebraic curve $y = \sqrt{5 - 4x - x^2}$ from $x = -2$ to $x = 1$. To calculate the total cross-sectional excavation area, the engineer must solve:

$$\text{Area} = \int_{-2}^{1} \sqrt{5 - 4x - x^2} \, dx$$

Find the total area of the tunnel cross-section.

#### Step-by-Step Solution:

1. **Restructure the Polynomial:** The quadratic expression under the radical is not centered. Complete the square:
    
    $$5 - 4x - x^2 = 5 - (x^2 + 4x) = 5 - (x^2 + 4x + 4 - 4) = 5 - (x+2)^2 + 4 = 9 - (x+2)^2$$
    
2. **Select the Substitution Pattern:** The integral is now $\int \sqrt{9 - (x+2)^2} \, dx$, which perfectly matches **Case 1** ($\sqrt{a^2 - u^2}$).
    
    - Let $x + 2 = 3\sin\theta \implies dx = 3\cos\theta \, d\theta$
        
    - Transform the limits of integration:
        
        - When $x = -2 \implies -2 + 2 = 3\sin\theta \implies \theta = 0$
            
        - When $x = 1 \implies 1 + 2 = 3\sin\theta \implies \sin\theta = 1 \implies \theta = \frac{\pi}{2}$
            
3. **Substitute and Evaluate:**
    
    $$\int_{0}^{\pi/2} \sqrt{9 - 9\sin^2\theta} \cdot (3\cos\theta \, d\theta) = \int_{0}^{\pi/2} (3\cos\theta)(3\cos\theta) \, d\theta = 9\int_{0}^{\pi/2} \cos^2\theta \, d\theta$$
    
4. **Apply Power-Reduction Identity:**
    
    $$9 \int_{0}^{\pi/2} \frac{1 + \cos2\theta}{2} \, d\theta = \frac{9}{2} \left[ \theta + \frac{1}{2}\sin2\theta \right]_{0}^{\pi/2}$$
    
    $$\frac{9}{2} \left[ \left(\frac{\pi}{2} + 0\right) - (0 + 0) \right] = \frac{9\pi}{4}$$
    

#### Meaning of the Answer & Real-Life Application:

> The calculated area of $\frac{9\pi}{4} \approx 7.07\text{ m}^2$ represents the exact physical space cleared beneath the structural archway. Civil engineers use this definitive value to determine the volume of earth that needs to be mechanically excavated and to calculate precisely how much shotcrete or structural lining is required to coat the roof to prevent cave-ins.
