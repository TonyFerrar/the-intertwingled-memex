An electrical engineer is designing insulation for a high-voltage component. The electric field strength $E(x)$ as a function of distance $x$ away from a localized charge is given by $E(x) = \frac{12}{x^2}$. To find the total electric potential $V$ at a distance of $x = 3$ meters, the engineer must integrate the electric field from that point out to infinity:

$$V = \int_{3}^{\infty} \frac{12}{x^2} \, dx$$

#### **Step 1: Diagnosis**

The upper limit of integration is infinity ($\infty$). The function $\frac{12}{x^2}$ is only discontinuous at $x = 0$, which is safely outside our interval $[3, \infty)$. Therefore, this is classified as a **Type I improper integral**.

#### **Step 2: Solution**

$$\lim_{t \to \infty} \int_{3}^{t} 12x^{-2} \, dx = \lim_{t \to \infty} \left[ -\frac{12}{x} \right]_3^t$$

$$= \lim_{t \to \infty} \left( -\frac{12}{t} - \left(-\frac{12}{3}\right) \right)$$

$$= \lim_{t \to \infty} \left( -\frac{12}{t} + 4 \right) = 0 + 4 = 4$$

#### **Meaning of the Answer & Real-Life Application**

- **Meaning:** The integral converges to a finite value of **4 V**. This means that even though the electric field extends infinitely out into space, it takes a fixed, finite amount of work (4 Joules per Coulomb) to bring a charged particle from infinitely far away to a distance of 3 meters from the component.
    
- **Application:** Circuit engineers use this exact calculation to determine safe physical spacing between high-voltage components on a circuit board. Knowing that the voltage potential drops off to a finite, manageable level at 3 meters allows them to place other sensitive components nearby without risking an electrical arc or short circuit.
    