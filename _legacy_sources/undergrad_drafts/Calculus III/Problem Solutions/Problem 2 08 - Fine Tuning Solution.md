# Solving the Partial Derivatives

We want to find the partial derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for the function:

$$f(x,y) = \sqrt{x^{2}+y^{2}}$$

First, we can rewrite the radical as a fractional exponent to make differentiation easier:

$$f(x,y) = (x^{2}+y^{2})^{1/2}$$

## 1. Finding $\frac{\partial f}{\partial x}$

When differentiating with respect to $x$, we treat $y$ as a constant. We apply the **Chain Rule**:

$$\frac{\partial f}{\partial x} = \frac{1}{2}(x^{2}+y^{2})^{-1/2} \cdot \frac{\partial}{\partial x}(x^{2}+y^{2})$$

- The derivative of the inner function $(x^{2}+y^{2})$ with respect to $x$ is $2x$.
    

Substituting this back into the equation:

$$\frac{\partial f}{\partial x} = \frac{1}{2}(x^{2}+y^{2})^{-1/2} \cdot 2x$$

Simplify by canceling the $\frac{1}{2}$ and the $2$:

$$\frac{\partial f}{\partial x} = x(x^{2}+y^{2})^{-1/2}$$

Rewriting it back in radical form:

$$\frac{\partial f}{\partial x} = \frac{x}{\sqrt{x^{2}+y^{2}}}$$

## 2. Finding $\frac{\partial f}{\partial y}$

When differentiating with respect to $y$, we treat $x$ as a constant. Because the function is symmetric with respect to $x$ and $y$, the process follows the exact same steps:

$$\frac{\partial f}{\partial y} = \frac{1}{2}(x^{2}+y^{2})^{-1/2} \cdot \frac{\partial}{\partial y}(x^{2}+y^{2})$$

- The derivative of the inner function $(x^{2}+y^{2})$ with respect to $y$ is $2y$.
    

Substituting this back into the equation:

$$\frac{\partial f}{\partial y} = \frac{1}{2}(x^{2}+y^{2})^{-1/2} \cdot 2y$$

Simplify by canceling the $\frac{1}{2}$ and the $2$:

$$\frac{\partial f}{\partial y} = y(x^{2}+y^{2})^{-1/2}$$

Rewriting it back in radical form:

$$\frac{\partial f}{\partial y} = \frac{y}{\sqrt{x^{2}+y^{2}}}$$