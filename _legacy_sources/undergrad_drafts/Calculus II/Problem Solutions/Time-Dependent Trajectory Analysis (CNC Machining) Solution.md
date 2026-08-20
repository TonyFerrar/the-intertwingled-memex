**Scenario:** A manufacturing engineer is programming a Computer Numerical Control (CNC) laser cutter. The laser needs to cut a specific slot into a sheet of metal. The cutting head's path is programmed with the following parameters:
$x(t) = 4 - t^2$
$y(t) = 2t$
where $x$ and $y$ are in millimeters and $t$ is time in seconds, from $t = 0$ to $t = 3$. 

**Problem:** Track the orientation of the laser cutter. Will the laser start at the wide end of the cut and move to a point, or start at a point and cut outward?

**Solution:**
Create a table to track the laser's path over the 3-second interval:

| $t$ (sec) | $x = 4 - t^2$ | $y = 2t$ | Point $(x,y)$ |
|:---:|:-------------:|:--------:|:-------------:|
|  0  | $4 - 0 = 4$   | $2(0) = 0$ | $(4, 0)$      |
|  1  | $4 - 1 = 3$   | $2(1) = 2$ | $(3, 2)$      |
|  2  | $4 - 4 = 0$   | $2(2) = 4$ | $(0, 4)$      |
|  3  | $4 - 9 = -5$  | $2(3) = 6$ | $(-5, 6)$     |

**Meaning & Real-Life Application:**
The data points reveal the laser starts at $(4, 0)$ and moves leftward and upward along a parabolic curve, ending at $(-5, 6)$. By understanding the orientation (the chronological movement of the points), the engineer confirms the exact starting coordinate of the toolhead. This is critical in CNC machining: knowing the orientation ensures the laser begins cutting from a safe starting point on the material edge and moves inward, rather than plunging blindly into the middle of the workpiece and potentially damaging the tool or the metal sheet.