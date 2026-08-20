# Calc 3: Skill 1 — Given 2D Transformations

## Concept Notes: Understanding 2D Change of Variables

In Multivariable Calculus, we frequently encounter double integrals where the region of integration $R$ in the $xy$-plane is highly complex, tilted, or non-rectangular (such as a skewed parallelogram or an ellipse). Evaluating integrals over these regions using standard Cartesian coordinates ($dx\,dy$) forces us to create highly complicated, piecewise integration limits.

The **Change of Variables** technique allows us to map a complicated region $R$ in the $xy$-plane onto a beautifully simple, rectangular region $R'$ in a new coordinate system defined by variables $u$ and $v$.



### The Fundamental Formula

$$\iint_{R} f(x,y) \, dx \, dy = \iint_{R'} f(x(u,v), y(u,v)) \, |J| \, du \, dv$$

Where:
* **$R'$** is the new, simplified region bounded by constant limits of $u$ and $v$.
* **$f(x(u,v), y(u,v))$** is the original integrand rewritten completely in terms of $u$ and $v$.
* **$|J|$** is the absolute value of the **Jacobian determinant**, which acts as a local area-scaling factor ensuring that the differential area $dA$ scales correctly when moving between coordinate systems.

### Calculating the Jacobian Matrix & Determinant

The 2D Jacobian matrix represents the matrix of all first-order partial derivatives of the transformation:

$$J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{bmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{bmatrix}$$

The determinant of this matrix gives us the scaling factor. 

#### The Inverse Jacobian Shortcut
When a transformation is given directly as $u = g(x,y)$ and $v = h(x,y)$, solving explicitly for $x$ and $y$ can involve tedious algebra. Instead, we can utilize the **Inverse Jacobian Property**:

$$\frac{\partial(x,y)}{\partial(u,v)} = \frac{1}{\frac{\partial(u,v)}{\partial(x,y)}} = \frac{1}{\det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix}}$$

Always remember to take the **absolute value** of the final determinant ($|J|$) before substituting it into your integral.

---

## Standard Sample Problems

### Sample Problem 1
**Evaluate:** $$\iint_R (2x - y) \, dA$$
where $R$ is the region bounded by the lines $2x - y = 1$, $2x - y = 4$, $x + 3y = 0$, and $x + 3y = 2$.
**Given Transformation:** $u = 2x - y$ and $v = x + 3y$.

#### Solution:
1. **Determine the New Limits:**
   Looking directly at the boundary equations and substituting our transformation variables:
   * $2x - y = 1 \implies u = 1$
   * $2x - y = 4 \implies u = 4$
   * $x + 3y = 0 \implies v = 0$
   * $x + 3y = 2 \implies v = 2$
   
   Our new region $R'$ has the constant rectangular boundaries: $1 \le u \le 4$ and $0 \le v \le 2$.

2. **Compute the Jacobian:**
   Using the inverse Jacobian shortcut:
   $$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} 2 & -1 \\ 1 & 3 \end{bmatrix} = (2)(3) - (-1)(1) = 6 + 1 = 7$$
   
   Taking the reciprocal and absolute value yields our area-scaling factor:
   $$|J| = \left|\frac{1}{7}\right| = \frac{1}{7}$$

3. **Set Up and Evaluate the Integral:**
   The integrand $(2x - y)$ is exactly equal to $u$. Substituting everything into the formula:
   $$\iint_R (2x - y) \, dA = \int_{0}^{2} \int_{1}^{4} u \cdot \left(\frac{1}{7}\right) \, du \, dv$$
   $$\int_{1}^{4} \frac{1}{7}u \, du = \left[ \frac{1}{14}u^2 \right]_{1}^{4} = \frac{1}{14}(16 - 1) = \frac{15}{14}$$
   $$\int_{0}^{2} \frac{15}{14} \, dv = \left[ \frac{15}{14}v \right]_{0}^{2} = \frac{15}{14}(2) = \frac{15}{7}$$

**Final Answer:** $\frac{15}{7}$

---

### Sample Problem 2
**Evaluate:** $$\iint_R (x + 2y)^2 \, dA$$
where $R$ is bounded by $x + 2y = -1$, $x + 2y = 3$, $2x - y = 1$, and $2x - y = 5$.
**Given Transformation:** $u = x + 2y$ and $v = 2x - y$.

#### Solution:
1. **Determine the New Limits:**
   * $x + 2y = -1 \implies u = -1$
   * $x + 2y = 3 \implies u = 3$
   * $2x - y = 1 \implies v = 1$
   * $2x - y = 5 \implies v = 5$
   
   The transformed limits are $-1 \le u \le 3$ and $1 \le v \le 5$.

2. **Compute the Jacobian:**
   $$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} 1 & 2 \\ 2 & -1 \end{bmatrix} = (1)(-1) - (2)(2) = -1 - 4 = -5$$
   $$|J| = \left|-\frac{1}{5}\right| = \frac{1}{5}$$

3. **Set Up and Evaluate the Integral:**
   The integrand becomes $u^2$.
   $$\iint_R (x+2y)^2 \, dA = \int_{1}^{5} \int_{-1}^{3} u^2 \cdot \left(\frac{1}{5}\right) \, du \, dv$$
   Because the boundaries are constants and variables are independent, we can separate the single integrals:
   $$\int_{1}^{5} \frac{1}{5} \, dv = \frac{4}{5}$$
   $$\int_{-1}^{3} u^2 \, du = \left[ \frac{1}{3}u^3 \right]_{-1}^{3} = \frac{1}{3}(27 - (-1)) = \frac{28}{3}$$
   $$\text{Total Value} = \frac{4}{5} \cdot \frac{28}{3} = \frac{112}{15}$$

**Final Answer:** $\frac{112}{15}$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerodynamics & Body-Fitted Mesh Elements]]
[[Aerodynamics & Body-Fitted Mesh Elements Solution]]

---

### Engineering Problem 2: [[Robotics & Link Mass Distribution]]
[[Robotics & Link Mass Distribution Solution]]
