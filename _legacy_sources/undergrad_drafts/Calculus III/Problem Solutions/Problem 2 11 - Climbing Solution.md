Here is the complete step-by-step solution to the problem shown in the image:

## Solution

### (a) Compute the gradient vector $\nabla f(x,y,z)$

The gradient vector for a three-variable function is defined as:

$$\nabla f(x,y,z) = \langle f_x, \, f_y, \, f_z \rangle$$

We compute the first partial derivatives of $f(x,y,z) = y \ln(x) + xz^2e^y$ by treating the other variables as constants:

1. **Partial derivative with respect to $x$ ($f_x$):**
    
    $$f_x(x,y,z) = \frac{\partial}{\partial x}\left(y \ln(x) + xz^2e^y\right) = \frac{y}{x} + z^2e^y$$
    
2. **Partial derivative with respect to $y$ ($f_y$):**
    
    $$f_y(x,y,z) = \frac{\partial}{\partial y}\left(y \ln(x) + xz^2e^y\right) = \ln(x) + xz^2e^y$$
    
3. **Partial derivative with respect to $z$ ($f_z$):**
    
    $$f_z(x,y,z) = \frac{\partial}{\partial z}\left(y \ln(x) + xz^2e^y\right) = 0 + 2xze^y = 2xze^y$$
    

Combining these components yields the general gradient vector:

$$\nabla f(x,y,z) = \left\langle \frac{y}{x} + z^2e^y, \; \ln(x) + xz^2e^y, \; 2xze^y \right\rangle$$

### (b) Evaluate $\nabla f$ at the point $(1,0,3)$

Substitute $x = 1$, $y = 0$, and $z = 3$ into each component of the gradient vector:

1. **X-component ($f_x$):**
    
    $$\frac{0}{1} + (3)^2e^0 = 0 + 9(1) = 9$$
    
2. **Y-component ($f_y$):**
    
    $$\ln(1) + (1)(3)^2e^0 = 0 + 9(1) = 9$$
    
3. **Z-component ($f_z$):**
    
    $$2(1)(3)e^0 = 6(1) = 6$$
    

Thus, the evaluated gradient vector at the given point is:

$$\nabla f(1,0,3) = \langle 9, \, 9, \, 6 \rangle$$