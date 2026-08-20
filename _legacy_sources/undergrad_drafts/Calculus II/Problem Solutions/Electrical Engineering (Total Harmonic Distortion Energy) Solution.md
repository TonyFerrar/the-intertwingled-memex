In electrical power grids, non-linear loads (like computer power supplies or LED ballasts) distort the ideal sinusoidal current wave, introducing unwanted high-frequency harmonics. An electrical engineer monitoring a distorted power line models the localized energy dissipation over a standard half-cycle using the following definite integral:

$$E = \int_{0}^{\pi} I_0 \sin^3(t)\cos^2(t) \, dt$$

Where $I_0$ represents the base peak current factor. Use Skill 2 to evaluate the total energy content $E$ of this distorted signal.

**Solution:**

1. Pull the constant current factor $I_0$ outside the integral and isolate one factor of $\sin(t)$:
    
    $$E = I_0 \int_{0}^{\pi} \sin^2(t)\cos^2(t) \cdot \sin(t) \, dt$$
    
2. Substitute the remaining $\sin^2(t)$ with $(1 - \cos^2(t))$:
    
    $$E = I_0 \int_{0}^{\pi} (1 - \cos^2(t))\cos^2(t) \cdot \sin(t) \, dt$$
    
3. Apply $u$-substitution: let $u = \cos(t)$, so $du = -\sin(t)dt \implies -du = \sin(t)dt$.
    
    - Update the integration boundaries:
        
        - When $t = 0$, $u = \cos(0) = 1$.
            
        - When $t = \pi$, $u = \cos(\pi) = -1$.
            
4. Reconstruct the definite integral:
    
    $$E = I_0 \int_{1}^{-1} (1 - u^2)(u^2)(-du)$$
    
5. Absorb the negative sign to flip the integration limits back to standard order, and distribute $u^2$:
    
    $$E = I_0 \int_{-1}^{1} (u^2 - u^4) \, du$$
    
6. Integrate the polynomial directly:
    
    $$E = I_0 \left[ \frac{u^3}{3} - \frac{u^5}{5} \right]_{-1}^{1}$$
    
7. Evaluate across the limits:
    
    $$E = I_0 \left( \left[ \frac{1}{3} - \frac{1}{5} \right] - \left[ -\frac{1}{3} + \frac{1}{5} \right] \right) = I_0 \left( \frac{2}{15} - \left( -\frac{2}{15} \right) \right) = \frac{4}{15}I_0$$
    

#### **Meaning of the Answer & Real-Life Application**

The evaluated result, $E = \frac{4}{15}I_0 \approx 0.267 I_0$, gives the specific total energy contribution of the distorted harmonic product over half a cycle.

In power systems engineering, knowing this value allows engineers to calculate the Total Harmonic Distortion (THD). If the energy content of these secondary overlapping sine-cosine waves is too high, it translates directly into wasted thermal energy. This heat causes heavy sub-station transformers to dangerously overheat and causes electrical insulation to degrade prematurely. By using this integral to quantify harmonic energy, engineers can design appropriately sized electrical harmonic filters to trap these specific waveforms and keep the grid efficient.
