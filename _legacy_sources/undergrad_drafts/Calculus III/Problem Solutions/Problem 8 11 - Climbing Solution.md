Here is the complete step-by-step solution to Problem 8:

## Solution

We are given an implicit surface defined by the level surface equation:

$$F(x,y,z) = x^2y + yz + z^3 = 11$$

### (a) Find the normal vector to this surface at the point $(2,1,2)$ using the gradient

The gradient vector of an implicit function, $\nabla F(x,y,z)$, is always geometrically orthogonal (normal) to its level surfaces.

1. **Find the general gradient vector $\nabla F(x,y,z)$:**
    
    Compute the partial derivatives of $F(x,y,z) = x^2y + yz + z^3$:
    
    $$F_x = \frac{\partial}{\partial x}(x^2y + yz + z^3) = 2xy$$
    
    $$F_y = \frac{\partial}{\partial y}(x^2y + yz + z^3) = x^2 + z$$
    
    $$F_z = \frac{\partial}{\partial z}(x^2y + yz + z^3) = y + 3z^2$$
    
    $$\nabla F(x,y,z) = \langle 2xy, \, x^2 + z, \, y + 3z^2 \rangle$$
    
2. **Evaluate the gradient at the point $(2,1,2)$:**
    
    Substitute $x = 2$, $y = 1$, and $z = 2$:
    
    $$F_x(2,1,2) = 2(2)(1) = 4$$
    
    $$F_y(2,1,2) = (2)^2 + 2 = 4 + 2 = 6$$
    
    $$F_z(2,1,2) = 1 + 3(2)^2 = 1 + 12 = 13$$
    

Thus, the normal vector $\vec{n}$ to the surface at the given point is:

$$\vec{n} = \nabla F(2,1,2) = \langle 4, \, 6, \, 13 \rangle$$

### (b) Write the equation of the tangent plane to the surface at $(2,1,2)$

The standard equation of a plane passing through a point $(x_0, y_0, z_0)$ with a normal vector $\langle a, b, c \rangle$ is given by:

$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$

1. **Substitute our components into the plane equation:**
    
    - Normal vector components: $a = 4$, $b = 6$, $c = 13$
        
    - Point coordinates: $x_0 = 2$, $y_0 = 1$, $z_0 = 2$
        
    
    $$4(x - 2) + 6(y - 1) + 13(z - 2) = 0$$
    
2. **Expand and simplify to standard form:**
    
    $$4x - 8 + 6y - 6 + 13z - 26 = 0$$
    
    $$4x + 6y + 13z - 40 = 0$$
    
    $$4x + 6y + 13z = 40$$
    

### Final Answer

- **Normal Vector:** $\langle 4, 6, 13 \rangle$
    
- **Tangent Plane Equation:** $4x + 6y + 13z = 40$