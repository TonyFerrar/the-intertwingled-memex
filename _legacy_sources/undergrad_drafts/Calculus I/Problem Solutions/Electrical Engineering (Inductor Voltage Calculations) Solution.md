An electrical engineer is testing a specialized inductor component. The time-varying current (in Amperes) passing through the inductor is dictated by the rational function $i(t) = \frac{6}{t}$. The fundamental physics equation tracking the instantaneous voltage $V(t)$ generated across an inductor with an inductance of $L = 0.5\text{ Henries}$ is given by the derivative relationship:
$$V(t) = L \cdot \frac{di}{dt}$$



**Using the limit definition of the derivative, find the algebraic equation for the voltage $V(t)$ across the inductor for any time $t > 0$.**

#### Step-by-step Solution:

**Step 1: Find the derivative of the current function $\frac{di}{dt}$ using limits**
Set up the limit definition using the rational function path:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{\frac{6}{t+h} - \frac{6}{t}}{h}$$

Find a common denominator for the numerator fractions, which is $t(t+h)$:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{\frac{6t - 6(t+h)}{t(t+h)}}{h}$$

Multiply by the reciprocal of $h$ and expand the upper terms:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{6t - 6t - 6h}{h \cdot t(t+h)}$$
$$\frac{di}{dt} = \lim_{h \to 0} \frac{-6h}{h \cdot t(t+h)}$$

Cancel out the variable $h$ to resolve the indeterminate form:
$$\frac{di}{dt} = \lim_{h \to 0} \frac{-6}{t(t+h)}$$

Evaluate the limit via direct substitution by setting $h = 0$:
$$\frac{di}{dt} = \frac{-6}{t(t+0)} = -\frac{6}{t^2}$$

**Step 2: Calculate the Voltage $V(t)$**
Substitute the calculated derivative and the given inductance value ($L = 0.5$) into the voltage equation:
$$V(t) = 0.5 \cdot \left(-\frac{6}{t^2}\right) = -\frac{3}{t^2}\text{ Volts}$$

---