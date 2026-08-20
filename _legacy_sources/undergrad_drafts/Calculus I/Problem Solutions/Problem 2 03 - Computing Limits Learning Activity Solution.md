

$$f(x) = \begin{cases} 0 & : x < -5 \\ \sqrt{25 - x^2} & : -5 \le x < 4 \\ 5x & : x \ge 4 \end{cases}$$

---

### **Evaluating Limits at $x = -5$**

#### **(a) $\lim_{x\to-5^{+}}f(x)$**
This is a right-sided limit, meaning $x$ approaches $-5$ from values greater than $-5$ ($x > -5$). We use the middle piece of the function:
$$\lim_{x\to-5^{+}}f(x) = \lim_{x\to-5^{+}}\sqrt{25 - x^2}$$

Substitute $x = -5$:
$$\sqrt{25 - (-5)^2} = \sqrt{25 - 25} = \sqrt{0} = 0$$

**Answer:** $0$

#### **(b) $\lim_{x\to-5^{-}}f(x)$**
This is a left-sided limit, meaning $x$ approaches $-5$ from values less than $-5$ ($x < -5$). We use the top piece of the function:
$$\lim_{x\to-5^{-}}f(x) = \lim_{x\to-5^{-}}(0) = 0$$

**Answer:** $0$

#### **(c) $\lim_{x\to-5}f(x)$**
For a two-sided limit to exist, the left-sided and right-sided limits must be equal:
$$\lim_{x\to-5^{-}}f(x) = \lim_{x\to-5^{+}}f(x) = 0$$

Since both sides match, the limit exists and equals that value.

**Answer:** $0$

---

### **Evaluating Limits at $x = 4$**

#### **(d) $\lim_{x\to4^{+}}f(x)$**
This is a right-sided limit, meaning $x$ approaches $4$ from values greater than $4$ ($x > 4$). We use the bottom piece of the function:
$$\lim_{x\to4^{+}}f(x) = \lim_{x\to4^{+}}(5x)$$

Substitute $x = 4$:
$$5(4) = 20$$

**Answer:** $20$

#### **(e) $\lim_{x\to4^{-}}f(x)$**
This is a left-sided limit, meaning $x$ approaches $4$ from values less than $4$ ($x < 4$). We use the middle piece of the function:
$$\lim_{x\to4^{-}}f(x) = \lim_{x\to4^{-}}\sqrt{25 - x^2}$$

Substitute $x = 4$:
$$\sqrt{25 - (4)^2} = \sqrt{25 - 16} = \sqrt{9} = 3$$

**Answer:** $3$

#### **(f) $\lim_{x\to4}f(x)$**
We check if the left-sided and right-sided limits are equal:
* $\lim_{x\to4^{-}}f(x) = 3$
* $\lim_{x\to4^{+}}f(x) = 20$

Since $3 \neq 20$, the two-sided limit does not exist (DNE).

**Answer:** Does Not Exist (DNE)