
# Linear Approximations

> [!info] Linear Approximations Essential Formulas
> 
> **Linear Approximation is an Applied Tangent Plane:**
> $$L(x,y) = f(x_0,y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0).$$
> 
> - $x_0$ and $y_0$ represent the point at which the plane is originating from (starting point)
> - $x$ and $y$ represent the point at which you are attempting to estimate the value of

Using the concept of tangent planes, it's possible to approximate values of functions in 3D given a formulation of a tangent plane.

Given a point that your tangent plane originates from, it is possible to estimate the value of $f(x,y)$ for a point that is **close to** your plane's starting point. The formula for a linear approximation is the same exact equation as a tangent plane but with one caveat: $x$ and $y$ now represent the $xy$ coordinates of the point you're attempting to estimate
$$L(x,y) = f(x_0,y_0) + f_x(x_0,y_0)(x-x_0) + f_y(x_0,y_0)(y-y_0).$$


> [!warning] The Validity of Estimations
> - This method of estimating the value of a function only works when you're attempting to find the value of a point that is **CLOSE TO** the point at which the plane resides. The further you go from the point, the less accurate the estimations become.
> - These types of estimations become far more valuable when the function that represents the surface is unknown.

