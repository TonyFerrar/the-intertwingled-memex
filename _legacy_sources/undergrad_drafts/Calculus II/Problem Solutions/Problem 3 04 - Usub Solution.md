## Step-by-Step Solution

We want to evaluate the following definite integral:

$$\int_{0}^{\pi/4} \tan(x)\sec^2(x) \, dx$$

This problem is a classic trigonometry-based **$u$-substitution**. Since the derivative of $\tan(x)$ is exactly $\sec^2(x)$, we have a perfect pairing ready to go. Because this is a _definite_ integral (it has upper and lower limits), we also need to update our limits of integration when we switch from $x$ to $u$.

### Step 1: Choose $u$ and find $du$

Let's choose our substitution variable:

$$u = \tan(x)$$

Now, take the derivative of $u$ with respect to $x$:

$$du = \sec^2(x) \, dx$$

### Step 2: Convert the limits of integration

Since we are changing variables from $x$ to $u$, we must plug the original $x$ limits into our substitution equation ($u = \tan(x)$) to find the new $u$ limits.

- **Lower limit ($x = 0$):**
    
    $$u = \tan(0) = 0$$
    
- **Upper limit ($x = \frac{\pi}{4}$):**
    
    $$u = \tan\left(\frac{\pi}{4}\right) = 1$$
    

### Step 3: Substitute into the integral

Now, swap out all the $x$ components for their $u$ equivalents:

- The limits change from $0 \to \frac{\pi}{4}$ to $0 \to 1$.
    
- $\tan(x)$ becomes $u$.
    
- $\sec^2(x) \, dx$ becomes $du$.
    

$$\int_{0}^{1} u \, du$$

### Step 4: Integrate and evaluate

Using the power rule for integration ($\int u \, du = \frac{1}{2}u^2$), we evaluate from $0$ to $1$:

$$\left[ \frac{1}{2}u^2 \right]_{0}^{1}$$

Now, apply the Fundamental Theorem of Calculus (plug in the top number, then subtract the bottom number):

$$\left( \frac{1}{2}(1)^2 \right) - \left( \frac{1}{2}(0)^2 \right)$$

$$\quad = \frac{1}{2} - 0 = \frac{1}{2}$$

> **Final Answer:**
> 
> $$\frac{1}{2}$$
> 
> _(Fun side note: You can actually solve this by picking $u = \sec(x)$ instead, since the derivative of $\sec(x)$ is $\sec(x)\tan(x)$. If you try it that way, your new limits will be $1$ to $\sqrt{2}$, but the math beautifully shakes out to give you the exact same answer!)_