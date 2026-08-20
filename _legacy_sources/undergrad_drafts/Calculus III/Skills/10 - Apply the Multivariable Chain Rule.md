# Skill 1: Apply the Multivariable Chain Rule

## Conceptual Notes & Core Framework

In single-variable calculus, when $y$ depends on $x$, and $x$ depends on $t$, a change in $t$ drives a change in $x$, which in turn drives a change in $y$. We calculate this rate of change using the standard chain rule:

$$\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$$

In multivariable calculus, systems rarely change along a single linear pathway. When a quantity $z$ depends on multiple intermediate variables (such as coordinate positions $x$ and $y$), and each of those intermediate variables changes with respect to an independent parameter (such as time $t$ or a spatial parameter $s$), a change in the parameter ripples through **all pathways simultaneously**.

### The Dependency Tree & Total Time Derivative

To determine the total rate of change of a function $z = f(x,y)$ along a parameterized path $x = x(t)$ and $y = y(t)$, we map out the paths of dependence.

By tracking the paths from the independent parameter $t$ up to the dependent variable $z$, we multiply the derivatives along each branch and sum the parallel branches together:

$$\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}$$

- **$\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ (Partial Derivatives):** Represent the intrinsic sensitivity of the field or system surface with respect to individual internal dimensions/coordinates.
    
- **$\frac{dx}{dt}$ and $\frac{dy}{dt}$ (Path Rates):** Represent the velocity or rate of change of the inputs relative to the driving parameter.
    

### Vector Form Implementation

The chain rule equation can be neatly rewritten as a dot product between the gradient vector of the system field ($\nabla z$) and the path velocity vector ($\mathbf{v}$):

$$\frac{dz}{dt} = \langle z_x, z_y \rangle \cdot \left\langle \frac{dx}{dt}, \frac{dy}{dt} \right\rangle = \nabla z \cdot \mathbf{v}$$

This vector interpretation aligns perfectly with engineering physics: the total change experienced per unit of time depends on both the steepness/direction of the environmental field gradient and the direction/speed at which an object or sensor cuts through that field.

## Sample Problems

### Problem 1: Pure Mathematical Exercise

Given the multivariable function $z(x, y) = 4x^3y^2 - 2x$, where $x$ and $y$ are parameterized by time $t$ such that $x(t) = e^{3t}$ and $y(t) = \ln(t + 1)$. Find the total derivative $\frac{dz}{dt}$ at $t = 0$.

#### **Step-by-Step Solution:**

1. **State the Chain Rule Formula:**
    
    $$\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}$$
    
2. **Compute Partial Derivatives of $z(x, y)$:**
    
    - $\frac{\partial z}{\partial x} = \frac{\partial}{\partial x}(4x^3y^2 - 2x) = 12x^2y^2 - 2$
        
    - $\frac{\partial z}{\partial y} = \frac{\partial}{\partial y}(4x^3y^2 - 2x) = 8x^3y$
        
3. **Compute Time Derivatives of the Parametric Paths:**
    
    - $\frac{dx}{dt} = \frac{d}{dt}(e^{3t}) = 3e^{3t}$
        
    - $\frac{dy}{dt} = \frac{d}{dt}(\ln(t + 1)) = \frac{1}{t + 1}$
        
4. **Evaluate Path Positions at $t = 0$:**
    
    - $x(0) = e^{3(0)} = 1$
        
    - $y(0) = \ln(0 + 1) = 0$
        
5. **Evaluate the Derivative Components at $t = 0$:**
    
    - $\frac{\partial z}{\partial x} = 12(1)^2(0)^2 - 2 = -2$
        
    - $\frac{\partial z}{\partial y} = 8(1)^3(0) = 0$
        
    - $\frac{dx}{dt} = 3e^{3(0)} = 3$
        
    - $\frac{dy}{dt} = \frac{1}{0 + 1} = 1$
        
6. **Synthesize via the Chain Rule:**
    
    $$\frac{dz}{dt} = (-2)(3) + (0)(1) = -6 + 0 = -6$$
    

**Answer:** $\frac{dz}{dt} = -6$

## Real-Life Engineering Application Problems

### Problem 2: [[Mechanical & Civil Engineering — Stress Intensity Factor on a Bridges Structural Gusset Plate]]
[[Mechanical & Civil Engineering — Stress Intensity Factor on a Bridges Structural Gusset Plate Solution]]


### Problem 3: [[Electrical & Computer Engineering — Dynamic Power Dissipation in a High-Performance Processor]]
[[Electrical & Computer Engineering — Dynamic Power Dissipation in a High-Performance Processor Solution]]
