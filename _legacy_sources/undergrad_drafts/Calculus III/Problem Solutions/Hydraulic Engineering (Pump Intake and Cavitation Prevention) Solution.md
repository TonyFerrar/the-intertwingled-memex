A civil engineer is designing the water intake basin for a municipal water treatment facility. To prevent air from being sucked into the turbine pumps, the fluid field must avoid whirlpool configurations. The fluid velocity profile near the intake channel boundary is mapped as:
$$\vec{u}(x,y) = \langle -x, -y \rangle$$

**Problem:** Evaluate the field vectors at coordinates $(0,2)$ and $(2,0)$, classify the global field structure, and identify where the fluid is accumulating.

#### Solution:
1. Differentiate component values:
   * At $(2,0)$: $\vec{u}(2,0) = \langle -2, 0 \rangle$ (Points straight left, toward the origin)
   * At $(0,2)$: $\vec{u}(0,2) = \langle 0, -2 \rangle$ (Points straight down, toward the origin)
2. **Classification:** This is an **Inward Radial Field** (Sink field). Every single vector in the domain points directly toward the origin $(0,0)$.



#### Engineering Meaning & Application:
* **Meaning of the Answer:** Water is rushing directly inward from all directions toward a central point at a speed proportional to its distance from that point. At $(2,0)$, water moves left at 2 units of speed; at $(1,0)$, it moves left at 1 unit of speed.
* **Real-Life Application:** Engineers classify this inward radial geometry to ensure uniform suction into a pump. If the field geometry transitions from a radial flow into a rotational flow, a vortex (funnel/drain swirl) will form. Whirlpools draw pockets of atmospheric air into the pipes, causing cavitation—a destructive phenomenon where air bubbles violently collapse inside machinery, pitting and eroding expensive steel turbine blades.
