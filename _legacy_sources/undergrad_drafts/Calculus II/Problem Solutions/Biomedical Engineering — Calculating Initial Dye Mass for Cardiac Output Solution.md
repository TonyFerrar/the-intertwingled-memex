A medical hardware engineer is calibrating an automated cardiovascular diagnostic monitor that uses the dye dilution method. The system is programmed to flag an error if a clinician accidentally injects the wrong initial mass of indicator dye ($D$). During a validation test on a calibration loop, the machine measures a constant fluid flow rate (cardiac output) of $R = 5.0\text{ L/min}$. The downstream sensor records the dye concentration curve over a 2-minute window ($t=0$ to $t=2$), matching the function:
$$C(t) = 4e^{-0.5t}\text{ mg}\cdot\text{min/L}$$
Using the cardiac output formula $R = \frac{D}{\int_{t_1}^{t_2} C(t) \, dt}$, rearrange the equation to find the exact initial mass $D$ of dye that was injected into the system.

#### Calculus Setup & Solution:
1. **Algebraically rearrange the equation to isolate the target variable ($D$):**
   $$D = R \cdot \int_{0}^{2} C(t) \, dt$$
   $$D = 5.0 \cdot \int_{0}^{2} 4e^{-0.5t} \, dt = 20 \cdot \int_{0}^{2} e^{-0.5t} \, dt$$
2. **Evaluate the definite integral using exponential rules:**
   $$\int_{0}^{2} e^{-0.5t} \, dt = \left[ \frac{1}{-0.5} e^{-0.5t} \right]_{0}^{2} = \left[ -2e^{-0.5t} \right]_{0}^{2}$$
   $$\text{Integral Value} = -2e^{-0.5(2)} - (-2e^0) = -2e^{-1} + 2 = 2 - 2e^{-1}$$
3. **Substitute the integral value back into the isolated equation for $D$:**
   $$D = 20 \cdot (2 - 2e^{-1}) = 40 - 40e^{-1}$$
4. **Compute the numerical value** (since $e^{-1} \approx 0.3679$):
   $$D \approx 40 - 40(0.3679) = 40 - 14.72 = 25.28\text{ mg}$$

#### Meaning of the Answer & Real-Life Engineering Application:
* **The Meaning:** The calculated value of **$25.28\text{ mg}$** represents the total absolute mass of dye initially introduced into the system to produce that specific downstream concentration profile at that exact flow velocity.
* **The Engineering Application:** Biomedical engineers write the internal firmware code for medical monitoring equipment based on this exact rearrangement. In clinical settings, doctors must know a patient's exact blood flow volume to diagnose heart failure. Since the medical device cannot directly measure the mass of dye inside a patient's beating heart, it tracks the external concentration curve over time, integrates it, multiplies it by the known pump calibration factor, and back-calculates the initial mass. If this calculated mass matches the expected input dosage, the device confirms the system is free of leaks or measurement obstructions and safely outputs an accurate cardiac health profile.