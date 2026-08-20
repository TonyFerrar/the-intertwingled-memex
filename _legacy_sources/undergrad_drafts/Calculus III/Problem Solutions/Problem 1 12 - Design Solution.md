Here is the step-by-step solution to find and classify the critical points of the function:

$$f(x,y) = x^3 - 3x + y^2$$

### Step 1: Find the First Partial Derivatives

To find the critical points, we first compute the partial derivatives with respect to $x$ and $y$:

$$\frac{\partial f}{\partial x} = 3x^2 - 3$$

$$\frac{\partial f}{\partial y} = 2y$$

### Step 2: Find the Critical Points

Critical points occur where both first partial derivatives are equal to zero:

1. Set $\frac{\partial f}{\partial y} = 0$:
    
    $$2y = 0 \implies y = 0$$
    
2. Set $\frac{\partial f}{\partial x} = 0$:
    
    $$3x^2 - 3 = 0$$
    
    $$3(x^2 - 1) = 0$$
    
    $$x^2 = 1 \implies x = 1 \text{ or } x = -1$$
    

Combining these values, we get two critical points:

- **$(1, 0)$**
    
- **$(-1, 0)$**
    

### Step 3: Find the Second Partial Derivatives

To classify these points, we use the Second Derivative Test. We need the second-order partial derivatives:

$$f_{xx} = \frac{\partial^2 f}{\partial x^2} = 6x$$

$$f_{yy} = \frac{\partial^2 f}{\partial y^2} = 2$$

$$f_{xy} = \frac{\partial^2 f}{\partial y \partial x} = 0$$

### Step 4: Calculate the Discriminant $D$

The formula for the discriminant (Hessian determinant) is:

$$D = f_{xx}f_{yy} - (f_{xy})^2$$

Substituting our derivatives:

$$D = (6x)(2) - (0)^2 = 12x$$

### Step 5: Classify Each Critical Point

#### 1. Evaluate at $(1, 0)$:

- $D = 12(1) = 12$
    
- Since **$D > 0$** and **$f_{xx} = 6(1) = 6 > 0$**, this point is a **local minimum**.
    

#### 2. Evaluate at $(-1, 0)$:

- $D = 12(-1) = -12$
    
- Since **$D < 0$**, this point is a **saddle point**.
    

### Final Summary Table

|**Critical Point (x,y)**|**D**|**fxx​**|**Classification**|
|---|---|---|---|
|**$(1, 0)$**|$12$|$6$|**Local Minimum**|
|**$(-1, 0)$**|$-12$|$-6$|**Saddle Point**|