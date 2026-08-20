## Solution

To evaluate this integral using the change of variables method, we follow the same three steps: determining the new boundaries, finding the Jacobian determinant, and setting up and evaluating the new integral.

### Step 1: Determine the New Limits of Integration
The given region $R$ is bounded by the following lines in the $xy$-plane:
* $x - y = 0$
* $x - y = 2$
* $x + y = 1$
* $x + y = 3$

Using the hinted transformation variables $u = x - y$ and $v = x + y$, these boundaries map into constant limits for our new region $R'$ in the $uv$-plane:
* $u = 0$ to $u = 2 \implies 0 \le u \le 2$
* $v = 1$ to $v = 3 \implies 1 \le v \le 3$

---

### Step 2: Compute the Jacobian
We find the absolute value of the Jacobian determinant, $|J| = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|$, by using the reciprocal of the partial derivatives of $u$ and $v$ with respect to $x$ and $y$:

$$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$$

$$\frac{\partial(u,v)}{\partial(x,y)} = (1)(1) - (-1)(1) = 2$$

Taking the reciprocal gives us the required area-scaling factor:
$$|J| = \left| \frac{1}{2} \right| = \frac{1}{2}$$

---

### Step 3: Set Up and Evaluate the Integral
The integrand expression is $(x - y)$, which is exactly equal to $u$. Replacing the integrand, adding the Jacobian factor, and applying our new limits gives:

$$\iint_{R} (x-y) \, dA = \int_{1}^{3} \int_{0}^{2} u \cdot \left(\frac{1}{2}\right) \, du \, dv$$

1. **Integrate with respect to $u$:**
   $$\int_{0}^{2} \frac{1}{2}u \, du = \left[ \frac{1}{4}u^2 \right]_{0}^{2} = \frac{1}{4}(2)^2 - 0 = 1$$

2. **Integrate with respect to $v$:**
   $$\int_{1}^{3} 1 \, dv = \left[ v \right]_{1}^{3} = 3 - 1 = 2$$

### Final Answer
The value of the integral is **$2$**.