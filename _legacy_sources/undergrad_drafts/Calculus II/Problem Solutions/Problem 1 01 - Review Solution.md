## Solution for Question 1

Here is the step-by-step breakdown for solving each part of the calculus problem based on the function:

$$f(x) = x^2 - 4x + 4$$

### (a) Find $f'(x)$

**Concept:** The first derivative represents the instantaneous rate of change or the slope of the function at any given point. To find it, we use the **Power Rule** ($\frac{d}{dx}[x^n] = n x^{n-1}$) and the **Constant Rule** ($\frac{d}{dx}[c] = 0$).

1. Differentiate each term of the function individually:
    
    - The derivative of $x^2$ is $2x$.
        
    - The derivative of $-4x$ is $-4$.
        
    - The derivative of the constant $4$ is $0$.
        
2. Combine the terms to get your derivative function:
    
    $$f'(x) = 2x - 4$$
    

### (b) Find an equation of the line tangent to the graph of $f(x)$ at $x = -1$

**Concept:** To write the equation of a straight line, you need a **point** $(x_1, y_1)$ and a **slope** ($m$). Once you have both, you plug them into the point-slope formula: $y - y_1 = m(x - x_1)$.

1. **Find the y-coordinate (the point):** Evaluate the original function $f(x)$ at $x = -1$.
    
    $$f(-1) = (-1)^2 - 4(-1) + 4$$
    
    $$f(-1) = 1 + 4 + 4 = 9$$
    
    This gives you the coordinate point **$(-1, 9)$**.
    
2. **Find the slope ($m$):** Evaluate the derivative function $f'(x)$ at $x = -1$.
    
    $$m = f'(-1) = 2(-1) - 4$$
    
    $$m = -2 - 4 = -6$$
    
3. **Construct the equation:** Substitute the point $(-1, 9)$ and slope $m = -6$ into the point-slope form.
    
    $$y - 9 = -6(x - (-1))$$
    
    $$y - 9 = -6(x + 1)$$
    
    $$y - 9 = -6x - 6$$
    
    $$y = -6x + 3$$
    

### (c) For what value(s) of $x$ does $f(x)$ have a slope of 0?

**Concept:** Because the derivative $f'(x)$ gives you the slope at any $x$, you can find where the slope is exactly $0$ by setting the derivative equal to zero and solving for $x$.

1. Set $f'(x) = 0$:
    
    $$2x - 4 = 0$$
    
2. Isolate $x$:
    
    $$2x = 4$$
    
    $$x = 2$$
    

### (d) For what value(s) of $x$ does $f(x)$ have a negative instantaneous rate of change?

**Concept:** "Instantaneous rate of change" is simply another term for the derivative. For this rate to be negative, the derivative must be less than zero ($f'(x) < 0$).

1. Set up the inequality using your derivative:
    
    $$2x - 4 < 0$$
    
2. Solve for $x$:
    
    $$2x < 4$$
    
    $$x < 2$$
    

In interval notation, the instantaneous rate of change is negative on the interval **$(-\infty, 2)$**.