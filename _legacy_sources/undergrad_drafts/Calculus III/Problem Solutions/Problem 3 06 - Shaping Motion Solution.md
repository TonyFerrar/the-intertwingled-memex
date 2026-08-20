### 1.

Solve for the arc length from $0 \le t \le \pi$

First, let's find the derivative vector $\vec{r}'(t)$ and its magnitude:

$$\vec{r}'(t) = \frac{d}{dt}(3\cos(t))\hat{i} + \frac{d}{dt}(3\sin(t))\hat{j} + \frac{d}{dt}(4t)\hat{k}$$

$$\vec{r}'(t) = -3\sin(t)\hat{i} + 3\cos(t)\hat{j} + 4\hat{k}$$

Now, compute the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(-3\sin(t))^2 + (3\cos(t))^2 + (4)^2}$$

$$||\vec{r}'(t)|| = \sqrt{9\sin^2(t) + 9\cos^2(t) + 16}$$

$$||\vec{r}'(t)|| = \sqrt{9(\sin^2(t) + \cos^2(t)) + 16} = \sqrt{9(1) + 16} = \sqrt{25} = 5$$

Using the definite integral formula for arc length from $t = 0$ to $t = \pi$:

$$s = \int_{0}^{\pi} ||\vec{r}'(t)||\, dt$$

$$s = \int_{0}^{\pi} 5\, dt = \left[ 5t \right]_{0}^{\pi} = 5\pi - 0 = 5\pi$$

**Answer:** The arc length is **$5\pi$** (or approximately $15.71$).

### 2.

Explain whether or not a closed domain such as this can or cannot be used to perform an arc length parametrization of the position vector $\vec{r}(s)$

**Yes, a closed domain can absolutely be used**, but with a constraint on the domain of the new parameter $s$.

Here is why:

- **The Process Works Locally:** The arc length function $s(t) = \int_{0}^{t} 5\, du = 5t$ is smooth, continuous, and strictly increasing on the closed interval $[0, \pi]$.
    
- **Bijective Mapping:** Because it is strictly increasing, it is a one-to-one (bijective) function over this restricted domain. This allows us to uniquely invert it to get $t(s) = \frac{s}{5}$.
    
- **Bounded Parameter Restriction:** The only catch is that the resulting arc length parametrization $\vec{r}(s) = 3\cos(\frac{s}{5})\hat{i} + 3\sin(\frac{s}{5})\hat{j} + 4(\frac{s}{5})\hat{k}$ is **only valid for the corresponding finite interval of $s$**. Since $t$ spans $[0, \pi]$, the arc length parameter $s$ is strictly constrained to the closed interval $[0, 5\pi]$.
    

**Answer:** A closed domain **can** be used to find the parametrization $\vec{r}(s)$, but the resulting vector function will only be defined on the bounded interval $0 \le s \le 5\pi$ rather than for all real numbers.