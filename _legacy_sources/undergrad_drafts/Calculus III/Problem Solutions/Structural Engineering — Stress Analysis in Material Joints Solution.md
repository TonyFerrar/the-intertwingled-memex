A structural engineer uses a 3D model to analyze the internal stress distribution $\sigma$ (in mega-pascals, $\text{MPa}$) inside a solid spherical steel support joint. The stress field within the region is modeled as a function of internal spatial coordinates $(x, y, z)$ measured in centimeters from the center core:
$$\sigma = h(x,y,z) = \sqrt{25 - (x^2 + y^2 + z^2)}$$

A deep core inspection needs to measure structural characteristics at the coordinate location $(3, 4, 2)$.

1. Find the mathematical domain and range of this stress function.
2. Evaluate if the inspection point $(3, 4, 2)$ can be physically analyzed within the valid material domain.
3. **Meaning & Real-Life Application:** Explain what the domain, range, and evaluation results mean for physical boundaries, material limits, and identifying high-risk failure zones.

#### **Solution:**
1. **Domain and Range:**
   * **Domain:** The function requires $25 - (x^2 + y^2 + z^2) \ge 0 \implies x^2 + y^2 + z^2 \le 25$. This defines a solid 3D ball centered at the coordinate origin with a physical radius of $5\text{ cm}$.
   * **Range:** The term $x^2 + y^2 + z^2$ varies from $0$ to $25$. The output stress ranges from $\sqrt{25-25} = 0\text{ MPa}$ to $\sqrt{25-0} = 5\text{ MPa}$.
2. **Point Evaluation:**
   * Substitute $(3, 4, 2)$ into the domain rule: $3^2 + 4^2 + 2^2 = 9 + 16 + 4 = 29$.
   * Since $29 > 25$, the coordinate point lies outside the domain. Evaluating the function yields $\sqrt{25 - 29} = \sqrt{-4}$, which is not a real number.

#### **Meaning & Real-Life Application:**
* **Domain Meaning:** The domain maps out the physical boundaries of the steel joint. Because the steel component has a physical radius of $5\text{ cm}$, any coordinate where $x^2 + y^2 + z^2 > 25$ lies completely outside the metal part, in empty air.
* **Range Meaning:** The range identifies the stress limit profile ($0$ to $5\text{ MPa}$) predicted by this mathematical model. Structural engineers compare this maximum modeled value ($5\text{ MPa}$ at the center core) against the yield strength of steel to ensure the component will not crack under structural loads.
* **Application to Evaluation:** The fact that the point $(3,4,2)$ is outside the domain indicates an impossible inspection target. Because those coordinates correspond to a point in space outside the physical boundaries of the steel joint, trying to measure internal material stress there is impossible.