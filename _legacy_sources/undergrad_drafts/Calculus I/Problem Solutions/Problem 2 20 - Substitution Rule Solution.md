### **Problem**
Evaluate the indefinite integral using $u$-substitution:
$$\int \frac{x}{x^2 + 1}\,dx$$

---

### **Step-by-Step Solution**

**Step 1: Identify $u$ and find $du$.**
We set $u$ equal to the denominator, since its derivative will match the degree of the numerator:
$$u = x^2 + 1$$

Now, take the derivative of $u$ with respect to $x$:
$$du = 2x\,dx$$

---

**Step 2: Adjust for the constant.**
Our original integral has $x\,dx$ in the numerator, but our differential has $2x\,dx$. We can isolate $x\,dx$ by dividing both sides by $2$:
$$\frac{1}{2}\,du = x\,dx$$

---

**Step 3: Substitute $u$ and $du$ into the original integral.**
Substitute these components back into the integral:
$$\int \frac{1}{u} \cdot \left(\frac{1}{2}\,du\right)$$

Factor out the constant $\frac{1}{2}$:
$$\frac{1}{2} \int \frac{1}{u}\,du$$

---

**Step 4: Integrate.**
Recall that the integral of $\frac{1}{u}$ is $\ln|u|$:
$$\frac{1}{2}\ln|u| + C$$

---

**Step 5: Substitute back the original expression for $u$.**
Replace $u$ with $x^2 + 1$. Since $x^2 + 1$ is always positive for any real number $x$, we can drop the absolute value bars:
$$\frac{1}{2}\ln(x^2 + 1) + C$$

---

### **Final Answer**
$$\int \frac{x}{x^2 + 1}\,dx = \frac{1}{2}\ln(x^2 + 1) + C$$