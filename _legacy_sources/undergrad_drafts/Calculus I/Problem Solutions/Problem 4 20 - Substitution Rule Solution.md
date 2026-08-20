### **Problem**
Evaluate the indefinite integral using $u$-substitution:
$$\int (3x^2 + 4x - 5) \cdot 8^{(x^3 + 2x^2 - 5x + 5)}\,dx$$

---

### **Step-by-Step Solution**

**Step 1: Identify $u$ and find $du$.**
Look at the exponent of the base $8$. The derivative of that cubic polynomial matches the quadratic polynomial multiplying it perfectly. We let $u$ be the exponent:
$$u = x^3 + 2x^2 - 5x + 5$$

Now, take the derivative of $u$ with respect to $x$:
$$du = (3x^2 + 4x - 5)\,dx$$

---

**Step 2: Substitute $u$ and $du$ into the original integral.**
Notice that $(3x^2 + 4x - 5)\,dx$ matches exactly with $du$. Substituting these values gives:
$$\int 8^u\,du$$

---

**Step 3: Integrate using the exponential rule.**
Recall the general exponential integration rule: $\int a^u \,du = \frac{a^u}{\ln(a)} + C$. 
Applying this rule with base $a = 8$:
$$\frac{8^u}{\ln(8)} + C$$

---

**Step 4: Substitute back the original expression for $u$.**
Replace $u$ with the original cubic function:
$$\frac{8^{(x^3 + 2x^2 - 5x + 5)}}{\ln(8)} + C$$

---

### **Final Answer**
$$\int (3x^2 + 4x - 5) \cdot 8^{(x^3 + 2x^2 - 5x + 5)}\,dx = \frac{8^{(x^3 + 2x^2 - 5x + 5)}}{\ln(8)} + C$$