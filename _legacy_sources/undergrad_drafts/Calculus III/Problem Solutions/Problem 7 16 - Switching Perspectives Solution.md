## Solution

To evaluate this integral using a change of variables, we need to choose an appropriate transformation, determine the new boundaries, find the Jacobian scaling factor, and evaluate the resulting integral.

### Step 1: Choose a Transformation and Determine the New Limits
Looking at the boundary lines defining region $R$:
* $x - y = 0$ to $x - y = 1$
* $x + y = 0$ to $x + y = 2$

An excellent choice of variables is to let:
* $u = x - y$
* $v = x + y$

Substituting these transformations directly gives us the new constant integration boundaries for region $R'$ in the $uv$-plane:
* $0 \le u \le 1$
* $0 \le v \le 2$

---

### Step 2: Compute the Jacobian
To find the area-scaling factor $|J| = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|$, we can take the reciprocal of the determinant of the partial derivatives of $u$ and $v$ with respect to $x$ and $y$:

$$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$$

$$\frac{\partial(u,v)}{\partial(x,y)} = (1)(1) - (-1)(1) = 1 + 1 = 2$$

Taking the absolute value of the reciprocal yields the Jacobian factor:
$$|J| = \left| \frac{1}{2} \right| = \frac{1}{2}$$

---

### Step 3: Set Up and Evaluate the Integral
The integrand expression is $e^{x-y}$. Because we set $u = x - y$, the integrand simplifies beautifully to $e^u$. 

Assembling the transformed integral with our limits, new integrand, and the Jacobian factor $|J| = \frac{1}{2}$:

$$\iint_{R} e^{x-y} \, dA = \int_{0}^{2} \int_{0}^{1} e^u \cdot \left(\frac{1}{2}\right) \, du \, dv$$

1. **Integrate with respect to $u$:**
   $$\int_{0}^{1} \frac{1}{2}e^u \, du = \left[ \frac{1}{2}e^u \right]_{0}^{1} = \frac{1}{2}(e^1 - e^0) = \frac{1}{2}(e - 1)$$

2. **Integrate with respect to $v$:**
   $$\int_{0}^{2} \frac{1}{2}(e - 1) \, dv = \left[ \frac{1}{2}(e - 1)v \right]_{0}^{2} = \frac{1}{2}(e - 1)(2) - 0 = e - 1$$

### Final Answer
The value of the integral is **$e - 1$**.