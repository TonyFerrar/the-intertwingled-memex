
# Vector Surface Integrals (Surface Flux)

> [!info] Vector Surface Integrals Essential Formulas
> 
> **Flux (Vector) Surface Integral**
> $$\iint_S \vec{F}\cdot\vec{n}\, dS= \iint_D \vec{F}(\vec{r}(u,v)) \cdot \left(\vec{r}_u \times \vec{r}_v\right)\, du\, dv.$$
> 

A **flux surface integral/Vector Surface Integral** measures how much of a **vector field** passes through a surface. 
- **Scalar Surface Integrals:** sums up a scalar quantity (like density) over the surface.
- **Vector Surface Integral:** sums up the **component** of a vector field passing through the surface.

Consider $\vec{F}$ to be a vector field (representing velocity, heat flux, etc.) and $\vec{n}$ is the unit normal vector to the surface. A vector surface integral can be represented as such:
$$\iint_S \vec{F}\cdot\vec{n}\, dS$$
A vector surface integral measures the **net flow** through the surface. This can be represented in a parametric form.
$$\iint_S \vec{F}\cdot\vec{n}\, dS
= \iint_D \vec{F}(\vec{r}(u,v)) \cdot \left(\vec{r}_u \times \vec{r}_v\right)\, du\, dv.$$
 
> [!warning] Confusion with Green's Theorem's Flux Form
> This form of flux **HEAVILY** differs from the Green's Theorem formulation of flux.
> 
> **Green's Theorem:**
> Green's Theorem stems from a line integral, which is only found in 2 dimensional cases and is only valid when integrating over a closed plane curve (think a closed circle on the $x-y$ plane.)
> 
> **Flux Surface Integral:**
> A flux surface integral is utilized to describe the flux through either a 2 dimensional or 3 dimensional surface, which cannot be adequately expressed by Green's Theorem.
> 
> The purpose of Green's Theorem is to relate the surface flux to a line integral for a closed region - giving you two options for which form of the integral is simpler to evaluate. Evaluating Vector Surface Integrals (the subject of this page) is one of the options, the other involves using Green's Theorem to evaluate the line integral instead.

<div style="page-break-after: always;"></div>
