## Step-by-Step Solution: $\int x \sin x \, dx$

### 1. The Integration by Parts Formula

The integration by parts formula is a technique based on the product rule of differentiation:

$$\int u \, dv = uv - \int v \, du$$

To choose which part of the function should be $u$ and which should be $dv$, a helpful guideline is the **LIATE** rule (ordered from top priority to bottom):

- **L**ogarithmic functions
    
- **I**nverse trigonometric functions
    
- **A**lgebraic functions (e.g., $x, x^2$)
    
- **T**rigonometric functions (e.g., $\sin x, \cos x$)
    
- **E**xponential functions
    

### 2. Identifying $u$ and $dv$

In our integral, we have an algebraic term ($x$) and a trigonometric term ($\sin x$). Since **A**lgebraic comes before **T**rigonometric in LIATE, we assign them as follows:

- **Choose $u$**: $u = x$
    
- **Choose $dv$**: $dv = \sin x \, dx$
    

Next, we differentiate $u$ to find $du$, and integrate $dv$ to find $v$:

- **Find $du$**: $du = 1 \cdot dx = dx$
    
- **Find $v$**: $v = \int \sin x \, dx = -\cos x$
    

### 3. Applying the Formula

Now, substitute our pieces ($u$, $v$, $du$, and $dv$) into the integration by parts formula:

$$\int x \sin x \, dx = \underbrace{(x)}_{u}\underbrace{(-\cos x)}_{v} - \int \underbrace{(-\cos x)}_{v} \underbrace{\vphantom{(-\cos x)}dx}_{du}$$

Simplify the expression by factoring out the negative sign from the remaining integral:

$$\int x \sin x \, dx = -x \cos x + \int \cos x \, dx$$

### 4. Final Integration

Evaluate the final simple integral ($\int \cos x \, dx = \sin x$) and add the constant of integration ($C$):

$$\int x \sin x \, dx = -x \cos x + \sin x + C$$

### Final Answer

$$\mathbf{-x \cos x + \sin x + C}$$