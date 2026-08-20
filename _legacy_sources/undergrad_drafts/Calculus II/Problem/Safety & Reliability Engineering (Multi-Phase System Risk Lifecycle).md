A safety systems engineer models the risk profile of an industrial power grid over its entire operational lifecycle ($t \ge 0$ weeks). At exactly $t = 4$ weeks, technicians activate a secondary automated backup matrix, shifting the system's structural failure risks. Due to this stark operational phase change, the lifetime risk density function contains two completely different types of improprieties and is defined piecewise:

$$f(t) = \begin{cases} \frac{1}{\sqrt{4-t}} & 0 \le t < 4 \quad \text{(Risk spikes as old grid degrades)} \\ e^{-(t-4)} & t \ge 4 \quad \quad \text{(Risk stabilizes under backup matrix)} \end{cases}$$

To compute the total integrated lifetime risk value of the grid, the engineer must integrate the function over its entire lifespan from $0$ to $\infty$:

$$\text{Lifetime Risk} = \int_{0}^{\infty} f(t) \, dt$$
