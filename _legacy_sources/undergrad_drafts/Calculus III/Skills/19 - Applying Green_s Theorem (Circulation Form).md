# Skill 2: Green's Theorem — Circulation Form

## Study Notes

### Definition of Circulation

Circulation is defined as the vector line integral of a vector field evaluated along an oriented closed curve $C$. It measures the tendency of a vector field to move in the exact direction of that closed curve $C$. If the vector field represents fluid velocity, a non-zero circulation indicates that the fluid is net-rotating or swirling along the path of the loop.

### Green's Theorem as a Shortcut

Green's Theorem (circulation form) acts as a mathematical bridge between a one-dimensional boundary of a shape and its two-dimensional interior. This theorem transforms difficult line integrals along a closed loop into simpler double integrals over the region enclosed by that loop.

The mathematical relationship is written as:

$$\oint_{C} \mathbf{F} \cdot d\mathbf{r} = \oint_{C} P \, dx + Q \, dy = \iint_{R} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dA \text{ [cite: 382, 383, 388]}$$

The term $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$ is the macroscopic expression of the 2D curl. It calculates the microscopic, localized rotation at every single point inside the region $R$. Summing up all these tiny local rotations across the area gives the exact same result as tracking the net circulation along the outer boundary line $C$.

## Standard Mathematical Practice Problems

### Practice Problem 1

Compute the line integral $\oint_{C} \mathbf{F} \cdot d\mathbf{r}$ using Green's Theorem, where $\mathbf{F}(x,y) = \langle y^2, 2xy + x \rangle$ and $C$ is the positively oriented boundary of the rectangle defined by $0 \le x \le 2$ and $0 \le y \le 3$.

#### Step-by-Step Solution:

- **Step 1: Identify components and boundaries.**
    
    $$P(x,y) = y^2, \quad Q(x,y) = 2xy + x$$
    
    The region $R$ has constant limits: $x \in [0, 2]$ and $y \in [0, 3]$.
    
- **Step 2: Calculate the partial derivatives.**
    
    $$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(y^2) = 2y$$
    
    $$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(2xy + x) = 2y + 1$$
    
- **Step 3: Find the 2D curl integrand.**
    
    $$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = (2y + 1) - 2y = 1$$
    
- **Step 4: Set up and evaluate the double integral.**
    
    $$\oint_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{0}^{3} \int_{0}^{2} 1 \, dx \, dy$$
    
    $$\text{Inner Integral: } \int_{0}^{2} 1 \, dx = [x]_0^2 = 2$$
    
    $$\text{Outer Integral: } \int_{0}^{3} 2 \, dy = [2y]_0^3 = 6$$
    

**Final Answer:** $\boxed{6}$

### Practice Problem 2

Compute the line integral $\oint_{C} \mathbf{F} \cdot d\mathbf{r}$ using Green's Theorem, where $\mathbf{F}(x,y) = \langle -y^3, x^3 \rangle$ and $C$ is the positively oriented boundary of the square defined by $0 \le x \le 1$ and $0 \le y \le 1$.

#### Step-by-Step Solution:

- **Step 1: Identify components and boundaries.**
    
    $$P(x,y) = -y^3, \quad Q(x,y) = x^3$$
    
    The region $R$ has constant limits: $x \in [0, 1]$ and $y \in [0, 1]$.
    
- **Step 2: Calculate the partial derivatives.**
    
    $$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(-y^3) = -3y^2$$
    
    $$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(x^3) = 3x^2$$
    
- **Step 3: Find the 2D curl integrand.**
    
    $$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 3x^2 - (-3y^2) = 3x^2 + 3y^2$$
    
- **Step 4: Set up and evaluate the double integral.**
    
    $$\oint_{C} \mathbf{F} \cdot d\mathbf{r} = \int_{0}^{1} \int_{0}^{1} (3x^2 + 3y^2) \, dx \, dy$$
    
    $$\text{Inner Integral: } \int_{0}^{1} (3x^2 + 3y^2) \, dx = \left[ x^3 + 3xy^2 \right]_0^1 = 1 + 3y^2$$
    
    $$\text{Outer Integral: } \int_{0}^{1} (1 + 3y^2) \, dy = \left[ y + y^3 \right]_0^1 = (1 + 1) - 0 = 2$$
    

**Final Answer:** $\boxed{2}$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerodynamics (Airfoil Lift Generation)]]
[[Aerodynamics (Airfoil Lift Generation) Solution]]


### Engineering Problem 2: [[Wind Turbine Siting (Turbulence and Eddy Detection)]]
[[Wind Turbine Siting (Turbulence and Eddy Detection) Solution]]
