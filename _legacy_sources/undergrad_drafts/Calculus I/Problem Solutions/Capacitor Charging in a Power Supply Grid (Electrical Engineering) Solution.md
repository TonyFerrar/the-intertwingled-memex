An electrical engineer is monitoring a large capacitor bank used to smooth out voltage drops in an industrial power grid. When a major industrial machine kicks on at $t = 0$ seconds, the rate of change of the electrical charge $q(t)$ entering the capacitor is given by the current function:
$$\frac{dq}{dt} = 10e^{-2t} \quad (\text{in Amperes})$$
A hardware constraint dictates that at the exact moment the machine activates ($t = 0$), the capacitor already holds a residual background charge of $q(0) = 3\text{ Coulombs}$. Find the exact charge function $q(t)$ stored inside the capacitor over time.

**Solution:**
1. **Find the general solution for charge:** Integrate the current function with respect to time:
   $$q(t) = \int 10e^{-2t} \, dt$$
   Using the exponential integration shortcuts:
   $$q(t) = 10 \cdot \left( \frac{1}{-2}e^{-2t} \right) + C = -5e^{-2t} + C$$
2. **Solve for $C$ using the initial condition:** Substitute $t = 0$ and $q(0) = 3$. Remember that $e^0 = 1$:
   $$3 = -5e^{-2(0)} + C$$
   $$3 = -5(1) + C$$
   $$3 = -5 + C$$
   $$C = 8$$

**Final Charge Equation:**
$$q(t) = -5e^{-2t} + 8$$

**Meaning of the Answer & Real-Life Application:**
The function $q(t) = -5e^{-2t} + 8$ tracks the exact quantity of electrical energy accumulating inside the capacitor system over time. As time approaches infinity ($t \rightarrow \infty$), the exponential term $-5e^{-2t}$ shrinks to zero, showing that the total charge stabilizes at a maximum ceiling of $8\text{ Coulombs}$. Electrical grid engineers use this explicit function to ensure the capacitor recharges fast enough to protect fragile, expensive factory computer hardware from shutting down during localized grid voltage sags.