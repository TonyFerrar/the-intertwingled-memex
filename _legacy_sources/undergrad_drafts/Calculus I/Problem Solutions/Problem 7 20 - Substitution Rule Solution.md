### **Problem**
Evaluate the indefinite integral using $u$-substitution:
$$\int \frac{x}{\sqrt{x+1}}\,dx$$

---

### **Step-by-Step Solution**

**Step 1: Identify $u$ and find $du$.**
We set $u$ equal to the expression inside the square root in the denominator:
$$u = x + 1$$

Now, take the derivative of $u$ with respect to $x$:
$$du = 1\,dx \implies du = dx$$

---

**Step 2: Solve for the leftover $x$.**
Notice that we still have an extra $x$ in the numerator. We can rewrite $x$ in terms of $u$ by isolating $x$ in our substitution equation ($u = x + 1$):
$$x = u - 1$$

---

**Step 3: Substitute all parts into the original integral.**
Replace $x$, $\sqrt{x+1}$, and $dx$ with their equivalents in terms of $u$:
$$\int \frac{u - 1}{\sqrt{u}}\,du$$

Rewrite the radical in the denominator as a fractional exponent ($u^{1/2}$):
$$\int \frac{u - 1}{u^{1/2}}\,du$$

Split the fraction into two separate terms to make integration easier:
$$\int \left( \frac{u}{u^{1/2}} - \frac{1}{u^{1/2}} \right) du$$

Simplify the exponents using the rules of division ($u^1 / u^{1/2} = u^{1/2}$ and $1 / u^{1/2} = u^{-1/2}$):
$$\int (u^{1/2} - u^{-1/2})\,du$$

---

**Step 4: Integrate using the Power Rule.**
Integrate each term individually using $\int u^n \,du = \frac{u^{n+1}}{n+1}$:
$$\int u^{1/2}\,du = \frac{u^{3/2}}{\frac{3}{2}} = \frac{2}{3}u^{3/2}$$

$$\int u^{-1/2}\,du = \frac{u^{1/2}}{\frac{1}{2}} = 2u^{1/2}$$

Combine them and add the constant of integration $C$:
$$\frac{2}{3}u^{3/2} - 2u^{1/2} + C$$

---

**Step 5: Substitute back the original expression for $u$.**
Replace $u$ with $x + 1$ to get the final answer:
$$\frac{2}{3}(x+1)^{3/2} - 2(x+1)^{1/2} + C$$

---

### **Final Answer**
$$\int \frac{x}{\sqrt{x+1}}\,dx = \frac{2}{3}(x+1)^{3/2} - 2(x+1)^{1/2} + C$$