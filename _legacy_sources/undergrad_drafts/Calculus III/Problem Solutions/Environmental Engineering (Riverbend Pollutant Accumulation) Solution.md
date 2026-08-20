**Problem Statement:** Environmental engineers are assessing the ecological impact of chemical runoff along a curved riverbend channel. The centerline path of the river section is modeled by the parameterization $\mathbf{r}(t) = \langle t, \frac{2}{3}t^{3/2} \rangle$ for $0 \le t \le 3$ kilometers. Field sensors indicate that the linear concentration of an accumulated heavy-metal pollutant along the riverbed path matches the function $C(x,y) = \sqrt{1 + x}$ milligrams per meter ($\text{mg/m}$). Compute the total mass of the pollutant trapped along this section of the riverbed.

#### Step 1: Set up the components
* **Velocity vector:** $\mathbf{r}'(t) = \langle 1, t^{1/2} \rangle$
* **Arc length magnitude:** $||\mathbf{r}'(t)|| = \sqrt{1^2 + (t^{1/2})^2} = \sqrt{1 + t} \implies ds = \sqrt{1 + t}\,dt$
* **Concentration along the path:** $C(\mathbf{r}(t)) = \sqrt{1 + t}$

#### Step 2: Integrate to find total pollutant mass ($P$)
$$P = \int_{C} C(x,y) \, ds = \int_{0}^{3} \sqrt{1 + t} \cdot \sqrt{1 + t} \, dt$$
$$P = \int_{0}^{3} (1 + t) \, dt = \left[ t + \frac{t^2}{2} \right]_{0}^{3}$$
$$P = \left( 3 + \frac{3^2}{2} \right) - (0) = 3 + 4.5 = 7.5 \text{ mg}$$

#### Meaning of the Answer & Real-Life Application
The scalar line integral determines that a total of **7.5 mg** of the heavy metal has accumulated along the riverbed path.

In environmental fluid dynamics, pollutants rarely disperse uniformly; they collect along specific curved boundaries based on current flow and topography. Environmental engineers use scalar line integrals to calculate the **total toxic load** along ecological paths. This value determines whether chemical levels violate environmental safety thresholds, enabling engineers to design targeted chemical filtration barriers or plan precision dredging operations along the riverbed.