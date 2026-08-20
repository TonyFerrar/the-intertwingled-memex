
## Step 1: Recall the General Formula

The general formula for a third-order Taylor polynomial ($p_3(x)$) centered at a point $x = a$ is:

$$p_3(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f^{(3)}(a)}{3!}(x-a)^3$$

## Step 2: Identify the Given Values

From the problem description, we are given the following information:

- **Center ($a$):** $2$
    
- **Function value:** $f(2) = 1$
    
- **First derivative:** $f'(2) = 1$
    
- **Second derivative:** $f''(2) = 1$
    
- **Third derivative:** $f^{(3)}(2) = 12$
    

## Step 3: Construct the Polynomial

Now, substitute the center $a = 2$ and the given derivative values into our general formula:

$$p_3(x) = 1 + 1(x-2) + \frac{1}{2!}(x-2)^2 + \frac{12}{3!}(x-2)^3$$

Next, let's simplify the factorial fractions:

- For the quadratic term: $2! = 2 \cdot 1 = 2$, so the coefficient is $\frac{1}{2}$.
    
- For the cubic term: $3! = 3 \cdot 2 \cdot 1 = 6$, so the coefficient is $\frac{12}{6} = 2$.
    

Putting it all together gives the final third-order Taylor polynomial:

$$p_3(x) = 1 + (x-2) + \frac{1}{2}(x-2)^2 + 2(x-2)^3$$

## Step 4: Approximate $f(2.1)$

To approximate $f(2.1)$, substitute $x = 2.1$ into our polynomial $p_3(x)$:

$$p_3(2.1) = 1 + (2.1-2) + \frac{1}{2}(2.1-2)^2 + 2(2.1-2)^3$$

First, calculate the base term $(x - 2)$:

$$2.1 - 2 = 0.1$$

Now substitute $0.1$ back into the expression:

$$p_3(2.1) = 1 + 0.1 + \frac{1}{2}(0.1)^2 + 2(0.1)^3$$

## Step 5: Final Arithmetic Evaluation

Evaluate each term step by step:

- **Linear term:** $0.1$
    
- **Quadratic term:** $\frac{1}{2}(0.01) = 0.005$
    
- **Cubic term:** $2(0.001) = 0.002$
    

Add all the pieces together:

$$p_3(2.1) = 1 + 0.1 + 0.005 + 0.002$$

$$p_3(2.1) = 1.107$$

## Summary of Answers

- **Third-order Taylor Polynomial:**
    
    $$p_3(x) = 1 + (x-2) + \frac{1}{2}(x-2)^2 + 2(x-2)^3$$
    
- **Approximation of $f(2.1)$:**
    
    $$f(2.1) \approx 1.107$$