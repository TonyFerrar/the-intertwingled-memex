# Evaluating Vector Line Integrals

> [!info] Vector Line Integrals Essential Formulas
> 
> A **vector line integral** of a vector field $\mathbf{F}$ along a curve $C$ measures how strongly the field aligns with the motion along the curve.
>   
> If $C$ is given by $\mathbf{r}(t)$, $a \le t \le b$, then
> $$\int_C \mathbf{F}\cdot d\mathbf{r}=\int_a^b \mathbf{F}(\mathbf{r}(t))\cdot \mathbf{r}'(t)\,dt.$$
> Physically, when $\mathbf{F}$ is a force field and $\mathbf{r}(t)$ is a particle trajectory, this integral represents **work done**by the force.

### Evaluating Vector Line Integrals

A **vector line integral** evaluates a vector field along an oriented curve in a plane or in three-dimensional space. Instead of summing up a scalar value along a curve, it calculates the cumulative effect of a vector field (such as a force) acting in the direction of the curve. To do this, it takes the dot product of the vector field $\mathbf{F}$ with the unit tangent vector of the curve at each point. In practice, a curve $C$ is parameterized by a vector-valued function $\mathbf{r}(t)$ for $a \leq t \leq b$. The vector line integral is then computed by converting it into a single-variable definite integral using the formula: $\int_C \mathbf{F} \cdot d\mathbf{r} = \int_a^b \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$.

Vector line integrals are heavily utilized in physics and engineering. Their most common application is calculating the **work done** on an object as it moves through a force field, such as a gravitational or magnetic field. Additionally, they are used in fluid dynamics to calculate **circulation** (the tendency of a fluid to move along a closed curve) and **flux** (the rate of fluid flowing across a curve).

The defining difference between vector line integrals and [[Evaluating Scalar Line Integrals|scalar line integrals]] is **orientation**. Because a scalar line integral evaluates a scalar function with respect to arc length, traversing the curve backward or forward yields the exact same result. However, for vector line integrals, the direction of travel dictates the sign of the result. Reversing the orientation of the curve negates the value of the integral ($\int_{-C} \mathbf{F} \cdot d\mathbf{r} = -\int_C \mathbf{F} \cdot d\mathbf{r}$). This mirrors physical reality: Earth's gravitational field does negative work on you when you hike up a mountain, but positive work if you hike down the exact same path.

***

### Worked Example

**Problem:**
Evaluate the vector line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$, where the vector field is $\mathbf{F}(x,y) = \langle y, x \rangle$ and $C$ is the top half of the unit circle parameterized by $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \leq t \leq \pi$.

**Step 1: Express the vector field $\mathbf{F}$ in terms of the parameter $t$.**
Given $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$, we substitute $x = \cos t$ and $y = \sin t$ into the vector field $\mathbf{F}(x,y)$:
$$\mathbf{F}(\mathbf{r}(t)) = \langle \sin t, \cos t \rangle$$

**Step 2: Find the derivative of the parameterization $\mathbf{r}'(t)$.**
Take the derivative of $\mathbf{r}(t)$ with respect to $t$:
$$\mathbf{r}'(t) = \langle -\sin t, \cos t \rangle$$

**Step 3: Calculate the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$.**
Multiply the corresponding components of the two vectors and add them together:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle \sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle$$
$$= (\sin t)(-\sin t) + (\cos t)(\cos t)$$
$$= \cos^2 t - \sin^2 t$$

Using the double-angle trigonometric identity, this simplifies to:
$$= \cos(2t)$$

**Step 4: Set up and evaluate the definite integral.**
Integrate the resulting dot product from $t = 0$ to $t = \pi$:
$$\int_C \mathbf{F} \cdot d\mathbf{r} = \int_0^\pi \cos(2t) \, dt$$

Evaluate the antiderivative:
$$= \left[ \frac{1}{2}\sin(2t) \right]_0^\pi$$

Substitute the bounds:
$$= \frac{1}{2}\sin(2\pi) - \frac{1}{2}\sin(0)$$
$$= 0 - 0 = 0$$

**Final Answer:**
The evaluated vector line integral is $0$.