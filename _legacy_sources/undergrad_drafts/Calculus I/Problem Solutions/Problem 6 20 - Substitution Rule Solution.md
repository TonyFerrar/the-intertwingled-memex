### **Problem**
Evaluate the indefinite integral using $u$-substitution:
$$\int \frac{e^x}{(1-e^x)^3}\,dx$$

---

### **Step-by-Step Solution**

**Step 1: Identify $u$ and find $du$.**
We set $u$ equal to the expression inside the parentheses in the denominator, since its derivative is an exponential function that will match the numerator:
$$u = 1 - e^x$$

Now, take the derivative of $u$ with respect to $x$:
$$du = -e^x\,dx \implies -du = e^x\,dx$$

---

**Step 2: Substitute $u$ and $du$ into the original integral.**
Substitute these components back into the integral, replacing $e^x\,dx$ with $-du$:
$$\int \frac{1}{u^3}\,(-du)$$

Bring the negative sign out front and rewrite the fraction using a negative exponent to make it ready for the power rule:
$$-\int u^{-3}\,du$$

---

**Step 3: Integrate using the Power Rule.**
Recall the power rule for integration: $\int u^n \,du = \frac{u^{n+1}}{n+1} + C$.
$$-\left( \frac{u^{-2}}{-2} \right) + C$$

The two negative signs cancel out, giving:
$$\frac{1}{2}u^{-2} + C = \frac{1}{2u^2} + C$$

---

**Step 4: Substitute back the original expression for $u$.**
Replace $u$ with $1 - e^x$ to obtain the final answer:
$$\frac{1}{2(1-e^x)^2} + C$$

---

### **Final Answer**
$$\int \frac{e^x}{(1-e^x)^3}\,dx = \frac{1}{2(1-e^x)^2} + C$$