### Solution

To solve this problem, we will compute the circulation, find the outward flux, and interpret the physical behavior of the vector field along the unit circle.

---

#### Step 1: Compute the Circulation of $\mathbf{F}$ Around $C$
Circulation measures how much the vector field pushes along the path of a closed loop:
$$\text{circ}_{C}(\mathbf{F}) = \oint_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) \, dt$$

1. **Analyze the path and velocity:**
   $$\mathbf{r}(t) = \langle \cos t, \sin t \rangle \implies \mathbf{r}'(t) = \langle -\sin t, \cos t \rangle \quad \text{for } 0 \le t \le 2\pi$$

2. **Substitute the path into the field $\mathbf{F}(x,y) = \langle -y, x \rangle$:**
   $$\mathbf{F}(\mathbf{r}(t)) = \langle -\sin t, \cos t \rangle$$

3. **Take the dot product:**
   $$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle -\sin t, \cos t \rangle \cdot \langle -\sin t, \cos t \rangle = \sin^2 t + \cos^2 t = 1$$

4. **Integrate over the full circle:**
   $$\text{circ}_{C}(\mathbf{F}) = \int_{0}^{2\pi} 1 \, dt = \Big[ t \Big]_{0}^{2\pi} = 2\pi$$

---

#### Step 2: Compute the Flux of $\mathbf{F}$ Across $C$
Flux measures how much of the field flows through/across the boundary of the curve:
$$\text{flux}_{C}(\mathbf{F}) = \oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds = \int_{a}^{b} \mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{n}(t) \, ||\mathbf{r}'(t)|| \, dt$$

1. **Find the outward unit normal vector $\mathbf{n}$:**
   For a circle centered at the origin, the outward normal vector at any point is simply the unit position vector itself pointing radially outward:
   $$\mathbf{n}(t) = \langle \cos t, \sin t \rangle$$

2. **Find the arc length element $ds$:**
   $$||\mathbf{r}'(t)|| = \sqrt{(-\sin t)^2 + (\cos t)^2} = 1 \implies ds = 1 \, dt$$

3. **Take the dot product $\mathbf{F} \cdot \mathbf{n}$:**
   $$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{n}(t) = \langle -\sin t, \cos t \rangle \cdot \langle \cos t, \sin t \rangle$$
   $$= (-\sin t)(\cos t) + (\cos t)(\sin t) = 0$$

4. **Integrate:**
   $$\text{flux}_{C}(\mathbf{F}) = \int_{0}^{2\pi} 0 \, dt = 0$$

---

#### Step 3: Explanation in Words
The vector field $\mathbf{F}(x,y) = \langle -y, x \rangle$ represents a steady **rotational vortex** swirling counterclockwise around the origin. 

* **Why circulation is nonzero ($2\pi$):** At every single point along the unit circle, the field vectors point in the exact same tangential direction as the particle's movement. Because the force field is perfectly aligned with the path of motion, it maximizes the total "push" around the loop.
* **Why flux is zero ($0$):** Since the field vectors are entirely tangent to the circle, they run completely parallel to its boundary. Consequently, they are perfectly orthogonal (perpendicular) to the outward normal vector $\mathbf{n}$ at every point. Since the fluid is only spinning around the circle rather than passing through it, no net fluid ever enters or escapes across the boundary.