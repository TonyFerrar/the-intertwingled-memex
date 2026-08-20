## Solution

To set up this integral using the change of variables method, we follow three steps: determining the new boundaries, finding the Jacobian determinant, and substituting the variables into the integrand.

### Step 1: Determine the New Limits of Integration
The given region $R$ is bounded by the following lines in the $xy$-plane:
* $x + y = 0$
* $x + y = 1$
* $x - y = -1$
* $x - y = 1$

Using the hinted transformation variables $u = x + y$ and $v = x - y$, these lines map directly into constant boundaries for our new region $R'$ in the $uv$-plane:
* $u = 0$ to $u = 1 \implies 0 \le u \le 1$
* $v = -1$ to $v = 1 \implies -1 \le v \le 1$

---

### Step 2: Compute the Jacobian
We find the absolute value of the Jacobian determinant, $|J| = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|$, by taking the reciprocal of the determinant of the partial derivatives of $u$ and $v$ with respect to $x$ and $y$:

$$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$$

$$\frac{\partial(u,v)}{\partial(x,y)} = (1)(-1) - (1)(1) = -1 - 1 = -2$$

Taking the absolute value of its reciprocal gives the required area-scaling factor:
$$|J| = \left| -\frac{1}{2} \right| = \frac{1}{2}$$

---

### Step 3: Transform the Integrand and Set Up the Integral
To rewrite the integrand $xy$ in terms of $u$ and $v$, we solve the system of transformation equations for $x$ and $y$:
1. $u + v = (x + y) + (x - y) = 2x \implies x = \frac{u + v}{2}$
2. $u - v = (x + y) - (x - y) = 2y \implies y = \frac{u - v}{2}$

Substituting these expressions into the integrand gives:
$$xy = \left(\frac{u + v}{2}\right)\left(\frac{u - v}{2}\right) = \frac{u^2 - v^2}{4}$$

Now, assembling the final integral with the transformed boundaries, transformed integrand, and the Jacobian factor $|J| = \frac{1}{2}$:

$$\iint_{R} xy \, dA = \int_{-1}^{1} \int_{0}^{1} \left(\frac{u^2 - v^2}{4}\right) \cdot \frac{1}{2} \, du \, dv$$

Combining the constant factors:

$$\iint_{R} xy \, dA = \int_{-1}^{1} \int_{0}^{1} \frac{1}{8}(u^2 - v^2) \, du \, dv$$

### Final Answer
The set-up double integral is:
$$\int_{-1}^{1} \int_{0}^{1} \frac{1}{8}(u^2 - v^2) \, du \, dv$$