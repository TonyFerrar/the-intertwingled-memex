### **Problem**

Determine whether the following improper integral converges or diverges:

$$\int_{2}^{\infty}\frac{1}{\ln(x)}dx \quad \left(\text{Hint: } \ln(x) < x \text{ on } (2, \infty)\right)$$

### **Step-by-Step Solution**

#### **Step 1: Check for hidden discontinuities**

First, look at the denominator, $\ln(x)$. The natural logarithm equals $0$ when $x = 1$. Because our interval of integration starts at $2$ and goes to infinity ($[2, \infty)$), the value $x = 1$ is safely outside the region. The function is completely continuous on this interval, meaning it is only improper because of the infinite upper limit.

#### **Step 2: Use the hint to build a comparison inequality**

We are given the helpful hint that for all $x > 2$:

$$\ln(x) < x$$

Since we are dealing with values of $x \ge 2$, both $\ln(x)$ and $x$ are positive numbers. When you take the reciprocal of both sides of an inequality involving positive numbers, the inequality sign flips:

$$\frac{1}{\ln(x)} > \frac{1}{x}$$

This tells us that our original function, $\frac{1}{\ln(x)}$, is strictly **larger** than the function $\frac{1}{x}$ on our entire interval.

#### **Step 3: Test the smaller function for convergence**

Now let's look at the improper integral of the **smaller** function from $2$ to $\infty$:

$$\int_{2}^{\infty}\frac{1}{x}dx$$

We can evaluate this by writing it as a limit:

$$\lim_{t \to \infty} \int_{2}^{t}\frac{1}{x}dx = \lim_{t \to \infty} \left[ \ln(x) \right]_{2}^{t}$$

$$= \lim_{t \to \infty} \left( \ln(t) - \ln(2) \right)$$

As $t$ approaches infinity, $\ln(t)$ also grows towards infinity without bound:

$$\infty - \ln(2) = \infty$$

Because the limit is infinite, the smaller integral $\int_{2}^{\infty}\frac{1}{x}dx$ **diverges**.

_(Note: You can also instantly know this diverges by the $p$-test rule, where $p = 1$.)_

#### **Step 4: Apply the Direct Comparison Test (DCT)**

The Direct Comparison Test states the following logic:

- If a _larger_ function converges, the _smaller_ function must also converge.
    
- If a _smaller_ function diverges (approaches infinity), the _larger_ function is forced to blow up to infinity and **diverge** as well.
    

Since our smaller function's area is infinite ($\int_{2}^{\infty}\frac{1}{x}dx = \infty$), and our original function is even larger ($\frac{1}{\ln(x)} > \frac{1}{x}$), the area under our original function must also be infinite.

### **Conclusion**

By the Direct Comparison Test, the improper integral **diverges**.

**Final Answer:** The integral **diverges**.