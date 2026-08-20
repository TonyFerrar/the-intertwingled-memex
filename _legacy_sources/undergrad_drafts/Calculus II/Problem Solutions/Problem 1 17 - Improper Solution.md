
### **Problem**

Determine whether the following improper integral converges or diverges, and evaluate it if it converges:

$$\int_{0}^{\infty}e^{-x}dx$$

### **Step-by-Step Solution**

#### **Step 1: Rewrite the improper integral as a limit**

Because the upper limit of integration is infinity ($\infty$), this is a Type 1 improper integral. To evaluate it, we replace $\infty$ with a variable $t$ and set up a limit as $t$ approaches infinity:

$$\int_{0}^{\infty}e^{-x}dx = \lim_{t \to \infty} \int_{0}^{t}e^{-x}dx$$

#### **Step 2: Find the antiderivative**

Next, we find the indefinite integral of the inner function, $e^{-x}$. Using basic integration rules (or $u$-substitution where $u = -x$):

$$\int e^{-x}dx = -e^{-x}$$

#### **Step 3: Apply the Fundamental Theorem of Calculus**

Now, evaluate the definite integral from $0$ to $t$ by plugging in the upper and lower limits:

$$\int_{0}^{t}e^{-x}dx = \left[ -e^{-x} \right]_{0}^{t}$$

$$= (-e^{-t}) - (-e^{-0})$$

Since any non-zero number raised to the power of 0 is 1 ($e^0 = 1$), this simplifies to:

$$= -e^{-t} + 1$$

$$= 1 - e^{-t}$$

#### **Step 4: Evaluate the limit**

Now substitute this back into the limit expression we established in Step 1:

$$\lim_{t \to \infty} (1 - e^{-t})$$

To see what happens as $t \to \infty$, it helps to rewrite the negative exponent as a fraction:

$$e^{-t} = \frac{1}{e^t}$$

As $t$ grows infinitely large, $e^t$ also grows infinitely large, making the fraction approach $0$:

$$\lim_{t \to \infty} \frac{1}{e^t} = 0$$

Therefore:

$$\lim_{t \to \infty} (1 - e^{-t}) = 1 - 0 = 1$$

### **Conclusion**

Since the limit results in a finite, defined number, the improper integral **converges**.

**Final Answer:**

$$\int_{0}^{\infty}e^{-x}dx = 1$$