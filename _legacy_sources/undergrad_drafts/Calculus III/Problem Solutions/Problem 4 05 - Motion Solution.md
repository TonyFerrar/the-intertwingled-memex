### Problem Statement
Find the derivative of the vector-valued function and the principal unit tangent vector:
$$\vec{r}(t) = -t\hat{i} - t^{4}\hat{j} - 6t^{2}\hat{k}$$

---

### Step-by-Step Solution

#### Part 1: Find the Derivative $\vec{r}^{\prime}(t)$
To find the derivative of a vector-valued function, differentiate each component with respect to $t$ individually using the power rule:

* **$\hat{i}$-component:** $\frac{d}{dt}[-t] = -1$
* **$\hat{j}$-component:** $\frac{d}{dt}[-t^4] = -4t^3$
* **$\hat{k}$-component:** $\frac{d}{dt}[-6t^2] = -12t$

$$\vec{r}^{\prime}(t) = -\hat{i} - 4t^{3}\hat{j} - 12t\hat{k}$$

---

#### Part 2: Find the Principal Unit Tangent Vector $\hat{T}(t)$
The principal unit tangent vector is found by dividing the tangent vector $\vec{r}^{\prime}(t)$ by its magnitude $|\vec{r}^{\prime}(t)|$:
$$\hat{T}(t) = \frac{\vec{r}^{\prime}(t)}{|\vec{r}^{\prime}(t)|}$$

**1. Calculate the Magnitude $|\vec{r}^{\prime}(t)|$:**
$$|\vec{r}^{\prime}(t)| = \sqrt{(-1)^2 + (-4t^3)^2 + (-12t)^2}$$
$$|\vec{r}^{\prime}(t)| = \sqrt{1 + 16t^6 + 144t^2}$$

Rearranging the terms in standard descending order:
$$|\vec{r}^{\prime}(t)| = \sqrt{16t^6 + 144t^2 + 1}$$

**2. Divide $\vec{r}^{\prime}(t)$ by its magnitude:**
$$\hat{T}(t) = \frac{-\hat{i} - 4t^{3}\hat{j} - 12t\hat{k}}{\sqrt{16t^6 + 144t^2 + 1}}$$

---

### Final Answer

* **Derivative:** $$\vec{r}^{\prime}(t) = -\hat{i} - 4t^{3}\hat{j} - 12t\hat{k}$$

* **Principal Unit Tangent Vector:** $$\hat{T}(t) = \frac{-1}{\sqrt{16t^6 + 144t^2 + 1}}\hat{i} - \frac{4t^3}{\sqrt{16t^6 + 144t^2 + 1}}\hat{j} - \frac{12t}{\sqrt{16t^6 + 144t^2 + 1}}\hat{k}$$