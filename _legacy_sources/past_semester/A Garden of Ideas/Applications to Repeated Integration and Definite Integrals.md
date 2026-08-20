# Applications to Repeated Integration and Definite Integrals

In more complex problems, a single application of the formula may not be enough. **Repeated Integration by Parts** is necessary when the resulting integral ($\int v \, du$) still requires the technique to be solved.

For example, in an integral like
$$\int x^2 e^x \, dx$$
the first application reduces the $x^2$ to $2x$, and a **second application** is then required to reduce the power of $x$ until a basic integral is reached.

> [!warning] Stay Organized!
> It is vital to stay organized during these problems to correctly distribute signs and constants across the multiple steps.

Finally, this technique can be applied to **definite integrals** by combining it with the **Fundamental Theorem of Calculus**. The formula is adjusted to account for the boundaries:

$$\int_a^b u \, dv = \left(uv \right)_a^b - \int_a^b v \, du$$

When using this version, remember that $u$ and $v$ are functions of $x$, and the limits of integration $a$ and $b$ represent specific $x$-values that must be applied to both the $uv$ term and the resulting integral $\int v \, du$.
