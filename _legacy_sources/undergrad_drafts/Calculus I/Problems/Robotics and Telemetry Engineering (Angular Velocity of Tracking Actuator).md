**Context:** A civil defense installation uses an automated radar tracking dish mounted at ground level to monitor oncoming flight vectors. The radar sits at a fixed horizontal distance of $x = 4\text{ km}$ from the approach path line. An incoming target flies at a constant altitude of $y = 3\text{ km}$ and is tracking horizontally at a linear speed of $v = 0.5\text{ km/s}$ toward the station.

The tracking angle $\theta$ (in radians) of the servo-actuator dish adjusts relative to the plane's horizontal distance position coordinate $z$ (in $\text{km}$) according to the inverse trigonometric relationship:
$$\theta(z) = \tan^{-1}\left(\frac{3}{z}\right)$$

As the plane moves closer, the coordinate distance changes over time $t$ (in seconds) according to the linear tracking speed equation:
$$\frac{dz}{dt} = -0.5 \text{ km/s}$$



**Task:** Use Prime notation and the Chain Rule to determine the exact angular velocity required by the servo-motor ($\theta'$) when the horizontal distance coordinate settles precisely at $z = 3\text{ km}$.
