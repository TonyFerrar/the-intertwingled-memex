
# Parametric Equations of a Line


> [!info] Essential Formulas
> For points $P = (x_0, y_0, z_0)$ and $Q = (x, y, z)$
>
> **Vector Equation of a Line:**
> $$\vec{r}(t) = \vec{r}_0+t\vec{v}$$
> where $\vec{v}$ is any vector parallel to $\vec{PQ}$ and
> $\vec{v} = a\hat{i} + b\hat{j} + c\hat{k}$, which is useful for the forms below.
> 
> **Parametric Equations of a Line:**
> $$x = x_0 + at, \quad y = y_0 + bt, \quad z = z_0 + ct$$
> **Symmetric Equation of a Line:**
> $$\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}$$

Parametrizing a [[Lines|line]] is another means of expressing a line with respect to one variable, $t$. This allows us to take a vector that describes the direction of a line and be able to identify points that align with that vector. 

Given two points $P(x_0, y_0, z_0)$ and $Q(x, y, z)$, the vector $\vec{PQ}$ can be related to the vector describing the direction of the line, $\vec{v}$ .
$$\vec{PQ}=\vec{v}\quad\Rightarrow\quad\langle x-x_0,\;y-y_0,\;z-z_0\rangle = \langle a,\;b,\;c\rangle$$
Multiplying the direction vector by a scalar $t$ allows us to represent any point on the line with respect to $t$.

If we establish $\vec{r}=\langle x,\;y,\;z\rangle$ and $\vec{r}_0=\langle x_0,\;y_0,\;z_0\rangle$, then we can establish the vector describing the line as such:
$$\vec{r}(t) = \vec{r}_0+t\vec{v}$$
This vector expression yields the three parametric equations for $x, y,$ and $z$:
$$\boxed{x = x_0 + at, \quad y = y_0 + bt, \quad z = z_0 + ct}$$
For $t=0$, the position vector will point towards the starting point, $P(x_0,y_0,z_0)$. For $t=1$, the position vector will point towards the secondary point, $Q(x, y, z)$.

Through setting the parametric equations equal to $t$, you can instead get the symmetric form of the line:
$$\boxed{\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}}$$
