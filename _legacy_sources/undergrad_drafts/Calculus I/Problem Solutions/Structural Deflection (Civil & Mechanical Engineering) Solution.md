A structural engineer is analyzing the bending properties of a cantilever beam under a non-uniform, variable load. The rate of change of the beam's bending moment with respect to the distance $x$ from the support is modeled by the function:
$$\frac{dM}{dx} = \frac{15}{\sqrt{x^3}}$$
Find the general formula for the bending moment $M(x)$ by integrating the rate function.

**Solution:**
1. **Reformulate the Integrand:** The variable expression is locked in a radical inside the denominator. Convert the radical to a rational exponent, then move it to the numerator via a negative exponent:
   $$\frac{15}{\sqrt{x^3}} = \frac{15}{x^{3/2}} = 15x^{-3/2}$$
2. **Set up and Integrate:**
   $$M(x) = \int 15x^{-3/2} \, dx$$
   Apply the power rule:
   $$M(x) = 15 \cdot \frac{x^{(-3/2) + 1}}{(-3/2) + 1} + C = 15 \cdot \frac{x^{-1/2}}{-1/2} + C$$
3. **Simplify:** Multiply by the reciprocal of the denominator and rewrite using a radical:
   $$M(x) = 15 \cdot (-2)x^{-1/2} + C = -30x^{-1/2} + C = -\frac{30}{\sqrt{x}} + C$$

**Meaning of the Answer & Real-Life Application:**
The resulting function $M(x) = -\frac{30}{\sqrt{x}} + C$ models the internal bending moment (the internal rotational stress) distributed across the span of the structural beam. By finding this exact equation, structural engineers can locate where the beam experiences its highest bending stress. This allows them to choose a beam material thick enough to prevent structural sagging or catastrophic failure at critical stress sections under fluctuating weight loads.
