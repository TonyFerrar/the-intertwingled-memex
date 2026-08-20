### Solution

To compute the scalar line integral $\int_{C} f(x,y) \, ds$, we parameterize the line segment, find the arc length element $ds$, and integrate over the given bounds.

---

#### Step 1: Parameterize the Line Segment
The curve $C$ is a straight line segment starting at $P_0(1, 2)$ and ending at $P_1(5, 4)$. We can parameterize any line segment from $P_0$ to $P_1$ using the formula:
$$\mathbf{r}(t) = (1-t)P_0 + tP_1 \quad \text{for } 0 \le t \le 1$$

Substituting our points:
$$\mathbf{r}(t) = (1-t)\langle 1, 2 \rangle + t\langle 5, 4 \rangle$$
$$\mathbf{r}(t) = \langle 1 - t + 5t, 2 - 2t + 4t \rangle$$
$$\mathbf{r}(t) = \langle 1 + 4t, 2 + 2t \rangle \quad \text{for } 0 \le t \le 1$$

This gives our components:
* $x(t) = 1 + 4t$
* $y(t) = 2 + 2t$

#### Step 2: Find the Arc Length Element ($ds$)
First, find the derivative vector $\mathbf{r}'(t)$:
$$\mathbf{r}'(t) = \langle 4, 2 \rangle$$

Next, calculate the magnitude $||\mathbf{r}'(t)||$:
$$||\mathbf{r}'(t)|| = \sqrt{4^2 + 2^2} = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$$

Thus, the arc length differential is:
$$ds = ||\mathbf{r}'(t)|| \, dt = 2\sqrt{5} \, dt$$

#### Step 3: Substitute Everything into the Integrand
Our given scalar function is $f(x,y) = x - 2y$. Substitute $x(t)$ and $y(t)$ into the function:
$$f(x(t), y(t)) = (1 + 4t) - 2(2 + 2t)$$
$$f(x(t), y(t)) = 1 + 4t - 4 - 4t$$
$$f(x(t), y(t)) = -3$$

Notice that the variable $t$ completely cancels out, leaving a constant value along this entire path.

#### Step 4: Evaluate the Integral
Now, assemble the final definite integral from $t = 0$ to $t = 1$:
$$\int_{C} f(x,y) \, ds = \int_{0}^{1} (-3)(2\sqrt{5}) \, dt$$
$$\int_{C} f(x,y) \, ds = -6\sqrt{5} \int_{0}^{1} \, dt$$
$$\int_{C} f(x,y) \, ds = -6\sqrt{5} \Big[ t \Big]_{0}^{1} = -6\sqrt{5}$$

---

#### Final Answer
$$\int_{C} (x-2y) \, ds = -6\sqrt{5}$$