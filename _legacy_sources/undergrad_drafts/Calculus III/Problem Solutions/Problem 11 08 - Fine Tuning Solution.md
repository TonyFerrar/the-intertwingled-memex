# Solving and Interpreting Partial Derivatives 

## Part 1: Problem S3.2

Use the contour plot of $f(x,y)=\sqrt{x^{2}+y^{2}}$ to estimate $\frac{\partial f}{\partial y}(1,1)$.

### 1. Visual Geometric Analysis

The level curves for $f(x,y) = \sqrt{x^2+y^2} = c$ are concentric circles centered at the origin with radius $r = c$.

- **Locating the Point:** The point $(1,1)$ lies at a distance of $r = \sqrt{1^2+1^2} = \sqrt{2} \approx 1.41$ from the origin. It rests on the contour circle where $c = \sqrt{2}$.
    
- **Direction of Movement:** To evaluate $\frac{\partial f}{\partial y}$, look at what happens when you start at $(1,1)$ and take a small step straight upward parallel to the positive $y$-axis (keeping $x = 1$ constant).
    
- **Observation:** Moving up from $y = 1$ to a slightly larger value increases your distance from the origin. This means you cross into outer concentric circles representing higher values of $c$. Because the function values increase as you move up, the partial derivative must be **positive**.
    

### 2. Analytical Verification

To find the exact value, differentiate the function with respect to $y$ while treating $x$ as a constant:

$$\frac{\partial f}{\partial y} = \frac{1}{2}(x^2+y^2)^{-1/2} \cdot \frac{\partial}{\partial y}(x^2+y^2)$$

$$\frac{\partial f}{\partial y} = \frac{1}{2\sqrt{x^2+y^2}} \cdot 2y = \frac{y}{\sqrt{x^2+y^2}}$$

Evaluating this expression at the point $(1,1)$:

$$\left.\left(\frac{\partial f}{\partial y}\right)\right|_{(1,1)} = \frac{1}{\sqrt{1^2+1^2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} \approx 0.707$$

### Interpretation

At the point $(1,1)$ on this cone-shaped surface, moving purely in the positive $y$-direction yields an upward slope of exactly $\frac{\sqrt{2}}{2}$.

## Part 2: Problem S3.3 (Conceptual)

If contours are horizontal lines, what can you say about $\frac{\partial f}{\partial y}$?

### 1. Explanation

- **Understanding Horizontal Contours:** If the contour lines (level curves) of a function are perfectly horizontal, it means the function value $f(x,y)$ remains absolutely constant as you travel along any horizontal path (parallel to the $x$-axis). Consequently, the function only changes value when you move vertically (parallel to the $y$-axis).
    
- **Behavior in the $y$-Direction:** Because the function value changes as you move up or down across these horizontal strips, **$\frac{\partial f}{\partial y}$ will generally be non-zero** (either entirely positive or entirely negative depending on whether the contour heights rise or fall as you move along the $y$-axis).
    

### 2. Conclusion

$$\frac{\partial f}{\partial y} \neq 0$$

The partial derivative with respect to $y$ represents the rate of change across these constant lines, meaning the function can be written strictly as a function of $y$ alone, $f(x,y) = g(y)$. (Note: Conversely, the partial derivative with respect to $x$ would be exactly $0$ everywhere since moving horizontally never changes the function value).