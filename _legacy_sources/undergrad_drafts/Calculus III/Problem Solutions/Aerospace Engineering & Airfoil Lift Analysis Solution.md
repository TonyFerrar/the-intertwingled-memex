**Problem:** An aerospace engineer is designing the upper camber curve of an experimental aircraft wing to maximize aerodynamic lift. In a wind tunnel cross-section simulation, the profile curve of the wing is tracked by the vector function $\vec{r}(t) = \langle t, 4t - t^2, 0 \rangle$ for $0 \le t \le 4$ (where coordinates are in decimeters). According to fluid dynamics, the point of maximum curvature experiences the highest airflow velocity drop, creating the lowest local pressure zone and generating the highest concentration of lift force.

1. Determine the curvature function $\kappa(t)$ of the wing profile.
    
2. Find the curvature at the peak of the wing curve ($t = 2$).
    

#### Solution:

1. Find the first and second derivatives of the position vector:
    
    $$\vec{r}'(t) = \langle 1, 4 - 2t, 0 \rangle$$
    
    $$\vec{r}''(t) = \langle 0, -2, 0 \rangle$$
    
2. Calculate the cross product $\vec{r}'(t) \times \vec{r}''(t)$:
    
    $$\vec{r}'(t) \times \vec{r}''(t) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 4 - 2t & 0 \\ 0 & -2 & 0 \end{vmatrix} = \hat{k}\big((1)(-2) - 0\big) = \langle 0, 0, -2 \rangle$$
    
    The magnitude of the cross product is constant: $||\vec{r}'(t) \times \vec{r}''(t)|| = 2$.
    
3. Find the magnitude of the velocity vector:
    
    $$||\vec{r}'(t)|| = \sqrt{1^2 + (4 - 2t)^2 + 0^2} = \sqrt{1 + (4 - 2t)^2}$$
    
4. Set up the curvature function $\kappa(t)$:
    
    $$\kappa(t) = \frac{2}{\left(\sqrt{1 + (4 - 2t)^2}\right)^3} = \frac{2}{(1 + (4 - 2t)^2)^{3/2}}$$
    
5. Evaluate the curvature at the wing peak ($t = 2$):
    
    $$\kappa(2) = \frac{2}{(1 + (4 - 2(2))^2)^{3/2}} = \frac{2}{(1 + 0)^{3/2}} = \frac{2}{1} = 2 \text{ dm}^{-1}$$
    

**Engineering Meaning of the Answer:** The curvature at the peak of the wing is $\kappa = 2\text{ dm}^{-1}$, which corresponds to a tight local radius of curvature of $\rho = 0.5$ decimeters ($5\text{ cm}$). In aerospace engineering, knowing the exact curvature value allows fluid dynamics software to predict structural airflow transitions. Because the curvature reaches its absolute maximum at this peak, the air rushing over the wing is forced to bend and accelerate the most rapidly right here. This localized spike in velocity generates a massive drop in air pressure (via Bernoulli's Principle), telling structural engineers exactly where the upward lift forces will pull hardest on the wing frame so they can reinforce the internal spars to prevent mechanical bending or tearing.