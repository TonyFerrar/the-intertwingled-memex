A mechanical engineer is designing a liquid cooling block for a high-performance computer CPU. When the computer suddenly shuts down, sensors record that the rate of change of the core processor's temperature $T(t)$ over time (in seconds) follows a standard exponential decay pattern:
$$\frac{dT}{dt} = -12e^{-t}$$
Find the general formula for the temperature function $T(t)$ over time.

**Solution:**
1. **Set up the integral:**
   $$T(t) = \int -12e^{-t} \, dt$$
2. **Isolate the constant and apply the exponential rule:** Bring the constant $-12$ outside. The antiderivative of $e^{-t}$ requires reversing the chain rule sign, yielding $-e^{-t}$:
   $$T(t) = -12 \cdot (-e^{-t}) + C$$
3. **Simplify:**
   $$T(t) = 12e^{-t} + C$$

**Meaning of the Answer & Real-Life Application:**
The function $T(t) = 12e^{-t} + C$ provides the exact cooling curve of the computer hardware. Mechanical engineers use this equation to determine how many seconds a system must remain powered down to safely dissipate heat to ambient room temperature before a user can safely handle internal components or restart the system without triggering thermal stress cracks.