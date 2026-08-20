
# Evaluating Scalar Line Integrals

> [!info] Scalar Line Integrals Essential Formulas
> A **scalar line integral** measures how a scalar quantity accumulates along a curve.  
> 
> If a curve $C$ is given by a vector function $\mathbf{r}(t)$ for $a \le t \le b$, and a scalar field is $f(x,y,z)$, then
> $$\int_C f(x,y,z)\,ds=\int_a^b f(\mathbf{r}(t))\,\|\mathbf{r}'(t)\|\,dt.$$
> Here $ds$ represents a tiny piece of **arc length**, and $f$ tells us the "amount per unit length" of the quantity we are accumulating (mass, heat, concentration, etc.).

### Evaluating Scalar Line Integrals

A **scalar line integral** is an extension of the traditional single-variable integral. While a standard definite integral evaluates a function over a straight line segment (such as an interval on the x-axis), a scalar line integral integrates a multivariable function, such as $f(x,y)$ or $f(x,y,z)$, over an arbitrary smooth curve $C$ in a plane or in three-dimensional space. Conceptually, it works by partitioning the curve into tiny pieces, evaluating the function at a specific point within each piece, and multiplying that value by the piece's arc length. By taking the limit as the lengths of these pieces shrink to zero, we obtain the scalar line integral, denoted as $\int_C f(x,y,z) \, ds$. To practically evaluate this, we parameterize the curve $C$ using a vector-valued function $\mathbf{r}(t)$ for $a \leq t \leq b$. The scalar line integral is then computed by translating it into a manageable single-variable integral with respect to $t$ using the formula: $\int_C f \, ds = \int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\| \, dt$.

These integrals have numerous practical applications in physics and engineering. For instance, if the curve $C$ represents a physical wire and the function $f$ models the wire's linear mass density (mass per unit length), computing the scalar line integral will yield the total mass of the wire. Additionally, scalar line integrals can be used to determine the total arc length of a curve, calculate the surface area of a sheet given a specific height, or find the electric potential of a charged wire.

***

### Worked Example

**Problem:**
Evaluate the scalar line integral $\int_C (x^2 + y^2 + z) \, ds$, where $C$ is the part of the helix parameterized by $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$ for $0 \leq t \leq 2\pi$.

**Step 1: Identify the parametric equations from the vector function.**
Given $\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle$, we have:
*   $x(t) = \cos t$
*   $y(t) = \sin t$
*   $z(t) = t$

**Step 2: Express the integrand $f(x, y, z)$ in terms of $t$.**
Substitute the parametric equations into the multivariable function $f(x, y, z) = x^2 + y^2 + z$:
$$f(\mathbf{r}(t)) = (\cos t)^2 + (\sin t)^2 + t$$
Using the standard Pythagorean identity ($\cos^2 t + \sin^2 t = 1$), this simplifies perfectly to:
$$f(\mathbf{r}(t)) = 1 + t$$

**Step 3: Find the derivative $\mathbf{r}'(t)$ and its magnitude $\|\mathbf{r}'(t)\|$.**
First, take the derivative of $\mathbf{r}(t)$ with respect to $t$:
$$\mathbf{r}'(t) = \langle -\sin t, \cos t, 1 \rangle$$
Next, calculate the magnitude (or length) of this derivative vector:
$$\|\mathbf{r}'(t)\| = \sqrt{(-\sin t)^2 + (\cos t)^2 + (1)^2}$$
$$\|\mathbf{r}'(t)\| = \sqrt{\sin^2 t + \cos^2 t + 1}$$
$$\|\mathbf{r}'(t)\| = \sqrt{1 + 1} = \sqrt{2}$$

**Step 4: Set up and evaluate the definite integral.**
Substitute $f(\mathbf{r}(t))$ and $\|\mathbf{r}'(t)\|$ into the scalar line integral evaluation formula $\int_a^b f(\mathbf{r}(t)) \|\mathbf{r}'(t)\| \, dt$:
$$\int_0^{2\pi} (1 + t)\sqrt{2} \, dt$$
Factor out the constant $\sqrt{2}$ and integrate with respect to $t$:
$$= \sqrt{2} \left[ t + \frac{t^2}{2} \right]_0^{2\pi}$$
Evaluate at the upper bound $2\pi$ and subtract the evaluation at the lower bound $0$:
$$= \sqrt{2} \left( \left( 2\pi + \frac{(2\pi)^2}{2} \right) - (0 + 0) \right)$$
$$= \sqrt{2} \left( 2\pi + \frac{4\pi^2}{2} \right)$$
$$= \sqrt{2} (2\pi + 2\pi^2)$$
$$= 2\sqrt{2}\pi(1 + \pi)$$

**Final Answer:**
The evaluated scalar line integral is $2\sqrt{2}\pi(1 + \pi)$.