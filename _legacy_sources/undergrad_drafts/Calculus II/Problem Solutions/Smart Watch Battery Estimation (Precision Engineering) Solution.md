**Scenario:** A smart watch uses a lithium-ion battery. The battery's voltage discharge over time (in hours) under low-power sleep mode is modeled by the exponential decay function $V(t) = 4.2 e^{-0.05t}$. Waking up the watch's main Floating Point Unit (FPU) to calculate $e^x$ drains the battery rapidly. 

**Problem:** To preserve power, the ultra-low-power sub-processor estimates the voltage at $t = 2$ hours using a 2nd-degree Maclaurin polynomial for the exponential function. Calculate the estimated voltage using this approximation.

**Solution:**
We know the Maclaurin series for $e^u = 1 + u + \frac{u^2}{2!} + \dots$
Let $u = -0.05t$. The 2nd-degree polynomial is:
$$ p_2(u) = 1 + u + \frac{u^2}{2} $$
Substitute $t = 2$ into our exponent expression: $u = -0.05(2) = -0.1$.
Now, evaluate the polynomial at $u = -0.1$:
$$ p_2(-0.1) = 1 + (-0.1) + \frac{(-0.1)^2}{2} $$
$$ p_2(-0.1) = 1 - 0.1 + \frac{0.01}{2} = 0.9 + 0.005 = 0.905 $$
Finally, multiply by the initial voltage constant $4.2$:
$$ V(2) \approx 4.2 \times 0.905 = 3.801 \text{ Volts} $$

**Meaning in Real-Life Application:**
The exact voltage is $4.2 e^{-0.1} \approx 3.8003$ Volts. The approximation of $3.801$ V is remarkably close. In the context of engineering, **this prevents the smart watch from accidentally killing its own battery.** The ultra-low-power processor can accurately estimate the remaining battery life using basic multiplication ($(-0.1)^2$) and addition, updating the user's screen silently without ever turning on the power-hungry main computer chip to calculate a true exponential function.