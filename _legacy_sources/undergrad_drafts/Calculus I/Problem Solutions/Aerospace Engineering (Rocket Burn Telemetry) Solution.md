During a static firing test of a solid rocket booster prototype, an automated telemetry sensor monitors the total mass of the rocket engine assembly. As the solid propellant matrix ignites and burns away, the mass (in kilograms) decreases according to the polynomial profile:
$$M(t) = 800 - 12t^2$$

The instantaneous rate of change of mass over time, $\frac{dM}{dt}$, represents the mass flow rate of the fuel combustion. **Using the limit definition of the derivative, calculate the mass flow rate of the rocket engine at exactly $t = 5\text{ seconds}$ into the test.**

#### Step-by-step Solution:

**Step 1: Set up the limit definition of the derivative for $M(t)$**
$$M'(t) = \lim_{h \to 0} \frac{M(t+h) - M(t)}{h}$$
$$M'(t) = \lim_{h \to 0} \frac{[800 - 12(t+h)^2] - (800 - 12t^2)}{h}$$

**Step 2: Expand the polynomial expression**
Expand the squared time binomial $(t+h)^2 = t^2 + 2th + h^2$:
$$M'(t) = \lim_{h \to 0} \frac{800 - 12(t^2 + 2th + h^2) - 800 + 12t^2}{h}$$
$$M'(t) = \lim_{h \to 0} \frac{800 - 12t^2 - 24th - 12h^2 - 800 + 12t^2}{h}$$

**Step 3: Simplify the numerator**
Cancel out the constants ($800 - 800 = 0$) and the non-$h$ variables ($-12t^2 + 12t^2 = 0$):
$$M'(t) = \lim_{h \to 0} \frac{-24th - 12h^2}{h}$$

**Step 4: Factor out and cancel $h$**
$$M'(t) = \lim_{h \to 0} \frac{h(-24t - 12h)}{h}$$
$$M'(t) = \lim_{h \to 0} (-24t - 12h)$$

**Step 5: Evaluate the general derivative function**
Substitute $h = 0$ to get the final mass flow rate formula:
$$M'(t) = -24t - 12(0) = -24t$$

**Step 6: Compute the value at the specific engineering target ($t = 5$)**
$$M'(5) = -24(5) = -120\text{ kg/s}$$

**Engineering Conclusion:**
At exactly 5 seconds into the test, the rocket motor is expelling mass at a rate of **$120\text{ kg/s}$** (the negative sign indicates that total system mass is decreasing as the propellant exits the exhaust nozzle).