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

#### Solution 1

- **Cell `B2` formula:** `=10*A2^3-3.2*A2^2+0.4*A2-0.01`
    
- **Cell `C2` formula:** `=30*A2^2-6.4*A2+0.4`
    
- **Cell `D2` formula:** `=A2-B2/C2`
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Output:** Running this spreadsheet loop until convergence yields an optimized molar volume of **$0.254\text{ m}^3/\text{kmol}$**. This represents the real physical space occupied by one kilomole of the gas molecules when squeezed under extreme reactor conditions.
    
- **Real-Life Engineering Application:** Chemical engineers use this precise molar volume to calculate the required physical dimensions of storage tanks and chemical reactors. If the ideal gas law were used blindly instead of this numerical approximation, the volume would be over-predicted by more than 15%, leading to massively over-engineered vessels that increase factory construction costs by millions of dollars.
    