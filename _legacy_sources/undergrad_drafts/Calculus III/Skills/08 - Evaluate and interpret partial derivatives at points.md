# Skill 2: Evaluate and Interpret Partial Derivatives at Points

## Topic Overview & Essential Notes

Once general partial derivative functions are computed, we can evaluate them at specific coordinate points to determine the exact numerical rate of change at that precise location on a multi-variable surface.

### Algebraic Evaluation

To evaluate a partial derivative at a point:

1. Compute the general partial derivative with respect to the desired variable ($\frac{\partial f}{\partial x}$ or $\frac{\partial f}{\partial y}$).
    
2. Substitute the coordinates of the given point $(x_0, y_0)$ or $(x_0, y_0, z_0)$ into the resulting derivative expression.
    

### Geometric and Physical Interpretation

The numerical value obtained from evaluating a partial derivative has a profound geometric meaning:

- **In the $x$-direction ($\left.\frac{\partial f}{\partial x}\right|_{(x_0,y_0)}$):** This value represents the **instantaneous slope** of the tangent line to the surface at that point, when slicing the surface with a vertical plane parallel to the $x$-axis ($y = y_0$, a constant). It is the rate of change of the function as you step forward or backward along the $x$-direction.
    
- **In the $y$-direction ($\left.\frac{\partial f}{\partial y}\right|_{(x_0,y_0)}$):** This value represents the **instantaneous slope** of the tangent line to the surface at that point, when slicing the surface with a vertical plane parallel to the $y$-axis ($x = x_0$, a constant). It is the rate of change of the function as you step forward or backward along the $y$-direction.
    

## Guided Notes Sample Problem

### Sample Problem: Evaluating and Interpreting a Function of Two Variables

For the function $f(x,y) = x^{2}y - y^{3}$, find the partial derivatives, evaluate them at the point $(1, 2)$, and interpret their geometric meaning.

#### Solution:

1. **Find the general partial derivatives:**
    
    - Differentiating with respect to $x$ (treating $y$ as a constant):
        
        $$\frac{\partial f}{\partial x} = 2xy$$
        
    - Differentiating with respect to $y$ (treating $x$ as a constant):
        
        $$\frac{\partial f}{\partial y} = x^{2} - 3y^{2}$$
        
2. **Evaluate at the point $(1, 2)$:**
    
    - For $x = 1$ and $y = 2$:
        
        $$\left.\left(\frac{\partial f}{\partial x}\right)\right|_{(1,2)} = 2(1)(2) = 4$$
        
        $$\left.\left(\frac{\partial f}{\partial y}\right)\right|_{(1,2)} = (1)^{2} - 3(2)^{2} = 1 - 12 = -11$$
        

#### Geometric Interpretation:

- **Slope in the $x$-direction:** The value of $4$ means that if you stand at the point $(1, 2)$ on the surface and walk parallel to the positive $x$-axis while holding $y = 2$ fixed, you will move up a slope of $4$. The surface is rising in this direction.
    
- **Slope in the $y$-direction:** The value of $-11$ means that if you stand at the same point $(1, 2)$ and walk parallel to the positive $y$-axis while holding $x = 1$ fixed, you will plunge down a steep slope of $-11$.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Engineering (Mechanical Stress Concentration)]]
[[Structural Engineering (Mechanical Stress Concentration) Solution]]


### Engineering Problem 2: [[Geotechnical Engineering (Terrain Slope Analysis)]]
[[Geotechnical Engineering (Terrain Slope Analysis) Solution]]
