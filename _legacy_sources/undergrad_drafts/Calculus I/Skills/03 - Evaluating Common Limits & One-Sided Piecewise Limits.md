# Calculus I Mastery: Skill 2 — Common Limits & One-Sided Piecewise Limits

**Core Concept:** A limit describes how a function behaves as it *approaches* a target input value, rather than the function's value exactly at that point. While common functions (like constants or identity functions) evaluate predictably, piecewise functions require analyzing independent left-handed and right-handed paths to determine if an overall limit exists at a domain boundary.

---

## 1. Fundamental Rules & Core Definitions

### Common Default Limits
* **Constant Functions:** The limit of a constant function is simply the constant itself.
  $$\lim_{x\rightarrow a} c = c$$
* **Identity Function:** The limit of the variable $x$ as it approaches $a$ is simply $a$.
  $$\lim_{x\rightarrow a} x = a$$

### The Existence Theorem for Limits
For an overall, two-sided limit to exist at a point $x = a$, the function must approach the exact same real value from both the left and right directions. 

$$\lim_{x\rightarrow a^{-}} f(x) = L \quad \text{and} \quad \lim_{x\rightarrow a^{+}} f(x) = L \iff \lim_{x\rightarrow a} f(x) = L$$

* **Left-Sided Limit ($\lim_{x\to a^{-}}$):** Approaching $a$ from values strictly less than $a$ ($x < a$).
* **Right-Sided Limit ($\lim_{x\to a^{+}}$):** Approaching $a$ from values strictly greater than $a$ ($x > a$).
* **Does Not Exist (DNE):** If the left-sided limit does not match the right-sided limit ($L \neq M$), then the overall two-sided limit **does not exist**.

---

## 2. Standard Activity Problems

**Context Function:** Consider the piecewise-defined function:
$$f(x)=\begin{cases}0 & : x<-5\\ \sqrt{25-x^{2}} & : -5\le x<4\\ 5x & : x\ge4\end{cases}$$


### Problem 2(a) — Right-Sided Limit at a Boundary
Evaluate $\lim_{x\to-5^{+}}f(x)$:
* **Step-by-step:** The notation $x \to -5^{+}$ means approaching from the right ($x > -5$). We must use the middle interval equation piece.
* **Evaluation:**
  $$\lim_{x\to-5^{+}}\sqrt{25-x^{2}} = \sqrt{25 - (-5)^2} = \sqrt{25 - 25} = 0$$
**Answer:** $0$

### Problem 2(b) — Left-Sided Limit at a Boundary
Evaluate $\lim_{x\to-5^{-}}f(x)$:
* **Step-by-step:** The notation $x \to -5^{-}$ means approaching from the left ($x < -5$). We use the top interval equation piece.
* **Evaluation:**
  $$\lim_{x\to-5^{-}}(0) = 0$$
**Answer:** $0$

### Problem 2(c) — Two-Sided Limit Verification
Evaluate $\lim_{x\to-5}f(x)$:
* **Step-by-step:** Check if the left-sided limit matches the right-sided limit.
* **Evaluation:** Since $\lim_{x\to-5^{-}}f(x) = 0$ and $\lim_{x\to-5^{+}}f(x) = 0$, they are equal.
**Answer:** $0$

### Problem 2(d) — Right-Sided Limit at Second Boundary
Evaluate $\lim_{x\to4^{+}}f(x)$:
* **Step-by-step:** Approaching from the right ($x > 4$). We use the bottom interval equation piece.
* **Evaluation:**
  $$\lim_{x\to4^{+}}(5x) = 5(4) = 20$$
**Answer:** $20$

### Problem 2(e) — Left-Sided Limit at Second Boundary
Evaluate $\lim_{x\to4^{-}}f(x)$:
* **Step-by-step:** Approaching from the left ($x < 4$). We use the middle interval equation piece.
* **Evaluation:**
  $$\lim_{x\to4^{-}}\sqrt{25-x^{2}} = \sqrt{25 - (4)^2} = \sqrt{25 - 16} = \sqrt{9} = 3$$
**Answer:** $3$

### Problem 2(f) — Two-Sided Limit Discontinuity Check
Evaluate $\lim_{x\to4}f(x)$:
* **Step-by-step:** Check if the left-sided limit matches the right-sided limit.
* **Evaluation:** $\lim_{x\to4^{-}}f(x) = 3$ whereas $\lim_{x\to4^{+}}f(x) = 20$. Since $3 \neq 20$, the boundaries do not meet.
**Answer:** Does Not Exist (DNE)

---

## 3. Real-Life & Engineering Application Problems

### Application Example 1: [[Electrical Step Function (Surge Protection Circuit)]]
[[Electrical Step Function (Surge Protection Circuit) Solution]]
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

### Application Example 2: [[Material Tensile Failure (Mechanical Engineering)]]
[[Material Tensile Failure (Mechanical Engineering) Solution]]
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