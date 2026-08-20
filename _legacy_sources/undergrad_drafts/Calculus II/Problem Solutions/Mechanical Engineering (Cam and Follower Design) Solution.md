**Scenario:** A mechanical engineer is designing an egg-shaped cam for an internal combustion engine. As the cam rotates, it pushes a "follower" rod up and down to open and close an engine valve. The profile of the cam is given by the polar equation $r = 30 + 10\cos(\theta)$, where $r$ is the distance from the camshaft center to the edge (in millimeters). 
**Task:** Calculate the radial rate of change $\frac{dr}{d\theta}$ exactly when the cam is at $\theta = \frac{\pi}{2}$ radians. 

**Calculation:**
1.  Differentiate the cam profile equation:
    $$\frac{dr}{d\theta} = -10\sin(\theta)$$
2.  Evaluate at $\theta = \frac{\pi}{2}$:
    $$\frac{dr}{d\theta} \bigg|_{\theta = \pi/2} = -10\sin\left(\frac{\pi}{2}\right) = -10(1) = -10 \text{ mm/rad}$$

**Meaning of the Answer:** 
The answer $-10 \text{ mm/rad}$ means that at that precise moment of rotation, the edge of the cam is moving closer to the center at a rate of 10 millimeters per radian of rotation. Consequently, the valve follower is dropping inward at that exact rate.

**Application to Real-Life:** 
In automotive mechanical engineering, "cam profiles" dictate exactly how an engine breathes. If the inward or outward radial rate of change ($dr/d\theta$) is too steep (a very high negative or positive number), the metal follower might "jump" or detach from the cam at high RPMs—a catastrophic engine failure known as "valve float." Engineers use this differential analysis to ensure the slopes of their cams remain within safe mechanical tolerances.
