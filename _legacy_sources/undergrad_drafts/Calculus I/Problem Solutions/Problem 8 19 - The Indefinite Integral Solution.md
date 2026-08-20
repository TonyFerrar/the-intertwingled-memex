# Problem 8 Solution

## Part 1: Complete Step-by-Step Solution

### Problem
Solve the following second-order initial value problem:
$$f^{\prime\prime}(x) = -\frac{1}{x^2}; \quad f^{\prime}(-1) = 3, \quad f(-1) = 5$$

### Step-by-Step Solution

#### Step 1: Find the first derivative $f^{\prime}(x)$
To find $f^{\prime}(x)$, we integrate the second derivative $f^{\prime\prime}(x)$. First, rewrite the function using a negative exponent:
$$f^{\prime\prime}(x) = -x^{-2}$$

Now, take the indefinite integral:
$$f^{\prime}(x) = \int -x^{-2} \, dx$$

Apply the power rule for integration ($\int x^n \, dx = \frac{x^{n+1}}{n+1}$):
$$f^{\prime}(x) = -\frac{x^{-2+1}}{-2+1} = -\frac{x^{-1}}{-1} = x^{-1} = \frac{1}{x} + C_1$$

#### Step 2: Use the first initial condition to solve for $C_1$
We are given that $f^{\prime}(-1) = 3$. Substitute $x = -1$ into our expression for $f^{\prime}(x)$:
$$f^{\prime}(-1) = \frac{1}{-1} + C_1 = 3$$
$$-1 + C_1 = 3$$
$$C_1 = 4$$

So, the specific first derivative function is:
$$f^{\prime}(x) = \frac{1}{x} + 4$$

#### Step 3: Find the original function $f(x)$
To find $f(x)$, we integrate $f^{\prime}(x)$:
$$f(x) = \int \left(\frac{1}{x} + 4\right) \, dx$$

Integrate each term individually:
* $\int \frac{1}{x} \, dx = \ln|x|$
* $\int 4 \, dx = 4x$

Combining these and adding a new constant of integration ($C_2$) gives the general expression for $f(x)$:
$$f(x) = \ln|x| + 4x + C_2$$

#### Step 4: Use the second initial condition to solve for $C_2$
We are given that $f(-1) = 5$. Substitute $x = -1$ into our expression for $f(x)$:
$$f(-1) = \ln|-1| + 4(-1) + C_2 = 5$$

Since $\ln(1) = 0$:
$$0 - 4 + C_2 = 5$$
$$C_2 = 9$$

---

### Final Answer

Substitute $C_2 = 9$ back into the general solution equation to obtain the specific function:

$$f(x) = \ln|x| + 4x + 9$$

---

## Part 2: Checking the Answer by Differentiating

To verify our result, we differentiate back to the second derivative and check both initial conditions.

1. **Verify the first derivative and $f^{\prime}(-1)$:**
   $$f^{\prime}(x) = \frac{d}{dx} \left( \ln|x| + 4x + 9 \right) = \frac{1}{x} + 4$$
   Evaluating at $x = -1$:
   $$f^{\prime}(-1) = \frac{1}{-1} + 4 = 3$$
   *(Matches $f^{\prime}(-1) = 3$ perfectly!)*

2. **Verify the second derivative $f^{\prime\prime}(x)$:**
   $$f^{\prime\prime}(x) = \frac{d}{dx} \left( x^{-1} + 4 \right) = -1x^{-2} = -\frac{1}{x^2}$$
   *(Matches $f^{\prime\prime}(x) = -\frac{1}{x^2}$ perfectly!)*

3. **Verify the initial value $f(-1)$:**
   $$f(-1) = \ln|-1| + 4(-1) + 9 = 0 - 4 + 9 = 5$$
   *(Matches $f(-1) = 5$ perfectly!)*

The solution is officially verified!