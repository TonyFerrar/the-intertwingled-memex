# Skill 2: Vector Arithmetic (Combining Displacements and Forces)

## 1. Theoretical Notes

### What is Vector Arithmetic?

Unlike regular numbers (scalars) which can be added or subtracted directly, vectors represent multi-dimensional quantities containing both **magnitude** (how much) and **direction** (which way). Vector arithmetic is the process of combining these quantities geometrically and algebraically.

In engineering and physics, you rarely deal with just a single isolated movement or force. Multiple vectors act at the same time—such as an airplane flying forward while being pushed sideways by a crosswind, or a bridge beam being pulled down by gravity and supported up by a pillar.

### A. Vector Addition (The Net Result)

When you add two vectors, $\vec{u} + \vec{v}$, you are finding the total combined effect, known as the **resultant vector**.

#### The Geometric Concept: Head-to-Tail Method

![[17 - Introduction to Vectors Image 1.png]]

To visualize addition, you place the "tail" (start) of the second vector at the "head" (arrow tip) of the first vector. The resultant vector is a straight line drawn from the very beginning (tail of the first) to the very end (head of the second).

#### The Algebraic Concept: Component-by-Component

In algebra, you add vectors by simply combining their like terms. You add the horizontal ($\hat{i}$) parts together, and you separately add the vertical ($\hat{j}$) parts together:

$$\vec{u} + \vec{v} = (u_x + v_x)\hat{i} + (u_y + v_y)\hat{j}$$

### B. Vector Subtraction (Finding the Difference)

Vector subtraction, $\vec{v} - \vec{u}$, is used to find the relative difference between two states, such as a change in velocity or the relative distance between two moving targets.

#### The Algebraic Concept

Order matters immensely in subtraction. Subtracting $\vec{u}$ from $\vec{v}$ means you subtract the components of $\vec{u}$ _away from_ the components of $\vec{v}$:

$$\vec{v} - \vec{u} = (v_x - u_x)\hat{i} + (v_y - u_y)\hat{j}$$

_Tip: Always watch out for double negatives when subtracting a component that is already negative (e.g., $4 - (-2) = 4 + 2 = 6$)._

### C. Scalar Multiplication (Scaling the Vector)

Scalar multiplication is the process of multiplying an entire vector by a single real number (a scalar), represented by $c$.

#### The Algebraic Concept

To scale a vector, you distribute the scalar multiplier to every single component:

$$c\vec{u} = (c \cdot u_x)\hat{i} + (c \cdot u_y)\hat{j}$$

- If $c > 1$, the vector gets longer (magnified).
    
- If $0 < c < 1$, the vector gets shorter (shrunk).
    
- If $c$ is negative, the vector scales _and_ flips 180 degrees to point in the exact opposite direction.
    

## 2. Standard Sample Problems

### Problem 1: Vector Addition

Given $\vec{u} = 5\hat{i} - 3\hat{j}$ and $\vec{v} = -2\hat{i} + 7\hat{j}$, find the resultant vector $\vec{u} + \vec{v}$.

**Solution:**

1. Group the corresponding $\hat{i}$ and $\hat{j}$ components:
    
    $$\vec{u} + \vec{v} = (5 + (-2))\hat{i} + (-3 + 7)\hat{j}$$
    
2. Simplify the terms:
    
    $$\vec{u} + \vec{v} = (5 - 2)\hat{i} + (4)\hat{j}$$
    
    $$\vec{u} + \vec{v} = 3\hat{i} + 4\hat{j}$$
    

### Problem 2: Vector Subtraction with Negative Signs

Using the same vectors, calculate $\vec{v} - \vec{u}$.

**Solution:**

1. Set up the subtraction tracking the order ($\vec{v}$ components minus $\vec{u}$ components):
    
    $$\vec{v} - \vec{u} = (-2 - 5)\hat{i} + (7 - (-3))\hat{j}$$
    
2. Simplify, noting the double negative in the vertical component ($7 - (-3) = 7 + 3$):
    
    $$\vec{v} - \vec{u} = (-7)\hat{i} + (10)\hat{j}$$
    
    $$\vec{v} - \vec{u} = -7\hat{i} + 10\hat{j}$$
    

### Problem 3: Combined Operations

Given $\vec{u} = 3\hat{i} - 2\hat{j}$, calculate the scaled vector $-4\vec{u}$.

**Solution:**

1. Distribute the scalar $-4$ to both components:
    
    $$-4\vec{u} = (-4 \cdot 3)\hat{i} + (-4 \cdot (-2))\hat{j}$$
    
2. Calculate the products:
    
    $$-4\vec{u} = -12\hat{i} + 8\hat{j}$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Aerospace Navigation (Resultant Flight Velocity)]]
[[Aerospace Navigation (Resultant Flight Velocity) Solution]]

### Engineering Problem 2: [[Mechanical Automation (Relative Target Tracking)]]
[[Mechanical Automation (Relative Target Tracking) Solution]]
