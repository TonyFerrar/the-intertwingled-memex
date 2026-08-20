## Problem Statement

Let $R$ be the triangle with vertices $(0,0)$, $(3,0)$, and $(3, 2)$.

1. Write $\iint_{R}(2x+3y) \, dA$ as Type I and evaluate.
    
2. Switch the order and evaluate again.
    

## Part 1: Type I Setup and Evaluation

A **Type I region** uses vertical slices. The outer integration bounds are constant values of $x$, and the inner integration bounds are functions for $y$ ($y(x)$).

### 1. Find the Boundary Equations

The triangular region $R$ is bounded by three lines connecting the vertices $(0,0)$, $(3,0)$, and $(3,2)$:

- **Bottom boundary:** The line on the x-axis connecting $(0,0)$ and $(3,0) \implies y = 0$.
    
- **Right boundary:** The vertical line connecting $(3,0)$ and $(3,2) \implies x = 3$.
    
- **Top boundary:** The slanted line connecting $(0,0)$ and $(3,2)$. Its slope is $m = \frac{2-0}{3-0} = \frac{2}{3}$, so the equation is $y = \frac{2}{3}x$.
    

### 2. Set up the Bounds

- **Outer bounds ($x$):** Slicing from left to right, $x$ ranges from $0$ to $3 \implies x \in [0, 3]$.
    
- **Inner bounds ($y$):** Any vertical slice starts at the bottom line $y = 0$ and goes up to the slanted line $y = \frac{2}{3}x$.
    

### 3. Iterated Integral Setup

$$I = \int_{0}^{3} \int_{0}^{\frac{2}{3}x} (2x + 3y) \, dy \, dx$$

### 4. Evaluation

**Step A: Inner Integral (with respect to $y$)**

Treat $x$ as a constant and integrate with respect to $y$:

$$\int_{0}^{\frac{2}{3}x} (2x + 3y) \, dy = \left[ 2xy + \frac{3}{2}y^2 \right]_{0}^{\frac{2}{3}x}$$

Substitute the upper limit $y = \frac{2}{3}x$ (the lower limit of $0$ yields $0$):

$$= 2x\left(\frac{2}{3}x\right) + \frac{3}{2}\left(\frac{2}{3}x\right)^2$$

$$= \frac{4}{3}x^2 + \frac{3}{2}\left(\frac{4}{9}x^2\right)$$

$$= \frac{4}{3}x^2 + \frac{2}{3}x^2 = 2x^2$$

**Step B: Outer Integral (with respect to $x$)**

Now substitute this back into the outer integral:

$$I = \int_{0}^{3} 2x^2 \, dx = \left[ \frac{2}{3}x^3 \right]_{0}^{3}$$

$$I = \frac{2}{3}(3)^3 - 0 = \frac{2}{3}(27) = 18$$

## Part 2: Switch the Order (Type II Setup) and Evaluation

A **Type II region** uses horizontal slices. The outer integration bounds are constant values of $y$, and the inner integration bounds are functions for $x$ ($x(y)$).

### 1. Invert the Functions for $x(y)$

We rewrite our boundary line equations to express $x$ in terms of $y$:

- The top slanted line was $y = \frac{2}{3}x \implies x = \frac{3}{2}y$.
    

### 2. Set up the Bounds

- **Outer bounds ($y$):** Slicing from bottom to top, $y$ ranges from the lowest vertex $y = 0$ to the highest vertex $y = 2 \implies y \in [0, 2]$.
    
- **Inner bounds ($x$):** Any horizontal slice enters the region at the slanted line $x = \frac{3}{2}y$ and exits at the vertical line $x = 3$.
    

### 3. Iterated Integral Setup

$$I = \int_{0}^{2} \int_{\frac{3}{2}y}^{3} (2x + 3y) \, dx \, dy$$

### 4. Evaluation

**Step A: Inner Integral (with respect to $x$)**

Treat $y$ as a constant and integrate with respect to $x$:

$$\int_{\frac{3}{2}y}^{3} (2x + 3y) \, dx = \left[ x^2 + 3xy \right]_{\frac{3}{2}y}^{3}$$

Substitute the limits:

$$= \left( (3)^2 + 3(3)y \right) - \left( \left(\frac{3}{2}y\right)^2 + 3\left(\frac{3}{2}y\right)y \right)$$

$$= (9 + 9y) - \left( \frac{9}{4}y^2 + \frac{9}{2}y^2 \right)$$

Find a common denominator for the $y^2$ terms ($\frac{9}{4} + \frac{18}{4} = \frac{27}{4}$):

$$= 9 + 9y - \frac{27}{4}y^2$$

**Step B: Outer Integral (with respect to $y$)**

Now substitute this back into the outer integral:

$$I = \int_{0}^{2} \left( 9 + 9y - \frac{27}{4}y^2 \right) \, dy$$

Find the antiderivative:

$$= \left[ 9y + \frac{9}{2}y^2 - \frac{27}{12}y^3 \right]_{0}^{2}$$

Simplify the fraction $\frac{27}{12} = \frac{9}{4}$:

$$= \left[ 9y + \frac{9}{2}y^2 - \frac{9}{4}y^3 \right]_{0}^{2}$$

Evaluate at the upper limit $y = 2$:

$$= 9(2) + \frac{9}{2}(2)^2 - \frac{9}{4}(2)^3$$

$$= 18 + \frac{9}{2}(4) - \frac{9}{4}(8)$$

$$= 18 + 18 - 18 = 18$$

## Final Answer

- **Type I Setup & Value:** $\int_{0}^{3} \int_{0}^{\frac{2}{3}x} (2x + 3y) \, dy \, dx = 18$
    
- **Type II Setup & Value:** $\int_{0}^{2} \int_{\frac{3}{2}y}^{3} (2x + 3y) \, dx \, dy = 18$