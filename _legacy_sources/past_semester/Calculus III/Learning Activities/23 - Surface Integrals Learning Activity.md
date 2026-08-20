# Calc 3 Session 23
## Surface Integrals - Measuring Flux, Flow, and Field Interaction Across Surfaces
Spanning The Surface


> [!info] Printable PDF
> [[23 - Surface Integrals Learning Activity.pdf]]

## 📋 Skill Roadmap for Today
- [ ] [[Using Surface Integrals to Find Surface Area]]
- [ ] [[Scalar Surface Integrals]]
- [ ] [[Vector Surface Integrals (Surface Flux)]]

## Essential notes & formulas
*This space is for you to use.*

<div style="page-break-after: always;"></div>

---
## Skill 1: Finding Surface Area

> [!info] Surface Area (Surface Integral) Essential Formulas
> Surface Area:
> $$Area(S)=\iint_SdS=\iint_D||\vec{r}_u\times\vec{r}_v||du\,dv$$
> ---
> Parametrized Position Vector:
> $$\vec{r}(u, v)=\langle x(u,v),\; y(u,v),\:z(u,v)\rangle$$
> ---
> Tangent Vectors:
> $$\vec{r}_u=\dfrac{\partial\vec{r}}{\partial u},\quad\vec{r}_v=\dfrac{\partial\vec{r}}{\partial v}$$
> 
> Normal Vector:
> $$\vec{n}=\vec{r}_u\times\vec{r}_v$$

### Skill 1 Demo:
Find the surface area of the part of the given paraboloid where $z\geq 0$
$$z=4-x^2-y^2$$
%%
> [!Success] Skill 1 Demo Solution
> **Step 1:**
> The surface is given by $z = 4 - x^2 - y^2$ and we only want $z \ge 0$. Therefore, 
> $$4 - x^2 - y^2 \ge 0 \quad\Rightarrow\quad x^2 + y^2 \le 4.$$
> Since the projection of the surface is in the form of a circle with radius 2, polar coordinates. Through a polar coordinate conversion, we can easily obtain the following:
> $$x = r\cos\theta,\quad y = r\sin\theta,\quad 0 \le r \le 2,\quad 0 \le \theta \le 2\pi.$$
> The parametrization for $z$ can be found by utilizing a polar conversion on the equation defining $z$
> $$z = 4 - x^2 - y^2 \quad\Rightarrow\quad z = 4-r^2$$
> Therefore, our parametrization for $\vec{r}(r,\theta)$ is as follows:
> $$\vec{r}(r,\theta) = \langle x(r,\theta), y(r,\theta), z(r,\theta)\rangle= \langle r\cos\theta,\, r\sin\theta,\, 4 - r^2 \rangle.$$
> 
> **Step 2:**
> In order to compute the tangent vectors at any point, we must take the partial derivative of our position vector with respect to $r$ and $\theta$.
> $$  \vec{r}_r  = \frac{\partial \vec{r}}{\partial r} = \left\langle \cos\theta, \, \sin\theta, \, -2r \right\rangle.$$
> $$  \vec{r}_\theta = \frac{\partial \vec{r}}{\partial \theta} = \left\langle -r\sin\theta, \, r\cos\theta, \, 0 \right\rangle.$$
> In order to solve for the normal vector, the cross product must be taken between these two vectors.
> $$\vec{r}_r \times \vec{r}_\theta= \left\langle 2r^2\cos\theta,\, 2r^2\sin\theta,\, r \right\rangle.$$
> 
> **Step 3:**
> Solving for the magnitude of the cross product, we get the following:
> $$\lVert \vec{r}_r \times \vec{r}_\theta \rVert = \sqrt{(2r^2\cos\theta)^2 + (2r^2\sin\theta)^2 + r^2}=r\sqrt{4r^2 + 1}.$$
> Therefore, with the definition of a surface area element $dS,$ 
> $$dS = \lVert \vec{r}_r \times \vec{r}_\theta \rVert\, dr\,d\theta= r\sqrt{4r^2 + 1}\, dr\, d\theta.$$
> With the setup done for $dS$, we can now establish the integral for surface area.
> 
> **Step 4:**
> $$\text{Area} = \int_0^{2\pi} \int_0^2 r\sqrt{4r^2 + 1}\, dr\, d\theta.$$
> When integrating with respect to $r$ first, utilize a u-substitution
> $$u = 4r^2 + 1 \quad\Rightarrow\quad du = 8r\, dr,\quad r\,dr = \frac{1}{8}du.$$
> Therefore, the integral for $dr$ becomes the following
> $$\int_0^2 r\sqrt{4r^2 + 1}\, dr = \int_{1}^{17} \sqrt{u}\,\frac{1}{8}\,du = \frac{1}{8}\int_{1}^{17} u^{1/2}\,du.$$
> Compute:
> $$ \frac{1}{8}\cdot \left[ \frac{2}{3}u^{3/2} \right]_{1}^{17} = \frac{1}{12}\big( 17^{3/2} - 1^{3/2} \big) = \frac{1}{12}\big( 17\sqrt{17} - 1 \big). $$
> Now integrate with respect to $\theta$:
> $$\text{Area} = \left( \int_0^{2\pi} d\theta \right)\cdot \frac{1}{12}(17\sqrt{17} - 1) = \frac{\pi}{6}\big(17\sqrt{17} - 1\big).$$
> The final answer:
> $$ \boxed{\text{Area} = \dfrac{\pi}{6}\big(17\sqrt{17} - 1\big).} $$

