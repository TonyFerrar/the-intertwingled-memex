# Skill 1: Geometric Parameterization of Paths

## Technical Notes & Foundations

Before an engineer can evaluate how a field interacts with an object, they must translate a physical boundary or trajectory into a vector function dependent on a single variable (usually time, $t$). This process is called **parameterization**.

A parameterized path in space is written as a vector-valued position function $\mathbf{r}(t)$ mapped over a closed interval:

$$\mathbf{r}(t) = \langle x(t), y(t), z(t) \rangle, \quad a \le t \le b$$

### Core Templates for Engineering Paths

When translating blueprints to vector calculus, engineers rely on three classic geometric templates:

1. **Straight-Line Segments (From Point $P_0$ to Point $P_1$):**
    
    To create a linear path starting at $P_0$ and ending at $P_1$, use the standard linear interpolation formula:
    
    $$\mathbf{r}(t) = (1-t)P_0 + tP_1, \quad 0 \le t \le 1$$
    
2. **Circular Arcs & Holes (Radius $R$ centered at the origin):**
    
    To trace a circular profile counterclockwise in the $xy$-plane, use trigonometric functions to coordinate your steps:
    
    $$\mathbf{r}(t) = \langle R\cos t, R\sin t \rangle, \quad \theta_{\text{start}} \le t \le \theta_{\text{end}}$$
    
3. **Function-Defined Tracks (Graphs of $y = f(x)$):**
    
    If a track or wire follows a standard algebraic function, let the independent variable be the parameter $t$:
    
    $$\text{Let } x = t \implies \mathbf{r}(t) = \langle t, f(t) \rangle, \quad x_{\text{start}} \le t \le x_{\text{end}}$$
    

## Pure Mathematical Sample Problems

### Sample Problem 1: Linear Segment

**Problem:** Parameterize the line segment in the $xy$-plane that starts at the point $(3, -2)$ and ends at the point $(7, 6)$.

#### Step 1: Apply the linear formula

Identify $P_0 = \langle 3, -2 \rangle$ and $P_1 = \langle 7, 6 \rangle$. Plug them directly into the linear interpolation equation:

$$\mathbf{r}(t) = (1-t)\langle 3, -2 \rangle + t\langle 7, 6 \rangle$$

#### Step 2: Combine components

Distribute the scalars and group the $x$ and $y$ terms together:

$$\mathbf{r}(t) = \langle 3(1-t) + 7t, \; -2(1-t) + 6t \rangle$$

$$\mathbf{r}(t) = \langle 3 - 3t + 7t, \; -2 + 2t + 6t \rangle$$

$$\mathbf{r}(t) = \langle 3 + 4t, \; -2 + 8t \rangle, \quad 0 \le t \le 1$$

### Sample Problem 2: Circular Arc

**Problem:** Parameterize a circular path of radius 5 situated in the first quadrant, traveling clockwise from $(0, 5)$ to $(5, 0)$.

#### Step 1: Identify standard angle boundaries

A standard counterclockwise circle utilizes $x = 5\cos t$ and $y = 5\sin t$. The point $(0,5)$ sits at an angle of $t = \frac{\pi}{2}$, and $(5,0)$ sits at $t = 0$.

#### Step 2: Adjust for orientation

To move _clockwise_ while maintaining a standard ascending interval ($a \le t \le b$), we can swap our trigonometric assignments or use a transformation. The simplest way to start at $(0,5)$ when $t=0$ and end at $(5,0)$ when $t = \frac{\pi}{2}$ while moving clockwise is to map the components as:

$$\mathbf{r}(t) = \langle 5\sin t, \; 5\cos t \rangle, \quad 0 \le t \le \frac{\pi}{2}$$

_Check:_ At $t=0$, $\mathbf{r}(0) = \langle 0, 5 \rangle$. At $t=\frac{\pi}{2}$, $\mathbf{r}(\frac{\pi}{2}) = \langle 5, 0 \rangle$. The path is successfully parameterized.

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Welding Robotics (Parabolic Track)]]
[[Structural Welding Robotics (Parabolic Track) Solution]]


### Engineering Problem 2: [[Aerospace Trajectory Optimization (Linear Waypoint Flight)]]
[[Aerospace Trajectory Optimization (Linear Waypoint Flight) Solution]]
