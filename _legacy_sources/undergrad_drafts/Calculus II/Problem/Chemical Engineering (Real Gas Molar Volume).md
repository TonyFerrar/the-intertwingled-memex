**Scenario:** A chemical process engineer needs to find the precise molar volume ($v$) of carbon dioxide gas trapped inside a high-pressure reactor at a temperature of $350\text{ K}$ and a pressure of $10\text{ MPa}$. Because the pressure is so high, the ideal gas law fails, and the engineer must use the non-linear **Van der Waals Equation of State**:

$$\left(P + \frac{a}{v^2}\right)(v - b) = RT$$

When expanded into a standard root-finding polynomial format ($f(v) = 0$), the equation becomes:

$$P v^3 - (P b + R T)v^2 + a v - a b = 0$$

For carbon dioxide under these specific conditions, the physical parameters evaluate to the following simplified function:

$$f(v) = 10v^3 - 3.2v^2 + 0.4v - 0.01 = 0$$

The corresponding derivative function for slope tracking is:

$$f'(v) = 30v^2 - 6.4v + 0.4$$

An initial volume guess of $v_1 = 0.5\text{ m}^3/\text{kmol}$ is entered into cell `A2`.

**Task:** Write the exact spreadsheet formulas required for **Row 2** in cells `B2` ($f(v_n)$), `C2` ($f'(v_n)$), and `D2` ($v_{n+1}$) to initiate this chemical solver loop.
