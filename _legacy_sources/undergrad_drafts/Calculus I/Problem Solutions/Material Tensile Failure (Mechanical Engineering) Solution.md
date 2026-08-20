A structural testing laboratory pulls a specialized synthetic carbon wire to measure stress resistance up to its critical physical elongation limit of $x = 10\text{ mm}$. The internal material stress function $S(x)$ matches this piecewise layout:

$$S(x) = \begin{cases} 8x & : 0 \le x < 10 \\ 0 & : x \ge 10 \quad \text{(The wire snaps completely)} \end{cases}$$

Analyze the system boundaries around the failure point by evaluating:
1. $\lim_{x\to10^{-}} S(x)$
2. $\lim_{x\to10^{+}} S(x)$

**Solution:**
1. **Left-sided limit ($x \to 10^{-}$):** This tracks the stress climbing inside the wire right up to the split second before it fails ($x < 10$).
   $$\lim_{x\to10^{-}}(8x) = 8(10) = 80\text{ MPa}$$
2. **Right-sided limit ($x \to 10^{+}$):** This tracks the physical status after the snapping threshold has been passed ($x \ge 10$).
   $$\lim_{x\to10^{+}}(0) = 0\text{ MPa}$$

**Answer:** The limit as you approach the failure point from the structural side is $80\text{ MPa}$, while from the post-snap side it is $0\text{ MPa}$.