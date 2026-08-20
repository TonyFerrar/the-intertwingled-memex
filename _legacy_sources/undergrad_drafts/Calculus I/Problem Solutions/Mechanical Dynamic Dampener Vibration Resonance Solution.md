A mechanical engineer tests a dynamic vibration dampener designed to stabilize a high-speed industrial turbine. A diagnostic graph tracks the kinetic displacement amplitude $A$ (in millimeters) against the rotational frequency $\omega$ (in hundreds of RPM) over the operational test span $[10, 50]$. The displacement is precisely modeled by the following polynomial function:

$$A(\omega) = 0.001\omega(\omega - 40)^2 + 0.1 \quad \text{for} \quad 10 \le \omega \le 50$$

The graph of this function exhibits:
1. Boundary solid dots at the endpoints: $(10, 9.1)$ and $(50, 5.1)$.
2. A local resonance peak at $(13.33, 9.58)$.
3. A smooth, rounded local valley (antiresonance) that bottoms out perfectly at $(40, 0.1)$.

Using the definitions of Skill 1, identify the **relative minimum value** and its **location**, and explain how this point is applied to real-life turbine operation.

#### **Solution:**
* **Relative Minimum Value:** $0.1\text{ mm}$
* **Location:** Rotational frequency $\omega = 40\text{ (4,000 RPM)}$

#### **Meaning & Application:**
The relative minimum value of $0.1\text{ mm}$ represents the **antiresonance state**, where the dampener is operating at peak performance and absorbing nearly all mechanical vibrations from the system. In mechanical plant operations, this information is used to establish the steady-state operating speed of the turbine. Running continuously at exactly 4,000 RPM ($\omega = 40$) ensures the machinery experiences the minimum wear and tear, reducing structural fatigue, preventing component failure, and extending the operational lifetime of the equipment.