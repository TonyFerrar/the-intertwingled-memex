An alternating current (AC) voltage source generates a sinusoidal signal modeled by $v(t) = V_m \sin(\omega t)$, where $V_m$ is the peak voltage and $\omega$ is the angular frequency. To find the power dissipated by a resistor, electrical engineers must first calculate the **Mean Squared Voltage ($V_{\text{MS}}$)** over a half-cycle from $t = 0$ to $t = \frac{\pi}{\omega}$.

The engineering formula is given by:

$$V_{\text{MS}} = \frac{\omega}{\pi} \int_{0}^{\frac{\pi}{\omega}} [V_m \sin(\omega t)]^2 \, dt$$

Evaluate this integral using Skill 1 to find an expression for $V_{\text{MS}}$.

**Solution:**

1. Pull the constant $V_m^2$ outside the integral:
    
    $$V_{\text{MS}} = \frac{\omega V_m^2}{\pi} \int_{0}^{\frac{\pi}{\omega}} \sin^2(\omega t) \, dt$$
    
2. Apply the **half-angle formula** to eliminate the even power of sine:
    
    $$V_{\text{MS}} = \frac{\omega V_m^2}{\pi} \int_{0}^{\frac{\pi}{\omega}} \frac{1 - \cos(2\omega t)}{2} \, dt$$
    
3. Factor out the $\frac{1}{2}$ denominator and integrate term-by-term:
    
    $$V_{\text{MS}} = \frac{\omega V_m^2}{2\pi} \left[ t - \frac{\sin(2\omega t)}{2\omega} \right]_{0}^{\frac{\pi}{\omega}}$$
    
4. Evaluate the definite boundaries:
    
    $$V_{\text{MS}} = \frac{\omega V_m^2}{2\pi} \left( \left[ \frac{\pi}{\omega} - \frac{\sin\left(2\omega \cdot \frac{\pi}{\omega}\right)}{2\omega} \right] - \left[ 0 - \frac{\sin(0)}{2\omega} \right] \right)$$
    
    $$V_{\text{MS}} = \frac{\omega V_m^2}{2\pi} \left( \frac{\pi}{\omega} - \frac{\sin(2\pi)}{2\omega} - 0 \right)$$
    
5. Since $\sin(2\pi) = 0$, the expression simplifies beautifully:
    
    $$V_{\text{MS}} = \frac{\omega V_m^2}{2\pi} \left( \frac{\pi}{\omega} \right) = \frac{V_m^2}{2}$$
    

#### **Meaning of the Answer & Real-Life Application**

The resulting value, $V_{\text{MS}} = \frac{V_m^2}{2}$, means that the average of the squared voltage over time is exactly half of its peak value squared. If you take the square root of this result, you get the **Root Mean Square Voltage**:

$$V_{\text{rms}} = \frac{V_m}{\sqrt{2}} \approx 0.707 V_m$$

In real-world power distribution, AC voltage continuously changes over time, meaning you cannot simply use peak voltage to calculate how much work a circuit can do. The RMS value acts as the steady "DC-equivalent" value. For example, household wall outlets in North America supply roughly $170\text{V}$ peak voltage ($V_m$). By applying this integration principle, engineers determine that the effective power delivered corresponds to an RMS value of $120\text{V}$, which dictates how electrical appliances and safety grid components are safely rated.
