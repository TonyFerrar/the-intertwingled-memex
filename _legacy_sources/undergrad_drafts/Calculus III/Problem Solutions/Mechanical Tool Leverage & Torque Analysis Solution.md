**Problem Statement:** A plant maintenance technician uses a standard hand wrench to loosen a stuck industrial pipe valve. The valve bolt sits at the origin. The technician grips the handle and applies a downward force vector of $\vec{F} = \langle 0, -45, 0 \rangle\text{ Newtons}$. The position vector from the center of the bolt to the technician's hand gripping the handle is $\vec{r} = \langle 0.25, 0.10, 0 \rangle\text{ meters}$. Compute the torque vector $\vec{\tau}$ acting on the bolt assembly.

**Solution:**

1. Set up the torque cross product equation: $\vec{\tau} = \vec{r} \times \vec{F}$.
    
2. Arrange the components into a $3 \times 3$ matrix format:
    
    $$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 0.25 & 0.10 & 0 \\ 0 & -45 & 0 \end{vmatrix}$$
    
3. Expand along the top row to isolate the directional terms:
    
    $$\vec{\tau} = \hat{i}(0 - 0) - \hat{j}(0 - 0) + \hat{k}\big((0.25 \cdot -45) - (0.10 \cdot 0)\big)$$
    
4. Calculate the scalar results:
    
    $$\vec{\tau} = \big(-11.25 - 0\big)\hat{k} = -11.25\hat{k}\text{ N}\cdot\text{m}$$
    

**Meaning of the Answer and Engineering Application:**

The cross product calculation results in a torque vector of $-11.25\hat{k}\text{ N}\cdot\text{m}$. Because the output vector points strictly along the negative $z$-axis, it tells mechanical engineers that the applied force is producing a clockwise tightening/loosening rotational twist around the centerline of the bolt (by the right-hand rule). Mechanical engineers utilize this computation to verify if human workers can generate enough rotational force to open frozen industrial infrastructure valves, or to program automated robotic assembly arms with the correct structural torque parameters to avoid shearing off fastener heads during manufacturing.