# Comprehensive Review of Logarithms: Expansion, Simplification, and Natural Logs

This review guide covers the fundamental properties of logarithms, strategies for expanding and condensing expressions, and a special focus on the natural logarithm ($\ln$). New step-by-step worked examples are included for each concept.

---

## 1. Core Properties of Logarithms

Logarithms are the inverses of exponential functions. The statement $\log_b(x) = y$ is mathematically equivalent to $b^y = x$. 

To expand or condense logarithmic expressions, we rely on three core algebraic properties (valid for any positive base $b$ where $b \neq 1$):

| Property Name | Algebraic Rule | Conceptual Meaning |
| :--- | :--- | :--- |
| **Product Property** | $\log_b(M \cdot N) = \log_b(M) + \log_b(N)$ | Multiplication inside a log becomes addition outside. |
| **Quotient Property** | $\log_b\left(\frac{M}{N}\right) = \log_b(M) - \log_b(N)$ | Division inside a log becomes subtraction outside. |
| **Power Property** | $\log_b(M^k) = k \cdot \log_b(M)$ | An exponent inside a log can move to the front as a coefficient. |

---

## 2. Logarithmic Expansion

**Expansion** is the process of taking a single complex logarithmic expression and breaking it apart into a sum and/or difference of separate, simpler logarithms.

### Step-by-Step Strategy:
1. Convert any radical signs into fractional exponents (e.g., $\sqrt{x} = x^{1/2}$).
2. Apply the **Quotient Property** to split the numerator and denominator terms using subtraction.
3. Apply the **Product Property** to split multiplied terms within the same log using addition.
4. Apply the **Power Property** to bring all remaining exponents down to the front as coefficients.

### New Worked Example:
Expand the expression completely: 
$$\log_2\left( \frac{x^3 \sqrt{y}}{z^5} \right)$$

#### Solution:
* **Step 1:** Rewrite the square root as a fractional exponent.
  $$\log_2\left( \frac{x^3 y^{1/2}}{z^5} \right)$$
* **Step 2:** Apply the quotient rule to separate the denominator ($z^5$).
  $$\log_2(x^3 y^{1/2}) - \log_2(z^5)$$
* **Step 3:** Apply the product rule to split the terms in the first log ($x^3$ and $y^{1/2}$).
  $$\log_2(x^3) + \log_2(y^{1/2}) - \log_2(z^5)$$
* **Step 4:** Use the power rule to pull all exponents to the front as coefficients.
  $$3\log_2(x) + \frac{1}{2}\log_2(y) - 5\log_2(z)$$

---

## 3. Logarithmic Simplification (Condensing)

**Condensing** is the exact opposite of expansion. The goal is to take a string of multiple logarithmic terms and combine them into one single logarithm.

### Step-by-Step Strategy:
1. Apply the **Power Property** in reverse: Move any front coefficients to the exponents of their arguments.
2. Scan the expression from left to right. Combine added terms into a product inside the log using the **Product Property**.
3. Combine subtracted terms into a quotient inside the log using the **Quotient Property**.

### New Worked Example:
Express the quantity as a single logarithm:
$$3\log_5(x) + 2\log_5(y) - \log_5(w)$$

#### Solution:
* **Step 1:** Move the coefficients $3$ and $2$ to the exponents of $x$ and $y$.
  $$\log_5(x^3) + \log_5(y^2) - \log_5(w)$$
* **Step 2:** Combine the first two added terms into a single product.
  $$\log_5(x^3 \cdot y^2) - \log_5(w)$$
* **Step 3:** Combine the remaining subtracted term into a denominator quotient.
  $$\log_5\left( \frac{x^3 y^2}{w} \right)$$

---

## 4. Special Review: The Natural Logarithm ($\ln$)

The **Natural Logarithm**, written as $\ln(x)$, is simply a logarithm whose base is Euler's number $e$ ($e \approx 2.71828$). 

$$\ln(x) = \log_e(x)$$

Because it is a logarithm, **$\ln$ follows every single expansion and condensation property listed above.** However, it features unique cancellation properties due to sharing a base with $e^x$.

### Essential Inverse Properties:
* $\ln(e^x) = x$  (The natural log cancels out base $e$)
* $e^{\ln(x)} = x$  (Base $e$ raised to a natural log cancels out)
* $\ln(e) = 1$      (Because $e^1 = e$)
* $\ln(1) = 0$      (Because $e^0 = 1$)

### New Worked Example: Condensing with Natural Logs
Express the given quantity as a single logarithm and simplify if possible:
$$\ln(x^2 - 9) - \ln(x + 3) + 4\ln(e)$$

#### Solution:
* **Step 1:** Apply inverse and power properties. Note that $4\ln(e) = 4(1) = 4$. Alternatively, you can treat $4\ln(e)$ as $\ln(e^4)$. Let's treat it as $\ln(e^4)$ to maintain a single log stream:
  $$\ln(x^2 - 9) - \ln(x + 3) + \ln(e^4)$$
* **Step 2:** Use the quotient property on the first two terms.
  $$\ln\left(\frac{x^2 - 9}{x + 3}\right) + \ln(e^4)$$
* **Step 3:** Simplify the rational argument algebraically. Factor the difference of squares in the numerator: $x^2 - 9 = (x - 3)(x + 3)$.
  $$\ln\left(\frac{(x - 3)(x + 3)}{x + 3}\right) + \ln(e^4)$$
  $$\ln(x - 3) + \ln(e^4)$$
* **Step 4:** Apply the product property to combine the remaining terms.
  $$\ln\left(e^4(x - 3)\right)$$



## Extra Help: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/OIz-5MyJA3g?si=E1ZGmrQHwUKRSLZi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/OIz-5MyJA3g?si=E1ZGmrQHwUKRSLZi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/fnhFneOz6n8?si=bDr6LbXVOxCujlb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>