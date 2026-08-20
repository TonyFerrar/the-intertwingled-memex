# Skill 1: Compute and Interpret the Gradient Vector

## Topic Notes & Theoretical Overview

The **gradient** is a fundamental operator in vector calculus that transforms a scalar field (a function that outputs a single number at every point in space) into a vector field. Geometrically and physically, it serves as the bridge between a function's algebraic definition and its spatial rate of change.

### 1. Mathematical Definition

For a differentiable function of two variables, $f(x,y)$, the gradient vector is denoted by $\nabla f$ (read as "del $f$" or "grad $f$") and is defined as the vector of its first-order partial derivatives:

$$\nabla f(x,y) = \langle f_x(x,y), \, f_y(x,y) \rangle = \frac{\partial f}{\partial x}\hat{i} + \frac{\partial f}{\partial y}\hat{j}$$

For a function of three variables, $f(x,y,z)$, the definition expands naturally to include the third dimension:

$$\nabla f(x,y,z) = \langle f_x, \, f_y, \, f_z \rangle = \frac{\partial f}{\partial x}\hat{i} + \frac{\partial f}{\partial y}\hat{j} + \frac{\partial f}{\partial z}\hat{k}$$

### 2. Core Geometric Properties

- **Direction of Steepest Ascent:** At any point, the vector $\nabla f$ points in the exact direction in which the function value increases most rapidly.
    
- **Maximum Rate of Change:** The magnitude of the gradient vector, $|\nabla f|$, represents the maximum instantaneous rate of increase (the steepest slope) at that point.
    
- **Orthogonality to Level Sets:** The gradient vector $\nabla f$ evaluated at a point is **always perpendicular (orthogonal)** to the level curve ($f(x,y) = c$) or level surface ($f(x,y,z) = c$) passing through that point.
    

### 3. Step-by-Step Execution Strategy

1. **Differentiate First:** Compute the general partial derivatives with respect to each variable independently while treating all other variables as constants.
    
2. **Assemble the Vector:** Place the partial derivatives into a vector format, $\langle f_x, f_y \rangle$.
    
3. **Evaluate:** Substitute the specific coordinates of the given point into the component functions. **Never substitute numbers before taking the derivative.**
    

## Pure Mathematical Sample Problems

### Problem 1: Two-Variable Polynomial

Consider the function $f(x,y) = 4x^3y^2 - 3x^2 + 7y$.

1. Find the general gradient vector $\nabla f(x,y)$.
    
2. Evaluate $\nabla f$ at the point $(1, -2)$.
    

#### Solution:

1. Find the partial derivatives:
    
    $$f_x = \frac{\partial}{\partial x}(4x^3y^2 - 3x^2 + 7y) = 12x^2y^2 - 6x$$
    
    $$f_y = \frac{\partial}{\partial y}(4x^3y^2 - 3x^2 + 7y) = 8x^3y + 7$$
    
    General gradient: $\nabla f(x,y) = \langle 12x^2y^2 - 6x, \; 8x^3y + 7 \rangle$
    
2. Evaluate at $(1, -2)$:
    
    $$f_x(1, -2) = 12(1)^2(-2)^2 - 6(1) = 12(4) - 6 = 42$$
    
    $$f_y(1, -2) = 8(1)^3(-2) + 7 = -16 + 7 = -9$$
    
    **Answer:** $\nabla f(1, -2) = \langle 42, \, -9 \rangle$
    

### Problem 2: Three-Variable Transcendental Function

Let $f(x,y,z) = z^2 \ln(x) + x e^{2y}$. Find $\nabla f(1, 0, 3)$.

#### Solution:

1. Find the partial derivatives:
    
    $$f_x = \frac{\partial}{\partial x}(z^2 \ln(x) + x e^{2y}) = \frac{z^2}{x} + e^{2y}$$
    
    $$f_y = \frac{\partial}{\partial y}(z^2 \ln(x) + x e^{2y}) = 2x e^{2y}$$
    
    $$f_z = \frac{\partial}{\partial z}(z^2 \ln(x) + x e^{2y}) = 2z \ln(x)$$
    
2. Evaluate at $(1, 0, 3)$:
    
    $$f_x(1, 0, 3) = \frac{3^2}{1} + e^{2(0)} = 9 + 1 = 10$$
    
    $$f_y(1, 0, 3) = 2(1)e^{2(0)} = 2$$
    
    $$f_z(1, 0, 3) = 2(3)\ln(1) = 0$$
    
    **Answer:** $\nabla f(1, 0, 3) = \langle 10, \, 2, \, 0 \rangle$
    

## Real-Life Engineering Application Problems

### Application 1: [[Environmental Engineering (Drainage & Flow Tracking)]]
[[Environmental Engineering (Drainage & Flow Tracking) Solution]]


### Application 2: [[Mechanical Engineering (Thermal Management)]]
[[Mechanical Engineering (Thermal Management) Solution]]


### Application 3: [[Electrical Engineering (Electrostatic Sensor Array)]]
[[Electrical Engineering (Electrostatic Sensor Array) Solution]]
