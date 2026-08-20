**Scenario:** An aerospace computer tracking system logs the altitude adjustment variable of a small research rocket. The mathematical relationship governing the atmospheric drag factor over time $t$ (in seconds) is represented by:
$$D(t) = \frac{t^4 + t^2}{\sqrt{t}}$$
To optimize the automated engine throttle, the guidance system needs the instantaneous rate of change of this drag factor, $D'(t)$.

**Your Task:**
1. Pre-process $D(t)$ by rewriting the fraction as a single polynomial line before differentiating (do not use the Quotient Rule).
2. Differentiate to find $D'(t)$.
3. Explain what this derivative means in an engineering context.

#### Solution:
* **Step 1: Pre-Process**
  Rewrite the denominator as $t^{\frac{1}{2}}$ and separate the terms:
  $$D(t) = \frac{t^4}{t^{\frac{1}{2}}} + \frac{t^2}{t^{\frac{1}{2}}}$$
  Subtract the exponents to simplify $\left(4 - \frac{1}{2} = \frac{7}{2}\right)$ and $\left(2 - \frac{1}{2} = \frac{3}{2}\right)$:
  $$D(t) = t^{\frac{7}{2}} + t^{\frac{3}{2}}$$

* **Step 2: Differentiate**
  Apply the standard Power Rule:
  $$D'(t) = \frac{7}{2}t^{\frac{5}{2}} + \frac{3}{2}t^{\frac{1}{2}}$$

* **Step 3: Post-Process**
  Factor out the lowest power, which is $\frac{1}{2}t^{\frac{1}{2}}$:
  $$D'(t) = \frac{1}{2}t^{\frac{1}{2}}(7t^2 + 3)$$
  Convert back to radical form:
  $$D'(t) = \frac{\sqrt{t}(7t^2 + 3)}{2}$$

* **Engineering Context Interpretation:**
  The derivative $D'(t)$ measures the **jerk-level profile of aerodynamic drag forces** acting on the rocket hull per second. As a rocket accelerates through varying layers of the atmosphere, drag does not increase linearly. By simplifying the derivative into the format $\frac{\sqrt{t}(7t^2 + 3)}{2}$, the automated flight guidance computer can evaluate this equation in microseconds. If $D'(t)$ yields an excessively high value, it indicates that the air resistance is building up too quickly, which could cause structural buckling or shred the fins. The computer uses this value to calculate exactly when to temporarily throttle down the rocket engines (known as passing through Max Q, or maximum dynamic pressure) to safeguard the structural integrity of the spacecraft.