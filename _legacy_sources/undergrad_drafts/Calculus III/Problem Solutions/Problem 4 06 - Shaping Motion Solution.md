### **Given**

$$\vec{r}(t) = \langle 4t^2, -4t - 3, -2t \rangle \quad \text{[cite: 52]}$$

First, let's find the first derivative vector $\vec{r}'(t)$ and its magnitude:

$$\vec{r}'(t) = \langle 8t, -4, -2 \rangle$$

Now, compute the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(8t)^2 + (-4)^2 + (-2)^2} = \sqrt{64t^2 + 16 + 4} = \sqrt{64t^2 + 20}$$

We can factor out a $4$ from under the radical:

$$||\vec{r}'(t)|| = \sqrt{4(16t^2 + 5)} = 2\sqrt{16t^2 + 5}$$

### **1. Solve for the unit tangent vector**

The formula for the unit tangent vector is $\hat{T}(t) = \frac{\vec{r}'(t)}{||\vec{r}'(t)||}$. Dividing each component of $\vec{r}'(t)$ by its magnitude:

$$\hat{T}(t) = \frac{\langle 8t, -4, -2 \rangle}{2\sqrt{16t^2 + 5}}$$

Simplify by dividing each term by $2$:

$$\hat{T}(t) = \left\langle \frac{4t}{\sqrt{16t^2 + 5}}, \frac{-2}{\sqrt{16t^2 + 5}}, \frac{-1}{\sqrt{16t^2 + 5}} \right\rangle$$

### **2. Solve for the curvature at $t = 1$**

Since we already have the position vector, it is much more efficient to use the cross-product formula for curvature:

$$\kappa(t) = \frac{||\vec{r}'(t) \times \vec{r}''(t)||}{||\vec{r}'(t)||^3} \quad \text{[cite: 46]}$$

1. **Find the second derivative vector $\vec{r}''(t)$:**
    
    $$\vec{r}''(t) = \frac{d}{dt}\langle 8t, -4, -2 \rangle = \langle 8, 0, 0 \rangle$$
    
2. **Compute the cross product $\vec{r}'(t) \times \vec{r}''(t)$:**
    
    $$\vec{r}'(t) \times \vec{r}''(t) = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 8t & -4 & -2 \\ 8 & 0 & 0 \end{vmatrix}$$
    
    $$\vec{r}'(t) \times \vec{r}''(t) = \hat{i}(0 - 0) - \hat{j}(0 - (-16)) + \hat{k}(0 - (-32)) = \langle 0, -16, 32 \rangle$$
    
3. **Find the magnitude of this cross product:**
    
    $$||\vec{r}'(t) \times \vec{r}''(t)|| = \sqrt{0^2 + (-16)^2 + (32)^2} = \sqrt{256 + 1024} = \sqrt{1280} = 16\sqrt{5}$$
    
4. **Evaluate $||\vec{r}'(t)||$ at $t = 1$:**
    
    $$||\vec{r}'(1)|| = 2\sqrt{16(1)^2 + 5} = 2\sqrt{21}$$
    
5. **Calculate the curvature $\kappa(1)$:**
    
    $$\kappa(1) = \frac{16\sqrt{5}}{(2\sqrt{21})^3} = \frac{16\sqrt{5}}{8 \cdot 21\sqrt{21}} = \frac{2\sqrt{5}}{21\sqrt{21}}$$
    

To rationalize the denominator:

$$\kappa(1) = \frac{2\sqrt{105}}{441}$$

**Answer:** * Unit tangent vector: **$\hat{T}(t) = \left\langle \frac{4t}{\sqrt{16t^2 + 5}}, \frac{-2}{\sqrt{16t^2 + 5}}, \frac{-1}{\sqrt{16t^2 + 5}} \right\rangle$**

- Curvature at $t = 1$: **$\kappa(1) = \frac{2\sqrt{5}}{21\sqrt{21}}$** (or approximately **$0.0464$**)