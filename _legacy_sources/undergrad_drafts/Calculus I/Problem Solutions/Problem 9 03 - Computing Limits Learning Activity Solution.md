

$$\lim_{x\to\frac{\pi}{2}}\frac{1-\sin^{2}x}{2\cos x}$$

---

### **Step 1: Check with Direct Substitution**

First, let's substitute $x = \frac{\pi}{2}$ directly into the expression, remembering that $\sin\left(\frac{\pi}{2}\right) = 1$ and $\cos\left(\frac{\pi}{2}\right) = 0$:

* **Numerator:** $1 - \sin^2\left(\frac{\pi}{2}\right) = 1 - (1)^2 = 0$
* **Denominator:** $2\cos\left(\frac{\pi}{2}\right) = 2(0) = 0$

This yields the indeterminate form **$\frac{0}{0}$**. This means a limit exists, but we need an algebraic approach to rewrite the function and eliminate the term causing the division by zero.

---

### **Method: Using Trigonometric Identities (Algebraic Method)**

1. **Apply the Pythagorean Identity:**
   Recall the fundamental identity:
   $$\sin^2 x + \cos^2 x = 1 \implies 1 - \sin^2 x = \cos^2 x$$

2. **Rewrite and Simplify the Limit:**
   Substitute $\cos^2 x$ into the numerator:
   $$\lim_{x\to\frac{\pi}{2}}\frac{\cos^2 x}{2\cos x}$$

   Cancel out one factor of $\cos x$ from both the numerator and denominator:
   $$\lim_{x\to\frac{\pi}{2}}\frac{\cos x}{2}$$

3. **Evaluate:**
   Now substitute $x = \frac{\pi}{2}$ into the simplified expression:
   $$\frac{\cos\left(\frac{\pi}{2}\right)}{2} = \frac{0}{2} = 0$$

---