%%

<div style="page-break-after: always;"></div>

---
### Problem 1.1:
Consider the portion of the plane $x+2y+3z=6$ lying above the rectangle characterized below:
$$0\leq x \leq 2,\quad 0\leq y \leq1$$
1. Give the parametrization of $\vec{r}(x,y)$ of the surface using $(x,y)$ as parameters.
2. Compute partial derivatives and find the compute the normal vector $\vec{r}_x\times\vec{r}_y$
3. Solve for $dS$ in terms of $dx\,dy$

%%
> [!Success] Problem 1.1 Solution
> **Part 1:**
> Since the objective is to solve for $\vec{r}(x,y)$, we know that $x(x,y) = x$ and $y(x,y) =y$. In order to solve for $z(x,y)$, we must solve the plane equation for $z$:
> $$x+2y+3z=6\;\Rightarrow\;3z=6-x-2y\;\Rightarrow\;z=2-\dfrac{x}{3}-\dfrac{2y}{3}$$
> Therefore, the position vector $\vec{r}(x,y)$ can be represented as such:
> $$\vec{r}(x,y)=\langle x,\,y,\,2-\dfrac{x}{3}-\dfrac{2y}{3}\rangle$$
> 
> **Part 2:**
> Take the partial derivative of $\vec{r}$ with respect to $x$ and $y$
> $$\vec{r}_x=\dfrac{\delta}{\delta x}\langle x,\,y,\,2-\dfrac{x}{3}-\dfrac{2y}{3}\rangle = \langle 1, 0, -\dfrac{1}{3}\rangle$$
>  $$\vec{r}_y=\dfrac{\delta}{\delta y}\langle x,\,y,\,2-\dfrac{x}{3}-\dfrac{2y}{3}\rangle = \langle 0, 1, -\dfrac{2}{3}\rangle$$
>  The normal vector is found through the cross product of the two partial derivatives.
>  $$\vec{r}_x \times \vec{r}_y= \begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k}\\[4pt]1 & 0 & -\frac{1}{3}\\0 & 1 & -\frac{2}{3}\end{vmatrix}=\langle\dfrac{1}{3},\, \dfrac{2}{3},\, 1\rangle$$
>  
>  **Step 3:**
>  Next step is to determine the magnitude of the normal vector.
>  $$\left\lVert \vec{r}_x \times \vec{r}_y \right\rVert = \sqrt{\left(\frac{1}{3}\right)^2 + \left(\frac{2}{3}\right)^2 + 1^2} = \frac{\sqrt{14}}{3}.$$
>  Afterwards, the formulation for $dS$ is possible
>  $$ dS = \left\lVert \vec{r}_x \times \vec{r}_y \right\rVert\, dx\, dy = \frac{\sqrt{14}}{3}\, dx\, dy. $$

%%
<div style="page-break-after: always;"></div>

