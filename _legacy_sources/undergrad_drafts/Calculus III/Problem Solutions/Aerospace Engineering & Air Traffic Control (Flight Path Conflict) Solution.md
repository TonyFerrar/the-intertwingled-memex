Two commercial aircraft are flying linear routes within an airport's terminal radar control area. Their paths relative to the control tower origin (measured in kilometers) are modeled parametrically as:

- **Flight A:** $x = 2 + 2t, \quad y = 7t, \quad z = 3 + 5t$
    
- **Flight B:** $x = -3 + 2s, \quad y = -1 + 6s, \quad z = 4 + 5s$
    

1. Analyze the direction vectors to determine if the flight trajectories are parallel.
    
2. Determine if the flight paths are intersecting or skew to assess if there is a physical collision hazard.
    

#### Solution

1. **Extract and compare direction vectors:**
    
    - **Direction vector of Flight A ($\vec{u}$):** $\langle 2, 7, 5 \rangle$
        
    - **Direction vector of Flight B ($\vec{v}$):** $\langle 2, 6, 5 \rangle$
        
    
    Comparing the $y$-components shows that $\langle 2, 7, 5 \rangle \neq a\langle 2, 6, 5 \rangle$. The flight trajectories are **not parallel**.
    
2. **Check for an intersection point:**
    
    Set the coordinates equal to find a shared point:
    
    1. $2 + 2t = -3 + 2s \implies 2t - 2s = -5$
        
    2. $7t = -1 + 6s$
        
    3. $3 + 5t = 4 + 5s \implies 5t - 5s = 1$
        
    
    From equation (3), dividing by 5 gives $t - s = 0.2$.
    
    From equation (1), dividing by 2 gives $t - s = -2.5$.
    
    Because $0.2 \neq -2.5$, this system contains a logical contradiction and is inconsistent. The lines **do not share a common point**.
    

#### Real-Life Engineering Meaning & Application

- **Meaning of the answer:** The flight trajectories are classified mathematically as **skew**. This means their paths do not run in the same direction, yet they will never physically cross or intersect each other in 3D space.
    
- **Engineering Application:** Air traffic control automation software runs these skew-line checks continuously. Knowing the paths are skew guarantees that the airplanes' centerlines will never occupy the exact same coordinate. However, because air currents and physical wingspans require a safety buffer, software engineers will next apply _Skill 2_ to find the closest approach distance between these skew paths to ensure they maintain standard legal aviation clearances.
    