An electrical engineer is analyzing a transient surge-protection circuit designed to protect delicate microchips from lightning strikes. When a voltage spike hits, a large capacitor safely captures the electrical energy and then safely dissipates it across a resistor over time. The rate of power dissipation (energy leaving the circuit per second) drops exponentially and is modeled by the function:
$$P(t) = 50e^{-200t}\text{ Watts (Joules/second)}$$
where $t$ represents seconds. Integrate this power rate function from $t = 0$ to $t = 0.02\text{ seconds}$ to find the total heat energy dissipated by the resistor during the critical initial phase of the surge.

#### Calculus Setup & Solution:
1. **Set up the energy integral:** Total energy is the integral of power over time:
   $$E = \int_{0}^{0.02} 50e^{-200t} \, dt$$
2. **Apply the Exponential Integration Rule:** Divide the coefficient $50$ by the exponent's multiplier $-200$:
   $$E = \left[ \frac{50}{-200}e^{-200t} \right]_{0}^{0.02} = \left[ -0.25e^{-200t} \right]_{0}^{0.02}$$
3. **Evaluate the limits:**
   $$E = \left( -0.25e^{-200(0.02)} \right) - \left( -0.25e^{-200(0.0)} \right) = -0.25e^{-4} - (-0.25e^0)$$
   $$E = -0.25e^{-4} + 0.25(1)$$
4. **Compute the numerical approximation** (since $e^{-4} \approx 0.0183$):
   $$E \approx -0.25(0.0183) + 0.25 = -0.0046 + 0.25 = 0.2454\text{ Joules}$$

#### Meaning of the Answer & Real-Life Engineering Application:
* **The Meaning:** The answer of **$0.2454\text{ Joules}$** represents the gross thermal energy transferred from electrical storage into raw heat by the resistor in the first $20$ milliseconds of the surge event.
* **The Engineering Application:** Circuit designers and electrical hardware engineers use this energy dissipation value to select the correct physical **Wattage Rating** and material composition of resistors. When a resistor converts electrical energy into heat, its internal temperature spikes. If the total integrated heat energy ($0.2454\text{ J}$) is concentrated too quickly in a resistor that is physically too small, the component will literally melt or explode, creating an open circuit that allows the remaining high-voltage lightning surge to pass directly into the device's CPU, destroying the electronics.
