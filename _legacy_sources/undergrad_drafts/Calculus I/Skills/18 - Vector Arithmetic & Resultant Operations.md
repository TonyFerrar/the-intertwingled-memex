# Skill 2 – Vector Arithmetic & Resultant Operations

Vector arithmetic is the foundation of combining multi-directional forces, velocities, or displacements. When multiple independent vectors act on a system simultaneously, we combine them mathematically to find a single **resultant vector** that represents the net effect.

## Core Concepts & Lecture Notes

### 1. Vector Addition and Subtraction (Algebraic)

To add or subtract vectors, you simply combine their corresponding scalar components ($\hat{i}$ for horizontal, $\hat{j}$ for vertical, and $\hat{k}$ for depth).

Given two 3D vectors:

$$\vec{u} = u_x\hat{i} + u_y\hat{j} + u_z\hat{k}$$

$$\vec{v} = v_x\hat{i} + v_y\hat{j} + v_z\hat{k}$$

The resultant vector sum $\vec{R} = \vec{u} + \vec{v}$ is:

$$\vec{R} = (u_x + v_x)\hat{i} + (u_y + v_y)\hat{j} + (u_z + v_z)\hat{k}$$

In component form, this is written as:

$$\vec{R} = \langle u_x + v_x, u_y + v_y, u_z + v_z \rangle$$

### 2. Finding the Resultant Magnitude

The magnitude (total length or strength) of any vector is found using the Pythagorean distance formula extension. For a 3D resultant vector $\vec{R} = \langle x, y, z \rangle$, the magnitude $|\vec{R}|$ is:

$$|\vec{R}| = \sqrt{x^2 + y^2 + z^2}$$

### 3. Scaling to a Unit Vector

A unit vector ($\hat{u}$) is a vector with a magnitude of exactly $1$ that preserves the original direction. To scale a vector down to a unit vector, you divide the vector by its own total magnitude:

$$\hat{u}_R = \frac{\vec{R}}{|\vec{R}|} = \left\langle \frac{x}{|\vec{R}|}, \frac{y}{|\vec{R}|}, \frac{z}{|\vec{R}|} \right\rangle$$

## Pure Mathematical Sample Problems

### Sample Problem 1: 3D Vector Operations

**Problem:** Given $\vec{u} = \langle -3, 6, 2 \rangle$ and $\vec{v} = \langle 5, -1, 4 \rangle$, find the combined resultant vector $\vec{R} = 2\vec{u} + \vec{v}$.

**Solution:**

1. Scale vector $\vec{u}$ by multiplying each component by 2:
    
    $$2\vec{u} = \langle 2(-3), 2(6), 2(2) \rangle = \langle -6, 12, 4 \rangle$$
    
2. Add the components of $2\vec{u}$ and $\vec{v}$ together:
    
    $$\vec{R} = \langle -6 + 5, 12 + (-1), 4 + 4 \rangle$$
    
    $$\vec{R} = \langle -1, 11, 8 \rangle$$
    

### Sample Problem 2: Finding a Unit Vector

**Problem:** Find the unit vector pointing in the same direction as $\vec{w} = \langle 3, -4, 12 \rangle$.

**Solution:**

1. Calculate the magnitude of $\vec{w}$:
    
    $$|\vec{w}| = \sqrt{3^2 + (-4)^2 + 12^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13$$
    
2. Divide each component by the magnitude:
    
    $$\hat{u}_w = \left\langle \frac{3}{13}, -\frac{4}{13}, \frac{12}{13} \right\rangle$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural & Mechanical Engineering (Static Crane Cable Tension)]]
[[Structural & Mechanical Engineering (Static Crane Cable Tension) Solution]]


### Engineering Problem 2: [[Robotics and Computer Engineering (Drone Path Navigation)]]
[[Robotics and Computer Engineering (Drone Path Navigation) Solution]]
