# Skill 1: Finding and Classifying Extrema for Multivariable Functions

## Essential Notes and Concepts

### 1. Introduction to Multivariable Extrema

In single-variable calculus, we look for local extrema by finding where the derivative equals zero ($f'(x) = 0$) and testing if those points are peaks or valleys using the second derivative. For a multivariable surface $z = f(x, y)$, we look for points where the tangent plane is completely flat. This means the surface is not changing in either the $x$-direction or the $y$-direction.

### 2. Locating Critical Points

Critical points are the baseline candidates for local maxima, local minima, or structural transition zones called saddle points. A point $(a, b)$ is a critical point of $f(x, y)$ if:

1. Both first partial derivatives vanish simultaneously (the gradient vector is zero):
    
    $$\nabla f(a,b) = \mathbf{0} \implies \frac{\partial f}{\partial x}(a,b) = 0 \quad \text{and} \quad \frac{\partial f}{\partial y}(a,b) = 0$$
    
2. Or, if one or both of the partial derivatives $\frac{\partial f}{\partial x}$ or $\frac{\partial f}{\partial y}$ are undefined at $(a, b)$.
    

### 3. The Second Derivative Test (The Discriminant)

Once a critical point $(a, b)$ is located, we must mathematically classify its geometric nature. To do this, we calculate the second-order partial derivatives ($f_{xx}$, $f_{yy}$, and $f_{xy}$) and construct the **Hessian discriminant** ($D$):

$$D = f_{xx}f_{yy} - (f_{xy})^2$$

We evaluate $D$ and $f_{xx}$ at the specific critical point $(a, b)$ and interpret the results using the following criteria:

- **Local Minimum:** If $D > 0$ and $f_{xx} > 0$.
    
    - _Geometric Meaning:_ $D > 0$ means the surface curves in the same direction along all axes (it is a bowl shape). Because $f_{xx} > 0$, it is concave up, meaning the point sits at the bottom of a valley.
        
- **Local Maximum:** If $D > 0$ and $f_{xx} < 0$.
    
    - _Geometric Meaning:_ The surface forms a dome shape. Because $f_{xx} < 0$, it is concave down, meaning the point sits at the peak of a hill.
        
- **Saddle Point:** If $D < 0$.
    
    - _Geometric Meaning:_ The surface curves upward in one direction but downward in another direction (resembling a riding saddle or a mountain pass). It is a maximum along one cross-section and a minimum along another.
        
- **Inconclusive:** If $D = 0$.
    
    - _Geometric Meaning:_ The test fails to provide information. The surface might be a minimum, maximum, or a flat trough, requiring higher-order derivatives or geometric inspection to classify.
        

## Standard Math Sample Problems

### Sample Problem 1.1: Multi-Point Classification

Find and classify all critical points of the function:

$$f(x, y) = 2x^3 - 6x + 2y^2 - 4y$$

#### Solution:

**Step 1: Compute the first partial derivatives.**

$$\frac{\partial f}{\partial x} = 6x^2 - 6$$

$$\frac{\partial f}{\partial y} = 4y - 4$$

**Step 2: Find the critical points.**

Set both partial derivatives equal to zero:

1. $4y - 4 = 0 \implies 4y = 4 \implies y = 1$
    
2. $6x^2 - 6 = 0 \implies 6(x^2 - 1) = 0 \implies x = 1 \text{ or } x = -1$
    

Combining these values gives two critical points: **$(1, 1)$** and **$(-1, 1)$**.

**Step 3: Compute the second partial derivatives.**

$$f_{xx} = \frac{\partial^2 f}{\partial x^2} = 12x$$

$$f_{yy} = \frac{\partial^2 f}{\partial y^2} = 4$$

$$f_{xy} = \frac{\partial^2 f}{\partial y \partial x} = 0$$

**Step 4: Set up the discriminant equation.**

$$D = f_{xx}f_{yy} - (f_{xy})^2 = (12x)(4) - (0)^2 = 48x$$

**Step 5: Classify each critical point.**

- **For $(1, 1)$:**
    
    - $D = 48(1) = 48 > 0$
        
    - $f_{xx} = 12(1) = 12 > 0$
        
    - Since $D > 0$ and $f_{xx} > 0$, the point **$(1, 1)$ is a local minimum**.
        
- **For $(-1, 1)$:**
    
    - $D = 48(-1) = -48 < 0$
        
    - Since $D < 0$, the point **$(-1, 1)$ is a saddle point**.
        

### Sample Problem 1.2: Interaction Terms

Find and classify the critical points of the function:

$$f(x, y) = x^2 - 4xy + 5y^2 - 2x$$

#### Solution:

**Step 1: Compute the first partial derivatives.**

$$\frac{\partial f}{\partial x} = 2x - 4y - 2$$

$$\frac{\partial f}{\partial y} = -4x + 10y$$

**Step 2: Find the critical points.**

Set both equations to zero to form a linear system:

1. $2x - 4y = 2$
    
2. $-4x + 10y = 0 \implies 10y = 4x \implies x = 2.5y$
    

Substitute $x = 2.5y$ into the first equation:

$$2(2.5y) - 4y = 2 \implies 5y - 4y = 2 \implies y = 2$$

Now solve for $x$:

$$x = 2.5(2) = 5$$

This yields exactly one critical point: **$(5, 2)$**.

**Step 3: Compute the second partial derivatives and discriminant.**

$$f_{xx} = 2, \quad f_{yy} = 10, \quad f_{xy} = -4$$

$$D = f_{xx}f_{yy} - (f_{xy})^2 = (2)(10) - (-4)^2 = 20 - 16 = 4$$

**Step 4: Classify the point.**

- At $(5, 2)$, $D = 4 > 0$ and $f_{xx} = 2 > 0$.
    
- Therefore, the point **$(5, 2)$ is a local minimum**.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Wing Design Optimization]]
[[Aerospace Wing Design Optimization Solution]]

### Engineering Problem 2: [[Structural Mechanics and Structural Buckling Analysis]]
[[Structural Mechanics and Structural Buckling Analysis Solution]]
