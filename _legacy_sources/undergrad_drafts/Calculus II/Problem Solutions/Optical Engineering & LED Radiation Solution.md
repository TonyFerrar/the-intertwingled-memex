**Scenario:** An optical engineer is testing a new high-powered LED designed for a car headlight. Instead of emitting light uniformly in a sphere, the manufacturer's data sheet defines the LED's forward light intensity boundary as $x^2 + y^2 = 15y$ (where units are in lux at a specific distance). To program the lighting simulation software, the engineer needs to input this boundary in polar coordinates.
**Task:** Convert the Cartesian boundary $x^2 + y^2 = 15y$ into a polar equation isolated for $r$.

**Calculation:**
1.  Substitute polar identities ($x^2+y^2 = r^2$ and $y = r\sin(\theta)$):
    $$r^2 = 15(r\sin(\theta))$$
2.  Divide both sides by $r$ (to find the non-zero boundary):
    $$r = 15\sin(\theta)$$

**Meaning of the Answer:** 
The polar equation $r = 15\sin(\theta)$ describes the exact "throw" or spread of the LED's light beam, where the distance of the light ($r$) is directly dependent on the angle of projection ($\theta$). 

**Application to Real-Life:** 
When engineers design optics—such as car headlights, stadium lights, or even laser diodes—they must account for the "radiation lobe" of the light source. A Cartesian equation like $x^2 + y^2 = 15y$ is terrible for simulating how a beam projects outward radially. By converting to $r = 15\sin(\theta)$, optics software can easily map out the angular spread of the beam, allowing engineers to design precise glass reflectors and lenses that focus the light safely onto the road ahead rather than blinding oncoming traffic.