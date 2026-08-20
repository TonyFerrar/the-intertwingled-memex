## Solution for Problem 4

**Problem:** Find an equation of the line tangent to the function $g(x) = 2x \sin x$ at $x = \frac{3\pi}{2}$.

To find the equation of a tangent line, we need two components: a point $(x_1, y_1)$ and a slope $m$.

### Step 1: Find the Point of Tangency $(x_1, y_1)$
We are given $x_1 = \frac{3\pi}{2}$. To find the corresponding $y$-value ($y_1$), substitute $x_1$ into the original function $g(x)$:

$$g\left(\frac{3\pi}{2}\right) = 2\left(\frac{3\pi}{2}\right) \sin\left(\frac{3\pi}{2}\right)$$

Recall from the unit circle that $\sin\left(\frac{3\pi}{2}\right) = -1$:

$$g\left(\frac{3\pi}{2}\right) = (3\pi)(-1) = -3\pi$$

So, our point of tangency is:
$$\left(\frac{3\pi}{2}, -3\pi\right)$$

---

### Step 2: Find the Slope of the Tangent Line ($m$)
The slope of the tangent line is the value of the derivative at our given point, $g'\left(\frac{3\pi}{2}\right)$. 

To find $g'(x)$, apply the **Product Rule** ($\frac{d}{dx}[uv] = u'v + uv'$) to $g(x) = (2x)(\sin x)$:
* Let $u = 2x \implies u' = 2$
* Let $v = \sin x \implies v' = \cos x$

$$g'(x) = 2\sin x + 2x\cos x$$

Now, evaluate the derivative at $x = \frac{3\pi}{2}$. Recall that $\cos\left(\frac{3\pi}{2}\right) = 0$:

$$g'\left(\frac{3\pi}{2}\right) = 2\sin\left(\frac{3\pi}{2}\right) + 2\left(\frac{3\pi}{2}\right)\cos\left(\frac{3\pi}{2}\right)$$

$$g'\left(\frac{3\pi}{2}\right) = 2(-1) + (3\pi)(0) = -2$$

Thus, the slope is $m = -2$.

---

### Step 3: Write the Equation of the Tangent Line
Use the point-slope form equation: $y - y_1 = m(x - x_1)$

$$y - (-3\pi) = -2\left(x - \frac{3\pi}{2}\right)$$

Simplify the equation:
$$y + 3\pi = -2x + 3\pi$$

Subtract $3\pi$ from both sides to convert it to slope-intercept form ($y = mx + b$):
$$y = -2x$$