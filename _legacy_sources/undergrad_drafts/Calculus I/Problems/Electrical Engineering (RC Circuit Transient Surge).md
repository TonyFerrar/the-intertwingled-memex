**Context:** An electrical engineer is monitoring a discharging capacitor circuit in a automated system. The voltage $V$ (in Volts) across the capacitor decays exponentially over time $t$ (in seconds) according to the classic transient decay function:
$$V(t) = 12e^{-2t}$$

However, this specific circuit is linked to an industrial automated thermal controller where the system clock speed fluctuates based on temperature shifts. The clock's time parameter varies dynamically according to the operating temperature $\theta$ (in degrees Celsius, $^\circ\text{C}$), modeled by:
$$t(\theta) = 0.5\theta^2 + \theta$$

**Task:** Use the Chain Rule in Leibniz Notation to find the instantaneous rate of change of the voltage with respect to temperature ($\frac{dV}{d\theta}$) when the operating temperature reaches $\theta = 2^\circ\text{C}$.
