### Core Integration Techniques
* **Power Rule:** $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$
* **$u$-Substitution:** A method used to simplify integrals by replacing a variable expression with $u$ and matching its derivative with $du$. When using $u$-substitution with definite integrals, the limits of integration must be converted using the substitution equation.

---

### Step-by-Step Solutions

#### (a) $\int_{1}^{2} \frac{2}{x^{2}} \, dx$

* **Step 1:** Rewrite the integrand using negative exponents.
  $$\int_{1}^{2} 2x^{-2} \, dx$$
* **Step 2:** Find the antiderivative using the Power Rule.
  $$\left[ \frac{2x^{-1}}{-1} \right]_{1}^{2} = \left[ -\frac{2}{x} \right]_{1}^{2}$$
* **Step 3:** Evaluate using the upper and lower limits.
  $$\left( -\frac{2}{2} \right) - \left( -\frac{2}{1} \right) = -1 - (-2) = -1 + 2 = 1$$
* **Answer:**
  $$\int_{1}^{2} \frac{2}{x^{2}} \, dx = 1$$

---

#### (b) $\int_{0}^{3} \frac{1}{5x+1} \, dx$

* **Step 1:** Use $u$-substitution.
  $$\text{Let } u = 5x + 1 \implies du = 5 \, dx \implies dx = \frac{1}{5} \, du$$
* **Step 2:** Convert the integration limits using $u = 5x + 1$.
  * Lower limit: When $x = 0$, $u = 5(0) + 1 = 1$
  * Upper limit: When $x = 3$, $u = 5(3) + 1 = 16$
* **Step 3:** Rewrite and evaluate the new integral.
  $$\int_{1}^{16} \frac{1}{u} \cdot \left(\frac{1}{5} \, du\right) = \frac{1}{5} \int_{1}^{16} \frac{1}{u} \, du$$
  $$\frac{1}{5} \Big[ \ln|u| \Big]_{1}^{16} = \frac{1}{5} \Big( \ln(16) - \ln(1) \Big)$$
  Since $\ln(1) = 0$:
  $$\frac{1}{5} \ln(16)$$
* **Answer:**
  $$\int_{0}^{3} \frac{1}{5x+1} \, dx = \frac{\ln(16)}{5}$$

---

#### (c) $\int_{1}^{3} \left(3x^{2} - \frac{1}{4}x^{3}\right) \, dx$

* **Step 1:** Find the antiderivative term-by-term using the Power Rule.
  $$\left[ 3\left(\frac{x^3}{3}\right) - \frac{1}{4}\left(\frac{x^4}{4}\right) \right]_{1}^{3} = \left[ x^3 - \frac{1}{16}x^4 \right]_{1}^{3}$$
* **Step 2:** Evaluate at the upper limit ($x = 3$).
  $$\left( (3)^3 - \frac{1}{16}(3)^4 \right) = 27 - \frac{81}{16} = \frac{432}{16} - \frac{81}{16} = \frac{351}{16}$$
* **Step 3:** Evaluate at the lower limit ($x = 1$).
  $$\left( (1)^3 - \frac{1}{16}(1)^4 \right) = 1 - \frac{1}{16} = \frac{15}{16}$$
* **Step 4:** Subtract the lower evaluation from the upper evaluation.
  $$\frac{351}{16} - \frac{15}{16} = \frac{336}{16} = 21$$
* **Answer:**
  $$\int_{1}^{3} \left(3x^{2} - \frac{1}{4}x^{3}\right) \, dx = 21$$

---

#### (d) $\int_{0}^{\pi/4} \tan(\theta) \sec^{2}(\theta) \, d\theta$

* **Step 1:** Use $u$-substitution. Since the derivative of $\tan(\theta)$ is $\sec^2(\theta)$:
  $$\text{Let } u = \tan(\theta) \implies du = \sec^2(\theta) \, d\theta$$
* **Step 2:** Convert the integration limits using $u = \tan(\theta)$.
  * Lower limit: When $\theta = 0$, $u = \tan(0) = 0$
  * Upper limit: When $\theta = \frac{\pi}{4}$, $u = \tan\left(\frac{\pi}{4}\right) = 1$
* **Step 3:** Rewrite and evaluate the integral.
  $$\int_{0}^{1} u \, du = \left[ \frac{u^2}{2} \right]_{0}^{1} = \left( \frac{1^2}{2} \right) - \left( \frac{0^2}{2} \right) = \frac{1}{2}$$
* **Answer:**
  $$\int_{0}^{\pi/4} \tan(\theta) \sec^{2}(\theta) \, d\theta = \frac{1}{2}$$

---

#### (e) $\int_{-2}^{-1} x \sqrt[4]{x + 2} \, dx$

* **Step 1:** Use algebraic $u$-substitution.
  $$\text{Let } u = x + 2 \implies du = dx$$
  $$\text{Rearranging for } x \text{ gives: } x = u - 2$$
* **Step 2:** Convert the integration limits using $u = x + 2$.
  * Lower limit: When $x = -2$, $u = -2 + 2 = 0$
  * Upper limit: When $x = -1$, $u = -1 + 2 = 1$
* **Step 3:** Rewrite the integral in terms of $u$ and distribute.
  $$\int_{0}^{1} (u - 2)u^{1/4} \, du = \int_{0}^{1} \left( u^{5/4} - 2u^{1/4} \right) \, du$$
* **Step 4:** Integrate using the Power Rule.
  $$\left[ \frac{u^{9/4}}{9/4} - 2\cdot\frac{u^{5/4}}{5/4} \right]_{0}^{1} = \left[ \frac{4}{9}u^{9/4} - \frac{8}{5}u^{5/4} \right]_{0}^{1}$$
* **Step 5:** Evaluate at the boundaries.
  $$\left( \frac{4}{9}(1)^{9/4} - \frac{8}{5}(1)^{5/4} \right) - (0) = \frac{4}{9} - \frac{8}{5}$$
  Find a common denominator ($45$):
  $$\frac{20}{45} - \frac{72}{45} = -\frac{52}{45}$$
* **Answer:**
  $$\int_{-2}^{-1} x \sqrt[4]{x + 2} \, dx = -\frac{52}{45}$$

---

#### (f) $\int_{1}^{3} \frac{e^{1/x}}{x^{2}} \, dx$

* **Step 1:** Use $u$-substitution.
  $$\text{Let } u = \frac{1}{x} = x^{-1} \implies du = -x^{-2} \, dx = -\frac{1}{x^2} \, dx \implies -du = \frac{1}{x^2} \, dx$$
* **Step 2:** Convert the integration limits using $u = \frac{1}{x}$.
  * Lower limit: When $x = 1$, $u = \frac{1}{1} = 1$
  * Upper limit: When $x = 3$, $u = \frac{1}{3}$
* **Step 3:** Rewrite the integral and account for the negative sign.
  $$\int_{1}^{1/3} e^u \, (-du) = -\int_{1}^{1/3} e^u \, du$$
  Flip the limits to eliminate the negative sign:
  $$\int_{1/3}^{1} e^u \, du$$
* **Step 4:** Evaluate the integral.
  $$\Big[ e^u \Big]_{1/3}^{1} = e^1 - e^{1/3} = e - \sqrt[3]{e}$$
* **Answer:**
  $$\int_{1}^{3} \frac{e^{1/x}}{x^{2}} \, dx = e - e^{1/3}$$