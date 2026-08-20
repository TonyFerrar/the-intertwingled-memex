An autonomous warehouse sorting drone ($\text{Drone A}$) is flying at a constant speed to track a moving package conveyor belt. The drone's current velocity vector relative to the warehouse floor is $\vec{v}_A = 6\hat{i} + 2\hat{j}$ meters per second. The conveyor belt's velocity vector is $\vec{v}_B = 2\hat{i} - 3\hat{j}$ meters per second.

- **Task:** Calculate the relative velocity vector of the conveyor belt _as seen from the drone's perspective_ ($\vec{v}_{\text{rel}} = \vec{v}_B - \vec{v}_A$).
    

**Solution:**

1. Apply vector subtraction in the given order:
    
    $$\vec{v}_{\text{rel}} = (2 - 6)\hat{i} + (-3 - 2)\hat{j}$$
    
2. Simplify the terms:
    
    $$\vec{v}_{\text{rel}} = -4\hat{i} - 5\hat{j}$$
    

- **Meaning of the Answer & Real-Life Application:** The relative velocity vector of $-4\hat{i} - 5\hat{j}$ means that to a camera mounted on the moving drone, the conveyor belt appears to be moving backward at $4$ meters per second along the $x$-axis and downward at $5$ meters per second along the $y$-axis. In mechanical and software engineering, calculating relative velocity via vector subtraction is critical for sensor tracking. The automated drone uses this relative vector to calculate how fast it needs to decelerate and adjust its path so it can smoothly match speeds and land safely on top of the moving belt without crashing or dropping cargo.