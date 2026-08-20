A civil surveyor maps a mountain ridge where the terrain elevation $z$ (in dekameters) is given by the function $z = f(x,y) = x^2 + y^2$, where $x$ and $y$ represent regional grid coordinates (in kilometers). A highway design team needs to analyze the terrain to plan a road incline.

1. Find the mathematical equations for the level curves at elevations $c = 1$ and $c = 4$.
2. Determine the equation of the vertical trace along the cross-sectional cutting plane $y = 0$.
3. **Meaning & Real-Life Application:** Explain what these level curves and vertical traces mean for civil engineering design, drawing topographical maps, and calculating the grade of a road.

#### **Solution:**
1. **Level Curves:** Setting $f(x,y) = c$ yields $x^2 + y^2 = c$.
   * For $c = 1$: $x^2 + y^2 = 1$ (A circle of radius $1\text{ km}$ mapping out a constant elevation of $10\text{ meters}$)
   * For $c = 4$: $x^2 + y^2 = 4$ (A circle of radius $2\text{ km}$ mapping out a constant elevation of $40\text{ meters}$)
2. **Vertical Trace:** Setting $y = 0$ yields the equation $z = x^2$. This represents an upward-opening parabola passing through the origin within the vertical $xz$-plane.

#### **Meaning & Real-Life Application:**
* **Level Curves Meaning:** On a civil engineering blueprint, these level curves are drawn as **topographical contour lines**. Because the contour lines are perfect circles, they inform engineers that the mountain is a symmetrical cone or bowl. 

* **Vertical Traces Meaning:** The vertical trace equation $z = x^2$ provides the structural cross-section profile of the mountain side. Civil engineers use this parabolic equation to calculate the exact slope or **road grade** ($dz/dx = 2x$) at any point along the hill. If the slope exceeds maximum safety codes, engineers use this mathematical trace to determine exactly how much soil must be excavated to create a flatter, safer road incline.