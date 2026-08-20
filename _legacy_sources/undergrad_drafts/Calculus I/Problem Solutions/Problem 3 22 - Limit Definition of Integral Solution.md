Here is the step-by-step solution to **Problem 3**:

### **1. Find the width of each subinterval ($\Delta x$)**

The formula for the subinterval width is:

$$\Delta x = \frac{b - a}{n}$$

For the definite integral $\int_{1}^{4} x^3 \, dx$, the limits of integration are $a = 1$ and $b = 4$. Substituting these into the formula gives:

$$\Delta x = \frac{4 - 1}{n} = \frac{3}{n}$$

### **2. Find the right-endpoint expression ($x_i$)**

The formula for finding the $x$-value of the $i$-th right endpoint is:

$$x_i = a + i\Delta x$$

Substituting our starting value $a = 1$ and our width $\Delta x = \frac{3}{n}$ gives:

$$x_i = 1 + i\left(\frac{3}{n}\right) = 1 + \frac{3i}{n}$$

### **3. Set up the Limit Definition expression**

The general limit definition of a definite integral using a Right Riemann Sum is:

$$\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i)\Delta x$$

Our function is $f(x) = x^3$, so we evaluate it at our right endpoint $x_i$:

$$f(x_i) = (x_i)^3 = \left(1 + \frac{3i}{n}\right)^3$$

Now, substitute $f(x_i)$ and $\Delta x$ into the limit expression:

$$\int_{1}^{4} x^3 \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} \left(1 + \frac{3i}{n}\right)^3 \left(\frac{3}{n}\right)$$

**Final Answer:**

The complete formal limit expression for the integral is:

$$\lim_{n \to \infty} \sum_{i=1}^{n} \frac{3}{n}\left(1 + \frac{3i}{n}\right)^3$$