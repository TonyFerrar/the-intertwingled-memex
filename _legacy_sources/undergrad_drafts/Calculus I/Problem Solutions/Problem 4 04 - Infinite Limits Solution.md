### Evaluate the following limits and give the equation for any horizontal asymptote (if there are none, state that).

---

### A. 
$$\lim_{x \to \infty} \frac{-5x^{3}-2x+3}{3x^{3}+3x^{2}-5x}$$

* **Analysis:** This is a limit at infinity of a rational function where the degree of the numerator ($3$) is equal to the degree of the denominator ($3$). 
* **Algebraic Evaluation:** Divide every term by the highest power of $x$ in the denominator, which is $x^{3}$:
  $$\lim_{x \to \infty} \frac{\frac{-5x^{3}}{x^{3}} - \frac{2x}{x^{3}} + \frac{3}{x^{3}}}{\frac{3x^{3}}{x^{3}} + \frac{3x^{2}}{x^{3}} - \frac{5x}{x^{3}}} = \lim_{x \to \infty} \frac{-5 - \frac{2}{x^{2}} + \frac{3}{x^{3}}}{3 + \frac{3}{x} - \frac{5}{x^{2}}}$$
* **Evaluation:** Since any term with $x$ in the denominator approaches $0$ as $x \to \infty$:
  $$\frac{-5 - 0 + 0}{3 + 0 - 0} = -\frac{5}{3}$$

* **Horizontal Asymptote:** Because the limit as $x \to \infty$ is a finite value, it defines a horizontal asymptote.
  * **Limit:** $-\frac{5}{3}$
  * **Horizontal Asymptote:** $y = -\frac{5}{3}$

---

### B. 
$$\lim_{x \to \infty} \frac{4x^{5}+6x^{2}-2}{5-4x+2x^{3}}$$

* **Analysis:** The degree of the numerator ($5$) is strictly greater than the degree of the denominator ($3$). 
* **Algebraic Evaluation:** Divide every term by the highest power of $x$ in the denominator, which is $x^{3}$:
  $$\lim_{x \to \infty} \frac{\frac{4x^{5}}{x^{3}} + \frac{6x^{2}}{x^{3}} - \frac{2}{x^{3}}}{\frac{5}{x^{3}} - \frac{4x}{x^{3}} + \frac{2x^{3}}{x^{3}}} = \lim_{x \to \infty} \frac{4x^{2} + \frac{6}{x} - \frac{2}{x^{3}}}{\frac{5}{x^{3}} - \frac{4}{x^{2}} + 2}$$
* **Evaluation:** As $x \to \infty$, the numerator is dominated by $4x^{2}$ which grows infinitely large ($\infty$), while the denominator approaches the constant value $2$:
  $$\frac{\infty + 0 - 0}{0 - 0 + 2} = \infty$$

* **Horizontal Asymptote:** Since the limit does not approach a finite number, there is no horizontal asymptote in this direction.
  * **Limit:** $\infty$
  * **Horizontal Asymptote:** None

---

### C. 
$$\lim_{x \to \infty} \frac{\sqrt[3]{x}+4}{1-5\sqrt{x}}$$

* **Analysis:** We can rewrite the radical expressions using fractional exponents to easily compare their growth rates:
  $$\sqrt[3]{x} = x^{1/3} \quad \text{and} \quad \sqrt{x} = x^{1/2}$$
  The degree of the numerator ($1/3 \approx 0.33$) is strictly less than the degree of the denominator ($1/2 = 0.5$).
* **Algebraic Evaluation:** Divide every term by the highest power of $x$ in the denominator, which is $x^{1/2}$:
  $$\lim_{x \to \infty} \frac{\frac{x^{1/3}}{x^{1/2}} + \frac{4}{x^{1/2}}}{\frac{1}{x^{1/2}} - \frac{5x^{1/2}}{x^{1/2}}} = \lim_{x \to \infty} \frac{x^{(1/3 - 1/2)} + \frac{4}{x^{1/2}}}{\frac{1}{x^{1/2}} - 5} = \lim_{x \to \infty} \frac{\frac{1}{x^{1/6}} + \frac{4}{x^{1/2}}}{\frac{1}{x^{1/2}} - 5}$$
* **Evaluation:** As $x \to \infty$, all terms with $x$ in their denominators approach $0$:
  $$\frac{0 + 0}{0 - 5} = \frac{0}{-5} = 0$$

* **Horizontal Asymptote:** Because the limit as $x \to \infty$ is a finite value ($0$), it defines a horizontal asymptote.
  * **Limit:** $0$
  * **Horizontal Asymptote:** $y = 0$