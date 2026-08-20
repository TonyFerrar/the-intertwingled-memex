**Problem:** A sports car is undergoing a high-speed handling test on a flat track. Its position path is tracked in meters by a GPS beacon modeled by $\vec{r}(t) = \langle t^3 - 3t, 2t^2, 0 \rangle$. The tires on the car can withstand a maximum lateral (normal) acceleration of $12\text{ m/s}^2$ before losing static traction and skidding outward off the track.

1. Compute the components $a_T$ and $a_N$ at $t = 2\text{ seconds}$.
    
2. Determine if the car will slide out at this point in time.
    

#### Solution:

1. Find derivatives and evaluate at $t=2$:
    
    $$\vec{v}(t) = \langle 3t^2 - 3, 4t, 0 \rangle \implies \vec{v}(2) = \langle 3(4)-3, 4(2), 0 \rangle = \langle 9, 8, 0 \rangle$$
    
    $$\vec{a}(t) = \langle 6t, 4, 0 \rangle \implies \vec{a}(2) = \langle 6(2), 4, 0 \rangle = \langle 12, 4, 0 \rangle$$
    
2. Compute speed and vector operations:
    
    $$||\vec{v}(2)|| = \sqrt{9^2 + 8^2} = \sqrt{85} \approx 9.22\text{ m/s}$$
    
    $$\vec{v} \cdot \vec{a} = (9)(12) + (8)(4) = 108 + 32 = 140$$
    
    $$\vec{v} \times \vec{a} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 9 & 8 & 0 \\ 12 & 4 & 0 \end{vmatrix} = \hat{k}\big((9)(4) - (8)(12)\big) = \hat{k}(36 - 96) = -60\hat{k}$$
    
3. Decompose acceleration:
    
    $$a_T = \frac{140}{\sqrt{85}} \approx 15.18\text{ m/s}^2$$
    
    $$a_N = \frac{|-60|}{\sqrt{85}} = \frac{60}{\sqrt{85}} \approx 6.51\text{ m/s}^2$$
    

**Engineering Meaning of the Answer:** At $t = 2$, the car is experiencing a tangential forward acceleration of $15.18\text{ m/s}^2$, meaning the engine is delivering significant longitudinal force to increase its linear velocity. Concurrently, it is experiencing a lateral normal acceleration of $a_N \approx 6.51\text{ m/s}^2$ pulling it inward to hold the turn. Since $6.51\text{ m/s}^2 \le 12\text{ m/s}^2$, the vehicle's tires possess plenty of grip reserves and will not skid. Knowing these metrics allows chassis engineers to optimize electronic stability control systems to distribute braking power safely without overloading tire grip limits during sharp maneuvers.
