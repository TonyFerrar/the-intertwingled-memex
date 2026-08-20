Here is the step-by-step solution to find and classify the critical points of the function:

$$f(x,y) = y^3 - 3xy + 12x$$

### Step 1: Find the First Partial Derivatives

First, we find the first-order partial derivatives with respect to $x$ and $y$:

$$\frac{\partial f}{\partial x} = -3y + 12$$

$$\frac{\partial f}{\partial y} = 3y^2 - 3x$$

### Step 2: Find the Critical Points

Critical points occur where all first partial derivatives vanish:

1. Set $\frac{\partial f}{\partial x} = 0$:
    
    $$-3y + 12 = 0 \implies 3y = 12 \implies y = 4$$
    
2. Set $\frac{\partial f}{\partial y} = 0$ and substitute $y = 4$:
    
    $$3(4)^2 - 3x = 0$$
    
    $$3(16) - 3x = 0$$
    
    $$48 - 3x = 0 \implies 3x = 48 \implies x = 16$$
    

This gives us exactly one critical point:

- **$(16, 4)$**
    

### Step 3: Find the Second Partial Derivatives

To classify this point, we use the second-derivative test:

$$f_{xx} = \frac{\partial^2 f}{\partial x^2} = 0$$

$$f_{yy} = \frac{\partial^2 f}{\partial y^2} = 6y$$

$$f_{xy} = \frac{\partial^2 f}{\partial y \partial x} = -3$$

### Step 4: Calculate the Discriminant $D$

Using the discriminant formula:

$$D = f_{xx}f_{yy} - (f_{xy})^2$$

Substituting our algebraic partial derivatives:

$$D = (0)(6y) - (-3)^2 = -9$$

### Step 5: Classify the Critical Point

Now we evaluate the discriminant $D$ at our critical point $(16, 4)$:

- $D = -9$
    

Since **$D < 0$**, the second-derivative test tells us that this point is a **saddle point**.

### Final Summary Table

|**Critical Point (x,y)**|**D**|**fxx​**|**Classification**|
|---|---|---|---|
|**$(16, 4)$**|$-9$|$0$|**Saddle Point**|