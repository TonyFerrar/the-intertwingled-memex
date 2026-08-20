## Step-by-Step Solution

We want to evaluate the following indefinite integral:

$$\int x\sqrt{3-x} \, dx$$

This problem uses a special twist on **$u$-substitution** often called **back-substitution**. Notice that if we set $u = 3-x$, its derivative is just $-1$, which doesn't automatically cancel out the $x$ sitting outside the radical. To fix this, we will solve our substitution equation for $x$ and substitute that in too!

### Step 1: Choose $u$ and find $du$

Let's choose the expression under the radical to be our $u$:

$$u = 3 - x$$

Now, find $du$:

$$du = -1 \, dx \implies -du = dx$$

### Step 2: Solve for $x$ in terms of $u$

Since we have an extra $x$ left over in the integrand, let's rearrange our original $u$ equation to isolate $x$:

$$u = 3 - x$$

$$x = 3 - u$$

### Step 3: Substitute everything into the original integral

Now replace every single part of the original $x$-integral with its $u$ equivalent:

- $x$ becomes $(3 - u)$
    
- $\sqrt{3-x}$ becomes $\sqrt{u}$ (or $u^{1/2}$)
    
- $dx$ becomes $-du$
    

$$\int (3 - u) \cdot u^{1/2} \cdot (-du)$$

Pull the negative sign out front:

$$-\int (3 - u)u^{1/2} \, du$$

### Step 4: Distribute and integrate

Before integrating, distribute $u^{1/2}$ into the parentheses:

$$-\int (3u^{1/2} - u^{3/2}) \, du$$

Distribute the negative sign to make the power rule cleaner:

$$\int (u^{3/2} - 3u^{1/2}) \, du$$

Now, apply the power rule ($\int u^n \, du = \frac{u^{n+1}}{n+1}$) to each term:

- For $u^{3/2}$: $\frac{u^{5/2}}{5/2} = \frac{2}{5}u^{5/2}$
    
- For $3u^{1/2}$: $3 \cdot \frac{u^{3/2}}{3/2} = 3 \cdot \frac{2}{3}u^{3/2} = 2u^{3/2}$
    

Putting it together:

$$\frac{2}{5}u^{5/2} - 2u^{3/2} + C$$

### Step 5: Substitute the original expression back in

Finally, replace $u$ with $3-x$:

$$\frac{2}{5}(3-x)^{5/2} - 2(3-x)^{3/2} + C$$

> **Final Answer:**
> 
> $$\frac{2}{5}(3-x)^{5/2} - 2(3-x)^{3/2} + C$$