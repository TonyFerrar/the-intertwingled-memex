# Solving and Interpreting Partial Derivatives Visually 

We want to sketch the contours for the function and estimate the partial derivative at the specified point:

$$f(x,y) = x^{2}+y^{2} \quad \text{at } (2,0)$$

## 1. Sketching the Contours

The level curves (contours) of the function $f(x,y) = x^2 + y^2 = c$ (where $c \ge 0$) represent a family of **concentric circles** centered at the origin $(0,0)$.

- For $c = 1$: A circle of radius $1$.
    
- For $c = 4$: A circle of radius $2$.
    
- For $c = 9$: A circle of radius $3$.
    

As you move outward from the origin, the value of $c$ (the height of the surface) increases.

## 2. Estimating $\frac{\partial f}{\partial x}(2,0)$ Visually

To estimate the value of the partial derivative using your contour sketch:

- **Locate the point:** Find the point $(2,0)$ on your contour map. This point sits exactly on the contour line where $c = 4$ (since $2^2 + 0^2 = 4$), along the positive $x$-axis.
    
- **Direction of movement:** Move a small distance to the **right** (in the positive $x$-direction) along the line $y = 0$.
    
- **Observe the change:** As you move right from $x = 2$ toward $x = 3$, you are traveling out of the $c = 4$ circle and heading toward the $c = 9$ circle. Because the contour values are increasing, the derivative must be **positive**.
    
- **Rate of spacing:** The contour lines get closer together as you move farther from the origin, indicating that the surface is becoming steeper.
    

## 3. Verifying with the Exact Analytical Value

To verify our visual estimation, we can compute the exact partial derivative:

$$\frac{\partial f}{\partial x} = \frac{\partial}{\partial x}(x^{2}+y^{2}) = 2x$$

Evaluating at the point $(2,0)$:

$$\left.\left(\frac{\partial f}{\partial x}\right)\right|_{(2,0)} = 2(2) = 4$$

### Interpretation:

If you stand at the point $(2,0)$ on this bowl-shaped surface (a circular paraboloid) and step in the positive $x$-direction, the instantaneous slope of your path is $4$.