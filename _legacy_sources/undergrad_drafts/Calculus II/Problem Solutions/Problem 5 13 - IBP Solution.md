

## Step-by-Step Solution: $\int_{1}^{e} \ln(2x) \, dx$

### 1. Identifying $u$ and $dv$

Just like the $\tan^{-1}x$ problem, this looks like a single function. We will treat it as being multiplied by an invisible 1: $\int \ln(2x) \cdot 1 \, dx$.

Following the **LIATE** rule, **L**ogarithmic functions are at the absolute top of the priority list for $u$:

- **Choose $u$**: $u = \ln(2x)$
    
- **Choose $dv$**: $dv = dx$
    

Now, find $du$ using the chain rule, and find $v$ by integrating:

- **Find $du$**: $du = \frac{1}{2x} \cdot 2 \, dx = \frac{1}{x} \, dx$
    
- **Find $v$**: $v = \int 1 \, dx = x$
    

### 2. Finding the Antiderivative

Let's apply the integration by parts formula ($\int u \, dv = uv - \int v \, du$) to find the general shape of our function before worrying about the boundaries:

$$\int \ln(2x) \, dx = \underbrace{(\ln(2x))}_{u}\underbrace{\vphantom{\ln(2x)}(x)}_{v} - \int \underbrace{\vphantom{\frac{1}{x}}(x)}_{v} \underbrace{\left(\frac{1}{x} \, dx\right)}_{du}$$

Simplify the remaining integral (the $x$ and $\frac{1}{x}$ perfectly cancel each other out):

$$\int \ln(2x) \, dx = x \ln(2x) - \int 1 \, dx$$

$$\int \ln(2x) \, dx = x \ln(2x) - x$$

### 3. Evaluating the Definite Integral (Plugging in Limits)

Now we bring back our boundaries from $1$ to $e$:

$$\left[ x \ln(2x) - x \right]_{1}^{e}$$

According to the Fundamental Theorem of Calculus, we evaluate the function at the upper limit ($e$) and subtract the function evaluated at the lower limit ($1$).

#### Evaluate at the Upper Limit ($x = e$):

$$e \ln(2e) - e$$

Using logarithm rules, we can split $\ln(2e)$ into $\ln(2) + \ln(e)$. Since $\ln(e) = 1$:

$$e (\ln(2) + 1) - e$$

$$e \ln(2) + e - e = e \ln(2)$$

#### Evaluate at the Lower Limit ($x = 1$):

$$1 \cdot \ln(2 \cdot 1) - 1$$

$$\ln(2) - 1$$

### 4. The Final Subtraction

Subtract the lower limit result from the upper limit result.

> **Be careful with the negative signs here!** Make sure to distribute the negative sign to the entire lower limit expression.

$$\text{Total} = (\text{Upper}) - (\text{Lower})$$

$$\text{Total} = e \ln(2) - (\ln(2) - 1)$$

$$\text{Total} = e \ln(2) - \ln(2) + 1$$

To make it look ultra-clean, you can factor out the $\ln(2)$ from the first two terms:

### Final Answer

$$\mathbf{(e - 1)\ln(2) + 1}$$