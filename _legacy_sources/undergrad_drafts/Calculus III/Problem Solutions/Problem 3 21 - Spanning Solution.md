## 1. Give a Parametrization $\vec{r}(\theta, z)$ of the Cylindrical Surface

To parametrize the side of a cylinder, it is best to use a variation of cylindrical coordinates.

The cylinder is given by the equation:

$$x^2 + y^2 = 4$$

This tells us the cylinder has a constant radius of $R = \sqrt{4} = 2$. We can describe any point on this circular boundary in the $xy$-plane using the angle $\theta$:

- $x = 2\cos\theta$
    
- $y = 2\sin\theta$
    

Since $z$ is allowed to vary freely from 0 to 3 along the height of the cylinder, we can keep $z$ as its own parameter:

- $z = z$
    

Combining these gives the vector position equation $\vec{r}(\theta, z) = \langle x, y, z \rangle$:

$$\vec{r}(\theta, z) = \langle 2\cos\theta, \, 2\sin\theta, \, z \rangle$$

The parameter domain constraints are:

- $0 \le \theta \le 2\pi$ (for a full rotation around the cylinder)
    
- $0 \le z \le 3$ (the given height constraint)
    

## 2. Compute $\vec{r}_\theta$ and $\vec{r}_z$ Alongside the Cross Product $\vec{r}_\theta \times \vec{r}_z$

Find the tangent vectors by taking the partial derivatives of our parametrization with respect to $\theta$ and $z$:

- **Partial derivative with respect to $\theta$:**
    
    $$\vec{r}_\theta = \frac{\partial \vec{r}}{\partial \theta} = \langle -2\sin\theta, \, 2\cos\theta, \, 0 \rangle$$
    
- **Partial derivative with respect to $z$:**
    
    $$\vec{r}_z = \frac{\partial \vec{r}}{\partial z} = \langle 0, \, 0, \, 1 \rangle$$
    

Now, compute the cross product $\vec{r}_\theta \times \vec{r}_z$ to determine the normal vector:

$$\vec{r}_\theta \times \vec{r}_z = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -2\sin\theta & 2\cos\theta & 0 \\ 0 & 0 & 1 \end{vmatrix}$$

Expand the determinant along the top row:

$$\vec{r}_\theta \times \vec{r}_z = \hat{i}\big((2\cos\theta)(1) - (0)(0)\big) - \hat{j}\big((-2\sin\theta)(1) - (0)(0)\big) + \hat{k}\big((-2\sin\theta)(0) - (2\cos\theta)(0)\big)$$

$$\vec{r}_\theta \times \vec{r}_z = \langle 2\cos\theta, \, 2\sin\theta, \, 0 \rangle$$

## 3. Solve for $dS$ in Terms of $d\theta \, dz$ and Integrate for the Surface Area

The differential surface area element $dS$ is found by calculating the magnitude of our cross product vector:

$$dS = \|\vec{r}_\theta \times \vec{r}_z\| \, d\theta \, dz$$

Calculate the magnitude:

$$\|\vec{r}_\theta \times \vec{r}_z\| = \sqrt{(2\cos\theta)^2 + (2\sin\theta)^2 + (0)^2}$$

$$\|\vec{r}_\theta \times \vec{r}_z\| = \sqrt{4\cos^2\theta + 4\sin^2\theta} = \sqrt{4(\cos^2\theta + \sin^2\theta)}$$

Since $\cos^2\theta + \sin^2\theta = 1$:

$$\|\vec{r}_\theta \times \vec{r}_z\| = \sqrt{4} = 2$$

Thus, the surface element simplifies beautifully to:

$$dS = 2 \, d\theta \, dz$$

Now, set up and evaluate the surface area integral using our boundary limits:

$$\text{Area}(S) = \int_{0}^{3} \int_{0}^{2\pi} 2 \, d\theta \, dz$$

### Step A: Evaluate the Inner Integral (with respect to $\theta$)

$$\int_{0}^{2\pi} 2 \, d\theta = [2\theta]_{0}^{2\pi} = 4\pi$$

### Step B: Evaluate the Outer Integral (with respect to $z$)

$$\text{Area}(S) = \int_{0}^{3} 4\pi \, dz = [4\pi z]_{0}^{3} = 4\pi(3) - 4\pi(0) = 12\pi$$

_(Note: This matches the standard geometric formula for the lateral surface area of a cylinder, $A = 2\pi R h = 2\pi(2)(3) = 12\pi$.)_

## Final Answer

$$\text{Area}(S) = 12\pi$$