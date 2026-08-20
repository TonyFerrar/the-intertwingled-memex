
### Instructor Solutions: Surface Integrals Learning Activity (Demos)

***

### Skill 1 Demo: Finding Surface Area
**Problem Statement:** Find the surface area of the part of the given paraboloid where $z \geq 0$ for $z = 4 - x^2 - y^2$ [1].

**Step 1: Parameterize the surface and define the domain.**
We can parameterize the surface using $x$ and $y$ as our variables [2]:
$$\mathbf{r}(x, y) = \langle x, y, 4 - x^2 - y^2 \rangle$$
The surface is bounded by $z \geq 0$, so the domain $D$ in the $xy$-plane is found by setting $z = 0$:
$$0 = 4 - x^2 - y^2 \implies x^2 + y^2 = 4$$
This means our domain $D$ is a circle of radius $2$ centered at the origin.

**Step 2: Compute partial derivatives and the normal vector.**
Find the tangent vectors by taking the partial derivatives of $\mathbf{r}$ [2]:
$$\mathbf{r}_x = \langle 1, 0, -2x \rangle$$
$$\mathbf{r}_y = \langle 0, 1, -2y \rangle$$
Compute the cross product $\mathbf{r}_x \times \mathbf{r}_y$ to find the normal vector [2]:
$$\mathbf{r}_x \times \mathbf{r}_y = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 0 & -2x \\ 0 & 1 & -2y \end{vmatrix} = \langle 2x, 2y, 1 \rangle$$

**Step 3: Find the magnitude and set up the integral.**
Calculate the magnitude of the normal vector:
$$\|\mathbf{r}_x \times \mathbf{r}_y\| = \sqrt{(2x)^2 + (2y)^2 + 1^2} = \sqrt{4x^2 + 4y^2 + 1}$$
The surface area formula is $Area(S) = \iint_D \|\mathbf{r}_x \times \mathbf{r}_y\| \, dA$ [2]. Since our domain is a circular region, it is easiest to convert to polar coordinates ($x = r\cos\theta$, $y = r\sin\theta$, $x^2 + y^2 = r^2$, and $dA = r \, dr \, d\theta$):
$$Area = \int_0^{2\pi} \int_0^2 \sqrt{4r^2 + 1} \, r \, dr \, d\theta$$

**Step 4: Evaluate the integral.**
Use $u$-substitution for the inner integral: Let $u = 4r^2 + 1$, so $du = 8r \, dr$, or $r \, dr = \frac{1}{8}du$.
Change the limits of integration: When $r = 0, u = 1$. When $r = 2, u = 17$.
$$Area = \int_0^{2\pi} \left( \int_1^{17} \frac{1}{8} \sqrt{u} \, du \right) d\theta$$
$$= \int_0^{2\pi} \left[ \frac{1}{8} \cdot \frac{2}{3} u^{3/2} \right]_1^{17} d\theta$$
$$= \int_0^{2\pi} \frac{1}{12} (17\sqrt{17} - 1) \, d\theta$$
$$= \left[ \frac{1}{12} (17\sqrt{17} - 1) \theta \right]_0^{2\pi} = \frac{\pi}{6} (17\sqrt{17} - 1)$$

**Final Answer:** The surface area is $\frac{\pi}{6} (17\sqrt{17} - 1)$.

***

### Skill 2 Demo: Scalar Surface Integrals
**Problem Statement:** A thin rectangular metal plate lies in the horizontal plane $z = 4$ above the $x - y$ plane. It occupies the region $0 \leq x \leq 1$, $0 \leq y \leq 2$ [3]. The density of the plate ($kg/m^2$) is $\rho(x, y, z) = x + y$ [4]. Find the total mass $M$ of the plate [4].

**Step 1: Parameterize the surface and find the differential area element $dS$.**
Because the surface is a simple horizontal plane $z = 4$, we can parameterize it as:
$$\mathbf{r}(x, y) = \langle x, y, 4 \rangle$$
The partial derivatives are:
$$\mathbf{r}_x = \langle 1, 0, 0 \rangle$$
$$\mathbf{r}_y = \langle 0, 1, 0 \rangle$$
The cross product is $\mathbf{r}_x \times \mathbf{r}_y = \langle 0, 0, 1 \rangle$.
The magnitude is $\|\mathbf{r}_x \times \mathbf{r}_y\| = \sqrt{0^2 + 0^2 + 1^2} = 1$.
Therefore, the surface differential is $dS = \|\mathbf{r}_x \times \mathbf{r}_y\| \, dx \, dy = 1 \, dx \, dy$.

**Step 2: Set up the scalar surface integral.**
Using the formula $M = \iint_D \rho(\mathbf{r}(u, v)) \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv$ [4], substitute the density function and boundaries:
$$M = \int_0^2 \int_0^1 (x + y)(1) \, dx \, dy$$

**Step 3: Evaluate the iterated integral.**
First, integrate with respect to $x$:
$$\int_0^1 (x + y) \, dx = \left[ \frac{x^2}{2} + xy \right]_0^1 = \left( \frac{1}{2} + y \right) - (0) = \frac{1}{2} + y$$
Next, integrate with respect to $y$:
$$M = \int_0^2 \left( \frac{1}{2} + y \right) \, dy = \left[ \frac{1}{2}y + \frac{y^2}{2} \right]_0^2$$
$$= \left( \frac{1}{2}(2) + \frac{2^2}{2} \right) - 0 = 1 + 2 = 3$$

