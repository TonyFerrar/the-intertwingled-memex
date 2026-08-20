A civil engineer needs to calculate the volume of earth that must be excavated (the "cut" volume) to carve a flat, level highway lane through a small hill. The cross-sectional width of the hill's base along the path of the highway is modeled by the parabola $y = 9 - x^2$ (where $y$ is the height of the hill in meters, and $x = 0$ is the center line of the highway). The roadbed will be laid flat along the $x$-axis ($y = 0$). The engineering specifications dictate that the cross-sectional slices perpendicular to the road path must be flat isosceles triangles where the height of the triangle is always equal to half of its base width on the hill. Find the total volume of dirt removed over a 50-meter stretch of highway construction.

#### Setup & Variable Selection Strategy:

This is a volume by **slicing problem**. The cross-sections are taken perpendicular to the $x$-axis road bed, meaning we must integrate with respect to $x$ ($dx$).

- **Finding Limits:** The hill meets the ground where $y = 0$:
    
    $$9 - x^2 = 0 \implies x = -3 \text{ to } x = 3 \text{ meters}$$
    
- **Determining Base Length ($b$):** The base of the triangle stretches across the width of the hill at any point $x \implies \text{Base } b = y = 9 - x^2$.
    
- **Determining Triangle Height ($h$):** Given as half the base length $\implies h = \frac{1}{2}(9 - x^2)$.
    
- **Formulating the Cross-Sectional Area $A(x)$:**
    
    $$A(x) = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2}(9 - x^2)\left(\frac{1}{2}(9 - x^2)\right) = \frac{1}{4}(9 - x^2)^2$$
    
    $$A(x) = \frac{1}{4}(81 - 18x^2 + x^4)$$
    

#### Mathematical Execution:

Using symmetry to integrate from $0$ to $3$ and doubling the result:

$$\text{Volume per meter} = 2 \int_{0}^{3} \frac{1}{4}(81 - 18x^2 + x^4) \, dx$$

$$\text{Volume per meter} = \frac{1}{2} \left[ 81x - 6x^3 + \frac{x^5}{5} \right]_{0}^{3}$$

$$\text{Volume per meter} = \frac{1}{2} \left( 81(3) - 6(27) + \frac{243}{5} \right) = \frac{1}{2} \left( 243 - 162 + 48.6 \right)$$

$$\text{Volume per meter} = \frac{1}{2} (129.6) = 64.8 \text{ m}^3 \text{ per meter of road length}$$

To find the total volume over a **50-meter stretch**, multiply the cross-sectional capacity by the length of the project:

$$\text{Total Volume} = 64.8 \text{ m}^3/\text{m} \times 50 \text{ m} = 3,240 \text{ m}^3$$

#### Meaning of the Answer & Real-Life Application:

The value **$3,240 \text{ m}^3$** represents the exact spatial volume of soil and rock that construction crews must physically dig out of the hill to clear a path for the level roadbed.

In civil construction, earth-moving logistics represent an enormous percentage of a project's budget. Dump trucks typically carry about $10 \text{ m}^3$ of material per trip. By executing this integral, the project manager knows instantly that they must schedule exactly **324 individual dump truck dispatches** to haul this dirt away. Furthermore, if they are managing a balanced "cut-and-fill" operation, they now know they have precisely $3,240 \text{ m}^3$ of free structural fill dirt available to dump into a nearby low valley, saving the city from paying to purchase external soil.