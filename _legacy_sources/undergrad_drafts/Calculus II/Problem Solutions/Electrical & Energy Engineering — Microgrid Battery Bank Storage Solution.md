A remote eco-resort operates an off-grid electrical system powered by a solar photovoltaic (PV) array paired with a localized lithium-ion battery storage bank. Due to shifting cloud cover and changing solar angles throughout the morning, the net power generation rate entering the battery bank fluctuates according to the variable function:
$$P(t) = 3t^2 - 24t + 60\text{ kiloWatts (kW)}$$
where $t$ represents the number of hours since sunrise ($0 \le t \le 6$). Recall from physics that electrical power is the exact rate of change of stored electrical energy ($P(t) = E'(t)$). If the battery bank holds an initial baseline charge of $400\text{ kiloWatt-hours (kWh)}$ of stored energy at the moment of sunrise ($t = 0$), calculate the total energy stored in the battery bank $6$ hours later.

#### Calculus Setup & Solution:
1. **Apply the Net Change Theorem:** Since power is the derivative of energy, the total energy at $t = 6$ is:
   $$E(6) = E(0) + \int_{0}^{6} P(t) \, dt$$
   $$E(6) = 400 + \int_{0}^{6} (3t^2 - 24t + 60) \, dt$$
2. **Evaluate the integral using the Power Rule:**
   $$\int_{0}^{6} (3t^2 - 24t + 60) \, dt = \left[ t^3 - 12t^2 + 60t \right]_{0}^{6}$$
   $$\text{Net Energy Accumulated} = \left( (6)^3 - 12(6)^2 + 60(6) \right) - (0)$$
   $$\text{Net Energy Accumulated} = (216 - 12(36) + 360) = (216 - 432 + 360)$$
   $$\text{Net Energy Accumulated} = 144\text{ kWh}$$
3. **Determine the final total energy:**
   $$E(6) = 400\text{ kWh} + 144\text{ kWh} = 544\text{ kWh}$$

#### Meaning of the Answer & Real-Life Engineering Application:
* **The Meaning:** The integral calculates that over the 6-hour morning window, the solar grid generated a net surplus of **$144\text{ kiloWatt-hours}$** of electrical energy above what the resort was actively consuming, raising the total battery storage level to **$544\text{ kWh}$**.
* **The Engineering Application:** Renewable energy power-systems engineers use net energy integrals to program automated microgrid switches and energy management systems (EMS). Batteries have strict physical constraints: overcharging a lithium-ion battery bank past its capacity can cause permanent cell degradation or thermal runaway (explosive fires). By integrating the variable power generation curve, the management software constantly projects the future accumulation state. If the integrated value indicates that $E(t)$ will hit the battery's maximum limit before the sun sets, the EMS automatically routes excess power away from the batteries and diverts it to secondary "dump loads," such as running water purification pumps or pre-cooling building air conditioning units.