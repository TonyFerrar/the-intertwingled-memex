This one is a classic sequel! Since we have an $x^2$ term here, we are going to use the **Integration by Parts** formula twice to completely break it down.

Here is the step-by-step solution for $\int x^2 \cos x \, dx$.

## Step-by-Step Solution: $\int x^2 \cos x \, dx$

### 1. First Round of Integration by Parts

We use the same **LIATE** strategy as before. We have an algebraic term ($x^2$) and a trigonometric term ($\cos x$).

- **Choose $u$**: $u = x^2$
    
- **Choose $dv$**: $dv = \cos x \, dx$
    

Now, find $du$ by differentiating and $v$ by integrating:

- **Find $du$**: $du = 2x \, dx$
    
- **Find $v$**: $v = \int \cos x \, dx = \sin x$
    

Plug these into the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int x^2 \cos x \, dx = \underbrace{(x^2)}_{u}\underbrace{(\sin x)}_{v} - \int \underbrace{(\sin x)}_{v} \underbrace{(2x \, dx)}_{du}$$

Clean it up a bit by pulling the constant $2$ out of the integral:

$$\int x^2 \cos x \, dx = x^2 \sin x - 2 \int x \sin x \, dx$$

### 2. Second Round of Integration by Parts

Look at that remaining integral: $\int x \sin x \, dx$. It still has a product of two different functions, so we need to apply integration by parts a second time just for this piece.

For $\int x \sin x \, dx$:

- **Choose $u$**: $u = x \implies du = dx$
    
- **Choose $dv$**: $dv = \sin x \, dx \implies v = -\cos x$
    

Apply the formula to just this internal section:

$$\int x \sin x \, dx = (x)(-\cos x) - \int (-\cos x) \, dx$$

$$\int x \sin x \, dx = -x \cos x + \int \cos x \, dx$$

$$\int x \sin x \, dx = -x \cos x + \sin x$$

### 3. Bringing It All Together

Now, substitute the result of our second round back into our original equation from Step 1.

> **Watch the brackets and negative signs closely here!** The $-2$ needs to distribute to both terms.

$$\int x^2 \cos x \, dx = x^2 \sin x - 2 \left[ -x \cos x + \sin x \right]$$

Distribute the $-2$:

$$\int x^2 \cos x \, dx = x^2 \sin x + 2x \cos x - 2 \sin x$$

Add the constant of integration ($C$) to cross the finish line.

### Final Answer

$$\mathbf{x^2 \sin x + 2x \cos x - 2 \sin x + C}$$