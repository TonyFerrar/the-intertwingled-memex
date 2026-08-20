## Step 1: Identify the Value of $x$

The given function is:

$$f(x) = \sqrt{1 + x}$$

We want to approximate:

$$f(0.1) = \sqrt{1.1}$$

By comparing the two expressions, we can see that the input variable $x$ must be set to:

$$x = 0.1$$

To find our three approximations, we will substitute $x = 0.1$ into each of the three given Taylor polynomials ($p_0$, $p_1$, and $p_2$).

## Step 2: First Approximation ($p_0$)

The zeroth-order Taylor polynomial is a constant:

$$p_0(x) = 1$$

Since there is no $x$ variable in this polynomial, the value remains constant for any input:

$$p_0(0.1) = 1$$

- **First Approximation:** $1$
    

## Step 3: Second Approximation ($p_1$)

The first-order Taylor polynomial (which represents the linear approximation or tangent line) is:

$$p_1(x) = 1 + \frac{x}{2}$$

Substitute $x = 0.1$ into the polynomial:

$$p_1(0.1) = 1 + \frac{0.1}{2}$$

Perform the division:

$$\frac{0.1}{2} = 0.05$$

Add the terms together:

$$p_1(0.1) = 1 + 0.05 = 1.05$$

- **Second Approximation:** $1.05$
    

## Step 4: Third Approximation ($p_2$)

The second-order Taylor polynomial (which adds quadratic curvature) is:

$$p_2(x) = 1 + \frac{x}{2} - \frac{x^2}{8}$$

Substitute $x = 0.1$ into the polynomial:

$$p_2(0.1) = 1 + \frac{0.1}{2} - \frac{(0.1)^2}{8}$$

We already know from Step 3 that $1 + \frac{0.1}{2} = 1.05$. Now, calculate the quadratic term:

$$(0.1)^2 = 0.01$$

$$\frac{0.01}{8} = 0.00125$$

Subtract this value from our previous terms:

$$p_2(0.1) = 1.05 - 0.00125 = 1.04875$$

- **Third Approximation:** $1.04875$
    

## Summary of Results

|**Taylor Polynomial**|**Formula**|**Approximation of 1.1​**|
|---|---|---|
|**$p_0(0.1)$**|$1$|**$1$**|
|**$p_1(0.1)$**|$1 + \frac{0.1}{2}$|**$1.05$**|
|**$p_2(0.1)$**|$1 + \frac{0.1}{2} - \frac{0.1^2}{8}$|**$1.04875$**|

> **Comparison to Actual Value:**
> 
> The exact value of $\sqrt{1.1}$ is approximately **$1.048809$**. Notice how each higher-degree polynomial gets closer to the actual value, with the quadratic approximation ($p_2$) being accurate to four decimal places!