Here is the step-by-step solution to find the open interval(s) where the function is simultaneously **increasing** and **concave up**.

$$f(x) = \frac{x^4}{4} + \frac{22x^3}{3} + \frac{153x^2}{2} + 324x + 3$$

### Step 1: Find Where the Function is Increasing ($f'(x) > 0$)

First, find the first derivative $f'(x)$ using the power rule:

$$f'(x) = x^3 + 22x^2 + 153x + 324$$

To find the critical points, set $f'(x) = 0$:

$$x^3 + 22x^2 + 153x + 324 = 0$$

By testing integer factors of $324$, we find that $x = -4$ is a root because:

$$(-4)^3 + 22(-4)^2 + 153(-4) + 324 = -64 + 352 - 612 + 324 = 0$$

Using polynomial division or synthetic division to factor out $(x + 4)$:

$$f'(x) = (x + 4)(x^2 + 18x + 81) = 0$$

Notice that $x^2 + 18x + 81$ is a perfect square:

$$f'(x) = (x + 4)(x + 9)^2 = 0$$

- **Critical Points:** $x = -4$ and $x = -9$.
    

#### Sign Analysis for $f'(x)$:

- For $x < -9$: $(x+4)$ is negative, $(x+9)^2$ is positive $\implies f'(x) < 0$ (Decreasing)
    
- For $-9 < x < -4$: $(x+4)$ is negative, $(x+9)^2$ is positive $\implies f'(x) < 0$ (Decreasing)
    
- For $x > -4$: $(x+4)$ is positive, $(x+9)^2$ is positive $\implies f'(x) > 0$ (**Increasing**)
    

So, $f(x)$ is increasing on the interval:

$$\text{Increasing Interval:} \quad (-4, \infty)$$

### Step 2: Find Where the Function is Concave Up ($f''(x) > 0$)

Next, find the second derivative $f''(x)$ by differentiating $f'(x)$:

$$f''(x) = 3x^2 + 44x + 153$$

Set $f''(x) = 0$ to find the possible inflection points:

$$3x^2 + 44x + 153 = 0$$

Factor the quadratic equation:

$$(3x + 17)(x + 9) = 0$$

- **Roots:** $x = -9$ and $x = -\frac{17}{3} \approx -5.67$.
    

#### Sign Analysis for $f''(x)$:

- For $x < -9$: Both factors are negative $\implies f''(x) > 0$ (**Concave Up**)
    
- For $-9 < x < -\frac{17}{3}$: $(3x+17)$ is negative, $(x+9)$ is positive $\implies f''(x) < 0$ (Concave Down)
    
- For $x > -\frac{17}{3}$: Both factors are positive $\implies f''(x) > 0$ (**Concave Up**)
    

So, $f(x)$ is concave up on the intervals:

$$\text{Concave Up Intervals:} \quad (-\infty, -9) \cup \left(-\frac{17}{3}, \infty\right)$$

### Step 3: Find the Overlap (Intersection) of Both Conditions

We need the regions where the function is **both** increasing ($x > -4$) AND concave up ($x < -9$ or $x > -5.67$).

Comparing the intervals:

- The region $x < -9$ has no overlap with $x > -4$.
    
- The region $x > -\frac{17}{3}$ completely covers and contains the interval $x > -4$.
    

Therefore, the restriction that keeps both conditions true simultaneously is simply $x > -4$.

### Final Answer

$$(-4, \infty)$$