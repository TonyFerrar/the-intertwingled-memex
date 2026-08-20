**Context:** During the launch sequence of a rocket, the total aerodynamic drag force $F_d$ (in Newtons) acting against the structural casing depends directly on the localized atmospheric density $\rho$ (in $\text{kg/m}^3$) according to the structural load formula:
$$F_d(\rho) = 450,000\rho$$

The atmospheric density decreases exponentially as a function of altitude $z$ (in kilometers) above sea level:
$$\rho(z) = 1.2e^{-0.15z}$$

Furthermore, the rocket's vertical flight trajectory tracks altitude over time $t$ (in seconds) according to the kinematic performance equation:
$$z(t) = 0.05t^2 + 2t$$

**Task:** Use the Chain Rule to determine the dynamic rate of change of the structural drag force with respect to time ($\frac{dF_d}{dt}$) exactly $t = 10$ seconds into launch. 
