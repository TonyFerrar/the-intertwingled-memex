An aerospace engineer is prototyping an experimental wing profile. The lift-to-drag efficiency ratio ($E$) of the wing fuselage section depends on the wing's angle of attack ($x$, in degrees) and the maximum camber percentage ($y$, as a decimal percentage). The efficiency performance surface is modeled by the unconstrained multivariable function:

$$E(x, y) = -x^3 + 12x - 4y^2 + 8y + 50$$

Find the critical point that maximizes aerodynamic performance, classify it using the second derivative test, and evaluate the maximum efficiency score.

#### Solution:

**Step 1: Find the first-order rates of change.**

$$\frac{\partial E}{\partial x} = -3x^2 + 12$$

$$\frac{\partial E}{\partial y} = -8y + 8$$

**Step 2: Find the design coordinates for the critical points.**

1. $\frac{\partial E}{\partial y} = -8y + 8 = 0 \implies 8y = 8 \implies y = 1$
    
2. $\frac{\partial E}{\partial x} = -3x^2 + 12 = 0 \implies 3x^2 = 12 \implies x^2 = 4 \implies x = 2 \text{ or } x = -2$
    

Because a negative angle of attack ($x = -2$) yields poor lift properties for standard flight modes in this model, we isolate our primary analysis to the positive physical candidate point: **$(2, 1)$**.

**Step 3: Run the second derivative classification.**

$$E_{xx} = -6x, \quad E_{yy} = -8, \quad E_{xy} = 0$$

$$D = (-6x)(-8) - (0)^2 = 48x$$

Evaluate at our design point $(2, 1)$:

- $D = 48(2) = 96 > 0$
    
- $E_{xx} = -6(2) = -12 < 0$
    

Since $D > 0$ and $E_{xx} < 0$, the engineering configuration **$(2, 1)$ is a local maximum**.

**Step 4: Calculate maximum performance output.**

$$E(2, 1) = -(2)^3 + 12(2) - 4(1)^2 + 8(1) + 50 = -8 + 24 - 4 + 8 + 50 = 70$$

#### Real-Life Meaning of the Answer:

The calculation reveals that when the wing is set to an **angle of attack of $2^\circ$ ($x=2$)** and a **camber profile of $1\%$ ($y=1$)**, the system hits a peak aerodynamic efficiency rating of **$70$**.

In aerospace engineering applications, this unconstrained maximum tells the design team exactly how to orient the wing shape for stable cruise conditions. Because $D > 0$ and $E_{xx} < 0$, any deviation away from these exact dimensions will cause the lift-to-drag ratio to drop. This point represents the ideal peak performance target for autopilot trim baselines.
