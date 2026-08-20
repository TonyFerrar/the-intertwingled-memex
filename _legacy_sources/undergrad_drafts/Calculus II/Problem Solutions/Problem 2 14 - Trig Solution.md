### **The Strategy**

When evaluating trigonometric integrals where **both** sine and cosine have **even powers**, standard $u$-substitution won't work right away because there isn't an "extra" $\sin(x)$ or $\cos(x)$ to act as your $du$.

Instead, the strategy is to use trigonometric identities to reduce the powers. We can use a clever combination of the **double-angle identity** and the **half-angle identity**.

### **Step 1: Rewrite using the double-angle identity**

Recall the double-angle formula for sine: $\sin(2x) = 2\sin(x)\cos(x)$. If we divide by 2, we get:

$$\sin(x)\cos(x) = \frac{1}{2}\sin(2x)$$

Since our integrand is $\sin^2(x)\cos^2(x)$, we can group them together as a perfect square:

$$\sin^{2}(x)\cos^{2}(x) = (\sin(x)\cos(x))^2$$

Now, substitute the identity into the expression:

$$\left(\frac{1}{2}\sin(2x)\right)^2 = \frac{1}{4}\sin^2(2x)$$

Pull the constant outside the integral:

$$\frac{1}{4} \int \sin^2(2x) \, dx$$

### **Step 2: Lower the power using the half-angle identity**

We still have an even power ($\sin^2$), so we need to use the half-angle identity to reduce it further:

$$\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$$

In our case, $\theta = 2x$, which means $2\theta = 4x$. Substituting this in gives:

$$\sin^2(2x) = \frac{1 - \cos(4x)}{2}$$

Now substitute this back into our integral:

$$\frac{1}{4} \int \frac{1 - \cos(4x)}{2} \, dx$$

Pull the denominator out to combine the constants ($\frac{1}{4} \times \frac{1}{2} = \frac{1}{8}$):

$$\frac{1}{8} \int (1 - \cos(4x)) \, dx$$

### **Step 3: Integrate term-by-term**

Now the integral is in a simple form that we can integrate directly:

- The integral of $1$ with respect to $x$ is $x$.
    
- The integral of $\cos(4x)$ requires a quick reverse chain rule (or mini $u$-sub), which gives $\frac{1}{4}\sin(4x)$.
    

Applying these gives:

$$\frac{1}{8} \left( x - \frac{1}{4}\sin(4x) \right) + C$$

_(where $C$ is the constant of integration)_

### **Final Answer**

Distribute the $\frac{1}{8}$ to get the final, simplified expression:

$$\int \sin^{2}(x)\cos^{2}(x) \, dx = \frac{1}{8}x - \frac{1}{32}\sin(4x) + C$$