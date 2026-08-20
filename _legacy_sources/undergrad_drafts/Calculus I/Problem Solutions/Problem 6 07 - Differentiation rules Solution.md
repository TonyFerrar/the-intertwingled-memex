## Solution for Problem 6

**Problem:** Find the third derivative of $f(t) = 4t^3 - \frac{3}{t^5}$.

To find the third derivative, $f'''(t)$, we will use the **Power Rule** ($\frac{d}{dt}[t^n] = n t^{n-1}$) successively three times. 

### Step 1: Rewrite the Function
Before differentiating, it's easier to express the fraction with a negative exponent:
$$f(t) = 4t^3 - 3t^{-5}$$

---

### Step 2: Find the First Derivative $f'(t)$
Apply the Power Rule to each term:
$$f'(t) = 4(3t^2) - 3(-5t^{-6})$$
$$f'(t) = 12t^2 + 15t^{-6}$$

---

### Step 3: Find the Second Derivative $f''(t)$
Differentiate the first derivative:
$$f''(t) = 12(2t^1) + 15(-6t^{-7})$$
$$f''(t) = 24t - 90t^{-7}$$

---

### Step 4: Find the Third Derivative $f'''(t)$
Differentiate the second derivative:
$$f'''(t) = 24(1) - 90(-7t^{-8})$$
$$f'''(t) = 24 + 630t^{-8}$$

---

### Step 5: Format the Final Answer
Convert the negative exponent back into a fraction for the final presentation:
$$f'''(t) = 24 + \frac{630}{t^8}$$