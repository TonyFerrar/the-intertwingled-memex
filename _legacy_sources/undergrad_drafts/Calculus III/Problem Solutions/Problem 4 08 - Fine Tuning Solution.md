# Solving the Partial Derivatives

We want to find the partial derivatives for the function of three variables:

$$f(x,y,z) = \ln(x^{2}+y^{2}+z^{2})$$

We will use the **Chain Rule** for natural logarithms, which states that $\frac{d}{du}(\ln u) = \frac{1}{u} \cdot \frac{du}{d\text{variable}}$.

## 1. Finding $\frac{\partial f}{\partial x}$

When differentiating with respect to $x$, we treat both $y$ and $z$ as constants.

$$\frac{\partial f}{\partial x} = \frac{1}{x^{2}+y^{2}+z^{2}} \cdot \frac{\partial}{\partial x}(x^{2}+y^{2}+z^{2})$$

- The derivative of the inner function $(x^{2}+y^{2}+z^{2})$ with respect to $x$ is $2x$ (since $y^2$ and $z^2$ act as constants and differentiate to $0$).
    

Bringing it together:

$$\frac{\partial f}{\partial x} = \frac{2x}{x^{2}+y^{2}+z^{2}}$$

## 2. Finding $\frac{\partial f}{\partial y}$

When differentiating with respect to $y$, we treat both $x$ and $z$ as constants.

$$\frac{\partial f}{\partial y} = \frac{1}{x^{2}+y^{2}+z^{2}} \cdot \frac{\partial}{\partial y}(x^{2}+y^{2}+z^{2})$$

- The derivative of the inner function $(x^{2}+y^{2}+z^{2})$ with respect to $y$ is $2y$ (since $x^2$ and $z^2$ differentiate to $0$).
    

Bringing it together:

$$\frac{\partial f}{\partial y} = \frac{2y}{x^{2}+y^{2}+z^{2}}$$

## 3. Finding $\frac{\partial f}{\partial z}$

Although the image specifically asks for $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ at the top, the function contains a $z$ variable. In case your assignment requires the third partial derivative, it follows the exact same symmetric structure:

$$\frac{\partial f}{\partial z} = \frac{1}{x^{2}+y^{2}+z^{2}} \cdot \frac{\partial}{\partial z}(x^{2}+y^{2}+z^{2})$$

- The derivative of the inner function $(x^{2}+y^{2}+z^{2})$ with respect to $z$ is $2z$.
    

Bringing it together:

$$\frac{\partial f}{\partial z} = \frac{2z}{x^{2}+y^{2}+z^{2}}$$