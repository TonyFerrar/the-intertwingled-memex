# Full Solution and Verification

## Part 1: Complete Step-by-Step Integration Solution

### Problem
Evaluate the following indefinite integral:
$$\int (5^x + 2\sqrt{x}) \, dx$$

### Step-by-Step Solution

We apply the **sum rule for integration**, which allows us to split the integral into two separate parts:
$$\int 5^x \, dx + \int 2\sqrt{x} \, dx$$

#### 1. Integrate the first term: $\int 5^x \, dx$
Using the exponential integration formula $\int a^x \, dx = \frac{a^x}{\ln(a)}$, where $a = 5$:
$$\int 5^x \, dx = \frac{5^x}{\ln(5)}$$

#### 2. Integrate the second term: $\int 2\sqrt{x} \, dx$
First, rewrite the radical term using a fractional exponent ($\sqrt{x} = x^{1/2}$):
$$\int 2x^{1/2} \, dx$$

Next, apply the **power rule for integration** ($\int x^n \, dx = \frac{x^{n+1}}{n+1}$):
$$2 \cdot \frac{x^{(1/2) + 1}}{(1/2) + 1} = 2 \cdot \frac{x^{3/2}}{3/2}$$

Simplify the fraction by multiplying by the reciprocal of the denominator:
$$2 \cdot \frac{2}{3}x^{3/2} = \frac{4}{3}x^{3/2}$$

---

### Final Answer

Combining the two antiderivatives and adding the constant of integration ($C$):

$$\frac{5^x}{\ln(5)} + \frac{4}{3}x^{3/2} + C$$

---

## Part 2: Checking the Answer by Differentiating

To verify that our integration is correct, we take the derivative of our result with respect to $x$. If the result matches the original integrand ($5^x + 2\sqrt{x}$), the solution is correct.

We want to find:
$$\frac{d}{dx} \left( \frac{5^x}{\ln(5)} + \frac{4}{3}x^{3/2} + C \right)$$

By the sum rule for differentiation, we can take the derivative of each term individually:

1. **Derivative of the first term:**
   $$\frac{d}{dx} \left( \frac{5^x}{\ln(5)} \right) = \frac{1}{\ln(5)} \cdot \frac{d}{dx}(5^x)$$
   Using the exponential derivative rule $\frac{d}{dx}(a^x) = a^x \ln(a)$:
   $$\frac{1}{\ln(5)} \cdot \left( 5^x \ln(5) \right) = 5^x$$

2. **Derivative of the second term:**
   $$\frac{d}{dx} \left( \frac{4}{3}x^{3/2} \right) = \frac{4}{3} \cdot \frac{d}{dx}(x^{3/2})$$
   Using the power rule $\frac{d}{dx}(x^n) = n x^{n-1}$:
   $$\frac{4}{3} \cdot \left( \frac{3}{2}x^{1/2} \right) = \left(\frac{4}{3} \cdot \frac{3}{2}\right)x^{1/2} = 2x^{1/2} = 2\sqrt{x}$$

3. **Derivative of the constant:**
   $$\frac{d}{dx}(C) = 0$$

Combining these yields the original integrand:
$$5^x + 2\sqrt{x}$$

The solution is officially verified!