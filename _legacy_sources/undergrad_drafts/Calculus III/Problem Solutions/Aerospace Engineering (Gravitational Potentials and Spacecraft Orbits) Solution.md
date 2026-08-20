An aerospace engineer is calculating the gravitational force field $\vec{F}_g$ acting on a satellite orbiting near an irregularly shaped asteroid. The localized force field components are determined to be:
$$\vec{F}_g(x,y) = \langle -2xy^3, -3x^2y^2 + 1 \rangle$$

**Problem:** Verify that the asteroid's local gravitational force field is conservative, and interpret how this changes calculations for orbital corrections.

#### Solution:
1. Identify components and perform the test:
   * $P(x,y) = -2xy^3$
   * $Q(x,y) = -3x^2y^2 + 1$
2. Differentiate:
   * $\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(-2xy^3) = -6xy^2$
   * $\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-3x^2y^2 + 1) = -6xy^2$

Since $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} = -6xy^2$, the force field is conservative.

#### Engineering Meaning & Application:
* **Meaning of the Answer:** Since the field is conservative, the work required to move a spacecraft from an initial orbit altitude to a final destination depends solely on the positions of the starting and ending configurations. If the satellite completes a closed-loop orbit (returning to the exact same starting point), the net work done by the gravitational field is precisely zero.
* **Real-Life Application:** When flight controllers plan orbital maneuvers or "slingshot" trajectories around celestial bodies, they can invoke the *Law of Conservation of Mechanical Energy*. Because gravity is conservative, engineers can easily trade kinetic energy for potential energy using basic algebra rather than trying to manually compute grueling calculus integrals across a complex, curvy orbital path.
