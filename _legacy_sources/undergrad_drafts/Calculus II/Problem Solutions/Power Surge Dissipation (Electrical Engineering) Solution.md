An electrical engineer is analyzing the voltage recovery of an industrial backup generator after a sudden power trip. The frequency-domain equation for the circuit's voltage behavior is structured as:

$$\frac{4}{(s + 1)(s^2 + 1)} = \frac{A}{s + 1} + \frac{Bs + C}{s^2 + 1}$$

**Your Task:** Calculate the exact numerical values of $A$, $B$, and $C$ to determine the power profile.

**Solution:**

1. **Clear the fractions**:
    
    $$4 = A(s^2 + 1) + (Bs + C)(s + 1)$$
    
2. **Expand and collect like terms**:
    
    $$4 = (A + B)s^2 + (B + C)s + (A + C)$$
    
3. **Set up the linear system** by matching coefficients:
    
    - $s^2$ terms: $A + B = 0 \implies B = -A$
        
    - $s^1$ terms: $B + C = 0 \implies C = -B \implies C = A$
        
    - $s^0$ (constants): $A + C = 4$
        
4. **Solve:** Substitute $C = A$ into the constant equation: $A + A = 4 \implies 2A = 4 \implies A = 2$.
    
    - Therefore, $B = -2$ and $C = 2$.
        

#### 📊 The Meaning & Application to Real Life

- **The Meaning of the Answer:** The solved constants yield the exact mathematical components of the voltage response over time: $2\cdot e^{-t} - 2\cdot\cos(t) + 2\cdot\sin(t)$. The constant $A=2$ represents the magnitude of a decaying DC voltage surge, while $B=-2$ and $C=2$ dictate the amplitude of the alternating current (AC) grid oscillation.
    
- **Real-Life Impact:** Armed with these exact integers, the engineer knows the power grid will temporarily surge by precisely $2\text{ Volts}$ exponentially before settling into an alternating wave with a peak variance of $\sqrt{(-2)^2 + 2^2} \approx 2.83\text{ Volts}$. This allows them to install a physical surge protector rated precisely for those values, ensuring the backup generator doesn't fry connected factory electronics when it kicks online.
    