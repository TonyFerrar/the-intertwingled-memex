# Skill 2: Calculating the Distance Between a Point and a Line

## Essential Concepts & Formulas

Finding the shortest distance from a point anywhere in space to a line in 3D requires computing the perpendicular distance. Unlike 2D geometry, we cannot easily use a simple slope formula. Instead, we use the geometric properties of the vector cross product, which calculates the area of a parallelogram spanned by two vectors.

### The Distance Formula

For a known point $P$ sitting directly on the line, an external point $M$ anywhere in space, and a direction vector $\vec{v}$ parallel to the line, the shortest distance $d$ is given by:

$$d = \frac{||\vec{PM} \times \vec{v}||}{||\vec{v}||}$$

### Why This Formula Works Mathematically

1. The vector $\vec{PM}$ points from the line to the external point.
    
2. The magnitude of the cross product, $||\vec{PM} \times \vec{v}||$, represents the area of a parallelogram formed by $\vec{PM}$ and $\vec{v}$.
    
3. The area of a parallelogram is also calculated as $\text{Base} \times \text{Height}$, where the base is $||\vec{v}||$ and the height is the perpendicular distance $d$.
    
4. Equating the two area descriptions ($\text{Area} = ||\vec{v}|| \cdot d = ||\vec{PM} \times \vec{v}||$) and solving for $d$ yields our formula.
    

## Guided Sample Problem

### Problem Statement

Find the shortest distance between the external point $M = (1, 1, 3)$ and the line given by the symmetric equation:

$$\frac{x - 3}{4} = \frac{y + 1}{2} = z - 3$$

### Step-by-Step Solution

#### 1. Extract the Line's Data

From the symmetric denominators and constants, we extract:

- **A point on the line ($P$):** $(3, -1, 3)$
    
- **The direction vector ($\vec{v}$):** $\langle 4, 2, 1 \rangle$ _(since $z - 3$ is over an implied 1)_
    

#### 2. Construct the Displacement Vector $\vec{PM}$

Find the vector connecting our line point $P$ to our external point $M$:

$$\vec{PM} = \langle 1 - 3, \ 1 - (-1), \ 3 - 3 \rangle = \langle -2, 2, 0 \rangle$$

#### 3. Compute the Cross Product $\vec{PM} \times \vec{v}$

Set up the determinant matrix using the standard cross-product layout:

$$\vec{PM} \times \vec{v} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -2 & 2 & 0 \\ 4 & 2 & 1 \end{vmatrix}$$

Expand along the top row:

$$\vec{PM} \times \vec{v} = \hat{i}(2(1) - 0(2)) - \hat{j}((-2)(1) - 0(4)) + \hat{k}((-2)(2) - 2(4))$$

$$\vec{PM} \times \vec{v} = 2\hat{i} + 2\hat{j} - 12\hat{k} = \langle 2, 2, -12 \rangle$$

#### 4. Calculate Magnitudes and Determine Distance $d$

- **Magnitude of the cross product:**
    
    $$||\vec{PM} \times \vec{v}|| = \sqrt{2^2 + 2^2 + (-12)^2} = \sqrt{4 + 4 + 144} = \sqrt{152} = 2\sqrt{38}$$
    
- **Magnitude of the direction vector:**
    
    $$||\vec{v}|| = \sqrt{4^2 + 2^2 + 1^2} = \sqrt{16 + 4 + 1} = \sqrt{21}$$
    

Substitute these into the distance equation:

$$d = \frac{2\sqrt{38}}{\sqrt{21}} = \frac{2\sqrt{798}}{21} \approx 2.69 \text{ units}$$

## Real-Life Engineering Application Problems

### Problem 1: [[Robotics & Obstacle Avoidance (Arm Clearance Analysis)]]
[[Robotics & Obstacle Avoidance (Arm Clearance Analysis) Solution]]


### Problem 2: [[Structural Civil Engineering (Conduit & Support Cable Clearance)]]
[[Structural Civil Engineering (Conduit & Support Cable Clearance) Solution]]
