**Context:** An aerospace engineer is programming the automated autopilot adjustment logic for a commercial aircraft's wing flaps to smooth out flight paths during severe turbulence. Due to a sensor processing delay, the software's corrective flap adjustment angle $\theta_n$ (in degrees) at clock cycle $n$ follows this sequence formula:

$$\theta_n = 1 + (-1.3)^n$$

Determine whether this control loop sequence converges or diverges.

#### Solution

Evaluate the long-term behavior of the corrective angle by taking the limit as clock cycle $n \to \infty$:

$$\lim_{n \to \infty} \left( 1 + (-1.3)^n \right)$$

Look closely at the exponential term $(-1.3)^n$. Because the base is negative, the sign will flip back and forth between positive and negative values every single step. Furthermore, because the absolute value of the base is greater than 1 ($\vert{}-1.3\vert{} = 1.3 > 1$), the numbers will grow larger in magnitude with each step.

- For $n = 1$: $1 + (-1.3)^1 = -0.3^{\circ}$
    
- For $n = 2$: $1 + (-1.3)^2 = 1 + 1.69 = 2.69^{\circ}$
    
- For $n = 3$: $1 + (-1.3)^3 = 1 - 2.197 = -1.197^{\circ}$
    
- For $n = 4$: $1 + (-1.3)^4 = 1 + 2.856 = 3.856^{\circ}$
    

The values bounce back and forth while growing violently larger. The limit does not exist.

#### Meaning of the Answer & Real-Life Application

The sequence **diverges** due to growing oscillation.

In aerospace engineering, a divergent control sequence indicates a catastrophic **unstable feedback loop** known as pilot-induced or system-induced oscillation. Instead of minor corrections flattening out the flight path, the autopilot system is wildly over-correcting with every clock cycle. The wing flaps will swing up and down with increasing violence until they tear off the aircraft or cause a total loss of control. Identifying this divergence tells the engineer that they must immediately change the system parameters to force the sequence to converge to a stable, safe value.