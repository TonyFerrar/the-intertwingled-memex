## Solution

To evaluate the given integral using the change of variables method, we follow three main steps: determining the new boundaries, finding the Jacobian determinant, and setting up and evaluating the new integral.

### Step 1: Determine the New Limits of Integration
The given region $R$ is bounded by the following lines in the $xy$-plane:
* $x - y = 0$
* $x - y = 1$
* $x + y = 0$
* $x + y = 2$

Using the given transformation variables $u = x - y$ and $v = x + y$, these boundaries transform directly into constant limits for our new region $R'$ in the $uv$-plane:
* $u = 0$ to $u = 1 \implies 0 \le u \le 1$
* $v = 0$ to $v = 2 \implies 0 \le v \le 2$

---

### Step 2: Compute the Jacobian
To change variables, we need the absolute value of the Jacobian determinant, $|J| = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|$. 

An efficient way to find this is to first find the Jacobian of $u$ and $v$ with respect to $x$ and $y$, and then take its reciprocal:

$$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}$$

$$\frac{\partial(u,v)}{\partial(x,y)} = (1)(1) - (-1)(1) = 1 + 1 = 2$$

Taking the reciprocal gives us the required area-scaling factor:
$$|J| = \left| \frac{1}{2} \right| = \frac{1}{2}$$

---

### Step 3: Set Up and Evaluate the Integral
The integrand expression is $(x + y)$, which is exactly equal to $v$. Replacing the integrand, adding the Jacobian factor, and applying our new limits gives:

$$\iint_{R} (x+y) \, dA = \int_{0}^{2} \int_{0}^{1} v \cdot \left(\frac{1}{2}\right) \, du \, dv$$

1. **Integrate with respect to $u$:**
   $$\int_{0}^{1} \frac{1}{2}v \, du = \left[ \frac{1}{2}vu \right]_{0}^{1} = \frac{1}{2}v$$

2. **Integrate with respect to $v$:**
   $$\int_{0}^{2} \frac{1}{2}v \, dv = \left[ \frac{1}{4}v^2 \right]_{0}^{2} = \frac{1}{4}(2)^2 - 0 = 1$$

### Final Answer
The value of the integral is **$1$**.