**Problem Statement:** A robotic arm is holding a heavy tool at its end-effector assembly. The pivot axis of the robot's shoulder joint sits at the origin. The position vector from the shoulder joint to the tool assembly is $\vec{r} = \langle 0.8, 0, 0.6 \rangle\text{ meters}$. Due to the weight of the tool, a downward gravitational force vector is acting at that position, represented by $\vec{F} = \langle 0, -100, 0 \rangle\text{ Newtons}$. Compute the structural torque vector $\vec{\tau}$ experienced at the shoulder joint.

**Solution:**

1. Set up the cross product for torque: $\vec{\tau} = \vec{r} \times \vec{F}$.
    
2. Arrange the coordinates into a $3 \times 3$ determinant matrix:
    
    $$\vec{\tau} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 0.8 & 0 & 0.6 \\ 0 & -100 & 0 \end{vmatrix}$$
    
3. Expand along the top row:
    
    $$\vec{\tau} = \hat{i}\big((0)(0) - (0.6)(-100)\big) - \hat{j}\big((0.8)(0) - (0.6)(0)\big) + \hat{k}\big((0.8)(-100) - (0)(0)\big)$$
    
4. Simplify the component terms:
    
    $$\vec{\tau} = \hat{i}(0 - (-60)) - \hat{j}(0) + \hat{k}(-80 - 0)$$
    
    $$\vec{\tau} = 60\hat{i} - 80\hat{k}\text{ N}\cdot\text{m}$$
    

**Meaning of the Answer and Engineering Application:**

The resulting torque vector is $\langle 60, 0, -80 \rangle\text{ N}\cdot\text{m}$. Rather than a simple scalar value, this vector tells mechatronics engineers exactly how the joint is twisting in 3D space: it is experiencing a twisting stress around the $x$-axis ($60\hat{i}$) and a twisting stress around the $z$-axis ($-80\hat{k}$). Robotic engineers use this cross product calculation to choose the correct electric servo motors for each joint. The motor selected for the shoulder must be rated to comfortably counter these specific directional torque demands, preventing internal gear stripping or structural collapse when the arm is extended.