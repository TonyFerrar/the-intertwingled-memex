Here is the step-by-step solution to **Problem 4**:

### **1. Set up the terms inside the summation**

We are given:

- Width: $\Delta x = \frac{2}{n}$
    
- Right-endpoints: $x_i = \frac{2i}{n}$
    

Evaluate the function $f(x) = 3x$ at the right endpoint $x_i$:

$$f(x_i) = 3\left(\frac{2i}{n}\right) = \frac{6i}{n}$$

Now, substitute $f(x_i)$ and $\Delta x$ into the Riemann sum:

$$f(x_i) \Delta x = \left(\frac{6i}{n}\right)\left(\frac{2}{n}\right) = \frac{12i}{n^2}$$

### **2. Apply the Summation**

Now we look at the sum from $i = 1$ to $n$:

$$\sum_{i=1}^{n} f(x_i) \Delta x = \sum_{i=1}^{n} \frac{12i}{n^2}$$

Since the summation runs over index $i$, any terms containing only $n$ act as constants. Factor out $\frac{12}{n^2}$:

$$\sum_{i=1}^{n} \frac{12i}{n^2} = \frac{12}{n^2} \sum_{i=1}^{n} i$$

Using the linear integer summation formula:

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

Substitute this formula back into our expression:

$$\frac{12}{n^2} \cdot \frac{n(n+1)}{2} = \frac{12}{2} \cdot \frac{n(n+1)}{n^2} = 6 \cdot \frac{n^2 + n}{n^2} = 6 \left(1 + \frac{1}{n}\right)$$

### **3. Take the Limit as $n \to \infty$**

Finally, evaluate the limit to get the exact area:

$$\int_{0}^{2} 3x \, dx = \lim_{n \to \infty} 6 \left(1 + \frac{1}{n}\right)$$

As $n$ approaches infinity, the term $\frac{1}{n}$ approaches $0$:

$$6 \cdot (1 + 0) = 6$$

**Final Answer:**

The exact area calculated via the limit definition of an integral is **6**.