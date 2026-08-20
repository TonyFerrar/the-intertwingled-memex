**Scenario:** A robotics automation programmer is tracking a high-speed arm assembly on a factory floor. To move a welding gripper to a precise 3D position, three separate electric motors must rotate simultaneously to deliver exact component linear velocities ($v_1$, $v_2$, and $v_3$ in millimeters per second). The spatial coordinate system links these motor speeds together via the following matrix equation:

$$\begin{bmatrix} 2 & 1 & 1 \\ 1 & 3 & 2 \\ 1 & 0 & 4 \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} = \begin{bmatrix} 25 \\ 40 \\ 30 \end{bmatrix}$$

1. Expand this matrix layout back into its three original, standard linear algebraic equations.
    
2. If solving this system yields the following values:
    
    $$\begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} = \begin{bmatrix} 5.26 \\ 7.89 \\ 6.18 \end{bmatrix}\text{ mm/s}$$
    
    Explain the physical meaning of this result vector and how it applies to factory automation programming.
    