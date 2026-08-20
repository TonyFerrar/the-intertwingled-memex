An automated intravenous (IV) infusion pump delivers an anti-inflammatory drug directly into a patient's bloodstream. Once inside the body, the patient's kidneys and liver continuously clear the medication. The net rate of change of the drug's mass in the patient's body is tracked by the variable function:
$$A'(t) = -30e^{-0.15t}\text{ mg/hour}$$
where $t$ is the number of hours since the IV pump was turned off. If the patient has exactly $250\text{ mg}$ of active drug remaining in their system at the moment the pump stops ($t = 0$), calculate the mass of the drug left in their system after $6$ hours.

#### Calculus Setup & Solution:
1. **Apply the Net Change Theorem:** The total mass at $t = 6$ is the initial mass plus the integral of the rate of change:
   $$A(6) = A(0) + \int_{0}^{6} -30e^{-0.15t} \, dt$$
2. **Evaluate the integral:**
   $$\int_{0}^{6} -30e^{-0.15t} \, dt = \left[ \frac{-30}{-0.15}e^{-0.15t} \right]_{0}^{6} = \left[ 200e^{-0.15t} \right]_{0}^{6}$$
   $$\text{Net Change} = 200e^{-0.15(6)} - 200e^{0} = 200e^{-0.9} - 200$$
3. **Compute the numerical approximation:** Since $e^{-0.9} \approx 0.4066$:
   $$\text{Net Change} \approx 200(0.4066) - 200 = 81.32 - 200 = -118.68\text; mg}$$
4. **Determine the final mass:**
   $$A(6) = 250\text{ mg} - 118.68\text{ mg} = 131.32\text{ mg}$$

#### Meaning of the Answer & Real-Life Engineering Application:
* **The Meaning:** The net change value indicates that over the course of 6 hours, the patient's metabolic systems successfully cleared **$118.68\text{ mg}$** of the drug from their body, leaving exactly **$131.32\text{ mg}$** active in the tissue.
* **The Engineering Application:** Biomedical engineers design the control algorithms inside smart IV pumps using these exact pharmacokinetic clearance integrals. Every drug has a specific **Therapeutic Window**—if the active mass drops too low (e.g., below $100\text{ mg}$), the drug becomes completely ineffective; if it rises too high, it becomes toxic. By integrating this clearance rate, engineers can program the pump to sound an alert or automatically turn back on to deliver a "booster dose" the exact minute the integrated active mass approaches the lower boundary, ensuring automated, continuous patient safety.