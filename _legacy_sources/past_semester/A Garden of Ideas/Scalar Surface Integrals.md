
# Scalar Surface Integrals

> [!info] Scalar Surface Integrals Essential Formulas
> **Scalar Surface Integral (Mass example)**
> $$M = \iint_D \rho(\vec{r}(u,v))\, \lVert \vec{r}_u \times \vec{r}_v \rVert\, du\, dv$$

In certain contexts, each point along a surface carries a **scalar quantity**. Such quantities can be in the form of density, temperature, charge density, or some other relevant scalar quantity. 

Using density as an example, suppose the density of a thin sheet is given by the following function
$$\rho(x,y,z)\quad(kg/m^2)$$
The total mass of the sheet is given by the following formulation:
$$M=\iint_S\rho(x,y,z)dS$$
If $S$ is parametrized by $\vec{r}(u,v)$, then
$$M = \iint_D \rho(\vec{r}(u,v))\, \lVert \vec{r}_u \times \vec{r}_v \rVert\, du\, dv$$
This is what's called a **SCALAR SURFACE INTEGRAL** because the integrand $\rho$ is a scalar function, and not a vector.
