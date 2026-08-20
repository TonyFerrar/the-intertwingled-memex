**Scenario:** A civil engineer is designing a concrete stormwater drainage channel designed to handle a peak flood flow rate ($Q$) of $15\text{ m}^3/\text{s}$. To ensure the channel walls are tall enough so that floodwaters do not overflow into nearby residential zones, they must solve for the normal water depth ($y$).

The fluid dynamics are governed by **Manning’s Equation**. When isolated to solve for the root condition $f(y) = 0$, the implicit hydraulic function evaluates to:

$$f(y) = 3.5y^{5/3} - 15 = 0$$

The corresponding slope derivative function is:

$$f'(y) = 5.833y^{2/3}$$

The initial water depth guess ($y_1 = 1.0\text{ m}$) is placed in cell `A2`.

**Task:** Write out the spreadsheet formula syntax for cell **`D2`** ($y_{n+1}$) and cell **`A3`** (the second iteration bridge input) to successfully automate this hydraulic simulation.