# Skill 1 – Vector Decomposition & Component Form

Vector decomposition is the process of breaking a single vector down into simpler, perpendicular parts (components) that align with a coordinate system. This is a foundational skill in physics and engineering because it allows us to analyze complex, angled forces or velocities by looking at their horizontal and vertical effects independently.

## Core Concepts & Lecture Notes

### 1. Finding a Position Vector from Two Points

When you are given an initial point $A(A_x, A_y)$ and a terminal point $B(B_x, B_y)$, the position vector $\vec{AB}$ represents the directed displacement from $A$ to $B$.

To write this vector in terms of the standard unit vectors $\hat{i}$ (horizontal) and $\hat{j}$ (vertical), you subtract the initial coordinates from the terminal coordinates:

$$\vec{AB} = (B_x - A_x)\hat{i} + (B_y - A_y)\hat{j}$$

To write it in **component form**, we use angle brackets:

$$\vec{AB} = \langle B_x - A_x, B_y - A_y \rangle$$

### 2. Decomposing Magnitude and Angle into Components

Often in engineering, a vector is given as a magnitude (like a force in Newtons or a speed in mph) acting at a specific angle $\theta$. To break this vector $\vec{V}$ into horizontal ($V_x$) and vertical ($V_y$) components, we use right-triangle trigonometry:

$$V_x = |\vec{V}|\cos\theta$$

$$V_y = |\vec{V}|\sin\theta$$

This allows us to express the vector as:

$$\vec{V} = (|\vec{V}|\cos\theta)\hat{i} + (|\vec{V}|\sin\theta)\hat{j} = \langle |\vec{V}|\cos\theta, |\vec{V}|\sin\theta \rangle$$

## Pure Mathematical Sample Problems

### Sample Problem 1: Points to Component Form

**Problem:** Find the component form of the position vector $\vec{PQ}$ from the initial point $P(-5, 8)$ to the terminal point $Q(3, -2)$.

**Solution:**

1. Identify the coordinates: $(P_x, P_y) = (-5, 8)$ and $(Q_x, Q_y) = (3, -2)$.
    
2. Apply the subtraction formula (terminal minus initial):
    
    $$\vec{PQ} = \langle 3 - (-5), -2 - 8 \rangle$$
    
    $$\vec{PQ} = \langle 3 + 5, -2 - 8 \rangle$$
    
    $$\vec{PQ} = \langle 8, -10 \rangle$$
    

### Sample Problem 2: Magnitude and Angle to Components

**Problem:** A velocity vector $\vec{v}$ has a magnitude of $85\text{ m/s}$ and points at an angle of $135^\circ$ measured counterclockwise from the positive $x$-axis. Write $\vec{v}$ in component form.

**Solution:**

1. Use the trig component formulas:
    
    $$v_x = 85\cos(135^\circ) = 85\left(-\frac{\sqrt{2}}{2}\right) \approx -60.10\text{ m/s}$$
    
    $$v_y = 85\sin(135^\circ) = 85\left(\frac{\sqrt{2}}{2}\right) \approx 60.10\text{ m/s}$$
    
2. Combine into component form:
    
    $$\vec{v} = \langle -60.10, 60.10 \rangle$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering (Truss Bridge Structural Analysis)]]
[[Civil Engineering (Truss Bridge Structural Analysis) Solution]]

### Engineering Problem 2: [[Aerospace Engineering (Aircraft Crosswind Takeoff)]]
[[Aerospace Engineering (Aircraft Crosswind Takeoff) Solution]]
