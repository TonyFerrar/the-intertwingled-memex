A communication satellite is deployed into a geostationary transfer path. Relative to a global earth tracking coordinate center (measured in kilometers), the satellite passes directly through an initial orbital insertion checkpoint at $A = (4200, 1500, 6300)$ and is tracked moving along a linear vector trajectory toward a target deep-space relay node located at $B = (4350, 1620, 6500)$.

1. Write the vector equation that maps out the satellite's linear path.
    
2. Express this path as a set of parametric equations.
    
3. Determine the satellite's exact spatial coordinates at $t = 0.4$ (representing $40\%$ completion of this flight leg).
    

#### Solution

1. **Find the direction vector $\vec{v}$ from checkpoint $A$ to $B$:**
    
    $$\vec{v} = \vec{AB} = \langle 4350 - 4200, \ 1620 - 1500, \ 6500 - 6300 \rangle = \langle 150, 120, 200 \rangle$$
    
    Using point $A$ as our initial position vector $\vec{r}_0 = \langle 4200, 1500, 6300 \rangle$, the vector equation is:
    
    $$\vec{r}(t) = \langle 4200, 1500, 6300 \rangle + t\langle 150, 120, 200 \rangle$$
    
2. **Extract the parametric equations:**
    
    - $x = 4200 + 150t$
        
    - $y = 1500 + 120t$
        
    - $z = 6300 + 200t$
        
3. **Evaluate the coordinates at $t = 0.4$:**
    
    - $x = 4200 + 150(0.4) = 4200 + 60 = 4260$
        
    - $y = 1500 + 120(0.4) = 1500 + 48 = 1548$
        
    - $z = 6300 + 200(0.4) = 6300 + 80 = 6380$
        
    
    The exact coordinates are $(4260, 1548, 6380)$.
    

#### Real-Life Engineering Meaning & Application

- **Meaning of the answer:** The parametric equations provide a time-dependent coordinate map of the satellite's position in space. The result $(4260, 1548, 6380)$ is the precise three-dimensional coordinate location of the spacecraft at that specific milestone.
    
- **Engineering Application:** Ground tracking stations rely on these parametric calculations to orient telecommunication dishes toward the satellite. If the satellite's physical position at $t = 0.4$ does not match $(4260, 1548, 6380)$, automated guidance software detects an orbital tracking error and calculates the exact auxiliary thruster impulses required to force the satellite back on path.
    