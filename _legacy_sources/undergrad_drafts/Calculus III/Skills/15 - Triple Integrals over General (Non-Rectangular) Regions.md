# Skill 2: Triple Integrals Over General Regions

## Conceptual Notes & Lecture Guide

### What is a Triple Integral Over a General Region?

Unlike rectangular boxes where the boundaries are constant values, a **general region** $E$ involves bounded 3D spaces defined by intersecting curved surfaces, planes, or functions. To handle these regions, we extend the concept of double integral regions into three dimensions by allowing the boundaries of the inner variables to depend on the outer variables.

A general 3D region is classified based on which variable is bounded by two bounding functions first. The most common configuration is a **Type I Region**, where the solid lies between the graphs of two continuous functions of $x$ and $y$:

$$E = \{(x, y, z) \mid (x, y) \in D, \, h_1(x, y) \le z \le h_2(x, y)\}$$

Here, $D$ represents the **projection (or shadow)** of the 3D solid $E$ onto the 2D $xy$-plane.

### Step-by-Step Strategy to Construct Bounds

To set up an iterated triple integral over a general region using the standard order $dz \, dy \, dx$, work your way from the **inside layer out**:

1. **Inner Bounds (3D Surfaces):** Look along the axis of the innermost variable (e.g., the $z$-axis). Identify which surface bounds the solid from below ($z_{\text{bottom}} = h_1(x,y)$) and which surface bounds it from above ($z_{\text{top}} = h_2(x,y)$). These become functions in your innermost limits:
    
    $$\int_{h_1(x,y)}^{h_2(x,y)} f(x,y,z) \, dz$$
    
2. **Find the 2D Projection ($D$):** Project the outermost boundary of the solid onto the remaining coordinate plane (e.g., the $xy$-plane). You can find this boundary line mathematically by finding the intersection trace of the top and bottom surfaces ($h_1(x,y) = h_2(x,y)$) or by setting the bounding variables to zero if dealing with coordinate planes.
    
3. **Middle Bounds (2D Curves):** Treat the 2D projection $D$ exactly like a region in double integrals. If integrating with respect to $y$ next, find the lower boundary curve $y = g_1(x)$ and upper boundary curve $y = g_2(x)$:
    
    $$\int_{g_1(x)}^{g_2(x)} \dots \, dy$$
    
4. **Outer Bounds (Constants):** Identify the absolute minimum and maximum constant values ($x = a$ and $x = b$) that the 2D projection spans along the final axis:
    
    $$\int_{a}^{b} \dots \, dx$$
    

Putting it all together, the full iterated integral over a general region is:

$$\iiint_{E} f(x,y,z) \, dV = \int_{a}^{b} \int_{g_1(x)}^{g_2(x)} \int_{h_1(x,y)}^{h_2(x,y)} f(x,y,z) \, dz \, dy \, dx$$

## Pure Mathematical Sample Problems

### Sample Problem 2.1

Evaluate the triple integral:

$$\iiint_{E} z \, dV$$

where $E$ is the solid region in the first octant bounded by the planes $x = 0$, $y = 0$, $z = 0$, and $2x + y + z = 2$.

#### Solution:

**Step 1: Determine the inner $z$ bounds**

In the first octant, the solid is bounded below by the $xy$-plane ($z = 0$). The top boundary is the slanted plane. Solving for $z$:

$$z = 2 - 2x - y$$

Thus, $0 \le z \le 2 - 2x - y$.

**Step 2: Find the 2D projection $D$ onto the $xy$-plane**

Setting $z = 0$ in the plane equation gives the boundary line in the $xy$-plane:

$$2x + y = 2 \implies y = 2 - 2x$$

Since it is in the first octant, $y \ge 0$ and $x \ge 0$. The region $D$ is a triangle bounded by $x=0$, $y=0$, and $y = 2 - 2x$.

**Step 3: Determine the middle $y$ bounds and outer $x$ bounds**

For a fixed $x$, $y$ ranges from $0$ up to the line: $0 \le y \le 2 - 2x$.

The maximum $x$ value occurs when $y=0$, which gives $2x = 2 \implies x = 1$. Thus, $0 \le x \le 1$.

**Step 4: Set up and evaluate the integral**

$$I = \int_{0}^{1} \int_{0}^{2-2x} \int_{0}^{2-2x-y} z \, dz \, dy \, dx$$

_Inner $z$-integration:_

$$\int_{0}^{2-2x-y} z \, dz = \left[ \frac{1}{2}z^2 \right]_{0}^{2-2x-y} = \frac{1}{2}(2 - 2x - y)^2$$

