### **Given**

$$\vec{r}(t) = 3\sin(t)\hat{i} + 3\cos(t)\hat{j} \quad \text{for } 0 \le t \le 4\pi$$

First, let's find the velocity vector $\vec{r}'(t)$ and its magnitude $||\vec{r}'(t)||$:

$$\vec{r}'(t) = \frac{d}{dt}(3\sin(t))\hat{i} + \frac{d}{dt}(3\cos(t))\hat{j} = 3\cos(t)\hat{i} - 3\sin(t)\hat{j}$$

Now, compute the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(3\cos(t))^2 + (-3\sin(t))^2} = \sqrt{9\cos^2(t) + 9\sin^2(t)}$$

Using the fundamental trigonometric identity $\cos^2(t) + \sin^2(t) = 1$:

$$||\vec{r}'(t)|| = \sqrt{9(1)} = 3$$

### **1. Find the arc length $s$ for $0 \le t \le 4\pi$**

Using the definite integral formula for arc length:

$$s = \int_{0}^{4\pi} ||\vec{r}'(t)||\, dt$$

$$s = \int_{0}^{4\pi} 3\, dt = \left[ 3t \right]_{0}^{4\pi}$$

$$s = 3(4\pi) - 3(0) = 12\pi$$

**Answer:** The arc length $s$ is **$12\pi$** (or approximately $37.70$).

### **2. Solve for the arc length function $s(t)$ and evaluate arc length $s$ for $0 \le t \le 4\pi$**

To find the arc length function $s(t)$ starting from $a = 0$:

$$s(t) = \int_{0}^{t} ||\vec{r}'(u)||\, du$$

$$s(t) = \int_{0}^{t} 3\, du = \left[ 3u \right]_{0}^{t} = 3t$$

Evaluating this function at the upper limit $t = 4\pi$:

$$s(4\pi) = 3(4\pi) = 12\pi$$

**Answer:** * Arc length function: **$s(t) = 3t$**

- Evaluated arc length: **$12\pi$**
    

### **3. Find the arc length parametrization, $\vec{r}(s)$**

Following the arc length parametrization steps:

1. Invert the arc length function to solve for $t$ in terms of $s$:
    
    $$s = 3t \implies t = \frac{s}{3}$$
    
2. Substitute $t(s)$ back into the original position vector $\vec{r}(t)$:
    
    $$\vec{r}(s) = 3\sin\left(\frac{s}{3}\right)\hat{i} + 3\cos\left(\frac{s}{3}\right)\hat{j}$$
    

**Answer:** The arc length parametrization is **$\vec{r}(s) = 3\sin\left(\frac{s}{3}\right)\hat{i} + 3\cos\left(\frac{s}{3}\right)\hat{j}$** for $0 \le s \le 12\pi$.