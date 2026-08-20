An electrical engineer is testing the transient behavior of a specialized induction coil inside an RLC filter circuit. When the power grid experiences a momentary surge, the time-dependent current $i(t)$ (in Amperes) flowing through the component over time $t$ (in seconds) is modeled by a rate of change function. To find the general expression for the total net accumulated charge $Q(t)$ (in Coulombs) passing through the component, the engineer must evaluate the following indefinite integral:

$$Q(t) = \int 8t e^{-4t^2}\,dt$$

#### **Mathematical Solution using Skill 1:**

1. **Identify the Target (Structural Vision):** The inner function is trapped up in the exponent of the base $e$. We isolate the target function:
    
    $$u = -4t^2$$
    
2. **Compute the Differential Package:** Taking the derivative yields $du = -8t\,dt$, which means:
    
    $$-du = 8t\,dt$$
    
3. **Substitute and Evaluate:** Substitute $u$ and $-du$ back into the original expression:
    
    $$\int e^u (-du) = -\int e^u \,du = -e^u + C$$
    
4. **Revert back to the original domain:** Substitute $-4t^2$ back in for $u$:
    
    $$Q(t) = -e^{-4t^2} + C$$
    

#### **The Physical Meaning & Application:**

- **Meaning of the Answer:** The resulting antiderivative function, $Q(t) = -e^{-4t^2} + C$, represents the **general model for the total accumulated electrical charge** that has traversed the inductive component over a generic timeline. The constant $C$ acts as a baseline shift determined by initial circuit states (e.g., if $Q(0) = 0$, then $C = 1$, yielding $Q(t) = 1 - e^{-4t^2}$).
    
- **Real-Life Engineering Application:** Electrical engineering teams use this general indefinite integral expression to create automated tracking software for power grids. By leaving it as an open variable model, engineers can plug in different boundary values representing different surge durations ($t$). This allows them to calculate total energy dissipation across variable timelines, helping them size safety fuses and circuit breakers to ensure components won't melt or ignite a fire during an active power spike.
    