A civil engineer is analyzing the internal bending stress distribution along a structural steel support beam for a highway bridge. Due to an asymmetrical soil load pushing against the retaining wall at the base of the span, the internal bending moment rate with respect to the distance $x$ (in meters) along the beam requires modeling a linear variable shift. To establish the general formula for the total accumulated bending moment $M(x)$ (in Newton-meters) along the beam, the engineer must evaluate the following indefinite integral:
$$M(x) = \int x\sqrt{5-x}\,dx$$

#### **Mathematical Solution using Skill 3:**
1. **Identify the Target:** Set $u$ equal to the linear expression inside the radical:
   $$u = 5 - x \implies du = -1\,dx \implies -du = dx$$
2. **Remodel the Leftover Variable (Skill 3):** The substitution leaves a standalone $x$ outside the radical. We invert our substitution equation to express $x$ in terms of $u$:
   $$u = 5 - x \implies x = 5 - u$$
3. **Substitute and Distribute:** Rewrite the entire integral in the $u$-domain:
   $$\int (5 - u)\sqrt{u}(-du) = -\int (5u^{1/2} - u^{3/2})\,du = \int (u^{3/2} - 5u^{1/2})\,du$$
4. **Integrate:** Apply the Power Rule term-by-term:
   $$\frac{2}{5}u^{5/2} - 5\left(\frac{2}{3}u^{3/2}\right) + C = \frac{2}{5}u^{5/2} - \frac{10}{3}u^{3/2} + C$$
5. **Revert back to the original domain:** Substitute $5-x$ back in for $u$:
   $$M(x) = \frac{2}{5}(5-x)^{5/2} - \frac{10}{3}(5-x)^{3/2} + C$$

#### **The Physical Meaning & Application:**
* **Meaning of the Answer:** The derived function $M(x)$ outlines the **general mathematical profile of the internal bending moment** across any point along the bridge support beam. 
* **Real-Life Engineering Application:** Structural engineers use this indefinite profile to pinpoint exactly where the internal shearing forces and bending stresses reach their absolute maximum values. By possessing a continuous, general equation rather than a single numerical value, the engineering team can run safety simulations for varying bridge lengths. They use this data to determine the required thickness of the steel reinforcement bars (rebar) and concrete casing at specific coordinates, preventing catastrophic structural yielding or beam cracking under heavy highway traffic.
