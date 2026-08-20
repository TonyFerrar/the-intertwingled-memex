### Problem Statement
Given that an object has a velocity of $\vec{v}(t) = \left[ \sqrt[3]{t}\hat{i}, \frac{1}{t+2}\hat{j}, e^{8t}\hat{k} \right] \text{ ft/s}$:
* Use an indefinite integral to find the displacement vector of the object.
* Use a definite integral to find the displacement vector of the object over the interval $1 \le t \le 5$.

---

### Step-by-Step Solution

To find the displacement vector from a velocity vector function, we integrate each component function independently. For easier integration, rewrite the velocity function using fractional exponents:
$$\vec{v}(t) = t^{1/3}\hat{i} + \frac{1}{t+2}\hat{j} + e^{8t}\hat{k}$$

---

#### Part 1: Indefinite Integral for Displacement Vector $\vec{r}(t)$

Integrate each component individually with respect to $t$:

* **$\hat{i}$-component:** Use the power rule ($\int t^n dt = \frac{t^{n+1}}{n+1}$):
  $$\int t^{1/3} \, dt = \frac{t^{4/3}}{4/3} = \frac{3}{4}t^{4/3} + C_1$$

* **$\hat{j}$-component:** Use the standard logarithmic rule:
  $$\int \frac{1}{t+2} \, dt = \ln|t+2| + C_2$$

* **$\hat{k}$-component:** Use the exponential rule ($\int e^{at} dt = \frac{1}{a}e^{at}$):
  $$\int e^{8t} \, dt = \frac{1}{8}e^{8t} + C_3$$

Combine the components and merge the constants $C_1, C_2, C_3$ into a single constant vector $\vec{C}$:
$$\vec{r}(t) = \left( \frac{3}{4}t^{4/3} \right)\hat{i} + \left( \ln|t+2| \right)\hat{j} + \left( \frac{1}{8}e^{8t} \right)\hat{k} + \vec{C}$$

---

#### Part 2: Definite Integral over the Interval $1 \le t \le 5$

To find the total displacement over the time interval $[1, 5]$, evaluate the definite integral component-by-component using the antiderivatives found above:
$$\Delta\vec{r} = \int_{1}^{5} \vec{v}(t) \, dt$$

**1. Evaluate the $\hat{i}$-component:**
$$\left[ \frac{3}{4}t^{4/3} \right]_{1}^{5} = \frac{3}{4}(5)^{4/3} - \frac{3}{4}(1)^{4/3} = \frac{3}{4}\left(5^{4/3} - 1\right) \approx 5.66$$

**2. Evaluate the $\hat{j}$-component:**
$$\left[ \ln|t+2| \right]_{1}^{5} = \ln|5+2| - \ln|1+2| = \ln(7) - \ln(3) = \ln\left(\frac{7}{3}\right) \approx 0.847$$

**3. Evaluate the $\hat{k}$-component:**
$$\left[ \frac{1}{8}e^{8t} \right]_{1}^{5} = \frac{1}{8}e^{8(5)} - \frac{1}{8}e^{8(1)} = \frac{1}{8}\left(e^{40} - e^8\right) \approx 2.94 \times 10^{16}$$

Combine the components into the final displacement vector:
$$\Delta\vec{r} = \left[ \frac{3}{4}\left(5^{4/3} - 1\right) \right]\hat{i} + \left[ \ln\left(\frac{7}{3}\right) \right]\hat{j} + \left[ \frac{1}{8}\left(e^{40} - e^8\right) \right]\hat{k}$$

---

### Final Answers

* **Indefinite Integral Vector:**
  $$\vec{r}(t) = \left( \frac{3}{4}t^{4/3} \right)\hat{i} + \left( \ln|t+2| \right)\hat{j} + \left( \frac{1}{8}e^{8t} \right)\hat{k} + \vec{C}$$

* **Definite Integral (Exact Value):**
  $$\Delta\vec{r} = \left[ \frac{3}{4}\left(5^{4/3} - 1\right) \right]\hat{i} + \left[ \ln\left(\frac{7}{3}\right) \right]\hat{j} + \left[ \frac{1}{8}\left(e^{40} - e^8\right) \right]\hat{k}$$