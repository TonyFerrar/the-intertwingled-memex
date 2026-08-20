An electrical engineer runs a diagnostic simulation on an experimental solar power inverter circuit during a high-speed electrical switching phase. The transient voltage curve $V(t)$ (in volts) across a delicate internal transistor is monitored over a time window from $t = 1$ to $t = 5$ milliseconds. Due to an uncompensated inductive kickback effect in the prototype circuit layout, the transient voltage is modeled by the function:

$$V(t) = \frac{24}{t - 3} \quad \text{for} \quad 1 \le t \le 5 \quad (t \neq 3)$$

Perform an EVT hypothesis test on this system over the interval $[1, 5]$. State whether the theorem applies, identify any failures, and explain what this mathematical outcome warns the engineer about regarding the real-world circuit hardware.

#### **Solution:**

- **Hypothesis Test 1 (Closed Interval):** The time framework is bounded from $1$ to $5$ milliseconds inclusive, establishing a closed interval $[1, 5]$. Pass.
    
- **Hypothesis Test 2 (Continuity):** The rational voltage function contains a zero-denominator term where $t - 3 = 0$, revealing a non-removable infinite discontinuity (vertical asymptote) at $t = 3\text{ ms}$.
    

Because the critical time coordinate $t = 3\text{ ms}$ lies directly inside our operational window $[1, 5]$, the function is **not continuous** on the interval.

**Conclusion:** The EVT **fails to apply** due to a violation of the continuity hypothesis.

#### **Meaning & Application:**

Because the continuity hypothesis is broken at $t = 3\text{ ms}$, the voltage function does not possess a finite absolute maximum value. Instead, as the clock approaches $t = 3$ milliseconds from the left ($t \to 3^-$), the voltage calculation spikes toward positive infinity ($V(t) \to \infty$).

In real-life electrical engineering, this breakdown of the EVT serves as a critical **catastrophic warning indicator**. It alerts the hardware engineer that the prototype circuit layout contains an uncontained electrical surge anomaly. Left unmodified, this infinite voltage climb translates to an instantaneous thermal runaway spike that will vaporize the transistor silicon substrate and cause a complete system fire. The engineer uses this hypothesis failure to justify redesigning the system architecture to include a protective clamping diode or snubber circuit before manufacturing physical test boards.