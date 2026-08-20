# Solving the Partial Derivatives

We want to find the partial derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ for the function:
$$f(x,y) = \frac{x^{2}y + \sin(xy)}{y^{2}+1}$$

---

## 1. Finding $\frac{\partial f}{\partial x}$

When differentiating with respect to $x$, we treat $y$ as a constant. 

Because the denominator $y^{2}+1$ only contains $y$, it acts as a constant multiplier. We can rewrite the function to make this clear:
$$f(x,y) = \frac{1}{y^{2}+1} \cdot \left(x^{2}y + \sin(xy)\right)$$

Now, take the derivative of the inside terms with respect to $x$:
* The derivative of $x^{2}y$ with respect to $x$ is $2xy$.
* For $\sin(xy)$, we use the chain rule. The derivative of $\sin(\text{inside})$ is $\cos(\text{inside})$, multiplied by the derivative of the inside ($xy$) with respect to $x$, which is $y$. So, it becomes $y\cos(xy)$.

Putting it all together:
$$\frac{\partial f}{\partial x} = \frac{2xy + y\cos(xy)}{y^{2}+1}$$

---

## 2. Finding $\frac{\partial f}{\partial y}$

When differentiating with respect to $y$, we treat $x$ as a constant. Since $y$ appears in both the numerator and the denominator, we must use the **Quotient Rule**:
$$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$

Let's define our parts:
* **Numerator ($u$):** $x^{2}y + \sin(xy)$
  * Derivative with respect to $y$ ($u'$): $x^{2} + x\cos(xy)$
* **Denominator ($v$):** $y^{2}+1$
  * Derivative with respect to $y$ ($v'$): $2y$

Now, apply the quotient rule formula:
$$\frac{\partial f}{\partial y} = \frac{\big(x^{2} + x\cos(xy)\big)(y^{2}+1) - \big(x^{2}y + \sin(xy)\big)(2y)}{(y^{2}+1)^{2}}$$

### Expanding the Numerator:
$$\text{Numerator} = \left(x^{2}y^{2} + x^{2} + xy^{2}\cos(xy) + x\cos(xy)\right) - \left(2x^{2}y^{2} + 2y\sin(xy)\right)$$

Combine the like terms ($x^{2}y^{2} - 2x^{2}y^{2} = -x^{2}y^{2}$):
$$\text{Numerator} = x^{2} - x^{2}y^{2} + xy^{2}\cos(xy) + x\cos(xy) - 2y\sin(xy)$$

### Final Answer for $\frac{\partial f}{\partial y}$:
$$\frac{\partial f}{\partial y} = \frac{x^{2} - x^{2}y^{2} + x(y^{2}+1)\cos(xy) - 2y\sin(xy)}{(y^{2}+1)^{2}}$$