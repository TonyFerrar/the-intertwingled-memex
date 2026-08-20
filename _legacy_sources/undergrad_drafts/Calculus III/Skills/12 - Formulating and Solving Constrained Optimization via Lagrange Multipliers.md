# Skill 3: Constrained Optimization using Lagrange Multipliers

## Essential Notes and Concepts

### 1. The Core Geometric Intuition

In many engineering and physical problems, we are tasked with maximizing or minimizing an **objective function** $f(x, y)$ or $f(x, y, z)$. However, we are not free to choose _any_ values for our independent variables. Instead, our choices must lie exactly along a specific path, surface, or restriction described by a **constraint equation**, $g(x, y) = k$.

If you plot the level curves (contours) of the objective function $f(x, y)$ alongside the fixed constraint curve $g(x, y) = k$, you will notice that an extreme value (maximum or minimum) occurs at a point where the constraint curve is perfectly **tangent** to one of the level curves.

Because they are tangent at this optimal point, the line perpendicular to the level curve of $f$ is also perpendicular to the constraint curve $g$. In vector calculus, the gradient vector ($\nabla$) is always perpendicular to level curves. Therefore, at the optimum point, the gradient vector of $f$ and the gradient vector of $g$ must point along the exact same line. This means they are **parallel**:

$$\nabla f = \lambda \nabla g$$

The scalar variable **$\lambda$** (the Greek letter lambda) is called the **Lagrange Multiplier**.

### 2. Physical Meaning of the Multiplier ($\lambda$)

Beyond serving as an algebraic tool, $\lambda$ has a powerful real-world meaning. It represents the **shadow price** or **sensitivity** of the system.

Specifically, $\lambda$ quantifies the rate at which the optimal value of your objective function changes with respect to a unit change or relaxation in the constraint value ($k$):

$$\lambda = \frac{\partial f_{\text{opt}}}{\partial k}$$

### 3. Step-by-Step Problem Solving Framework

To find the constrained extrema for a multivariable system, follow this sequence:

1. **Identify and Write Down the Equations:** Isolate the objective function $f(x, y, z)$ and move all constants to one side to define the constraint function $g(x, y, z) = k$.
    
2. **Compute Gradients:** Find the partial derivatives to construct $\nabla f$ and $\nabla g$.
    
3. **Set Up the Component Equations:** Equate the vector components ($\hat{i}, \hat{j}, \hat{k}$) to establish a system of equations:
    
    $$\hat{i}: \frac{\partial f}{\partial x} = \lambda \frac{\partial g}{\partial x}$$
    
    $$\hat{j}: \frac{\partial f}{\partial y} = \lambda \frac{\partial g}{\partial y}$$
    
    $$\hat{k}: \frac{\partial f}{\partial z} = \lambda \frac{\partial g}{\partial z}$$
    
4. **Eliminate $\lambda$:** Solve for $\lambda$ in terms of the coordinates to establish a direct geometric relationship between your variables.
    
5. **Substitute into the Constraint:** Plug this variable relationship into the original equation $g = k$ to solve for the exact coordinate values.
    
6. **Evaluate:** Test the resulting points back in $f$ to determine which configuration yields the absolute maximum or minimum.
    

## Standard Math Sample Problems

### Sample Problem 3.1: Three-Variable Constraint Optimization

Minimize the function:

$$f(x, y, z) = x^2 + y^2 + z^2$$

subject to the linear plane constraint:

$$g(x, y, z) = x + y + z = 12$$

#### Solution:

**Step 1: Compute partial derivatives.**

$$\nabla f = \langle 2x, 2y, 2z \rangle \quad \text{and} \quad \nabla g = \langle 1, 1, 1 \rangle$$

**Step 2: Set up the component equations using $\nabla f = \lambda \nabla g$.**

$$\hat{i}: 2x = \lambda \implies x = \frac{\lambda}{2}$$

$$\hat{j}: 2y = \lambda \implies y = \frac{\lambda}{2}$$

$$\hat{k}: 2z = \lambda \implies z = \frac{\lambda}{2}$$

**Step 3: Eliminate $\lambda$ to establish variable relationships.**

Since all three coordinate variables equal $\frac{\lambda}{2}$, we can conclude:

$$x = y = z$$

**Step 4: Substitute into the constraint equation.**

$$x + x + x = 12 \implies 3x = 12 \implies x = 4$$

Since $x = y = z$, our candidate optimal coordinate point is **$(4, 4, 4)$**.

**Step 5: Evaluate the constrained minimum value.**

$$f(4, 4, 4) = 4^2 + 4^2 + 4^2 = 16 + 16 + 16 = 48$$

## Real-Life Engineering Application Problems

### Engineering Problem 3: [[Aerospace Trajectory Optimization]]
[[Aerospace Trajectory Optimization Solution]]
