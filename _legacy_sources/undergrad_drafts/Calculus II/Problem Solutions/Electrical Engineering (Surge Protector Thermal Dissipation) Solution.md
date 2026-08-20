An electrical engineer is testing a new lightning surge protection device for a power substation. During a simulated grid strike, a transient current spike flows into a grounding circuit. The current over the first second is defined by the function $i(t) = t e^{-3t}$ amperes. To select a capacitor that can handle the sheer volume of electrical energy without melting, the engineer must determine the total accumulated electrical charge ($Q$) delivered by the surge by solving:

$$Q = \int_{0}^{1} t e^{-3t} \, dt$$

#### Solution:

1. **Execute Bidirectional Calculus Operations:**
* **Differentiate $u$:** $u = t \implies du = dt$
* **Integrate $dv$:** $dv = e^{-3t} \, dt \implies v = -\frac{1}{3}e^{-3t}$ *(Crucial sign and fractional tracking)*


2. **Apply the Definite Integration by Parts Formula:**

$$\int_{0}^{1} t e^{-3t} \, dt = \left[ -\frac{1}{3}te^{-3t} \right]_{0}^{1} - \int_{0}^{1} \left(-\frac{1}{3}e^{-3t}\right) \, dt$$


3. **Clean and Integrate:**

$$\int_{0}^{1} t e^{-3t} \, dt = \left[ -\frac{1}{3}te^{-3t} \right]_{0}^{1} + \frac{1}{3} \int_{0}^{1} e^{-3t} \, dt$$


$$\int_{0}^{1} t e^{-3t} \, dt = \left[ -\frac{1}{3}te^{-3t} - \frac{1}{9}e^{-3t} \right]_{0}^{1}$$


4. **Evaluate at the Boundaries:**
* **Upper Limit $(t = 1)$:** $-\frac{1}{3}(1)e^{-3} - \frac{1}{9}e^{-3} = -\frac{4}{9}e^{-3}$
* **Lower Limit $(t = 0)$:** $-\frac{1}{3}(0)e^{0} - \frac{1}{9}e^{0} = -\frac{1}{9}$

$$\text{Total} = \left(-\frac{4}{9}e^{-3}\right) - \left(-\frac{1}{9}\right) = \frac{1}{9} - \frac{4}{9}e^{-3} \approx 0.1111 - 0.4444(0.0498) \approx 0.0890$$





#### Meaning of the Answer & Real-Life Application:

The result of approximately $0.0890$ Coulombs represents the absolute total net electrical charge dumped into the system by the transient spike over its critical first second. Electrical components convert trapped charge directly into heat. With this precise mathematical figure, the engineer can look up the thermal capacity specs of their circuit materials and guarantee that the surge protector safely bleeds off the lightning strike without overheating or destroying sensitive digital control equipment down the line.