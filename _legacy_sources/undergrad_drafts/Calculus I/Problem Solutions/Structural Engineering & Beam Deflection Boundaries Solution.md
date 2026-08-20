**Problem Context:** A structural engineer is modeling the vertical deflection $y$ (in millimeters) of a structural steel beam used in a building framework under a uniform load. The deflection profile across the length of the span is modeled by the function:
$$y(x) = \frac{x^2(x - 6)}{x^2 - 36}$$
where $x$ represents the position along the span in meters ($x \ge 0$). 

**Questions:** 1. Determine the mathematical domain of the function $y(x)$. 
2. Identify any points of discontinuity (values where $y(x)$ is undefined) and find the $x$-intercept.

**Solution Analysis:**
1. **Domain and Discontinuities:** Setting the denominator to zero yields $x^2 - 36 = 0 \implies x = \pm 6$. Because positions along the physical beam must be non-negative, we only look at $x = 6$. At $x = 6$, substituting into the numerator yields $6^2(6-6) = 0$. Since we get a $\frac{0}{0}$ indeterminate form, we factor the function to evaluate the discontinuity:
   $$y(x) = \frac{x^2(x - 6)}{(x - 6)(x + 6)} = \frac{x^2}{x + 6} \quad (\text{for } x \neq 6)$$
   This shows a removable discontinuity (a hole) at $x = 6$. The mathematical domain for non-negative positions is $[0, 6) \cup (6, \infty)$.
2. **$x$-intercept:** Setting the factored numerator to zero gives $x^2 = 0 \implies x = 0$. The intercept is at $(0,0)$.

**Real-Life Application Meaning:** The point of discontinuity at $x = 6$ represents a structural boundary condition—such as a physical hinge, pivot support, or the literal end of the continuous beam span where the load calculations cut off. The $x$-intercept at $(0,0)$ means that at the exact start of the beam anchor point ($x=0$), the vertical displacement is zero ($y=0$). This mathematically confirms that the beam is rigidly fixed at its starting support wall and cannot sink under pressure at that anchor.
