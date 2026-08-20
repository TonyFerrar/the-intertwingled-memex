# Skill 3: Logarithmic Differentiation

## Conceptual Notes

### 1. The Strategy behind Logarithmic Differentiation
Up to this point, finding the derivatives of highly complex products, quotients, or powers required a rigorous application of standard product, quotient, and chain rules. **Logarithmic Differentiation** is a powerful technique that relies on the operational properties of natural logarithms ($\ln$) to simplify a complex equation *before* taking the derivative.

This technique is used in two primary scenarios:
1. To take the derivative of a function containing a variable in both the base and the exponent, matching the form $y = f(x)^{g(x)}$ (e.g., $y = x^x$ or $y = (\sin x)^x$). Standard power rules and exponential rules **do not apply** to these functions.
2. To simplify highly tedious algebraic products and quotients by breaking them down into separate addition and subtraction steps.

---

### 2. The Core Mechanism: Logarithm Properties & Implicit Chain Rule
Logarithmic differentiation relies entirely on three foundational log rules to rewrite expressions:
* **Product Property:** $\ln(AB) = \ln A + \ln B$
* **Quotient Property:** $\ln\left(\frac{A}{B}\right) = \ln A - \ln B$
* **Power Property:** $\ln(A^B) = B \cdot \ln A$



Once the natural log expands the expression, we differentiate implicitly with respect to $x$. Differentiating the left side ($\ln y$) always yields the exact same structure because of the Chain Rule:
$$\frac{d}{dx}[\ln y] = \frac{1}{y} \cdot \frac{dy}{dx}$$

To finish the problem, you isolate $\frac{dy}{dx}$ by multiplying both sides by $y$, and then back-substitute the original equation expression in place of $y$ so the final answer remains strictly in terms of $x$.

---

### 3. Step-by-Step Procedure
1. **Take the Logarithm:** Apply the natural logarithm ($\ln$) to both sides of the equation.
2. **Expand:** Use log properties to expand products, quotients, and pull exponents down into coefficients.
3. **Differentiate:** Differentiate both sides implicitly with respect to $x$, turning the left side into $\frac{1}{y}\frac{dy}{dx}$.
4. **Isolate:** Multiply both sides of the equation by $y$ to solve for $\frac{dy}{dx}$.
5. **Back-Substitute:** Replace $y$ with its original definition in terms of $x$ to complete the derivative expression.

---

## Sample Problems (Guided Notes Examples)

### Example 1: Handling a Variable Base and Variable Exponent
Find $\frac{dy}{dx}$ for the function:
$$y = x^x$$

**Step 1: Take the natural logarithm of both sides.**
$$\ln y = \ln(x^x)$$

**Step 2: Bring the exponent down using the Power Property.**
$$\ln y = x \cdot \ln x$$

**Step 3: Differentiate both sides with respect to $x$.**
The left side becomes $\frac{1}{y}\frac{dy}{dx}$. The right side requires the Product Rule ($u=x, v=\ln x$):
$$\frac{1}{y}\frac{dy}{dx} = \frac{d}{dx}[x] \cdot \ln x + x \cdot \frac{d}{dx}[\ln x]$$
$$\frac{1}{y}\frac{dy}{dx} = 1 \cdot \ln x + x \cdot \left(\frac{1}{x}\right)$$
$$\frac{1}{y}\frac{dy}{dx} = \ln x + 1$$

**Step 4: Multiply by $y$ and back-substitute.**
$$\frac{dy}{dx} = y(\ln x + 1)$$
Substitute $y = x^x$ back into the expression:
$$\frac{dy}{dx} = x^x(\ln x + 1)$$

---

### Example 2: Simplifying a Multi-Factor Fraction Expression
Find $\frac{dy}{dx}$ for the function:
$$y = \frac{x \cdot \sqrt[3]{2x-7}}{(x^3 + 1)^4}$$

**Step 1: Take the natural logarithm of both sides and convert roots to fractional powers.**
$$\ln y = \ln\left[ \frac{x(2x-7)^{1/3}}{(x^3 + 1)^4} \right]$$

**Step 2: Fully expand using Quotient, Product, and Power Properties.**
$$\ln y = \ln x + \ln(2x-7)^{1/3} - \ln(x^3 + 1)^4$$
$$\ln y = \ln x + \frac{1}{3}\ln(2x-7) - 4\ln(x^3 + 1)$$

**Step 3: Differentiate both sides with respect to $x$, using the Chain Rule where necessary.**
$$\frac{1}{y}\frac{dy}{dx} = \frac{1}{x} + \frac{1}{3} \cdot \left(\frac{2}{2x-7}\right) - 4 \cdot \left(\frac{3x^2}{x^3 + 1}\right)$$
$$\frac{1}{y}\frac{dy}{dx} = \frac{1}{x} + \frac{2}{3(2x-7)}-\frac{12x^2}{x^3 + 1}$$

**Step 4 & 5: Multiply by $y$ and back-substitute the original expression.**
$$\frac{dy}{dx} = y \left( \frac{1}{x} + \frac{2}{3(2x-7)} - \frac{12x^2}{x^3 + 1} \right)$$
$$\frac{dy}{dx} = \frac{x \cdot \sqrt[3]{2x-7}}{(x^3 + 1)^4} \left( \frac{1}{x} + \frac{2}{3(2x-7)} - \frac{12x^2}{x^3 + 1} \right)$$

---

## Real-Life Engineering Application Problems

### Problem 1: [[Electrical Engineering (Signal Degradation & Attenuation)]]
[[Electrical Engineering (Signal Degradation & Attenuation) Solution]]

---

### Problem 2: [[Materials Engineering (Non-Linear Fractional Material Strain)]]
[[Materials Engineering (Non-Linear Fractional Material Strain) Solution]]
