# Solving and Interpreting Partial Derivatives Visually 

We want to evaluate and interpret the partial derivatives at the point $(1, 0)$ for the function:

$$f(x,y) = x^{2}+2y^{2}$$

## 1. Finding the Exact Analytical Values

To understand what we are looking for on a contour plot, we first compute the exact partial derivatives.

### Differentiating with respect to $x$ ($\frac{\partial f}{\partial x}$):

Treating $y$ as a constant:

$$\frac{\partial f}{\partial x} = 2x$$

Evaluating at $(1, 0)$:

$$\frac{\partial f}{\partial x}(1,0) = 2(1) = 2$$

### Differentiating with respect to $y$ ($\frac{\partial f}{\partial y}$):

Treating $x$ as a constant:

$$\frac{\partial f}{\partial y} = 4y$$

Evaluating at $(1, 0)$:

$$\frac{\partial f}{\partial y}(1,0) = 4(0) = 0$$

## 2. Visual Interpretation Using a Contour Plot

If you look at a contour plot representing level curves of the elliptic paraboloid $f(x,y) = x^2 + 2y^2$, here is how you visually estimate these values at the point $(1,0)$:

### Estimating $\frac{\partial f}{\partial x}(1,0) = 2$

- **How to see it:** Locate the point $(1,0)$ on the $x$-axis. Move a small distance to the **right** (in the positive $x$-direction) while keeping your height $y=0$ fixed.
    
- **Observation:** As you cross from $x=1$ to $x>1$, you cross contour lines that correspond to higher and higher values of $f(x,y)$ (because $x^2$ is increasing).
    
- **Conclusion:** Because the contour values increase as you move right, the rate of change is positive ($\frac{\partial f}{\partial x} > 0$). The specific spacing of the lines yields a slope approximation of $2$.
    

### Estimating $\frac{\partial f}{\partial y}(1,0) = 0$

- **How to see it:** Start at the same point $(1,0)$ on the $x$-axis and move vertically **upward** (in the positive $y$-direction) while holding $x=1$ fixed.
    
- **Observation:** The contours of $x^2 + 2y^2 = c$ form concentric ellipses centered at the origin. At the point $(1,0)$, the vertical line $x=1$ is perfectly **tangent** to the elliptical contour line. Moving a tiny step up or down keeps you momentarily along the exact same contour value before it begins to curve away symmetrically.
    
- **Conclusion:** Because moving in the $y$-direction is tangent to the level curve at this exact instant, the function value does not change. Therefore, the instantaneous slope in the $y$-direction is $\frac{\partial f}{\partial y} = 0$.