**Problem Statement:** A marine engineer is evaluating the power consumption of an Autonomous Underwater Vehicle (AUV) navigating an estuary. The AUV follows a straight track automated by the parameterization $\mathbf{r}(t) = \langle t, 2t \rangle$ for $0 \le t \le 2$ kilometers. The local swirling tidal current creates a force vector field modeled by $\mathbf{F}(x,y) = \langle y, -x \rangle$ kilonewtons ($\text{kN}$). Compute the net work performed by the tidal current field on the robotic vehicle.

#### Step 1: Find the tangent vector
$$\mathbf{r}'(t) = \langle 1, 2 \rangle$$

#### Step 2: Substitute the path components into the current field
With $x(t) = t$ and $y(t) = 2t$, the field along the route becomes:
$$\mathbf{F}(\mathbf{r}(t)) = \langle 2t, -t \rangle$$

#### Step 3: Compute the dot product and integrate
$$\mathbf{F}(\mathbf{r}(t)) \cdot \mathbf{r}'(t) = \langle 2t, -t \rangle \cdot \langle 1, 2 \rangle = (2t)(1) + (-t)(2) = 2t - 2t = 0$$
$$W = \int_{0}^{2} 0 \, dt = 0 \text{ kJ}$$

#### Meaning of the Answer & Real-Life Application
The vector line integral evaluates to exactly **0 kJ**. 

In marine robotics, a work integral of zero means that the environment provides **net neutral resistance** over the entire journey. While the current pushes against the hull during certain portions of the track, it provides an equal tailwind push during others, perfectly canceling out the energy expenditure. The navigation systems engineer uses this result to verify that the robot can traverse this specific corridor relying entirely on its base battery calculation without needing extra power reserves to combat persistent environmental drag.
