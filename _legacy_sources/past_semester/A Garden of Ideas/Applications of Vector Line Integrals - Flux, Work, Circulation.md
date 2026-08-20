
# Applications of Vector Line Integrals: Flux, Work, Circulation

> [!info] Work, Flux, and Circulation Essential Formulas
>  **Work**:
>   $$
>   W = \int_C \mathbf{F}\cdot d\mathbf{r}
>   $$
>   measures energy transfer along the direction of motion.
>  ---
> 
> **Flux** across a curve $C$ in the plane:
> $$
> \text{flux}_C(\mathbf{F}) = \int_C \mathbf{F}\cdot \mathbf{n}\,ds
> $$
> where $\mathbf{n}$ is a **unit normal vector** to the curve, measuring how much of the field flows **through** the curve.  
>
> ---
> 
> **Circulation** around a closed curve $C$:
> $$
> \text{circ}_C(\mathbf{F}) = \oint_C \mathbf{F}\cdot d\mathbf{r}
> $$
> measures how strongly the field "swirls" along the curve.

## Work
[[Evaluating Vector Line Integrals|Vector line integrals]] are highly versatile tools in physics and engineering used to evaluate how a vector field interacts with an oriented curve,. The three most common physical applications of vector line integrals are calculating work, flux, and circulation.

**Work** measures the energy required or expended to move an object through a force field. If a vector field $\mathbf{F}$ represents a force acting on an object, the line integral $\int_C \mathbf{F} \cdot d\mathbf{r}$ computes the total work done by that force as the object moves along path $C$. It works by taking the dot product of the force field and the unit tangent vector of the curve, essentially summing the component of the force that acts exactly in the direction of the object's motion.

$$
W = \int_C \mathbf{F}\cdot d\mathbf{r}
$$

### Worked Example 1: Calculating Work
**Problem:** How much work is required to move an object in the vector force field $\mathbf{F}(x,y,z) = \langle y, z, x \rangle$ along the path $\mathbf{r}(t) = \langle t, t^2, t^3 \rangle$ for $0 \leq t \leq 1$?

**Step 1: Find the derivative of the parameterization $\mathbf{r}'(t)$.**
Take the derivative of $\mathbf{r}(t)$ with respect to $t$:
$$\mathbf{r}'(t) = \langle 1, 2t, 3t^2 \rangle$$

**Step 2: Express the force field $\mathbf{F}$ in terms of $t$.**
Substitute $x=t$, $y=t^2$, and $z=t^3$ into $\mathbf{F}(x,y,z)$:
$$\mathbf{F}(\mathbf{r}(t)) = \langle t^2, t^3, t \rangle$$

**Step 3: Calculate the dot product $\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)$.**
Multiply the corresponding components and add them:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = (t^2)(1) + (t^3)(2t) + (t)(3t^2) = t^2 + 2t^4 + 3t^3$$

**Step 4: Set up and evaluate the definite integral.**
Integrate the dot product from $t=0$ to $t=1$:
$$\text{Work} = \int_0^1 (2t^4 + 3t^3 + t^2) \, dt$$
$$= \left[ \frac{2}{5}t^5 + \frac{3}{4}t^4 + \frac{1}{3}t^3 \right]_0^1$$
$$= \frac{2}{5} + \frac{3}{4} + \frac{1}{3} = \frac{24 + 45 + 20}{60} = \frac{89}{60}$$


**Final Answer:** The work done by the force field is $\frac{89}{60}$.

---
## Flux
**Flux** measures the rate at which a fluid or field flows *across* a plane curve $C$, rather than along it,. If $\mathbf{F}$ represents the velocity field of a fluid, flux quantifies the volume of fluid flowing across the curve per unit time. To calculate flux, the vector line integral is adapted to take the dot product of the field with the curve's unit *normal* vector $\mathbf{n}$ instead of the tangent vector.

