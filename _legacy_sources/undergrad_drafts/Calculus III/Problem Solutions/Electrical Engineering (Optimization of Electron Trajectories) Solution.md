An electrical engineer is designing an vacuum chamber subsystem where the voltage distribution is governed by the field equation $V(x,y,z) = 100 - x^2 - 2y^2 - 3z^2$ (in Volts). A stray ionized particle becomes suspended at coordinate point $P(2, -1, 1)$.

1. Find the exact directional vector pointing along the path of maximum voltage drop.
    
2. Determine the maximum spatial rate of voltage decrease.
    

#### Solution:

1. Find and evaluate the voltage gradient vector:
    
    $$\nabla V = \langle -2x, \, -4y, \, -6z \rangle \quad \implies \quad \nabla V(2,-1,1) = \langle -4, \, 4, \, -6 \rangle$$
    
    The path of steepest voltage _drop_ (decrease) is the negative gradient ($-\nabla V$):
    
    $$\vec{v}_{\text{drop}} = -\langle -4, \, 4, \, -6 \rangle = \langle 4, \, -4, \, 6 \rangle$$
    
2. The maximum rate of decrease is equal to the negative magnitude of the gradient vector:
    
    $$\text{Max Rate of Decrease} = -|\nabla V| = -\sqrt{(-4)^2 + 4^2 + (-6)^2} = -\sqrt{16 + 16 + 36} = -\sqrt{68} \approx -8.25\text{ V/mm}$$
    

#### Engineering Meaning and Real-Life Application:

- **Meaning of the Answer:** The vector $\langle 4, -4, 6 \rangle$ marks the exact spatial orientation that yields the fastest decline in voltage. Moving along this path drops the local electric potential at an instantaneous rate of $8.25\text{ Volts}$ per millimeter.
    
- **Real-Life Engineering Application:** In particle accelerators and electronics manufacturing, free ions experience physical acceleration proportional to the electric field, which physically matches the negative voltage gradient ($\vec{E} = -\nabla V$). Knowing that the particle will accelerate along the path $\langle 4, -4, 6 \rangle$ allows electrical engineers to calculate its trajectory precisely. They use these parameters to position electrostatic deflection grids or catch basins to neutralize stray charges before they strike and damage sensitive integrated circuit components.
    