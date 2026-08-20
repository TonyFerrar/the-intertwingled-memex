A software engineer is programming the automated flight controller loop for a quadcopter drone. While maneuvering through a windy corridor, the vertical altitude profile (in meters) of the drone over time is modeled by the non-linear function:
$$A(t) = 12t - 3t^2$$

Real-world physical control loops cannot compute complex non-linear curves fast enough in real-time. Instead, the flight computer selects the drone's current operating time $t = 1\text{ second}$ and uses a **linearization (tangent line equation)** to predict short-term altitude changes millisecond by millisecond. 

**Using the limit definition of the derivative, find the tangent line equation used by the drone's flight controller at $t = 1$.**



#### Step-by-step Solution:

**Step 1: Find the point of tangency (Current Altitude)**
Evaluate the altitude function at the operational time baseline $t = 1$:
$$A(1) = 12(1) - 3(1)^2 = 12 - 3 = 9\text{ meters} \implies \text{Point: } (1, 9)$$

**Step 2: Find the slope of tangency (Instantaneous Vertical Velocity)**
Set up the limit definition of the derivative specifically evaluated at $t = 1$:
$$m = A'(1) = \lim_{h \to 0} \frac{A(1+h) - A(1)}{h}$$
$$m = \lim_{h \to 0} \frac{\left[12(1+h) - 3(1+h)^2\right] - 9}{h}$$

Expand and simplify the numerator expressions:
$$\text{Numerator} = 12 + 12h - 3(1 + 2h + h^2) - 9$$
$$\text{Numerator} = 12 + 12h - 3 - 6h - 3h^2 - 9$$
$$\text{Numerator} = -3h^2 + 6h$$

Substitute back into the limit fraction and cancel out the $h$ term:
$$m = \lim_{h \to 0} \frac{-3h^2 + 6h}{h} = \lim_{h \to 0} \frac{h(-3h + 6)}{h} = \lim_{h \to 0} (-3h + 6)$$

Evaluate by setting $h = 0$:
$$m = -3(0) + 6 = 6\text{ m/s}$$

**Step 3: Build the linearization equation**
Using point-slope form with point $(1, 9)$ and velocity slope $m = 6$:
$$y - 9 = 6(x - 1)$$
$$y - 9 = 6x - 6 \implies y = 6x + 3$$

**Engineering Conclusion:**
The linear function programmed into the flight controller microchip is **$A_{\text{linear}}(t) = 6t + 3$**. For fractions of a second around $t = 1$, the computer can use this basic line to process rapid navigation updates without overloading its CPU.

---