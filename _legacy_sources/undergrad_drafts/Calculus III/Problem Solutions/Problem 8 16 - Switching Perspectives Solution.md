## Solution

To evaluate this integral using a change of variables, we must select an appropriate transformation based on the boundary equations, define our new limits, calculate the Jacobian determinant, and execute the final integration.

### Step 1: Choose a Transformation and Determine the New Limits
The problem defines the region $R$ through bounds on linear combinations of $x$ and $y$:
* $x - y = 0$ to $x - y = 1 \implies 0 \le x - y \le 1$
* $x + y = 1$ to $x + y = 3 \implies 1 \le x + y \le 3$

We can choose our new variables to directly match these boundary expressions:
* Let $u = x - y$
* Let $v = x + y$

Substituting these variables gives us straightforward rectangular integration limits for region $R'$ in the $uv$-plane:
* $0 \le u \le 1$
* $1 \le v \le 3$

---

### Step 2: Compute the Jacobian
To find the area-scaling factor $|J| = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|$, we find the determinant of the partial derivatives of $u$ and $v$ with respect to $x$ and $y$, then take its reciprocal:

$$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$$

$$\frac{\partial(u,v)}{\partial(x,y)} = (1)(1) - (-1)(1) = 1 + 1 = 2$$

Taking the absolute value of the reciprocal gives us our Jacobian area factor:
$$|J| = \left| \frac{1}{2} \right| = \frac{1}{2}$$

---

### Step 3: Set Up and Evaluate the Integral
The original integrand expression is $(x - y)$. With our choice of transformation, this simplifies to $u$. 

Combining the new limits, the transformed integrand, and the area-scaling factor $|J| = \frac{1}{2}$:

$$\iint_{R} (x-y) \, dA = \int_{1}^{3} \int_{0}^{1} u \cdot \left(\frac{1}{2}\right) \, du \, dv$$

1. **Integrate with respect to $u$:**
   $$\int_{0}^{1} \frac{1}{2}u \, du = \left[ \frac{1}{4}u^2 \right]_{0}^{1} = \frac{1}{4}(1)^2 - 0 = \frac{1}{4}$$

2. **Integrate with respect to $v$:**
   $$\int_{1}^{3} \frac{1}{4} \, dv = \left[ \frac{1}{4}v \right]_{1}^{3} = \frac{1}{4}(3) - \frac{1}{4}(1) = \frac{2}{4} = \frac{1}{2}$$

### Final Answer
The value of the integral is **$\frac{1}{2}$**.