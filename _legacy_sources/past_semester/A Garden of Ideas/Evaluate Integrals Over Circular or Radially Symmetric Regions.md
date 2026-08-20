
# Evaluate Integrals Over Circular or Radially Symmetric Regions

> [!info] Double Integrals in Polar Coordinates
> 
> Compute
> $$\int \int_R f (r,\theta)\; r \,dr\, d\theta$$
> for disks, sectors, and annuli, interpreting bounds geometrically.  
> 
> To convert between rectangular and polar coordinates:
> $$x = r\cos\theta \quad\quad y = r\sin\theta$$
> $$r = \sqrt{x^{2} + y^{2}} \quad\quad \theta = \tan^{-1}\!\left(\frac{y}{x}\right)$$

Evaluating double integrals in polar coordinates is often the "path of least resistance" when dealing with circular regions or functions involving $x^2 + y^2$. To make the switch, you replace $x$ with $r \cos \theta$ and $y$ with $r \sin \theta$, effectively translating the Cartesian function into a language of radii and angles.

The most critical step—and the one students most frequently forget—is the transformation of the differential area element $dA$. In rectangular coordinates, $dA$ is simply $dx \, dy$; however, in polar coordinates, it becomes **$r \, dr \, d\theta$**. That extra $r$ is the "Jacobian" or stretching factor, accounting for the fact that a small change in angle covers more area as you move further from the origin. 

Once you've converted the function and the differential, you set your limits: $r$ usually spans from an inner radius to an outer boundary, while $\theta$ tracks the angular sweep of the region.

The general formula for the evaluation is:

$$\iint_R f(x, y) \, dA = \int_{\alpha}^{\beta} \int_{g_1(\theta)}^{g_2(\theta)} f(r \cos \theta, r \sin \theta) \cdot r \, dr \, d\theta$$

