**Scenario:** A civil engineer is designing a concrete stormwater drainage channel designed to handle a peak flood flow rate ($Q$) of $15\text{ m}^3/\text{s}$. To ensure the channel walls are tall enough so that floodwaters do not overflow into nearby residential zones, they must solve for the normal water depth ($y$).

The fluid dynamics are governed by **Manning’s Equation**. When isolated to solve for the root condition $f(y) = 0$, the implicit hydraulic function evaluates to:

$$f(y) = 3.5y^{5/3} - 15 = 0$$

The corresponding slope derivative function is:

$$f'(y) = 5.833y^{2/3}$$

The initial water depth guess ($y_1 = 1.0\text{ m}$) is placed in cell `A2`.

**Task:** Write out the spreadsheet formula syntax for cell **`D2`** ($y_{n+1}$) and cell **`A3`** (the second iteration bridge input) to successfully automate this hydraulic simulation.

#### Solution 2

- **Cell `D2` formula:** `=A2-(3.5*A2^(5/3)-15)/(5.833*A2^(2/3))`
    
- **Cell `A3` formula:** `=D2`
    

#### Meaning of the Answer & Real-Life Application

- **Meaning of the Output:** Allowing this automated channel loop to run down the spreadsheet results in a stabilized converged water depth of **$2.39\text{ m}$**. This tells the engineer exactly how high the water column will rise during a peak flood event.
    
- **Real-Life Engineering Application:** This numerical calculation directly dictates the minimum physical wall height of urban floodways. Civil engineers will take this calculated value of $2.39\text{ m}$ and add a standard safety clearance buffer (called "freeboard," typically $0.5\text{ m}$) to finalize a wall height design of $2.9\text{ m}$. If this iteration is miscalculated or fails to loop, the channel walls could be built too low, resulting in localized urban flooding during severe storms.