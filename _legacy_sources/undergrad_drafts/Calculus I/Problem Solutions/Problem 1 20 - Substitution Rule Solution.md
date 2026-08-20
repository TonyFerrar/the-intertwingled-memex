### **Problem**
Evaluate the indefinite integral using $u$-substitution:
$$\int (2x + 1)\sqrt[5]{x^2 + x}\,dx$$

---

### **Step-by-Step Solution**

**Step 1: Identify $u$ and find $du$.**
Look for a function whose derivative is also present in the integrand. We let $u$ be the expression inside the radical:
$$u = x^2 + x$$

Now, take the derivative of $u$ with respect to $x$ to find $du$:
$$du = (2x + 1)\,dx$$

---

**Step 2: Substitute $u$ and $du$ into the original integral.**
Rewrite the entire integral in terms of $u$:
$$\int \sqrt[5]{u}\,du$$

Convert the radical to a fractional exponent to make it easier to integrate:
$$\int u^{1/5}\,du$$

---

**Step 3: Integrate using the Power Rule.**
Recall the power rule for integration: $\int u^n \,du = \frac{u^{n+1}}{n+1} + C$.
$$\int u^{1/5}\,du = \frac{u^{(1/5 + 1)}}{\frac{1}{5} + 1} + C$$

$$\int u^{1/5}\,du = \frac{u^{6/5}}{\frac{6}{5}} + C$$

$$\int u^{1/5}\,du = \frac{5}{6}u^{6/5} + C$$

---

**Step 4: Substitute back the original expression for $u$.**
Replace $u$ with $x^2 + x$ to get the final answer:
$$\frac{5}{6}(x^2 + x)^{6/5} + C$$

---

### **Final Answer**
$$\int (2x + 1)\sqrt[5]{x^2 + x}\,dx = \frac{5}{6}(x^2 + x)^{6/5} + C$$