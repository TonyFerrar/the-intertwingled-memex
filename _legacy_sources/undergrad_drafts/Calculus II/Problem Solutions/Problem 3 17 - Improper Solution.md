### **Problem**

Determine whether the following improper integral converges or diverges, and evaluate it if it converges:

$$\int_{-1}^{0}\frac{1}{\sqrt{1-x^{2}}}dx$$

### **Step-by-Step Solution**

#### **Step 1: Identify the discontinuity and rewrite as a limit**

Unlike the previous problems, the limits of integration here are finite numbers ($-1$ and $0$). However, if we look at the denominator of the integrand, $\sqrt{1-x^2}$, it becomes $0$ when $x = -1$.

Because the function approaches infinity as $x$ approaches $-1$, this is a **Type 2 improper integral** with an infinite discontinuity at the lower bound. We must rewrite it as a limit approaching $-1$ from the right side (indicated by $-1^+$):

$$\int_{-1}^{0}\frac{1}{\sqrt{1-x^{2}}}dx = \lim_{t \to -1^{+}} \int_{t}^{0}\frac{1}{\sqrt{1-x^{2}}}dx$$

#### **Step 2: Find the antiderivative**

The integrand matches a standard inverse trigonometric derivative form. The fundamental antiderivative of this function is the arcsine (or inverse sine) function:

$$\int \frac{1}{\sqrt{1-x^2}}dx = \arcsin(x)$$

#### **Step 3: Apply the Fundamental Theorem of Calculus**

Now, evaluate the definite integral from $t$ to $0$ by plugging in the bounds:

$$\int_{t}^{0}\frac{1}{\sqrt{1-x^{2}}}dx = \left[ \arcsin(x) \right]_{t}^{0}$$

$$= \arcsin(0) - \arcsin(t)$$

We know that the angle whose sine is $0$ is simply $0$ ($\arcsin(0) = 0$). Substituting this in simplifies the expression to:

$$= 0 - \arcsin(t)$$

$$= -\arcsin(t)$$

#### **Step 4: Evaluate the limit**

Now, we take the limit of our expression as $t$ approaches $-1$ from the right:

$$\lim_{t \to -1^{+}} (-\arcsin(t))$$

We need to find the angle in the interval $[-\frac{\pi}{2}, \frac{\pi}{2}]$ whose sine value is $-1$. Since $\sin(-\frac{\pi}{2}) = -1$, we have:

$$\arcsin(-1) = -\frac{\pi}{2}$$

Substituting this value back into our limit calculation gives:

$$- \left(-\frac{\pi}{2}\right) = \frac{\pi}{2}$$

### **Conclusion**

Since the limit yields a finite, well-defined number, the improper integral **converges**.

**Final Answer:**

$$\int_{-1}^{0}\frac{1}{\sqrt{1-x^{2}}}dx = \frac{\pi}{2}$$