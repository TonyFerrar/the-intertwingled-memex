## Step-by-Step Solution

To find the volume of a solid with known cross-sections, we find the area of a single representative cross-section as a function of $x$ (or $y$) and integrate it across the boundaries of the base region.

### Step 1: Find the Limits of Integration

The base of the solid is bounded by the parabola $y = 4 - x^2$ and the $x$-axis ($y = 0$). To find where they intersect, set the two equations equal to each other:

$$4 - x^2 = 0$$

$$x^2 = 4$$

$$x = -2 \quad \text{and} \quad x = 2$$

So, our limits of integration along the $x$-axis are from $a = -2$ to $b = 2$.

### Step 2: Determine the Side Length of the Square Cross-Section

The cross-sections are perpendicular to the $x$-axis. For any given position $x$, the length of the base of that cross-section is the vertical distance from the $x$-axis up to the parabola:

$$\text{Side length } s(x) = y_{\text{upper}} - y_{\text{lower}}$$

$$s(x) = (4 - x^2) - 0 = 4 - x^2$$

### Step 3: Find the Area Function $A(x)$

Since each cross-section is a **square**, the area $A$ of a cross-section with side length $s(x)$ is given by $A = s^2$:

$$A(x) = [s(x)]^2 = (4 - x^2)^2$$

Expand this expression to make integration easier:

$$A(x) = 16 - 8x^2 + x^4$$

### Step 4: Set Up the Volume Integral

The volume $V$ is computed by integrating the cross-sectional area function over the interval $[-2, 2]$:

$$V = \int_{-2}^{2} A(x) \, dx$$

$$V = \int_{-2}^{2} (16 - 8x^2 + x^4) \, dx$$

> **Tip (Using Symmetry):** Because the region and the function are perfectly symmetrical across the $y$-axis (an even function), we can integrate from $0$ to $2$ and multiply the result by 2 to simplify our calculations:
> 
> $$V = 2 \int_{0}^{2} (16 - 8x^2 + x^4) \, dx$$

### Step 5: Find the Antiderivative and Evaluate

Integrate each term individually using the power rule:

$$\int (16 - 8x^2 + x^4) \, dx = 16x - \frac{8x^3}{3} + \frac{x^5}{5}$$

Now, apply the Fundamental Theorem of Calculus from $0$ to $2$:

$$V = 2 \left[ 16x - \frac{8x^3}{3} + \frac{x^5}{5} \right]_{0}^{2}$$

**Evaluate at the upper limit ($x = 2$):**

$$16(2) - \frac{8(2)^3}{3} + \frac{(2)^5}{5} = 32 - \frac{64}{3} + \frac{32}{5}$$

Find a common denominator, which is 15:

$$32 = \frac{480}{15}$$

$$\frac{64}{3} = \frac{320}{15}$$

$$\frac{32}{5} = \frac{96}{15}$$

Combine the fractions:

$$\frac{480 - 320 + 96}{15} = \frac{256}{15}$$

**Evaluate at the lower limit ($x = 0$):**

Everything simplifies directly to $0$.

### Step 6: Compute the Final Volume

Multiply the result by 2 to account for the symmetry:

$$V = 2 \times \frac{256}{15} = \frac{512}{15}$$

### Final Answer

The exact volume of the solid is **$\frac{512}{15}$** (or approximately **34.13**).