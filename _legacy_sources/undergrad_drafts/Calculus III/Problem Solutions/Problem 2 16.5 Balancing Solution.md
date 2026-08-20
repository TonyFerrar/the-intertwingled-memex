## Step 1: Map the Region and Setup the Limits

Before integrating, we have to establish how the variables bound our shape. The problem provides three lines for the boundaries:

- Bottom boundary: $y = 0$
    
- Right boundary: $x = 2$
    
- Sloped top boundary: $y = 3x$
    

If we look at where these lines meet, the origin $(0,0)$ is our starting vertex, and the triangle stretches out to the right until it hits $x = 2$.

> **Why we setup the integrals this way:** Because the upper boundary ($y = 3x$) changes depending on where you are along the x-axis, we need to treat this as a **Type I region**. This means our outer limits will handle the constant values of $x$, and the inner limits will span from the bottom line to the sloped line:
> 
> - **Outer limits ($x$):** From $0$ to $2$
>     
> - **Inner limits ($y$):** From $0$ to $3x$
>     

## Step 2: Compute the Total Mass ($M$)

The physical formula for mass when density varies across a region is:

$$M = \iint_R \rho(x,y) \, dA$$

Given that $\rho(x, y) = 2x$, we set up our double integral:

$$M = \int_{0}^{2} \int_{0}^{3x} 2x \, dy \, dx$$

**1. Evaluate the inner integral (with respect to $y$):**

Treat $x$ as a constant while integrating with respect to $y$:

$$\int_{0}^{3x} 2x \, dy = [2xy]_0^{3x} = 2x(3x) - 2x(0) = 6x^2$$

**2. Evaluate the outer integral (with respect to $x$):**

$$M = \int_{0}^{2} 6x^2 \, dx = [2x^3]_0^{2} = 2(2)^3 - 2(0)^3 = 16$$

The total mass of the triangular bracket is **16**.

## Step 3: Compute the First Moment about the y-axis ($M_y$)

The moment $M_y$ tracks how mass balances horizontally relative to the y-axis, meaning we multiply our density function by the horizontal distance variable $x$:

$$M_y = \iint_R x \cdot \rho(x,y) \, dA$$

Substituting our variables:

$$M_y = \int_{0}^{2} \int_{0}^{3x} x(2x) \, dy \, dx = \int_{0}^{2} \int_{0}^{3x} 2x^2 \, dy \, dx$$

**1. Evaluate the inner integral (with respect to $y$):**

$$\int_{0}^{3x} 2x^2 \, dy = [2x^2y]_0^{3x} = 2x^2(3x) - 0 = 6x^3$$

**2. Evaluate the outer integral (with respect to $x$):**

$$M_y = \int_{0}^{2} 6x^3 \, dx = \left[ \frac{6}{4}x^4 \right]_0^2 = \left[ \frac{3}{2}x^4 \right]_0^2 = \frac{3}{2}(16) - 0 = 24$$

## Step 4: Compute the First Moment about the x-axis ($M_x$)

The moment $M_x$ tracks how mass balances vertically relative to the x-axis, so we multiply our density function by the vertical distance variable $y$:

$$M_x = \iint_R y \cdot \rho(x,y) \, dA$$

Substituting our variables:

$$M_x = \int_{0}^{2} \int_{0}^{3x} y(2x) \, dy \, dx = \int_{0}^{2} \int_{0}^{3x} 2xy \, dy \, dx$$

**1. Evaluate the inner integral (with respect to $y$):**

$$\int_{0}^{3x} 2xy \, dy = [xy^2]_0^{3x} = x(3x)^2 - 0 = x(9x^2) = 9x^3$$

**2. Evaluate the outer integral (with respect to $x$):**

$$M_x = \int_{0}^{2} 9x^3 \, dx = \left[ \frac{9}{4}x^4 \right]_0^2 = \frac{9}{4}(16) - 0 = 36$$

## Step 5: Calculate Center of Mass Coordinates $(\overline{x}, \overline{y})$

With our total mass and directional moments computed, we divide the moments by the mass to pinpoint the exact spatial balance coordinates:

$$\overline{x} = \frac{M_y}{M} = \frac{24}{16} = \frac{3}{2} = 1.5$$

$$\overline{y} = \frac{M_x}{M} = \frac{36}{16} = \frac{9}{4} = 2.25$$

## Final Answer

The precise center of mass location for the bracket is:

$$\mathbf{(\overline{x}, \overline{y}) = (1.5, 2.25)}$$

### Engineering Reality Check

If this triangle had uniform, perfectly split density, its geometric centroid would simply sit at $\overline{x} = \frac{2}{3}(2) \approx 1.33$.

Because our density function $\rho = 2x$ scales up linearly as $x$ gets larger, the material gets significantly heavier toward the right edge ($x = 2$). The math beautifully reflects this physical reality: the center of mass gets pulled rightward to $\overline{x} = 1.5$ and shifts higher up along the slope to $\overline{y} = 2.25$.