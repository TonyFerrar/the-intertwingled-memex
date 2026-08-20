**Context:** An aerospace propulsion engineer needs to analyze the acceleration profile of a vertical launch vehicle. The total change in velocity $\Delta v$ (in meters per second, $\text{m/s}$) achieved by burning fuel is modeled by the Tsiolkovsky Rocket Equation:
$$v(m) = v_e \ln\left(\frac{m_0}{m}\right)$$
Where $v_e = 2500 \text{ m/s}$ is the constant effective exhaust velocity, $m_0 = 50,000 \text{ kg}$ is the initial fully fueled wet mass of the rocket, and $m$ is the instantaneous current mass (in $\text{kg}$) as fuel depletes. 

The rocket burns through its propellant fuel supply over time $t$ (in seconds), meaning the instantaneous vehicle mass drops according to the consumption profile:
$$m(t) = 50,000 - 250t$$



**Task:** Use the Chain Rule to find the operational rate of change of the velocity with respect to time ($\frac{dv}{dt}$) exactly $t = 60$ seconds into the burn sequence.
