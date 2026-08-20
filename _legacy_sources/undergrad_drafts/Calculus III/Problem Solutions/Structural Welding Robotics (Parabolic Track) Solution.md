**Problem Statement:** An automation engineer is programming an industrial robotic welding arm to construct a parabolic steel structural arch. The structural profile of the arch is defined by the function $y = 9 - x^2$ (measured in meters), and the robot needs to execute a continuous weld seam along the arch from its left base anchoring point at $x = -3$ to its peak at $x = 0$. Establish the parametric vector function $\mathbf{r}(t)$ and its boundaries to program the robot's CNC computer code.

#### Step 1: Apply the function template

Since the arch path is defined as a clear geometric function $y = f(x)$, substitute the variable $x$ with the parameter $t$:

$$\text{Let } x(t) = t$$

#### Step 2: Map the remaining coordinate and constraints

Substitute $t$ into the original height equation to define $y(t)$:

$$y(t) = 9 - t^2$$

Combine these into a single position vector function, bounding $t$ by the initial and final $x$-coordinates:

$$\mathbf{r}(t) = \langle t, \; 9 - t^2 \rangle, \quad -3 \le t \le 0$$

#### Meaning of the Answer & Real-Life Application

The output vector function $\mathbf{r}(t) = \langle t, 9 - t^2 \rangle$ translates a static geometric curve from an engineering blueprint into an actionable timeline for the machine's control software.

In automated manufacturing, CNC machines and robotic arms cannot process an abstract equation like $y = 9 - x^2$ directly. They require independent control commands for their primary axes (the $x$-axis actuator motor and the $y$-axis actuator motor) synchronized across a single variable. Parameterization allows the control system to dictate exact positions at any given increment of progress $t$. By taking derivatives of this parameterized path, the system can compute velocity ($\mathbf{r}'(t)$) and acceleration ($\mathbf{r}''(t)$) vectors, ensuring the robot maintains a perfectly uniform welding speed to avoid weak joints or structural burn-throughs.