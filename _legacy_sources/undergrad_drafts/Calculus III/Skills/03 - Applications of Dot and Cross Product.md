# Skill 3: Applications of Dot and Cross Product

## Notes & Core Concepts

In engineering, mathematical abstractions like the dot product and cross product map directly to physical realities. **Skill 3** brings everything together by using these vector operations to analyze energy, rotational mechanics, and structural forces.

### 1. The Dot Product Application: Mechanical Work ($W$)

Work is defined as the measure of energy transfer that occurs when an object is moved over a distance by an external force.

- When a force vector $\vec{F}$ acts on an object causing it to displace along a straight-line vector $\vec{d}$, the work done is a **scalar quantity** computed via the dot product:
    
    $$W = \vec{F} \cdot \vec{d}$$
    
- **Geometric Interpretation:** $W = |\vec{F}||\vec{d}|\cos\theta$. Only the component of the force vector that points _parallel_ to the direction of motion does work. Forces applied completely perpendicular ($\theta = 90^\circ$) to the direction of movement do exactly zero work.
    

### 2. The Cross Product Application: Torque ($\vec{\tau}$)

Torque (or moment of force) measures the tendency of a force vector to cause an object to rotate around a specific pivot point or axis.

- Torque is a **vector quantity** calculated using the cross product:
    
    $$\vec{\tau} = \vec{r} \times \vec{F}$$
    
    Where $\vec{r}$ is the position vector pointing from the pivot point to the location where the force is applied.
    
- **Direction:** The torque vector points perpendicular to both the position and force vectors. Its direction establishes the _axis of rotation_ using the **Right-Hand Rule** (if your right fingers curl in the direction of the rotation, your thumb points along the torque vector).
    
- **Magnitude:** $|\vec{\tau}| = |\vec{r}||\vec{F}|\sin\theta$. Torque is maximized when the force is applied completely perpendicular to the lever arm ($\theta = 90^\circ$).
    

### Standard Engineering Units

- **Force ($\vec{F}$):** Newtons ($\text{N} = \text{kg} \cdot \text{m/s}^2$)
    
- **Work ($W$):** Joules ($\text{J} = \text{N} \cdot \text{m}$)
    
- **Torque ($\vec{\tau}$):** Newton-meters ($\text{N} \cdot \text{m}$)
    

## Guided Notes Sample Problems

### Sample Problem 1: Work Done along a Vector Coordinate Path

**Problem:** A constant force $\vec{F} = 3\hat{i} + 2\hat{j} + 4\hat{k}\text{ N}$ acts on an object, moving it from point $A(1, 1, 1)$ to point $B(4, 3, 2)$, where coordinates are in meters. Find the work done.

**Solution:**

1. First, find the displacement vector $\vec{d} = \vec{AB}$ by subtracting coordinates ($B - A$):
    
    $$\vec{d} = \langle 4-1, 3-1, 2-1 \rangle = \langle 3, 2, 1 \rangle\text{ m}$$
    
2. Calculate work using the dot product ($W = \vec{F} \cdot \vec{d}$):
    
    $$W = (3)(3) + (2)(2) + (4)(1)$$
    
    $$W = 9 + 4 + 4 = 17\text{ J}$$
    

### Sample Problem 2: 3D Torque Matrix Determinant

**Problem:** A force $\vec{F} = \langle 0, 0, 50 \rangle\text{ N}$ is applied at the end of a lever beam. The position vector from the pivot to the application point is $\vec{r} = \langle 0.5, 0.2, 0 \rangle\text{ m}$. Find the torque vector.

**Solution:**

1. Set up the cross product determinant ($\vec{\tau} = \vec{r} \times \vec{F}$):
    
    $$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 0.5 & 0.2 & 0 \\ 0 & 0 & 50 \end{vmatrix}$$
    
2. Expand along the top row:
    
    $$\vec{\tau} = \hat{i}\big((0.2)(50) - (0)(0)\big) - \hat{j}\big((0.5)(50) - (0)(0)\big) + \hat{k}\big((0.5)(0) - (0.2)(0)\big)$$
    
    $$\vec{\tau} = 10\hat{i} - 25\hat{j} + 0\hat{k} = \langle 10, -25, 0 \rangle\text{ N}\cdot\text{m}$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace & Wind Turbine Aerodynamic Efficiency (Work)]]
[[Aerospace & Wind Turbine Aerodynamic Efficiency (Work) Solution]]


### Engineering Problem 2: [[Robotics and Structural Joint Stress (Torque)]]
[[Robotics and Structural Joint Stress (Torque) Solution]]
