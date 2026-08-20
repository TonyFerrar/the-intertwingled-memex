Aerospace engineers are calculating the total work $W$ required to launch a payload weighing $m = 10\text{ kg}$ from a planetary station out into deep space (effectively an infinite distance away). The gravitational force pulling back on the rocket is modeled by $F(x) = \frac{100}{x^2}$, where $x = 2\text{ meters}$ represents the initial launch pad distance from the planet's core. The total work is given by:

$$W = \int_{2}^{\infty} \frac{100}{x^2} \, dx$$

#### **Step 1: Diagnosis**

Because the rocket is traveling to "deep space," the upper integration limit is $\infty$. The integrand is continuous everywhere along our path of travel $[2, \infty)$, making this a **Type I improper integral**.

#### **Step 2: Solution**

$$\lim_{t \to \infty} \int_{2}^{t} 100x^{-2} \, dx = \lim_{t \to \infty} \left[ -\frac{100}{x} \right]_2^t$$

$$= \lim_{t \to \infty} \left( -\frac{100}{t} - \left(-\frac{100}{2}\right) \right) = 0 + 50 = 50$$

#### **Meaning of the Answer & Real-Life Application**

- **Meaning:** The total work required to break free of the planet's gravity completely converges to a finite value of **50 MJ**. Even though the rocket must travel an infinite distance to completely escape the gravitational field, the force of gravity drops off rapidly enough ($p = 2$, which satisfies the $p$-test condition $p > 1$) that the total energy expenditure is bounded.
    
- **Application:** This value determines the planet's **escape velocity**. Rocket scientists use this finite work value to compute exactly how much kinetic energy—and therefore how much chemical rocket fuel—must be combusted during the initial launch phase. If the integral had diverged to infinity, escaping the planet would be physically impossible.