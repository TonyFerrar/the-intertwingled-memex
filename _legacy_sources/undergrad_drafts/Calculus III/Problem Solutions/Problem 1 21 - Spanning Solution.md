## 1. Identify the Formula and Parameterization

The formula for the surface area of a surface $S$ parametrized by $\vec{r}(u,v)$ over a region $D$ is:

$$\text{Area}(S) = \iint_{S} dS = \iint_{D} \|\vec{r}_u \times \vec{r}_v\| \, du \, dv$$

When a surface is given explicitly as $z = f(x,y)$, we can choose $x$ and $y$ as our parameters ($u=x, v=y$). This gives the standard surface area element shortcut:

$$dS = \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} \, dx \, dy$$

## 2. Compute the Partial Derivatives and $dS$

Given the equation of the paraboloid:

$$z = 4 - x^2 - y^2$$

Take the partial derivatives with respect to $x$ and $y$:

- $\frac{\partial z}{\partial x} = -2x$
    
- $\frac{\partial z}{\partial y} = -2y$
    

Now, substitute these into the $dS$ formula:

$$dS = \sqrt{1 + (-2x)^2 + (-2y)^2} \, dx \, dy$$

$$dS = \sqrt{1 + 4x^2 + 4y^2} \, dx \, dy$$

## 3. Determine the Region of Integration $D$

The problem specifies that $z \ge 0$. Setting $z \ge 0$ in our surface equation gives:

$$4 - x^2 - y^2 \ge 0 \implies x^2 + y^2 \le 4$$

This inequality defines a circle of radius **$R = 2$** centered at the origin in the $xy$-plane. This circular boundary means switching to **polar coordinates** will make the integration much easier.

In polar coordinates:

- $x^2 + y^2 = r^2$
    
- $dx \, dy = r \, dr \, d\theta$
    

The limits of integration for a full disk of radius 2 are:

- $0 \le r \le 2$
    
- $0 \le \theta \le 2\pi$
    

## 4. Set Up and Evaluate the Integral

Substituting the polar conversions into our area integral yields:

$$\text{Area}(S) = \int_{0}^{2\pi} \int_{0}^{2} \sqrt{1 + 4r^2} \cdot r \, dr \, d\theta$$

### Step A: Evaluate the Inner Integral (with respect to $r$)

$$\int_{0}^{2} r\sqrt{1 + 4r^2} \, dr$$

We can use $u$-substitution:

- Let $u = 1 + 4r^2 \implies du = 8r \, dr \implies r \, dr = \frac{1}{8} \, du$
    
- **Change the limits:** * When $r = 0$, $u = 1 + 4(0)^2 = 1$
    
    - When $r = 2$, $u = 1 + 4(2)^2 = 17$
        

Rewrite and solve the integral:

$$\frac{1}{8} \int_{1}^{17} u^{1/2} \, du = \frac{1}{8} \left[ \frac{2}{3}u^{3/2} \right]_{1}^{17}$$

$$= \frac{1}{12} \left( 17^{3/2} - 1^{3/2} \right) = \frac{1}{12} \left( 17\sqrt{17} - 1 \right)$$

### Step B: Evaluate the Outer Integral (with respect to $\theta$)

$$\text{Area}(S) = \int_{0}^{2\pi} \frac{1}{12} \left( 17\sqrt{17} - 1 \right) d\theta$$

Since the integrand is entirely constant with respect to $\theta$, we simply multiply by the length of the interval ($2\pi - 0 = 2\pi$):

$$\text{Area}(S) = \frac{2\pi}{12} \left( 17\sqrt{17} - 1 \right)$$

## Final Answer

$$\text{Area}(S) = \frac{\pi}{6} \left( 17\sqrt{17} - 1 \right)$$