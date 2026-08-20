## 1. Give the Parametrization $\vec{r}(x,y)$ of the Surface

To parametrize a surface when using $x$ and $y$ as your parameters, you need to express the variable $z$ explicitly as a function of $x$ and $y$ ($z = f(x,y)$).

Start with the equation of the plane:

$$x + 2y + 3z = 6$$

Isolate $3z$:

$$3z = 6 - x - 2y$$

Divide by 3 to solve for $z$:

$$z = 2 - \frac{1}{3}x - \frac{2}{3}y$$

Now, write this in vector form $\vec{r}(x,y) = \langle x, y, z \rangle$:

$$\vec{r}(x,y) = \left\langle x, \, y, \, 2 - \frac{1}{3}x - \frac{2}{3}y \right\rangle$$

The domain for this parametrization is defined by the given rectangular boundaries:

$$0 \le x \le 2, \quad 0 \le y \le 1$$

## 2. Compute Partial Derivatives and the Normal Vector $\vec{r}_x \times \vec{r}_y$

Next, compute the tangent vectors by taking the partial derivatives of the position vector $\vec{r}(x,y)$ with respect to each parameter:

- **Partial derivative with respect to $x$:**
    
    $$\vec{r}_x = \frac{\partial \vec{r}}{\partial x} = \left\langle 1, \, 0, \, -\frac{1}{3} \right\rangle$$
    
- **Partial derivative with respect to $y$:**
    
    $$\vec{r}_y = \frac{\partial \vec{r}}{\partial y} = \left\langle 0, \, 1, \, -\frac{2}{3} \right\rangle$$
    

Now, compute the cross product $\vec{r}_x \times \vec{r}_y$ to find the normal vector $\vec{n}$:

$$\vec{r}_x \times \vec{r}_y = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 0 & -1/3 \\ 0 & 1 & -2/3 \end{vmatrix}$$

Expand the determinant along the top row:

$$\vec{r}_x \times \vec{r}_y = \hat{i} \left( (0)\left(-\frac{2}{3}\right) - (1)\left(-\frac{1}{3}\right) \right) - \hat{j} \left( (1)\left(-\frac{2}{3}\right) - (0)\left(-\frac{1}{3}\right) \right) + \hat{k} \big( (1)(1) - (0)(0) \big)$$

$$\vec{r}_x \times \vec{r}_y = \hat{i}\left(\frac{1}{3}\right) - \hat{j}\left(-\frac{2}{3}\right) + \hat{k}(1)$$

$$\vec{r}_x \times \vec{r}_y = \left\langle \frac{1}{3}, \, \frac{2}{3}, \, 1 \right\rangle$$

## 3. Solve for $dS$ in Terms of $dx \, dy$

The surface area element $dS$ scales the region from the flat parameter domain to the slanted surface space via the magnitude of the normal vector:

$$dS = \|\vec{r}_x \times \vec{r}_y\| [cite_start]\, dx \, dy$$

Calculate the magnitude (length) of the cross product vector we found in the previous step:

$$\|\vec{r}_x \times \vec{r}_y\| = \sqrt{\left(\frac{1}{3}\right)^2 + \left(\frac{2}{3}\right)^2 + (1)^2}$$

$$\|\vec{r}_x \times \vec{r}_y\| = \sqrt{\frac{1}{9} + \frac{4}{9} + \frac{9}{9}}$$

$$\|\vec{r}_x \times \vec{r}_y\| = \sqrt{\frac{14}{9}} = \frac{\sqrt{14}}{3}$$

Substitute this value back into the expression for $dS$:

$$dS = \frac{\sqrt{14}}{3} \, dx \, dy$$