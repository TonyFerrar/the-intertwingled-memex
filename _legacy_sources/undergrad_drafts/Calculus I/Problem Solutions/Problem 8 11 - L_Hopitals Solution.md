## Problem Solution

We want to evaluate the following limit:
$$\lim_{x\rightarrow\infty}(x^{2}-1)^{2/x}$$

### Step 1: Check the Indeterminate Form
Let's analyze the behavior of the base and the exponent as $x \rightarrow \infty$:
* **Base:** $x^2 - 1 \rightarrow \infty$
* **Exponent:** $\frac{2}{x} \rightarrow 0$

This yields the indeterminate power form **$\infty^0$**. To apply L'Hôpital's Rule, we need to rewrite this expression using a natural logarithm transformation.

---

### Step 2: Use Logarithmic Transformation
Let $y = (x^{2}-1)^{2/x}$. Taking the natural logarithm ($\ln$) of both sides allows us to bring the exponent down in front:
$$\ln y = \ln\left[(x^{2}-1)^{2/x}\right] = \frac{2}{x} \ln(x^2 - 1) = \frac{2\ln(x^2 - 1)}{x}$$

Now, we check the limit of $\ln y$ as $x \rightarrow \infty$:
$$\lim_{x\rightarrow\infty} \ln y = \lim_{x\rightarrow\infty} \frac{2\ln(x^2 - 1)}{x}$$

Let's check the indeterminate form of this fraction:
* **Numerator:** $2\ln(\infty) \rightarrow \infty$
* **Denominator:** $\infty$

We now have the indeterminate form **$\frac{\infty}{\infty}$**, so we can apply L'Hôpital's Rule.

---

### Step 3: Apply L'Hôpital's Rule
We differentiate the numerator and denominator separately with respect to $x$.

* **Derivative of the numerator** (using the Chain Rule):
  $$\frac{d}{dx}[2\ln(x^2 - 1)] = 2 \cdot \frac{1}{x^2 - 1} \cdot (2x) = \frac{4x}{x^2 - 1}$$

* **Derivative of the denominator**:
  $$\frac{d}{dx}[x] = 1$$

Applying the rule gives:
$$\lim_{x\rightarrow\infty} \ln y \overset{\text{L'H}}{=} \lim_{x\rightarrow\infty} \frac{\frac{4x}{x^2 - 1}}{1} = \lim_{x\rightarrow\infty} \frac{4x}{x^2 - 1}$$

---

### Step 4: Evaluate the Limit of $\ln y$
The expression is still in the form $\frac{\infty}{\infty}$. We can factor out the highest power of $x$ (or apply L'Hôpital's Rule one more time):

$$\lim_{x\rightarrow\infty} \frac{4x}{x^2 - 1} \overset{\text{L'H}}{=} \lim_{x\rightarrow\infty} \frac{4}{2x} = 0$$

So, $\lim_{x\rightarrow\infty} \ln y = 0$.

---

### Step 5: Solve for the Original Limit
To get back to our original function $y$, we exponentiate using base $e$:
$$\lim_{x\rightarrow\infty} y = e^0 = 1$$

---

### Final Answer
$$\lim_{x\rightarrow\infty}(x^{2}-1)^{2/x} = 1$$