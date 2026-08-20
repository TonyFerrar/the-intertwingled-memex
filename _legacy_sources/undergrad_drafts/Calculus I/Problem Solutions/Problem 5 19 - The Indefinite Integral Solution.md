# Full Solution and Verification

## Part 1: Complete Step-by-Step Integration Solution

### Problem
Evaluate the following indefinite integral without using $u$-substitution:
$$\int 3e^{3x} \, dx$$

### Step-by-Step Solution

Instead of using $u$-substitution, we can solve this by applying the **constant multiple rule** and the **shortcut exponential integration rule**.

#### 1. Factor out the constant
By the constant multiple rule for integration ($\int k \cdot f(x) \, dx = k \int f(x) \, dx$), we can bring the $3$ outside of the integral:
$$3 \int e^{3x} \, dx$$

#### 2. Apply the exponential integration rule
Recall the standard integration formula for exponential functions with a linear constant coefficient in the exponent:
$$\int e^{kx} \, dx = \frac{1}{k}e^{kx}$$

In this problem, $k = 3$. Applying this rule gives:
$$\int e^{3x} \, dx = \frac{1}{3}e^{3x}$$

#### 3. Multiply by the factored constant
Now multiply this result by the constant $3$ we pulled out in the first step:
$$3 \cdot \left( \frac{1}{3}e^{3x} \right) = e^{3x}$$

---

### Final Answer

Adding the constant of integration ($C$):

$$e^{3x} + C$$

---

## Part 2: Checking the Answer by Differentiating

To verify our result, we take the derivative of our final expression with respect to $x$:
$$\frac{d}{dx} \left( e^{3x} + C \right)$$

We differentiate each term:

1. **First term:** Using the chain rule for differentiation ($\frac{d}{dx}(e^{g(x)}) = e^{g(x)} \cdot g'(x)$):
   $$\frac{d}{dx}\left(e^{3x}\right) = e^{3x} \cdot \frac{d}{dx}(3x) = e^{3x} \cdot 3 = 3e^{3x}$$

2. **Constant term:** $$\frac{d}{dx}(C) = 0$$

Combining these results gives back our original integrand function:
$$3e^{3x}$$

The solution is officially verified!