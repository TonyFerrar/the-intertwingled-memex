
# Solving Oblique (Non-Right) Triangles in Vectors
In vector analysis, these appear whenever you add two **vectors that are not perpendicular** (e.g., a plane flying into a crosswind, or a cable pulling at an awkward angle). You aren't just solving a shape; you are usually adding two vectors ($\vec{A}+\vec{B}$) to find a resultant ($\vec{R}$).

These problems generally rely on two main tools: the **Law of Cosines** (for finding magnitudes) and the **Law of Sines** (for finding direction/angles).

**Context:** These arise when adding vectors tip-to-tail that are not $90^\circ$ to each other. The "sides" of the triangle correspond to the **magnitudes** of the vectors (e.g., $|\mathbf{A}|, |\mathbf{B}|, |\mathbf{R}|$).

#### 1. The "Resultant" Case (SAS - Side Angle Side)
*Use this to find the total magnitude of two combined vectors.*

* **Given:** Magnitude of Vector A, Magnitude of Vector B, and the angle $\theta$ between them.
* **Vector Context:** You know the speed of the boat and the speed of the current; you need the total speed relative to the shore.
* **Primary Tool:** **Law of Cosines**
    $$c^2 = a^2 + b^2 - 2ab \cos(\gamma)$$
    *(Note: In vector addition, if vectors are tail-to-tail, the angle in the formula is $180^\circ - \theta$)*.

#### 2. The "Direction" Case (SSS - Side Side Side)
*Use this to find the angle (direction) of a resultant.*

* **Given:** The magnitudes of all three vectors (Force A, Force B, and Resultant Force).
* **Vector Context:** You know the forces involved, but you need to determine the precise angle at which the resultant force acts to design a bracket correctly.
* **Primary Tool:** **Law of Cosines (Rearranged)**
    $$\cos(\alpha) = \frac{b^2 + c^2 - a^2}{2bc}$$

#### 3. The "Relative Motion" Case (SSA - Side Side Angle)
*Use this when working backward from a known resultant.*

* **Given:** The Resultant magnitude, one component magnitude, and a direction.
* **Vector Context:** You know the wind speed and the desired course (resultant direction); you need to find the heading (angle) the pilot must fly.
* **Primary Tool:** **Law of Sines**
    $$\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)}$$
    *(Warning: This is the "Ambiguous Case"—mathematically, there might be two valid angles, though physical constraints usually rule one out.)*