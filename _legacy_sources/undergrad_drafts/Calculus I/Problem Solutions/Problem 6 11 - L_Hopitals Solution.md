## Problem Solution

We want to evaluate the following limit:
$$\lim_{x\rightarrow\infty}\frac{e^{5x}}{x^{2}}$$

### Step 1: Check the Indeterminate Form
Let's analyze the behavior of the numerator and the denominator as $x \rightarrow \infty$:
* **Numerator:** $e^{5(\infty)} \rightarrow \infty$
* **Denominator:** $(\infty)^2 \rightarrow \infty$

Since direct evaluation results in the indeterminate form **$\frac{\infty}{\infty}$**, we can apply L'Hôpital's Rule.

---

### Step 2: Apply L'Hôpital's Rule (First Time)
We differentiate the numerator and the denominator separately with respect to $x$.

* **Derivative of the numerator** (using the Chain Rule):
  $$\frac{d}{dx}[e^{5x}] = 5e^{5x}$$

* **Derivative of the denominator**:
  $$\frac{d}{dx}[x^2] = 2x$$

Applying the rule gives:
$$\lim_{x\rightarrow\infty}\frac{e^{5x}}{x^{2}} \overset{\text{L'H}}{=} \lim_{x\rightarrow\infty} \frac{5e^{5x}}{2x}$$

---

### Step 3: Apply L'Hôpital's Rule (Second Time)
Let's check the behavior of our new expression as $x \rightarrow \infty$:
* **Numerator:** $5e^{5(\infty)} \rightarrow \infty$
* **Denominator:** $2(\infty) \rightarrow \infty$

Since it is still in the indeterminate form **$\frac{\infty}{\infty}$**, we apply L'Hôpital's Rule a second time.

* **Derivative of the new numerator**:
  $$\frac{d}{dx}[5e^{5x}] = 25e^{5x}$$

* **Derivative of the new denominator**:
  $$\frac{d}{dx}[2x] = 2$$

Applying the rule again gives:
$$\lim_{x\rightarrow\infty} \frac{25e^{5x}}{2}$$

---

### Step 4: Evaluate the Limit
Now we can evaluate the limit as $x \rightarrow \infty$:

$$\frac{25e^{5(\infty)}}{2} \rightarrow \frac{\infty}{2} = \infty$$

---

### Final Answer
$$\lim_{x\rightarrow\infty}\frac{e^{5x}}{x^{2}} = \infty \quad \text{(or does not exist)}$$