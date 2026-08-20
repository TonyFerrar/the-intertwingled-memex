**Problem:** A robotic arm handles a laser cutter that must carve out a complex curve on an aerospace bracket. The design team defines the spatial coordinate path of the laser tip using the position vector $\vec{r}(t) = \langle \frac{1}{3}t^3, t^2, 2t \rangle$, where $t$ is an internal tracking parameter representing operational cycles ($t \ge 0$). To prevent structural deformation or burning of the metal workpiece, the laser cutter must maintain a completely constant physical cutting speed.

1. Find the arc length function $s(t)$ starting from cycle $t=0$.
    
2. Parametrize the robot's toolpath in terms of the physical distance traveled ($s$) so that firmware can control the laser tip smoothly across space.
    

#### Solution:

1. Find the velocity vector and its magnitude:
    
    $$\vec{r}'(t) = \langle t^2, 2t, 2 \rangle$$
    
    $$||\vec{r}'(t)|| = \sqrt{(t^2)^2 + (2t)^2 + (2)^2} = \sqrt{t^4 + 4t^2 + 4}$$
    
    Notice that the expression inside the square root is a perfect square trinomial ($t^4 + 4t^2 + 4 = (t^2 + 2)^2$):
    
    $$||\vec{r}'(t)|| = \sqrt{(t^2 + 2)^2} = t^2 + 2$$
    
    Now solve for the arc length function $s(t)$:
    
    $$s(t) = \int_{0}^{t} (u^2 + 2)\,du = \left[ \frac{1}{3}u^3 + 2u \right]_{0}^{t} = \frac{1}{3}t^3 + 2t$$
    
2. Invert the expression to solve for $t$ in terms of $s$. Multiplying both sides by $3$ yields:
    
    $$3s = t^3 + 6t \implies t^3 + 6t - 3s = 0$$
    
    _Note: For algebraic simplicity in standard vector substitutions, we look at the original spatial components. Let's substitute directly into $\vec{r}(t)$ components or write the formal parametrization implicitly. Since $s = \frac{1}{3}t^3 + 2t$, the exact algebraic inversion requires Cardano's formula for cubics, giving $t(s) = \sqrt[3]{\frac{3s}{2} + \sqrt{\frac{9s^2}{4} + 8}} + \sqrt[3]{\frac{3s}{2} - \sqrt{\frac{9s^2}{4} + 8}}$. Substituting this $t(s)$ expression back into $\vec{r}(t)$ yields $\vec{r}(s)$._
    

**Engineering Meaning of the Answer:** The arc length function $s(t) = \frac{1}{3}t^3 + 2t$ maps the abstract system variable $t$ directly to physical linear distance (e.g., millimeters) along the bracket's edge. By finding the inverse function $t(s)$ and programming $\vec{r}(s)$ into the CNC microcontroller, mechanical engineers ensure that the machine controls its motors based entirely on spatial coordinates. Instead of speeding up or slowing down over time as $t$ changes, the machine travels at a perfectly uniform velocity across the curve. This prevents heat concentration from the laser resting too long on sharp transitions, guaranteeing a uniform, structurally safe cut.
