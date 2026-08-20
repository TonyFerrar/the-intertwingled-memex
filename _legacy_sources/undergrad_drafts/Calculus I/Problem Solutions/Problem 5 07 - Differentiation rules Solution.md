## Solution for Problem 5

**Problem:** Suppose there exists a function, $f(x)$, such that $f(1) = 5$ and $f'(1) = 4$. Let $h(x) = \frac{f(x)}{x + 1}$. Find the equation of the tangent line to $h(x)$ at $x = 1$.

To construct the equation of the tangent line to $h(x)$, we need to calculate the point of tangency $(1, h(1))$ and the slope of the line, which is given by $h'(1)$.

### Step 1: Find the Point of Tangency $(x_1, y_1)$
We are given $x_1 = 1$. To evaluate the corresponding $y$-value ($y_1 = h(1)$), substitute $x = 1$ into our expression for $h(x)$:

$$h(1) = \frac{f(1)}{1 + 1}$$

Using the given information that $f(1) = 5$:
$$h(1) = \frac{5}{2}$$

Thus, the point of tangency is:
$$\left(1, \frac{5}{2}\right)$$

---

### Step 2: Find the Slope of the Tangent Line ($m$)
The slope is given by the derivative evaluated at our point, $h'(1)$. 

To find the general derivative $h'(x)$, apply the **Quotient Rule** $\left( \frac{d}{dx}\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^2} \right)$ to $h(x) = \frac{f(x)}{x + 1}$:
* Let $u = f(x) \implies u' = f'(x)$
* Let $v = x + 1 \implies v' = 1$

$$h'(x) = \frac{f'(x)(x + 1) - f(x)(1)}{(x + 1)^2}$$

Now, substitute $x = 1$ into the derivative formula to calculate the slope:
$$h'(1) = \frac{f'(1)(1 + 1) - f(1)}{(1 + 1)^2}$$

$$h'(1) = \frac{f'(1)(2) - f(1)}{4}$$

Substitute the known values $f(1) = 5$ and $f'(1) = 4$:
$$h'(1) = \frac{(4)(2) - 5}{4} = \frac{8 - 5}{4} = \frac{3}{4}$$

Thus, our slope is $m = \frac{3}{4}$.

---

### Step 3: Find the Equation of the Tangent Line
Using the point-slope form equation $y - y_1 = m(x - x_1)$:

$$y - \frac{5}{2} = \frac{3}{4}(x - 1)$$

Distribute the slope on the right side:
$$y - \frac{5}{2} = \frac{3}{4}x - \frac{3}{4}$$

Add $\frac{5}{2}$ (or $\frac{10}{4}$) to both sides to convert it to slope-intercept form ($y = mx + b$):
$$y = \frac{3}{4}x - \frac{3}{4} + \frac{10}{4}$$

$$y = \frac{3}{4}x + \frac{7}{4}$$