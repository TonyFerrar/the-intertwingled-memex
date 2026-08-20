## Part (A): Rectangular Coordinates

### 1. Setup the Integral

The equation of the circle is $x^2 + y^2 = a^2$. Solving for $y$ gives the top and bottom boundaries of the region:

$$y = \pm\sqrt{a^2 - x^2}$$

The variable $x$ ranges across the entire width of the circle, from $-a$ to $a$.

Setting up the double integral for the area $A$:

$$A = \int_{-a}^{a} \int_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} dy \, dx$$

### 2. Evaluate the Integral

First, evaluate the inner integral with respect to $y$:

$$\int_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} dy = [y]_{-\sqrt{a^2-x^2}}^{\sqrt{a^2-x^2}} = 2\sqrt{a^2 - x^2}$$

Now, substitute this into the outer integral:

$$A = \int_{-a}^{a} 2\sqrt{a^2 - x^2} \, dx$$

Since the integrand is even, we can simplify by changing the lower bound to $0$ and doubling the result:

$$A = 4 \int_{0}^{a} \sqrt{a^2 - x^2} \, dx$$

To evaluate this, use the trigonometric substitution $x = a\sin\theta$, which means $dx = a\cos\theta \, d\theta$.

- When $x = 0$, $\theta = 0$.
    
- When $x = a$, $\theta = \frac{\pi}{2}$.
    

Substituting these into the integral:

$$A = 4 \int_{0}^{\frac{\pi}{2}} \sqrt{a^2 - a^2\sin^2\theta} \cdot a\cos\theta \, d\theta$$

$$A = 4 \int_{0}^{\frac{\pi}{2}} a\cos\theta \cdot a\cos\theta \, d\theta = 4a^2 \int_{0}^{\frac{\pi}{2}} \cos^2\theta \, d\theta$$

Using the half-angle identity $\cos^2\theta = \frac{1 + \cos(2\theta)}{2}$:

$$A = 4a^2 \int_{0}^{\frac{\pi}{2}} \frac{1 + \cos(2\theta)}{2} \, d\theta = 2a^2 \left[ \theta + \frac{\sin(2\theta)}{2} \right]_{0}^{\frac{\pi}{2}}$$

$$A = 2a^2 \left( \left(\frac{\pi}{2} + 0\right) - (0 + 0) \right) = \pi a^2$$

## Part (B): Polar Coordinates

### 1. Setup the Integral

In polar coordinates, the boundary of the circle $x^2 + y^2 = a^2$ becomes $r^2 = a^2$, or simply:

$$r = a$$

The entire circular region spans from the origin out to radius $a$, and wraps all the way around the origin:

- Bounds for $r$: $0 \le r \le a$
    
- Bounds for $\theta$: $0 \le \theta \le 2\pi$
    

Remembering to include the Jacobian determinant ($dA = r \, dr \, d\theta$), the double integral for area is:

$$A = \int_{0}^{2\pi} \int_{0}^{a} r \, dr \, d\theta$$

### 2. Evaluate the Integral

First, evaluate the inner integral with respect to $r$:

$$\int_{0}^{a} r \, dr = \left[ \frac{1}{2}r^2 \right]_{0}^{a} = \frac{1}{2}a^2$$

Now, evaluate the outer integral with respect to $\theta$:

$$A = \int_{0}^{2\pi} \frac{1}{2}a^2 \, d\theta = \left[ \frac{1}{2}a^2\theta \right]_{0}^{2\pi} = \frac{1}{2}a^2(2\pi) = \pi a^2$$

## Comparison and Commentary

Both coordinate systems yield the familiar geometric formula for the area of a circle: **$A = \pi a^2$**.

However, **polar coordinates are significantly simpler** for this problem for two primary reasons:

1. **Constant Bounds:** In polar coordinates, the boundaries of the circle are constants ($r \in [0, a]$ and $\theta \in [0, 2\pi]$). In rectangular coordinates, the bounds are complicated algebraic functions ($\pm\sqrt{a^2-x^2}$), which makes algebra and visualization trickier.
    
2. **Integration Effort:** Rectangular coordinates require a non-trivial trigonometric substitution ($x = a\sin\theta$) and half-angle identities to complete. Polar coordinates naturally fit the circular symmetry of the domain, reducing the integration process to a basic power rule calculation.