The electric potential (voltage) distribution within an industrial particle separator chamber is mapped by the three-dimensional field function:

$$V(x,y,z) = 50 + 4x^2 - 3y^2 + z^2$$

Compute the voltage gradient $\nabla V$ at the position $(1, 2, -2)$.

#### Solution:

1. Compute the 3D partial derivatives:
    
    $$V_x = 8x \quad \implies \quad V_x(1, 2, -2) = 8(1) = 8$$
    
    $$V_y = -6y \quad \implies \quad V_y(1, 2, -2) = -6(2) = -12$$
    
    $$V_z = 2z \quad \implies \quad V_z(1, 2, -2) = 2(-2) = -4$$
    
2. Assemble the 3D vector:
    
    $$\nabla V(1, 2, -2) = \langle 8, \, -12, \, -4 \rangle$$
    

#### Engineering Meaning and Real-Life Application:

- **Meaning of the Answer:** The gradient vector $\langle 8, -12, -4 \rangle$ defines the directional orientation in 3D space where the voltage increases most aggressively, possessing a maximum spatial change rate of $|\nabla V| = \sqrt{8^2 + (-12)^2 + (-4)^2} = \sqrt{224} \approx 14.97\text{ V/cm}$.
    
- **Real-Life Engineering Application:** In physical electrostatics, the physical electric field vector $\vec{E}$ is defined as the negative gradient of voltage ($\vec{E} = -\nabla V$). Thus, at this coordinate, $\vec{E} = \langle -8, 12, 4 \rangle$. Electrical and manufacturing engineers utilize this precise vector calculation to predict the physical trajectories of charged particulates or ions moving through the separator. Since positively charged dust particles accelerate precisely in the direction of the electric field vector $\vec{E}$, calculating this gradient allows engineers to position collection plates accurately to catch soot or dangerous airborne pollutants out of exhaust streams.