---
### Problem 1.2:
Consider the lateral (side) surface of the cylinder $x^2+y^2=4$ constrained by $0\leq z\leq3$
1. Give a parametrization $\vec{r}(\theta,z)$ of the cylindrical surface.
2. Compute $\vec{r}_{\theta}$ and $\vec{r}_z$ alongside the cross product $\vec{r}_{\theta}\times\vec{r}_z$.
3. Solve for $dS$ in terms of $d\theta\,dz$ and integrate for the surface area.

%%
> [!Success] Problem 1.2 Solution
> **Step 1:**
> Given a radius of 2 and the given parametrization, we can establish the following conversion:
> $$ x = 2\cos\theta,\quad y = 2\sin\theta,\quad 0 \le \theta \le 2\pi,\quad 0 \le z \le 3.
> $$
> Those transformations result in the following parametrized position vector
> $$\vec{r}(\theta,z) = \langle 2\cos\theta,\, 2\sin\theta,\, z\rangle.$$
> 
> **Step 2:**
> Take the partial derivatives of the position vector
> $$\vec{r}_\theta = \frac{\partial}{\partial \theta}\langle 2\cos\theta,\, 2\sin\theta,\, z\rangle = \langle -2\sin\theta,\, 2\cos\theta,\, 0\rangle,$$
> $$\vec{r}_z = \frac{\partial}{\partial z}\langle 2\cos\theta,\, 2\sin\theta,\, z\rangle = \langle 0,\, 0,\, 1\rangle.$$
> Next is to take the cross product to find the normal vector
> $$\vec{r}_\theta \times \vec{r}_z = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k}\\ -2\sin\theta & 2\cos\theta & 0\\ 0 & 0 & 1 \end{vmatrix} = \langle 2\cos\theta,\, 2\sin\theta,\, 0\rangle.$$
> Find the magnitude of the cross product:
> $$\lVert \vec{r}_\theta \times \vec{r}_z \rVert = \sqrt{(2\cos\theta)^2 + (2\sin\theta)^2} 
> $$
> $$= \sqrt{4(\cos^2\theta + \sin^2\theta)} = \sqrt{4} = 2.$$
> 
> **Step 3:**
> Set up the integral with respect to $d\theta\,dz$
> $$\int_0^3\int_-^2\pi2d\theta\,dz$$

%%
<div style="page-break-after: always;"></div>

---
## Skill 2: Scalar Surface Integrals

> [!info] Scalar Surface Integrals Essential Formulas
> **Scalar Surface Integral (Mass example)**
> $$M = \iint_D \rho(\vec{r}(u,v))\, \lVert \vec{r}_u \times \vec{r}_v \rVert\, du\, dv$$

### Skill 2 Demo:
A thin rectangular metal plate lies in the horizontal plane $z=4$ above the $x-y$ plane. It occupies the region listed below.
$$0\leq x\leq1,\quad0\leq y\leq2$$
The density of the plate $(kg/m^2)$ is defined below.
$$\rho(x,y,z)=x+y$$
Find the total mass $M$ of the plate.

