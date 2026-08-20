A chemical engineer is monitoring a highly viscous polymer flowing through a rectangular cooling channel in a refinery. The forward velocity $v$ (in meters per second) of the fluid at any point cross-sectionally depends on its distance from the bottom channel wall ($y$) and side wall ($x$), governed by the formula:

$$v(x,y) = 1.5(4x - x^2)(2y - y^2)$$

where $0 \le x \le 4$ and $0 \le y \le 2$ represent the dimensions of the channel in centimeters.

Determine the shear stress gradients, which are proportional to the fluid velocity variations $\frac{\partial v}{\partial x}$ and $\frac{\partial v}{\partial y}$, at the cross-sectional point $(1, 0.5)$.

#### Solution:

First, find the general partial derivative with respect to $x$ by treating the $y$ terms as a constant coefficient:

$$\frac{\partial v}{\partial x} = 1.5(2y - y^2) \cdot \frac{\partial}{\partial x}(4x - x^2)$$

$$\frac{\partial v}{\partial x} = 1.5(2y - y^2)(4 - 2x)$$

Evaluate $\frac{\partial v}{\partial x}$ at $(1, 0.5)$:

$$\frac{\partial v}{\partial x}(1, 0.5) = 1.5(2(0.5) - 0.5^2)(4 - 2(1))$$

$$\frac{\partial v}{\partial x}(1, 0.5) = 1.5(1 - 0.25)(2) = 3(0.75) = 2.25\text{ m/s per cm}$$

Next, find the general partial derivative with respect to $y$ by treating the $x$ terms as a constant coefficient:

$$\frac{\partial v}{\partial y} = 1.5(4x - x^2) \cdot \frac{\partial}{\partial y}(2y - y^2)$$

$$\frac{\partial v}{\partial y} = 1.5(4x - x^2)(2 - 2y)$$

Evaluate $\frac{\partial v}{\partial y}$ at $(1, 0.5)$:

$$\frac{\partial v}{\partial y}(1, 0.5) = 1.5(4(1) - 1^2)(2 - 2(0.5))$$

$$\frac{\partial v}{\partial y}(1, 0.5) = 1.5(4 - 1)(2 - 1) = 1.5(3)(1) = 4.5\text{ m/s per cm}$$

#### Meaning of the Answer & Real-Life Application:

At the coordinate $(1, 0.5)$, the velocity gradients are $\frac{\partial v}{\partial x} = 2.25$ and $\frac{\partial v}{\partial y} = 4.5$.

- **Meaning:** These values represent the fluid's "shear rate." A value of $\frac{\partial v}{\partial y} = 4.5$ indicates that moving vertically away from the wall causes the fluid velocity to increase rapidly at a rate of $4.5\text{ m/s}$ per centimeter.
    
- **Application:** In fluid mechanics, the viscosity of a fluid multiplied by its velocity gradient equals the internal **shear stress**. Because $\frac{\partial v}{\partial y}$ ($4.5$) is twice as large as $\frac{\partial v}{\partial x}$ ($2.25$) at this specific location, the pipeline experiences twice as much friction and mechanical shear stress along the vertical axis compared to the horizontal axis. Chemical engineers use these precise calculations to predict pipeline pressure drops, prevent the polymer chains from shearing/breaking apart prematurely, and size the industrial pumps correctly to maintain steady flow rates throughout the plant.