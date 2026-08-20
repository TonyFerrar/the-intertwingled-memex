**Scenario:** A software engineer is programming the virtual UI for a submarine's radar tracking system. The game engine renders everything on a Cartesian pixel grid, where the origin $(0,0)$ is the center of the radar screen. The radar detects an enemy vessel at a distance of $r = 120$ pixels, at an angle of $\theta = \frac{11\pi}{6}$ radians (relative to the positive x-axis, representing East). 
**Task:** Calculate the exact $(x,y)$ pixel coordinates the graphics hardware must use to render the blinking red dot on the screen.

**Calculation:**
*   $x = 120\cos\left(\frac{11\pi}{6}\right) = 120\left(\frac{\sqrt{3}}{2}\right) = 60\sqrt{3} \approx 103.9$
*   $y = 120\sin\left(\frac{11\pi}{6}\right) = 120\left(-\frac{1}{2}\right) = -60$

**Meaning of the Answer:** 
The calculated coordinates $(103.9, -60)$ tell the rendering engine exactly which pixels to illuminate on the flat monitor. 

**Application to Real-Life:** 
Displays (LCDs, OLEDs) are inherently built as grid arrays (rows and columns of pixels). However, tracking systems like radar, sonar, or LIDAR inherently collect data in polar form (distance and rotational sweep). The ability to convert polar data into Cartesian coordinates instantly allows computer graphics hardware to translate real-world radial physics into something a standard digital monitor can display smoothly and accurately.
