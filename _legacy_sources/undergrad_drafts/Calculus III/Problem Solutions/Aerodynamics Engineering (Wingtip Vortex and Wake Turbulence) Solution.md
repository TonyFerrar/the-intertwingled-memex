An aerospace engineer is tracking air turbulence left in the wake of a heavy cargo transport aircraft. Near the tip of the wing, the localized trailing airflow velocity field (in knots) is modeled by the purely rotational field:
$$\vec{v}(x,y) = \langle -2y, 2x \rangle$$

**Problem:** 1. Sketch or identify the behavior of the field at the grid boundary coordinates $(0,3)$ and $(3,0)$.
2. Classify the behavior of this field and describe what happens to its strength as a trailing aircraft flies further outward from the core axis.

#### Solution:
1. Evaluate the specific boundaries:
   * At $(3,0)$: $\vec{v}(3,0) = \langle -2(0), 2(3) \rangle = \langle 0, 6 \rangle$ (Points straight up with a strength of 6 knots)
   * At $(0,3)$: $\vec{v}(0,3) = \langle -2(3), 2(0) \rangle = \langle -6, 0 \rangle$ (Points straight left with a strength of 6 knots)
2. **Classification:** This is a **Rotational Field** (specifically a rigid-body vortex model). The magnitude increases linearly with distance: $\|\vec{v}\| = \sqrt{(-2y)^2 + (2x)^2} = 2\sqrt{x^2+y^2}$.

#### Engineering Meaning & Application:
* **Meaning of the Answer:** The vectors create a tight, counter-clockwise spinning cylinder of air behind the wing. The further a trailing aircraft gets from the exact center of this vortex core, the stronger the shearing rotational force it encounters (6 knots at a distance of 3 units, 8 knots at a distance of 4 units, etc.).
* **Real-Life Application:** Wake turbulence classification dictates the required spatial safety separation rules implemented by air traffic control. Because this rotational field carries immense rolling moments, smaller aircraft following too closely can lose control if they intercept the high-magnitude vectors spinning off a heavy aircraft's wingtips.
