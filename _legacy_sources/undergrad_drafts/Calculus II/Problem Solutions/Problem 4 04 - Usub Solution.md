## Step-by-Step Solution

We want to evaluate the following definite integral:

$$\int_{1}^{3} \frac{e^{1/x}}{x^2} \, dx$$

This problem is a great candidate for **$u$-substitution**. If we rewrite the fraction slightly, it looks like $\int_{1}^{3} e^{1/x} \cdot \frac{1}{x^2} \, dx$. Since the derivative of $\frac{1}{x}$ is closely related to $\frac{1}{x^2}$, we can set up our substitution perfectly.

### Step 1: Choose $u$ and find $du$

Let's choose the exponent of $e$ as our substitute variable:

$$u = \frac{1}{x} = x^{-1}$$

Now, take the derivative of $u$ with respect to $x$ using the power rule:

$$du = -1x^{-2} \, dx = -\frac{1}{x^2} \, dx$$

Since our original integral has a positive $\frac{1}{x^2} \, dx$, let's move the negative sign to the other side:

$$-du = \frac{1}{x^2} \, dx$$

### Step 2: Convert the limits of integration

Because this is a definite integral, we need to update our lower and upper limits from $x$-values to $u$-values using our formula $u = \frac{1}{x}$.

- **Lower limit ($x = 1$):**
    
    $$u = \frac{1}{1} = 1$$
    
- **Upper limit ($x = 3$):**
    
    $$u = \frac{1}{3}$$
    

### Step 3: Substitute into the integral

Now, swap the $x$ variables and limits with their $u$ counterparts:

- The limits change from $1 \to 3$ to $1 \to \frac{1}{3}$.
    
- $e^{1/x}$ becomes $e^u$.
    
- $\frac{1}{x^2} \, dx$ becomes $-du$.
    

$$\int_{1}^{1/3} e^u (-du) = -\int_{1}^{1/3} e^u \, du$$

> _Pro-Tip:_ You can use the negative sign outside the integral to flip the lower and upper limits of integration back into standard increasing order:
> 
> $$\int_{1/3}^{1} e^u \, du$$

### Step 4: Integrate and evaluate

The integral of $e^u$ is simply $e^u$. Now we evaluate it from $\frac{1}{3}$ to $1$:

$$\left[ e^u \right]_{1/3}^{1}$$

Apply the Fundamental Theorem of Calculus (plug in the upper limit, then subtract the lower limit):

$$e^1 - e^{1/3}$$

$$\quad = e - \sqrt[3]{e}$$

> **Final Answer:**
> 
> $$e - \sqrt[3]{e}$$