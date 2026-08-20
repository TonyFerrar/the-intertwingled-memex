
# Describe and Bound General Regions

> [!info] Polar and Rectangular Coordinates
> 
> $$x = r\cos\theta \quad\quad y = r\sin\theta$$
> $$r = \sqrt{x^{2} + y^{2}} \quad\quad \theta = \tan^{-1}\!\left(\frac{y}{x}\right)$$
> $$\iint_R f(x,y)\,dx\,dy\;\;=\;\;\iint_R f(r\cos\theta,\;r\sin\theta)\,r\,dr\,d\theta$$
> **Always include the Jacobian $r$.**

## Converting from Rectangular to Polar Coordinates
Converting from rectangular to polar coordinates is a process of reframing a problem from a "grid" mindset to a "target" mindset. Instead of navigating with horizontal and vertical shifts ($x$ and $y$), you describe points based on their distance from the origin ($r$) and their angle from the positive x-axis ($\theta$).

To perform this conversion in a double integral, you substitute $x = r \cos \theta$ and $y = r \sin \theta$ into your function. This aligns the algebra with the circular geometry of the domain, often turning complex square roots and squared terms into simple radial values since $x^2+y^2=r^2$.

## Setting Up a Double Integral
To set up the double integral, you must transform both the integrand and the differential area element. The most critical step is replacing $dx \, dy$ with $r \, dr \, d\theta$.

### The Jacobian
The extra factor of $r$, known as the **Jacobian**, accounts for the fact that a "polar rectangle" grows wider as you move further from the center. When setting your limits of integration, you define the region $R$ by the inner and outer radii ($r$) and the starting and ending angles ($\theta$). This transforms a curved, difficult region in the $xy$-plane into a rectangular region in the $r\theta$-plane, making the integration significantly more straightforward.