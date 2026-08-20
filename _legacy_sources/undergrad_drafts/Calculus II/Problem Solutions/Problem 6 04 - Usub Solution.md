## Step-by-Step Solution

We want to evaluate the following definite integral:

$$\int_{0}^{\sqrt{\pi}} 4x \cos(x^2) \, dx$$

This problem is a classic **$u$-substitution** involving trigonometric functions. The inside function is $x^2$, and its derivative is closely related to the $4x$ term sitting outside the cosine function. Because it is a definite integral, we will also update our limits of integration as we switch from $x$ to $u$.

### Step 1: Choose $u$ and find $du$

Let's choose the inside function of the cosine term to be our $u$:

$$u = x^2$$

Now, take the derivative of $u$ with respect to $x$:

$$du = 2x \, dx$$

### Step 2: Adjust for the coefficients

Our original integral contains $4x \, dx$, but our derivative gives us $2x \, dx$. To match the integral perfectly, we can multiply both sides of our $du$ equation by 2:

$$2 \, du = 4x \, dx$$

### Step 3: Convert the limits of integration

Since we are switching variables from $x$ to $u$, we must transform the upper and lower boundaries using our substitution equation $u = x^2$.

- **Lower limit ($x = 0$):**
    
    $$u = (0)^2 = 0$$
    
- **Upper limit ($x = \sqrt{\pi}$):**
    
    $$u = (\sqrt{\pi})^2 = \pi$$
    

### Step 4: Substitute into the integral

Now, replace all components of the original integral with our new $u$ terms:

- The limits change from $0 \to \sqrt{\pi}$ to $0 \to \pi$.
    
- $\cos(x^2)$ becomes $\cos(u)$.
    
- $4x \, dx$ becomes $2 \, du$.
    

$$\int_{0}^{\pi} \cos(u) \cdot 2 \, du$$

Pull the constant factor 2 outside the integral:

$$2 \int_{0}^{\pi} \cos(u) \, du$$

### Step 5: Integrate and evaluate

The antiderivative of $\cos(u)$ is $\sin(u)$. Now we evaluate this from $0$ to $\pi$:

$$2 \Big[ \sin(u) \Big]_{0}^{\pi}$$

Apply the Fundamental Theorem of Calculus (plug in the upper limit, then subtract the lower limit):

$$2 \big( \sin(\pi) - \sin(0) \big)$$

Recall the values of these trigonometric points on the unit circle:

- $\sin(\pi) = 0$
    
- $\sin(0) = 0$
    

Substitute those values back into the equation:

$$2 (0 - 0) = 0$$

> **Final Answer:**
> 
> $$0$$
> 
> _(Fun fact: The answer is exactly zero because the positive area under the curve from $0$ to $\sqrt{\pi/2}$ perfectly cancels out the negative area under the curve from $\sqrt{\pi/2}$ to $\sqrt{\pi}$!)_