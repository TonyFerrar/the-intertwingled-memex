## 1. Identify the Formula and Orientation

The volumetric flow rate $Q$ of a fluid through a surface $S$ is represented by a vector surface integral, commonly known as **flux**:

$$Q = \iint_{S} \vec{v} \cdot \vec{n} \, dS$$

Where:

- $\vec{v}(x,y,z) = \langle 0, 0, 3 \rangle$ is the velocity vector field of the fluid.
    
- $\vec{n}$ is the unit normal vector pointing in the direction of the surface orientation.
    

The problem states that the circular opening lies flat in the plane $z = 0$ and is oriented in the positive $z$-direction ($+z$). A vector perpendicular to a horizontal plane pointing upward is simply the standard unit vector along the $z$-axis:

$$\vec{n} = \langle 0, \, 0, \, 1 \rangle$$

## 2. Compute the Dot Product $\vec{v} \cdot \vec{n}$

Before setting up the limits of the double integral, compute the integrand by taking the dot product of the velocity field and the unit normal vector:

$$\vec{v} \cdot \vec{n} = \langle 0, \, 0, \, 3 \rangle \cdot \langle 0, \, 0, \, 1 \rangle$$

$$\vec{v} \cdot \vec{n} = (0)(0) + (0)(0) + (3)(1) = 3$$

Because the dot product yields a constant value of 3, the fluid is passing directly perpendicular to the surface at a uniform rate everywhere across the opening.

## 3. Set Up and Evaluate the Integral

Substitute the constant value back into the flux integral equation:

$$Q = \iint_{S} 3 \, dS$$

Since 3 is a constant, it can be factored out of the integral:

$$Q = 3 \iint_{S} dS$$

The expression $\iint_{S} dS$ is the geometric definition for the total surface area of $S$. Because $S$ is a flat circular disk defined by $x^2 + y^2 \le 1$, we can avoid tedious integration coordinates entirely by utilizing the basic geometric area formula for a circle ($\text{Area} = \pi R^2$):

- The boundary equation $x^2 + y^2 \le 1$ tells us the radius of the circle is $R = \sqrt{1} = 1$.
    
- $\text{Area}(S) = \pi (1)^2 = \pi$
    

Multiply this area by the constant scaling factor to find the total volumetric flow rate:

$$Q = 3 \cdot \pi = 3\pi$$

## Final Answer

$$Q = 3\pi \text{ m}^3/\text{s}$$