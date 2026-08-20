In aerospace engineering, components such as rubber O-rings must maintain structural flexibility across extreme temperatures. When a specific polymer is cooled, it undergoes a dramatic physical phase change at a critical threshold called the glass transition temperature ($T_g$). Below this temperature, its elasticity drops instantly as it turns brittle. 

The structural elasticity module $E$ as a function of temperature $T$ (in Kelvin) across a transition threshold of $T_g = 150\text{ K}$ is modeled by the piecewise function:
$$E(T) = \begin{cases} \frac{450}{T} &: T < 150 \\ 2.5 &: T = 150 \\ 0.02T - 0.5 &: T > 150 \end{cases}$$
Formally evaluate whether the elasticity function remains continuous at $T = 150\text{ K}$. If a discontinuity exists, classify its type and state what it means for a spacecraft operating in deep space.



#### Step-by-Step Solution:
* **Step 1: Check $E(150)$.** According to the explicit point equation:
  $$E(150) = 2.5 \quad \text{(Defined)}$$
* **Step 2: Check $\lim_{T \to 150} E(T)$.** Evaluate the left and right operational trajectories:
  * *Left-hand limit ($150^-$ - cold brittle state):* $$\lim_{T \to 150^-} \frac{450}{T} = \frac{450}{150} = 3$$
  * *Right-hand limit ($150^+$ - warm flexible state):* $$\lim_{T \to 150^+} (0.02T - 0.5) = 0.02(150) - 0.5 = 3 - 0.5 = 2.5$$
* **Step 3: Compare limit outputs.** Because the left-hand limit ($3$) does not equal the right-hand limit ($2.5$), the overall limit **does not exist**. 

#### Engineering Conclusion:
Because the one-sided limits are finite but unequal, $E(T)$ has a **jump discontinuity** at $150\text{ K}$. For an aerospace engineer, this step-down jump indicates that if a spacecraft drops below $150\text{ K}$, its structural seals will instantly lose a significant portion of their elasticity, presenting a risk of material shattering and catastrophic pressure loss.

---
