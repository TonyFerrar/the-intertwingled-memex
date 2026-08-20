
# Evaluate and interpret partial derivatives at points

> [!info] Evaluating and Interpreting Partial Derivatives
> 
> - General derivatives (compute first):  
> - $\displaystyle f_x=\frac{\partial f}{\partial x}, \quad f_y=\frac{\partial f}{\partial y}, \quad f_z=\frac{\partial f}{\partial z}$
> - Evaluation:  
> - $\displaystyle f_x(x_0,y_0)=\Big(\frac{\partial f}{\partial x}\Big)\bigg|_{(x_0,y_0)}$
> - Tangent plane traces:  
> - In the $x$-direction (hold $y=y_0$): slope = $f_x(x_0,y_0)$  
> - In the $y$-direction (hold $x=x_0$): slope = $f_y(x_0,y_0)$


Just like derivatives give us information about the local slope of a single-variable function, partial derivatives give us information about the local slope of a multi-variable function. 

## Derivatives of single-variable functions
When we take the derivative, it tells us the slope of the tangent line. Evaluating the derivative at a specific value of $x$ gives the slope of the curve at that value of $x$:

$$f(x) = x^2$$
$$f'(x) = 2x$$
Evaluating at a specific value of $x$,
$$f'(2) = 4$$
This result tells us that if we increase $x$ by $1$ near $x=2$, then $f(x)$ increases by $4$.

## Derivatives of multi-variable functions
Partial derivatives tell us the slope moving in one direction of a multivariable function. Remember that a function of 2 variables $z = f(x,y)$ produces a sheet instead of the curve expected from a function of one variable. The meaning of the derivative changes to include this nuance:

$f_x$ tells us the slope of the surface at a fixed value of $y$. In other words, choose a value of $y$ and walk back and forth parallel to the $x$-axis. The slope you see will be the partial derivative with respect to $x$ at that fixed $y$ value.

$f_y$ tells us the slope of the surface at a fixed value of $x$. In other words, choose a value of $x$ and walk back and forth parallel to the $y$-axis. The slope you see will be the partial derivative with respect to $y$ at that fixed $x$ value.


