# Master Class: Graph Orientation & Variable Selection (Choosing $dx$ vs. $dy$)

## 1. Core Concept Notes

When calculating areas or volumes by slicing, the most critical decision you make happens before writing down a single integral: **Should you integrate with respect to $x$ ($dx$) or with respect to $y$ ($dy$)?** Choosing incorrectly or inefficiently can turn a simple problem into a long, error-prone algebraic nightmare.

### Vertical Slicing ($dx$)

You choose vertical slicing when the boundaries of the region are easily defined from top to bottom over a continuous left-to-right interval $[a, b]$.

- **Representative Rectangle:** Vertically oriented with a width of $\Delta x$.
    
- **Height:** Defined by the **Upper Curve minus the Lower Curve** ($y_{\text{top}} - y_{\text{bottom}}$).
    
- **Integral Formula for Area:**
    
    $$\text{Area} = \int_{a}^{b} (f(x) - g(x)) \, dx \quad \text{where } f(x) \ge g(x) \text{ on } [a, b]$$
    

### Horizontal Slicing ($dy$)

You choose horizontal slicing when the boundaries are cleaner from right to left, or if a single vertical line would cross the same curve multiple times (violating the vertical line test).

- **Representative Rectangle:** Horizontally oriented with a thickness of $\Delta y$.
    
- **Width:** Defined by the **Rightmost Curve minus the Leftmost Curve** ($x_{\text{right}} - x_{\text{left}}$).
    
- **Integral Formula for Area:**
    
    $$\text{Area} = \int_{c}^{d} (f(y) - g(y)) \, dy \quad \text{where } f(y) \ge g(y) \text{ on } [c, d]$$
    

### Volume Considerations (Disk vs. Washer)

Your choice of variable also dictates the visual structure of a solid of revolution.

- **Slices Parallel to the Axis of Rotation** create nested cylindrical shells.
    
- **Slices Perpendicular to the Axis of Rotation** create solid disks or hollow washers.
    
    - If a vertical slice ($dx$) revolves around the **$x$-axis** (or any horizontal line), it creates a disk or a washer.
        
    - If a horizontal slice ($dy$) revolves around the **$y$-axis** (or any vertical line), it creates a disk or a washer.
        

## 2. Pure Mathematics Sample Problems

### Sample Problem 1: Choosing $dx$ vs. $dy$ for Area Efficiency

Find the area of the region bounded by the curves $x = y^2$ and $y = x - 2$.

#### Step-by-Step Selection Process:

1. **Analyze with $dx$:** If we slice vertically, the bottom boundary changes structurally at $x = 1$. From $x = 0$ to $x = 1$, the bottom is the lower half of the parabola ($y = -\sqrt{x}$). From $x = 1$ to $x = 4$, the bottom is the line ($y = x - 2$). This forces us to set up _two separate integrals_.
    
2. **Analyze with $dy$:** If we slice horizontally, the rightmost boundary is always the line ($x = y + 2$) and the leftmost boundary is always the parabola ($x = y^2$) throughout the entire vertical span. This allows us to use a _single integral_.
    

We choose **$dy$**.

#### Solution:

Find the $y$-limits of integration by setting the equations equal to each other:

$$y^2 = y + 2 \implies y^2 - y - 2 = 0 \implies (y - 2)(y + 1) = 0$$

Our limits are $c = -1$ and $d = 2$.

Set up the single $dy$ integral using $\text{Right} - \text{Left}$:

$$\text{Area} = \int_{-1}^{2} ((y + 2) - y^2) \, dy$$

$$\text{Area} = \left[ \frac{y^2}{2} + 2y - \frac{y^3}{3} \right]_{-1}^{2}$$

Evaluating at the upper limit ($y = 2$):

$$\left( \frac{4}{2} + 4 - \frac{8}{3} \right) = 6 - \frac{8}{3} = \frac{10}{3}$$

Evaluating at the lower limit ($y = -1$):

$$\left( \frac{1}{2} - 2 - \frac{-1}{3} \right) = -\frac{3}{2} + \frac{1}{3} = -\frac{7}{6}$$

Subtract to find the total area:

$$\text{Area} = \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{20}{6} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}$$

### Sample Problem 2: Visualizing Solid vs. Hollow Volumes

Let a region be bounded by $y = x^3$, $y = 0$, and $x = 1$. Set up the integral expressions to find the volume when rotated about:

1. The $x$-axis
    
2. The $y$-axis
    

#### Step-by-Step Selection Process:

1. **Rotation about the $x$-axis:** Slicing perpendicular to this axis requires a vertical slice ($dx$). The base of the slice rests completely on the axis of rotation ($y = 0$), meaning there is no gap. This will form a **solid disk**.
    
2. **Rotation about the $y$-axis:** Slicing perpendicular to this axis requires a horizontal slice ($dy$). There is an empty gap between the axis of rotation ($x = 0$) and the inner curve. This will form a **hollow washer**.
    

#### Solution:

- **For the $x$-axis rotation (Disk Method):**
    
    $$\text{Radius } R(x) = x^3 \text{ from } x = 0 \text{ to } x = 1$$
    
    $$V = \int_{0}^{1} \pi (x^3)^2 \, dx = \pi \int_{0}^{1} x^6 \, dx = \pi \left[ \frac{x^7}{7} \right]_{0}^{1} = \frac{\pi}{7}$$
    
- **For the $y$-axis rotation (Washer Method):**
    
    We must convert functions to terms of $y$: $y = x^3 \implies x = y^{1/3}$.
    
    $$\text{Outer Radius } R(y) = 1 \quad \text{(the line } x = 1\text{)}$$
    
    $$\text{Inner Radius } r(y) = y^{1/3} \quad \text{(the curve } x = y^{1/3}\text{)}$$
    

The limits along the $y$-axis span from $y = 0^3 = 0$ to $y = 1^3 = 1$.

$$V = \int_{0}^{1} \pi \left( (1)^2 - (y^{1/3})^2 \right) \, dy = \pi \int_{0}^{1} (1 - y^{2/3}) \, dy$$

$$V = \pi \left[ y - \frac{3}{5}y^{5/3} \right]_{0}^{1} = \pi \left( 1 - \frac{3}{5} \right) = \frac{2\pi}{5}$$

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Nozzle Wall Weight Optimization]]
[[Aerospace Nozzle Wall Weight Optimization Solution]]

### Engineering Problem 2: [[Civil Engineering Highway Topography Slicing]]
[[Civil Engineering Highway Topography Slicing Solution]]
