# Selecting Your Own Transformation for 2D

> [!info] 2D Change of Variables Essential Formulas
> 
> $$\iint_R f(x,y)\,dx\,dy= \iint_{R'} f(x(u,v),y(u,v))\,|J|\,du\,dv$$
> **Jacobian Matrix (2D)**
> $$
> J=\frac{\partial(x,y)}{\partial(u,v)}
> =\begin{bmatrix}
> \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\[6pt]
> \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
> \end{bmatrix},
> \qquad
> |J|=
> \begin{vmatrix}
> \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v}\\[4pt]
> \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
> \end{vmatrix}
> $$
> **Interpretation**
> $|J|$ is the **area-scaling factor** between coordinate systems.
> Always compute $\partial(x,y)/\partial(u,v)$.
> Use $|J|$ in integrals.

