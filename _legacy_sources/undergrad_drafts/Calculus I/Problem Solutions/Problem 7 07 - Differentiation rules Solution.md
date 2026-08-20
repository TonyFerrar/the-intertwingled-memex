## Solution for Problem 7

**Problem:** Find the $42^{\text{nd}}$ and $55^{\text{th}}$ derivative of $f(x) = \cos x$.

Higher-order derivatives of sine and cosine functions follow a repeating, cyclic pattern of 4 steps. To solve this efficiently, we find the core pattern first.

### Step 1: Find the 4-Step Cyclic Pattern
Let's compute the first few derivatives of $f(x) = \cos x$:

* **Original function:** $f(x) = \cos x$
* **$1^{\text{st}}$ derivative:** $f'(x) = -\sin x$
* **$2^{\text{nd}}$ derivative:** $f''(x) = -\cos x$
* **$3^{\text{rd}}$ derivative:** $f'''(x) = \sin x$
* **$4^{\text{th}}$ derivative:** $f^{(4)}(x) = \cos x$ *(Back to the start!)*

Because the $4^{\text{th}}$ derivative returns to $\cos x$, any derivative order that is a multiple of 4 will equal $\cos x$:
$$f^{(4n)}(x) = \cos x$$

---

### Step 2: Find the $42^{\text{nd}}$ Derivative ($f^{(42)}(x)$)
Divide the target derivative order by 4 to find the remainder:
$$42 \div 4 = 10 \text{ with a remainder of } 2 \quad \left(\text{or } \frac{42}{4} = 10 \text{ R } 2\right)$$

A remainder of 2 means that the $42^{\text{nd}}$ derivative will match the **$2^{\text{nd}}$ derivative** in our cycle:
$$f^{(42)}(x) = f''(x) = -\cos x$$

---

### Step 3: Find the $55^{\text{th}}$ Derivative ($f^{(55)}(x)$)
Divide the target derivative order by 4 to find the remainder:
$$55 \div 4 = 13 \text{ with a remainder of } 3 \quad \left(\text{or } \frac{55}{4} = 13 \text{ R } 3\right)$$

A remainder of 3 means that the $55^{\text{th}}$ derivative will match the **$3^{\text{rd}}$ derivative** in our cycle:
$$f^{(55)}(x) = f'''(x) = \sin x$$

---

### Summary of Answers
* **$42^{\text{nd}}$ Derivative:** $-\cos x$
* **$55^{\text{th}}$ Derivative:** $\sin x$