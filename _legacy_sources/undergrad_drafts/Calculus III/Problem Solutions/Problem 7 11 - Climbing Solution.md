Here is the complete step-by-step solution to Problem 7:

## Solution

### (a) Show that $\nabla V = \frac{\langle x, y, z \rangle}{\sqrt{x^2+y^2+z^2}}$

We are given the electrostatic potential field function:

$$V(x,y,z) = \sqrt{x^2 + y^2 + z^2} = (x^2 + y^2 + z^2)^{1/2}$$

To find the gradient vector $\nabla V$, we compute its partial derivatives using the Chain Rule:

1. **Partial derivative with respect to $x$ ($V_x$):**
    
    $$V_x = \frac{\partial}{\partial x}(x^2 + y^2 + z^2)^{1/2} = \frac{1}{2}(x^2 + y^2 + z^2)^{-1/2} \cdot \frac{\partial}{\partial x}(x^2 + y^2 + z^2)$$
    
    $$V_x = \frac{1}{2\sqrt{x^2+y^2+z^2}} \cdot (2x) = \frac{x}{\sqrt{x^2+y^2+z^2}}$$
    
2. **Partial derivative with respect to $y$ ($V_y$):**
    
    By symmetry with the calculation for $x$:
    
    $$V_y = \frac{y}{\sqrt{x^2+y^2+z^2}}$$
    
3. **Partial derivative with respect to $z$ ($V_z$):**
    
    By symmetry with the calculation for $x$:
    
    $$V_z = \frac{z}{\sqrt{x^2+y^2+z^2}}$$
    

Combining these components into a vector yields:

$$\nabla V = \left\langle \frac{x}{\sqrt{x^2+y^2+z^2}}, \; \frac{y}{\sqrt{x^2+y^2+z^2}}, \; \frac{z}{\sqrt{x^2+y^2+z^2}} \right\rangle$$

Factoring out the scalar denominator gives the required form:

$$\nabla V = \frac{\langle x, y, z \rangle}{\sqrt{x^2+y^2+z^2}}$$

### (b) Explain physically or geometrically why $\nabla V$ always points radially outward from the origin

- **Geometrically:** The numerator vector $\langle x, y, z \rangle$ is the standard **position vector** $\vec{r}$ of any point in space, which points directly away from the origin $(0,0,0)$. The denominator $\sqrt{x^2+y^2+z^2}$ is exactly the magnitude (length) of that position vector, $|\vec{r}|$. Because a vector divided by its own magnitude is a unit vector ($\hat{r}$), we have:
    
    $$\nabla V = \frac{\vec{r}}{|\vec{r}|} = \hat{r}$$
    
    Since $\hat{r}$ is a unit vector pointing straight out from the center, the gradient vector always points radially outward.
    
- **Physically:** The function $V(x,y,z)$ measures the straight-line distance from the origin. The path of most rapid distance growth is to move directly away from the origin along a straight radial line.
    

### (c) What geometric shapes do the level surfaces $V(x,y,z) = c$ form?

Setting the potential function equal to a positive constant $c$ gives:

$$\sqrt{x^2 + y^2 + z^2} = c$$

Squaring both sides results in:

$$x^2 + y^2 + z^2 = c^2$$

This is the standard equation for a **sphere** centered at the origin with a radius of $c$. Therefore, the level surfaces are concentric, nested spheres.