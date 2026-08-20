
# Curvature of a Space Curve


> [!info]- Curvature Essential Formulas
> **Unit Tangent Vector:**
> $$\hat{T}=\dfrac{\vec{r}\,'(t)}{||\vec{r}\,'(t)||}$$
> **Unit Normal Vector:**
> $$\hat{N}=\dfrac{\hat{T}\,'}{||\hat{T}\,'||}$$
> **Curvature Equations:**
> 1. Use in the case of needing to solve for a unit tangent vector
> $$\kappa(t)=\dfrac{||\hat{T}\,'(t)||}{||\vec{r}\,'(t)||}$$
> 2. Use in the case of only having the position vector and no need to solve for unit tangent
> $$\kappa(t)=\dfrac{\|\vec r'(t)\times \vec r''(t)\|}{\|\vec r'(t)\|^3}$$
> 3. Use in the case of arc length parametrization
> $$\kappa(s)=||\hat{T}\,'(s)||$$
> **Radius of Curvature:**
> $$\rho = \dfrac{1}{\kappa}$$

### Unit Tangent and Unit Normal Vectors

> [!warning] Point of Confusion
> It is easy to mix up the tangent vector and the unit tangent vector.
> - The **tangent vector** is the pure derivative of the function, $\vec{r}'(t)$. It points in the direction tangent to the path, and its magnitude represents the speed of an object traveling the path.
> - The **unit tangent vector**, $\hat{T}$, is the tangent vector divided by its magnitude, resulting in a vector that points tangent to the path but with a magnitude of 1.

#### Unit Tangent Vector
Given a position vector $\vec{r}(t)$, taking the derivative yields a vector **tangent** to the path described by $\vec{r}(t)$. However, this tangent vector is not without magnitude. In many cases, it is worthwhile to determine the **direction** of the tangent vector without its magnitude. This is the purpose of the **Unit Tangent Vector**.

Similar to typical unit vectors, the unit tangent vector is found by dividing the tangent vector by its magnitude:
$$\hat{T}=\dfrac{\vec{r}\,'(t)}{||\vec{r}\,'(t)||}$$
Why do we care? Read on.
#### Note about vector derivatives
When taking the derivative of a vector, two properties can change (each resulting in a nonzero component of the derivative vector): the **magnitude**, and the **direction**. In terms of motion,
- **A nonzero derivative of magnitude** gives the rate of change of the speed of the object - if it speeds up or slows down along the path, then the magnitude will change.
- **A nonzero derivative of direction** changes the components of the unit vector, but not the magnitude. If it changes direction, the unit tangent vector will change even though its magnitude remains equal to 1.

In general, both the speed and direction of an object can change as it travels along a path. An example is when a car is accelerating along a curving onramp to enter a highway - the magnitude changes as the car speeds up, the direction changes as it navigates the curve.

> [!important] 
> The **derivative of the tangent vector**, $\vec{r}'(t)$ captures both the change of speed and direction, all in one go. The **derivative of the unit tangent vector**, $\hat{T}'(t)$, strips the change of speed away, leaving a measure of the change in direction only.

#### Unit Normal Vector
The **unit normal vector** gives a measure of the rate of change of direction. Remember, the unit tangent vector, $\hat{T}$, always has a magnitude of 1. This means that the derivative of a unit tangent vector, $\hat{T}'$, contains information related to the change in direction only. 

The result: the derivative of the unit tangent vector points normal (perpendicular) to the path. This derivative does **not** produce a unit vector automatically. Instead, **the magnitude of $\hat{T}'$ relates to how sharp the turn is**. Tighter curves have larger magnitude $\hat{T}'$ for objects moving at the same speed.

The **unit normal vector** strips the magnitude away, giving a normal vector that points perpendicular to the path. It is useful for analyzing the shape of the path independent from the motion of an object along it. To find the **unit normal vector, divide the derivative of the unit tangent vector by its own magnitude**:

$$\hat{N}=\dfrac{\hat{T}\,'}{||\hat{T}\,'||}$$
### Curvature
Curvature $\kappa$ is a measure of how tightly the curve you're analyzing is bending. A larger value for $\kappa$ corresponds to a sharper bend meanwhile a smaller value for $\kappa$ represents a more gradual curve.

Two formulas for finding the curvature will be listed below:
$$\kappa(t)=\dfrac{||\hat{T}\,'(t)||}{||\vec{r}\,'(t)||}=\dfrac{\|\vec r'(t)\times \vec r''(t)\|}{\|\vec r'(t)\|^3}$$
- The first form involves $\hat{T}$ and is easiest if you're finding the unit tangent vector for other purposes in the same problem.
- The second form involves only $\vec{r}(t)$ and its derivatives. It is more convenient when you don't have need for the unit tangent vector $\hat{T}$ for other purposes in the same problem. In other words, it is a more direct way of finding curvature.

In some cases, you'll be tasked with **determining the curvature of a position vector with an arc length parametrization, $\vec{r}(s)$**. In the case of this event, the formula for curvature changes to the following:
$$\kappa(s)=||\hat{T}\,'(s)||$$
### Radius of Curvature
Imagine a circle of radius $\rho$. this radius of the circle is the radius of curvature of the circle. The radius of curvature gives how long of a radius there would be between the curve itself and an origin point from where the radius stems from. The radius of curvature has a special relationship with curvature:
$$\rho(t)=\dfrac{1}{\kappa(t)}$$
 
> [!warning]- Notes for Curvature
> - For this class, you'll likely see mostly curvature rather than radius of curvature. But you may see it in other classes like ME 242 (dynamics).
> - Additionally, whichever formula you choose to use for curvature is valid. However, there may be specific contexts where it makes more sense to pick one over the other
> 	- If you already need to solve for $\hat{T}$ anyways, might as well use the first equation for curvature
> 	- If all you're given is the position vector and there's no need to determine something like $\hat{T}$, then use the second.
> 	- If the position vector is parametrized with arc length, then use the third equation.
