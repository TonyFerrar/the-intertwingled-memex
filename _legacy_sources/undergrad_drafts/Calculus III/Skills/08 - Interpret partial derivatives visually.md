# Skill 3: Interpret Partial Derivatives Visually

## Topic Overview & Essential Notes

When analyzing a multivariable surface $z = f(x,y)$, we often use a **contour plot** (also known as a topographic map or level curve diagram). A contour plot is a 2D representation of a 3D surface where every line represents a constant height or function value ($f(x,y) = c$). Learning to interpret partial derivatives visually allows engineers to immediately read slopes, trends, and stability constraints without performing algebraic differentiation.

### Key Visual Translation Rules

To estimate a partial derivative at a point $(x_0, y_0)$ from a contour map, follow these core visual principles:

1. **Determining the Sign (Positive, Negative, or Zero):**
    
    - **With respect to $x$ ($\frac{\partial f}{\partial x}$):** Start at the point, and move a tiny step to the **right** (positive $x$-direction) while keeping your vertical position ($y$) completely fixed. If you cross into lines with _higher_ numbers, the slope is positive ($\frac{\partial f}{\partial x} > 0$). If you cross into lines with _lower_ numbers, the slope is negative ($\frac{\partial f}{\partial x} < 0$).
        
    - **With respect to $y$ ($\frac{\partial f}{\partial y}$):** Start at the point, and move a tiny step **upward** (positive $y$-direction) while keeping your horizontal position ($x$) completely fixed. If you cross into lines with _higher_ numbers, the slope is positive ($\frac{\partial f}{\partial y} > 0$). If you cross into lines with _lower_ numbers, the slope is negative ($\frac{\partial f}{\partial y} < 0$).
        
    - **Zero Slopes:** If your step is perfectly **tangent** to a contour line, your height is instantaneously unchanged, meaning the partial derivative in that direction is exactly zero ($\frac{\partial f}{\partial x} = 0$ or $\frac{\partial f}{\partial y} = 0$).
        
2. **Determining Magnitude (Steepness):**
    
    - **Tightly Spaced Contours:** When level curves are closely packed together, the function value is changing rapidly over a very short distance. This indicates a **large magnitude** (a very steep slope).
        
    - **Widely Spaced Contours:** When level curves are spread far apart, the function value is changing slowly over a distance. This indicates a **small magnitude** (a gentle, flat slope).
        

## Guided Notes Sample Problems

### Sample Problem 1: Visual Estimation on Concentric Circles

Sketch or analyze the contours for the function $f(x,y) = x^2 + y^2$ at the point $(2,0)$. Visually estimate the sign and value of $\frac{\partial f}{\partial x}$.

#### Solution:

1. **Analyze the Contours:** The level curves are given by $x^2 + y^2 = c$, which represent a family of concentric circles centered at the origin $(0,0)$. The circles grow in value as their radii increase ($c=1, c=4, c=9$, etc.).
    
2. **Locate the Point:** The point $(2,0)$ lies exactly on the positive $x$-axis, intersecting the contour circle where $c = 4$ (since $2^2 + 0^2 = 4$).
    
3. **Perform the Step:** Move a small step to the right (positive $x$-direction) along the horizontal axis $y=0$.
    
4. **Observe and Conclude:** As you move right toward $x = 3$, you exit the $c=4$ circle and move toward the $c=9$ circle. Because the contour values are rising, **$\frac{\partial f}{\partial x}$ must be positive**.
    

### Sample Problem 2: Analyzing Tangency on a Contour Map

Using the same function $f(x,y) = x^2 + y^2$ at the same point $(2,0)$, visually evaluate $\frac{\partial f}{\partial y}$.

#### Solution:

1. **Locate the Point:** Stand at $(2,0)$ on the contour map, which sits on the circle $x^2 + y^2 = 4$.
    
2. **Perform the Step:** Take a tiny step straight upward (positive $y$-direction) parallel to the $y$-axis while holding $x = 2$ fixed.
    
3. **Observe and Conclude:** At the exact point $(2,0)$, the vertical line $x = 2$ is perfectly **tangent** to the circular level curve. Stepping upward keeps you momentarily riding along the rim of the $c=4$ contour before it begins to symmetrically curve away. Because there is zero instantaneous change in height as you step in the $y$-direction, **$\frac{\partial f}{\partial y} = 0$**.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Environmental & Civil Engineering (Topographic Site Drainage)]]
[[Environmental & Civil Engineering (Topographic Site Drainage) Solution]]


### Engineering Problem 2: [[Mechanical & Material Engineering (Thermal Stress Failure Analysis)]]
[[Mechanical & Material Engineering (Thermal Stress Failure Analysis) Solution]]
