# Skill 3: Vector Calculus: Integration (Displacement & Field Accumulation)

## Explanatory Notes

### Integrating Vector-Valued Functions
Integration of a vector-valued function is performed by integrating each of its component scalar functions independently with respect to the parameter $t$. If $\vec{r}(t) = f(t)\hat{i} + g(t)\hat{j} + h(t)\hat{k}$, its integration can be handled in two ways:

#### 1. Indefinite Integration
When computing an indefinite integral, each individual scalar component integration yields its own unique constant of integration ($C_1, C_2, C_3$). In engineering applications, these separate constants are typically gathered together and written as a single **constant vector of integration**, $\vec{C}$:

$$\int \vec{r}(t) \, dt = \left[ \int f(t) \, dt \right]\hat{i} + \left[ \int g(t) \, dt \right]\hat{j} + \left[ \int h(t) \, dt \right]\hat{k}$$
$$\int \vec{r}(t) \, dt = F(t)\hat{i} + G(t)\hat{j} + H(t)\hat{k} + \vec{C}$$

Where $F(t)$, $G(t)$, and $H(t)$ are the baseline antiderivatives of $f(t)$, $g(t)$, and $h(t)$, and $\vec{C} = \langle C_1, C_2, C_3 \rangle$.

#### 2. Definite Integration
A definite integral evaluates the net accumulation of the vector function over a specified scalar interval $[a, b]$. The Fundamental Theorem of Calculus is applied component-by-component, resulting in a single static vector:

$$\int_{a}^{b} \vec{r}(t) \, dt = \left[ F(b) - F(a) \right]\hat{i} + \left[ G(b) - G(a) \right]\hat{j} + \left[ H(b) - H(a) \right]\hat{k}$$

### Physical and Engineering Interpretation
* **Kinematics (Displacement):** If a vector function represents the velocity $\vec{v}(t)$ of an object over time, the indefinite integral reconstructs the general position vector equation $\vec{r}(t) = \int \vec{v}(t) \, dt$. The constant vector $\vec{C}$ corresponds to the initial position $\vec{r}(0)$ of the object.
* **Net Change:** Evaluating the definite integral of velocity $\int_{a}^{b} \vec{v}(t) \, dt$ calculates the net **displacement vector** $\Delta \vec{r}$ over that specific timeframe, revealing exactly how far and in what directional orientation an object moved relative to its starting point.

---

## New Conceptual Sample Problems

### Sample Problem 3.1
**Problem:** Evaluate the following indefinite vector integral:
$$\int \left\langle 6t^2, \, 4e^{2t}, \, \frac{5}{t} \right\rangle dt$$

**Solution:**
Integrate each component function independently with respect to $t$:
* **$x$-component:** $\int 6t^2 \, dt = \frac{6t^3}{3} = 2t^3 + C_1$
* **$y$-component:** $\int 4e^{2t} \, dt = \frac{4e^{2t}}{2} = 2e^{2t} + C_2$
* **$z$-component:** $\int \frac{5}{t} \, dt = 5\ln|t| + C_3$

Combine the results and group the constants into a single integration vector $\vec{C}$:
$$\int \left\langle 6t^2, \, 4e^{2t}, \, \frac{5}{t} \right\rangle dt = \langle 2t^3, \, 2e^{2t}, \, 5\ln|t| \rangle + \vec{C}$$

---

### Sample Problem 3.2
**Problem:** Evaluate the definite vector integral over the interval $0 \le t \le \pi$:
$$\int_{0}^{\pi} \left( \sin(t)\hat{i} - 3t^2\hat{j} + 2\cos(2t)\hat{k} \right) dt$$

**Solution:**
Find the antiderivatives component-by-component and evaluate them at the limits $0$ and $\pi$:
1. **$\hat{i}$-component:** $$\int_{0}^{\pi} \sin(t) \, dt = \Big[ -\cos(t) \Big]_{0}^{\pi} = -\cos(\pi) - (-\cos(0)) = -(-1) + 1 = 2$$
2. **$\hat{j}$-component:** $$\int_{0}^{\pi} -3t^2 \, dt = \Big[ -t^3 \Big]_{0}^{\pi} = -(\pi)^3 - (-(0)^3) = -\pi^3$$
3. **$\hat{k}$-component:** $$\int_{0}^{\pi} 2\cos(2t) \, dt = \Big[ \sin(2t) \Big]_{0}^{\pi} = \sin(2\pi) - \sin(0) = 0 - 0 = 0$$

Combine the finalized component values:
$$\int_{0}^{\pi} \left( \sin(t)\hat{i} - 3t^2\hat{j} + 2\cos(2t)\hat{k} \right) dt = 2\hat{i} - \pi^3\hat{j} + 0\hat{k} = \langle 2, \, -\pi^3, \, 0 \rangle$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Robotics and Control (Trajectory Mapping from Velocity Logs)]]
[[Robotics and Control (Trajectory Mapping from Velocity Logs) Solution]]


---

### Engineering Problem 2: [[Aerospace Subsystem (Inertial Navigation Tracking during Rocket Ascent)]]
[[Aerospace Subsystem (Inertial Navigation Tracking during Rocket Ascent) Solution]]
