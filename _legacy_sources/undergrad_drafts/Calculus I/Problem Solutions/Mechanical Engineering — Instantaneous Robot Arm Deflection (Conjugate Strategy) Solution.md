A robotics engineer is measuring the transient physical deflection ($D$, in millimeters) of a carbon fiber mechanical arm during a rapid high-speed pivot. The deflection profile varies with a time factor $t$ according to the function:

$$D(t) = \frac{\sqrt{t + 7} - 3}{t - 2}$$

Sensors must read the theoretical limit exactly at the critical transition time threshold of $t = 2\text{ seconds}$. Evaluate $\lim_{t\to2} D(t)$.

**Solution:**
1. **Direct Substitution Check:** Testing $t = 2$ yields $\frac{\sqrt{2 + 7} - 3}{2 - 2} = \frac{\sqrt{9} - 3}{0} = \frac{0}{0}$.
2. **Conjugate Multiplication:** Multiply the numerator and denominator by the radical conjugate $(\sqrt{t + 7} + 3)$:
   $$\lim_{t\to2}\frac{\sqrt{t + 7} - 3}{t - 2} \cdot \frac{\sqrt{t + 7} + 3}{\sqrt{t + 7} + 3}$$
3. **Simplify and Cancel:** Expand the numerator terms using the difference of squares, simplifying it directly to $(t - 2)$, then cancel it from the fraction:
   $$\lim_{t\to2}\frac{(t + 7) - 9}{(t - 2)(\sqrt{t + 7} + 3)} = \lim_{t\to2}\frac{t - 2}{(t - 2)(\sqrt{t + 7} + 3)} = \lim_{t\to2}\frac{1}{\sqrt{t + 7} + 3}$$
4. **Re-substitute:** Plug $t = 2$ back into the remaining components:
   $$\frac{1}{\sqrt{2 + 7} + 3} = \frac{1}{\sqrt{9} + 3} = \frac{1}{3 + 3} = \frac{1}{6}\text{ mm}$$
**Answer:** $\frac{1}{6}\text{ mm}$ (or approximately $0.167\text{ mm}$)