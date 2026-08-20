
# Using Surface Integrals to Find Surface Area

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



In Calc 1 and Calc 2, you learned how to calculate **arc length** and **surface area of a surface of revolution**. In 3D, we generalize these ideas using **Surface Integrals**.

## Parameterize the Surface
In order to solve these surface integrals, we must **parametrize** the surface $S$.
$$\vec{r}(u, v)=\langle x(u,v),\; y(u,v),\:z(u,v)\rangle$$
The parametrization can be with respect to $u$ and $v$, or polar coordinates with $r$ and $\theta$, or any set of variables.

## Tangent Vectors
With the position vector $\vec{r}(u,v)$ describing the position of any point on a surface, we can find two tangent vectors to the surface at any point.
$$\vec{r}_u=\dfrac{\partial\vec{r}}{\partial u},\quad\vec{r}_v=\dfrac{\partial\vec{r}}{\partial v}$$

## Normal Vector
If we imagine a surface at any point to be an infinitesimally small plane, we can characterize the plane with its normal vector.
$$\vec{n}=\vec{r}_u\times\vec{r}_v$$

## Differential Area
Therefore, with the normal vector $\vec{n}$ describing an infinitesimally small plane along the surface, we can use that to describe a small portion of the surface.
$$dS=||\vec{r}_u\times\vec{r}_v||du\,dv$$

## Surface Area
This can therefore be expanded to solve for the surface area of an entire region. The surface Area $S$ is defined as the following:
$$Area(S)=\iint_SdS=\iint_D||\vec{r}_u\times\vec{r}_v||du\,dv$$
where $D$ is the region in the $(u,v)$-plane used by your parametrization.
