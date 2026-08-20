Here is the complete step-by-step solution to the problem presented in the image.

### **Given**

$$\vec{r}(t) = (3t^2 - 7)\hat{i} + (-4t^2 - 10)\hat{j} \quad \text{for } 0 \le t \le 4$$

First, let's find the derivative vector $\vec{r}'(t)$ and its magnitude $||\vec{r}'(t)||$, as they are required for all three parts:

$$\vec{r}'(t) = \frac{d}{dt}(3t^2 - 7)\hat{i} + \frac{d}{dt}(-4t^2 - 10)\hat{j} = 6t\hat{i} - 8t\hat{j}$$

Now, find the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(6t)^2 + (-8t)^2} = \sqrt{36t^2 + 64t^2} = \sqrt{100t^2} = 10|t|$$

Since our domain is $0 \le t \le 4$, $t$ is non-negative, so:

$$||\vec{r}'(t)|| = 10t$$

### 1.

Find the arc length $s$ for $0 \le t \le 4$

Using the definite integral formula for arc length:

$$s = \int_{0}^{4} ||\vec{r}'(t)||\, dt$$

$$s = \int_{0}^{4} 10t\, dt = \left[ 5t^2 \right]_{0}^{4}$$

$$s = 5(4)^2 - 5(0)^2 = 5(16) = 80$$

**Answer:** The arc length $s$ is **$80$**.

### 2.

Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0 \le t \le 4$

To find the arc length function $s(t)$ starting from $a = 0$:

$$s(t) = \int_{0}^{t} ||\vec{r}'(u)||\, du$$

$$s(t) = \int_{0}^{t} 10u\, du = \left[ 5u^2 \right]_{0}^{t} = 5t^2$$

Evaluating this function at the upper limit $t = 4$:

$$s(4) = 5(4)^2 = 80$$

**Answer:** * Arc length function: **$s(t) = 5t^2$**

- Evaluated arc length: **$80$**
    

### 3.

Find the arc length parametrization, $\vec{r}(s)$

Following the parametrization steps:

1. Invert the arc length function to solve for $t$ in terms of $s$:
    
    $$s = 5t^2 \implies t^2 = \frac{s}{5}$$
    
    Since $t \ge 0$:
    
    $$t = \sqrt{\frac{s}{5}}$$
    
2. Substitute $t(s)$ back into the original position vector $\vec{r}(t)$:
    
    $$\vec{r}(s) = \left(3\left(\sqrt{\frac{s}{5}}\right)^2 - 7\right)\hat{i} + \left(-4\left(\sqrt{\frac{s}{5}}\right)^2 - 10\right)\hat{j}$$
    
    $$\vec{r}(s) = \left(\frac{3}{5}s - 7\right)\hat{i} + \left(-\frac{4}{5}s - 10\right)\hat{j}$$
    

**Answer:** The arc length parametrization is **$\vec{r}(s) = \left(\frac{3}{5}s - 7\right)\hat{i} + \left(-\frac{4}{5}s - 10\right)\hat{j}$** for $0 \le s \le 80$.