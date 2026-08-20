**Problem:** A rectangular high-end LED display panel measures $0.5\text{ m}$ in width ($x$-direction) and $0.4\text{ m}$ in height ($y$-direction), defining the region $R = [0, 0.5] \times [0, 0.4]$. Due to the layout of the electrical busbars, the local irradiance across the panel surface varies according to the function:

$$E(x, y) = E_0 (1 + 4x^2y) \quad (\text{W/m}^2)$$

Compute the **average irradiance** ($E_{\text{avg}}$) across the LED panel in terms of $E_0$.

**Solution:**

1. **Find the Area of the Panel ($R$):**
    
    $$\text{Area}(R) = 0.5 \times 0.4 = 0.2\text{ m}^2$$
    
2. **Set up and Evaluate the Double Integral:**
    
    $$\iint_R E(x, y) \, dA = \int_{0}^{0.5} \int_{0}^{0.4} E_0 (1 + 4x^2y) \, dy \, dx$$
    
    Factor out the constant $E_0$ and evaluate the inner integral with respect to $y$:
    
    $$\int_{0}^{0.4} (1 + 4x^2y) \, dy = \left[ y + 2x^2y^2 \right]_{0}^{0.4}$$
    
    $$= \left( 0.4 + 2x^2(0.4)^2 \right) - 0 = 0.4 + 0.32x^2$$
    
    Now compute the outer integral with respect to $x$:
    
    $$\int_{0}^{0.5} (0.4 + 0.32x^2) \, dx = \left[ 0.4x + \frac{0.32}{3}x^3 \right]_{0}^{0.5}$$
    
    $$= 0.4(0.5) + \frac{0.32}{3}(0.5)^3 = 0.2 + \frac{0.32}{3}(0.125)$$
    
    $$= 0.2 + \frac{0.04}{3} = \frac{0.6}{3} + \frac{0.04}{3} = \frac{0.64}{3}\text{ W}\cdot\text{m}$$
    
    So, the total integral is $\frac{0.64}{3}E_0$.
    
3. **Calculate Average Irradiance ($E_{\text{avg}}$):**
    
    $$E_{\text{avg}} = \frac{1}{\text{Area}(R)} \iint_R E \, dA = \frac{1}{0.2} \left( \frac{0.64}{3}E_0 \right) = 5 \times \frac{0.64}{3}E_0 = \frac{3.2}{3}E_0 \approx 1.067E_0$$
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The value $1.067E_0$ means that despite the uneven distribution of light power across the panel, the spatial average of light intensity emitted per unit area is roughly $6.7\%$ higher than the baseline intensity ($E_0$) found at the origin corner $(0,0)$.
    
- **How it applies in real life:** When designing consumer displays or commercial LED signs, human eyes easily notice variations in brightness (hotspots). Engineers use the average irradiance to calculate the overall power consumption of the screen and to calibrate optical diffuser layers that smooth out hotspots, ensuring the user experiences a uniformly lit, high-quality image.
    