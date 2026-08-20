
# Tangential and Normal Components of Acceleration


> [!info]- Tangential and Normal Components of Acceleration Essential Formulas
> **Velocity:**
> $$\vec{v}(t)=\vec{r}\,'(t)$$
> **Speed:**
> $$\text{Speed}=||\vec{v}||$$
> **Acceleration**
> $$\vec{a}(t) = \vec{v}'(t) = \vec{r}''(t)$$
> **Tangential Acceleration:**
> $$a_T=\dfrac{d}{dt}||\vec{v}(t)||=\dfrac{\vec{v}\;\cdot\vec{a}}{||\vec{v}||}$$
> **Normal Acceleration:**
> $$a_N=\kappa||\vec{v}||^2=\dfrac{||\vec{v}\times\vec{a}||}{||\vec{v}||}$$

### Definition of Velocity, Speed, and Acceleration
Given the position of a particle, $\vec{r}(t)$, **the velocity is the derivative of the position** vector:
$$\vec{v}(t)=\vec{r}\,'(t)$$**Speed is the magnitude of velocity**, 
$$\text{speed} = v = ||\vec{v}||$$
**Acceleration is the derivative of the velocity** vector,
$$\vec{a}(t)=\dfrac{d}{dt}\vec{v}(t)$$
This definition of acceleration yields the direction of the acceleration in purely cartesian coordinates (x, y, and z). In many cases, the acceleration components **tangential** and **normal** to the path can be more valuable to know. Both the normal and tangential acceleration components stem from the previous acceleration definition, $\vec{a}(t)$.
### Tangential Acceleration
Tangential acceleration is a measure of how the **speed** of the particle changes. Remember, velocity $\vec{r}'(t)$ is tangent to the path by definition, and its magnitude is the speed of the particle. If the speed changes, then the magnitude of the velocity changes. The tangential component of acceleration, $a_T$, is therefore the derivative of the particle's speed.
$$a_T=\dfrac{d}{dt}||\vec{v}(t)||=\dfrac{\vec{v}\;\cdot\vec{a}}{||\vec{v}||}$$
Why does this dot product formula work? Velocity is tangent to the path, so the dot product $\vec{v} \cdot \vec{a}$ find the component of acceleration that is tangent to the path. However, the multiplication causes the magnitude to be incorrect because it includes contributions from both $\vec{v}$ and $\vec{a}$. Dividing by the magnitude of velocity removes the multiplicative effect on the magnitude, while preserving the direction achieved by the dot product.
### Normal Acceleration
The normal acceleration of a particle is a measure of how fast the **direction** of the particle is changing. Therefore, it is proportional to the curvature of the path.

The normal acceleration can be calculated 2 ways depending on what else is asked for in the problem. The first form use the [[Curvature of a Space Curve|curvature]] $\kappa$, while the second uses only velocity and acceleration.
$$a_N=\kappa||\vec{v}||^2=\dfrac{||\vec{v}\times\vec{a}||}{||\vec{v}||}$$

Why dies the cross product formula work? Keep in mind that cross products produce vectors perpendicular to the two that you started with. The normal component of acceleration is perpendicular to the velocity because $\vec{v}$ is parallel (tangent) to the path. However, the multiplicative effect of the cross product means that the magnitude of the cross product includes contributions from both $\vec{v}$ and $\vec{a}$. Dividing by the magnitude of velocity removes the multiplicative effect on the magnitude, while preserving the direction achieved by the cross product.
### Unified Definition of Acceleration

With the normal and tangential components of acceleration, the acceleration vector can be expressed in a new way:
$$\vec{a}=a_T\hat{T}+a_N\hat{N}$$

This is often referred to as the Frenet Frame.
 
> [!warning]- important note about the acceleration vectors:
> The acceleration vector is found in cartesian coordinates by taking derivatives of the vector valued position function $\vec{r}(t)$. The use of normal and tangential components are used as an **alternative method** of expressing the acceleration of a moving body. The normal and tangential method may be useful for specific problems you encounter as an engineer.
