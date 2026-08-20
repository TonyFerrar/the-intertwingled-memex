A structural engineer modeling the dynamic wind load on a pedestrian bridge determines that the maximum structural vibration amplitude $A$ as a function of the wind's driving frequency $\omega$ (measured in rad/s) is given by:
$$A(\omega) = \frac{15}{64 - \omega^2}$$
The bridge has a critical natural frequency at $\omega = 8\text{ rad/s}$. To safely install mechanical dampers, the engineering team needs to know how the structural amplitude behaves as the wind frequency increases and approaches this critical frequency from a lower speed. 

Evaluate the limit below to find the structural amplitude profile:
$$\lim_{\omega \to 8^{-}} \frac{15}{64 - \omega^2}$$

#### Step-by-Step Solution:
1. **Identify the Mathematical Form:**
   Direct substitution of $\omega = 8$ yields $\frac{15}{64 - 8^2} = \frac{15}{0}$. This signifies an infinite limit and a mechanical resonance obstacle.
2. **Interpret the Directional Approach:**
   The notation $\omega \to 8^{-}$ means the wind speed frequency is ramping up toward $8$ from the left side (values slightly below $8$, such as $\omega = 7.99$).
3. **Analyze the Component Signs:**
   * **Numerator:** $15$ is a fixed **positive** constant.
   * **Denominator:** Substitute a value slightly less than $8$ into $64 - \omega^2$:
     $$64 - (7.99)^2 = 64 - 63.8401 = +0.1599$$
     Because the value is greater than zero, the denominator approaches zero through **positive** values ($0^+$).
4. **Determine the Behavioral Outcome:**
   $$\frac{\text{Positive Constant}}{\text{Tiny Positive Number}} \longrightarrow +\infty$$
5. **Engineering Interpretation:**
   $$\lim_{\omega \to 8^{-}} \frac{15}{64 - \omega^2} = \infty$$
   As the wind frequency nears the natural structural frequency from below, the vibration amplitude grows without bound. This mathematically confirms catastrophic resonance failure, demonstrating exactly why dampening hardware must be tuned to dissipate energy before reaching $8\text{ rad/s}$.

---