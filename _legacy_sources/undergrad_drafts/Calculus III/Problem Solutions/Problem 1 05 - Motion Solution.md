Here is the step-by-step solution to the problem presented in the image.

### Problem Statement

Determine the domain of the vector-valued function:

$$\vec{r}(t) = \left\langle \sqrt{t+2}, \frac{-9}{t+3}, \frac{-7}{\sqrt{t-5}} \right\rangle$$

### Step-by-Step Solution

To find the domain of a vector-valued function, we must find the intersection of the domains of its individual component functions ($x(t)$, $y(t)$, and $z(t)$).

#### 1. Analyze the $x$-component: $x(t) = \sqrt{t+2}$

- The term inside a square root must be greater than or equal to zero.
    
- Set up the inequality:
    
    $$t + 2 \ge 0 \implies t \ge -2$$
    
- **Domain of $x(t)$**: $[-2, \infty)$
    

#### 2. Analyze the $y$-component: $y(t) = \frac{-9}{t+3}$

- The denominator cannot equal zero.
    
- Set up the equation:
    
    $$t + 3 \neq 0 \implies t \neq -3$$
    
- **Domain of $y(t)$**: $(-\infty, -3) \cup (-3, \infty)$
    

#### 3. Analyze the $z$-component: $z(t) = \frac{-7}{\sqrt{t-5}}$

- The term inside the square root must be non-negative ($t - 5 \ge 0$).
    
- Additionally, because the square root is in the denominator, it cannot be equal to zero ($t - 5 \neq 0$).
    
- Combining these restrictions yields:
    
    $$t - 5 > 0 \implies t > 5$$
    
- **Domain of $z(t)$**: $(5, \infty)$
    

### Finding the Intersection

Now, we intersect the three individual domains to find where all components are simultaneously defined:

1. $t \ge -2$
    
2. $t \neq -3$
    
3. $t > 5$
    

Since any value of $t$ that is strictly greater than $5$ automatically satisfies $t \ge -2$ and $t \neq -3$, the restriction $t > 5$ dictates the overall domain.

### Final Answer

- **Inequality Notation:** $t > 5$
    
- **Interval Notation:** $(5, \infty)$
    

### Desmos Plotting Tip

To plot this 3D vector-valued function in Desmos (specifically using the Desmos 3D Grapher), you can input the curve using the parameter $t$ exactly as written:

Plaintext

```
r(t) = (sqrt(t+2), -9/(t+3), -7/sqrt(t-5))
```

Be sure to set the parameter bounds for $t$ starting from just above $5$ (e.g., `5 < t < 15`) to see the curve render correctly!