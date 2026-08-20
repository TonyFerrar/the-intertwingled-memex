# Skill 1: Vector Translation (Moving Between Graphs and Algebra)

## 1. Theoretical Notes

### What is Vector Translation?

In vector mathematics, **translation** is the process of taking a physical geometric directed line segment on a coordinate grid and converting it into an algebraic expression. This expression is known as the **component form** of a vector.

A vector does not represent a single static point in space; rather, it represents a **displacement**—a change in position from a starting location to an ending location. Because of this, a vector carries two distinct pieces of information:

1. **Magnitude:** The straight-line distance from start to finish.
    
2. **Direction:** The orientation or angle of the path taken.
    

### Initial vs. Terminal Points

Every vector is defined by two critical locations on a Cartesian plane:

- **Initial Point ($P$):** The starting point or "tail" of the vector.
    
- **Terminal Point ($Q$):** The ending point, tip, or "head" of the vector (indicated by the arrowhead).
    

### Unit Vectors ($\hat{i}$ and $\hat{j}$)

To write a vector algebraically, we use standard unit vectors as a basis. A unit vector is a vector with a length of exactly $1$.

- $\hat{i}$ (pronounced "i-hat") is the unit vector pointing in the positive $x$-direction (horizontal).
    
- $\hat{j}$ (pronounced "j-hat") is the unit vector pointing in the positive $y$-direction (vertical).
    

### The Component Formula

To translate a geometric vector into component form, you calculate how far the vector travels horizontally and vertically. This is done by subtracting the coordinates of the **initial point** from the coordinates of the **terminal point** ("Head minus Tail"):

If a vector $\vec{PQ}$ starts at $P(x_1, y_1)$ and ends at $Q(x_2, y_2)$, its algebraic component form is:

$$\vec{PQ} = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j}$$

- The horizontal change is $\Delta x = x_2 - x_1$
    
- The vertical change is $\Delta y = y_2 - y_1$
    

## 2. Standard Sample Problems

### Problem 1: Basic Translation

A vector $\vec{AB}$ has an initial point $A(3, 1)$ and a terminal point $B(9, 5)$. Find its component form.

**Solution:**

1. Identify the coordinates: $(x_1, y_1) = (3, 1)$ and $(x_2, y_2) = (9, 5)$.
    
2. Apply the formula: $\vec{AB} = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j}$
    
3. Substitute the values: $\vec{AB} = (9 - 3)\hat{i} + (5 - 1)\hat{j}$
    
4. Simplify:
    
    $$\vec{AB} = 6\hat{i} + 4\hat{j}$$
    

### Problem 2: Handling Negative Coordinates

A vector $\vec{CD}$ begins at the initial point $C(-2, 4)$ and ends at the terminal point $D(5, -3)$. Express $\vec{CD}$ in component form.

**Solution:**

1. Identify the coordinates: $(x_1, y_1) = (-2, 4)$ and $(x_2, y_2) = (5, -3)$.
    
2. Apply the formula: $\vec{CD} = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j}$
    
3. Substitute carefully, keeping track of double negatives: $\vec{CD} = (5 - (-2))\hat{i} + (-3 - 4)\hat{j}$
    
4. Simplify: $\vec{CD} = (5 + 2)\hat{i} + (-7)\hat{j}$
    
    $$\vec{CD} = 7\hat{i} - 7\hat{j}$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Robotics Arm Manipulation]]
[[Robotics Arm Manipulation Solution]]


### Engineering Problem 2: [[Civil Engineering Bridge Surveying]]
[[Civil Engineering Bridge Surveying Solution]]
