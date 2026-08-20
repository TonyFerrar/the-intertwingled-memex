# Solving the Partial Derivatives 

We want to find the partial derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for the function:

$$f(x,y) = e^{xy}$$

We will use the **Chain Rule** for exponential functions, which states that $\frac{d}{du}(e^u) = e^u \cdot \frac{du}{d\text{variable}}$.

## 1. Finding $\frac{\partial f}{\partial x}$

When differentiating with respect to $x$, we treat $y$ as a constant.

$$\frac{\partial f}{\partial x} = e^{xy} \cdot \frac{\partial}{\partial x}(xy)$$

- The derivative of the exponent $xy$ with respect to $x$ is simply $y$ (since $y$ acts as a constant coefficient, like differentiating $3x$ to get $3$).
    

Bringing it together:

$$\frac{\partial f}{\partial x} = y e^{xy}$$

## 2. Finding $\frac{\partial f}{\partial y}$

When differentiating with respect to $y$, we treat $x$ as a constant.

$$\frac{\partial f}{\partial y} = e^{xy} \cdot \frac{\partial}{\partial y}(xy)$$

- The derivative of the exponent $xy$ with respect to $y$ is simply $x$ (since $x$ acts as the constant coefficient).
    

Bringing it together:

$$\frac{\partial f}{\partial y} = x e^{xy}$$