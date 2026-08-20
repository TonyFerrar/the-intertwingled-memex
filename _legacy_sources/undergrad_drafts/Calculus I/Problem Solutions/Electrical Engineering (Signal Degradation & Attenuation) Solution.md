An electrical engineer measures the voltage decay of a high-frequency AC transmission line passing through an inductive underwater conduit. The output voltage function $V(t)$ (in Volts) over time $t$ (in milliseconds) is dictated by a multi-factor expression:
$$V(t) = \frac{e^{-2t} \cdot \sin(3t)}{\sqrt{t^2 + 5}}$$

**Engineering Task:** Use logarithmic differentiation to find an expression for the rate of voltage change over time ($\frac{dV}{dt}$). Evaluate this rate exactly at $t = 2\text{ ms}$ assuming $V(2) \approx 0.0104\text{ V}$.

#### **Solution:**
1. Take the natural logarithm of both sides of the voltage expression:
   $$\ln V = \ln\left[ \frac{e^{-2t} \cdot \sin(3t)}{(t^2 + 5)^{1/2}} \right]$$
2. Expand the right side using logarithmic product, quotient, and power laws:
   $$\ln V = \ln(e^{-2t}) + \ln(\sin(3t)) - \ln(t^2 + 5)^{1/2}$$
   $$\ln V = -2t + \ln(\sin(3t)) - \frac{1}{2}\ln(t^2 + 5)$$
3. Differentiate implicitly with respect to time $t$, applying the chain rule to the internal trigonometric and log terms:
   $$\frac{1}{V}\frac{dV}{dt} = -2 + \frac{1}{\sin(3t)} \cdot (3\cos(3t)) - \frac{1}{2} \cdot \left(\frac{2t}{t^2 + 5}\right)$$
   $$\frac{1}{V}\frac{dV}{dt} = -2 + 3\cot(3t) - \frac{t}{t^2 + 5}$$
4. Multiply by $V$ to isolate the rate of voltage change $\frac{dV}{dt}$:
   $$\frac{dV}{dt} = V \cdot \left[ -2 + 3\cot(3t) - \frac{t}{t^2 + 5} \right]$$
5. Substitute the target operating metrics ($t = 2$, $V = 0.0104$):
   $$\frac{dV}{dt} = (0.0104) \cdot \left[ -2 + 3\cot(6) - \frac{2}{(2)^2 + 5} \right]$$
   Using a calculator in radian mode ($\cot(6) \approx -3.4364$):
   $$\frac{dV}{dt} = (0.0104) \cdot \left[ -2 + 3(-3.4364) - \frac{2}{9} \right]$$
   $$\frac{dV}{dt} = (0.0104) \cdot [ -2 - 10.3092 - 0.2222 ] = (0.0104) \cdot [-12.5314] \approx -0.1303\text{ V/ms}$$

#### **Engineering Meaning & Real-Life Application:**
* **Meaning of the Answer ($-0.1303$):** At exactly $2\text{ milliseconds}$, the system's electrical potential is falling at an instantaneous rate of $0.1303\text{ Volts per millisecond}$. 
* **Real-Life Application:** In signal processing and electrical infrastructure design, engineers use these rates to calculate **attenuation loss**. Knowing how rapidly a voltage wave weakens prevents data corruption across fiber-optic or copper communication lines. Because standard derivative rules would require an exceptionally long combinations of product and quotient steps prone to human arithmetic error, logarithmic differentiation allows signal diagnostic software to quickly map decay rates. This enables the calculation of where to position booster amplifiers along the pipeline to keep the signal clear.
