### Solution

To compute the flux of the vector field across the curve $C$, we follow the three parts outlined in the prompt.

---

#### Step 1: Parameterize $C$
The path $C$ is a straight line segment along the $x$-axis from $(0,0)$ to $(2,0)$. Since $y$ remains constant at $0$ and $x$ goes from $0$ to $2$, we can parameterize the curve using $t$:
$$\mathbf{r}(t) = \langle t, 0 \rangle \quad \text{for } 0 \le t \le 2$$

This gives us:
* $x(t) = t$
* $y(t) = 0$

#### Step 2: Find a Unit Normal Vector $\mathbf{n}$ Pointing Upward
First, find the unit tangent vector $\mathbf{T}$ in the direction of motion:
$$\mathbf{r}'(t) = \langle 1, 0 \rangle$$
$$||\mathbf{r}'(t)|| = \sqrt{1^2 + 0^2} = 1$$
$$\mathbf{T} = \frac{\mathbf{r}'(t)}{||\mathbf{r}'(t)||} = \langle 1, 0 \rangle$$

A vector normal (perpendicular) to a 2D curve pointing to its left side can be found using the orientation transformation $\langle x, y \rangle \to \langle -y, x \rangle$. For a flat line moving right along the $x$-axis, the upward-pointing normal vector is strictly in the positive $y$-direction:
$$\mathbf{n} = \langle 0, 1 \rangle$$

Since its magnitude is already $1$, $\mathbf{n} = \langle 0, 1 \rangle$ is our unit normal vector.

#### Step 3: Compute the Flux of $\mathbf{F}$ Across $C$
The line integral formula for planar flux expands as:
$$\text{flux}_{C}(\mathbf{F}) = \int_{C} \mathbf{F} \cdot \mathbf{n} \, ds = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{n} \, ||\mathbf{r}'(t)|| \, dt$$

1. **Find $ds$:**
   $$ds = ||\mathbf{r}'(t)||\,dt = 1 \, dt = dt$$

2. **Substitute the path into the vector field $\mathbf{F}(x,y) = \langle y, 2x \rangle$:**
   $$\mathbf{F}(\mathbf{r}(t)) = \langle 0, 2(t) \rangle = \langle 0, 2t \rangle$$

3. **Compute the dot product $\mathbf{F} \cdot \mathbf{n}$:**
   $$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{n} = \langle 0, 2t \rangle \cdot \langle 0, 1 \rangle = (0)(0) + (2t)(1) = 2t$$

4. **Evaluate the definite integral from $t = 0$ to $t = 2$:**
   $$\text{flux}_{C}(\mathbf{F}) = \int_{0}^{2} 2t \, dt$$
   $$\text{flux}_{C}(\mathbf{F}) = \Big[ t^2 \Big]_{0}^{2} = 2^2 - 0^2 = 4$$

---

#### Final Answer
1. **Parameterization:** $\mathbf{r}(t) = \langle t, 0 \rangle, \quad 0 \le t \le 2$
2. **Unit normal vector:** $\mathbf{n} = \langle 0, 1 \rangle$
3. **Flux value:** $\text{flux}_{C}(\mathbf{F}) = 4$