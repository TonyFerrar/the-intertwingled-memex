# Skill 1: Algebraic Reformulation for Integration

## Conceptual Notes: Pre-Processing the Integrand

Before applying standard calculus integration formulas, a function must match a known baseline form. In many real-world applications and exam problems, functions are presented in rational or radical formats that do not immediately resemble standard rules like the Power Rule. 

**Algebraic Reformulation** is the foundational skill of converting fractions, radicals, and multi-term expressions into standard power forms ($x^n$) or recognized identities *before* attempting to integrate.

### Essential Algebraic Tools

To successfully reformulate an integrand, rely on three primary algebraic exponent rules:

1. **The Radical Rule (Rational Exponents):** Convert roots into fractional exponents.
   $$\sqrt[b]{x^a} = x^{\frac{a}{b}}$$
2. **The Negative Exponent Rule (Reciprocals):** Shift variables from the denominator to the numerator by changing the sign of the exponent.
   $$\frac{1}{x^n} = x^{-n}$$
3. **The Fraction Splitting Rule (Polynomial Division):** Divide a multi-term numerator by a single-term denominator (monomial).
   $$\frac{a \pm b}{c} = \frac{a}{c} \pm \frac{b}{c}$$

---

## Sample Problems (From Guided Notes)

### Sample Problem 1
Evaluate the indefinite integral:
$$\int \sqrt[3]{x} \, dx$$

**Step-by-Step Reformulation and Solution:**
1. **Reformulate:** Rewrite the radical using a fractional exponent:
   $$\int x^{1/3} \, dx$$
2. **Integrate:** Apply the standard power rule ($\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$):
   $$\frac{x^{(1/3) + 1}}{(1/3) + 1} + C = \frac{x^{4/3}}{4/3} + C$$
3. **Simplify:** Multiply by the reciprocal of the denominator:
   $$\frac{3}{4}x^{4/3} + C$$

---

### Sample Problem 2
Evaluate the indefinite integral:
$$\int \left(8 - x^5 + \frac{4}{x}\right) \, dx$$

**Step-by-Step Reformulation and Solution:**
1. **Reformulate:** Identify terms that need to be prepared. While $\frac{4}{x}$ can be written as $4x^{-1}$, recall that the power rule fails when $n = -1$. Instead, keep it in the form $4 \cdot \frac{1}{x}$ to utilize the natural logarithm rule.
2. **Integrate:** Integrate term-by-term using the sum/difference rules:
   * $\int 8 \, dx = 8x$
   * $\int -x^5 \, dx = -\frac{x^6}{6}$
   * $\int \frac{4}{x} \, dx = 4\ln|x|$

**Final Answer:**
$$8x - \frac{1}{6}x^6 + 4\ln|x| + C$$

---

### Sample Problem 3
Evaluate the indefinite integral:
$$\int \left(\frac{5}{1+x^2} + e^x - \frac{2}{x^2}\right) \, dx$$

**Step-by-Step Reformulation and Solution:**
1. **Reformulate:** Prepare the third term by moving the variable to the numerator using a negative exponent:
   $$\frac{2}{x^2} = 2x^{-2}$$
   The first term ($5 \cdot \frac{1}{1+x^2}$) is left as-is because it matches the standard inverse tangent derivative template.
2. **Rewrite the Integral:**
   $$\int \left(5 \cdot \frac{1}{1+x^2} + e^x - 2x^{-2}\right) \, dx$$
3. **Integrate:** Evaluate each term using standard integration laws:
   * $5 \int \frac{1}{1+x^2} \, dx = 5\arctan(x)$
   * $\int e^x \, dx = e^x$
   * $\int -2x^{-2} \, dx = -2 \cdot \frac{x^{-2+1}}{-2+1} = -2 \cdot \frac{x^{-1}}{-1} = 2x^{-1} = \frac{2}{x}$

**Final Answer:**
$$5\arctan(x) + e^x + \frac{2}{x} + C$$

---

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Deflection (Civil & Mechanical Engineering)]]
[[Structural Deflection (Civil & Mechanical Engineering) Solution]]


---

### Engineering Problem 2: [[Aerospace Telemetry (Rocket Acceleration Analysis)]]
[[Aerospace Telemetry (Rocket Acceleration Analysis) Solution]]
