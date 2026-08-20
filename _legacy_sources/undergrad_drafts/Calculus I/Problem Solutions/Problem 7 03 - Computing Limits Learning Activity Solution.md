
$$\lim_{x\to3}\frac{\sqrt{x^{2}+7}-4}{x-3}$$

---

### **Step 1: Check with Direct Substitution**

First, let's substitute $x = 3$ directly into the function:

* **Numerator:** $\sqrt{3^2 + 7} - 4 = \sqrt{9 + 7} - 4 = \sqrt{16} - 4 = 4 - 4 = 0$
* **Denominator:** $3 - 3 = 0$

This yields the indeterminate form **$\frac{0}{0}$**. This means a limit exists, but we need to manipulate the expression algebraically to eliminate the shared zero factor $(x-3)$.

---

### **Step 2: Rationalize the Numerator**

To eliminate the radical expression, multiply both the numerator and the denominator by the conjugate of the numerator, which is $\left(\sqrt{x^2+7} + 4\right)$:

$$\lim_{x\to3}\frac{\sqrt{x^2+7}-4}{x-3} \cdot \frac{\sqrt{x^2+7}+4}{\sqrt{x^2+7}+4}$$

---

### **Step 3: Simplify the Expression**

1. Expand the numerator using the difference of squares identity $(a-b)(a+b) = a^2 - b^2$:
$$(\sqrt{x^2+7}-4)(\sqrt{x^2+7}+4) = (\sqrt{x^2+7})^2 - 4^2$$
$$= (x^2 + 7) - 16$$
$$= x^2 - 9$$

2. Keep the denominator in factored form (do not distribute):
$$\lim_{x\to3}\frac{x^2-9}{(x-3)(\sqrt{x^2+7}+4)}$$

3. Factor the new numerator $x^2 - 9$ as a difference of squares:
$$x^2 - 9 = (x-3)(x+3)$$

4. Rewrite the limit:
$$\lim_{x\to3}\frac{(x-3)(x+3)}{(x-3)(\sqrt{x^2+7}+4)}$$

---

### **Step 4: Cancel and Evaluate**

Cancel out the common factor $(x-3)$ from both the numerator and denominator:
$$\lim_{x\to3}\frac{x+3}{\sqrt{x^2+7}+4}$$

Now, evaluate the limit by substituting $x = 3$:
$$\frac{3+3}{\sqrt{3^2+7}+4} = \frac{6}{\sqrt{16}+4}$$

$$\frac{6}{4+4} = \frac{6}{8} = \frac{3}{4}$$

**Answer:** $\frac{3}{4}$ (or $0.75$)