# Skill 3: Vector Line Integration (Field Alignment & Work)

---

## Technical Notes & Foundations

A vector line integral evaluates the interaction between a continuous vector field and a directional path. Specifically, it measures how strongly a vector field $\mathbf{F}$ aligns with the direction of motion along a curve $C$. 

If a smooth curve $C$ is oriented and defined by the position vector function $\mathbf{r}(t)$ over the parameter interval $a \le t \le b$, the vector line integral is expressed and computed as:

$$\int_{C}\mathbf{F} \cdot d\mathbf{r} = \int_{a}^{b}\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t)\,dt$$

### Key Components:
* **The Displacement Vector ($d\mathbf{r}$):** This represents a differential step along the curve, defined as $d\mathbf{r} = \mathbf{r}'(t)\,dt$, where $\mathbf{r}'(t)$ is the velocity or tangent vector of the path.
* **The Field Composition ($\mathbf{F}(\mathbf{r}(t))$):** This process substitutes the parametric equations of the path ($x(t), y(t), z(t)$) into the vector field, isolating the specific field vectors experienced along that exact track.
* **The Dot Product ($\cdot$):** By taking the dot product of the field vector and the tangent vector, we extract only the tangential component of the field—the portion acting directly parallel to the direction of travel.
* **Physical Interpretation:** In classical mechanics, when $\mathbf{F}$ represents a force field and $\mathbf{r}(t)$ is a particle's trajectory, this integral directly calculates the **total physical work done** by the force field on the object.

---

## Pure Mathematical Sample Problems

### Sample Problem 1: Two-Dimensional Parabolic Path
**Problem:** Compute the work done by the force field $\mathbf{F}(x,y) = \langle x+y, 2x-y \rangle$ on a particle traveling along the parabola $C$ parameterized by $\mathbf{r}(t) = \langle t, t^2 \rangle$ for $0 \le t \le 1$.

#### Step 1: Extract path components and find the velocity vector
The position equations are $x(t) = t$ and $y(t) = t^2$. Differentiating $\mathbf{r}(t)$ gives the tangent vector:
$$\mathbf{r}'(t) = \langle 1, 2t \rangle$$

#### Step 2: Evaluate the vector field along the curve
Substitute $x = t$ and $y = t^2$ into the force field formula:
$$\mathbf{F}(\mathbf{r}(t)) = \langle t + t^2, \; 2t - t^2 \rangle$$

#### Step 3: Compute the dot product
Multiply the matching components of the field and velocity vectors:
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle t + t^2, \; 2t - t^2 \rangle \cdot \langle 1, \; 2t \rangle$$
$$= (t + t^2)(1) + (2t - t^2)(2t)$$
$$= t + t^2 + 4t^2 - 2t^3$$
$$= -2t^3 + 5t^2 + t$$

#### Step 4: Integrate over the given limits
Set up and evaluate the definite integral from $t = 0$ to $t = 1$:
$$W = \int_{0}^{1} (-2t^3 + 5t^2 + t) \, dt$$
$$W = \left[ -\frac{2t^4}{4} + \frac{5t^3}{3} + \frac{t^2}{2} \right]_{0}^{1} = \left[ -\frac{t^4}{2} + \frac{5t^3}{3} + \frac{t^2}{2} \right]_{0}^{1}$$
$$W = \left( -\frac{1}{2} + \frac{5}{3} + \frac{1}{2} \right) - (0) = \frac{5}{3}$$

---

### Sample Problem 2: Three-Dimensional Linear Path
**Problem:** Evaluate the vector line integral $\int_{C} \mathbf{F} \cdot d\mathbf{r}$ for the field $\mathbf{F}(x,y,z) = \langle z, x, y \rangle$ along the linear path parameterized by $\mathbf{r}(t) = \langle t, t, t \rangle$ for $0 \le t \le 2$.

#### Step 1: Differentiate the position function
$$\mathbf{r}'(t) = \langle 1, 1, 1 \rangle$$

#### Step 2: Substitute the components into the field
Since $x=t$, $y=t$, and $z=t$:
$$\mathbf{F}(\mathbf{r}(t)) = \langle t, t, t \rangle$$

#### Step 3: Take the dot product and evaluate
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle t, t, t \rangle \cdot \langle 1, 1, 1 \rangle = t + t + t = 3t$$
$$\int_{0}^{2} 3t \, dt = \left[ \frac{3t^2}{2} \right]_{0}^{2} = \frac{3(4)}{2} - 0 = 6$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Marine Robotics (AUV Navigation Through Tidal Currents)]]
[[Marine Robotics (AUV Navigation Through Tidal Currents) Solution]]

---

### Engineering Problem 2: [[Aerospace Engineering (Drone Flight Assistance via Tailwinds)]]
[[Aerospace Engineering (Drone Flight Assistance via Tailwinds) Solution]]
