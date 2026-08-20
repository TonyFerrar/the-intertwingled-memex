### Solution

To find the work done by the force field $\mathbf{F}$ along the three-dimensional path, we evaluate the vector line integral:
$$W = \int_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$$

---

#### Step 1: Analyze the Parameterization and Component Functions
The trajectory of the particle is defined by the space curve:
$$\mathbf{r}(t) = \langle t, t^2, 1 \rangle \quad \text{for } 0 \le t \le 1$$

This gives our parametric coordinate equations:
* $x(t) = t$
* $y(t) = t^2$
* $z(t) = 1$

#### Step 2: Find the Velocity Vector ($d\mathbf{r}$)
Take the derivative of the position vector function $\mathbf{r}(t)$ to find the velocity vector $\mathbf{r}'(t)$:
$$\mathbf{r}'(t) = \frac{d}{dt}\langle t, t^2, 1 \rangle = \langle 1, 2t, 0 \rangle$$

Thus, the differential displacement vector is:
$$d\mathbf{r} = \langle 1, 2t, 0 \rangle \, dt$$

#### Step 3: Substitute the Path into the Force Field
The three-dimensional force field is given by $\mathbf{F}(x,y,z) = \langle yz, xz, xy \rangle$. Substituting our expressions for $x$, $y$, and $z$ into the vector field yields:
* $yz = (t^2)(1) = t^2$
* $xz = (t)(1) = t$
* $xy = (t)(t^2) = t^3$

$$\mathbf{F}(\mathbf{r}(t)) = \langle t^2, t, t^3 \rangle$$

#### Step 4: Compute the Dot Product
Calculate the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$ to find the work integrand:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle t^2, t, t^3 \rangle \cdot \langle 1, 2t, 0 \rangle$$
$$= (t^2)(1) + (t)(2t) + (t^3)(0)$$
$$= t^2 + 2t^2 + 0$$
$$= 3t^2$$

#### Step 5: Evaluate the Definite Integral
Set up and evaluate the definite integral over the interval $0 \le t \le 1$:
$$W = \int_{0}^{1} 3t^2 \, dt$$
$$W = \Big[ t^3 \Big]_{0}^{1}$$
$$W = 1^3 - 0^3 = 1$$

---

#### Final Answer
The total work done by the force as the particle moves along the path is:
$$W = 1$$