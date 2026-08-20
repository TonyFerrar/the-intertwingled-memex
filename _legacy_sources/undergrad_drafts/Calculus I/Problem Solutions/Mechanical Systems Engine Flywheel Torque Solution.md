**Scenario:** A mechanical engineer is testing a prototype internal combustion engine. The net torque $\tau(\theta)$ (in Newton-meters, $\text{N}\cdot\text{m}$) applied to the flywheel changes dynamically depending on the angular position $\theta$ (in radians) of the crankshaft during the power stroke. The torque function over a portion of the rotation is:
$$\tau(\theta) = 5 + \sin(\theta)$$
The definite integral of torque with respect to angular displacement calculates the **net mechanical work done** (in Joules, J) on the engine components.

**Question:** Calculate the total mechanical work performed on the flywheel during a rotation span from $\theta = 0$ to $\theta = \pi$ radians.

**Step-by-Step Solution:**
1. Set up the definite integral representing work:
   $$\text{Work} = \int_{0}^{\pi} (5 + \sin(\theta)) \, d\theta$$
2. Identify the antiderivatives. Recall that $\int \sin(\theta) d\theta = -\cos(\theta)$:
   $$W(\theta) = 5\theta - \cos(\theta)$$
3. Set up the FTOC bounds:
   $$\int_{0}^{\pi} (5 + \sin(\theta)) \, d\theta = \Big[ 5\theta - \cos(\theta) \Big]_{0}^{\pi}$$
4. Evaluate at the upper limit ($\theta = \pi$):
   $$F(\pi) = 5\pi - \cos(\pi)$$
   Since $\cos(\pi) = -1$, manage the double-negative carefully:
   $$F(\pi) = 5\pi - (-1) = 5\pi + 1$$
5. Evaluate at the lower limit ($\theta = 0$):
   $$F(0) = 5(0) - \cos(0)$$
   Since $\cos(0) = 1$:
   $$F(0) = 0 - 1 = -1$$
6. Compute $F(\pi) - F(0)$ using brackets to safely handle signs:
   $$\text{Work} = (5\pi + 1) - (-1) = 5\pi + 1 + 1 = 5\pi + 2$$
7. Substitute $\pi \approx 3.1416$:
   $$\text{Work} = 5(3.1416) + 2 = 15.708 + 2 = 17.708\text{ Joules}$$

#### 💡 Meaning of the Answer & Real-Life Application
* **Meaning of the Value:** The value of approximately $17.71\text{ J}$ indicates the total net energy transferred into the mechanical flywheel over this specific half-rotation.
* **Real-Life Application:** Flywheels are heavy, spinning discs designed to store rotational kinetic energy to smooth out fluctuations in engine power. Mechanical engineers must calculate this integrated work output across various rotational segments to ensure the flywheel has enough inertia to keep the engine spinning steadily between power strokes, preventing engine stalling or excessive drivetrain vibration.