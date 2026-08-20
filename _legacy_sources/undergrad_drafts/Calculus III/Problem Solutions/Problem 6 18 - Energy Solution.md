### Solution

To compute the vector line integral $\int_{C} \mathbf{F} \cdot d\mathbf{r}$, we express the vector field and the displacement vector $d\mathbf{r}$ in terms of the parameter $t$.

---

#### Step 1: Analyze the Parameterization
The curve $C$ is a quarter-circle of radius 2 in the first quadrant, parameterized by:
$$\mathbf{r}(t) = \langle 2\cos t, 2\sin t \rangle \quad \text{for } 0 \le t \le \frac{\pi}{2}$$

This gives the coordinate functions:
* $x(t) = 2\cos t$
* $y(t) = 2\sin t$

#### Step 2: Find the Velocity Vector ($d\mathbf{r}$)
Take the derivative of the position vector $\mathbf{r}(t)$ with respect to $t$:
$$\mathbf{r}'(t) = \langle -2\sin t, 2\cos t \rangle$$

Thus, the differential displacement vector is:
$$d\mathbf{r} = \langle -2\sin t, 2\cos t \rangle \, dt$$

#### Step 3: Substitute the Path into the Vector Field
The given vector field is:
$$\mathbf{F}(x,y) = \left\langle \frac{-y}{x^2+y^2}, \frac{x}{x^2+y^2} \right\rangle$$

First, simplify the denominator $x^2 + y^2$ along the path $C$:
$$x^2 + y^2 = (2\cos t)^2 + (2\sin t)^2 = 4\cos^2 t + 4\sin^2 t = 4(\cos^2 t + \sin^2 t) = 4$$

Now, substitute $x(t)$, $y(t)$, and the simplified denominator back into $\mathbf{F}$:
$$\mathbf{F}(\mathbf{r}(t)) = \left\langle \frac{-2\sin t}{4}, \frac{2\cos t}{4} \right\rangle = \left\langle -\frac{1}{2}\sin t, \frac{1}{2}\cos t \right\rangle$$

#### Step 4: Compute the Dot Product
Calculate the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \left\langle -\frac{1}{2}\sin t, \frac{1}{2}\cos t \right\rangle \cdot \langle -2\sin t, 2\cos t \rangle$$
$$= \left(-\frac{1}{2}\sin t\right)(-2\sin t) + \left(\frac{1}{2}\cos t\right)(2\cos t)$$
$$= \sin^2 t + \cos^2 t$$
$$= 1$$

#### Step 5: Evaluate the Definite Integral
Set up and evaluate the definite integral from $t = 0$ to $t = \frac{\pi}{2}$:
$$\int_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{0}^{\frac{\pi}{2}} 1 \, dt$$
$$\int_{C} \mathbf{F} \cdot d\mathbf{r} = \Big[ t \Big]_{0}^{\frac{\pi}{2}} = \frac{\pi}{2} - 0 = \frac{\pi}{2}$$

---

#### Final Answer
$$\int_{C} \mathbf{F} \cdot d\mathbf{r} = \frac{\pi}{2}$$