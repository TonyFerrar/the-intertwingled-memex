# Study Guide: Master Skill 2 — Differential Mechanics (Tangent & Normal Vectors)

## Topic Notes: Mapping the Surface Tilt

Once an engineer has parameterized a 3D surface into a flat 2D blueprint, the next vital milestone is figuring out how that surface stretches, twists, and angles through space. We accomplish this through **Differential Mechanics**, which translates the rate of change along our parameter grid into directional physical vectors.

This stage is broken into two key vector calculus operations:

### 1. Generating Tangent Vectors

By taking the partial derivative of your position vector $\vec{r}(u,v)$ with respect to each independent variable, you produce two distinct tangent vectors:

- $$\vec{r}_u = \frac{\partial \vec{r}}{\partial u}$$
    
- $$\vec{r}_v = \frac{\partial \vec{r}}{\partial v}$$
    

These vectors lie perfectly flush against the surface at any given point, pointing along the grid lines of your parameter coordinates.

### 2. Building the Normal Vector

To find the vector pointing perfectly perpendicular straight out of the surface, you compute the cross product of your two tangent vectors:

$$\vec{n} = \vec{r}_u \times \vec{r}_v$$

### Crucial Check: Orientation Matters

A cross product can point in two opposite directions depending on the order of multiplication ($\vec{r}_u \times \vec{r}_v$ vs. $\vec{r}_v \times \vec{r}_u$). As an engineer, you must always look at the resulting components to ensure your normal vector matches your physical requirements (e.g., pointing _outward_ from a closed pipe rather than _inward_, or _upward_ into the sky rather than _downward_ into the dirt).

## Standard Mathematical Sample Problems

### Sample Problem 1: Normal Vector of a Slanted Plane

**Problem:** A flat surface is parameterized by $\vec{r}(x,y) = \langle x, \, y, \, 6 - 2x - 3y \rangle$. Compute the tangent vectors $\vec{r}_x$, $\vec{r}_y$ and find the upward-pointing normal vector $\vec{n}$.

#### Solution:

- **Step 1: Compute partial derivatives.**
    
    $$\vec{r}_x = \frac{\partial \vec{r}}{\partial x} = \langle 1, \, 0, \, -2 \rangle$$
    
    $$\vec{r}_y = \frac{\partial \vec{r}}{\partial y} = \langle 0, \, 1, \, -3 \rangle$$
    
- **Step 2: Compute the cross product.**
    
    $$\vec{n} = \vec{r}_x \times \vec{r}_y = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 0 & -2 \\ 0 & 1 & -3 \end{vmatrix}$$
    
    $$\vec{n} = \hat{i}(0 - (-2)) - \hat{j}(-3 - 0) + \hat{k}(1 - 0) = \langle 2, \, 3, \, 1 \rangle$$
    
- **Step 3: Verify orientation.** The $\hat{k}$ component is $+1$. Because it is positive, this vector points upward, satisfying our orientation requirement.
    

### Sample Problem 2: Normal Vector of a Paraboloid in Polar Coordinates

**Problem:** A circular bowl is parameterized by $\vec{r}(r, \theta) = \langle r\cos\theta, \, r\sin\theta, \, 4 - r^2 \rangle$. Compute the normal vector $\vec{n} = \vec{r}_r \times \vec{r}_\theta$.

#### Solution:

- **Step 1: Compute partial derivatives.**
    
    $$\vec{r}_r = \langle \cos\theta, \, \sin\theta, \, -2r \rangle$$
    
    $$\vec{r}_\theta = \langle -r\sin\theta, \, r\cos\theta, \, 0 \rangle$$
    
- **Step 2: Compute the cross product.**
    
    $$\vec{n} = \vec{r}_r \times \vec{r}_\theta = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ \cos\theta & \sin\theta & -2r \\ -r\sin\theta & r\cos\theta & 0 \end{vmatrix}$$
    
    $$\vec{n} = \hat{i}(0 - (-2r^2\cos\theta)) - \hat{j}(0 - 2r^2\sin\theta) + \hat{k}(r\cos^2\theta - (-r\sin^2\theta))$$
    
    $$\vec{n} = \langle 2r^2\cos\theta, \, 2r^2\sin\theta, \, r(\cos^2\theta + \sin^2\theta) \rangle = \langle 2r^2\cos\theta, \, 2r^2\sin\theta, \, r \rangle$$
    

## Real-Life Engineering Application Problems

### Engineering Application Problem 1: [[Solar Dish Target Tracking]]
[[Solar Dish Target Tracking Solution]]

### Engineering Application Problem 2: [[Skyscraper Facade Wind Load Calculations]]
[[Skyscraper Facade Wind Load Calculations Solution]]
