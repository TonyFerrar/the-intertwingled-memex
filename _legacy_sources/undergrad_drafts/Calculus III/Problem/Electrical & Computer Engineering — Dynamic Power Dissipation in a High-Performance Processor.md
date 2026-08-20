In modern microchip architecture, the local thermal power dissipation $P$ (in milliwatts) of a processing core transistor sub-grid depends heavily on its clock operating frequency $f$ (in gigahertz) and the logic supply voltage $V$ (in volts). The power equation is governed by:

$$P(f, V) = 12fV^2$$

To handle a demanding computation spike, an automated dynamic voltage and frequency scaling (DVFS) algorithm adjusts both operational settings concurrently. As a function of execution run-time $t$ (in milliseconds), the paths change by:

- $f(t) = 2 + \ln(t + 1)$
    
- $V(t) = 1.0 + 0.05t^2$
    

Determine the instantaneous rate of change of power dissipation, $\frac{dP}{dt}$, at $t = 1$ millisecond.