Here is the step-by-step solution to find the values of $x$ at the inflection points for the function:

$$f(x) = 4x^5 - 7x^3 - 5x + 1$$

### Step 1: Understand Inflection Points

An inflection point occurs where a function changes its concavity (from concave up to concave down, or vice versa). To find potential inflection points, we must:

1. Find the second derivative, $f''(x)$.
    
2. Set it equal to zero ($f''(x) = 0$) and solve for $x$.
    
3. Check that the concavity actually changes sign across those points.
    

### Step 2: Find the First Derivative $f'(x)$

Apply the power rule ($\frac{d}{dx}[x^n] = nx^{n-1}$) to each term of the function:

$$f'(x) = 4(5x^4) - 7(3x^2) - 5(1) + 0$$

$$f'(x) = 20x^4 - 21x^2 - 5$$

### Step 3: Find the Second Derivative $f''(x)$

Differentiate the first derivative expression with respect to $x$:

$$f''(x) = 20(4x^3) - 21(2x) - 0$$

$$f''(x) = 80x^3 - 42x$$

### Step 4: Set $f''(x) = 0$ and Solve for $x$

$$80x^3 - 42x = 0$$

Factor out the common term, $2x$:

$$2x(40x^2 - 21) = 0$$

This gives two separate parts to solve:

1. $2x = 0 \implies \mathbf{x = 0}$
    
2. $40x^2 - 21 = 0$
    

Solve the second equation for $x$:

$$40x^2 = 21$$

$$x^2 = \frac{21}{40}$$

$$x = \pm\sqrt{\frac{21}{40}}$$

To simplify the radical, we can rationalize the denominator:

$$x = \pm\frac{\sqrt{21}}{\sqrt{40}} = \pm\frac{\sqrt{21}}{2\sqrt{10}} \cdot \frac{\sqrt{10}}{\sqrt{10}} = \pm\frac{\sqrt{210}}{20}$$

Since $f''(x)$ is a cubic polynomial that changes signs at each of its unique real roots, all three values represent actual points of inflection.

### Final Answer

$$0, \frac{\sqrt{210}}{20}, -\frac{\sqrt{210}}{20} \quad \left(\text{or } 0, \sqrt{\frac{21}{40}}, -\sqrt{\frac{21}{40}}\right)$$