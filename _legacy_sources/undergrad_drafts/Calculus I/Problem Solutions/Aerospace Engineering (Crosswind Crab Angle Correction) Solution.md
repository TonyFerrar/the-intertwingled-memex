An flight navigation engineer is programming an autopilot routing algorithm for a drone. The drone is attempting to push forward, but a crosswind shifts its velocity components relative to the ground to $\vec{v} = 12\hat{i} - 5\hat{j}$ meters per second.

- **Task:** Calculate the standard direction angle $\theta$ of the drone's actual ground path relative to the positive $x$-axis.
    

**Solution:**

1. Identify components: $v_x = 12$ and $v_y = -5$ (Positive $x$, negative $y$, placing the vector in Quadrant IV).
    
2. Calculate the raw angle output:
    
    $$\theta_{\text{calc}} = \tan^{-1}\left(\frac{-5}{12}\right) \approx \tan^{-1}(-0.4167) \approx -22.62^\circ$$
    
3. Correct to a standard positive counterclockwise angle by adding $360^\circ$:
    
    $$\theta = -22.62^\circ + 360^\circ = 337.38^\circ$$
    

- **Meaning of the Answer & Real-Life Application:** The angle of $337.38^\circ$ (or $-22.62^\circ$) defines the true heading vector of the drone across the terrain. In aerospace engineering, this angle is known as the tracking drift angle. Because the crosswind is pushing the drone $22.62^\circ$ clockwise off its intended straight $x$-axis path, the navigation computer must use this vector data to apply a counter-steering adjustment (crabbing the nose of the drone up by $+22.62^\circ$) to neutralize the wind drift and maintain a straight flight path.
    