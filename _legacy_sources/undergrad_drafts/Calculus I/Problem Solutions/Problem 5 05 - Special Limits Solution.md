# Problem
Using the conditions of continuity, determine if $f(x)$ is continuous at $x=0$ and $x=1$. If $f(x)$ is discontinuous at either point, indicate the type of discontinuity.

$$f(x)=\begin{cases}1-x&:x<0\\ e^{x}&:0\le x\le1\\ x^{2}+2&:x>1\end{cases}$$

---

# Background: Three Conditions of Continuity
A function $f(x)$ is continuous at a point $x = c$ if and only if it satisfies all three of the following conditions:
1. $f(c)$ is defined.
2. $\lim_{x \to c} f(x)$ exists (meaning the left-hand limit equals the right-hand limit: $\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x)$).
3. $\lim_{x \to c} f(x) = f(c)$.

---

# Solution

## Part 1: Checking Continuity at $x = 0$

### 1. Check if $f(0)$ is defined:
Looking at the piece defined for $0 \le x \le 1$:
$$f(0) = e^{0} = 1$$
*(Condition 1 is met)*

### 2. Check if $\lim_{x \to 0} f(x)$ exists:
We must evaluate both the left-hand and right-hand limits at $x = 0$.
* **Left-hand limit ($x \to 0^{-}$):** Use the piece $1 - x$ (where $x < 0$).
  $$\lim_{x \to 0^{-}} (1 - x) = 1 - 0 = 1$$
* **Right-hand limit ($x \to 0^{+}$):** Use the piece $e^x$ (where $x \ge 0$).
  $$\lim_{x \to 0^{+}} e^x = e^0 = 1$$

Since $\lim_{x \to 0^{-}} f(x) = \lim_{x \to 0^{+}} f(x) = 1$, the overall limit exists:
$$\lim_{x \to 0} f(x) = 1$$
*(Condition 2 is met)*

### 3. Check if $\lim_{x \to 0} f(x) = f(0)$:
$$\lim_{x \to 0} f(x) = 1 \quad \text{and} \quad f(0) = 1$$
*(Condition 3 is met)*

> **Conclusion for $x = 0$:** $f(x)$ is **continuous** at $x = 0$.

---

## Part 2: Checking Continuity at $x = 1$

### 1. Check if $f(1)$ is defined:
Looking at the piece defined for $0 \le x \le 1$:
$$f(1) = e^{1} = e \approx 2.718$$
*(Condition 1 is met)*

### 2. Check if $\lim_{x \to 1} f(x)$ exists:
Evaluate the one-sided limits at $x = 1$.
* **Left-hand limit ($x \to 1^{-}$):** Use the piece $e^x$ (where $x \le 1$).
  $$\lim_{x \to 1^{-}} e^x = e^1 = e$$
* **Right-hand limit ($x \to 1^{+}$):** Use the piece $x^2 + 2$ (where $x > 1$).
  $$\lim_{x \to 1^{+}} (x^2 + 2) = 1^2 + 2 = 3$$

Because the left-hand limit ($e$) does not equal the right-hand limit ($3$), the overall limit **does not exist**:
$$\lim_{x \to 1} f(x) = \text{DNE}$$
*(Condition 2 fails)*

### 3. Determine the type of discontinuity:
Since both one-sided limits exist as finite, distinct values ($\lim_{x \to 1^{-}} f(x) \neq \lim_{x \to 1^{+}} f(x)$), the graph breaks or "jumps" from one value to another.

> **Conclusion for $x = 1$:** $f(x)$ is **discontinuous** at $x = 1$, and it is a **jump discontinuity**.

---

# Final Answer Summary
* At **$x = 0$**, the function is **continuous**.
* At **$x = 1$**, the function is **discontinuous** with a **jump discontinuity**.