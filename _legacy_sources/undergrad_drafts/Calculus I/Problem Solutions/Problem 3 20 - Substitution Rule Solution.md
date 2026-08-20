### **Problem**
Evaluate the indefinite integral using $u$-substitution:
$$\int x\sqrt{3-x}\,dx$$

---

### **Step-by-Step Solution**

**Step 1: Identify $u$ and find $du$.**
We set $u$ equal to the expression inside the radical:
$$u = 3 - x$$

Now, take the derivative of $u$ with respect to $x$:
$$du = -1\,dx \implies -du = dx$$

---

**Step 2: Solve for the leftover $x$.**
Notice that we still have an extra $x$ outside the radical. We can express this $x$ in terms of $u$ by rearranging our original substitution equation ($u = 3 - x$):
$$x = 3 - u$$

---

**Step 3: Substitute all parts into the original integral.**
Replace $x$, $\sqrt{3-x}$, and $dx$ with their equivalents in terms of $u$:
$$\int (3 - u)\sqrt{u}\,(-du)$$

Bring the negative sign out front and rewrite the radical as a fractional exponent ($u^{1/2}$):
$$-\int (3 - u)u^{1/2}\,du$$

Distribute $u^{1/2}$ inside the parentheses:
$$-\int (3u^{1/2} - u^{3/2})\,du$$

Distribute the negative sign to make integration cleaner:
$$\int (u^{3/2} - 3u^{1/2})\,du$$

---

**Step 4: Integrate using the Power Rule.**
Integrate each term individually:
$$\int u^{3/2}\,du = \frac{u^{5/2}}{\frac{5}{2}} = \frac{2}{5}u^{5/2}$$

$$3\int u^{1/2}\,du = 3 \cdot \frac{u^{3/2}}{\frac{3}{2}} = 3 \cdot \frac{2}{3}u^{3/2} = 2u^{3/2}$$

Combine them and add the constant of integration $C$:
$$\frac{2}{5}u^{5/2} - 2u^{3/2} + C$$

---

**Step 5: Substitute back the original expression for $u$.**
Replace $u$ with $3 - x$:
$$\frac{2}{5}(3 - x)^{5/2} - 2(3 - x)^{3/2} + C$$

---

### **Final Answer**
$$\int x\sqrt{3-x}\,dx = \frac{2}{5}(3 - x)^{5/2} - 2(3 - x)^{3/2} + C$$