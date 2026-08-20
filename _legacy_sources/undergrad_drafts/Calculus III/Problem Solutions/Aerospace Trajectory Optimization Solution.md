During an orbital insertion maneuver, a satellite propulsion system must minimize a fuel burn cost metric represented by the function:

$$f(x, y) = 3x^2 + y^2$$

where $x$ and $y$ represent directed thrust velocity changes (in kilometers per second) along two perpendicular guidance axes. To safely intercept the correct orbital path, the satellite's velocity vector must satisfy the physics constraint:

$$g(x, y) = 2x + y = 14$$

Using Lagrange multipliers, determine the optimal thrust components $(x, y)$ that minimize fuel consumption. Then, solve for the value of $\lambda$ and interpret its real-life engineering significance.

#### Solution:

**Step 1: Compute the partial derivatives.**

$$\frac{\partial f}{\partial x} = 6x, \quad \frac{\partial f}{\partial y} = 2y$$

$$\frac{\partial g}{\partial x} = 2, \quad \frac{\partial g}{\partial y} = 1$$

**Step 2: Set up the Lagrange component equations.**

$$\hat{i}: 6x = 2\lambda \implies \lambda = 3x$$

$$\hat{j}: 2y = 1\lambda \implies \lambda = 2y$$

**Step 3: Eliminate $\lambda$ to find the relationship between $x$ and $y$.**

$$3x = 2y \implies y = 1.5x$$

**Step 4: Substitute into the trajectory constraint.**

$$2x + (1.5x) = 14$$

$$3.5x = 14 \implies x = 4\text{ km/s}$$

Now calculate $y$:

$$y = 1.5(4) = 6\text{ km/s}$$

**Step 5: Calculate the value of the Lagrange multiplier $\lambda$.**

$$\lambda = 3x = 3(4) = 12$$

**Step 6: Compute the minimum fuel cost metric.**

$$f(4, 6) = 3(4)^2 + (6)^2 = 3(16) + 36 = 48 + 36 = 84$$

#### Real-Life Meaning of the Answer:

The satellite achieves its optimal trajectory maneuver when thrust adjustments are split precisely at **$x = 4\text{ km/s}$** and **$y = 6\text{ km/s}$**, which yields a minimal fuel burn index of **$84$**.

The calculated value of **$\lambda = 12$** holds a critical operational meaning for the engineering team. It indicates that if the orbital insertion target criteria relaxes slightly by $1$ unit (changing the constraint value from $14$ to $13$), the total fuel cost index will drop by approximately $12$ units ($\Delta f \approx \lambda \Delta k$). This informs mission control exactly how much fuel weight they can save by negotiating looser orbital insertion tolerances with clients.