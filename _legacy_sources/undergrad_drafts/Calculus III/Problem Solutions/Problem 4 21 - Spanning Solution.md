## 1. Identify the Formula and Parameterization

To find the mass $M$ of a surface with a variable density $\rho(x,y,z)$, we use the scalar surface integral formula:

$$M = \iint_{S} \rho(x,y,z) \, dS = \iint_{D} \rho(\vec{r}(u,v)) \|\vec{r}_u \times \vec{r}_v\| [cite_start]\, du \, dv$$

The problem states that the flat plate lies entirely in the horizontal plane $z = 4$. We can parameterize this flat surface using $x$ and $y$ as our parameters:

$$\vec{r}(x,y) = \langle x, \, y, \, 4 \rangle$$

## 2. Compute the Tangent Vectors and $dS$

Next, find the partial derivatives (tangent vectors) of our position vector $\vec{r}(x,y)$:

- **Partial derivative with respect to $x$:**
    
    $$\vec{r}_x = \langle 1, \, 0, \, 0 \rangle$$
    
- **Partial derivative with respect to $y$:**
    
    $$\vec{r}_y = \langle 0, \, 1, \, 0 \rangle$$
    

Now, compute their cross product to find the normal vector:

$$\vec{r}_x \times \vec{r}_y = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{vmatrix} = \langle 0, \, 0, \, 1 \rangle$$

Find the magnitude of this cross product:

$$\|\vec{r}_x \times \vec{r}_y\| = \sqrt{0^2 + 0^2 + 1^2} = 1$$

Substitute this back into our differential surface element equation:

$$dS = \|\vec{r}_x \times \vec{r}_y\| \, dx \, dy = 1 \, dx \, dy$$

> **Note:** Because the surface is perfectly flat and parallel to the $xy$-plane, there is no geometric tilting or stretching. The surface area element $dS$ is exactly equal to the flat area element $dx \, dy$.

## 3. Set Up the Integral over Region $D$

We are given the boundaries for the rectangular region $D$ in the $xy$-plane:

- $0 \le x \le 1$
    
- $0 \le y \le 2$
    

The density function is given as $\rho(x,y,z) = x + y$. Substituting $z = 4$ doesn't alter the expression since $z$ does not explicitly appear in this specific density equation.

Combining everything into the mass double integral gives:

$$M = \int_{0}^{2} \int_{0}^{1} (x + y) \, dx \, dy$$

## 4. Evaluate the Integral

### Step A: Evaluate the Inner Integral (with respect to $x$)

$$\int_{0}^{1} (x + y) \, dx = \left[ \frac{1}{2}x^2 + yx \right]_{0}^{1}$$

Plug in the upper boundary ($x=1$) and lower boundary ($x=0$):

$$= \left( \frac{1}{2}(1)^2 + y(1) \right) - \left( \frac{1}{2}(0)^2 + y(0) \right) = \frac{1}{2} + y$$

### Step B: Evaluate the Outer Integral (with respect to $y$)

Now, substitute that result into the remaining outer integral:

$$M = \int_{0}^{2} \left( \frac{1}{2} + y \right) \, dy$$

Integrate with respect to $y$:

$$M = \left[ \frac{1}{2}y + \frac{1}{2}y^2 \right]_{0}^{2}$$

Plug in the boundaries ($y=2$ and $y=0$):

$$M = \left( \frac{1}{2}(2) + \frac{1}{2}(2)^2 \right) - (0)$$

$$M = 1 + 2 = 3$$

## Final Answer

$$M = 3 \text{ kg}$$