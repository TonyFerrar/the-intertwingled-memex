## Problem Statement

Evaluate:

$$I = \iint_{R} y e^{xy} \, dA$$

where $R = [0,1] \times [0,2]$.

Compute it in two ways:

1. Compute by integrating $y$ first.
    
2. Re-evaluate by integrating $x$ first.
    

Which order is simpler, and why?

## Method 1: Compute by integrating $y$ first

Setting up the iterated integral with $y$ on the inside ($dy \, dx$):

$$I = \int_{0}^{1} \int_{0}^{2} y e^{xy} \, dy \, dx$$

### Step 1: Inner Integral (with respect to $y$)

Treat $x$ as a constant. Because we have a product of two functions of $y$ ($y$ and $e^{xy}$), we must use **Integration by Parts**:

$$\int u \, dv = uv - \int v \, du$$

Let:

- $u = y \implies du = dy$
    
- $dv = e^{xy} \, dy \implies v = \frac{1}{x}e^{xy}$
    

Applying the formula:

$$\int_{0}^{2} y e^{xy} \, dy = \left[ \frac{y e^{xy}}{x} \right]_{0}^{2} - \int_{0}^{2} \frac{1}{x} e^{xy} \, dy$$

$$= \left[ \frac{y e^{xy}}{x} - \frac{e^{xy}}{x^2} \right]_{0}^{2}$$

Evaluate at the limits from $y = 0$ to $y = 2$:

$$= \left( \frac{2e^{2x}}{x} - \frac{e^{2x}}{x^2} \right) - \left( 0 - \frac{1}{x^2} \right)$$

$$= \frac{2e^{2x}}{x} - \frac{e^{2x}}{x^2} + \frac{1}{x^2}$$

### Step 2: Outer Integral (with respect to $x$)

Now substitute this back into the outer integral and integrate from $0$ to $1$:

$$I = \int_{0}^{1} \left( \frac{2e^{2x}}{x} - \frac{e^{2x}}{x^2} + \frac{1}{x^2} \right) \, dx$$

This integral cannot be easily evaluated using basic elementary techniques because $\int \frac{e^{2x}}{x} \, dx$ forms a non-elementary function known as the Exponential Integral ($\text{Ei}(x)$).

## Method 2: Re-evaluate by integrating $x$ first

Setting up the iterated integral with $x$ on the inside ($dx \, dy$):

$$I = \int_{0}^{2} \int_{0}^{1} y e^{xy} \, dx \, dy$$

### Step 1: Inner Integral (with respect to $x$)

Treat $y$ as a constant. The antiderivative of $e^{xy}$ with respect to $x$ is $\frac{1}{y}e^{xy}$. The $y$ multiplier out front cancels out nicely:

$$\int_{0}^{1} y e^{xy} \, dx = y \left[ \frac{1}{y} e^{xy} \right]_{0}^{1} = \left[ e^{xy} \right]_{0}^{1}$$

Evaluate at the limits from $x = 0$ to $x = 1$:

$$= e^{y(1)} - e^{y(0)}$$

$$= e^y - 1$$

### Step 2: Outer Integral (with respect to $y$)

Now substitute this result into the outer integral and integrate from $0$ to $2$:

$$I = \int_{0}^{2} (e^y - 1) \, dy$$

Find the antiderivative:

$$= \left[ e^y - y \right]_{0}^{2}$$

Evaluate at the limits:

$$= (e^2 - 2) - (e^0 - 0)$$

$$= e^2 - 2 - 1$$

$$= e^2 - 3$$

## Which order is simpler, and why?

**Integrating with respect to $x$ first (Method 2)** is substantially simpler.

- **Why:** When integrating with respect to $x$, the $y$ term acts as a constant scalar coefficient that perfectly matches the chain rule derivative of the exponent. This lets the $y$ variables cancel out immediately, leaving a trivial exponential form.
    
- Conversely, integrating with respect to $y$ first creates an unwieldy algebraic expression requiring integration by parts, leading to an outer integral that is exceptionally difficult to solve using elementary calculus.