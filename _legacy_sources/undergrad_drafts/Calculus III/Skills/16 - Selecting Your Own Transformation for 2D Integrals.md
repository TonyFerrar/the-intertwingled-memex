# Calc 3: Skill 3 — Selecting Your Own Transformation (General 2D)

## Concept Notes: Choosing an Optimal 2D Substitution

In many multivariable calculus problems, a coordinate transformation is not handed to you. Instead, you are given a region of integration $R$ in the $xy$-plane that is skewed, tilted, or algebraically complex, and you must independently select an optimal transformation.

The main goal of Skill 3 is to look at the equations defining the boundaries of $R$ and discover a repeating pattern or algebraic grouping that can be isolated. By defining these groupings as your new variables $u$ and $v$, you intentionally collapse a skewed region into a simple, perfectly rectangular region in the $uv$-plane.



### Strategy for Selecting $u$ and $v$
1. **Group the Boundary Equations:** Look at the four given boundary curves and rewrite them so that the variable terms are on one side and constants are on the other. 
2. **Identify Pairs:** Notice if pairs of equations share the exact same algebraic combination.
   * *Example:* If boundaries are $y - 2x = 1$, $y - 2x = 5$, $y + 3x = 0$, and $y + 3x = 4$, you should choose:
     $$u = y - 2x \quad \implies \quad 1 \le u \le 5$$
     $$v = y + 3x \quad \implies \quad 0 \le v \le 4$$
3. **Simplify the Integrand:** Sometimes, the region is easy but the integrand itself (like $e^{(x-y)/(x+y)}$) signals what $u$ and $v$ should be. Prioritize simplifying whichever component creates the greatest mathematical bottleneck.

As with previous skills, once $u$ and $v$ are defined, always compute the area-scaling factor using the absolute value of the Jacobian determinant:
$$|J| = \left| \frac{\partial(x,y)}{\partial(u,v)} \right| = \frac{1}{\left| \frac{\partial(u,v)}{\partial(x,y)} \right|}$$

---

## Standard Sample Problems

### Sample Problem 1
**Evaluate:** $$\iint_R dx \, dy$$
where $R$ is the region bounded by the lines $y = 2x + 1$, $y = 2x + 3$, $y = -x + 2$, and $y = -x + 5$.

#### Solution:
1. **Select the Transformation & Find the Limits:**
   Rearrange the boundary equations to isolate the constants:
   * $y - 2x = 1$ and $y - 2x = 3 \implies$ Let $u = y - 2x$, so $1 \le u \le 3$.
   * $y + x = 2$ and $y + x = 5 \implies$ Let $v = y + x$, so $2 \le v \le 5$.

2. **Compute the Jacobian:**
   Using our chosen definitions for $u$ and $v$:
   $$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix} = \det \begin{bmatrix} -2 & 1 \\ 1 & 1 \end{bmatrix} = (-2)(1) - (1)(1) = -3$$
   
   Taking the absolute value of the reciprocal yields:
   $$|J| = \left|-\frac{1}{3}\right| = \frac{1}{3}$$

3. **Set Up and Evaluate the Integral:**
   The integrand is just $1$ (we are finding the area of the region $R$):
   $$\iint_R 1 \, dA = \int_{2}^{5} \int_{1}^{3} \frac{1}{3} \, du \, dv$$
   $$\int_{1}^{3} \frac{1}{3} \, du = \frac{1}{3}(3 - 1) = \frac{2}{3}$$
   $$\int_{2}^{5} \frac{2}{3} \, dv = \frac{2}{3}(5 - 2) = \frac{2}{3}(3) = 2$$

**Final Answer:** $2$

---

### Sample Problem 2
**Evaluate:** $$\iint_R \frac{x+y}{x-y} \, dA$$
where $R$ is the trapezoidal region bounded by $x+y=1$, $x+y=4$, $x-y=2$, and $x-y=5$.

#### Solution:
1. **Select the Transformation & Find the Limits:**
   The boundaries and the integrand both explicitly suggest the substitutions:
   * Let $u = x + y \implies 1 \le u \le 4$
   * Let $v = x - y \implies 2 \le v \le 5$

2. **Compute the Jacobian:**
   $$\frac{\partial(u,v)}{\partial(x,y)} = \det \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} = (1)(-1) - (1)(1) = -2$$
   $$|J| = \left|-\frac{1}{2}\right| = \frac{1}{2}$$

3. **Set Up and Evaluate the Integral:**
   The integrand transforms directly to $\frac{u}{v}$.
   $$\iint_R \frac{x+y}{x-y} \, dA = \int_{2}^{5} \int_{1}^{4} \frac{u}{v} \cdot \left(\frac{1}{2}\right) \, du \, dv = \frac{1}{2} \left( \int_{1}^{4} u \, du \right) \cdot \left( \int_{2}^{5} \frac{1}{v} \, dv \right)$$
   * $\int_{1}^{4} u \, du = \left[ \frac{1}{2}u^2 \right]_{1}^{4} = \frac{1}{2}(16 - 1) = \frac{15}{2}$
   * $\int_{2}^{5} \frac{1}{v} \, dv = \Big[ \ln|v| \Big]_{2}^{5} = \ln(5) - \ln(2) = \ln\left(\frac{5}{2}\right)$
   
   $$\text{Total Value} = \frac{1}{2} \cdot \frac{15}{2} \cdot \ln\left(\frac{5}{2}\right) = \frac{15}{4}\ln\left(\frac{5}{2}\right)$$

**Final Answer:** $\frac{15}{4}\ln\left(\frac{5}{2}\right)$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Fluid Dynamics — Flow Through a Non-Uniform Pipeline Channel]]
[[Fluid Dynamics — Flow Through a Non-Uniform Pipeline Channel Solution]]

---

### Engineering Problem 2: [[Aerospace Structure — Thermal Distribution on a Swept Control Fin]]
[[Aerospace Structure — Thermal Distribution on a Swept Control Fin Solution]]
