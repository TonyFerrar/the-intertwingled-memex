### **Problem**
Evaluate the indefinite integral using $u$-substitution:
$$\int \frac{\sin(\sqrt{x})}{\sqrt{x}}\,dx$$

---

### **Step-by-Step Solution**

**Step 1: Identify $u$ and find $du$.**
We choose $u$ to be the inner function of the sine expression:
$$u = \sqrt{x} = x^{1/2}$$

Now, take the derivative of $u$ with respect to $x$ using the power rule:
$$du = \frac{1}{2}x^{-1/2}\,dx = \frac{1}{2\sqrt{x}}\,dx$$

---

**Step 2: Adjust for the constant.**
Our original integral has $\frac{1}{\sqrt{x}}\,dx$, but our differential has a $\frac{1}{2}$ factor. We can isolate $\frac{1}{\sqrt{x}}\,dx$ by multiplying both sides by $2$:
$$2\,du = \frac{1}{\sqrt{x}}\,dx$$

---

**Step 3: Substitute $u$ and $du$ into the original integral.**
Substitute these components back into the integral:
$$\int \sin(u) \cdot (2\,du)$$

Factor out the constant $2$:
$$2 \int \sin(u)\,du$$

---

**Step 4: Integrate.**
Recall that the integral of $\sin(u)$ is $-\cos(u)$:
$$2(-\cos(u)) + C = -2\cos(u) + C$$

---

**Step 5: Substitute back the original expression for $u$.**
Replace $u$ with $\sqrt{x}$ to get the final answer:
$$-2\cos(\sqrt{x}) + C$$

---

### **Final Answer**
$$\int \frac{\sin(\sqrt{x})}{\sqrt{x}}\,dx = -2\cos(\sqrt{x}) + C$$