For a two-dimensional field 
$$\mathbf{F} = \langle P, Q \rangle$$ 
parameterized by 
$$\mathbf{r}(t) = \langle x(t), y(t) \rangle$$
the flux formula translates to 
$$\int_a^b \left( P(x(t), y(t))y'(t) - Q(x(t), y(t))x'(t) \right) \, dt$$

### Worked Example 2: Calculating Flux
**Problem:** Calculate the flux of the vector field $\mathbf{F}(x,y) = \langle 2x, 2y \rangle$ across a unit circle oriented counterclockwise.

**Step 1: Parameterize the curve $C$ and find derivatives.**
The standard parameterization for a unit circle is $\mathbf{r}(t) = \langle \cos t, \sin t \rangle$ for $0 \leq t \leq 2\pi$.
Here, $x(t) = \cos t$ and $y(t) = \sin t$. The derivatives are:
*   $x'(t) = -\sin t$
*   $y'(t) = \cos t$

**Step 2: Express $\mathbf{F}$ in terms of $t$.**
Substitute $x$ and $y$ into $\mathbf{F}(x,y) = \langle P, Q \rangle$:
*   $P(\mathbf{r}(t)) = 2\cos t$
*   $Q(\mathbf{r}(t)) = 2\sin t$

**Step 3: Apply the 2D flux formula.**
The flux formula is $\int_a^b \left( P y'(t) - Q x'(t) \right) \, dt$:
$$P y'(t) - Q x'(t) = (2\cos t)(\cos t) - (2\sin t)(-\sin t)$$
$$= 2\cos^2 t + 2\sin^2 t = 2(\cos^2 t + \sin^2 t) = 2(1) = 2$$

**Step 4: Evaluate the integral.**
Integrate from $0$ to $2\pi$:
$$\text{Flux} = \int_0^{2\pi} 2 \, dt = [2t]_0^{2\pi} = 4\pi$$

**Final Answer:** The flux across the curve is $4\pi$.

---

## Circulation
**Circulation** is simply a vector line integral evaluated around a *closed* oriented curve $C$ (a curve that begins and ends at the exact same point), denoted by the symbol $\oint_C \mathbf{F} \cdot d\mathbf{r}$,. It measures the tendency of a vector field to move in the exact direction of the closed path $C$. The closer the direction of the field aligns with the curve's tangent vector, the larger the positive circulation; if the field flows against the curve's orientation, the circulation is negative.

$$
\text{circ}_C(\mathbf{F}) = \oint_C \mathbf{F}\cdot d\mathbf{r}
$$

### Worked Example 3: Calculating Circulation
**Problem:** Calculate the circulation of the vector field $\mathbf{F}(x,y) = \langle -y, x \rangle$ along the unit circle $C$ oriented counterclockwise.

**Step 1: Parameterize the closed curve $C$ and find $\mathbf{r}'(t)$.**
Using the standard parameterization for a unit circle:
$$\mathbf{r}(t) = \langle \cos t, \sin t \rangle \quad \text{for } 0 \leq t \leq 2\pi$$
$$\mathbf{r}'(t) = \langle -\sin t, \cos t \rangle$$

**Step 2: Express $\mathbf{F}$ in terms of $t$.**
Substitute $x = \cos t$ and $y = \sin t$ into $\mathbf{F}(x,y) = \langle -y, x \rangle$:
$$\mathbf{F}(\mathbf{r}(t)) = \langle -\sin t, \cos t \rangle$$

**Step 3: Calculate the dot product.**
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = (-\sin t)(-\sin t) + (\cos t)(\cos t)$$
$$= \sin^2 t + \cos^2 t = 1$$

**Step 4: Evaluate the integral over the closed loop.**
$$\text{Circulation} = \oint_C \mathbf{F} \cdot d\mathbf{r} = \int_0^{2\pi} 1 \, dt = [t]_0^{2\pi} = 2\pi$$

**Final Answer:** The circulation along the curve is $2\pi$.