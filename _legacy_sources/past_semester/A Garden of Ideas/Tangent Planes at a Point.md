
# Tangent Planes at a Point

> [!info] Tangent Planes Essential Formulas
> 
> **Tangent Plane in 3D:**
> $$z = z_0 + f_x(x_0,y_0)[x-x_0] + f_y(x_0,y_0)[y-y_0], \quad z_0=f(x_0,y_0).$$
> 
> **Relating to Other Forms of the Equation of a Plane**
> $$\vec{n}=\langle a, b, c\rangle$$
 $$a=f_x(x-x_0)$$
 $$b = f_y(y-y_0)$$
 $$c=-1$$


 In Calculus 1, you learned how to use derivatives to find the tangent lines of a given function at a point. In Calculus 3, we expand this concept to solve for tangent planes at a point along a 3D surface. 

The equation for the tangent plane at any given point is given below:
$$z = z_0 + f_x(x_0,y_0)[x-x_0] + f_y(x_0,y_0)[y-y_0], \quad z_0=f(x_0,y_0)$$

## Connecting this Idea
To relate this form of a plane back to [[Equations of Planes]], the components of the normal vector that describe this plane can be represented by:
$$\vec{n}=\langle a, b, c\rangle$$
$$a=f_x(x-x_0)$$
$$b = f_y(y-y_0)$$
$$c=-1$$

## Expanding to functions of 3 Variables
The previous interpretation describes a plane tangent to a surface in 3D. It is possible to expand this expression for functions of 3 variables (for $w=f(x,y,z)$).
$$L(x,y,z) = f_0 + f_x\,\Delta x + f_y\,\Delta y + f_z\,\Delta z, \quad f_0=f(x_0,y_0,z_0).$$
 
> [!warning] Common Pitfalls
> 1. Remember to evaluate the partial derivatives at the point of interest
> 2. Don't forget about the $z_0$ term
> 3. Always make sure to utilize $(x-x_0)$ and $(y-y_0)$ and not just $x$ and $y$ alone.