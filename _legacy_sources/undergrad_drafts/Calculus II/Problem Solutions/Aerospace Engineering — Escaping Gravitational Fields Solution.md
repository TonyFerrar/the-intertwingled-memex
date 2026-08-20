An aerospace engineer is calculating the energy (work) required to launch a small satellite vertically away from Earth's surface into a higher orbit. According to Newton's Law of Universal Gravitation, the attractive force pulling the satellite back depends on its distance $r$ from the center of the Earth and is modeled by a negative exponent force function:
$$F(r) = \frac{GMm}{r^2} = GMm \cdot r^{-2}$$
Where $GMm$ is a constant equal to $4.0 \times 10^{14}\text{ N}\cdot\text{m}^2$ for this specific satellite. Compute the total work required to move the satellite from Earth's surface ($r_1 = 6.4 \times 10^6\text{ m}$) to a safe orbit altitude ($r_2 = 8.0 \times 10^6\text{ m}$).

#### Calculus Setup & Solution:
1. **Set up the work integral:**
   $$W = \int_{6.4 \times 10^6}^{8.0 \times 10^6} (4.0 \times 10^{14})r^{-2} \, dr$$
2. **Apply the Power Rule for negative exponents:**
   $$W = (4.0 \times 10^{14}) \left[ -\frac{1}{r} \right]_{6.4 \times 10^6}^{8.0 \times 10^6}$$
3. **Evaluate the limits:**
   $$W = (4.0 \times 10^{14}) \left[ \left( -\frac{1}{8.0 \times 10^6} \right) - \left( -\frac{1}{6.4 \times 10^6} \right) \right]$$
   $$W = (4.0 \times 10^{14}) \left[ -1.25 \times 10^{-7} + 1.5625 \times 10^{-7} \right]$$
   $$W = (4.0 \times 10^{14}) \left[ 3.125 \times 10^{-8} \right]$$
   $$W = 12,500,000\text{ Joules}$$

#### Meaning of the Answer & Real-Life Engineering Application:
* **The Meaning:** The answer of **$12.5\text{ Mega-Joules (MJ)}$** represents the exact net amount of kinetic energy that must be imparted to the satellite by its rocket boosters to overcome Earth's gravitational pull over that specific distance.
* **The Engineering Application:** Rocket scientists and aerospace propulsion engineers use this precise work integral to determine the **Fuel Mass Ratio** required for launch vehicles. Rockets must carry enough liquid propellant to generate this exact amount of energy. If the integration technique is executed incorrectly—even by a tiny fraction—the rocket engine will cut out before the satellite reaches its target altitude, causing the multi-million dollar payload to fall back through the atmosphere and burn up.