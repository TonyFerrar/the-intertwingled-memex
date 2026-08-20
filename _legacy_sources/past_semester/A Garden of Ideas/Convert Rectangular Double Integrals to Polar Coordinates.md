
# Convert Rectangular Double Integrals to Polar Coordinates

> [!info] Converting Rectangular Double Integrals to Polar Coordinates
> 
> To convert between rectangular and polar coordinates:
> $$x = r\cos\theta \quad\quad y = r\sin\theta$$
> 
> $$r = \sqrt{x^{2} + y^{2}} \quad\quad \theta = \tan^{-1}\!\left(\frac{y}{x}\right)$$

To set up the double integral, you must transform both the **integrand** ($f(x, y) \rightarrow f(r\cos\theta, r\sin\theta)$) and the **differential area element** ($dxdy \rightarrow rdrd\theta$. The most critical step is replacing $dxdy$ with $rdrd\theta$. The extra factor of $r$, known as the **Jacobian**, accounts for the fact that a "polar rectangle" grows wider as you move further from the center. When setting your limits of integration, you define the region $R$ by the inner and outer radii ($r$) and the starting and ending angles ($\theta$). This transforms a curved, difficult region in the $xy$-plane into a rectangular region in the $r\theta$-plane, making the integration significantly more straightforward.

