
### **Problem**

Determine whether the following improper integral converges or diverges, and evaluate it if it converges:

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx$$

### **Step-by-Step Solution**

#### **Step 1: Split the integral into two parts**

Because both the upper limit ($\infty$) and the lower limit ($-\infty$) are infinite, this is a doubly improper integral. To evaluate it properly, we must split it at a convenient interior point (like $0$) into two separate limits:

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx = \int_{-\infty}^{0}x^{3}e^{-x^{4}}dx + \int_{0}^{\infty}x^{3}e^{-x^{4}}dx$$

For the entire integral to converge, **both** individual pieces must converge independently. We can rewrite these using limits with variables $s$ and $t$:

$$\lim_{s \to -\infty} \int_{s}^{0}x^{3}e^{-x^{4}}dx + \lim_{t \to \infty} \int_{0}^{t}x^{3}e^{-x^{4}}dx$$

#### **Step 2: Find the antiderivative using $u$-substitution**

Let's find the indefinite integral of the inner function, $\int x^{3}e^{-x^{4}}dx$, using substitution:

- Let $u = -x^4$
    
- Then, find the derivative: $du = -4x^3 dx \implies x^3 dx = -\frac{1}{4} du$
    

Substitute these into the integral:

$$\int x^{3}e^{-x^{4}}dx = \int e^u \left(-\frac{1}{4}\right) du = -\frac{1}{4}e^u$$

Substitute $-x^4$ back in for $u$ to get the final antiderivative:

$$-\frac{1}{4}e^{-x^{4}}$$

#### **Step 3: Evaluate the first half (from $-\infty$ to $0$)**

Now, let's plug our antiderivative into the left-hand limit:

$$\lim_{s \to -\infty} \left[ -\frac{1}{4}e^{-x^{4}} \right]_{s}^{0} = \lim_{s \to -\infty} \left( \left(-\frac{1}{4}e^{-0^4}\right) - \left(-\frac{1}{4}e^{-s^4}\right) \right)$$

$$= \lim_{s \to -\infty} \left( -\frac{1}{4}(1) + \frac{1}{4e^{s^4}} \right)$$

As $s \to -\infty$, the term $s^4$ becomes a massive positive number, which means $e^{s^4} \to \infty$. Therefore, the fraction $\frac{1}{4e^{s^4}}$ shrinks to $0$:

$$= -\frac{1}{4} + 0 = -\frac{1}{4}$$

The first half converges to $-\frac{1}{4}$.

#### **Step 4: Evaluate the second half (from $0$ to $\infty$)**

Next, plug the antiderivative into the right-hand limit:

$$\lim_{t \to \infty} \left[ -\frac{1}{4}e^{-x^{4}} \right]_{0}^{t} = \lim_{t \to \infty} \left( \left(-\frac{1}{4}e^{-t^4}\right) - \left(-\frac{1}{4}e^{-0^4}\right) \right)$$

$$= \lim_{t \to \infty} \left( -\frac{1}{4e^{t^4}} + \frac{1}{4}(1) \right)$$

Just like before, as $t \to \infty$, the fraction $\frac{1}{4e^{t^4}}$ goes to $0$:

$$= 0 + \frac{1}{4} = \frac{1}{4}$$

The second half converges to $\frac{1}{4}$.

#### **Step 5: Combine the results**

Since both halves converged to finite numbers, the total improper integral converges. We add the two values together:

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx = -\frac{1}{4} + \frac{1}{4} = 0$$

### **Conclusion**

The improper integral **converges**.

**Final Answer:**

$$\int_{-\infty}^{\infty}x^{3}e^{-x^{4}}dx = 0$$

> 💡 **Pro-Tip Shortcut (Odd Function Symmetry):**
> 
> Notice that the integrand $f(x) = x^3e^{-x^4}$ is an **odd function** because $f(-x) = -f(x)$. For a regular definite integral with symmetric bounds around zero (like $-a$ to $a$), an odd function always integrates to $0$.
> 
> For _improper_ integrals, you can only safely use this rule _after_ proving that the individual pieces converge (which we just did!). Because they converge, the perfectly symmetric balancing act cancels out nicely to zero.