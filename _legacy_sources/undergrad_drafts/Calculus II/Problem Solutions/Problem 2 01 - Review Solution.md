Here are the step-by-step solutions for finding the first derivative of each function.

### (a) $f(x) = \frac{1}{x^2} - 5\sqrt{x} - 3 \ln x + \pi^4$

**Step 1: Rewrite the function using exponents** Before taking the derivative, convert fractions and radicals into power forms so you can easily use the **Power Rule** ($\frac{d}{dx}[x^n] = n x^{n-1}$).

$$f(x) = x^{-2} - 5x^{1/2} - 3\ln x + \pi^4$$

**Step 2: Differentiate term by term**

- **First term ($x^{-2}$):** Bring the exponent down and subtract 1.
    
    $$\frac{d}{dx}[x^{-2}] = -2x^{-3} = -\frac{2}{x^3}$$
    
- **Second term ($-5x^{1/2}$):** Bring the exponent down and multiply.
    
    $$\frac{d}{dx}[-5x^{1/2}] = -5 \cdot \left(\frac{1}{2}\right)x^{-1/2} = -\frac{5}{2\sqrt{x}}$$
    
- **Third term ($-3\ln x$):** The derivative of $\ln x$ is $\frac{1}{x}$.
    
    $$\frac{d}{dx}[-3\ln x] = -\frac{3}{x}$$
    
- **Fourth term ($\pi^4$):** Don't let this trap you! Even though it looks fancy, $\pi^4$ is just a constant number, and the derivative of any constant is $0$.
    

**Final Answer:**

$$f'(x) = -\frac{2}{x^3} - \frac{5}{2\sqrt{x}} - \frac{3}{x}$$

### (b) $y = \frac{x^3 - 4x^2 + x}{x - 2}$

**Step 1: Identify the rule** Because we have a function divided by another function, we must use the **Quotient Rule**:

$$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$

Let's define our components:

- Top ($u$): $x^3 - 4x^2 + x \implies u' = 3x^2 - 8x + 1$
    
- Bottom ($v$): $x - 2 \implies v' = 1$
    

**Step 2: Apply the formula**

$$y' = \frac{(3x^2 - 8x + 1)(x - 2) - (x^3 - 4x^2 + x)(1)}{(x - 2)^2}$$

**Step 3: Expand and simplify the numerator**

1. Expand the first part: $(3x^2 - 8x + 1)(x - 2) = 3x^3 - 6x^2 - 8x^2 + 16x + x - 2 = 3x^3 - 14x^2 + 17x - 2$
    
2. Subtract the second part: $(3x^3 - 14x^2 + 17x - 2) - (x^3 - 4x^2 + x)$
    
3. Combine like terms: $2x^3 - 10x^2 + 16x - 2$
    

**Final Answer:**

$$y' = \frac{2x^3 - 10x^2 + 16x - 2}{(x - 2)^2}$$

### (c) $g(x) = (x + \sin x) \tan x$

**Step 1: Identify the rule** This is a product of two distinct functions, so we need the **Product Rule**:

$$(uv)' = u'v + uv'$$

Let's break down the pieces:

- First ($u$): $x + \sin x \implies u' = 1 + \cos x$
    
- Second ($v$): $\tan x \implies v' = \sec^2 x$
    

**Step 2: Assemble the parts**

$$g'(x) = (1 + \cos x)\tan x + (x + \sin x)\sec^2 x$$

**Step 3: Optional simplification** Distributing the $\tan x$ in the first block can make it look a bit cleaner since $\cos x \cdot \tan x = \sin x$:

$$(1)\tan x + (\cos x)\left(\frac{\sin x}{\cos x}\right) = \tan x + \sin x$$

**Final Answer:**

$$g'(x) = \tan x + \sin x + (x + \sin x)\sec^2 x$$

### (d) $y = \cos(e^x) - e^{x^5}$

**Step 1: Identify the rule** Both terms involve an "inner" and "outer" function, meaning we must apply the **Chain Rule**:

$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

**Step 2: Handle term one ($\cos(e^x)$)**

- Outer function is $\cos(\text{blob}) \implies -\sin(\text{blob})$
    
- Inner function is $e^x \implies e^x$
    
- Putting it together: $-\sin(e^x) \cdot e^x = -e^x \sin(e^x)$
    

**Step 3: Handle term two ($-e^{x^5}$)**

- Outer function is $e^{\text{blob}} \implies e^{\text{blob}}$
    
- Inner function is $x^5 \implies 5x^4$
    
- Putting it together: $-e^{x^5} \cdot 5x^4 = -5x^4 e^{x^5}$
    

**Final Answer:**

$$y' = -e^x \sin(e^x) - 5x^4 e^{x^5}$$