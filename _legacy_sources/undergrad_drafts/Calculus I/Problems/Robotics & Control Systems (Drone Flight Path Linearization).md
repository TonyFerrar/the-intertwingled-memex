A software engineer is programming the automated flight controller loop for a quadcopter drone. While maneuvering through a windy corridor, the vertical altitude profile (in meters) of the drone over time is modeled by the non-linear function:
$$A(t) = 12t - 3t^2$$

Real-world physical control loops cannot compute complex non-linear curves fast enough in real-time. Instead, the flight computer selects the drone's current operating time $t = 1\text{ second}$ and uses a **linearization (tangent line equation)** to predict short-term altitude changes millisecond by millisecond. 

**Using the limit definition of the derivative, find the tangent line equation used by the drone's flight controller at $t = 1$.**
