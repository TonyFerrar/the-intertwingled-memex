# Problem Solution

**Problem:** Suppose $f(3)=2$ and $f^{\prime}(3)=8$. Let $g(x)=x^{2}f(3x)$. Find the equation of the line tangent to $g(x)$ at $x=1$.

---

### Step 1: Find the point of tangency $(x_1, y_1)$
We are given $x_1 = 1$. To find the corresponding $y$-value ($y_1$), substitute $x = 1$ into the function $g(x)$:
$$g(1) = (1)^2 \cdot f(3 \cdot 1)$$
$$g(1) = 1 \cdot f(3)$$

Using the given value $f(3) = 2$:
$$g(1) = 2$$

So, the point of tangency is **$(1, 2)$**.

### Step 2: Find the derivative $g'(x)$ using Product and Chain Rules
The function $g(x) = x^2 \cdot f(3x)$ is a product of two functions: $x^2$ and $f(3x)$. 

Using the **Product Rule** $\frac{d}{dx}[u \cdot v] = u'v + uv'$:
* Let $u = x^2 \implies u' = 2x$
* Let $v = f(3x) \implies v' = f'(3x) \cdot 3$ *(by the Chain Rule)*

Now, assemble the derivative:
$$g'(x) = (2x) \cdot f(3x) + x^2 \cdot (3f'(3x))$$
$$g'(x) = 2xf(3x) + 3x^2f'(3x)$$

### Step 3: Find the slope of the tangent line ($m$)
The slope of the tangent line at $x = 1$ is equal to $g'(1)$. Substitute $x = 1$ into our derivative formula:
$$g'(1) = 2(1)f(3(1)) + 3(1)^2f'(3(1))$$
$$g'(1) = 2f(3) + 3f'(3)$$

Substitute the given values $f(3) = 2$ and $f'(3) = 8$:
$$g'(1) = 2(2) + 3(8)$$
$$g'(1) = 4 + 24 = 28$$

So, the slope **$m = 28$**.

### Step 4: Write the equation of the tangent line
Using the point-slope form $y - y_1 = m(x - x_1)$ with point $(1, 2)$ and slope $m = 28$:
$$y - 2 = 28(x - 1)$$

Convert to slope-intercept form ($y = mx + b$):
$$y - 2 = 28x - 28$$
$$y = 28x - 26$$

### Final Answer
The equation of the tangent line is:
$$y = 28x - 26$$