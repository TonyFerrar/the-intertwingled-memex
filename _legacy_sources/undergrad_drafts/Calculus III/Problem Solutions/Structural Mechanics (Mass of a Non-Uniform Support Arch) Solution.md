**Problem Statement:** A structural engineer is calculating the structural dead-load of a curved steel support arch holding up a heavy glass roof. The arch follows a semicircular path modeled by $\mathbf{r}(t) = \langle 4\cos t, 4\sin t \rangle$ for $0 \le t \le \pi$, where dimensions are given in meters. Due to internal cross-bracing sleeves, the linear mass density varies continuously along the arch according to the function $\rho(x,y) = 3y$ kilograms per meter ($\text{kg/m}$). Determine the total mass of the structural arch.

#### Step 1: Set up the components
* **Velocity vector and magnitude:** $\mathbf{r}'(t) = \langle -4\sin t, 4\cos t \rangle \implies ||\mathbf{r}'(t)|| = \sqrt{16\sin^2 t + 16\cos^2 t} = 4$
* **Arc length element:** $ds = 4\,dt$
* **Density profile along the path:** $\rho(\mathbf{r}(t)) = 3(4\sin t) = 12\sin t$

#### Step 2: Integrate to find total mass ($M$)
$$M = \int_{C} \rho(x,y) \, ds = \int_{0}^{\pi} (12\sin t)(4) \, dt$$
$$M = 48 \int_{0}^{\pi} \sin t \, dt = 48 \Big[ -\cos t \Big]_{0}^{\pi}$$
$$M = 48 \big( -\cos(\pi) - (-\cos(0)) \big) = 48\big(1 + 1\big) = 96 \text{ kg}$$

#### Meaning of the Answer & Real-Life Application
The scalar line integral evaluates to exactly **96 kg**. 

In structural engineering, calculating the exact total mass of non-uniform components is a critical part of **dead-load analysis**. Standard geometric approximations fail when density profiles change continuously across an arch. By acquiring the precise mass and knowing the density distribution, engineers can calculate the structural **center of gravity**. This parameter is vital for planning crane rigging arrangements during assembly and predicting rotational moments under seismic or high-wind stress loads.
