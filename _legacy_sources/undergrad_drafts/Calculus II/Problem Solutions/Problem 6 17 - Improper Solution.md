### **Problem**

Determine whether the following improper integral converges or diverges:

$$\int_{1}^{\infty}\frac{1}{\sqrt{x}}dx$$

### **Step-by-Step Solution**

#### **Step 1: Rewrite the improper integral as a limit**

Because the upper limit of integration is infinity ($\infty$), this is a Type 1 improper integral. We replace the $\infty$ symbol with a variable $t$ and write it as a limit:

$$\int_{1}^{\infty}\frac{1}{\sqrt{x}}dx = \lim_{t \to \infty} \int_{1}^{t}\frac{1}{\sqrt{x}}dx$$

#### **Step 2: Find the antiderivative**

To integrate more easily, rewrite the radical in the denominator using a fractional negative exponent:

$$\frac{1}{\sqrt{x}} = \frac{1}{x^{1/2}} = x^{-1/2}$$

Now, apply the power rule for integration ($\int x^n dx = \frac{x^{n+1}}{n+1}$):

$$\int x^{-1/2}dx = \frac{x^{-1/2 + 1}}{-1/2 + 1} = \frac{x^{1/2}}{\frac{1}{2}} = 2x^{1/2}$$

Rewriting it back into radical form gives our antiderivative:

$$2\sqrt{x}$$

#### **Step 3: Apply the Fundamental Theorem of Calculus**

Evaluate the definite integral from $1$ to $t$ by plugging in the upper and lower bounds:

$$\int_{1}^{t}x^{-1/2}dx = \left[ 2\sqrt{x} \right]_{1}^{t}$$

$$= (2\sqrt{t}) - (2\sqrt{1})$$

$$= 2\sqrt{t} - 2$$

#### **Step 4: Evaluate the limit**

Substitute this result back into the limit expression we set up in Step 1:

$$\lim_{t \to \infty} (2\sqrt{t} - 2)$$

As $t$ approaches infinity, the square root of $t$ ($\sqrt{t}$) also grows without bound towards infinity:

$$\lim_{t \to \infty} 2\sqrt{t} = \infty$$

Subtracting 2 from an infinitely large number still leaves it infinitely large:

$$\infty - 2 = \infty$$

### **Conclusion**

Because the limit does not result in a finite number and instead approaches infinity, the improper integral **diverges**.

**Final Answer:** The integral **diverges**.

> 💡 **Pro-Tip Shortcut (The $p$-test):**
> 
> Just like the previous question, you can use the **$p$-test for improper integrals** here to find the answer instantly!
> 
> The integral can be written as $\int_{1}^{\infty} \frac{1}{x^{1/2}} dx$.
> 
> - Here, $p = \frac{1}{2}$.
>     
> - Since $p \le 1$, the $p$-test tells us automatically that the area under the curve is infinite, meaning the integral **diverges**!
>