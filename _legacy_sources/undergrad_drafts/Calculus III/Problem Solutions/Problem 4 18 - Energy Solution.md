### Solution

To find the work done by the force field $\mathbf{F}$ along the curve $C$, we evaluate the vector line integral:
$$W = \int_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$$

---

#### Step 1: Analyze the Parameterization and Component Functions
The trajectory of the particle is given by:
$$\mathbf{r}(t) = \langle t, t^2 \rangle \quad \text{for } 0 \le t \le 1$$

This gives the following parametric equations for the path:
* $x(t) = t$
* $y(t) = t^2$

#### Step 2: Find the Velocity Vector ($d\mathbf{r}$)
Compute the derivative of the position vector function $\mathbf{r}(t)$ to find the velocity vector $\mathbf{r}'(t)$:
$$\mathbf{r}'(t) = \frac{d}{dt}\langle t, t^2 \rangle = \langle 1, 2t \rangle$$

Thus, the differential displacement vector is:
$$d\mathbf{r} = \mathbf{r}'(t) \, dt = \langle 1, 2t \rangle \, dt$$

#### Step 3: Substitute the Path into the Force Field
The force field is defined as $\mathbf{F}(x,y) = \langle x + y, 2x - y \rangle$. Substitute $x = t$ and $y = t^2$ into the field equations to find the force experienced by the particle along its path:
$$\mathbf{F}(\mathbf{r}(t)) = \langle t + t^2, 2(t) - t^2 \rangle = \langle t + t^2, 2t - t^2 \rangle$$

#### Step 4: Compute the Dot Product
Now, find the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$ to measure the component of force acting in the direction of motion:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle t + t^2, 2t - t^2 \rangle \cdot \langle 1, 2t \rangle$$
$$= (t + t^2)(1) + (2t - t^2)(2t)$$
$$= t + t^2 + 4t^2 - 2t^3$$
$$= t + 5t^2 - 2t^3$$

#### Step 5: Evaluate the Definite Integral
Assemble the definite integral over the interval $0 \le t \le 1$:
$$W = \int_{0}^{1} (t + 5t^2 - 2t^3) \, dt$$

Find the antiderivative term by term:
$$W = \left[ \frac{t^2}{2} + \frac{5t^3}{3} - \frac{2t^4}{4} \right]_{0}^{1}$$
$$W = \left[ \frac{t^2}{2} + \frac{5t^3}{3} - \frac{t^4}{2} \right]_{0}^{1}$$

Evaluate the expression at the upper limit ($t = 1$) and lower limit ($t = 0$):
$$W = \left( \frac{1}{2} + \frac{5}{3} - \frac{1}{2} \right) - (0 + 0 - 0)$$
$$W = \frac{5}{3}$$

---

#### Final Answer
The work done by the force field on the particle is:
$$W = \frac{5}{3}$$