**Problem:** Civil engineers are designing a curved underground drainage pipeline to navigate around the bedrock foundation of a new high-rise building. The central path of the curved drilling head through the ground is mapped out in meters by the vector function $\vec{r}(t) = \langle 4\cos(t), 4\sin(t), 3t \rangle$ for $0 \le t \le 6\pi$.

1. Calculate the exact length of the pipeline segment required to fulfill this path layout.
    
2. Provide the arc length parametrization $\vec{r}(s)$ so that maintenance teams can map pipeline inspection points strictly by tracking distance from the entrance.
    

#### Solution:

1. Find the velocity vector and its magnitude:
    
    $$\vec{r}'(t) = \langle -4\sin(t), 4\cos(t), 3 \rangle$$
    
    $$||\vec{r}'(t)|| = \sqrt{(-4\sin(t))^2 + (4\cos(t))^2 + 3^2} = \sqrt{16\sin^2(t) + 16\cos^2(t) + 9}$$
    
    $$||\vec{r}'(t)|| = \sqrt{16(\sin^2(t) + \cos^2(t)) + 9} = \sqrt{16(1) + 9} = \sqrt{25} = 5 \text{ m/rad}$$
    
    Integrate from $t = 0$ to $t = 6\pi$ to find total pipeline length:
    
    $$s = \int_{0}^{6\pi} 5\,dt = \left[ 5t \right]_{0}^{6\pi} = 30\pi \approx 94.25 \text{ meters}$$
    
2. Find the arc length function $s(t)$ and invert it:
    
    $$s(t) = \int_{0}^{t} 5\,du = 5t \implies t(s) = \frac{s}{5}$$
    
    Substitute $t(s) = \frac{s}{5}$ into the original vector equation:
    
    $$\vec{r}(s) = \left\langle 4\cos\left(\frac{s}{5}\right), 4\sin\left(\frac{s}{5}\right), \frac{3}{5}s \right\rangle \quad \text{for } 0 \le s \le 30\pi$$
    

**Engineering Meaning of the Answer:**

The calculated arc length of $30\pi \approx 94.25$ meters tells procurement engineers the exact physical length of pipeline material that must be ordered and manufactured for this construction site. The arc length parametrization $\vec{r}(s) = \langle 4\cos(s/5), 4\sin(s/5), 3s/5 \rangle$ translates the coordinate positions directly into distance traveled. If a maintenance sensor traveling inside the pipe detects a structural crack at exactly $50$ meters from the entrance, technicians do not need to guess its 3D location using time variables. They simply plug $s = 50$ directly into $\vec{r}(s)$ to get the exact spatial $(x, y, z)$ coordinates where they must dig to repair the leak.