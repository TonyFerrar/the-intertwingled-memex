### **Problem**

Determine whether the following improper integral converges or diverges, and evaluate it if it converges:

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx$$

### **Step-by-Step Solution**

#### **Step 1: Identify the interior discontinuity and split the integral**

The limits of integration are finite ($0$ to $2$). However, look closely at the denominator of the integrand: $\sqrt[3]{x-1}$.

When $x = 1$, the denominator becomes $0$, making the function approach infinity. Because $x = 1$ lies right in the **middle** of our integration interval $[0, 2]$, this is a Type 2 improper integral with an interior discontinuity.

We must split the integral at the point of discontinuity ($x = 1$) into two separate limits:

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx = \int_{0}^{1}\frac{1}{\sqrt[3]{x-1}}dx + \int_{1}^{2}\frac{1}{\sqrt[3]{x-1}}dx$$

Expressing these as limits gives:

$$\lim_{b \to 1^{-}} \int_{0}^{b}\frac{1}{\sqrt[3]{x-1}}dx + \lim_{c \to 1^{+}} \int_{c}^{2}\frac{1}{\sqrt[3]{x-1}}dx$$

Both parts must converge independently for the entire integral to converge.

#### **Step 2: Find the general antiderivative**

To make integration easier, rewrite the radical using a fractional negative exponent:

$$\int \frac{1}{\sqrt[3]{x-1}}dx = \int (x-1)^{-1/3}dx$$

Using the power rule for integration ($\int x^n dx = \frac{x^{n+1}}{n+1}$):

$$\int (x-1)^{-1/3}dx = \frac{(x-1)^{2/3}}{\frac{2}{3}} = \frac{3}{2}(x-1)^{2/3}$$

#### **Step 3: Evaluate the first half (from $0$ to $1$)**

Apply the fundamental theorem of calculus to the first limit:

$$\lim_{b \to 1^{-}} \left[ \frac{3}{2}(x-1)^{2/3} \right]_{0}^{b} = \lim_{b \to 1^{-}} \left( \frac{3}{2}(b-1)^{2/3} - \frac{3}{2}(0-1)^{2/3} \right)$$

- As $b \to 1^{-}$, the term $(b-1)^{2/3} \to 0$.
    
- For the lower bound, simplify $(-1)^{2/3}$: squaring $-1$ gives $1$, and the cube root of $1$ is $1$. So, $(-1)^{2/3} = 1$.
    

Evaluating the limit:

$$= 0 - \frac{3}{2}(1) = -\frac{3}{2}$$

#### **Step 4: Evaluate the second half (from $1$ to $2$)**

Apply the fundamental theorem of calculus to the second limit:

$$\lim_{c \to 1^{+}} \left[ \frac{3}{2}(x-1)^{2/3} \right]_{c}^{2} = \lim_{c \to 1^{+}} \left( \frac{3}{2}(2-1)^{2/3} - \frac{3}{2}(c-1)^{2/3} \right)$$

- For the upper bound, simplify $(2-1)^{2/3} = (1)^{2/3} = 1$.
    
- As $c \to 1^{+}$, the term $(c-1)^{2/3} \to 0$.
    

Evaluating the limit:

$$= \frac{3}{2}(1) - 0 = \frac{3}{2}$$

#### **Step 5: Combine the results**

Since both individual one-sided limits converged to finite numbers, the total improper integral converges. Now we add the two pieces together:

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx = -\frac{3}{2} + \frac{3}{2} = 0$$

### **Conclusion**

The improper integral **converges**.

**Final Answer:**

$$\int_{0}^{2}\frac{1}{\sqrt[3]{x-1}}dx = 0$$