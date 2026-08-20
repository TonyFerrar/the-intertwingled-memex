An aerospace engineer is testing a wing flap assembly exposed to periodic high-speed wind gusts. The structural deflection distance $D$ (in centimeters) of the metal alloy, operating near its destructive resonant frequency threshold $\omega_0 = 3\text{ rad/s}$, is governed by the frequency equation:
$$D(\omega) = \frac{18 - 2\omega^2}{3 - \omega}$$
Where $\omega$ is the forced vibration frequency of the wind. Classify the mathematical behavior and find the exact structural deflection at the critical resonance boundary by evaluating:
$$\lim_{\omega\to 3} D(\omega)$$

#### **Solution:**
1. **Identify and Classify the Form:** Direct substitution of $\omega = 3$ yields:
   * Numerator: $18 - 2(3)^2 = 18 - 18 = 0$
   * Denominator: $3 - 3 = 0$
   * **Classification:** $\frac{0}{0}$ Indeterminate Form.
2. **Apply L'Hôpital's Rule:** $$\lim_{\omega\to 3} \frac{18 - 2\omega^2}{3 - \omega} \overset{\text{L'H}}{=} \lim_{\omega\to 3} \frac{\frac{d}{d\omega}[18 - 2\omega^2]}{\frac{d}{d\omega}[3 - \omega]} = \lim_{\omega\to 3} \frac{-4\omega}{-1} = \lim_{\omega\to 3} 4\omega$$
3. **Evaluate the Limit:**
   $$4(3) = 12\text{ cm}$$

#### **Meaning of the Answer & Real-Life Application:**
The result shows that right at the critical boundary frequency of $3\text{ rad/s}$, the physical structural deflection stabilizes at a determinate value of $12\text{ cm}$. In aerospace design, knowing whether a boundary limit blows up to infinity or settles at a finite value is a matter of safety. Because this indeterminate form resolves to a stable $12\text{ cm}$, mechanical engineers can verify whether the aluminum alloy has enough elastic clearance within the wing assembly housing to flex by $12\text{ cm}$ without striking surrounding internal components and tearing the flap off during flight.
