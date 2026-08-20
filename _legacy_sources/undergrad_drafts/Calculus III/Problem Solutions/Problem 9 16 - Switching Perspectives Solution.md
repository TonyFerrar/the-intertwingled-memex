## Solution

To set up this integral using a change of variables, we need to choose an appropriate transformation based on the linear boundaries, find our new integration limits, calculate the Jacobian determinant factor, and rewrite the final expression.

### Step 1: Choose a Transformation and Determine the New Limits
The region $R$ is defined by clear linear boundary pairings in the $xy$-plane:
* $x + y = 0$ to $x + y = 1 \implies 0 \le x + y \le 1$
* $x - y = 0$ to $x - y = 2 \implies 0 \le x - y \le 2$

We can choose variables that perfectly match these expressions to create rectangular boundaries:
* Let $u = x + y$
* Let $v = x - y$

Substituting these variables gives our new constant integration limits in the $uv$-plane:
* $0 \le u \le 1$
* $0 \le v \le 2$

---

### Step 2: Compute the Jacobian Factor
To shift coordinates, we find the absolute value of the Jacobian determinant, $|J| = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|$. We calculate the determinant of the partial derivatives of $u$ and $v$ with respect to $x$ and $y$, then use its reciprocal:

$$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$$

$$\frac{\partial(u,v)}{\partial(x,y)} = (1)(-1) - (1)(1) = -1 - 1 = -2$$

Taking the absolute value of the reciprocal yields the required area-scaling factor:
$$|J| = \left| -\frac{1}{2} \right| = \frac{1}{2}$$

---

### Step 3: Transform the Integrand and Set Up the Integral
1. **Transform the integrand:** The given expression inside the integral is $e^{x+y}$. Since we designated $u = x + y$, this simply becomes $e^u$.
2. **Assemble the integral:** Combining the constant $uv$ limits, the simplified integrand, and the scaling factor $dA = |J| \, du \, dv = \frac{1}{2} \, du \, dv$:

$$\iint_{R} e^{x+y} \, dA = \int_{0}^{2} \int_{0}^{1} e^u \cdot \left(\frac{1}{2}\right) \, du \, dv$$

Factoring out the constant multiplier:

$$\iint_{R} e^{x+y} \, dA = \int_{0}^{2} \int_{0}^{1} \frac{1}{2}e^u \, du \, dv$$

### Final Answer
The set-up double integral is:
$$\int_{0}^{2} \int_{0}^{1} \frac{1}{2}e^u \, du \, dv$$