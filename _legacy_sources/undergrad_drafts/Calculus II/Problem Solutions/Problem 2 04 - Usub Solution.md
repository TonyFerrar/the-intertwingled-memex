## Step-by-Step Solution

We want to evaluate the following indefinite integral:

$$\int \frac{x}{x^2+1} \, dx$$

This is another classic **$u$-substitution** problem. The degree of the polynomial in the denominator ($x^2+1$) is 2, and the degree of the numerator ($x$) is 1. Since the numerator is a scalar multiple of the derivative of the denominator, $u$-substitution is the perfect tool.

### Step 1: Choose $u$ and find $du$

Let's set $u$ equal to the entire denominator:

$$u = x^2 + 1$$

Now, take the derivative of $u$ with respect to $x$:

$$du = 2x \, dx$$

### Step 2: Adjust for the numerator

Looking at our original integral, the numerator only has $x \, dx$, not $2x \, dx$. We can adjust our $du$ equation by dividing both sides by 2:

$$\frac{1}{2} \, du = x \, dx$$

### Step 3: Substitute into the original integral

Now replace the terms in the original integral with $u$ and $du$:

- The denominator $x^2 + 1$ becomes $u$.
    
- The numerator and differential $x \, dx$ become $\frac{1}{2} \, du$.
    

$$\int \frac{x}{x^2+1} \, dx = \int \frac{1}{u} \cdot \left(\frac{1}{2} \, du\right)$$

Pull the constant factor $\frac{1}{2}$ outside the integral:

$$\frac{1}{2} \int \frac{1}{u} \, du$$

### Step 4: Integrate with respect to $u$

The integral of $\frac{1}{u}$ is a standard rule: $\int \frac{1}{u} \, du = \ln|u| + C$.

$$\frac{1}{2} \int \frac{1}{u} \, du = \frac{1}{2} \ln|u| + C$$

### Step 5: Substitute the original expression back in

Replace $u$ with $x^2 + 1$:

$$\frac{1}{2} \ln|x^2 + 1| + C$$

_(Note: Because $x^2 + 1$ is always positive for any real number $x$, you can safely drop the absolute value bars and use parentheses instead)._

> **Final Answer:**
> 
> $$\frac{1}{2} \ln(x^2 + 1) + C$$