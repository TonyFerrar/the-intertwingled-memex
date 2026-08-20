# Solving and Interpreting Partial Derivatives 

We want to find the partial derivatives, evaluate them at the point $(1, -1, 2)$, and interpret their geometric meaning for the function of three variables:

$$f(x,y,z) = x^{2}+y^{2}-z^{2}$$

## 1. Finding the General Partial Derivatives

### Differentiating with respect to $x$ ($\frac{\partial f}{\partial x}$):

When finding $\frac{\partial f}{\partial x}$, we treat both $y$ and $z$ as constants:

- The derivative of $x^{2}$ with respect to $x$ is $2x$.
    
- The derivatives of $y^{2}$ and $-z^{2}$ with respect to $x$ are both $0$.
    

$$\frac{\partial f}{\partial x} = 2x$$

### Differentiating with respect to $y$ ($\frac{\partial f}{\partial y}$):

When finding $\frac{\partial f}{\partial y}$, we treat both $x$ and $z$ as constants:

- The derivative of $y^{2}$ with respect to $y$ is $2y$.
    
- The derivatives of $x^{2}$ and $-z^{2}$ with respect to $y$ are both $0$.
    

$$\frac{\partial f}{\partial y} = 2y$$

### Differentiating with respect to $z$ ($\frac{\partial f}{\partial z}$):

Though the question text specifically asks for $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$, we can also compute the derivative with respect to $z$ since it is a three-variable function:

- The derivative of $-z^{2}$ with respect to $z$ is $-2z$.
    

$$\frac{\partial f}{\partial z} = -2z$$

## 2. Evaluating at the Specified Point $(1, -1, 2)$

We substitute $x = 1$, $y = -1$, and $z = 2$ into our partial derivative equations:

### Evaluating $\frac{\partial f}{\partial x}(1, -1, 2)$:

$$\left.\left(\frac{\partial f}{\partial x}\right)\right|_{(1,-1,2)} = 2(1) = 2$$

### Evaluating $\frac{\partial f}{\partial y}(1, -1, 2)$:

$$\left.\left(\frac{\partial f}{\partial y}\right)\right|_{(1,-1,2)} = 2(-1) = -2$$

## 3. Geometric Interpretation

Because this is a function of three variables ($w = f(x,y,z)$), we interpret these values in the context of a four-dimensional space or by using **level surfaces** ($x^2 + y^2 - z^2 = c$):

- **Rate of change in the $x$-direction:** The value $\frac{\partial f}{\partial x}(1,-1,2) = 2$ means that if you move from the point $(1,-1,2)$ parallel to the $x$-axis in the positive direction (holding $y$ and $z$ constant), the value of the function $f$ increases at an instantaneous rate of $2$.
    
- **Rate of change in the $y$-direction:** The value $\frac{\partial f}{\partial y}(1,-1,2) = -2$ means that if you move from the same point parallel to the $y$-axis in the positive direction (holding $x$ and $z$ constant), the value of the function $f$ decreases at an instantaneous rate of $2$.