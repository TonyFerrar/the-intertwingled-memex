**Problem Context:** In a chemical processing facility, an engineer is monitoring an exothermic batch reaction. The temperature $T$ (in hundreds of degrees Celsius) inside the pressurized reactor vessel over the first few hours of operation is tracked via the model:
$$T(t) = -\frac{1}{12}t^4 + \frac{2}{3}t^3$$
where $t$ represents time in hours ($t \ge 0$).

**Questions:**
1. Determine the time $t$ at which the reactor temperature reaches its relative maximum.
2. Calculate the inflection point of the temperature function.

**Solution Analysis:**
1. **Extrema:** Find $T'(t) = -\frac{1}{3}t^3 + 2t^2$. Set equal to zero to find the critical points: $- \frac{1}{3}t^2(t - 6) = 0 \implies t = 0, \, t = 6$.
   * Evaluating the sign chart for $T'(t)$ shows that for $t < 6$, $T'(t) > 0$ (Temperature is increasing), and for $t > 6$, $T'(t) < 0$ (Temperature is decreasing). 
   * A **Relative Maximum** occurs at $t = 6$ hours, where $T(6) = -\frac{1}{12}(6)^4 + \frac{2}{3}(6)^3 = -108 + 144 = 36$ (i.e., $3600^\circ\text{C}$).
2. **Inflection Point:** Find $T''(t) = -t^2 + 4t$. Set equal to zero: $-t(t - 4) = 0 \implies t = 0, \, t = 4$.
   * For the interval $(0,4)$, $T''(t) > 0$ (Concave Up), and for $t > 4$, $T''(t) < 0$ (Concave Down).
   * The **Inflection Point** occurs at $t = 4$ hours, with a coordinate value of $T(4) = 21.33$ ($2133^\circ\text{C}$).

**Real-Life Application Meaning:** The relative maximum indicates that the temperature will peak exactly $6$ hours into the reaction before cooling down. However, the **inflection point at $t = 4$ hours** is the most critical metric for safety systems. Because the graph switches from concave up to concave down here, $t = 4$ represents the precise moment of **maximum thermal acceleration** (the reaction is heating up at its absolute fastest rate). If the safety systems do not engage emergency cooling before this $4$-hour threshold, the rapid internal acceleration could exceed the pressure relief limits of the containment vessel, leading to a dangerous thermal runaway explosion.