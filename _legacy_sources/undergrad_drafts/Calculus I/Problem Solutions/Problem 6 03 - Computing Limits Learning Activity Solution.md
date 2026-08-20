
$$\lim_{x\to1}\frac{x-1}{\sqrt{x}-1}$$

---

### **Step 1: Check with Direct Substitution**

First, let's substitute $x = 1$ directly into the expression:

* **Numerator:** $1 - 1 = 0$
* **Denominator:** $\sqrt{1} - 1 = 1 - 1 = 0$

This yields the indeterminate form **$\frac{0}{0}$**. This means a limit exists, but we need to eliminate the hole algebraically. There are two standard algebraic ways to solve this: **Method 1 (Rationalizing)** or **Method 2 (Factoring)**.

---

### **Method 1: Rationalizing the Denominator**

To clear the radical from the denominator, multiply both the numerator and denominator by the conjugate of the denominator, which is $(\sqrt{x} + 1)$:

$$\lim_{x\to1}\frac{x-1}{\sqrt{x}-1} \cdot \frac{\sqrt{x}+1}{\sqrt{x}+1}$$

Expand the denominator using the difference of squares formula $(a-b)(a+b) = a^2 - b^2$:
$$(\sqrt{x}-1)(\sqrt{x}+1) = (\sqrt{x})^2 - 1^2 = x - 1$$

Keep the numerator in factored form:
$$\lim_{x\to1}\frac{(x-1)(\sqrt{x}+1)}{x-1}$$

Cancel the common factor $(x-1)$ from the numerator and denominator:
$$\lim_{x\to1}(\sqrt{x}+1)$$

Now, evaluate by direct substitution:
$$\sqrt{1} + 1 = 1 + 1 = 2$$

---

### **Method 2: Factoring the Numerator**

Alternatively, you can view the numerator $(x - 1)$ as a difference of squares if you treat $x$ as $(\sqrt{x})^2$:
$$x - 1 = (\sqrt{x})^2 - 1^2 = (\sqrt{x}-1)(\sqrt{x}+1)$$

Rewrite the limit using this substitution:
$$\lim_{x\to1}\frac{(\sqrt{x}-1)(\sqrt{x}+1)}{\sqrt{x}-1}$$

Cancel out the common factor $(\sqrt{x}-1)$:
$$\lim_{x\to1}(\sqrt{x}+1)$$

Evaluate by direct substitution:
$$1 + 1 = 2$$

**Answer:** $2$