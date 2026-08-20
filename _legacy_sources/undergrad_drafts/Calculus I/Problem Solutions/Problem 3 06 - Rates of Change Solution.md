# Learning Activity #5 Solutions
## Rates of Change as Limits: Limit Definition of Derivative

---

### 3. Using limits, find an equation of the line tangent to the function $g(x) = \frac{4}{x^2}$ at $x = -2$.

To find the equation of a tangent line, we need two components: a point of tangency and the slope of the curve at that point.

#### Step 1: Find the point of tangency
Evaluate the function at $x = -2$ to find the corresponding $y$-value:
$$g(-2) = \frac{4}{(-2)^2} = \frac{4}{4} = 1$$

So, the point of tangency is **$(-2, 1)$**.

#### Step 2: Set up the limit for the slope ($m$)
Using the limit definition of the derivative at a specific point $x = a$:
$$m = g'(a) = \lim_{h \to 0} \frac{g(a+h) - g(a)}{h}$$

Substitute $a = -2$ and $g(-2) = 1$ into the formula:
$$m = \lim_{h \to 0} \frac{\frac{4}{(-2+h)^2} - 1}{h}$$

#### Step 3: Find a common denominator in the numerator
Combine the terms in the numerator over a single denominator, $(-2+h)^2$:
$$m = \lim_{h \to 0} \frac{\frac{4 - (-2+h)^2}{(-2+h)^2}}{h}$$

Multiply by the reciprocal of $h$ to clear the complex fraction:
$$m = \lim_{h \to 0} \frac{4 - (-2+h)^2}{h(-2+h)^2}$$

#### Step 4: Expand and simplify the numerator
Expand the squared term $(-2+h)^2 = 4 - 4h + h^2$:
$$m = \lim_{h \to 0} \frac{4 - (4 - 4h + h^2)}{h(-2+h)^2}$$

Distribute the negative sign and cancel out the constants:
$$m = \lim_{h \to 0} \frac{4 - 4 + 4h - h^2}{h(-2+h)^2}$$
$$m = \lim_{h \to 0} \frac{4h - h^2}{h(-2+h)^2}$$

#### Step 5: Factor out and cancel $h$
Factor out $h$ from the numerator to remove the $0$ in the denominator:
$$m = \lim_{h \to 0} \frac{h(4 - h)}{h(-2+h)^2}$$
$$m = \lim_{h \to 0} \frac{4 - h}{(-2+h)^2}$$

#### Step 6: Evaluate the limit
Substitute $h = 0$ into the simplified expression:
$$m = \frac{4 - 0}{(-2+0)^2} = \frac{4}{4} = 1$$

The slope of the tangent line is **$m = 1$**.

#### Step 7: Write the equation of the tangent line
Using the point-slope form $y - y_1 = m(x - x_1)$ with the point $(-2, 1)$ and slope $m = 1$:
$$y - 1 = 1(x - (-2))$$
$$y - 1 = x + 2$$
$$y = x + 3$$