**Problem Statement:** A mechanical engineer is checking fluid distribution inside a hydraulic pump chamber. The velocity field of the pressurized cooling fluid matches the function $\mathbf{V}(x,y) = \langle 4, 3x \rangle$ meters per second (m/s). The fluid passes through a flat filter membrane element positioned along the x-axis from $(0,0)$ to $(2,0)$ meters, parameterized linearly by $\mathbf{r}(t) = \langle t, 0 \rangle$ for $0 \le t \le 2$. Find the total volumetric flux pushing upward ($\mathbf{n} = \langle 0, 1 \rangle$) across the filter path.

#### Step 1: Set up vector components
* **Arc length element:** $\mathbf{r}'(t) = \langle 1, 0 \rangle \implies ||\mathbf{r}'(t)|| = 1 \implies ds = dt$
* **Fluid field along the filter segment ($x=t, y=0$):** $\mathbf{V}(\mathbf{r}(t)) = \langle 4, 3t \rangle$

#### Step 2: Compute the cross-flow flux integral
$$\mathbf{V}(\mathbf{r}(t)) \cdot \mathbf{n} = \langle 4, 3t \rangle \cdot \langle 0, 1 \rangle = (4)(0) + (3t)(1) = 3t$$
$$\text{flux}_{C}(\mathbf{V}) = \int_{0}^{2} 3t \, dt = \left[ 1.5t^2 \right]_{0}^{2} = 1.5(4) - 0 = 6 \text{ m}^2/\text{s}$$

#### Meaning of the Answer & Real-Life Application
The planar flux evaluates to **$6 \text{ m}^2/\text{s}$** (per unit depth of the pump channel).

In turbomachinery and hydraulics, flux integrals calculated against a unit normal vector provide the **volumetric flow rate** moving across an operational cross-section. Mechanical engineers use this value to monitor mass conservation laws throughout a closed pump system. Verifying that the flux matches design specifications ensures that the fluid flows smoothly through filter gaps without creating internal backpressure bottlenecks, preventing system over-pressurization and mechanical pump failures.