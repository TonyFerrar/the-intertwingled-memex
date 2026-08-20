# Solving and Interpreting Partial Derivatives 

We want to find the partial derivatives, evaluate them at the point $(0, 1)$, and interpret their geometric meaning for the function:
$$f(x,y) = \arctan(xy)$$

We will use the derivative rule for arctangent: $\frac{d}{du}(\arctan u) = \frac{1}{1+u^{2}} \cdot \frac{du}{d\text{variable}}$.

---

## 1. Finding the General Partial Derivatives

### Differentiating with respect to $x$ ($\frac{\partial f}{\partial x}$):
When finding $\frac{\partial f}{\partial x}$, we treat $y$ as a constant. Applying the chain rule:
$$\frac{\partial f}{\partial x} = \frac{1}{1+(xy)^{2}} \cdot \frac{\partial}{\partial x}(xy)$$

* The derivative of the inner function $xy$ with respect to $x$ is $y$.

$$\frac{\partial f}{\partial x} = \frac{y}{1+x^{2}y^{2}}$$

### Differentiating with respect to $y$ ($\frac{\partial f}{\partial y}$):
When finding $\frac{\partial f}{\partial y}$, we treat $x$ as a constant. Applying the chain rule:
$$\frac{\partial f}{\partial y} = \frac{1}{1+(xy)^{2}} \cdot \frac{\partial}{\partial y}(xy)$$

* The derivative of the inner function $xy$ with respect to $y$ is $x$.

$$\frac{\partial f}{\partial y} = \frac{x}{1+x^{2}y^{2}}$$

---

## 2. Evaluating at the Specified Point $(0, 1)$

Now, we substitute $x = 0$ and $y = 1$ into our partial derivative equations:

### Evaluating $\frac{\partial f}{\partial x}(0, 1)$:
$$\left.\left(\frac{\partial f}{\partial x}\right)\right|_{(0,1)} = \frac{1}{1+(0)^{2}(1)^{2}} = \frac{1}{1} = 1$$

### Evaluating $\frac{\partial f}{\partial y}(0, 1)$:
$$\left.\left(\frac{\partial f}{\partial y}\right)\right|_{(0,1)} = \frac{0}{1+(0)^{2}(1)^{2}} = \frac{0}{1} = 0$$

---

## 3. Geometric Interpretation

* **Slope in the $x$-direction:** The value $\frac{\partial f}{\partial x}(0,1) = 1$ means that if you stand at the point $(0,1)$ on the surface and walk parallel to the $x$-axis in the positive direction (keeping $y = 1$ fixed), the surface has an upward slope of $1$. 
* **Slope in the $y$-direction:** The value $\frac{\partial f}{\partial y}(0,1) = 0$ means that if you stand at the same point $(0,1)$ and walk parallel to the $y$-axis in the positive direction (keeping $x = 0$ fixed), the surface is instantaneously flat with a slope of $0$.