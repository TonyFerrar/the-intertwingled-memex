A mechanical arm controls a plasma cutter constrained to move along an implicit elliptical track described by the equation:
$$4x^2 + 9y^2 = 36$$
Where $x$ and $y$ represent coordinate positions in meters. During operation, a tracking sensor notes that the cutter has reached the position coordinates $(x, y) = \left(\frac{3}{\sqrt{2}}, \sqrt{2}\right)$. 



**Engineering Task:** Calculate the instantaneous direction of motion ($\frac{dy}{dx}$) at this exact position so the automated software can align the cutting nozzle perpendicularly to the track.

#### **Solution:**
1. Differentiate the implicit tracking equation with respect to $x$:
   $$\frac{d}{dx}[4x^2] + \frac{d}{dx}[9y^2] = \frac{d}{dx}[36]$$
   $$8x + 18y\frac{dy}{dx} = 0$$

2. Isolate $\frac{dy}{dx}$:
   $$18y\frac{dy}{dx} = -8x \implies \frac{dy}{dx} = \frac{-8x}{18y} = -\frac{4x}{9y}$$

3. Evaluate the derivative at the given operational coordinates $\left(\frac{3}{\sqrt{2}}, \sqrt{2}\right)$:
   $$\frac{dy}{dx} = -\frac{4\left(\frac{3}{\sqrt{2}}\right)}{9(\sqrt{2})} = -\frac{\frac{12}{\sqrt{2}}}{9\sqrt{2}} = -\frac{12}{9 \cdot 2} = -\frac{12}{18} = -\frac{2}{3}$$

#### **Engineering Meaning & Real-Life Application:**
* **Meaning of the Answer ($-\frac{2}{3}$):** This numerical value represents the instantaneous geometric slope of the physical track at that coordinate. It dictates that for every $3\text{ meters}$ the robotic head shifts horizontally to the right ($+x$), it must simultaneously step vertically downward by $2\text{ meters}$ ($-y$) to keep from breaking or flying off the physical rail track. 
* **Real-Life Application:** Industrial CNC cutting machines and factory assembly robots utilize this velocity vector tracking continuously. Because plasma beams, laser beams, or mechanical drills cut cleanest when directed completely square to a surface, the computer takes the calculated slope of $-\frac{2}{3}$, finds its negative reciprocal ($\frac{3}{2}$), and instantaneously commands the wrist motors to swivel to an angle matching a slope of $1.5$. This guarantees the plasma flame hits the steel perfectly perpendicularly, preventing rough, jagged edges or defective manufactured parts.
