### **Given**

$$\vec{r}(t) = \langle 2\cos(t), 2\sin(t), t \rangle$$

First, let's find the first derivative vector $\vec{r}'(t)$ and its magnitude:

$$\vec{r}'(t) = \langle -2\sin(t), 2\cos(t), 1 \rangle$$

Now, compute the magnitude (speed):

$$||\vec{r}'(t)|| = \sqrt{(-2\sin(t))^2 + (2\cos(t))^2 + (1)^2} = \sqrt{4\sin^2(t) + 4\cos^2(t) + 1}$$

Using the fundamental identity $\sin^2(t) + \cos^2(t) = 1$:

$$||\vec{r}'(t)|| = \sqrt{4(1) + 1} = \sqrt{5}$$

### **1. Solve for the unit tangent vector**

The formula for the unit tangent vector is $\hat{T}(t) = \frac{\vec{r}'(t)}{||\vec{r}'(t)||}$. Dividing each component of $\vec{r}'(t)$ by its constant magnitude:

$$\hat{T}(t) = \frac{\langle -2\sin(t), 2\cos(t), 1 \rangle}{\sqrt{5}}$$

$$\hat{T}(t) = \left\langle -\frac{2}{\sqrt{5}}\sin(t), \frac{2}{\sqrt{5}}\cos(t), \frac{1}{\sqrt{5}} \right\rangle$$

### **2. Solve for the radius of curvature**

To find the radius of curvature $\rho = \frac{1}{\kappa}$, we first need to determine the curvature $\kappa$. Since we have a fully worked out unit tangent vector $\hat{T}(t)$, we can use the derivative method:

$$\kappa(t) = \frac{||\hat{T}'(t)||}{\|\vec{r}'(t)\|}$$

1. **Find $\hat{T}'(t)$:**
    
    $$\hat{T}'(t) = \left\langle -\frac{2}{\sqrt{5}}\cos(t), -\frac{2}{\sqrt{5}}\sin(t), 0 \right\rangle$$
    
2. **Compute its magnitude $||\hat{T}'(t)||$:**
    
    $$||\hat{T}'(t)|| = \sqrt{\left(-\frac{2}{\sqrt{5}}\cos(t)\right)^2 + \left(-\frac{2}{\sqrt{5}}\sin(t)\right)^2 + 0^2}$$
    
    $$||\hat{T}'(t)|| = \sqrt{\frac{4}{5}\cos^2(t) + \frac{4}{5}\sin^2(t)} = \sqrt{\frac{4}{5}(\cos^2(t) + \sin^2(t))} = \sqrt{\frac{4}{5}} = \frac{2}{\sqrt{5}}$$
    
3. **Calculate curvature $\kappa$:**
    
    $$\kappa = \frac{||\hat{T}'(t)||}{\|\vec{r}'(t)\|} = \frac{\frac{2}{\sqrt{5}}}{\sqrt{5}} = \frac{2}{5}$$
    
4. **Calculate the radius of curvature $\rho$:**
    
    $$\rho = \frac{1}{\kappa} = \frac{1}{\frac{2}{5}} = \frac{5}{2}$$
    

**Answer:** * Unit tangent vector: **$\hat{T}(t) = \left\langle -\frac{2}{\sqrt{5}}\sin(t), \frac{2}{\sqrt{5}}\cos(t), \frac{1}{\sqrt{5}} \right\rangle$**

- Radius of curvature: **$\rho = \frac{5}{2} = 2.5$**