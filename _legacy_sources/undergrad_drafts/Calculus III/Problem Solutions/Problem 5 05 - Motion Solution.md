### Problem Statement
Given $\vec{r}(t) = -6t^{3}\hat{i} - 3t^{7}\hat{j} - \frac{-3}{t^{4}}\hat{k}$ and $f(t) = \sqrt[4]{t}$, calculate:
1. $\frac{d}{dt}[\vec{r}(t)]$
2. $\frac{d}{dt}[\vec{r}(f(t))]$

---

### Step-by-Step Solution

First, let's rewrite the given vector-valued function $\vec{r}(t)$ and scalar function $f(t)$ in simplified power form to make differentiation easier:
$$\vec{r}(t) = -6t^{3}\hat{i} - 3t^{7}\hat{j} + 3t^{-4}\hat{k}$$
$$f(t) = t^{1/4}$$

---

#### Part 1: Calculate $\frac{d}{dt}[\vec{r}(t)]$

To find the derivative, use the power rule on each component individually:

* **$\hat{i}$-component:** $\frac{d}{dt}[-6t^3] = -18t^2$
* **$\hat{j}$-component:** $\frac{d}{dt}[-3t^7] = -21t^6$
* **$\hat{k}$-component:** $\frac{d}{dt}[3t^{-4}] = -12t^{-5} = -\frac{12}{t^5}$

$$\frac{d}{dt}[\vec{r}(t)] = -18t^{2}\hat{i} - 21t^{6}\hat{j} - \frac{12}{t^{5}}\hat{k}$$

---

#### Part 2: Calculate $\frac{d}{dt}[\vec{r}(f(t))]$

There are two common methods to solve this: by substitution first, or by using the Vector Chain Rule. Let's use **Method 1: Direct Substitution** as it is often simpler.

**Step 1: Substitute $f(t) = t^{1/4}$ into $\vec{r}(t)$**
$$\vec{r}(f(t)) = -6\left(t^{1/4}\right)^{3}\hat{i} - 3\left(t^{1/4}\right)^{7}\hat{j} + 3\left(t^{1/4}\right)^{-4}\hat{k}$$
$$\vec{r}(f(t)) = -6t^{3/4}\hat{i} - 3t^{7/4}\hat{j} + 3t^{-1}\hat{k}$$

**Step 2: Differentiate with respect to $t$**
Now, apply the power rule to each component of this composite vector function:
* **$\hat{i}$-component:** $\frac{d}{dt}[-6t^{3/4}] = -6 \cdot \frac{3}{4}t^{-1/4} = -\frac{9}{2}t^{-1/4}$
* **$\hat{j}$-component:** $\frac{d}{dt}[-3t^{7/4}] = -3 \cdot \frac{7}{4}t^{3/4} = -\frac{21}{4}t^{3/4}$
* **$\hat{k}$-component:** $\frac{d}{dt}[3t^{-1}] = 3 \cdot (-1)t^{-2} = -3t^{-2}$

$$\frac{d}{dt}[\vec{r}(f(t))] = -\frac{9}{2t^{1/4}}\hat{i} - \frac{21t^{3/4}}{4}\hat{j} - \frac{3}{t^2}\hat{k}$$

---

### Final Answers

1. $$\frac{d}{dt}[\vec{r}(t)] = -18t^{2}\hat{i} - 21t^{6}\hat{j} - \frac{12}{t^{5}}\hat{k}$$

2. $$\frac{d}{dt}[\vec{r}(f(t))] = -\frac{9}{2t^{1/4}}\hat{i} - \frac{21t^{3/4}}{4}\hat{j} - \frac{3}{t^2}\hat{k}$$