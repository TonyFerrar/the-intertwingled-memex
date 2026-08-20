### **Problem**

Determine whether the following improper integral converges or diverges:

$$\int_{1}^{\infty}x^{-2}dx$$

### **Step-by-Step Solution**

#### **Step 1: Rewrite the improper integral as a limit**

Because the upper limit of integration is infinity ($\infty$), this is a Type 1 improper integral. We replace $\infty$ with a variable $t$ and rewrite the integral as a limit:

$$\int_{1}^{\infty}x^{-2}dx = \lim_{t \to \infty} \int_{1}^{t}x^{-2}dx$$

#### **Step 2: Find the antiderivative**

To find the indefinite integral of $x^{-2}$, we use the power rule for integration ($\int x^n dx = \frac{x^{n+1}}{n+1}$):

$$\int x^{-2}dx = \frac{x^{-2+1}}{-2+1} = \frac{x^{-1}}{-1} = -x^{-1}$$

Rewriting it with a positive exponent makes it easier to work with:

$$-\frac{1}{x}$$

#### **Step 3: Apply the Fundamental Theorem of Calculus**

Now, evaluate the definite integral from $1$ to $t$ by plugging in the upper and lower limits:

$$\int_{1}^{t}x^{-2}dx = \left[ -\frac{1}{x} \right]_{1}^{t}$$

$$= \left(-\frac{1}{t}\right) - \left(-\frac{1}{1}\right)$$

$$= -\frac{1}{t} + 1$$

$$= 1 - \frac{1}{t}$$

#### **Step 4: Evaluate the limit**

Now, substitute this result back into our limit expression from Step 1:

$$\lim_{t \to \infty} \left(1 - \frac{1}{t}\right)$$

As $t$ approaches infinity, the denominator of the fraction $\frac{1}{t}$ grows infinitely large, which means the value of the fraction shrinks to $0$:

$$\lim_{t \to \infty} \frac{1}{t} = 0$$

Therefore:

$$1 - 0 = 1$$

### **Conclusion**

Because the limit resolves to a finite number ($1$), the improper integral **converges**.

**Final Answer:** The integral **converges** (and evaluates to $1$).

> 💡 **Pro-Tip Shortcut (The $p$-test):**
> 
> You can save a lot of time on integrals like this by using the **$p$-test for improper integrals**.
> 
> The rule states that an integral of the form $\int_{1}^{\infty} \frac{1}{x^p} dx$ will:
> 
> - **Converge** if $p > 1$
>     
> - **Diverge** if $p \le 1
>     
> 
> For this problem, rewriting $x^{-2}$ gives $\frac{1}{x^2}$. Since $p = 2$ (which is greater than $1$), you can immediately conclude that the integral **converges** without doing any of the calculus calculus steps!