## 1. Identify the Formula and Orientation

The total heat flow rate (energy flux) passing through a surface $S$ is calculated using a vector surface integral:

$$\text{Flux} = \iint_{S} \vec{F} \cdot \vec{n} \, dS$$

Where:

- $\vec{F}(x,y,z) = \langle 0, 0, -50 \rangle$ is the heat flux vector field.
    
- $\vec{n} = \langle 0, 0, -1 \rangle$ is the outward unit normal vector assigned to the wall.
    

The problem notes that the negative $z$-direction indicates heat leaving the room. Because the chosen outward normal vector $\vec{n}$ also points in the negative $z$-direction, a positive final flux value will represent heat successfully flowing outward through the wall.

## 2. Compute the Dot Product $\vec{F} \cdot \vec{n}$

Before handling the integration boundaries, compute the integrand by evaluating the dot product of the vector field and the normal vector:

$$\vec{F} \cdot \vec{n} = \langle 0, \, 0, \, -50 \rangle \cdot \langle 0, \, 0, \, -1 \rangle$$

$$\vec{F} \cdot \vec{n} = (0)(0) + (0)(0) + (-50)(-1) = 50$$

Because the dot product yields a constant value of 50, the heat is migrating directly perpendicular to the flat wall at a perfectly uniform rate of 50 W/m² across the entire section.

## 3. Set Up and Evaluate the Integral

Substitute the constant value back into the surface integral equation:

$$\text{Flux} = \iint_{S} 50 \, dS$$

Since 50 is a constant, it can be factored completely out of the double integral:

$$\text{Flux} = 50 \iint_{S} dS$$

The expression $\iint_{S} dS$ mathematically defines the total geometric surface area of $S$. Because $S$ is a perfectly flat rectangular cross-section lying in the $z = 0$ plane , you can bypass coordinate parameterization and use standard geometry:

- The region boundaries are given as $0 \le x \le 4$ and $0 \le y \le 3$.
    
- $\text{Area}(S) = \text{length} \times \text{width} = 4 \times 3 = 12\text{ m}^2$.
    

Multiply this area by the uniform heat distribution value to find the total heat flow rate:

$$\text{Flux} = 50 \times 12 = 600$$

## Final Answer

The total heat flow rate through the wall section is **600 W**.