### Solution

To compute the circulation of the vector field $\mathbf{F}$ around the closed curve $C$, we evaluate the line integral:
$$\text{circ}_{C}(\mathbf{F}) = \oint_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$$

---

#### Step 1: Analyze the Parameterization
The curve $C$ is the unit circle oriented counterclockwise, parameterized by:
$$\mathbf{r}(t) = \langle \cos t, \sin t \rangle \quad \text{for } 0 \le t \le 2\pi$$

This gives us the parametric coordinate functions:
* $x(t) = \cos t$
* $y(t) = \sin t$

#### Step 2: Find the Velocity Vector ($d\mathbf{r}$)
Take the derivative of the position vector $\mathbf{r}(t)$ with respect to $t$:
$$\mathbf{r}'(t) = \langle -\sin t, \cos t \rangle$$

Thus, the differential displacement vector is:
$$d\mathbf{r} = \langle -\sin t, \cos t \rangle \, dt$$

#### Step 3: Substitute the Path into the Vector Field
The given vector field is $\mathbf{F}(x,y) = \langle -y, x \rangle$. Substituting our expressions for $x(t)$ and $y(t)$ into the vector field gives:
$$\mathbf{F}(\mathbf{r}(t)) = \langle -\sin t, \cos t \rangle$$

#### Step 4: Compute the Dot Product
Calculate the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$ to find how strongly the field wraps along the direction of the curve:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle -\sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle$$
$$= (-\sin t)(-\sin t) + (\cos t)(\cos t)$$
$$= \sin^2 t + \cos^2 t$$

Using the fundamental Pythagorean identity ($\sin^2 t + \cos^2 t = 1$), this simplifies cleanly to:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = 1$$

#### Step 5: Evaluate the Definite Integral
Set up and evaluate the definite integral over the domain $0 \le t \le 2\pi$:
$$\text{circ}_{C}(\mathbf{F}) = \int_{0}^{2\pi} 1 \, dt$$
$$\text{circ}_{C}(\mathbf{F}) = \Big[ t \Big]_{0}^{2\pi} = 2\pi - 0 = 2\pi$$

---

#### Final Answer
$$\oint_{C} \mathbf{F} \cdot d\mathbf{r} = 2\pi$$