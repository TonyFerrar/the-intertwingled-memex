# Skill 2: Compute & Interpret Second-Order Partial Derivatives

## Conceptual Notes & Core Framework

In single-variable calculus, the second derivative ($f''$) provides crucial information about the concavity and acceleration of a curve. In multivariable environments, functions don't just change along a single dimension—they stretch, curve, and twist across multiple spatial or parameter directions.

To fully map the geometry or acceleration of a multivariable system $f(x, y)$, we must compute its **second-order partial derivatives**. Because there are multiple independent variables, we can take derivatives in several combinations, resulting in four distinct second-order partial derivatives.

### Pure Second Partials (Concavity Along Coordinate Axes)

Pure second partial derivatives measure how the slope of a surface changes as you move strictly parallel to one of the coordinate axes, holding all other variables constant.

- **With respect to $x$ twice:**
    
    $$f_{xx} = \frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)$$
    
    - _Physical Meaning:_ The concavity or acceleration of the surface along the $x$-direction. A positive value ($f_{xx} > 0$) means the surface curves upward like a bowl (convex), while a negative value means it curves downward (concave).
        
- **With respect to $y$ twice:**
    
    $$f_{yy} = \frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)$$
    
    - _Physical Meaning:_ The concavity or acceleration of the surface along the $y$-direction.
        

### Mixed Partial Derivatives (Interaction & Coupling Effects)

Mixed partial derivatives track cross-variable interactions. They measure how a change in one variable affects the system's sensitivity to a _different_ variable.

- **Differentiating $f$ by $x$, then by $y$:**
    
    $$f_{xy} = \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$$
    
- **Differentiating $f$ by $y$, then by $x$:**
    
    $$f_{yx} = \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right)$$
    

#### Clairaut's Theorem (Symmetry of Mixed Partials)

If a function $f(x, y)$ and its partial derivatives are continuous on an open region, then the order of differentiation does not matter:

$$f_{xy} = f_{yx}$$

This mathematical symmetry serves as a critical built-in sanity check for structural, thermal, and electrical calculations.

### The Hessian Matrix

Engineers organize these four values into a symmetric matrix known as the **Hessian Matrix ($H_f$)**:

$$H_f = \begin{bmatrix} f_{xx} & f_{xy} \\ f_{yx} & f_{yy} \end{bmatrix}$$

The determinant of this matrix, along with the signs of the pure partials, tells engineers whether a specific operating condition is stable (a localized minimum/maximum) or unstable (a saddle point).

## Sample Problems

### Problem 1: Pure Mathematical Exercise

Compute all second-order partial derivatives for the function $f(x, y) = x^4y^2 - 3x^2y^5$ and verify Clairaut's Theorem.

#### **Step-by-Step Solution:**

1. **Compute First-Order Partials:**
    
    - $f_x = \frac{\partial}{\partial x}(x^4y^2 - 3x^2y^5) = 4x^3y^2 - 6xy^5$
        
    - $f_y = \frac{\partial}{\partial y}(x^4y^2 - 3x^2y^5) = 2x^4y - 15x^2y^4$
        
2. **Compute Pure Second Partials:**
    
    - $$f_{xx} = \frac{\partial}{\partial x}(4x^3y^2 - 6xy^5) = 12x^2y^2 - 6y^5$$
        
    - $$f_{yy} = \frac{\partial}{\partial y}(2x^4y - 15x^2y^4) = 2x^4 - 60x^2y^3$$
        
3. **Compute Mixed Partial Derivatives:**
    
    - $$f_{xy} = \frac{\partial}{\partial y}(4x^3y^2 - 6xy^5) = 8x^3y - 30xy^4$$
        
    - $$f_{yx} = \frac{\partial}{\partial x}(2x^4y - 15x^2y^4) = 8x^3y - 30xy^4$$
        

**Answer Verification:** Since $f_{xy} = f_{yx} = 8x^3y - 30xy^4$, Clairaut's Theorem is verified.

## Real-Life Engineering Application Problems

### Problem 2: [[Mechanical & Civil Engineering — Thermal Expansion Stability in Structural Columns]]
[[Mechanical & Civil Engineering — Thermal Expansion Stability in Structural Columns Solution]]


### Problem 3: [[Electrical & Computer Engineering — Gain Optimization in an Automatic Audio Amplifier Loop]]
[[Electrical & Computer Engineering — Gain Optimization in an Automatic Audio Amplifier Loop Solution]]
