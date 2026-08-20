# Learning Activity #5 Solutions
## Rates of Change as Limits: Limit Definition of Derivative

---

### 5. Using limits, find an equation of the line tangent to the function $f(x) = 5x - 3x^2$ at $x = 2$.

To determine the equation of the tangent line, we need to calculate the coordinates for the point of tangency and find the slope of the function at that specific point.

#### Step 1: Find the point of tangency
Evaluate $f(x)$ at $x = 2$ to obtain the corresponding $y$-value:
$$f(2) = 5(2) - 3(2)^2$$
$$f(2) = 10 - 3(4) = 10 - 12 = -2$$

The point of tangency is **$(2, -2)$**.

#### Step 2: Set up the limit for the slope ($m$)
Using the limit definition of the derivative at a specific point $x = a$:
$$m = f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

Substitute $a = 2$ and $f(2) = -2$ into the expression:
$$m = \lim_{h \to 0} \frac{\left[5(2+h) - 3(2+h)^2\right] - (-2)}{h}$$

#### Step 3: Expand and simplify the numerator
First, expand the squared term $(2+h)^2 = 4 + 4h + h^2$ and distribute the constants:
$$\text{Numerator} = 5(2+h) - 3(4 + 4h + h^2) + 2$$
$$\text{Numerator} = 10 + 5h - 12 - 12h - 3h^2 + 2$$

Combine like numerical and variable terms together:
$$\text{Numerator} = (10 - 12 + 2) + (5h - 12h) - 3h^2$$
$$\text{Numerator} = -7h - 3h^2$$

#### Step 4: Substitute back into the limit and cancel $h$
Put the simplified numerator back into the limit fraction:
$$m = \lim_{h \to 0} \frac{-7h - 3h^2}{h}$$

Factor out $h$ from the numerator to cancel it out with the denominator:
$$m = \lim_{h \to 0} \frac{h(-7 - 3h)}{h}$$
$$m = \lim_{h \to 0} (-7 - 3h)$$

#### Step 5: Evaluate the limit
Apply direct substitution by setting $h = 0$:
$$m = -7 - 3(0) = -7$$

The slope of the tangent line is **$m = -7$**.

#### Step 6: Formulate the tangent line equation
Use the point-slope formula $y - y_1 = m(x - x_1)$ with the point $(2, -2)$ and slope $m = -7$:
$$y - (-2) = -7(x - 2)$$
$$y + 2 = -7x + 14$$

Convert to slope-intercept form by isolating $y$:
$$y = -7x + 12$$