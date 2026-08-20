**Scenario:** An aerospace engineer is programming a drone to inspect a bridge. The drone's pre-programmed flight path relative to a starting beacon is given by the parametric equations:
$x(t) = 2t$
$y(t) = -t^2 + 4t + 5$
where $x$ and $y$ are in meters and $t$ is time in seconds.

**Problem:** Eliminate the parameter to find the physical shape of the drone's flight path. Determine the maximum height the drone reaches.

**Solution:**
1. Solve for $t$: $t = \frac{x}{2}$
2. Substitute into $y$: $y = -\left(\frac{x}{2}\right)^2 + 4\left(\frac{x}{2}\right) + 5$
3. Simplify: $y = -\frac{1}{4}x^2 + 2x + 5$

To find the maximum height, we find the vertex of this downward-opening parabola.
The $x$-coordinate of the vertex is $x = -\frac{b}{2a} = -\frac{2}{2(-1/4)} = -\frac{2}{-1/2} = 4$.
The maximum height is $y(4) = -\frac{1}{4}(4)^2 + 2(4) + 5 = -4 + 8 + 5 = 9$ meters.

**Meaning & Real-Life Application:** 
The answer tells the engineer that the drone is flying in a parabolic trajectory and will reach a maximum altitude of 9 meters above the beacon. By eliminating the parameter $t$, the engineer can analyze the spatial clearances of the drone's physical path—ensuring, for example, that a 9-meter height is sufficient to avoid obstacles or stay within designated inspection zones, regardless of *when* the drone actually reaches that point.
