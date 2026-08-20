# Skill 3: Green's Theorem — Flux Form

## Study Notes

### Definition of Flux

Flux measures the net rate at which a fluid, force, or vector field flows directly across a given boundary curve or surface. While circulation tracks how much a field pushes along a path in a tangential direction, flux calculates the perpendicular throughput crossing through the path. Mathematically, the line integral for two-dimensional outward flux across a closed curve $C$ is written as:

$$\oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds $$

where $\mathbf{n}$ is the outward-pointing unit normal vector to the curve.

### Green's Theorem as a Shortcut

Evaluating a flux line integral directly requires parameterizing every segment of a boundary path, computing normal vectors, and evaluating a dot product at every point. The flux form of Green's Theorem provides a powerful alternative by establishing a mathematical relationship between the flux across a closed boundary curve $C$ and a double integral over the two-dimensional region $R$ trapped inside that curve.

The formal theorem states:

$$\oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds = \oint_{C} P \, dy - Q \, dx = \iint_{R} \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} \right) dA $$

This mathematical conversion simplifies complicated flux line integrals by turning them into straightforward double integrals of the field's divergence across an area.

The integrand $\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}$ represents the 2D divergence ($\text{div } \mathbf{F}$). Divergence measures the expansion or contraction of the vector field at any single localized coordinate:

- **Positive Divergence:** The point acts as a **source** (more field lines are expanding outward than entering).
    
- **Negative Divergence:** The point acts as a **sink** (more field lines are converging inward than leaving).
    

Summing up all the local expansions and contractions inside the region tells us exactly how much net fluid or energy must be escaping through the outer boundary wall.

## Standard Mathematical Practice Problems

### Practice Problem 1

Compute the outward flux $\oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds$ using Green's Theorem, where $\mathbf{F}(x,y) = \langle 2x + y, 3y - x \rangle$ and $C$ is the positively oriented boundary of the rectangle defined by $0 \le x \le 2$ and $0 \le y \le 4$.

#### Step-by-Step Solution:

- **Step 1: Identify components and boundaries.**
    
    $$P(x,y) = 2x + y, \quad Q(x,y) = 3y - x$$
    
    The region $R$ has constant limits: $x \in [0, 2]$ and $y \in [0, 4]$.
    
- **Step 2: Calculate the partial derivatives.**
    
    $$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(2x + y) = 2$$
    
    $$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(3y - x) = 3$$
    
- **Step 3: Find the divergence integrand.**
    
    $$\text{div } \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} = 2 + 3 = 5$$
    
- **Step 4: Set up and evaluate the double integral.**
    
    $$\oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds = \int_{0}^{4} \int_{0}^{2} 5 \, dx \, dy$$
    
    $$\text{Inner Integral: } \int_{0}^{2} 5 \, dx = [5x]_0^2 = 10$$
    
    $$\text{Outer Integral: } \int_{0}^{4} 10 \, dy = [10y]_0^4 = 40$$
    

**Final Answer:** $\boxed{40}$

### Practice Problem 2

Compute the outward flux $\oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds$ using Green's Theorem, where $\mathbf{F}(x,y) = \langle x^2y, -xy^2 \rangle$ and $C$ is the positively oriented boundary of the square defined by $0 \le x \le 1$ and $0 \le y \le 1$.

#### Step-by-Step Solution:

- **Step 1: Identify components and boundaries.**
    
    $$P(x,y) = x^2y, \quad Q(x,y) = -xy^2$$
    
    The region $R$ has constant limits: $x \in [0, 1]$ and $y \in [0, 1]$.
    
- **Step 2: Calculate the partial derivatives.**
    
    $$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(x^2y) = 2xy$$
    
    $$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(-xy^2) = -2xy$$
    
- **Step 3: Find the divergence integrand.**
    
    $$\text{div } \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} = 2xy + (-2xy) = 0$$
    
- **Step 4: Set up and evaluate the double integral.**
    
    $$\oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds = \int_{0}^{1} \int_{0}^{1} 0 \, dx \, dy = 0$$
    

**Final Answer:** $\boxed{0}$

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Turbomachinery (Pump Rotor Fluid Throughput)]]
[[Turbomachinery (Pump Rotor Fluid Throughput) Solution]]

### Engineering Problem 2: [[Environmental Engineering (Urban Air Pollutant Trapping)]]
[[Environmental Engineering (Urban Air Pollutant Trapping) Solution]]
