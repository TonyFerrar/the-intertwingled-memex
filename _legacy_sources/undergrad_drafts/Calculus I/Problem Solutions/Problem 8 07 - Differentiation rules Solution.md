## Solution for Problem 8

This problem uses values from the provided data table to evaluate derivatives at specific points.

### Reference Table
| $x$ | 2 | 3 | 4 | 5 |
| :--- | :---: | :---: | :---: | :---: |
| $f(x)$ | 4 | 3 | 2 | 3 |
| $g(x)$ | 7 | 3 | -1 | 2 |
| $f^{\prime}(x)$ | 5 | 7 | -1 | -2 |
| $g^{\prime}(x)$ | 3 | -2 | 1 | 8 |

---

### Part (a)
**Problem:** Evaluate $\frac{d}{dx}[-2f(x)] \Big|_{x=5}$

1. **Apply the Constant Multiple Rule:**
   $$\frac{d}{dx}[-2f(x)] = -2f^{\prime}(x)$$
2. **Evaluate at $x = 5$:**
   $$-2f^{\prime}(5)$$
3. **Substitute the value from the table** ($f^{\prime}(5) = -2$):
   $$-2(-2) = 4$$

**Answer (a):** $4$

---

### Part (b)
**Problem:** Evaluate $\frac{d}{dx}[x^2 f(x)] \Big|_{x=3}$

1. **Apply the Product Rule** ($\frac{d}{dx}[uv] = u'v + uv'$):
   * Let $u = x^2 \implies u' = 2x$
   * Let $v = f(x) \implies v' = f^{\prime}(x)$
   $$\frac{d}{dx}[x^2 f(x)] = 2x f(x) + x^2 f^{\prime}(x)$$
2. **Evaluate at $x = 3$:**
   $$2(3)f(3) + (3)^2 f^{\prime}(3) = 6f(3) + 9f^{\prime}(3)$$
3. **Substitute the values from the table** ($f(3) = 3$ and $f^{\prime}(3) = 7$):
   $$6(3) + 9(7) = 18 + 63 = 81$$

**Answer (b):** $81$

---

### Part (c)
**Problem:** Find the equation of the tangent line to $y = \frac{g(x)}{f(x)}$ at $x = 4$.

#### 1. Find the Point of Tangency $(4, y(4))$
Substitute $x = 4$ into the original rational function:
$$y(4) = \frac{g(4)}{f(4)}$$
From the table, $g(4) = -1$ and $f(4) = 2$:
$$y(4) = -\frac{1}{2}$$
So, our coordinate point is $\left(4, -\frac{1}{2}\right)$.

#### 2. Find the Slope ($m$) using the Quotient Rule
Differentiate $y = \frac{g(x)}{f(x)}$ using the Quotient Rule:
$$y^{\prime}(x) = \frac{g^{\prime}(x)f(x) - g(x)f^{\prime}(x)}{[f(x)]^2}$$
Evaluate the derivative at $x = 4$:
$$y^{\prime}(4) = \frac{g^{\prime}(4)f(4) - g(4)f^{\prime}(4)}{[f(4)]^2}$$
Substitute the values from the table ($g^{\prime}(4) = 1$, $f(4) = 2$, $g(4) = -1$, $f^{\prime}(4) = -1$):
$$y^{\prime}(4) = \frac{(1)(2) - (-1)(-1)}{(2)^2}$$
$$y^{\prime}(4) = \frac{2 - 1}{4} = \frac{1}{4}$$
Thus, the slope is $m = \frac{1}{4}$.

#### 3. Write the Tangent Line Equation
Using point-slope form ($y - y_1 = m(x - x_1)$):
$$y - \left(-\frac{1}{2}\right) = \frac{1}{4}(x - 4)$$
$$y + \frac{1}{2} = \frac{1}{4}x - 1$$
Subtract $\frac{1}{2}$ from both sides to finish in slope-intercept form:
$$y = \frac{1}{4}x - \frac{3}{2}$$

**Answer (c):** $y = \frac{1}{4}x - \frac{3}{2}$