# Skill 1: The Conservative Field Test

## Study Notes

### Definition of a Conservative Field

A two-dimensional vector field $\mathbf{F}(x,y)$ defined on a region in the plane is called **conservative** if it can be expressed as the gradient of a scalar potential function $f(x,y)$. Mathematically:

$$\mathbf{F} = \nabla f = \left\langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right\rangle$$

In physics and engineering, if a force field is conservative, it implies that the work done moving an object between two points depends only on those endpoints, not on the path taken. This represents the absolute preservation of mechanical energy within the system.

### The 4-Step Conservative Field Test Process

To determine whether a given vector field is conservative, apply the following rigorous procedure:

1. **Write out the components:** Express the vector field in its standard component form $\mathbf{F}(x,y) = \langle P(x,y), Q(x,y) \rangle$.
    
2. **Compute the cross-partial derivatives:** Find the partial derivative of the horizontal component with respect to $y$, and the vertical component with respect to $x$:
    
    $$P_y = \frac{\partial P}{\partial y} \quad \text{and} \quad Q_x = \frac{\partial Q}{\partial x} \text{ }$$
    
3. **Compare the partial derivatives:** Check whether the values match:
    
    - If $P_y \neq Q_x$, the vector field is **not conservative**.
        
    - If $P_y = Q_x$, proceed to the next step.
        
4. **Evaluate the domain:** Check whether the region where the field is defined is **simply connected** (meaning it contains no geometric holes).
    
    - If the domain is simply connected and $P_y = Q_x$, the field is globally **conservative**.
        
    - If the domain contains holes, the test is inconclusive without further boundary analysis.
        

### The Closed-Loop Property

If a vector field successfully passes the test and is determined to be conservative on a simply connected domain, it automatically satisfies the path-independence property. This means that the line integral around any simple closed curve $C$ within that domain is exactly zero:

$$\oint_C \mathbf{F} \cdot d\mathbf{r} = 0 \text{ [cite: 359]}$$

## Standard Mathematical Practice Problems

### Practice Problem 1

Determine whether the vector field $\mathbf{F}(x,y) = \langle 3x^2y, x^3 + 2y \rangle$ defined on $\mathbb{R}^2$ is conservative.

#### Step-by-Step Solution:

- **Step 1:** Extract components:
    
    $$P(x,y) = 3x^2y, \quad Q(x,y) = x^3 + 2y$$
    
- **Step 2:** Compute partial derivatives:
    
    $$P_y = \frac{\partial}{\partial y}(3x^2y) = 3x^2$$
    
    $$Q_x = \frac{\partial}{\partial x}(x^3 + 2y) = 3x^2$$
    
- **Step 3:** Compare results:
    
    $$P_y = Q_x = 3x^2$$
    
- **Step 4:** Check the domain:
    
    The field is defined over the entire plane $\mathbb{R}^2$, which contains no gaps or holes and is therefore simply connected.
    

**Conclusion:** The vector field $\mathbf{F}(x,y)$ is **conservative**.

### Practice Problem 2

Determine whether the vector field $\mathbf{F}(x,y) = \langle 2xy, x^2 + x \rangle$ defined on $\mathbb{R}^2$ is conservative.

#### Step-by-Step Solution:

- **Step 1:** Extract components:
    
    $$P(x,y) = 2xy, \quad Q(x,y) = x^2 + x$$
    
- **Step 2:** Compute partial derivatives:
    
    $$P_y = \frac{\partial}{\partial y}(2xy) = 2x$$
    
    $$Q_x = \frac{\partial}{\partial x}(x^2 + x) = 2x + 1$$
    
- **Step 3:** Compare results:
    
    $$P_y \neq Q_x \quad (2x \neq 2x + 1)$$
    

**Conclusion:** The vector field $\mathbf{F}(x,y)$ is **not conservative**.

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Circuit Design (Voltage Field Validation)]]
[[Electrical Circuit Design (Voltage Field Validation) Solution]]

### Engineering Problem 2: [[Aerospace Trajectory (Satellite Orbit Stability)]]
[[Aerospace Trajectory (Satellite Orbit Stability) Solution]]
