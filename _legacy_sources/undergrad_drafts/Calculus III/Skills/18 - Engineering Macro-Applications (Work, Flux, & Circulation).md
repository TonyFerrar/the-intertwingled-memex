# Skill 4: Engineering Macro-Applications (Work, Flux, & Circulation)

---

## Technical Notes & Foundations

Vector line integrals are adapted to compute macro-level metrics in engineering by focusing on either the *tangential* or *normal* behavior of a vector field relative to a boundary path.

* **Work ($W$):** Measures the cumulative energy transfer along the direct direction of motion. 
    $$W=\int_{C}\mathbf{F} \cdot d\mathbf{r} \quad \text{}$$
* **Circulation ($\text{circ}$):** Measures how strongly a vector field "swirls" or rotates along a closed curve $C$.
    $$\text{circ}_{C}(\mathbf{F})=\oint_{C}\mathbf{F} \cdot d\mathbf{r} \quad \text{}$$
* **Planar Flux ($\text{flux}$):** Measures how much of a vector field flows directly *through* a curve boundary rather than running parallel to it. 
    $$\text{flux}_{C}(\mathbf{F})=\int_{C}\mathbf{F} \cdot \mathbf{n} \, ds \quad \text{}$$
    where $\mathbf{n}$ represents a unit normal vector perpendicular to the curve trajectory.

---

## Pure Mathematical Sample Problems

### Sample Problem 1: Circulation Around a Loop
**Problem:** Evaluate the closed-loop line integral $\oint_{C} \mathbf{F} \cdot d\mathbf{r}$ where $\mathbf{F}(x,y) = \langle -2y, 2x \rangle$ and $C$ is a circle of radius 3 centered at the origin, oriented counterclockwise.

#### Step 1: Parameterize the closed path
A counterclockwise circle of radius 3 is given by:
$$\mathbf{r}(t) = \langle 3\cos t, 3\sin t \rangle, \quad 0 \le t \le 2\pi$$
The tangent velocity vector is:
$$\mathbf{r}'(t) = \langle -3\sin t, 3\cos t \rangle$$

#### Step 2: Substitute the components and compute the dot product
Plug $x = 3\cos t$ and $y = 3\sin t$ into the vector field equations:
$$\mathbf{F}(\mathbf{r}(t)) = \langle -2(3\sin t), 2(3\cos t) \rangle = \langle -6\sin t, 6\cos t \rangle$$

Multiply the vectors via the dot product:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle -6\sin t, 6\cos t \rangle \cdot \langle -3\sin t, 3\cos t \rangle$$
$$= 18\sin^2 t + 18\cos^2 t = 18(\sin^2 t + \cos^2 t) = 18$$

#### Step 3: Integrate over the boundaries
$$\text{circ}_{C}(\mathbf{F}) = \int_{0}^{2\pi} 18 \, dt = \Big[ 18t \Big]_{0}^{2\pi} = 36\pi$$

---

### Sample Problem 2: Planar Flux Across a Segment
**Problem:** Evaluate the planar flux integral $\int_{C} \mathbf{F} \cdot \mathbf{n} \, ds$ where $\mathbf{F}(x,y) = \langle 2x, y \rangle$ along the line segment $C$ from $(0,0)$ to $(4,0)$, with the unit normal vector $\mathbf{n}$ pointing upward.

#### Step 1: Analyze the path and normal vector
The flat horizontal line segment is parameterized by:
$$\mathbf{r}(t) = \langle t, 0 \rangle, \quad 0 \le t \le 4$$
$$\mathbf{r}'(t) = \langle 1, 0 \rangle \implies ||\mathbf{r}'(t)|| = 1 \implies ds = dt$$

An upward-pointing unit normal vector perpendicular to this horizontal path is:
$$\mathbf{n} = \langle 0, 1 \rangle$$

#### Step 2: Set up the dot product and evaluate
Substitute the path equations into the vector field equations:
$$\mathbf{F}(\mathbf{r}(t)) = \langle 2(t), 0 \rangle = \langle 2t, 0 \rangle$$

Take the normal dot product:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{n} = \langle 2t, 0 \rangle \cdot \langle 0, 1 \rangle = (2t)(0) + (0)(1) = 0$$
$$\text{flux}_{C}(\mathbf{F}) = \int_{0}^{4} 0 \, dt = 0$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering (Vortex Generation & Aerodynamic Lift)]]
[[Aerospace Engineering (Vortex Generation & Aerodynamic Lift) Solution]]


---

### Engineering Problem 2: [[Mechanical Systems (Volumetric Mass Flow Rate Through a Pump Filter)]]
[[Mechanical Systems (Volumetric Mass Flow Rate Through a Pump Filter) Solution]]
