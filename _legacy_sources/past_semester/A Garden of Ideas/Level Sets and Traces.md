
# Level Sets and Traces

> [!info] Level Sets and Traces Essential Formulas
> **Level Curves:**
> $$f(x, y)=c$$
> - Fixed Output in 3 Dimensions
> - Produces a curve along the $xy$-plane representing all possible combination of $x$ and $y$ values that can produce your fixed output for the given function.
> ___
> **Level Surfaces:**
> $$f(x, y, z)=c$$
> - Fixed Output in 4 Dimensions.
> - Produces a surface within the $xyz$-space representing all possible combinations of $x, y,$ and $z$ values that can produce your fixed output for the given function.
> ___
> **Vertical Traces:**
> $$f(c, y)=z\quad\text{or}\quad f(x,c)=z$$
> - Fixed Input in 3 Dimensions.
> - Creates a curve within either the $yz$ or $xz$ planes that describes all corresponding values that can conform to the selected input values.
> ___
> **Cross-Sections:**
> $$f(c, y, z)=w$$
> - Fixed Input in 4 Dimensions.
> - Creates a surface that can describe all corresponding values that can conform to the selected input values.

### Visualizing Multivariable Functions
When given a function of three variables, we cannot see the shape created by the function directly due to it representing 4 dimensions. However, we can create **slices** in these functions to be able to understand them. 

Two main methods exist in order to visualize higher dimensions: **Level Sets** and **Traces**.

| Function Type       | Graph Lives In                 | Level Set (fix output)                         | Trace (fix an input)                                         | Example Shapes             |
| ------------------- | ------------------------------ | ---------------------------------------------- | ------------------------------------------------------------ | -------------------------- |
| $f(x,y)$ (2 vars)   | 3D surface $(x,y,z)$           | **Level Curves** in the $xy$-plane: $f(x,y)=c$ | **Vertical Traces** in $xz$ or $yz$ planes: $f(a,y), f(x,b)$ | circles, lines, parabolas  |
| $f(x,y,z)$ (3 vars) | 4D surface (not directly seen) | **Level Surfaces** in 3D space: $f(x,y,z)=c$   | **Cross-Sections** by fixing one input: $f(x,y,z_0)$, etc.   | planes, spheres, cylinders |

> [!warning] Regarding Future Use of Level Sets/Traces
> These methods of visualizing functions are mainly tools that can be used to better understand the functions you're given. 
> 
> Leveled Sets will be brought up again in the future when we reach the realm of optimization in 3+ dimensions. Mainly it will serve the purpose of being a geometric method of explaining specific optimization processes. 
