An electrical engineer designs a battery management system (BMS) for a new electric vehicle. When the vehicle is unplugged from a charging station, its lithium-ion battery pack holds an initial electrical charge of $Q(0) = 45 \text{ Ampere-hours (Ah)}$. As the vehicle is driven, current is drawn from the battery. The net rate of change of the charge is monitored by a sensor and modeled by the function $Q'(t) = 2t - 18 \text{ Ah per hour}$ for the first few hours of operation.

- Find the function $Q(t)$ representing the total charge remaining in the battery pack at any time $t \ge 0$.
    

### Solution to Engineering Problem 1

Apply the generalized future value formula:

$$Q(t) = Q(0) + \int_{0}^{t} Q'(x) \, dx$$

Substitute $Q(0) = 45$ and rewrite $Q'(t)$ with the dummy variable $x$:

$$Q(t) = 45 + \int_{0}^{t} (2x - 18) \, dx$$

Integrate the rate expression:

$$Q(t) = 45 + \left[ x^2 - 18x \right]_{0}^{t}$$

Evaluate the definite integral boundaries:

$$Q(t) = 45 + (t^2 - 18t - 0)$$

$$Q(t) = t^2 - 18t + 45$$

**Meaning & Real-Life Application:** The resulting function $Q(t) = t^2 - 18t + 45$ provides the exact amount of stored energy available in the battery at any given elapsed hour of driving. The battery management system runs this calculus loop in real-time (a method known as "Coulomb counting"). By mapping this function directly to the driver’s dashboard display, the car can accurately update its remaining range prediction, alert the driver when power levels are low, and safely shut down auxiliary electronic systems before the physical charge hits absolute zero to protect the cells from degradation.