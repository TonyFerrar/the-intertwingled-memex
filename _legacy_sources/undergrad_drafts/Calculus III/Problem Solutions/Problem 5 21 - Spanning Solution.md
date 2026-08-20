## 1. Identify the Formula and Parameterization

To find the total mass of a curved sheet with a variable density, we use the scalar surface integral formula:

$$M = \iint_{S} \rho(x,y,z) \, dS = \iint_{D} \rho(\vec{r}(x,y)) \|\vec{r}_x \times \vec{r}_y\| \, dx \, dy$$

The surface $S$ is given explicitly by the plane equation $z = 1 + x + 2y$. We can parameterize this surface by using $x$ and $y$ directly as our parameters:

$$\vec{r}(x,y) = \langle x, \, y, \, 1 + x + 2y \rangle$$

The parameter domain $D$ is the flat rectangular region in the $xy$-plane bounded by:

- $0 \le x \le 4$
    
- $0 \le y \le 2$
    

## 2. Compute Partial Derivatives and the Surface Element $dS$

Next, find the tangent vectors by taking the partial derivatives of the position vector $\vec{r}(x,y)$:

- **Partial derivative with respect to $x$:**
    
    $$\vec{r}_x = \langle 1, \, 0, \, 1 \rangle$$
    
- **Partial derivative with respect to $y$:**
    
    $$\vec{r}_y = \langle 0, \, 1, \, 2 \rangle$$
    

Now, compute the cross product $\vec{r}_x \times \vec{r}_y$ to get the normal vector to the plane:

$$\vec{r}_x \times \vec{r}_y = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 0 & 1 \\ 0 & 1 & 2 \end{vmatrix}$$

$$\vec{r}_x \times \vec{r}_y = \hat{i}(0 - 1) - \hat{j}(2 - 0) + \hat{k}(1 - 0) = \langle -1, \, -2, \, 1 \rangle$$

Find the magnitude of this vector to get our scaling factor for $dS$:

$$\|\vec{r}_x \times \vec{r}_y\| = \sqrt{(-1)^2 + (-2)^2 + 1^2} = \sqrt{1 + 4 + 1} = \sqrt{6}$$

Substitute this value into the differential surface area element:

$$dS = \sqrt{6} \, dx \, dy$$

## 3. Set Up the Mass Integral

Using our chosen example density function $\rho(x,y,z) = x$ and substituting our limits of integration, the double integral becomes:

$$M = \int_{0}^{2} \int_{0}^{4} x \cdot \sqrt{6} \, dx \, dy$$

## 4. Evaluate the Integral

### Step A: Evaluate the Inner Integral (with respect to $x$)

$$\int_{0}^{4} \sqrt{6}x \, dx = \sqrt{6} \left[ \frac{1}{2}x^2 \right]_{0}^{4}$$

$$= \sqrt{6} \left( \frac{1}{2}(4)^2 - 0 \right) = \sqrt{6}(8) = 8\sqrt{6}$$

### Step B: Evaluate the Outer Integral (with respect to $y$)

Now, integrate the constant result with respect to $y$ from 0 to 2:

$$M = \int_{0}^{2} 8\sqrt{6} \, dy = \left[ 8\sqrt{6}y \right]_{0}^{2}$$

$$M = 8\sqrt{6}(2) - 0 = 16\sqrt{6}$$

## Final Answer

Assuming the example density function $\rho(x,y,z) = x$, the total mass of the metal sheet is:

$$M = 16\sqrt{6}$$