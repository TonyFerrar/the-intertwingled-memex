### Problem Statement
Determine the domain of the vector-valued function:
$$\vec{r}(t) = \left\langle \sqrt{3t-4}, \sqrt{t+7}, \frac{6}{t-1} \right\rangle$$

---

### Step-by-Step Solution

To find the domain of this vector-valued function, we find the domain of each component independently and then determine where they intersect.

#### 1. Analyze the $x$-component: $x(t) = \sqrt{3t-4}$
* The expression inside the square root must be greater than or equal to zero.
  $$3t - 4 \ge 0 \implies 3t \ge 4 \implies t \ge \frac{4}{3}$$
* **Domain of $x(t)$**: $\left[\frac{4}{3}, \infty\right)$

#### 2. Analyze the $y$-component: $y(t) = \sqrt{t+7}$
* The expression inside the square root must be greater than or equal to zero.
  $$t + 7 \ge 0 \implies t \ge -7$$
* **Domain of $y(t)$**: $[-7, \infty)$

#### 3. Analyze the $z$-component: $z(t) = \frac{6}{t-1}$
* The denominator cannot equal zero.
  $$t - 1 \neq 0 \implies t \neq 1$$
* **Domain of $z(t)$**: $(-\infty, 1) \cup (1, \infty)$

---

### Finding the Intersection

Now, find the interval where all three conditions are satisfied at the same time:
1. $t \ge \frac{4}{3}$ (which is approximately $1.33$)
2. $t \ge -7$
3. $t \neq 1$

* Looking at the first condition ($t \ge \frac{4}{3}$), any value in this range is automatically greater than $-7$. 
* Furthermore, since $\frac{4}{3} > 1$, the restriction $t \neq 1$ is already excluded automatically because $1$ is strictly less than $\frac{4}{3}$.

Therefore, the condition $t \ge \frac{4}{3}$ is the limiting restriction that satisfies all components.

### Final Answer

* **Inequality Notation:** $t \ge \frac{4}{3}$
* **Interval Notation:** $\left[\frac{4}{3}, \infty\right)$

---

