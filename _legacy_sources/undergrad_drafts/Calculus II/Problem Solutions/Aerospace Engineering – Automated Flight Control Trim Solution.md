**Context:** Autopilot and automated stabilization systems continuously adjust aircraft control surfaces to handle changing winds and aerodynamic forces.
    
- **Problem:** To maintain a perfectly level cruise altitude, an aircraft's automated flight computer calculates mechanical adjustments for the elevator flap angle ($p_1$) and aileron flap angle ($p_2$) using these aerodynamic moment equations:
    
    $$\begin{cases} 3p_1 + 2p_2 = 14 \\ p_1 - 5p_2 = -12 \end{cases}$$
    
    Express this automated flight trim configuration as an $Ax = b$ matrix equation.
    

#### Solution & Array Construction

Extract the coefficients directly from the aligned control parameters:

$$\begin{bmatrix} 3 & 2 \\ 1 & -5 \end{bmatrix} \begin{bmatrix} p_1 \\ p_2 \end{bmatrix} = \begin{bmatrix} 14 \\ -12 \end{bmatrix}$$

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Answer:** The isolated values in the solution vector represent the exact mechanical deflection angles (measured in degrees) required for each control flap.
    
- **Real-Life Application:** During flight, an onboard computer solves thousands of these matrix variations every second. The resulting output angles are sent directly to hydraulic actuators that adjust the plane's wings and tail, keeping the aircraft stable during turbulence and providing a smooth flight experience without requiring manual pilot steering.