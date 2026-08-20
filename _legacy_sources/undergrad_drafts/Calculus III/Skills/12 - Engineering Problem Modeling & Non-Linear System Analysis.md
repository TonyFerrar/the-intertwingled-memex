# Skill 4: Engineering Problem Modeling & Non-Linear System Analysis

## Essential Notes and Concepts

### 1. Translating Word Problems to Math Models

The most vital engineering capability is translation: taking a set of verbal physical limits and converting them into a rigorous optimization model.

When analyzing a real-life prompt, ask two distinct questions:

1. **"What am I trying to maximize or minimize?"** This defines your **Objective Function** ($f$). It usually represents costs, material usage, error rates, or energy losses.
    
2. **"What is strictly locking my variables together?"** This defines your **Constraint Equation** ($g = k$). It usually represents fixed performance metrics, structural boundaries, law-of-physics limitations, or fixed material volumes.
    

### 2. Overcoming Non-Linear Multiplier Algebra

Standard calculus textbook exercises usually lead to simple linear systems. However, real engineering systems—governed by geometry, fluid flow, or electronics—produce **non-linear multi-variable systems**.

When handling these equations via Lagrange multipliers, you will frequently get variables trapped in higher exponents or fractional expressions. Keep these rules in mind to avoid common algebraic traps:

- **Avoid blind division:** Before dividing both sides of an equation by a variable (like $x$ or $y$), you must explicitly check if that variable can equal zero. In engineering, physical boundaries (like width or length) are strictly greater than zero ($x > 0$), which lets you safely divide.
    
- **Isolate $\lambda$ first:** The most dependable way to dismantle a non-linear system is to solve every component equation for $\lambda$, and then set those coordinate fractions equal to one another.
    

## Standard Math Sample Problems

### Sample Problem 4.1: Non-Linear Coordinate Elimination

Maximize the objective function $f(x, y) = x^2y$ subject to the non-linear constraint $g(x, y) = x^2 + 2y^2 = 6$, assuming $x, y > 0$.

#### Solution:

**Step 1: Compute partial derivatives.**

$$\frac{\partial f}{\partial x} = 2xy, \quad \frac{\partial f}{\partial y} = x^2$$

$$\frac{\partial g}{\partial x} = 2x, \quad \frac{\partial g}{\partial y} = 4y$$

**Step 2: Set up the component equations.**

$$\hat{i}: 2xy = \lambda(2x) \implies 2xy = 2\lambda x$$

$$\hat{j}: x^2 = \lambda(4y) \implies x^2 = 4\lambda y$$

**Step 3: Solve for $\lambda$ and eliminate.**

From the $\hat{i}$ equation, since $x > 0$, we can divide both sides by $2x$:

$$\lambda = y$$

Now substitute $\lambda = y$ directly into the $\hat{j}$ component equation:

$$x^2 = 4(y)y \implies x^2 = 4y^2$$

**Step 4: Substitute into the constraint equation.**

Replace $x^2$ with $4y^2$ in our constraint equation $x^2 + 2y^2 = 6$:

$$(4y^2) + 2y^2 = 6 \implies 6y^2 = 6 \implies y^2 = 1 \implies y = 1$$

Since $x^2 = 4y^2$, we find $x^2 = 4(1) = 4 \implies x = 2$.

Our candidate maximum point is **$(2, 1)$**.

**Step 5: Evaluate.**

$$f(2, 1) = (2)^2(1) = 4$$

## Real-Life Engineering Application Problems

### Engineering Problem 4: [[Hydraulic Channel Geometry and Material Cost Minimization]]
[[Hydraulic Channel Geometry and Material Cost Minimization Solution]]
