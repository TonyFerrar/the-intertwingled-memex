An aerospace engineer is designing a rocket nozzle engine component. During a hot-fire test simulation, the temperature distribution $T$ (in hundreds of degrees Celsius) within the solid surrounding material is modeled by the three-variable function $T = g(x,y,z) = x^2 + y^2 + z^2$, where $(x,y,z)$ represents spatial coordinates (in centimeters) from the central combustion core.

1. Determine the mathematical equations for the level surfaces at temperature thresholds $c = 1$ and $c = 4$.
2. Determine the mathematical equation for the cross-section slice running through the main horizontal plane $z = 0$.
3. **Meaning & Real-Life Application:** Explain what these level surfaces and cross-sections mean for structural integrity, selecting heat-resistant materials, and avoiding thermal cracking.

#### **Solution:**
1. **Level Surfaces:** Setting $g(x,y,z) = c$ yields $x^2 + y^2 + z^2 = c$.
   * For $c = 1$: $x^2 + y^2 + z^2 = 1$ (A spherical shell with a radius of $1\text{ cm}$ where the temperature is exactly $100^\circ\text{C}$)
   * For $c = 4$: $x^2 + y^2 + z^2 = 4$ (A spherical shell with a radius of $2\text{ cm}$ where the temperature is exactly $400^\circ\text{C}$)
2. **Cross-Section:** Setting $z = 0$ yields the 2D plane equation $T = x^2 + y^2$.

#### **Meaning & Real-Life Application:**
* **Level Surfaces Meaning:** In thermal CAD analysis, these level surfaces are called **isosurfaces**. They visually map out the boundaries of thermal zones inside a solid object. Because these isosurfaces are expanding spheres, they show the engineer that heat is radiating outward uniformly from the center core.

* **Cross-Section Meaning:** The cross-section equation $T = x^2 + y^2$ allows engineers to inspect the temperature profile along a specific flat plane of the engine. By analyzing how fast the temperature changes across this slice, mechanical engineers can calculate thermal gradients. Large differences in temperature across a short distance cause different parts of the metal to expand at different rates, leading to **thermal stress and cracking**. This analysis helps engineers choose the right heat-resistant alloys and design cooling channels to keep the engine from failing.