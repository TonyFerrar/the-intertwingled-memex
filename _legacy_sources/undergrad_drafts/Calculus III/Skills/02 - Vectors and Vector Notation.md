# Skill 2: Vectors and Vector Notation

## Essential Notes & Concepts

While a point specifies a static location in space, a **vector** represents a quantity that possesses both **magnitude** (length or size) and **direction**.

### Vector Components and Notation

A vector $\vec{v}$ in 3D space can be expressed in two primary notations:

1. **Component Form:** $\vec{v} = \langle v_x, v_y, v_z \rangle$ where $v_x$, $v_y$, and $v_z$ represent the directed displacements along the x, y, and z axes, respectively.
    
2. **Standard Basis Vector Form:** $\vec{v} = v_x\hat{i} + v_y\hat{j} + v_z\hat{k}$, where $\hat{i}$, $\hat{j}$, and $\hat{k}$ are unit vectors of length 1 pointing in the positive x, y, and z directions.
    

### Magnitude of a Vector

The magnitude (or length) of a vector, denoted by $|\vec{v}|$, is found using the 3D extension of the Pythagorean theorem:

$$|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}$$

### Unit Vectors

A unit vector is a vector with a magnitude of exactly 1 that points in the same direction as the original vector. It is calculated by dividing a vector by its own magnitude:

$$\hat{U}_v = \frac{v_x}{|\vec{v}|}\hat{i} + \frac{v_y}{|\vec{v}|}\hat{j} + \frac{v_z}{|\vec{v}|}\hat{k}$$

## Sample Problems (Guided Notes Practice)

### Demo Problem S2.1

**Problem:** 1. Given the points $P_1 = (2, 3)$ and $P_2 = (4, 4)$, find the vector $\vec{P}$ that lies between these two points. 2. Draw the vector on a 2D graph. 3. Find the Magnitude, $||\vec{P}||$.

**Solution:**

1. **Find the Vector:** To find a vector between two points, subtract the initial coordinates from the terminal coordinates ($P_2 - P_1$):
    
    $$\vec{P} = \langle 4 - 2, 4 - 3 \rangle = \langle 2, 1 \rangle$$
    
2. **Graphing Strategy:** Start at the origin $(0,0)$ and draw an arrow pointing to $(2,1)$. Alternatively, draw an arrow starting at $(2,3)$ pointing directly to $(4,4)$.
    
3. **Find the Magnitude:**
    
    $$||\vec{P}|| = \sqrt{2^2 + 1^2} = \sqrt{4 + 1} = \sqrt{5} \approx 2.24$$
    

## Real-Life Engineering Application Problems

### Application Problem 1: [[Structural & Civil Engineering (Cable Tension)]]
[[Structural & Civil Engineering (Cable Tension) Solution]]


### Application Problem 2: [[Aerospace Engineering (Aircraft Vector Thrust)]]
[[Aerospace Engineering (Aircraft Vector Thrust) Solution]]
