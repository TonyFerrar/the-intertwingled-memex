## Problem Solution

We want to evaluate the following limit:
$$\lim_{x\rightarrow1^{+}}\left(\frac{5}{\ln x}-\frac{5}{x-1}\right)$$

### Step 1: Check the Indeterminate Form
As $x \rightarrow 1^{+}$, we analyze each term:
* $\ln(x) \rightarrow 0^{+}$, so $\frac{5}{\ln x} \rightarrow \infty$
* $x - 1 \rightarrow 0^{+}$, so $\frac{5}{x - 1} \rightarrow \infty$

This yields the indeterminate form **$\infty - \infty$**. To apply L'Hôpital's Rule, we must first combine the terms into a single fraction.

---

### Step 2: Combine into a Single Fraction
Find a common denominator, which is $(x - 1)\ln x$:

$$\lim_{x\rightarrow1^{+}} \frac{5(x - 1) - 5\ln x}{(x - 1)\ln x} = \lim_{x\rightarrow1^{+}} \frac{5x - 5 - 5\ln x}{(x - 1)\ln x}$$

Let's check the indeterminate form of this new expression by substituting $x = 1$:
* **Numerator:** $5(1) - 5 - 5\ln(1) = 0$
* **Denominator:** $(1 - 1)\ln(1) = 0$

Now we have the indeterminate form **$\frac{0}{0}$**, so we can apply L'Hôpital's Rule.

---

### Step 3: Apply L'Hôpital's Rule (First Time)
Differentiate the numerator and the denominator separately with respect to $x$.

* **Derivative of the numerator:**
  $$\frac{d}{dx}[5x - 5 - 5\ln x] = 5 - \frac{5}{x}$$

* **Derivative of the denominator** (using the Product Rule):
  $$\frac{d}{dx}[(x - 1)\ln x] = (1)\ln x + (x - 1)\left(\frac{1}{x}\right) = \ln x + 1 - \frac{1}{x}$$

Applying the rule gives:
$$\lim_{x\rightarrow1^{+}} \frac{5 - \frac{5}{x}}{\ln x + 1 - \frac{1}{x}}$$

To make the algebra easier before testing the limit again, let's multiply both the numerator and the denominator by $x$:
$$\lim_{x\rightarrow1^{+}} \frac{5x - 5}{x\ln x + x - 1}$$

---

### Step 4: Apply L'Hôpital's Rule (Second Time)
Let's check the form again by substituting $x = 1$:
* **Numerator:** $5(1) - 5 = 0$
* **Denominator:** $1\ln(1) + 1 - 1 = 0$

Since it is still in the indeterminate form **$\frac{0}{0}$**, we apply L'Hôpital's Rule a second time.

* **Derivative of the new numerator:**
  $$\frac{d}{dx}[5x - 5] = 5$$

* **Derivative of the new denominator** (using the Product Rule on $x\ln x$):
  $$\frac{d}{dx}[x\ln x + x - 1] = \left(1 \cdot \ln x + x \cdot \frac{1}{x}\right) + 1 = \ln x + 1 + 1 = \ln x + 2$$

Applying the rule again gives:
$$\lim_{x\rightarrow1^{+}} \frac{5}{\ln x + 2}$$

---

### Step 5: Evaluate the Limit
Now, substitute $x = 1$ into the simplified expression:

$$\frac{5}{\ln(1) + 2} = \frac{5}{0 + 2} = \frac{5}{2}$$

---

### Final Answer
$$\lim_{x\rightarrow1^{+}}\left(\frac{5}{\ln x}-\frac{5}{x-1}\right) = \frac{5}{2}$$