**Context:** A CNC milling machine is carving a customized aluminum aerospace component. The raw block of aluminum sits on the machine bed, where the bottom-left corner is calibrated as the origin $(0,0,0)$. The computer program (G-code) tells the cutting bit to drill a pilot hole at point $A = (2, 3, 5)$ (measured in inches), and then immediately move to point $B = (6, 6, 5)$ to drill a second hole.

**Task:** 1. Calculate the distance between hole $A$ and hole $B$.

2. Explain the significance of the coordinates and the calculated distance to the machinist and manufacturing engineer.

**Mathematical Solution:** Using the 3D distance formula:

$$d = \sqrt{(6 - 2)^2 + (6 - 3)^2 + (5 - 5)^2}$$

$$d = \sqrt{(4)^2 + (3)^2 + (0)^2}$$

$$d = \sqrt{16 + 9 + 0} = \sqrt{25} = 5\text{ inches}$$

**Real-Life Application Meaning:**

Notice that the z-coordinates for both points are exactly the same ($z = 5$). This tells the engineer that both holes are on the exact same horizontal plane of the part, meaning the cutting tool does not need to raise or lower its vertical axis during this specific move. The distance of $5\text{ inches}$ tells the manufacturing engineer exactly how far the machine's horizontal servo motors must travel. By multiplying this distance by the machine's "feed rate" (travel speed), the engineer can calculate the exact cycle time of the manufacturing process to estimate production costs.