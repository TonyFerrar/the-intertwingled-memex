
# Arc Length

> [!info]- Arc Length Essential Formulas
> **Arc Length**
> The arc length of the curve $\vec{r}(t) = f(t)\hat{i} + g(t)\hat{i} + h(t)\hat{i}$ for $a \leq t \leq b$ is
>  
> $$s=\int_a^b||\vec{r}'(t)||\,dt = \int_a^b \sqrt{\left(f'(t)\right)^2 + \left(g'(t)\right)^2 + \left(h'(t)\right)^2}dt$$
> 
> **Arc Length Function**
> The arc length function for the curve $\vec{r}(t)$ gives the arc length at any value of $t > a$.
> 
> $$s(t)=\int_a^t||\vec{r}'(u)||\,du$$
> 
> **Arc Length Parametrization Steps:**
> 1. Solve for arc length function $s(t)$.
> 2. Given your function for $s(t)$, invert it to create $t(s)$.
> 3. Substitute $t(s)$ into $\vec{r}(t)$ to obtain the parametrization.

### Arc Length Definition
In [[MATH 182 - Calculus II for Engineers|Calculus 2]], arc length was found by determining the arc length of the function $y(x)$ using an [[Arc Length - x|integration formula]] based on the Pythagorean Theorem. Here, we expand our thinking to make use of the vector form of a curve - to find the arc length of a curve defined by the position vector $\vec{r}(t)$.

The formula for the arc length of a vector valued curve is:
$$s(t)=\int_a^b||\vec{r}'(t)||\,dt$$

> [!warning]- Important Notes About Arc Length:
> Most arc length integrals will result in a square root function. This will more likely than not require special methods of integrating given a complicated integrand. 
> - Review trig identities and substitutions.

### Arc Length Parametrization
In some questions, they'll ask you to reparameterize the position vector to be written with respect to $s$ (the arc length) rather than $t$. **Arc length parameterization enables you to find a position in space based on distance traveled along the path.**

In order to accomplish this, follow these steps:
1. Solve for arc length function $s(t)$.
2. Given your function for $s(t)$, inverse it to create $t(s)$.
3. Substitute $t(s)$ into $\vec{r}(t)$ to obtain the parametrization.
