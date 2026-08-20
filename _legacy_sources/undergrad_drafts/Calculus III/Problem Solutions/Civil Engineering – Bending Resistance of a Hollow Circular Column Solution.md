**Scenario:** A civil engineer is calculating the structural resistance properties for a hollow concrete bridge support column. The cross-sectional footprint of the column is an annular ring bounded between an inner radius of $r = 1\text{ meter}$ and an outer radius of $r = 2\text{ meters}$. To find the column's ability to resist buckling or bending under heavy traffic loads, the engineer needs to determine the _Area Moment of Inertia_ ($I_x$) with respect to its central neutral axis, defined as:

$$I_x = \iint_R y^2 \, dA$$

Convert this into polar coordinates and calculate the bending resistance value.

#### Solution:

1. **Define Polar Conversions:**
    
    - Annular ring boundaries: Constant limits of $1 \le r \le 2$ and $0 \le \theta \le 2\pi$.
        
    - Coordinate shift: $y = r\sin\theta \implies y^2 = r^2\sin^2\theta$.
        
    - Area element: $dA = r \, dr \, d\theta$.
        
2. **Set Up the Separable Integral:**
    
    $$I_x = \int_{0}^{2\pi} \int_{1}^{2} \left(r^2\sin^2\theta\right) \cdot r \, dr \, d\theta = \left( \int_{0}^{2\pi} \sin^2\theta \, d\theta \right) \times \left( \int_{1}^{2} r^3 \, dr \right)$$
    
3. **Evaluate Components:**
    
    - $\theta$-Integral (using $\sin^2\theta = \frac{1-\cos(2\theta)}{2}$):
        
        $$\int_{0}^{2\pi} \frac{1-\cos(2\theta)}{2} \, d\theta = \left[ \frac{1}{2}\theta - \frac{\sin(2\theta)}{4} \right]_{0}^{2\pi} = (\pi - 0) - (0) = \pi$$
        
    - $r$-Integral:
        
        $$\int_{1}^{2} r^3 \, dr = \left[ \frac{1}{4}r^4 \right]_{1}^{2} = \frac{1}{4}(16 - 1) = \frac{15}{4}$$
        
4. **Multiply Results:**
    
    $$I_x = \pi \times \frac{15}{4} = \frac{15\pi}{4} \approx 11.78\text{ m}^4$$
    

#### Meaning of the Answer & Real-Life Application:

- **The Meaning of the Answer:** The resulting value of $\approx 11.78\text{ m}^4$ represents the column's geometric area moment of inertia.
    
- **How it Applies:** This parameter is fundamental in structural health monitoring and civil safety code compliance. Structural engineers plug this specific geometric value directly into the Euler-Bernoulli beam deflection equation ($M = EI\frac{d^2y}{dx^2}$) to determine the maximum vertical load limit the bridge pier can support before undergoing catastrophic buckling or structural bending under load. Knowing this exact value helps ensure that the bridge can reliably handle peak-hour transport weight over decades of operational service.