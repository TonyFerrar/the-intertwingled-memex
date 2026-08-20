# Problem Solutions

**Problem:** Find the derivatives of the following functions. Simplify as much as possible by combining like terms and canceling common factors.

---

### Part (a) $y=2^{\sec(5x)}$

#### Step 1: Identify the relevant rules
* Derivative of an exponential function base $a$: $\frac{d}{dx}[a^u] = a^u \ln(a) \cdot u'$
* Derivative of secant: $\frac{d}{dx}[\sec(u)] = \sec(u)\tan(u) \cdot u'$

#### Step 2: Differentiate using the Chain Rule
Let the exponent be the inner function. Differentiating from the outside inward:
$$y' = 2^{\sec(5x)} \cdot \ln(2) \cdot \frac{d}{dx}[\sec(5x)]$$

Now, differentiate the secant layer, keeping its inner function $5x$:
$$y' = 2^{\sec(5x)} \cdot \ln(2) \cdot \sec(5x)\tan(5x) \cdot \frac{d}{dx}[5x]$$

Differentiate the linear terms:
$$y' = 2^{\sec(5x)} \cdot \ln(2) \cdot \sec(5x)\tan(5x) \cdot 5$$

#### Final Answer for (a):
$$y' = 5\ln(2) \cdot 2^{\sec(5x)}\sec(5x)\tan(5x)$$

---

### Part (b) $f(x)=\log_{3}(x^{2}e^{x})$

#### Step 1: Simplify using logarithm properties first
Before taking the derivative, expand the logarithm to make the calculus much easier:
$$f(x) = \log_{3}(x^2) + \log_{3}(e^x)$$
$$f(x) = 2\log_{3}(x) + x\log_{3}(e)$$

#### Step 2: Identify the derivative rule
* $\frac{d}{dx}[\log_a(x)] = \frac{1}{x\ln(a)}$

#### Step 3: Differentiate each term
$$f'(x) = 2 \cdot \frac{1}{x\ln(3)} + 1 \cdot \log_{3}(e)$$

Using the change of base formula, we can rewrite $\log_{3}(e)$ as $\frac{1}{\ln(3)}$:
$$f'(x) = \frac{2}{x\ln(3)} + \frac{1}{\ln(3)}$$

#### Step 4: Find a common denominator to simplify
$$f'(x) = \frac{2 + x}{x\ln(3)}$$

#### Final Answer for (b):
$$f'(x) = \frac{x+2}{x\ln(3)}$$

---

### Part (c) $f(x)=\sqrt{x^{2}+1}\csc^{-1}x$

#### Step 1: Apply the Product Rule
The function is a product of $u = (x^2+1)^{\frac{1}{2}}$ and $v = \csc^{-1}x$.
Recall the Product Rule: $f'(x) = u'v + uv'$

#### Step 2: Find the individual derivatives
* $u' = \frac{1}{2}(x^2+1)^{-\frac{1}{2}} \cdot (2x) = \frac{x}{\sqrt{x^2+1}}$
* $v' = -\frac{1}{|x|\sqrt{x^2-1}}$

#### Step 3: Combine using the Product Rule
$$f'(x) = \left(\frac{x}{\sqrt{x^2+1}}\right)\csc^{-1}x + \left(\sqrt{x^2+1}\right)\left(-\frac{1}{|x|\sqrt{x^2-1}}\right)$$

#### Final Answer for (c):
$$f'(x) = \frac{x\csc^{-1}x}{\sqrt{x^2+1}} - \frac{\sqrt{x^2+1}}{|x|\sqrt{x^2-1}}$$

---

### Part (d) $h(x)=\ln\left(\frac{x^{2}-x}{x^{2}+2x}\right)$

#### Step 1: Simplify the argument and use log properties
First, factor out $x$ in the numerator and denominator to simplify the fraction:
$$\frac{x^2-x}{x^2+2x} = \frac{x(x-1)}{x(x+2)} = \frac{x-1}{x+2} \quad (\text{for } x \neq 0)$$

Rewrite the function:
$$h(x) = \ln\left(\frac{x-1}{x+2}\right)$$

Now expand the expression using log laws:
$$h(x) = \ln(x-1) - \ln(x+2)$$

#### Step 2: Differentiate term by term
Apply the natural log rule $\frac{d}{dx}[\ln(u)] = \frac{u'}{u}$:
$$h'(x) = \frac{1}{x-1} - \frac{1}{x+2}$$

#### Step 3: Find a common denominator and simplify
$$h'(x) = \frac{(x+2) - (x-1)}{(x-1)(x+2)}$$
$$h'(x) = \frac{x + 2 - x + 1}{(x-1)(x+2)}$$

#### Final Answer for (d):
$$h'(x) = \frac{3}{(x-1)(x+2)}$$