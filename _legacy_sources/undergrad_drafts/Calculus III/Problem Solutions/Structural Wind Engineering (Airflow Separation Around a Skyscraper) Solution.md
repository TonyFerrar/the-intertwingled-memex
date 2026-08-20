Structural engineers are modeling high-altitude wind hitting the flat, vertical face of a skyscraper. The wind profile as it strikes the center of the building face and splits outward is modeled by the field:
$$\vec{W}(x,y) = \langle -2x, 2y \rangle$$

**Problem:** Evaluate the vector at $(1,1)$ and $(-1,1)$. Classify the field geometry and describe how the wind behaves dynamically when it encounters the building face.

#### Solution:
1. Substitute coordinates:
   * At $(1,1)$: $\vec{W}(1,1) = \langle -2, 2 \rangle$ (Points up and left)
   * At $(-1,1)$: $\vec{W}(-1,1) = \langle 2, 2 \rangle$ (Points up and right)
2. **Classification:** This is a **Saddle (Hyperbolic) Field**. Along the horizontal $x$-axis ($y=0$), the vectors point directly inward toward the origin ($\vec{W} = \langle -2x, 0 \rangle$). Along the vertical $y$-axis ($x=0$), the vectors point directly away from the origin ($\vec{W} = \langle 0, 2y \rangle$).

#### Engineering Meaning & Application:
* **Meaning of the Answer:** At the exact origin $(0,0)$, the wind velocity drops to zero. As wind approaches this zone from the left and right, it slows down and is forced to split sideways and upward. At $(1,1)$, the air is actively moving away from the central $x$-axis while being squeezed outward.
* **Real-Life Application:** The origin represents the "stagnation point" where the wind's kinetic energy is converted entirely into static pressure against the structure. By classifying the saddle behavior, engineers can determine exactly where the highest wind load pressures will deform the building's glass facade, allowing them to structurally reinforce those specific structural glass curtain walls and steel frames against structural failure during storms.