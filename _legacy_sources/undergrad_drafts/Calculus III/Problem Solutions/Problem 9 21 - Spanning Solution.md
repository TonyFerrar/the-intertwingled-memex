## 1. Identify the Formula and Parameterization

The flux of a vector field $\vec{v}$ through a parameterized surface $S$ is calculated using the formula:

$$\text{Flux} = \iint_{S} \vec{v} \cdot d\vec{S} = \iint_{D} \vec{v}(\vec{r}(u,v)) \cdot (\vec{r}_u \times \vec{r}_v) \, du \, dv$$

The surface $S$ is the side of a cylinder given by $x^2 + y^2 = 1$ with a height constraint of $0 \le z \le 2$. The constant radius is $R = \sqrt{1} = 1$. We can parameterize this surface using cylindrical coordinates ($\theta$ and $z$):

- $x = \cos\theta$
    
- $y = \sin\theta$
    
- $z = z$
    

This gives the vector position equation $\vec{r}(\theta, z) = \langle x, y, z \rangle$:

$$\vec{r}(\theta, z) = \langle \cos\theta, \, \sin\theta, \, z \rangle$$

The parameter boundaries are defined as:

- $0 \le \theta \le 2\pi$ (for a full rotation around the cylinder)
    
- $0 \le z \le 2$
    

## 2. Compute the Tangent Vectors and Normal Vector

Find the tangent vectors by taking the partial derivatives of our position vector $\vec{r}(\theta, z)$:

- **Partial derivative with respect to $\theta$:**
    
    $$\vec{r}_\theta = \langle -\sin\theta, \, \cos\theta, \, 0 \rangle$$
    
- **Partial derivative with respect to $z$:**
    
    $$\vec{r}_z = \langle 0, \, 0, \, 1 \rangle$$
    

Now, compute their cross product $\vec{r}_\theta \times \vec{r}_z$ to find the normal vector:

$$\vec{r}_\theta \times \vec{r}_z = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -\sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{vmatrix}$$

$$\vec{r}_\theta \times \vec{r}_z = \hat{i}(\cos\theta - 0) - \hat{j}(-\sin\theta - 0) + \hat{k}(0 - 0)$$

$$\vec{r}_\theta \times \vec{r}_z = \langle \cos\theta, \, \sin\theta, \, 0 \rangle$$

> **Orientation Check:** Since $\cos\theta = x$ and $\sin\theta = y$, this normal vector points in the direction of $\langle x, y, 0 \rangle$, which is directed straight radially outward, **away from the $z$-axis**. This matches the specified orientation requirement exactly.

## 3. Substitute the Field and Compute the Dot Product

The given velocity vector field is $\vec{v}(x,y,z) = \langle x, y, 0 \rangle$. Express this field entirely in terms of our parameters by substituting $x = \cos\theta$ and $y = \sin\theta$:

$$\vec{v}(\vec{r}(\theta, z)) = \langle \cos\theta, \, \sin\theta, \, 0 \rangle$$

Next, compute the dot product of the vector field and our normal vector:

$$\vec{v}(\vec{r}(\theta, z)) \cdot (\vec{r}_\theta \times \vec{r}_z) = \langle \cos\theta, \, \sin\theta, \, 0 \rangle \cdot \langle \cos\theta, \, \sin\theta, \, 0 \rangle$$

$$= \cos^2\theta + \sin^2\theta + 0$$

Using the fundamental trigonometric identity $\cos^2\theta + \sin^2\theta = 1$:

$$\vec{v}(\vec{r}(\theta, z)) \cdot (\vec{r}_\theta \times \vec{r}_z) = 1$$

## 4. Set Up and Evaluate the Integral

Substitute the value of the dot product along with the parameter bounds into the flux double integral:

$$\text{Flux} = \int_{0}^{2} \int_{0}^{2\pi} 1 \, d\theta \, dz$$

### Step A: Evaluate the Inner Integral (with respect to $\theta$)

$$\int_{0}^{2\pi} 1 \, d\theta = [\theta]_{0}^{2\pi} = 2\pi$$

### Step B: Evaluate the Outer Integral (with respect to $z$)

$$\text{Flux} = \int_{0}^{2} 2\pi \, dz = [2\pi z]_{0}^{2} = 2\pi(2) - 2\pi(0) = 4\pi$$

> **Alternative Geometric Insight:** Because $\vec{v} \cdot \vec{n} = x^2 + y^2 = 1$ everywhere along the cylinder wall, the fluid flows perfectly perpendicular out of the cylinder at a uniform velocity of 1. Therefore, the total flux is simply equal to $1 \times \text{Lateral Surface Area}$.
> 
> $$\text{Area} = 2\pi R h = 2\pi(1)(2) = 4\pi \implies \text{Flux} = 4\pi$$

## Final Answer

$$\text{Flux} = 4\pi$$