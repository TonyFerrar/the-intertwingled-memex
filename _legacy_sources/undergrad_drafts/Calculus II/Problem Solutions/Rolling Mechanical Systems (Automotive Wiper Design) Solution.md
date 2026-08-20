**Scenario:** An automotive engineer is designing the sweep of a new windshield wiper. The tip of the wiper blade is modeled by the parametric equations:
$x(t) = -20\cos(\pi t)$
$y(t) = 20\sin(\pi t)$
where $x$ and $y$ are measured in inches from the pivot point at the base of the windshield, and $t$ is time in seconds. The wiper cycle runs for $0 \le t \le 1$.

**Problem:** Map the coordinates of the wiper tip at $t = 0, t = 0.5$, and $t = 1$. Determine the orientation of the wiper's sweep.

**Solution:**
*   **At $t = 0$:** 
    $x = -20\cos(0) = -20(1) = -20$
    $y = 20\sin(0) = 20(0) = 0$ 
    Start Point: $(-20, 0)$
*   **At $t = 0.5$:** 
    $x = -20\cos(\pi/2) = -20(0) = 0$
    $y = 20\sin(\pi/2) = 20(1) = 20$
    Mid Point: $(0, 20)$
*   **At $t = 1$:** 
    $x = -20\cos(\pi) = -20(-1) = 20$
    $y = 20\sin(\pi) = 20(0) = 0$
    End Point: $(20, 0)$

**Meaning & Real-Life Application:**
The math shows that over a 1-second interval, the wiper blade starts on the left side of the windshield $(-20, 0)$, sweeps up to the top-center $(0, 20)$, and finishes on the right side $(20, 0)$. For the engineer, mapping this orientation proves that the motor is calibrated correctly to sweep in a **clockwise** direction across the glass. If the equations had resulted in a counter-clockwise orientation starting from the right, the motor wiring or mechanical linkages would need to be reversed to function properly on the vehicle.
