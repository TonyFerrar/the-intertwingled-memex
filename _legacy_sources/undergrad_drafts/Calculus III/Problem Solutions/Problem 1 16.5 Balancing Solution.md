## Step 1: Define the Region and Set the Boundaries

Before writing down any integrals, we need to map out the region $R$. The problem gives us straight, constant lines for our boundaries:

- Horizontal span: $x = 0$ to $x = 4$
    
- Vertical span: $y = 0$ to $y = 2$
    

> **Why we do this:** Because the boundaries are all fixed numbers (constants), we can comfortably use standard **rectangular coordinates** ($dA = dy \, dx$) without having to deal with changing functions or converting to polar coordinates.

## Step 2: Compute the Total Mass ($M$)

The formula for the mass of a two-dimensional plate (lamina) is:

$$M = \iint_R \rho(x,y) \, dA$$

Since the density is a constant $\rho = 3$, we set up our double integral like this:

$$M = \int_{0}^{4} \int_{0}^{2} 3 \, dy \, dx$$

**1. Evaluate the inner integral (with respect to $y$):**

$$\int_{0}^{2} 3 \, dy = [3y]_0^2 = 3(2) - 3(0) = 6$$

**2. Evaluate the outer integral (with respect to $x$):**

$$M = \int_{0}^{4} 6 \, dx = [6x]_0^4 = 6(4) - 6(0) = 24$$

> **Why we do this:** To find the center of mass, we need to know the total weight/mass that is distributed across the plate.
> 
> - _Sanity Check:_ The area of the rectangle is $\text{width} \times \text{height} = 4 \times 2 = 8$. Since density is mass per unit area, $\text{Mass} = \text{Area} \times \text{Density} = 8 \times 3 = 24$. Our calculus matches perfectly!
>     

## Step 3: Compute the First Moment about the y-axis ($M_y$)

The moment $M_y$ measures the balance tendency relative to the line $x=0$ (the y-axis). The further a piece of mass is from the y-axis, the more leverage it has, which is why we introduce a variable $x$ into the integrand:

$$M_y = \iint_R x \cdot \rho(x,y) \, dA$$

Substituting our values:

$$M_y = \int_{0}^{4} \int_{0}^{2} 3x \, dy \, dx$$

**1. Evaluate the inner integral (with respect to $y$):**

$$\int_{0}^{2} 3x \, dy = [3xy]_0^2 = 3x(2) - 0 = 6x$$

**2. Evaluate the outer integral (with respect to $x$):**

$$M_y = \int_{0}^{4} 6x \, dx = \left[ 3x^2 \right]_0^4 = 3(4)^2 - 0 = 3(16) = 48$$

## Step 4: Compute the First Moment about the x-axis ($M_x$)

Similarly, the moment $M_x$ measures the leverage relative to the line $y=0$ (the x-axis), so we introduce the variable $y$:

$$M_x = \iint_R y \cdot \rho(x,y) \, dA$$

Substituting our values:

$$M_x = \int_{0}^{4} \int_{0}^{2} 3y \, dy \, dx$$

**1. Evaluate the inner integral (with respect to $y$):**

$$\int_{0}^{2} 3y \, dy = \left[ \frac{3y^2}{2} \right]_0^2 = \frac{3(4)}{2} - 0 = 6$$

**2. Evaluate the outer integral (with respect to $x$):**

$$M_x = \int_{0}^{4} 6 \, dx = [6x]_0^4 = 6(4) - 0 = 24$$

## Step 5: Calculate the Centroid Coordinates $(\overline{x}, \overline{y})$

Now we use the center of mass formulas to scale down our structural moments by the total mass:

$$\overline{x} = \frac{M_y}{M} = \frac{48}{24} = 2$$

$$\overline{y} = \frac{M_x}{M} = \frac{24}{24} = 1$$

## Final Answer

The center of mass (centroid) of the uniform lamina is located exactly at:

$$\mathbf{(\overline{x}, \overline{y}) = (2, 1)}$$

### The "Helpful Peer" Reality Check

Because the problem specifies the density is **uniform** ($\rho = 3$), the mass is spread out perfectly evenly across the rectangle. The geometric center of any rectangle stretching from $x \in [0, 4]$ and $y \in [0, 2]$ is simply half its length and half its height.

- Half of $4 = 2$
    
- Half of $2 = 1$
    

Your calculus works perfectly, and engineering intuition holds up!