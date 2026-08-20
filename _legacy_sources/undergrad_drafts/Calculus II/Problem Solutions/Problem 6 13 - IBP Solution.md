## Step-by-Step Solution: $\int_{0}^{\ln 3} x e^{-x} \, dx$

### 1. Identifying $u$ and $dv$

We use the **LIATE** rule to choose our parts. We have an algebraic term ($x$) and an exponential term ($e^{-x}$). Since **A**lgebraic comes before **E**xponential, we assign them like this:

- **Choose $u$**: $u = x$
    
- **Choose $dv$**: $dv = e^{-x} \, dx$
    

Now, differentiate $u$ and integrate $dv$ (remember the chain rule rule for integrating $e^{-x}$ throws a negative sign out front):

- **Find $du$**: $du = dx$
    
- **Find $v$**: $v = \int e^{-x} \, dx = -e^{-x}$
    

### 2. Finding the Antiderivative

Let's assemble the pieces using the integration by parts formula ($\int u \, dv = uv - \int v \, du$):

$$\int x e^{-x} \, dx = \underbrace{(x)}_{u}\underbrace{(-e^{-x})}_{v} - \int \underbrace{(-e^{-x})}_{v} \underbrace{\vphantom{-e^{-x}}dx}_{du}$$

Clean up the double negatives before completing the final integration:

$$\int x e^{-x} \, dx = -x e^{-x} + \int e^{-x} \, dx$$

Now, integrate that last $e^{-x}$ term:

$$\int x e^{-x} \, dx = -x e^{-x} - e^{-x}$$

To make plugging in our limits much easier, let's factor out a $-e^{-x}$:

$$\text{Antiderivative} = -e^{-x}(x + 1)$$

### 3. Evaluating the Definite Integral (Plugging in Limits)

Now we apply our boundaries from $0$ to $\ln 3$:

$$\left[ -e^{-x}(x + 1) \right]_{0}^{\ln 3}$$

We evaluate at the upper limit ($\ln 3$) and subtract the evaluation at the lower limit ($0$).

#### Evaluate at the Upper Limit ($x = \ln 3$):

$$-e^{-\ln 3}(\ln 3 + 1)$$

> **Log Rule Trick:** Recall that $-1 \cdot \ln 3 = \ln(3^{-1}) = \ln\left(\frac{1}{3}\right)$.
> 
> Because $e^{\ln(\text{anything})} = \text{anything}$, the exponential part simplifies beautifully:
> 
> $$e^{-\ln 3} = e^{\ln(3^{-1})} = \frac{1}{3}$$

Substituting that back in gives us the upper limit value:

$$-\frac{1}{3}(\ln 3 + 1) = -\frac{1}{3}\ln 3 - \frac{1}{3}$$

#### Evaluate at the Lower Limit ($x = 0$):

$$-e^{-0}(0 + 1)$$

Since $e^0 = 1$:

$$-1(1) = -1$$

### 4. The Final Subtraction

Subtract the lower limit value from the upper limit value. Watch out for the double negative!

$$\text{Total} = (\text{Upper}) - (\text{Lower})$$

$$\text{Total} = \left(-\frac{1}{3}\ln 3 - \frac{1}{3}\right) - (-1)$$

$$\text{Total} = -\frac{1}{3}\ln 3 - \frac{1}{3} + 1$$

Combine the constant numbers ($1 - \frac{1}{3} = \frac{2}{3}$):

$$\text{Total} = \frac{2}{3} - \frac{1}{3}\ln 3$$

### Final Answer

$$\mathbf{\frac{1}{3}(2 - \ln 3)}$$