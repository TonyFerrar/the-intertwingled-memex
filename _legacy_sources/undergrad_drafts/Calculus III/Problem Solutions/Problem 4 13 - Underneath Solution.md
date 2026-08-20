## Problem Statement

Let $R$ be bounded by $y = x^{2}$ and $y = 2x$. Set up $\iint_{R}(x + y) \, dA$ as a Type I (vertical slices) region and evaluate.

## Part 1: Finding the Integration Bounds

To set up a **Type I region**, we slice the area vertically. This means our outer integration bounds will be constants for $x$, and our inner integration bounds will be functions of $x$ for $y$ ($y(x)$).

### 1. Find the Intersection Points (Outer Bounds for $x$)

Set the two equations equal to each other to find where the curves intersect:

$$x^2 = 2x$$

$$x^2 - 2x = 0$$

$$x(x - 2) = 0$$

This gives the $x$-coordinates of the intersection points:

- $x = 0$
    
- $x = 2$
    

So, the outer bounds are $x \in [0, 2]$.

### 2. Determine Upper and Lower Functions (Inner Bounds for $y$)

Pick a test point inside the interval $(0, 2)$, such as $x = 1$, to see which curve is on top:

- For $y = 2x \implies y = 2(1) = 2$ **(Upper bound)**
    
- For $y = x^2 \implies y = (1)^2 = 1$ **(Lower bound)**
    

Thus, for any vertical slice in this region, $y$ goes from the parabola $y = x^2$ up to the line $y = 2x$.

## Part 2: Setting up the Integral

Using the Type I setup formula $\int_{a}^{b} \int_{g_1(x)}^{g_2(x)} f(x,y) \, dy \, dx$:

$$I = \int_{0}^{2} \int_{x^2}^{2x} (x + y) \, dy \, dx$$

## Part 3: Evaluating the Integral

### Step 1: Inner Integral (with respect to $y$)

Treat $x$ as a constant and integrate with respect to $y$:

$$\int_{x^2}^{2x} (x + y) \, dy = \left[ xy + \frac{y^2}{2} \right]_{x^2}^{2x}$$

Substitute the upper limit ($y = 2x$) and lower limit ($y = x^2$):

$$= \left( x(2x) + \frac{(2x)^2}{2} \right) - \left( x(x^2) + \frac{(x^2)^2}{2} \right)$$

$$= \left( 2x^2 + \frac{4x^2}{2} \right) - \left( x^3 + \frac{x^4}{2} \right)$$

$$= (2x^2 + 2x^2) - x^3 - \frac{1}{2}x^4$$

$$= 4x^2 - x^3 - \frac{1}{2}x^4$$

### Step 2: Outer Integral (with respect to $x$)

Now, integrate this resulting expression with respect to $x$ from $0$ to $2$:

$$I = \int_{0}^{2} \left( 4x^2 - x^3 - \frac{1}{2}x^4\right) \, dx$$

Find the antiderivative:

$$= \left[ \frac{4x^3}{3} - \frac{x^4}{4} - \frac{x^5}{10} \right]_{0}^{2}$$

Evaluate at the upper limit $x = 2$ (the lower limit at $x = 0$ yields $0$):

$$= \left( \frac{4(2)^3}{3} - \frac{(2)^4}{4} - \frac{(2)^5}{10} \right) - 0$$

$$= \frac{4(8)}{3} - \frac{16}{4} - \frac{32}{10}$$

$$= \frac{32}{3} - 4 - \frac{16}{5}$$

Find a common denominator, which is $15$:

$$= \frac{160}{15} - \frac{60}{15} - \frac{48}{15}$$

$$= \frac{160 - 60 - 48}{15}$$

$$= \frac{52}{15}$$

## Final Answer

- **Integral Setup:** $\int_{0}^{2} \int_{x^2}^{2x} (x + y) \, dy \, dx$
    
- **Evaluated Value:** $\frac{52}{15}$