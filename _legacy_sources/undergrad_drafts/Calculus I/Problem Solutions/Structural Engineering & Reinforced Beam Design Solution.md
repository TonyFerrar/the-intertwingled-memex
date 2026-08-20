**Problem Context:** A structural engineer calculates the bending moment $M$ (in kilonewton-meters) along a reinforced concrete support girder under variable construction loading. The bending moment as a function of the distance $x$ (in meters) from the left support wall is given by the function:
$$M(x) = x^3 - 6x^2 + 9x$$

**Questions:** 
1. Find the intervals where the bending moment is increasing and decreasing, and locate all points of relative extrema.
2. Find the inflection point of the bending moment function.

**Solution Analysis:**
1. **Extrema:** Find $M'(x) = 3x^2 - 12x + 9$. Set to zero: $3(x^2 - 4x + 3) = 0 \implies 3(x-1)(x-3) = 0$. Critical points are at $x = 1$ and $x = 3$. 
   * Checking signs shows $M'(x) > 0$ on $(0,1)$, $M'(x) < 0$ on $(1,3)$, and $M'(x) > 0$ on $(3,\infty)$.
   * **Relative Maximum** occurs at $(1, 4)$. **Relative Minimum** occurs at $(3, 0)$.
2. **Inflection Point:** Find $M''(x) = 6x - 12$. Set to zero: $6x - 12 = 0 \implies x = 2$. 
   * $M''(x) < 0$ for $x < 2$ (Concave Down), and $M''(x) > 0$ for $x > 2$ (Concave Up).
   * **Inflection Point** occurs at $(2, 2)$.

**Real-Life Application Meaning:** The relative maximum at $x = 1$ tells the engineer the exact location of peak positive bending stress ($M = 4\text{ kM}\cdot\text{m}$). The internal concrete fibers are experience maximum tension at the bottom of the beam here, meaning this is where steel rebar reinforcement must be structurally clustered. The **inflection point at $x = 2$** indicates where the internal bending stress completely shifts behavior (flipping concavity). At this exact location, the internal stress transitions from bottom tension to top tension. The engineer uses this inflection location to safely cross over or bend the steel reinforcing bars from the bottom edge to the top edge of the concrete beam.
