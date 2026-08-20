A mechanical engineer is designing an industrial centrifugal pump rotor casing to optimize mass flow rates. The fluid velocity vector field inside a key rectangular section of the pump housing is given by the equation:

$$\mathbf{v}(x,y) = \langle 3x + e^y, y^2 - 2y \rangle$$

To ensure structural safety and fluid efficiency, the engineer needs to compute the total volumetric throughput passing outward across the rectangular boundary $C$ defined by $0 \le x \le 2$ and $0 \le y \le 3$. Use the flux form of Green's Theorem to calculate the outward net flux.

#### Step-by-Step Solution:

- **Step 1: Map components and limits.**
    
    $$P(x,y) = 3x + e^y, \quad Q(x,y) = y^2 - 2y$$
    
    The limits of integration for the rectangular casing zone are $0 \le x \le 2$ and $0 \le y \le 3$.
    
- **Step 2: Compute partial derivatives for divergence.**
    
    $$\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(3x + e^y) = 3$$
    
    $$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(y^2 - 2y) = 2y - 2$$
    
- **Step 3: Apply the flux form of Green's Theorem.**
    
    $$\text{div } \mathbf{v} = 3 + (2y - 2) = 2y + 1$$
    
    $$\oint_{C} \mathbf{v} \cdot \mathbf{n} \, ds = \int_{0}^{2} \int_{0}^{3} (2y + 1) \, dy \, dx$$
    
- **Step 4: Perform the sequential integration.**
    
    $$\text{Inner Integral: } \int_{0}^{3} (2y + 1) \, dy = \left[ y^2 + y \right]_0^3 = (3^2 + 3) - 0 = 12$$
    
    $$\text{Outer Integral: } \int_{0}^{2} 12 \, dx = [12x]_0^2 = 24$$
    

#### Meaning of the Answer and Engineering Application:

The mathematical answer of **24** represents a positive net outward flux crossing the boundaries of the rotor section. In fluid turbomachinery, this calculated flux translates to the total volumetric discharge rate of the pump casing.

Because the final value is positive, it mathematically confirms that the pump rotor is successfully functioning as a net generator of fluid throughput within this control zone, drawing fluid from the inlet and expelling it out toward the discharge pipe. The design engineer uses this precise number to verify that the pump fulfills the required operational throughput specifications for industrial deployment without causing fluid choking or localized stagnation zones.
