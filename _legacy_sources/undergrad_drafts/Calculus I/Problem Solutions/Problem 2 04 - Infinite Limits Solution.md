### 2. Evaluate the following analytically:

---

#### (a) $\lim_{x \to 2^{+}} \frac{-5}{x-2}$

* **Analysis:** As $x \to 2^{+}$, the numerator is a constant $-5$. The denominator $(x - 2)$ approaches $0$ through positive values (e.g., $2.01 - 2 = 0.01 > 0$).
* **Behavior:** A negative constant divided by a very small positive number results in a very large negative number.
* **Solution:**
$$\lim_{x \to 2^{+}} \frac{-5}{x-2} = -\infty$$

---

#### (b) $\lim_{x \to -\infty} (7x^{7} - 5x^{3} + 4x - 1)$

* **Analysis:** For limits of polynomials at infinity, the end behavior is determined entirely by the leading term with the highest power, which is $7x^{7}$.
* **Behavior:** As $x \to -\infty$, raising a negative number to an odd power ($7$) results in a negative value. Multiplying by positive $7$ keeps it negative.
* **Solution:**
$$\lim_{x \to -\infty} (7x^{7} - 5x^{3} + 4x - 1) = \lim_{x \to -\infty} 7x^{7} = -\infty$$

---

#### (c) $\lim_{x \to 3^{+}} \frac{4}{3-x}$

* **Analysis:** The numerator is a constant $4$. As $x \to 3^{+}$, $x$ is slightly greater than $3$ (e.g., $3.01$), so the denominator $(3 - x)$ approaches $0$ through negative values (e.g., $3 - 3.01 = -0.01 < 0$).
* **Behavior:** A positive constant divided by a very small negative number yields a very large negative number.
* **Solution:**
$$\lim_{x \to 3^{+}} \frac{4}{3-x} = -\infty$$

---

#### (d) $\lim_{x \to 0^{+}} \frac{1}{x+5}$

* **Analysis:** This limit can be evaluated directly by substituting $x = 0$ because the denominator does not approach $0$.
* **Behavior:** The expression simply evaluates to $\frac{1}{0+5}$.
* **Solution:**
$$\lim_{x \to 0^{+}} \frac{1}{x+5} = \frac{1}{5}$$

---

#### (e) $\lim_{x \to -4^{+}} \frac{3x}{x+4}$

* **Analysis:** As $x \to -4^{+}$, the numerator approaches $3(-4) = -12$. The denominator $(x + 4)$ approaches $0$ through positive values (e.g., $-3.99 + 4 = 0.01 > 0$).
* **Behavior:** A negative constant around $-12$ divided by a tiny positive number yields a very large negative number.
* **Solution:**
$$\lim_{x \to -4^{+}} \frac{3x}{x+4} = -\infty$$

---

#### (f) $\lim_{x \to -\infty} (1 - 2x + 5x^{2} - 17x^{3} - 4x^{7})$

* **Analysis:** The term with the highest power dominates the polynomial, which is $-4x^{7}$.
* **Behavior:** As $x \to -\infty$, $x^{7}$ goes to $-\infty$ because the exponent is odd. Multiplying by the negative coefficient $-4$ flips the sign to positive.
* **Solution:**
$$\lim_{x \to -\infty} (1 - 2x + 5x^{2} - 17x^{3} - 4x^{7}) = \lim_{x \to -\infty} (-4x^{7}) = \infty$$

---

#### (g) $\lim_{x \to -5^{+}} \frac{(x+5)^{2}}{2x^{2}+10x}$

* **Analysis:** Direct substitution gives $\frac{0}{0}$, so we must simplify the rational expression by factoring the denominator:
  $$2x^{2} + 10x = 2x(x + 5)$$
* **Simplification:** $$\frac{(x+5)^{2}}{2x(x+5)} = \frac{x+5}{2x} \quad (\text{for } x \neq -5)$$
* **Evaluation:** Now substitute $x = -5$ into the simplified limit:
  $$\frac{-5 + 5}{2(-5)} = \frac{0}{-10} = 0$$
* **Solution:**
$$\lim_{x \to -5^{+}} \frac{(x+5)^{2}}{2x^{2}+10x} = 0$$

---

#### (h) $\lim_{\theta \to \pi^{-}} \csc(\theta)$

* **Analysis:** Recall that $\csc(\theta) = \frac{1}{\sin(\theta)}$. As $\theta \to \pi^{-}$, we are approaching $\pi$ from the quadrant II side (values slightly less than $\pi$, like $179^\circ$).
* **Behavior:** In quadrant II, $\sin(\theta)$ is positive and approaches $0$. Therefore, $\frac{1}{\text{small positive number}}$ grows toward positive infinity.
* **Solution:**
$$\lim_{\theta \to \pi^{-}} \csc(\theta) = \infty$$