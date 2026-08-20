A civil engineer is analyzing the potential energy surface $V(x, y)$ of a thin-walled steel pillar subjected to asymmetric structural loading. The variables $x$ and $y$ represent the horizontal structural deflection displacements (in inches) along the principal axes. The potential energy function of the mechanical assembly is given by:

$$V(x, y) = x^2 - 6xy + y^3 + 9y$$

Locate and classify the equilibrium states of the pillar.

#### Solution:

**Step 1: Compute the partial derivatives to locate equilibrium states.**

$$\frac{\partial V}{\partial x} = 2x - 6y$$

$$\frac{\partial V}{\partial y} = -6x + 3y^2 + 9$$

**Step 2: Solve the system for critical points.**

Set $\frac{\partial V}{\partial x} = 0$:

$$2x - 6y = 0 \implies 2x = 6y \implies x = 3y$$

Substitute $x = 3y$ into $\frac{\partial V}{\partial y} = 0$:

$$-6(3y) + 3y^2 + 9 = 0$$

$$-18y + 3y^2 + 9 = 0$$

Divide the entire equation by $3$:

$$y^2 - 6y + 3 = 0$$

Using the quadratic formula $y = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:

$$y = \frac{6 \pm \sqrt{(-6)^2 - 4(1)(3)}}{2(1)} = \frac{6 \pm \sqrt{36 - 12}}{2} = \frac{6 \pm \sqrt{24}}{2} = 3 \pm \sqrt{6}$$

Using approximations ($\sqrt{6} \approx 2.45$):

- $y_1 \approx 3 + 2.45 = 5.45 \implies x_1 = 3(5.45) = 16.35$
    
- $y_2 \approx 3 - 2.45 = 0.55 \implies x_2 = 3(0.55) = 1.65$
    

This yields two equilibrium critical points: **$(16.35, 5.45)$** and **$(1.65, 0.55)$**.

**Step 3: Evaluate using the second derivative test.**

$$V_{xx} = 2, \quad V_{yy} = 6y, \quad V_{xy} = -6$$

$$D = (2)(6y) - (-6)^2 = 12y - 36$$

- **Test Point 1: $(16.35, 5.45)$**
    
    - $D = 12(5.45) - 36 = 65.4 - 36 = 29.4 > 0$
        
    - $V_{xx} = 2 > 0$
        
    - Since $D > 0$ and $V_{xx} > 0$, this configuration is a **stable local minimum**.
        
- **Test Point 2: $(1.65, 0.55)$**
    
    - $D = 12(0.55) - 36 = 6.6 - 36 = -29.4 < 0$
        
    - Since $D < 0$, this configuration is an **unstable saddle point**.
        

#### Real-Life Meaning of the Answer:

In structural mechanics, critical points of energy equations represent mechanical equilibrium states.

The **local minimum at $(16.35, 5.45)$** is a **stable equilibrium state**. If the pillar is deflected slightly near these displacement values, it will naturally return to this position like a ball settling at the bottom of a bowl.

The **saddle point at $(1.65, 0.55)$** is an **unstable equilibrium state**. This indicates a geometric threshold where structural buckling occurs. If asymmetric structural stresses push the pillar's deflections to this point, the system becomes unstable. It can easily slip down the energy gradient along its weaker axis, causing a sudden, catastrophic structural failure or buckling collapse. Knowing where these saddle points occur allows civil engineers to specify maximum allowable deflection tolerances well below these thresholds.