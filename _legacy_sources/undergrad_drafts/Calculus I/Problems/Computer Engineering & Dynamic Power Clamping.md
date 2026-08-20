In microprocessor architecture, thermal throttling systems adjust power allocation based on clock speed to prevent the CPU from melting. If a core's processing speed spikes past a safety threshold, the system immediately cuts voltage. 

The core voltage $V$ (in Volts) as a function of the operational clock frequency $f$ (in GHz) across a transition safety threshold of $f = 4.0\text{ GHz}$ is governed by the following system rule:
$$V(f) = \begin{cases} 0.25f + 0.3 &: f < 4.0 \\ 1.5 &: f = 4.0 \\ 2.1 - 0.15f &: f > 4.0 \end{cases}$$
Formally evaluate whether the dynamic power manager's voltage delivery profile is continuous at $f = 4.0\text{ GHz}$. If a discontinuity exists, classify its type and state its hardware implications.

