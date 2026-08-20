$$\int (\tan^{-1}x \cdot 1) \, dx$$

By pairing integration by parts with a quick $u$-substitution at the end, we can crack it wide open. Here is the step-by-step breakdown.

## Step-by-Step Solution: $\int \tan^{-1}x \, dx$

### 1. The Strategy (LIATE Rule)

Let's check our **LIATE** priority list to choose our $u$:

- **L**ogarithmic functions
    
- **I**nverse trigonometric functions ($\tan^{-1}x$) $\rightarrow$ **Top priority!**
    
- **A**lgebraic functions
    
- **T**rigonometric functions
    
- **E**xponential functions
    

Since Inverse Trigonometric sits right near the top, it becomes our $u$, leaving the invisible $1 \cdot dx$ to be our $dv$.

### 2. Identifying $u$ and $dv$

- **Choose $u$**: $u = \tan^{-1}x$
    
- **Choose $dv$**: $dv = dx$
    

Now, differentiate $u$ using the inverse tangent derivative rule, and integrate $dv$:

- **Find $du$**: $du = \frac{1}{1+x^2} \, dx$
    
- **Find $v$**: $v = \int 1 \, dx = x$
    

### 3. Applying the Formula

Plug these components into the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int \tan^{-1}x \, dx = \underbrace{(\tan^{-1}x)}_{u}\underbrace{\vphantom{\tan^{-1}x}(x)}_{v} - \int \underbrace{\vphantom{\frac{1}{1+x^2}}(x)}_{v} \underbrace{\left(\frac{1}{1+x^2} \, dx\right)}_{du}$$

Clean it up to see what we are working with:

$$\int \tan^{-1}x \, dx = x \tan^{-1}x - \int \frac{x}{1+x^2} \, dx$$

### 4. Solving the Remaining Integral ($u$-Substitution)

To solve this new integral, $\int \frac{x}{1+x^2} \, dx$, we will use a quick substitution. To avoid mixing up our letters, let's use the variable $w$ instead of $u$:

- Let $w = 1+x^2$
    
- Differentiate to get $dw = 2x \, dx$, which means $x \, dx = \frac{1}{2} dw$
    

Substitute these into the integral:

$$\int \frac{x}{1+x^2} \, dx = \int \frac{1}{w} \cdot \frac{1}{2} dw = \frac{1}{2} \ln|w|$$

Replace $w$ back with $1+x^2$ (we can drop the absolute value bars because $1+x^2$ is always positive):

$$\frac{1}{2} \ln(1+x^2)$$

### 5. Bringing It All Together

Now, slide this result back into our main equation from Step 3 and attach the constant of integration ($C$):

$$\int \tan^{-1}x \, dx = x \tan^{-1}x - \frac{1}{2} \ln(1+x^2) + C$$

### Final Answer

$$\mathbf{x \tan^{-1}x - \frac{1}{2} \ln(1+x^2) + C}$$