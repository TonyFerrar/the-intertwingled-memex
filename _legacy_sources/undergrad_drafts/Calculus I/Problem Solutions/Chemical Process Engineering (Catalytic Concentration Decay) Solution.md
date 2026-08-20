**Scenario:** A chemical engineer is monitoring a pressurized reactor where a liquid reactant is being broken down by a solid catalyst. The concentration rate of change (in moles per liter per minute) over time $t$ is modeled by a non-linear decay curve:
$$R(t) = \frac{1}{5t + 1}$$
To find the total amount of reactant consumed between $t = 0$ and $t = 3$ minutes, the engineer must compute the definite integral $\int_{0}^{3} \frac{1}{5t+1} \, dt$.

**Question:** Use $u$-substitution and limit scaling to determine the exact total reactant concentration consumed over the 3-minute cycle.

**Step-by-Step Solution:**
1. **Identify $u$ and $du$:**
   Let $u = 5t + 1 \implies du = 5 \, dt \implies dt = \frac{1}{5} \, du$
2. **Convert the limits of integration:**
   * Lower limit: When $t = 0 \implies u = 5(0) + 1 = 1$
   * Upper limit: When $t = 3 \implies u = 5(3) + 1 = 16$
3. **Rewrite and scale the integral:**
   $$\int_{1}^{16} \frac{1}{u} \cdot \left(\frac{1}{5} \, du\right) = \frac{1}{5} \int_{1}^{16} \frac{1}{u} \, du$$
4. **Evaluate using the Natural Log rule:**
   $$\frac{1}{5} \Big[ \ln|u| \Big]_{1}^{16} = \frac{1}{5} \Big( \ln(16) - \ln(1) \Big)$$
   Since $\ln(1) = 0$:
   $$\text{Total Consumption} = \frac{\ln(16)}{5} \approx \frac{2.7726}{5} \approx 0.555\text{ moles/L}$$

#### 💡 Meaning of the Answer & Real-Life Application
* **Meaning of the Value:** The calculated value of $\approx 0.555\text{ moles/L}$ represents the absolute net change in chemical concentration inside the vessel across the specified 3-minute window.
* **Real-Life Application:** In industrial scale manufacturing (such as creating pharmaceuticals or refining petroleum), reactions slow down as reactants thin out. Chemical engineers integrate these rate curves to accurately predict when a batch process has hit its optimal yield curve. This prevents them from stopping the reaction too early (wasting raw materials) or running it too long (wasting energy and factory overhead).