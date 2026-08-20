# Full Solution and Verification

## Part 1: Complete Step-by-Step Integration Solution

### Problem
Evaluate the following indefinite integral:
$$\int \left(x + \frac{4}{x} - \frac{2}{x^3} + \frac{5}{\sqrt[3]{x}}\right) \, dx$$

### Step-by-Step Solution

First, use algebra to rewrite the rational and radical terms using exponents so we can easily apply the integration rules.
* $\frac{4}{x} = 4 \cdot x^{-1}$
* $-\frac{2}{x^3} = -2 \cdot x^{-3}$
* $\frac{5}{\sqrt[3]{x}} = \frac{5}{x^{1/3}} = 5 \cdot x^{-1/3}$

Now rewrite the integral expression:
$$\int \left(x + 4x^{-1} - 2x^{-3} + 5x^{-1/3}\right) \, dx$$

By the **sum and difference rules for integration**, we can integrate each term individually:

#### 1. Integrate the first term: $\int x \, dx$
Using the power rule ($\int x^n \, dx = \frac{x^{n+1}}{n+1}$):
$$\int x^1 \, dx = \frac{x^{1+1}}{1+1} = \frac{1}{2}x^2$$

#### 2. Integrate the second term: $\int 4x^{-1} \, dx$
Recall that the power rule does not work for $n = -1$. Instead, we use the special logarithmic rule $\int \frac{1}{x} \, dx = \ln|x|$:
$$\int 4x^{-1} \, dx = 4\ln|x|$$

#### 3. Integrate the third term: $\int -2x^{-3} \, dx$
Using the power rule:
$$-2 \cdot \frac{x^{-3+1}}{-3+1} = -2 \cdot \frac{x^{-2}}{-2} = x^{-2} = \frac{1}{x^2}$$

#### 4. Integrate the fourth term: $\int 5x^{-1/3} \, dx$
Using the power rule:
$$5 \cdot \frac{x^{-1/3 + 1}}{-1/3 + 1} = 5 \cdot \frac{x^{2/3}}{2/3}$$
Multiply by the reciprocal of the denominator:
$$5 \cdot \frac{3}{2}x^{2/3} = \frac{15}{2}x^{2/3}$$

---

### Final Answer

Combining all the individual antiderivatives together and adding the constant of integration ($C$):

$$\frac{1}{2}x^2 + 4\ln|x| + \frac{1}{x^2} + \frac{15}{2}x^{2/3} + C$$

---

## Part 2: Checking the Answer by Differentiating

To verify our result, we compute the derivative with respect to $x$:
$$\frac{d}{dx} \left( \frac{1}{2}x^2 + 4\ln|x| + x^{-2} + \frac{15}{2}x^{2/3} + C \right)$$

We differentiate each term one by one:

1. **First term:** $\frac{d}{dx}\left(\frac{1}{2}x^2\right) = \frac{1}{2}(2x) = x$
2. **Second term:** $\frac{d}{dx}(4\ln|x|) = 4 \cdot \frac{1}{x} = \frac{4}{x}$
3. **Third term:** $\frac{d}{dx}(x^{-2}) = -2x^{-3} = -\frac{2}{x^3}$
4. **Fourth term:** $\frac{d}{dx}\left(\frac{15}{2}x^{2/3}\right) = \frac{15}{2} \cdot \left(\frac{2}{3}x^{-1/3}\right) = 5x^{-1/3} = \frac{5}{\sqrt[3]{x}}$
5. **Constant term:** $\frac{d}{dx}(C) = 0$

Combining the derivatives gives back the original function:
$$x + \frac{4}{x} - \frac{2}{x^3} + \frac{5}{\sqrt[3]{x}}$$

The solution is officially verified!