Here are the step-by-step solutions for finding the absolute extrema for each function on its given interval.

---

### **(a) $f(x) = \cos\left(x + \frac{\pi}{2}\right)$ on $\left[0, \frac{3\pi}{2}\right]$**

Using the trigonometric identity $\cos\left(x + \frac{\pi}{2}\right) = -\sin(x)$, we can simplify the function to:
$$f(x) = -\sin(x)$$

#### **Step 1: Find the critical points**
Take the derivative and set it equal to $0$:
$$f'(x) = -\cos(x) = 0$$

Within the interval $\left[0, \frac{3\pi}{2}\right]$, $\cos(x) = 0$ at:
$$x = \frac{\pi}{2}$$

#### **Step 2: Evaluate the function at the critical points and endpoints**
* **Left endpoint ($x = 0$):** $$f(0) = -\sin(0) = 0$$
* **Critical point ($x = \frac{\pi}{2}$):** $$f\left(\frac{\pi}{2}\right) = -\sin\left(\frac{\pi}{2}\right) = -1$$
* **Right endpoint ($x = \frac{3\pi}{2}$):** $$f\left(\frac{3\pi}{2}\right) = -\sin\left(\frac{3\pi}{2}\right) = -(-1) = 1$$

#### **Conclusion for (a):**
* **Absolute Maximum Value:** $1$ at $x = \frac{3\pi}{2}$
* **Absolute Minimum Value:** $-1$ at $x = \frac{\pi}{2}$

---

### **(b) $f(x) = \ln(x^2 + 3x + 4)$ on $[-2, 2]$**

#### **Step 1: Find the critical points**
Using the chain rule, find the derivative:
$$f'(x) = \frac{2x + 3}{x^2 + 3x + 4}$$

Set the derivative equal to $0$ (the denominator $x^2 + 3x + 4$ has a negative discriminant, so it is never $0$ and always positive):
$$2x + 3 = 0 \implies x = -\frac{3}{2}$$

Since $-\frac{3}{2} = -1.5$ lies within the interval $[-2, 2]$, it is a valid critical point.

#### **Step 2: Evaluate the function at the critical points and endpoints**
* **Left endpoint ($x = -2$):** $$f(-2) = \ln((-2)^2 + 3(-2) + 4) = \ln(4 - 6 + 4) = \ln(2) \approx 0.693$$
* **Critical point ($x = -\frac{3}{2}$):** $$f\left(-\frac{3}{2}\right) = \ln\left(\left(-\frac{3}{2}\right)^2 + 3\left(-\frac{3}{2}\right) + 4\right) = \ln\left(\frac{9}{4} - \frac{9}{2} + 4\right) = \ln\left(\frac{7}{4}\right) \approx 0.560$$
* **Right endpoint ($x = 2$):** $$f(2) = \ln((2)^2 + 3(2) + 4) = \ln(4 + 6 + 4) = \ln(14) \approx 2.639$$

#### **Conclusion for (b):**
* **Absolute Maximum Value:** $\ln(14)$ at $x = 2$
* **Absolute Minimum Value:** $\ln\left(\frac{7}{4}\right)$ at $x = -\frac{3}{2}$

---

### **(c) $g(x) = 5x^6 - 6x^5 + 3$ on $(-\infty, \infty)$**

#### **Step 1: Find the critical points**
Take the derivative and set it to $0$:
$$g'(x) = 30x^5 - 30x^4 = 0$$
$$30x^4(x - 1) = 0$$

This gives two critical points: $x = 0$ and $x = 1$.

#### **Step 2: Determine end behavior**
Since the leading term is $5x^6$ (an even degree polynomial with a positive coefficient):
$$\lim_{x \to \pm\infty} g(x) = \infty$$
Because the graph heads toward infinity on both sides, **no absolute maximum exists**.

#### **Step 3: Evaluate the critical points to find the absolute minimum**
* For $x = 0$:  
    $$g(0) = 5(0)^6 - 6(0)^5 + 3 = 3$$
* For $x = 1$:  
    $$g(1) = 5(1)^6 - 6(1)^5 + 3 = 5 - 6 + 3 = 2$$

#### **Conclusion for (c):**
* **Absolute Maximum Value:** Does not exist
* **Absolute Minimum Value:** $2$ at $x = 1$

---

### **(d) $h(x) = 7 - (5 - 2x)^{2/3}$ on $(-\infty, \infty)$**

#### **Step 1: Find the critical points**
Using the chain rule, find the derivative:
$$h'(x) = -\frac{2}{3}(5 - 2x)^{-1/3} \cdot (-2) = \frac{4}{3(5 - 2x)^{1/3}}$$

* The derivative is never equal to $0$ because the numerator is a constant ($4$).
* The derivative is **undefined** when the denominator is $0$:
    $$5 - 2x = 0 \implies x = \frac{5}{2}$$

Thus, $x = \frac{5}{2}$ is a critical point where a sharp turn (cusp) occurs.

#### **Step 2: Determine end behavior**
As $x$ approaches positive or negative infinity, $(5 - 2x)^{2/3}$ becomes a very large positive number because the power of $2/3$ squares the term before taking the cube root.
$$\lim_{x \to \pm\infty} h(x) = 7 - (\text{large positive number}) = -\infty$$
Because the graph goes down infinitely on both sides, **no absolute minimum exists**.

#### **Step 3: Evaluate the critical point**
* For $x = \frac{5}{2}$:  
    $$h\left(\frac{5}{2}\right) = 7 - \left(5 - 2\left(\frac{5}{2}\right)\right)^{2/3} = 7 - 0 = 7$$

#### **Conclusion for (d):**
* **Absolute Maximum Value:** $7$ at $x = \frac{5}{2}$
* **Absolute Minimum Value:** Does not exist