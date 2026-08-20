## Solution for Problem 2

**Function:** $$f(t) = (7 + t^7)\left(\frac{3}{\sqrt[3]{t}} + 3t\right)$$

To find the derivative $f'(t)$, we can either use the **Product Rule** directly or rewrite the function by distributing (foiling) first. Rewriting the function first is often less prone to algebraic errors. Let's rewrite it using rational exponents.

### Step 1: Rewrite the Function
Recall that $\frac{3}{\sqrt[3]{t}} = \frac{3}{t^{1/3}} = 3t^{-1/3}$.

$$f(t) = (7 + t^7)(3t^{-1/3} + 3t)$$

Now, distribute the terms:
$$f(t) = 7(3t^{-1/3}) + 7(3t) + t^7(3t^{-1/3}) + t^7(3t)$$

Simplify the exponents using the rule $t^a \cdot t^b = t^{a+b}$:
* $t^7 \cdot t^{-1/3} = t^{21/3 - 1/3} = t^{20/3}$

$$f(t) = 21t^{-1/3} + 21t + 3t^{20/3} + 3t^8$$

---

### Step 2: Differentiate Term by Term
Now, apply the **Power Rule** ($\frac{d}{dt}[t^n] = n t^{n-1}$) to each term:

$$f'(t) = 21\left(-\frac{1}{3}\right)t^{-4/3} + 21(1) + 3\left(\frac{20}{3}\right)t^{17/3} + 3(8)t^7$$

Multiply the coefficients:
$$f'(t) = -7t^{-4/3} + 21 + 20t^{17/3} + 24t^7$$

---

### Step 3: Format the Final Answer
Convert rational or negative exponents back into radical forms if preferred, though leaving it in rational exponent form is generally acceptable:

$$f'(t) = -\frac{7}{t^{4/3}} + 21 + 20t^{17/3} + 24t^7$$

Alternatively, in radical notation:
$$f'(t) = -\frac{7}{\sqrt[3]{t^4}} + 21 + 20\sqrt[3]{t^{17}} + 24t^7$$