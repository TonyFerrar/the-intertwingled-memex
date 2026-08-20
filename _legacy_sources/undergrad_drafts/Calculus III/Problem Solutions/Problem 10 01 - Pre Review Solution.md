Here is the step-by-step solution to find the values of $a$ and $b$ for **Question 10**.

### Step 1: Understand the Conditions for Continuity and Differentiability

For the piecewise function $f(x)$ to be both continuous and differentiable everywhere, it must meet two conditions at the transition point $x = -3$:

1. **Continuity:** The left-hand limit must equal the right-hand limit at $x = -3$.
    
    $$\lim_{x \to -3^-} f(x) = \lim_{x \to -3^+} f(x)$$
    
2. **Differentiability:** The derivative from the left must equal the derivative from the right at $x = -3$.
    
    $$\lim_{x \to -3^-} f'(x) = \lim_{x \to -3^+} f'(x)$$
    

### Step 2: Apply the Continuity Condition

Set the two pieces equal to each other at $x = -3$:

$$3x + 4 = 2x^2 + ax + b$$

Substitute $x = -3$:

$$3(-3) + 4 = 2(-3)^2 + a(-3) + b$$

$$-9 + 4 = 2(9) - 3a + b$$

$$-5 = 18 - 3a + b$$

Isolate the constants on one side by subtracting 18 from both sides:

$$-23 = -3a + b \quad \text{--- (Equation 1)}$$

### Step 3: Apply the Differentiability Condition

First, find the derivative $f'(x)$ for each piece using the power rule:

$$f'(x) = \begin{cases} 3, & x < -3 \\ 4x + a, & x > -3 \end{cases}$$

Now, set the two derivative pieces equal to each other at the transition point $x = -3$:

$$3 = 4x + a$$

Substitute $x = -3$:

$$3 = 4(-3) + a$$

$$3 = -12 + a$$

Solve for $a$ by adding 12 to both sides:

$$a = 15$$

### Step 4: Solve for $b$

Substitute the value of $a = 15$ back into **Equation 1** to find $b$:

$$-23 = -3(15) + b$$

$$-23 = -45 + b$$

Add 45 to both sides to isolate $b$:

$$b = -23 + 45$$

$$b = 22$$

### Final Answer

$$a = 15 \quad \text{and} \quad b = 22$$