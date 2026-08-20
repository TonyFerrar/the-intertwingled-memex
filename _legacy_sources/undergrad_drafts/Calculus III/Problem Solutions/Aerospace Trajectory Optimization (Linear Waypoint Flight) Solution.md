**Problem Statement:** An avionics engineer is defining a straight flight path segment for an autonomous inspection drone monitoring a regional high-voltage power grid. The drone must travel in a direct line from a substation situated at spatial coordinates $(2, 1, 0.1)$ to a grid nexus tower at $(8, 9, 0.5)$, with units measured in kilometers. Generate the standardized parametric vector equation $\mathbf{r}(t)$ used by the flight-planning software to model this trajectory.

#### Step 1: Apply the linear vector formula

Identify the starting vector coordinate $P_0 = \langle 2, 1, 0.1 \rangle$ and the destination coordinate $P_1 = \langle 8, 9, 0.5 \rangle$. Plug them into the linear trajectory template:

$$\mathbf{r}(t) = (1-t)\langle 2, 1, 0.1 \rangle + t\langle 8, 9, 0.5 \rangle$$

#### Step 2: Separate into distinct vector components

Distribute the scalars across each spatial coordinate:

$$\mathbf{r}(t) = \langle 2(1-t) + 8t, \; 1(1-t) + 9t, \; 0.1(1-t) + 0.5t \rangle$$

$$\mathbf{r}(t) = \langle 2 - 2t + 8t, \; 1 - t + 9t, \; 0.1 - 0.1t + 0.5t \rangle$$

$$\mathbf{r}(t) = \langle 2 + 6t, \; 1 + 8t, \; 0.1 + 0.4t \rangle, \quad 0 \le t \le 1$$

#### Meaning of the Answer & Real-Life Application

The resulting flight vector equation $\mathbf{r}(t) = \langle 2+6t, 1+8t, 0.1+0.4t \rangle$ sets a normalized 3D timeline where $t=0$ is the exact moment of departure and $t=1$ is the moment of arrival.

In aerospace trajectory planning and navigation, parameterizing the flight path over a standardized interval ($0 \le t \le 1$) is a prerequisite for environmental safety analysis. Once the flight line is parameterized, the drone's onboard computer can execute vector dot products against localized **wind velocity vector fields** or **thermal updraft maps** at every fractional point $t$ along the journey. This allows the flight planning software to predict cumulative aerodynamic drag forces, optimize battery depletion models, and verify that the drone's altitude component ($z = 0.1 + 0.4t$) will safely clear topography obstacles along the route before the propulsion systems are engaged.