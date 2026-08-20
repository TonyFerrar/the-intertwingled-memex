# Solving and Interpreting Partial Derivatives 

We want to determine the partial derivatives, evaluate them at the point $(1, 2)$, and interpret their meanings for the function:

$$f(x,y) = x^{2}y - y^{3}$$

## 1. Finding the General Partial Derivatives

### Differentiating with respect to $x$ ($\frac{\partial f}{\partial x}$):

When finding $\frac{\partial f}{\partial x}$, we treat $y$ as a constant:

- The derivative of $x^{2}y$ with respect to $x$ is $2xy$.
    
- The derivative of $-y^{3}$ with respect to $x$ is $0$ (since it is treated entirely as a constant).
    

$$\frac{\partial f}{\partial x} = 2xy$$

### Differentiating with respect to $y$ ($\frac{\partial f}{\partial y}$):

When finding $\frac{\partial f}{\partial y}$, we treat $x$ as a constant:

- The derivative of $x^{2}y$ with respect to $y$ is $x^{2}$ (since $x^2$ acts as a constant coefficient).
    
- The derivative of $-y^{3}$ with respect to $y$ is $-3y^{2}$.
    

$$\frac{\partial f}{\partial y} = x^{2} - 3y^{2}$$

## 2. Evaluating at the Point $(1, 2)$

Now, we substitute $x = 1$ and $y = 2$ into our partial derivative formulas:

### Evaluating $\frac{\partial f}{\partial x}(1, 2)$:

$$\left.\left(\frac{\partial f}{\partial x}\right)\right|_{(1,2)} = 2(1)(2) = 4$$

### Evaluating $\frac{\partial f}{\partial y}(1, 2)$:

$$\left.\left(\frac{\partial f}{\partial y}\right)\right|_{(1,2)} = (1)^{2} - 3(2)^{2} = 1 - 3(4) = 1 - 12 = -11$$

## 3. Geometric Interpretation

- **In the $x$-direction:** The value $\frac{\partial f}{\partial x}(1,2) = 4$ means that if you stand at the point $(1,2)$ on the surface and move parallel to the $x$-axis in the positive direction (holding $y = 2$ fixed), the slope of the tangent line trace is $4$. The surface is rising.
    
- **In the $y$-direction:** The value $\frac{\partial f}{\partial y}(1,2) = -11$ means that if you stand at the same point $(1,2)$ and move parallel to the $y$-axis in the positive direction (holding $x = 1$ fixed), the slope of the tangent line trace is $-11$. The surface is dropping steeply.