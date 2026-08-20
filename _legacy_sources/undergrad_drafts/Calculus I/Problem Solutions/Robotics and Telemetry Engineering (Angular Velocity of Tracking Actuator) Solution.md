**Context:** A civil defense installation uses an automated radar tracking dish mounted at ground level to monitor oncoming flight vectors. The radar sits at a fixed horizontal distance of $x = 4\text{ km}$ from the approach path line. An incoming target flies at a constant altitude of $y = 3\text{ km}$ and is tracking horizontally at a linear speed of $v = 0.5\text{ km/s}$ toward the station.

The tracking angle $\theta$ (in radians) of the servo-actuator dish adjusts relative to the plane's horizontal distance position coordinate $z$ (in $\text{km}$) according to the inverse trigonometric relationship:
$$\theta(z) = \tan^{-1}\left(\frac{3}{z}\right)$$

As the plane moves closer, the coordinate distance changes over time $t$ (in seconds) according to the linear tracking speed equation:
$$\frac{dz}{dt} = -0.5 \text{ km/s}$$



**Task:** Use Prime notation and the Chain Rule to determine the exact angular velocity required by the servo-motor ($\theta'$) when the horizontal distance coordinate settles precisely at $z = 3\text{ km}$.

#### Detailed Solution:
1. **Identify the core rules for the inverse trigonometric derivative:**
   We are differentiating $\theta(z) = \tan^{-1}(u)$ where $u = \frac{3}{z} = 3z^{-1}$.
   The base rule states: $\frac{d}{dz}[\tan^{-1}(u)] = \frac{1}{1+u^2} \cdot u'$

2. **Differentiate the inner positional function with respect to $z$:**
   $$u' = \frac{d}{dz}[3z^{-1}] = -3z^{-2} = -\frac{3}{z^2}$$

3. **Assemble the derivative $\theta'(z)$ with respect to spatial distance:**
   $$\theta'(z) = \frac{1}{1 + \left(\frac{3}{z}\right)^2} \cdot \left(-\frac{3}{z^2}\right)$$
   Distribute the $z^2$ into the denominator term to simplify the algebraic expression:
   $$\theta'(z) = \frac{-3}{z^2 \cdot \left(1 + \frac{9}{z^2}\right)} = \frac{-3}{z^2 + 9} \text{ rad/km}$$

4. **Incorporate the time parameter via the Chain Rule:**
   We need the tracking velocity with respect to time: $\frac{d\theta}{dt} = \theta'(z) \cdot \frac{dz}{dt}$
   $$\frac{d\theta}{dt} = \left(\frac{-3}{z^2 + 9}\right) \cdot \left(\frac{dz}{dt}\right)$$

5. **Evaluate operational metrics at the $z = 3\text{ km}$ boundaries:**
   Substitute the active state values ($z = 3$ and $\frac{dz}{dt} = -0.5$):
   $$\frac{d\theta}{dt} = \left(\frac{-3}{(3)^2 + 9}\right) \cdot (-0.5)$$
   $$\frac{d\theta}{dt} = \left(\frac{-3}{9 + 9}\right) \cdot (-0.5) = \left(\frac{-3}{18}\right) \cdot (-0.5)$$
   $$\frac{d\theta}{dt} = \left(-\frac{1}{6}\right) \cdot \left(-\frac{1}{2}\right) = \frac{1}{12} \approx 0.0833 \text{ rad/s}$$

#### Physical Meaning and Engineering Application:
* **Meaning of the Answer:** The value $\frac{d\theta}{dt} = \frac{1}{12} \approx 0.0833 \text{ radians per second}$ measures the necessary angular sweeping speed of the radar enclosure at that exact split second. The positive value signifies that the tracking angle must open up faster as the target approaches close range.
* **Real-Life Application:** Robotics and mechatronics design engineers rely heavily on inverse trigonometric rates to coordinate inverse kinematics. This calculation tells the control system exactly how much voltage to supply to the servo-motor coils at any given distance mark. If the plane comes too close, the calculated required value for $\frac{d\theta}{dt}$ might exceed the physical maximum rotational speed of the motor frame, causing the radar tracker to lag and drop its lock on the tracking target. Engineers map out these boundary limits to prevent mechanical overdrive failure.