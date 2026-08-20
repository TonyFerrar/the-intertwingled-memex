# Skill 2: Vector Calculus: Differentiation (Kinematics & Tangent Vectors)

## Explanatory Notes

### Differentiation of Vector-Valued Functions
To find the derivative of a vector-valued function $\vec{r}(t)$, we differentiate each of its scalar component functions independently with respect to the parameter $t$. If $\vec{r}(t) = \langle f(t), g(t), h(t) \rangle$, and $f$, $g$, and $h$ are differentiable functions, then the derivative vector is defined as:

$$\vec{r}'(t) = \frac{d\vec{r}}{dt} = \langle f'(t), g'(t), h'(t) \rangle = f'(t)\hat{i} + g'(t)\hat{j} + h'(t)\hat{k}$$

### Geometric and Physical Interpretation
* **Tangent Vector:** Geometrically, if $\vec{r}(t)$ represents a position vector mapping a curve in space, the derivative vector $\vec{r}'(t)$ is always **tangent to the curve** at the point corresponding to $t$, pointing in the direction of increasing $t$.
* **Kinematics:** Physically, if $\vec{r}(t)$ models the displacement of an object over time, then its first derivative represents the **velocity vector** $\vec{v}(t) = \vec{r}'(t)$, and its second derivative represents the **acceleration vector** $\vec{a}(t) = \vec{v}'(t) = \vec{r}''(t)$.

### The Principal Unit Tangent Vector $\hat{T}(t)$
Because the magnitude of $\vec{r}'(t)$ varies depending on how fast the curve is being traversed, engineers often need to isolate the *exact direction* of motion completely independent of speed. This is accomplished using the **principal unit tangent vector** $\hat{T}(t)$, which is found by dividing the tangent vector by its own scalar magnitude:

$$\hat{T}(t) = \frac{\vec{r}'(t)}{|\vec{r}'(t)|}$$

By definition, $|\hat{T}(t)| = 1$ for all valid values of $t$.

### Composite Functions & Chain Rule
When a vector function is parameterized by another scalar function (e.g., $\vec{r}(f(t))$), the **Vector Chain Rule** must be applied to determine the rate of change with respect to $t$:
$$\frac{d}{dt}[\vec{r}(f(t))] = \vec{r}'(f(t)) \cdot f'(t)$$

---

## New Conceptual Sample Problems

### Sample Problem 2.1
**Problem:** Given the vector function $\vec{r}(t) = \langle 2t^3, \, -5t^2, \, 4t \rangle$, find the derivative $\vec{r}'(t)$ and the principal unit tangent vector $\hat{T}(t)$ evaluated at $t = 1$.

**Solution:**
1. **Find the general derivative $\vec{r}'(t)$:**
   $$\vec{r}'(t) = \left\langle \frac{d}{dt}[2t^3], \, \frac{d}{dt}[-5t^2], \, \frac{d}{dt}[4t] \right\rangle = \langle 6t^2, \, -10t, \, 4 \rangle$$
2. **Evaluate the derivative at $t = 1$:**
   $$\vec{r}'(1) = \langle 6(1)^2, \, -10(1), \, 4 \rangle = \langle 6, \, -10, \, 4 \rangle$$
3. **Calculate the magnitude $|\vec{r}'(1)|$:**
   $$|\vec{r}'(1)| = \sqrt{6^2 + (-10)^2 + 4^2} = \sqrt{36 + 100 + 16} = \sqrt{152} = 2\sqrt{38}$$
4. **Compute $\hat{T}(1)$:**
   $$\hat{T}(1) = \frac{\langle 6, \, -10, \, 4 \rangle}{2\sqrt{38}} = \left\langle \frac{3}{\sqrt{38}}, \, -\frac{5}{\sqrt{38}}, \, \frac{2}{\sqrt{38}} \right\rangle$$

---

### Sample Problem 2.2
**Problem:** Let $\vec{r}(t) = 4t^2\hat{i} - e^{3t}\hat{j} + \cos(2t)\hat{k}$ and $f(t) = t^2$. Calculate $\frac{d}{dt}[\vec{r}(f(t))]$.

**Solution:**
Using the substitution method:
1. **Substitute $f(t) = t^2$ into $\vec{r}(t)$:**
   $$\vec{r}(f(t)) = 4(t^2)^2\hat{i} - e^{3(t^2)}\hat{j} + \cos(2(t^2))\hat{k} = 4t^4\hat{i} - e^{3t^2}\hat{j} + \cos(2t^2)\hat{k}$$
2. **Differentiate each component with respect to $t$ (using standard scalar chain rules):**
   * $\hat{i}$-comp: $\frac{d}{dt}[4t^4] = 16t^3$
   * $\hat{j}$-comp: $\frac{d}{dt}[-e^{3t^2}] = -e^{3t^2} \cdot (6t) = -6t e^{3t^2}$
   * $\hat{k}$-comp: $\frac{d}{dt}[\cos(2t^2)] = -\sin(2t^2) \cdot (4t) = -4t \sin(2t^2)$

$$\frac{d}{dt}[\vec{r}(f(t))] = 16t^3\hat{i} - 6te^{3t^2}\hat{j} - 4t\sin(2t^2)\hat{k}$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Automotive Safety (Centrifugal Acceleration on Track Overpass)]]
[[Automotive Safety (Centrifugal Acceleration on Track Overpass) Solution]]

---

### Engineering Problem 2: [[Aerospace Guidance (Avionics Trajectory Tracking under Parameter Drift)]]
[[Aerospace Guidance (Avionics Trajectory Tracking under Parameter Drift) Solution]]
