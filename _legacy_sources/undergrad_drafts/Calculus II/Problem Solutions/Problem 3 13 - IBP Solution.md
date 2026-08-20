
Here is the step-by-step solution for $\int x \ln x \, dx$.

## Step-by-Step Solution: $\int x \ln x \, dx$

### 1. The Strategy (LIATE Rule)

As a reminder, we use the **LIATE** priority list to choose our $u$:

- **L**ogarithmic functions ($\ln x$)
    
- **I**nverse trigonometric functions
    
- **A**lgebraic functions ($x, x^2$)
    
- **T**rigonometric functions
    
- **E**xponential functions
    

Notice that **L**ogarithmic comes _before_ **A**lgebraic. If we tried to make $dv = \ln x \, dx$, we'd get stuck because integrating $\ln x$ requires its own integration by parts process!

### 2. Identifying $u$ and $dv$

Following LIATE, we set it up like this:

- **Choose $u$**: $u = \ln x$
    
- **Choose $dv$**: $dv = x \, dx$
    

Now, differentiate $u$ and integrate $dv$:

- **Find $du$**: $du = \frac{1}{x} \, dx$
    
- **Find $v$**: $v = \int x \, dx = \frac{1}{2}x^2$
    

### 3. Applying the Formula

Substitute these components into the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int x \ln x \, dx = \underbrace{(\ln x)}_{u}\underbrace{\left(\frac{1}{2}x^2\right)}_{v} - \int \underbrace{\left(\frac{1}{2}x^2\right)}_{v} \underbrace{\left(\frac{1}{x} \, dx\right)}_{du}$$

Let's clean up that remaining integral. Notice how nicely the $x^2$ and $\frac{1}{x}$ simplify:

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \int \frac{1}{2}x \, dx$$

Pull the constant $\frac{1}{2}$ outside the integral:

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \frac{1}{2} \int x \, dx$$

### 4. Final Integration

Now, just integrate the remaining $x$:

$$\int x \, dx = \frac{1}{2}x^2$$

Multiply this by the $\frac{1}{2}$ already outside the integral, and add the constant of integration ($C$):

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \frac{1}{2}\left(\frac{1}{2}x^2\right) + C$$

$$\int x \ln x \, dx = \frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 + C$$

### Final Answer

$$\mathbf{\frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 + C}$$

_(Note: You can also factor out $\frac{1}{4}x^2$ to write it as $\frac{1}{4}x^2(2\ln x - 1) + C$, both are perfectly correct!)_