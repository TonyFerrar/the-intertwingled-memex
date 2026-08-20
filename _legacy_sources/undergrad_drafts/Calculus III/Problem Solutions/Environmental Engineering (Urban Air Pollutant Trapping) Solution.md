An environmental engineer is monitoring airborne particulate matter dispersion across an urban industrial park. A grid network has been set up to track the wind-driven contaminant velocity vector field, modeled by the equation:

$$\mathbf{F}(x,y) = \langle -3x + y^2, -5y + \tan x \rangle$$

The engineer defines a square boundary $C$ outlining a residential community adjacent to the industrial park where $0 \le x \le 2$ and $0 \le y \le 2$. Use Green's Theorem to determine the net flux of the contaminant field crossing this boundary.

#### Step-by-Step Solution:

- **Step 1: Map components and limits.**
    
    $$P(x,y) = -3x + y^2, \quad Q(x,y) = -5y + \tan x$$
    
    The limits of the community zone are $x \in [0, 2]$ and $y \in [0, 2]$.
    
- **Step 2: Compute partial derivatives for divergence.**
    
    $$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(-3x + y^2) = -3$$
    
    $$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(-5y + \tan x) = -5$$
    
- **Step 3: Combine components to find the divergence.**
    
    $$\text{div } \mathbf{F} = -3 + (-5) = -8$$
    
- **Step 4: Integrate the constant divergence over the region.**
    
    $$\oint_{C} \mathbf{F} \cdot \mathbf{n} \, ds = \int_{0}^{2} \int_{0}^{2} (-8) \, dx \, dy$$
    
    $$\text{Inner Integral: } \int_{0}^{2} -8 \, dx = [-8x]_0^2 = -16$$
    
    $$\text{Outer Integral: } \int_{0}^{2} -16 \, dy = [-16y]_0^2 = -32$$
    

#### Meaning of the Answer and Engineering Application:

The mathematical answer of **-32** represents a negative net flux across the perimeter of the residential zone. In environmental field modeling, a negative flux means that the net velocity vectors point _inward_ toward the region, signifying that the area acts as a physical sink for the field lines.

For the environmental engineer, this negative result indicates that airborne pollutants are actively accumulating within the residential community rather than blowing cleanly out past its boundaries. This calculation flags a public health hazard: the local geography or building layout is trapping hazardous particulate matter. The engineer uses this data to recommend physical interventions, such as installing green ventilation barriers or modifying industrial exhaust schedules to alter the localized divergence field.