%%
> [!Success] Skill 2 Demo Solution
>**Step 1:**
>The surface is a flat horizontal rectangle at height $z=4$. A natural parametrization is as follows:
>$$\vec{r}(x,y) = \langle x,\, y,\, 4\rangle,\quad 0 \le x \le 1,\ 0 \le y \le 2.$$
>**Step 2:**
>Compute the partial derivatives of $\vec{r}$:
>$$\vec{r}_x = \frac{\partial \vec{r}}{\partial x} = \langle 1,\, 0,\, 0\rangle, \quad \vec{r}_y = \frac{\partial \vec{r}}{\partial y} = \langle 0,\, 1,\, 0\rangle.$$
>Next, compute the cross product:
>$$\vec{r}_x \times \vec{r}_y = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k}\\ 1 & 0 & 0\\ 0 & 1 & 0 \end{vmatrix} = \langle 0,\, 0,\, 1\rangle.$$
>Set up $dS$:
>$$\lVert \vec{r}_x \times \vec{r}_y \rVert = 1,\quad dS = 1\cdot dx\, dy = dx\, dy.$$
>Since the parametrization of the surface has been achieved, next is to represent density with respect to the surface parametrization:
>$$\rho(\vec{r}(x,y)) = x + y.$$
>**Step 3:**
>Set up the Mass integral for the surface:
>$$M = \iint_S \rho(x,y,z)\, dS = \int_{0}^{1} \int_{0}^{2} (x + y)\, dy\, dx.$$
>Integrate with respect to $y$ first:
>$$\int_{0}^{2} (x + y)\, dy = \int_0^2 x\, dy + \int_0^2 y\, dy = x\cdot [y]_0^2 + \left[\frac{1}{2}y^2\right]_0^2 = 2x + 2.$$
>Integrate with respect to $x$ next:
>$$M = \int_0^1 (2x + 2)\, dx = \int_0^1 2x\, dx + \int_0^1 2\, dx = \left[x^2\right]_0^1 + \left[2x\right]_0^1 = 1 + 2 = 3.$$
>Final Answer:
>$$\boxed{M = 3\ \text{kg}.}$$

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.1:
A flat sheet of metal has the shape in accordance to the surface $z = 1 + x + 2y$ that lies above the rectangle $0 \leq x \leq 4$ and $0\leq y\leq 2$. If the density is given by the shape 

%%
> [!Success]- Problem 2.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 2.2:
Consider the sphere $x^2+y^2+z^2=9$ subjected to the constraint of $z\geq 0$. If the surface is exposed to a charge density of $\sigma(x, y, z) = x^2 + y^2$:

1. Give a parameterization $\vec{r}(\phi,\theta)$ for this hemisphere using spherical-like coordinates where $0 \le \phi \le \frac{\pi}{2}$ is the angle from the positive $z$-axis and $0 \le \theta \le 2\pi$ is the angle in the $xy$-plane.
2. Compute $\vec{r}_{\phi}$, $\vec{r}_{theta}$, and the cross product $\vec{r}_{\phi}\times\vec{r}_{theta}$.
3. Express $dS$ in terms of $d\phi\,d\theta$.
4. Integrate for the total charge of the surface.
%%
> [!Success]- Problem 2.2 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
## Skill 3: Flux Surface Integrals

> [!info] Vector Surface Integrals Essential Formulas
> 
> **Flux (Vector) Surface Integral**
> $$\iint_S \vec{F}\cdot\vec{n}\, dS= \iint_D \vec{F}(\vec{r}(u,v)) \cdot \left(\vec{r}_u \times \vec{r}_v\right)\, du\, dv.$$
> 
### Skill 3 Demo:
A fluid flows in the positive z direction with the velocity field $$\vec{v}(x,y,z) = \langle 0,\ 0,\ 3\rangle \quad \text{(m/s)}.$$
The Fluid passes through a circular opening in the plane $z=0$ given by $x^2+y^2\leq 1$ with the surface oriented **in the direction of the flow** $(+z)$.

Compute the **volumetric flow rate Q** (How much volume of water is flowing through the surface per second) ($m^3/s$) through the opening

  %% 
> [!Success]- Demo Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.1:
Suppose a wall in the plane $z=0$ has a heat flux vector field given below:
$$\vec{q}(x, y, z)=\langle0,0,-50\rangle\quad(W/m^2)$$
The negative $z$-direction means the heat is flowing from the room (positive side) towards the outside (negative side). Consider the rectangular cross section of the wall, $$0 \le x \le 4,\quad 0 \le y \le 3,\quad z = 0.$$
Take the outward normal to be $\vec{n}=\langle0,0,-1\rangle$. Compute the total heat flow rate, $\Phi$ (W) through this wall section:

%%
> [!Success]- Problem 2.1 Solution
> Insert Solutions Here

%%
<div style="page-break-after: always;"></div>

---
### Problem 3.2:
Consider the vector field $\vec{v}(x,y,z) = \langle x,\ y,\ 0\rangle.$ Let $S$ be the lateral surface of the cylinder given below oriented away from the $z$-axis:
$$x^2 + y^2 = 1,\quad 0 \le z \le 2,$$
Compute the flux
%%

> [!Success]- Problem 2.2 Solution
> Insert Solutions Here

%%
