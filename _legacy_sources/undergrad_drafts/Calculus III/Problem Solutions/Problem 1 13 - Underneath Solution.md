## Problem Statement

Evaluate the double integral:

$$I = \iint_{R} x \sin(xy) \, dA$$

where $R = [0, 1] \times [0, \pi]$.

Compute it in two ways:

1. Integrate with respect to $y$ first.
    
2. Integrate with respect to $x$ first.
    

Compare the difficulty and results, and discuss why changing the order matters.

## Method 1: Integrate with respect to $y$ first

Setting up the iterated integral with $y$ on the inside ($dy \, dx$):

$$I = \int_{0}^{1} \int_{0}^{\pi} x \sin(xy) \, dy \, dx$$

### Step 1: Inner Integral (with respect to $y$)

Treat $x$ as a constant. The antiderivative of $\sin(xy)$ with respect to $y$ is $-\frac{1}{x}\cos(xy)$.

$$\int_{0}^{\pi} x \sin(xy) \, dy = x \left[ -\frac{\cos(xy)}{x} \right]_{0}^{\pi} = \left[ -\cos(xy) \right]_{0}^{\pi}$$

Evaluate at the upper and lower limits:

$$= (-\cos(x\pi)) - (-\cos(0))$$

$$= 1 - \cos(\pi x)$$

### Step 2: Outer Integral (with respect to $x$)

Now substitute this back into the outer integral and integrate from $0$ to $1$:

$$I = \int_{0}^{1} (1 - \cos(\pi x)) \, dx$$

Find the antiderivative:

$$= \left[ x - \frac{\sin(\pi x)}{\pi} \right]_{0}^{1}$$

Evaluate at the limits:

$$= \left( 1 - \frac{\sin(\pi)}{\pi} \right) - \left( 0 - \frac{\sin(0)}{\pi} \right)$$

Since $\sin(\pi) = 0$ and $\sin(0) = 0$:

$$I = 1$$

## Method 2: Integrate with respect to $x$ first

Setting up the iterated integral with $x$ on the inside ($dx \, dy$):

$$I = \int_{0}^{\pi} \int_{0}^{1} x \sin(xy) \, dx \, dy$$

### Step 1: Inner Integral (with respect to $x$)

Treat $y$ as a constant. To integrate $x \sin(xy)$ with respect to $x$, we must use **Integration by Parts**:

$$\int u \, dv = uv - \int v \, du$$

Let:

- $u = x \implies du = dx$
    
- $dv = \sin(xy) \, dx \implies v = -\frac{\cos(xy)}{y}$
    

Applying the formula:

$$\int_{0}^{1} x \sin(xy) \, dx = \left[ -\frac{x \cos(xy)}{y} \right]_{0}^{1} - \int_{0}^{1} \left(-\frac{\cos(xy)}{y}\right) \, dx$$

$$= \left[ -\frac{x \cos(xy)}{y} \right]_{0}^{1} + \frac{1}{y} \left[ \frac{\sin(xy)}{y} \right]_{0}^{1}$$

$$= \left[ -\frac{x \cos(xy)}{y} + \frac{\sin(xy)}{y^2} \right]_{0}^{1}$$

Evaluate at the limits from $x = 0$ to $x = 1$:

$$= \left( -\frac{\cos(y)}{y} + \frac{\sin(y)}{y^2} \right) - \left( 0 + 0 \right)$$

$$= -\frac{\cos(y)}{y} + \frac{\sin(y)}{y^2}$$

### Step 2: Outer Integral (with respect to $y$)

Now integrate this result with respect to $y$ from $0$ to $\pi$:

$$I = \int_{0}^{\pi} \left( -\frac{\cos(y)}{y} + \frac{\sin(y)}{y^2} \right) \, dy$$

Notice that this integrand is the exact result of applying the quotient rule to $\frac{\sin(y)}{y}$:

$$\frac{d}{dy}\left( \frac{\sin(y)}{y} \right) = \frac{\cos(y) \cdot y - \sin(y) \cdot 1}{y^2} = \frac{\cos(y)}{y} - \frac{\sin(y)}{y^2}$$

Therefore, the antiderivative of our integrand is:

$$\int \left( -\frac{\cos(y)}{y} + \frac{\sin(y)}{y^2} \right) \, dy = -\frac{\sin(y)}{y}$$

Evaluating from $0$ to $\pi$:

$$I = \left[ -\frac{\sin(y)}{y} \right]_{0}^{\pi} = \left( -\frac{\sin(\pi)}{\pi} \right) - \left( \lim_{y \to 0} -\frac{\sin(y)}{y} \right)$$

- $-\frac{\sin(\pi)}{\pi} = 0$
    
- Using the standard limit $\lim_{y \to 0} \frac{\sin(y)}{y} = 1$:
    

$$I = 0 - (-1) = 1$$

## Comparison and Discussion

- **Results:** Both methods yield the exact same value: **$I = 1$**. This confirms Fubini's Theorem, which states that the order of integration over a rectangular region does not change the final result.
    
- **Difficulty:** * **Method 1 ($dy \, dx$)** is significantly simpler. Because of the $x$ coefficient outside the sine function, integrating with respect to $y$ allows the $x$ terms to elegantly cancel out, eliminating the need for integration by parts.
    
    - **Method 2 ($dx \, dy$)** is much harder. Integrating with respect to $x$ requires integration by parts, which leaves a complex fractional expression. The final step also requires evaluating an improper limit ($\lim_{y \to 0} \frac{\sin y}{y}$).
        
- **Why changing the order matters:** Choosing the optimal order of integration saves significant time and reduces the risk of algebraic errors. In some calculus problems, one order might even yield an analytically impossible integral, while the flipped order remains completely straightforward.