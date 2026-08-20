**Problem:** A robotic arm handles a laser cutter that must carve out a complex curve on an aerospace bracket. The design team defines the spatial coordinate path of the laser tip using the position vector $\vec{r}(t) = \langle \frac{1}{3}t^3, t^2, 2t \rangle$, where $t$ is an internal tracking parameter representing operational cycles ($t \ge 0$). To prevent structural deformation or burning of the metal workpiece, the laser cutter must maintain a completely constant physical cutting speed.

1. Find the arc length function $s(t)$ starting from cycle $t=0$.
    
2. Parametrize the robot's toolpath in terms of the physical distance traveled ($s$) so that firmware can control the laser tip smoothly across space.
    