A manufacturing engineer is setting up an automated laser cutting table. The mechanical gantry needs to slice a piece of sheet metal by firing the laser and moving the tool head from a central origin. The step-motors are commanded to execute a combined velocity profile represented by the vector $\vec{v} = -3\hat{i} - 3\hat{j}$ inches per second.

- **Task:** Calculate the exact direction angle $\theta$ of the laser's cut relative to the standard positive $x$-axis.
    

**Solution:**

1. Identify components: $v_x = -3$ and $v_y = -3$ (Both negative, placing the vector in Quadrant III).
    
2. Calculate the raw angle output:
    
    $$\theta_{\text{calc}} = \tan^{-1}\left(\frac{-3}{-3}\right) = \tan^{-1}(1) = 45^\circ$$
    
3. Because both components are negative, the vector actually points down and left into Quadrant III. Apply the correction rule by adding $180^\circ$:
    
    $$\theta = 45^\circ + 180^\circ = 225^\circ$$
    

- **Meaning of the Answer & Real-Life Application:** The true direction angle of $225^\circ$ indicates that the laser is tracking diagonally backward and downward across the cutting bed. In robotics and CNC engineering, verifying the final trigonometric angle from individual motor vectors is essential. The engineer reviews this output to ensure the machine code is translating instructions perfectly; if the system failed to add $180^\circ$ due to a software bug, it might assume the tool was cutting forward into Quadrant I ($45^\circ$), ruining the sheet metal template and potentially causing a mechanical crash.