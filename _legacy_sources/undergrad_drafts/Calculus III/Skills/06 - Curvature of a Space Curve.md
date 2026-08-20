# Skill 2: Curvature of a Space Curve ($\kappa$)

## Core Notes & Concepts

Curvature measures how sharply or tightly a space curve bends at any given point. If a path is a straight line, it doesn't bend at all, so its curvature is zero. If a path forms a tiny circle, it bends very sharply, meaning it has high curvature.

### 1. The Unit Tangent Vector ($\hat{T}(t)$)

To understand how a curve changes direction, we first isolate its direction from its speed. The velocity vector $\vec{r}'(t)$ points tangent to the path, but its length changes depending on how fast an object is moving. By dividing the tangent vector by its own magnitude, we create the **Unit Tangent Vector**, which always has a constant length of $1$ and points purely in the direction of motion:

$$\hat{T}(t) = \frac{\vec{r}'(t)}{||\vec{r}'(t)||}$$

### 2. Geometric Interpretation of Curvature ($\kappa$)

Curvature, denoted by the Greek letter kappa ($\kappa$), is formally defined as the rate at which the curve's direction changes with respect to the distance traveled along the curve ($s$):

$$\kappa = \left|\left|\frac{d\hat{T}}{ds}\right|\right|$$

### 3. Three Ways to Calculate Curvature

Depending on how your curve is defined, you can use one of three mathematically equivalent formulas to solve for $\kappa$:

1. **The Direction Rate Formula:** Used if you already have a cleanly derived unit tangent vector $\hat{T}(t)$:
    
    $$\kappa(t) = \frac{||\hat{T}'(t)||}{||\vec{r}'(t)||}$$
    
2. **The Cross-Product Derivative Formula:** Usually the most convenient for generic functions of time ($t$), as it avoids dealing with messy quotient and chain rules required to differentiate $\hat{T}(t)$:
    
    $$\kappa(t) = \frac{||\vec{r}'(t) \times \vec{r}''(t)||}{||\vec{r}'(t)||^3}$$
    
3. **The Arc Length Formula:** Used exclusively if the position vector is already parametrized by the arc length parameter $s$:
    
    $$\kappa(s) = ||\hat{T}'(s)|| = ||\vec{r}''(s)||$$
    

### 4. Radius of Curvature ($\rho$)

The **Radius of Curvature** ($\rho$, rho) is simply the reciprocal of the curvature:

$$\rho = \frac{1}{\kappa}$$

Geometrically, if you place a circle tangent to the curve at a specific point such that it perfectly matches the curve’s sharpness (called an _osculating_ or "kissing" circle), $\rho$ is the radius of that circle. A large radius means a very gentle, flat turn; a tiny radius means an incredibly sharp hairpin turn.

## Guided Sample Problem (Skill 2 Demo)

### Problem Statement

Given the position vector:

$$\vec{r}(t) = \langle 4t^2, -4t - 3, -2t \rangle$$

1. Solve for the unit tangent vector $\hat{T}(t)$.
    
2. Solve for the curvature $\kappa(t)$ at $t = 1$.
    

### Step-by-Step Solution

#### 1. Find the Unit Tangent Vector $\hat{T}(t)$

First, differentiate the position vector to find the velocity vector $\vec{r}'(t)$:

$$\vec{r}'(t) = \frac{d}{dt}\langle 4t^2, -4t - 3, -2t \rangle = \langle 8t, -4, -2 \rangle$$

Next, calculate the magnitude of the velocity vector $||\vec{r}'(t)||$:

$$||\vec{r}'(t)|| = \sqrt{(8t)^2 + (-4)^2 + (-2)^2} = \sqrt{64t^2 + 16 + 4} = \sqrt{64t^2 + 20}$$

Factor out a $4$ from under the radical to simplify:

$$||\vec{r}'(t)|| = \sqrt{4(16t^2 + 5)} = 2\sqrt{16t^2 + 5}$$

Now, divide the velocity vector by its magnitude to find $\hat{T}(t)$:

$$\hat{T}(t) = \frac{\langle 8t, -4, -2 \rangle}{2\sqrt{16t^2 + 5}} = \left\langle \frac{4t}{\sqrt{16t^2 + 5}}, \frac{-2}{\sqrt{16t^2 + 5}}, \frac{-1}{\sqrt{16t^2 + 5}} \right\rangle$$

#### 2. Solve for Curvature $\kappa(1)$ at $t = 1$

Because differentiating $\hat{T}(t)$ involves tedious quotient rules, we will use the cross-product formula:

$$\kappa(t) = \frac{||\vec{r}'(t) \times \vec{r}''(t)||}{||\vec{r}'(t)||^3}$$

Find the acceleration vector $\vec{r}''(t)$ by differentiating $\vec{r}'(t)$:

$$\vec{r}''(t) = \frac{d}{dt}\langle 8t, -4, -2 \rangle = \langle 8, 0, 0 \rangle$$

Compute the cross product $\vec{r}'(t) \times \vec{r}''(t)$:

$$\vec{r}'(t) \times \vec{r}''(t) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 8t & -4 & -2 \\ 8 & 0 & 0 \end{vmatrix}$$

$$\vec{r}'(t) \times \vec{r}''(t) = \hat{i}(0 - 0) - \hat{j}(0 - (-16)) + \hat{k}(0 - (-32)) = \langle 0, -16, 32 \rangle$$

Find the magnitude of this cross product:

$$||\vec{r}'(t) \times \vec{r}''(t)|| = \sqrt{0^2 + (-16)^2 + (32)^2} = \sqrt{256 + 1024} = \sqrt{1280} = 16\sqrt{5}$$

Evaluate the magnitude of the velocity vector at $t = 1$:

$$||\vec{r}'(1)|| = 2\sqrt{16(1)^2 + 5} = 2\sqrt{21}$$

Substitute these values back into our curvature formula:

$$\kappa(1) = \frac{16\sqrt{5}}{(2\sqrt{21})^3} = \frac{16\sqrt{5}}{8 \cdot 21\sqrt{21}} = \frac{2\sqrt{5}}{21\sqrt{21}} \approx 0.0464$$
 
**Answer:** * Unit tangent vector: $\hat{T}(t) = \left\langle \frac{4t}{\sqrt{16t^2 + 5}}, \frac{-2}{\sqrt{16t^2 + 5}}, \frac{-1}{\sqrt{16t^2 + 5}} \right\rangle$

- Curvature at $t=1$: $\kappa(1) = \frac{2\sqrt{5}}{21\sqrt{21}}$ (or approximately $0.0464$)
    

## Real-Life Engineering Application Problems

### Application 1: [[Civil Engineering & Highway Design]]
[[Civil Engineering & Highway Design Solution]]

### Application 2: [[Aerospace Engineering & Airfoil Lift Analysis]]
[[Aerospace Engineering & Airfoil Lift Analysis Solution]]
