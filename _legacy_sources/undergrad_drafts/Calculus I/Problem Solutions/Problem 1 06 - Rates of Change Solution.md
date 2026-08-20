# Learning Activity #5 Solutions
## Rates of Change as Limits: Limit Definition of Derivative

---

### 1. Graph Analysis

#### (a) Find the following:

* **i.** $\lim_{x\rightarrow4}f(x) = \text{Does Not Exist (DNE)}$  
  * *Reason:* The left-hand limit is $\lim_{x\rightarrow4^-}f(x) = 2$ and the right-hand limit is $\lim_{x\rightarrow4^+}f(x) = 4$. Since the one-sided limits are not equal, the two-sided limit does not exist.
* **ii.** $\lim_{x\rightarrow1^{+}}f(x) = \infty$  
  * *Reason:* Following the curve immediately to the right of the vertical dashed line at $x = 1$, the function values grow without bound toward positive infinity.
* **iii.** $\lim_{x\rightarrow8}f(x) = 1$  
  * *Reason:* As $x$ approaches $8$ from both sides, the graph leads to the open hole located at $y = 1$, regardless of the solid point at $(8, 2)$.
* **iv.** $\lim_{x\rightarrow10^{-}}f(x) = 3$  
  * *Reason:* As you approach the right endpoint $x = 10$ from the left, the curve terminates at the open hole at $y = 3$.
* **v.** $\lim_{x\rightarrow-\infty}f(x) = 0$  
  * *Reason:* Looking to the far left of the graph, the curve approaches the horizontal axis ($y = 0$).
* **vi.** $f^{\prime}(3) = \frac{1}{2}$  
  * *Reason:* On the interval $[2, 4]$, the graph is a straight line segment passing through $(2, 1)$ and $(4, 2)$. The derivative at $x = 3$ is simply the constant slope of this line segment:
    $$\text{Slope} = \frac{2 - 1}{4 - 2} = \frac{1}{2}$$

#### (b) State any horizontal and vertical asymptotes for $f(x)$.
* **Horizontal Asymptote:** $y = 0$ (as $x \rightarrow -\infty$)
* **Vertical Asymptote:** $x = 1$

#### (c) Identify any points of discontinuity for $f(x)$ AND indicate the type of discontinuity for each one.
* **$x = 1$:** **Infinite Discontinuity** (due to the behavior near the vertical asymptote).
* **$x = 4$:** **Jump Discontinuity** (the graph breaks and "jumps" from $y = 2$ to $y = 4$).
* **$x = 8$:** **Removable Discontinuity** (a "hole" exists at $y = 1$ with the single point displaced to $y = 2$).

#### (d) At which points, if any, is $f(x)$ continuous but not differentiable? State the $x$-value of any such points.
* **$x = 2$** and **$x = 6$**
  * *Reason:* At both of these locations, the graph forms a sharp turn or **corner**. The function is continuous because there are no breaks, holes, or asymptotes, but it is not differentiable because the slope changes abruptly.

*(Note: While the function is also non-differentiable at $x = 1, 4,$ and $8$, it is not continuous at those points, so they do not satisfy the "continuous but not differentiable" condition).*