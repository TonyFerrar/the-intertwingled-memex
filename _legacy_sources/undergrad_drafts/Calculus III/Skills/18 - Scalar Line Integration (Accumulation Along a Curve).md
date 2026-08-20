# Skill 2: Scalar Line Integration (Accumulation Along a Curve)

---

## Technical Notes & Foundations

A scalar line integral measures how a scalar quantity accumulates along a geometric curve. If a curve $C$ is defined by a vector function $\mathbf{r}(t)$ for $a \le t \le b$ and a scalar field is described by $f(x,y,z)$, the integral is evaluated using the following formula:

$$\int_{C}f(x,y,z)\,ds=\int_{a}^{b}f(\mathbf{r}(t))||\mathbf{r}'(t)||\,dt$$

### Key Components:
* **The Arc Length Element ($ds$):** Represents a tiny piece of arc length along the path. It is calculated as $ds = ||\mathbf{r}'(t)||\,dt$, acting as a scaling factor that converts a change in parameter $t$ into an actual physical distance along the curve.
* **The Scalar Field ($f$):** Tells us the "amount per unit length" of the quantity we are accumulating. In physical engineering contexts, this represents spatially varying properties such as mass density, chemical concentration, or thermal energy.

---

## Pure Mathematical Sample Problems

### Sample Problem 1: Two-Dimensional Straight Path
**Problem:** Evaluate the scalar line integral $\int_{C} (x + y) \, ds$, where $C$ is the straight line segment from $(0,0)$ to $(3,4)$.

#### Step 1: Parameterize the line segment
Using our linear parameterization template, a straight path from the origin to $(3,4)$ is given by:
$$\mathbf{r}(t) = \langle 3t, 4t \rangle, \quad 0 \le t \le 1$$
This yields the coordinate equations $x(t) = 3t$ and $y(t) = 4t$.

#### Step 2: Find the arc length element ($ds$)
Compute the derivative of the position vector and its magnitude:
$$\mathbf{r}'(t) = \langle 3, 4 \rangle$$
$$||\mathbf{r}'(t)|| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$$
$$ds = 5\,dt$$

#### Step 3: Evaluate the integral
Substitute $x(t)$, $y(t)$, and $ds$ into the line integral formula:
$$\int_{0}^{1} (3t + 4t)(5) \, dt = \int_{0}^{1} (7t)(5) \, dt = 35 \int_{0}^{1} t \, dt$$
$$35 \left[ \frac{t^2}{2} \right]_{0}^{1} = 35 \left(\frac{1}{2} - 0\right) = \frac{35}{2} = 17.5$$

---

### Sample Problem 2: Three-Dimensional Helical Path
**Problem:** Evaluate $\int_{C} (x^2 + y^2 + z) \, ds$, where $C$ is the space curve traced by $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ for $0 \le t \le \pi$.

#### Step 1: Compute the arc length scalar
Differentiate the coordinate functions to find the velocity magnitude:
$$\mathbf{r}'(t) = \langle -\sin t, \cos t, 1 \rangle$$
$$||\mathbf{r}'(t)|| = \sqrt{(-\sin t)^2 + (\cos t)^2 + 1^2} = \sqrt{1 + 1} = \sqrt{2}$$
$$ds = \sqrt{2}\,dt$$

#### Step 2: Substitute and integrate
Evaluate the scalar field along the path using the identity $\cos^2 t + \sin^2 t = 1$:
$$f(\mathbf{r}(t)) = (\cos t)^2 + (\sin t)^2 + t = 1 + t$$

Now, set up the definitive single-variable integral:
$$\int_{0}^{\pi} (1 + t)\sqrt{2} \, dt = \sqrt{2} \left[ t + \frac{t^2}{2} \right]_{0}^{\pi} = \sqrt{2}\left(\pi + \frac{\pi^2}{2}\right) = \sqrt{2}\pi\left(1 + \frac{\pi}{2}\right)$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Mechanics (Mass of a Non-Uniform Support Arch)]]
[[Structural Mechanics (Mass of a Non-Uniform Support Arch) Solution]]

---

### Engineering Problem 2: [[Environmental Engineering (Riverbend Pollutant Accumulation)]]
[[Environmental Engineering (Riverbend Pollutant Accumulation) Solution]]
