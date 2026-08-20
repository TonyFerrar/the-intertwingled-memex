My apologies for that discrepancy! Let’s realign perfectly with the exact 3 skills we established. Here is the dedicated Markdown page for **Skill 1: Finding the Equations of a Line**, completely refreshed to match that precise structure.

# Skill 1: Finding the Equations of a Line

## Essential Concepts & Formulas

To uniquely define a line in three-dimensional space, we cannot rely on the traditional 2D slope-intercept form ($y = mx + b$) because a single slope value cannot describe a direction in 3D. Instead, we require two primary pieces of geometric information:

1. **A known point** on the line, denoted as $P_0 = (x_0, y_0, z_0)$.
    
2. **A direction vector** parallel to the line, denoted as $\vec{v} = \langle a, b, c \rangle = a\hat{i} + b\hat{j} + c\hat{k}$.
    

From these elements, we can construct three standard mathematical representations of a line:

### 1. Vector Equation

The position vector $\vec{r}(t)$ of any arbitrary point $(x, y, z)$ on the line is given by adding a scalar multiple of the direction vector $\vec{v}$ to the initial position vector $\vec{r}_0 = \langle x_0, y_0, z_0 \rangle$:

$$\vec{r}(t) = \vec{r}_0 + t\vec{v}$$

where $t$ is a real-number scalar parameter representing position or "time" along the line.

### 2. Parametric Equations

By separating the vector equation into its individual coordinate components, we obtain a set of scalar equations that define $x$, $y$, and $z$ independently as functions of the parameter $t$:

$$x = x_0 + at$$

$$y = y_0 + bt$$

$$z = z_0 + ct$$

### 3. Symmetric Equations

If we solve each of the parametric equations for the common parameter $t$ (assuming $a, b, c \neq 0$) and set them equal to each other, we eliminate the parameter completely:

$$\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}$$

## Guided Sample Problem (From 04 - Lines In 3D Prep)

### Problem Statement

Given a line passing through the points $P = (-4, -6, -2)$ and $Q = (10, 2, 1)$:

1. Find the vector equation of the line and evaluate it at a few values of $t$.
    
2. Find the parametric equations of the line.
    
3. Convert the parametric equations into a symmetric equation.
    

### Step-by-Step Solution

#### 1. Vector Equation

First, compute the direction vector $\vec{v}$ by finding the displacement vector from $P$ to $Q$:

$$\vec{v} = \vec{PQ} = \langle 10 - (-4), \ 2 - (-6), \ 1 - (-2) \rangle = \langle 14, 8, 3 \rangle$$

Using $P(-4, -6, -2)$ as the initial point position vector $\vec{r}_0 = \langle -4, -6, -2 \rangle$, the vector equation is:

$$\vec{r}(t) = \langle -4, -6, -2 \rangle + t\langle 14, 8, 3 \rangle$$

**Evaluations:**

- **At $t = 0$:** $\vec{r}(0) = \langle -4, -6, -2 \rangle$ (yields initial point $P$)
    
- **At $t = 1$:** $\vec{r}(1) = \langle -4 + 14(1), \ -6 + 8(1), \ -2 + 3(1) \rangle = \langle 10, 2, 1 \rangle$ (yields point $Q$)
    
- **At $t = 0.25$:** $\vec{r}(0.25) = \langle -4 + 3.5, \ -6 + 2, \ -2 + 0.75 \rangle = \langle -0.5, -4, -1.25 \rangle$
    

#### 2. Parametric Equations

Extracting the coordinate components from the vector equation gives:

- $x = -4 + 14t$
    
- $y = -6 + 8t$
    
- $z = -2 + 3t$
    

#### 3. Symmetric Equations

Isolate $t$ in each parametric component equation:

- $t = \frac{x + 4}{14}$
    
- $t = \frac{y + 6}{8}$
    
- $t = \frac{z + 2}{3}$
    

Equating them results in the symmetric form:

$$\frac{x + 4}{14} = \frac{y + 6}{8} = \frac{z + 2}{3}$$

## Real-Life Engineering Application Problems

### Problem 1: [[Aerospace Engineering (Satellite Orbit Path Modeling)]]
[[Aerospace Engineering (Satellite Orbit Path Modeling) Solution]]


### Problem 2: [[Robotics & Automated Manufacturing (CNC Laser Alignment)]]
[[Robotics & Automated Manufacturing (CNC Laser Alignment) Solution]]