_Middle $y$-integration:_

To make integration easier, let $u = 2 - 2x - y$, then $dy = -du$.

- When $y = 0$, $u = 2 - 2x$.
    
- When $y = 2 - 2x$, $u = 0$.
    

$$\int_{2-2x}^{0} \frac{1}{2}u^2 (-du) = \int_{0}^{2-2x} \frac{1}{2}u^2 \, du = \left[ \frac{1}{6}u^3 \right]_{0}^{2-2x} = \frac{1}{6}(2 - 2x)^3$$

We can factor out a $2$ from inside the cube: $(2(1-x))^3 = 8(1-x)^3$.

$$\frac{8}{6}(1-x)^3 = \frac{4}{3}(1-x)^3$$

_Outer $x$-integration:_

$$\int_{0}^{1} \frac{4}{3}(1-x)^3 \, dx = \left[ -\frac{1}{3} \cdot \frac{4}{3}(1-x)^4 \right]_{0}^{1} = \left[ -\frac{4}{9}(1-x)^4 \right]_{0}^{1}$$

$$= 0 - \left( -\frac{4}{9}(1-0)^4 \right) = \frac{4}{9}$$

#### Final Answer:

$$\iiint_{E} z \, dV = \frac{4}{9}$$

### Sample Problem 2.2

Find the volume of the solid region $E$ bounded by the parabolic cylinder $y = x^2$ and the planes $z = 0$ and $y + z = 4$.

#### Solution:

To find the volume, we evaluate $\iiint_{E} 1 \, dV$.

**Step 1: Determine the inner $z$ bounds**

The region is bounded below by the plane $z = 0$ and above by the slanted plane $y + z = 4 \implies z = 4 - y$.

Thus, $0 \le z \le 4 - y$.

**Step 2: Find the 2D projection $D$ onto the $xy$-plane**

The solid is bounded laterally by the cylinder $y = x^2$ and capped by the intersection line where $z=0$, which yields $y = 4$. Therefore, the projection $D$ onto the $xy$-plane is the region enclosed between the parabola $y = x^2$ and the horizontal line $y = 4$.

**Step 3: Determine the middle $y$ bounds and outer $x$ bounds**

For a fixed $x$, $y$ goes from the lower curve (the parabola) to the upper line:

$$x^2 \le y \le 4$$

The intersection points of $y = x^2$ and $y = 4$ give the outer limits for $x$:

$$x^2 = 4 \implies x = -2 \text{ and } x = 2$$

**Step 4: Set up and evaluate the integral**

$$V = \int_{-2}^{2} \int_{x^2}^{4} \int_{0}^{4-y} 1 \, dz \, dy \, dx$$

_Inner $z$-integration:_

$$\int_{0}^{4-y} 1 \, dz = 4 - y$$

_Middle $y$-integration:_

$$\int_{x^2}^{4} (4 - y) \, dy = \left[ 4y - \frac{1}{2}y^2 \right]_{x^2}^{4}$$

$$= \left( 4(4) - \frac{1}{2}(4)^2 \right) - \left( 4x^2 - \frac{1}{2}(x^2)^2 \right) = (16 - 8) - 4x^2 + \frac{1}{2}x^4 = 8 - 4x^2 + \frac{1}{2}x^4$$

_Outer $x$-integration:_

$$V = \int_{-2}^{2} \left( 8 - 4x^2 + \frac{1}{2}x^4 \right) \, dx$$

Because the integrand is an even function and the limits are symmetric, we can integrate from $0$ to $2$ and multiply by $2$:

$$V = 2 \int_{0}^{2} \left( 8 - 4x^2 + \frac{1}{2}x^4 \right) \, dx = 2 \left[ 8x - \frac{4}{3}x^3 + \frac{1}{10}x^5 \right]_{0}^{2}$$

$$V = 2 \left( 8(2) - \frac{4}{3}(8) + \frac{1}{10}(32) \right) = 2 \left( 16 - \frac{32}{3} + \frac{16}{5} \right)$$

Find a common denominator of 15:

$$V = 2 \left( \frac{240}{15} - \frac{160}{15} + \frac{48}{15} \right) = 2 \left( \frac{128}{15} \right) = \frac{256}{15}$$

#### Final Answer:

The volume of the region is $\frac{256}{15}$ (or approximately $17.07$).

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Engineering & Fuel Tank Center of Mass]]
[[Aerospace Engineering & Fuel Tank Center of Mass Solution]]

### Engineering Problem 2: [[Naval Architecture & Submarine Hull Buoyancy]]
[[Naval Architecture & Submarine Hull Buoyancy Solution]]
