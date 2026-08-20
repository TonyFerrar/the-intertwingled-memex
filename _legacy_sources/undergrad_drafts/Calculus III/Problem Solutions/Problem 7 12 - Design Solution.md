Here is the step-by-step solution using the method of **Lagrange Multipliers** to find the maximum and minimum values of the function:

$$f(x,y) = xy$$

subject to the constraint:

$$g(x,y) = x^2 + y^2 = 8$$

### Step 1: Set up the Lagrange Multiplier Equation

At an optimum point, the gradient vectors of the objective function and the constraint function must be parallel:

$$\nabla f = \lambda \nabla g$$

Let's find the first partial derivatives:

- **Objective function $f(x,y)$:**
    
    $$\frac{\partial f}{\partial x} = y, \quad \frac{\partial f}{\partial y} = x$$
    
- **Constraint function $g(x,y)$:**
    
    $$\frac{\partial g}{\partial x} = 2x, \quad \frac{\partial g}{\partial y} = 2y$$
    

Now, equate the vector components ($\hat{i}$ and $\hat{j}$):

$$\hat{i}: y = \lambda(2x) \implies y = 2\lambda x$$

$$\hat{j}: x = \lambda(2y) \implies x = 2\lambda y$$

### Step 2: Solve the System for $x$ and $y$

We can eliminate $\lambda$ by dividing the two component equations:

$$\frac{y}{x} = \frac{2\lambda x}{2\lambda y} \implies \frac{y}{x} = \frac{x}{y} \quad (\text{assuming } x, y, \lambda \ne 0)$$

Cross-multiplying gives:

$$y^2 = x^2$$

_(Note: If $\lambda = 0$, then $x=0$ and $y=0$, but the origin $(0,0)$ does not satisfy the constraint $x^2 + y^2 = 8$. Thus, our assumption holds true)._

### Step 3: Substitute into the Constraint Equation

Now, we substitute $y^2 = x^2$ into our constraint equation $x^2 + y^2 = 8$:

$$x^2 + x^2 = 8$$

$$2x^2 = 8$$

$$x^2 = 4 \implies x = 2 \text{ or } x = -2$$

Since $y^2 = x^2$, we have $y^2 = 4$, which means $y = 2 \text{ or } y = -2$.

This gives us four distinct candidate points:

1. **$(2, 2)$**
    
2. **$(-2, -2)$**
    
3. **$(2, -2)$**
    
4. **$(-2, 2)$**
    

### Step 4: Evaluate the Function at the Candidate Points

Now we plug each point back into the objective function $f(x,y) = xy$ to find our extrema:

- $$f(2, 2) = (2)(2) = 4$$
    
- $$f(-2, -2) = (-2)(-2) = 4$$
    
- $$f(2, -2) = (2)(-2) = -4$$
    
- $$f(-2, 2) = (-2)(2) = -4$$
    

### Final Answer

- **Absolute Maximum Value:** **$4$**, which occurs at the points **$(2, 2)$** and **$(-2, -2)$**.
    
- **Absolute Minimum Value:** **$-4$**, which occurs at the points **$(2, -2)$** and **$(-2, 2)$**.