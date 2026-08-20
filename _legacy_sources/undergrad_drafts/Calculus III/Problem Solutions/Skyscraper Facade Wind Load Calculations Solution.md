**Problem:** A structural engineer is modeling the aerodynamic wind load pressures hitting the glass facade of a cylindrical skyscraper. The curved exterior curtain wall is parameterized by $\vec{r}(\theta, z) = \langle 20\cos\theta, \, 20\sin\theta, \, z \rangle$, where $z$ represents building height. Compute the normal vector $\vec{n} = \vec{r}_\theta \times \vec{r}_z$ and verify that it points outward, away from the interior core of the building.

#### Solution:

- **Step 1: Compute partial derivatives.**
    
    $$\vec{r}_\theta = \langle -20\sin\theta, \, 20\cos\theta, \, 0 \rangle$$
    
    $$\vec{r}_z = \langle 0, \, 0, \, 1 \rangle$$
    
- **Step 2: Compute the cross product.**
    
    $$\vec{n} = \vec{r}_\theta \times \vec{r}_z = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -20\sin\theta & 20\cos\theta & 0 \\ 0 & 0 & 1 \end{vmatrix}$$
    
    $$\vec{n} = \hat{i}(20\cos\theta - 0) - \hat{j}(-20\sin\theta - 0) + \hat{k}(0 - 0) = \langle 20\cos\theta, \, 20\sin\theta, \, 0 \rangle$$
    
- **Step 3: Verification.** Because the components $20\cos\theta$ and $20\sin\theta$ perfectly mirror the original $x$ and $y$ coordinate positions, this normal vector points directly outward, radially away from the vertical $z$-axis core.
    

#### Meaning of the Answer & Real-Life Application:

The vector $\langle 20\cos\theta, \, 20\sin\theta, \, 0 \rangle$ represents the directional orientation of the building’s glass exterior. In fluid mechanics and wind engineering, physical wind pressure always exerts a force acting strictly perpendicular (normal) to a structural barrier. Structural engineers multiply fluid simulation pressure scalars by this normalized vector to determine the explicit directional structural forces acting across every square meter of the glass facade, allowing them to specify safe glass thickness thresholds that withstand extreme storm events.