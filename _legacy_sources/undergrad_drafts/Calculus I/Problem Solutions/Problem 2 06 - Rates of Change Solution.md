# Learning Activity #5 Solutions
## Rates of Change as Limits: Limit Definition of Derivative

---

### 2. Use the limit definition of the derivative to find the derivative of $f(x) = x^3 - 9x$.

The limit definition of the derivative is:
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

#### Step 1: Expand $f(x+h)$
Substitute $(x+h)$ into the function everywhere there is an $x$:
$$f(x+h) = (x+h)^3 - 9(x+h)$$

Using the binomial expansion for $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$, we get:
$$f(x+h) = x^3 + 3x^2h + 3xh^2 + h^3 - 9x - 9h$$

#### Step 2: Set up the difference quotient
Substitute $f(x+h)$ and $f(x)$ into the numerator:
$$f'(x) = \lim_{h \to 0} \frac{(x^3 + 3x^2h + 3xh^2 + h^3 - 9x - 9h) - (x^3 - 9x)}{h}$$

#### Step 3: Simplify the numerator
Distribute the negative sign and cancel out the opposing terms ($x^3$ and $-9x$):
$$f'(x) = \lim_{h \to 0} \frac{x^3 + 3x^2h + 3xh^2 + h^3 - 9x - 9h - x^3 + 9x}{h}$$
$$f'(x) = \lim_{h \to 0} \frac{3x^2h + 3xh^2 + h^3 - 9h}{h}$$

#### Step 4: Factor out and cancel $h$
Factor $h$ out of every term in the numerator to eliminate the indeterminate form:
$$f'(x) = \lim_{h \to 0} \frac{h(3x^2 + 3xh + h^2 - 9)}{h}$$
$$f'(x) = \lim_{h \to 0} (3x^2 + 3xh + h^2 - 9)$$

#### Step 5: Evaluate the limit by direct substitution
Set $h = 0$ to find the final derivative:
$$f'(x) = 3x^2 + 3x(0) + (0)^2 - 9$$
$$f'(x) = 3x^2 - 9$$