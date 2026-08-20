An electrical engineer designs a protective power switch that triggers instantly when voltage surges past a safe timeline. The electric current profile $I(t)$ (in amperes) relative to initialization time $t = 2$ milliseconds is governed by this piecewise setup:

$$I(t) = \begin{cases} 4 & : t < 2 \\ t^2 + 5 & : t \ge 2 \end{cases}$$

Determine whether the electrical signal is clean and continuous or if a sudden gap occurs by evaluating:
1. $\lim_{t\to2^{-}} I(t)$
2. $\lim_{t\to2^{+}} I(t)$
3. $\lim_{t\to2} I(t)$

**Solution:**
1. **Left-sided limit ($t < 2$):** Use the constant equation piece.
   $$\lim_{t\to2^{-}}(4) = 4\text{ A}$$
2. **Right-sided limit ($t > 2$):** Use the polynomial equation piece.
   $$\lim_{t\to2^{+}}(t^2 + 5) = (2)^2 + 5 = 4 + 5 = 9\text{ A}$$
3. **Two-sided limit comparison:**
   $$\lim_{t\to2^{-}} I(t) = 4 \quad \neq \quad \lim_{t\to2^{+}} I(t) = 9$$

**Answer:** The left-hand limit is $4\text{ A}$, the right-hand limit is $9\text{ A}$, and the overall limit **Does Not Exist (DNE)** due to a $5\text{-ampere}$ current jump at the switch threshold.

---