**Final Answer:** The total mass $M$ of the plate is $3$ kg.

***

### Skill 3 Demo: Flux Surface Integrals
**Problem Statement:** A fluid flows in the positive z direction with the velocity field $\vec{v}(x, y, z) = \langle 0, 0, 3 \rangle$ (m/s) [5]. The Fluid passes through a circular opening in the plane $z = 0$ given by $x^2 + y^2 \leq 1$ with the surface oriented in the direction of the flow (+z) [5]. Compute the volumetric flow rate Q ($m^3/s$) through the opening [6].

**Step 1: Parameterize the surface and find the normal vector.**
The surface is a flat circular opening on the $xy$-plane ($z=0$). We can parameterize it simply as:
$$\mathbf{r}(x, y) = \langle x, y, 0 \rangle$$
$$\mathbf{r}_x = \langle 1, 0, 0 \rangle, \quad \mathbf{r}_y = \langle 0, 1, 0 \rangle$$
The cross product gives us our normal vector:
$$\mathbf{n} = \mathbf{r}_x \times \mathbf{r}_y = \langle 0, 0, 1 \rangle$$
Since the flow is in the positive z-direction and the problem states the surface is oriented in the direction of the flow (+z), this normal vector pointing in the positive $\mathbf{k}$ direction is perfectly aligned [5].

**Step 2: Calculate the dot product of the vector field and the normal vector.**
Take the dot product of the velocity field $\vec{v}$ and the normal vector $\mathbf{n}$ [6]:
$$\vec{v} \cdot \mathbf{n} = \langle 0, 0, 3 \rangle \cdot \langle 0, 0, 1 \rangle = (0)(0) + (0)(0) + (3)(1) = 3$$

**Step 3: Integrate to find the flux (volumetric flow rate).**
Set up the flux integral $Q = \iint_S \vec{v} \cdot \mathbf{n} \, dS$ [6]:
$$Q = \iint_D 3 \, dA$$
Since $3$ is a constant, this calculation simplifies to $3$ multiplied by the area of the domain $D$. The domain $D$ is the unit circle $x^2 + y^2 \leq 1$, which has a radius of $1$.
$$Q = 3 \times (\text{Area of unit circle}) = 3 \times (\pi \cdot 1^2) = 3\pi$$

**Final Answer:** The volumetric flow rate $Q$ is $3\pi$ $m^3/s$.




### General Formulas for Surface Integrals

Surface integrals allow us to integrate over two-dimensional surfaces in space rather than one-dimensional curves, and they come in two distinct types depending on whether you are integrating a scalar function or a vector field. For both types, the first step is to parameterize the surface $S$ using a vector-valued position function $\mathbf{r}(u,v)$ where the parameters $u$ and $v$ vary over a two-dimensional domain $D$.

#### 1. Surface Integral of a Scalar Function
The surface integral of a scalar-valued function $f(x,y,z)$ is the higher-dimensional analog to a scalar line integral. It is formally defined as the limit of a Riemann sum as the surface area of small, partitioned pieces of the surface shrinks to zero:
$$\iint_S f(x,y,z) \, dS = \lim_{m,n\to\infty} \sum_{i=1}^m \sum_{j=1}^n f(P_{ij}^*) \Delta S_{ij}$$.

To practically compute this integral, we map it back to the parameter domain $D$ in the $uv$-plane. By finding the tangent vectors $\mathbf{r}_u$ and $\mathbf{r}_v$, we can express the differential surface area $dS$ as the magnitude of their cross product: $dS = \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv$. Substituting this in yields the **general computational formula**:
$$\iint_S f(x,y,z) \, dS = \iint_D f(\mathbf{r}(u,v)) \|\mathbf{r}_u \times \mathbf{r}_v\| \, du \, dv$$.
This formula is commonly used in physics to calculate properties like the total mass of a curved sheet given its density function.

#### 2. Surface Integral of a Vector Field (Flux Integral)
The surface integral of a vector field $\mathbf{F}$, almost universally called a **flux integral**, measures the rate at which a fluid or field flows across a completely permeable, oriented surface $S$. It is formally defined by taking the dot product of the vector field with the surface's unit normal vector $\mathbf{N}$ at each point:
$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_S \mathbf{F} \cdot \mathbf{N} \, dS = \lim_{m,n\to\infty} \sum_{i=1}^m \sum_{j=1}^n \mathbf{F}(P_{ij}^*) \cdot \mathbf{N}(P_{ij}^*) \Delta S_{ij}$$.

Because the unit normal vector $\mathbf{N}$ is defined mathematically as $\frac{\mathbf{r}_u \times \mathbf{r}_v}{\|\mathbf{r}_u \times \mathbf{r}_v\|}$, the magnitude in the denominator conveniently cancels out when multiplied by the $dS$ differential we found earlier. This simplifies the setup into the **general computational formula**:
$$\iint_S \mathbf{F} \cdot d\mathbf{S} = \iint_D \mathbf{F}(\mathbf{r}(u,v)) \cdot (\mathbf{r}_u \times \mathbf{r}_v) \, du \, dv$$.
In this formula, you do not need to calculate any magnitudes; you simply take the dot product of the parameterized vector field and the normal vector formed by the cross product of the tangent vectors.


Would you like me to walk you through a step-by-step worked example demonstrating how to apply either of these computational formulas?