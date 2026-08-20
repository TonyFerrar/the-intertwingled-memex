# Skill 2: Executing Boundary-Value Optimization on Closed Regions

## Essential Notes and Concepts

### 1. The Extreme Value Theorem for Multivariable Functions

In single-variable calculus, the Extreme Value Theorem guarantees that a continuous function on a closed, bounded interval $[a, b]$ must have an absolute maximum and an absolute minimum value. These values occur either at critical points inside the interval or at the endpoints ($a$ or $b$).

Similarly, for a multivariable function $z = f(x, y)$, if the domain is a **closed region** (meaning it includes its boundary line) and a **bounded region** (meaning it is finite in size, like a circle, triangle, or square), the function is guaranteed to achieve an **absolute maximum** and an **absolute minimum** value somewhere on or within that region.

### 2. The Multi-Tiered Candidate Search Strategy

Because absolute extrema can hide either inside the shape or exactly along the perimeter lines, you cannot rely purely on setting the gradient to zero. You must implement a structured three-step search to find all candidate points:

- **Tier 1: The Interior Search**
    
    Find the first partial derivatives ($\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$) and set them to zero to locate interior critical points. **Crucial rule:** Discard any critical points that fall outside the boundary of your defined region.
    
- **Tier 2: The Boundary Edge Search**
    
    The boundary of your region is composed of paths or lines (e.g., the four sides of a square or the three sides of a triangle). For each individual edge, substitute the equation of that boundary line into your original function. This transforms your multivariable function into a single-variable function restricted to that edge. Take its derivative, find where it equals zero, and locate candidate points along the perimeter.
    
- **Tier 3: The Vertex Check**
    
    You must explicitly include the absolute geometric corners (vertices) of the region's boundary as candidate points. Extrema frequently occur at sharp corners where boundary equations transition.
    

### 3. The Global Comparison Table

Once you have gathered all candidates from Tiers 1, 2, and 3, you evaluate the original function $f(x, y)$ at every single candidate point.

- The absolute largest resulting value is your **Absolute Maximum**.
    
- The absolute smallest resulting value is your **Absolute Minimum**.
    

## Standard Math Sample Problems

### Sample Problem 2.1: Bounded Triangle Region

Find the absolute maximum and minimum values of:

$$f(x, y) = 2x + 3y$$

on the closed region $R$ bounded by the triangle with vertices $(0,0)$, $(2,0)$, and $(0,2)$.

#### Solution:

**Step 1: Interior Search.**

$$\frac{\partial f}{\partial x} = 2 \neq 0, \quad \frac{\partial f}{\partial y} = 3 \neq 0$$

Because the partial derivatives are constants and never equal zero, there are **no interior critical points**.

**Step 2: Boundary Edge Search.**

- **Edge 1: Bottom edge ($y = 0$ for $0 \le x \le 2$)**
    
    Substitute $y = 0$: $g_1(x) = f(x, 0) = 2x$.
    
    Derivative: $g_1'(x) = 2 \neq 0$. No critical points along this edge.
    
- **Edge 2: Left edge ($x = 0$ for $0 \le y \le 2$)**
    
    Substitute $x = 0$: $g_2(y) = f(0, y) = 3y$.
    
    Derivative: $g_2'(y) = 3 \neq 0$. No critical points along this edge.
    
- **Edge 3: Hypotenuse line connecting $(2,0)$ and $(0,2)$**
    
    The line equation is $y = -x + 2$ for $0 \le x \le 2$.
    
    Substitute $y$: $g_3(x) = 2x + 3(-x + 2) = 2x - 3x + 6 = -x + 6$.
    
    Derivative: $g_3'(x) = -1 \neq 0$. No critical points along this edge.
    

**Step 3: Vertex Check & Evaluation.**

Since there are no interior or edge critical points, the absolute extrema _must_ occur at the geometric corners of the triangle:

1. At $(0, 0)$: $f(0, 0) = 2(0) + 3(0) = 0$
    
2. At $(2, 0)$: $f(2, 0) = 2(2) + 3(0) = 4$
    
3. At $(0, 2)$: $f(0, 2) = 2(0) + 3(2) = 6$
    

#### Conclusion:

- **Absolute Maximum value is $6$** at $(0, 2)$.
    
- **Absolute Minimum value is $0$** at $(0, 0)$.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Thermal Management in Microchip Design]]
[[Thermal Management in Microchip Design Solution]]

### Engineering Problem 2: [[Load Distribution on a Triangular Support Slab]]
[[Load Distribution on a Triangular Support Slab Solution]]
