#### Problem: Scalar Line Integral Along a Trig Curve in 3D
Consider the space curve:
$$\mathbf{r}(t) = (\cos t, \sin t, t), \quad 0 \le t \le \pi$$

Let the scalar field be:
$$f(x,y,z) = x^2 + y^2 + z$$

Compute:
$$\int_{C}f(x,y,z)\,ds$$
where $C$ is the curve traced by $\mathbf{r}(t)$.

##### Solution

To compute the scalar line integral $\int_{C} f(x,y,z) \, ds$ along the circular helix space curve, we express both the scalar field and the arc length element $ds$ in terms of the parameter $t$.

---

###### Step 1: Analyze the Component Functions
The space curve $C$ is parameterized by:
$$\mathbf{r}(t) = \langle \cos t, \sin t, t \rangle \quad \text{for } 0 \le t \le \pi$$

This yields the coordinate functions:
* $x(t) = \cos t$
* $y(t) = \sin t$
* $z(t) = t$

###### Step 2: Find the Arc Length Element ($ds$)
First, compute the derivative vector $\mathbf{r}'(t)$:
$$\mathbf{r}'(t) = \langle -\sin t, \cos t, 1 \rangle$$

Next, calculate its magnitude $||\mathbf{r}'(t)||$ to find the rate of change of arc length with respect to $t$:
$$||\mathbf{r}'(t)|| = \sqrt{(-\sin t)^2 + (\cos t)^2 + (1)^2}$$

Using the identity $\sin^2 t + \cos^2 t = 1$:
$$||\mathbf{r}'(t)|| = \sqrt{1 + 1} = \sqrt{2}$$

Therefore, the arc length differential is:
$$ds = \sqrt{2} \, dt$$

###### Step 3: Substitute the Parametric Equations into the Scalar Field
The scalar field is $f(x,y,z) = x^2 + y^2 + z$. Substituting our expressions for $x$, $y$, and $z$ gives:
$$f(\mathbf{r}(t)) = (\cos t)^2 + (\sin t)^2 + t$$

Applying the identity $\cos^2 t + \sin^2 t = 1$ simplifies the integrand:
$$f(\mathbf{r}(t)) = 1 + t$$

###### Step 4: Evaluate the Line Integral
Substitute the simplified scalar field and $ds$ into the integral formula over the interval $0 \le t \le \pi$:
$$\int_{C} f(x,y,z) \, ds = \int_{0}^{\pi} (1 + t)(\sqrt{2}) \, dt$$
$$\int_{C} f(x,y,z) \, ds = \sqrt{2} \int_{0}^{\pi} (1 + t) \, dt$$

Compute the antiderivative and evaluate it:
$$\int_{C} f(x,y,z) \, ds = \sqrt{2} \left[ t + \frac{t^2}{2} \right]_{0}^{\pi}$$
$$\int_{C} f(x,y,z) \, ds = \sqrt{2} \left( \left(\pi + \frac{\pi^2}{2}\right) - (0 + 0) \right) = \sqrt{2}\pi \left(1 + \frac{\pi}{2}\right)$$

---

###### Final Answer
$$\int_{C} (x^2 + y^2 + z) \, ds = \sqrt{2}\pi \left(1 + \frac{\pi}{2}\right)$$