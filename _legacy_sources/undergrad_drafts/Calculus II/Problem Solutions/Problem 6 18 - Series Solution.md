

## Part (a): $\sum_{n=1}^{\infty} \frac{(-1)^n}{2^n}$

### Step 1: Identify the type of series

We can rewrite the general term by pulling out the shared exponent $n$:

$$\sum_{n=1}^{\infty} \left(-\frac{1}{2}\right)^n$$

This is a **geometric series**, which has the general form $\sum a r^{n-1}$ or $\sum r^n$.

### Step 2: Determine the common ratio ($r$) and the first term ($a_1$)

- **Common ratio ($r$):** The base being raised to the power of $n$ is $r = -\frac{1}{2}$.
    
- **First term ($a_1$):** Plug in the starting index $n = 1$:
    
    $$a_1 = \left(-\frac{1}{2}\right)^1 = -\frac{1}{2}$$
    

### Step 3: Check for convergence

A geometric series converges if and only if the absolute value of its common ratio is strictly less than 1 ($\vert{}r\vert{} < 1$).

$$\left\vert{}-\frac{1}{2}\right\vert{} = \frac{1}{2} < 1$$

Because this condition is met, the series **converges**.

### Step 4: Calculate the sum

The formula for the sum of a convergent infinite geometric series is:

$$\text{Sum} = \frac{\text{First Term}}{1 - r} = \frac{a_1}{1 - r}$$

Plugging in our values:

$$\text{Sum} = \frac{-\frac{1}{2}}{1 - \left(-\frac{1}{2}\right)} = \frac{-\frac{1}{2}}{1 + \frac{1}{2}} = \frac{-\frac{1}{2}}{\frac{3}{2}}$$

Multiply by the reciprocal of the denominator to simplify:

$$\text{Sum} = -\frac{1}{2} \cdot \frac{2}{3} = -\frac{1}{3}$$

- **Result:** **Converges**
    
- **Value of the Sum:** **$-\frac{1}{3}$**
    

## Part (b): $\sum_{n=1}^{\infty} \left(\frac{2}{n+2} - \frac{2}{n+4}\right)$

### Step 1: Identify the type of series

Because the terms consist of a fraction subtracting a shifted version of a similar fraction, this is a **telescoping series** where many intermediate terms will cancel out.

### Step 2: Expand the partial sum ($S_k$) to observe the cancellation pattern

Let's write out the first few terms explicitly:

- **For $n = 1$:** $\left(\frac{2}{3} - \frac{2}{5}\right)$
    
- **For $n = 2$:** $\left(\frac{2}{4} - \frac{2}{6}\right)$
    
- **For $n = 3$:** $\left(\frac{2}{5} - \frac{2}{7}\right)$
    
- **For $n = 4$:** $\left(\frac{2}{6} - \frac{2}{8}\right)$
    

Let's group them together into a single sum up to a stopping point $k$:

$$S_k = \left(\frac{2}{3} - \cancel{\frac{2}{5}}\right) + \left(\frac{2}{4} - \cancel{\frac{2}{6}}\right) + \left(\cancel{\frac{2}{5}} - \frac{2}{7}\right) + \left(\cancel{\frac{2}{6}} - \frac{2}{8}\right) + \dots + \left(\frac{2}{k+1} - \frac{2}{k+3}\right) + \left(\frac{2}{k+2} - \frac{2}{k+4}\right)$$

Notice that the negative parts are cancelled out two steps later by positive parts (e.g., $-\frac{2}{5}$ cancels with $+\frac{2}{5}$).

- The terms that survive at the **beginning** are: $\frac{2}{3} + \frac{2}{4}$
    
- The terms that survive at the **end** are: $-\frac{2}{k+3} - \frac{2}{k+4}$
    

This leaves us with a clean expression for the $k$-th partial sum:

$$S_k = \frac{2}{3} + \frac{1}{2} - \frac{2}{k+3} - \frac{2}{k+4} = \frac{7}{6} - \frac{2}{k+3} - \frac{2}{k+4}$$

### Step 3: Take the limit as $k \to \infty$

The value of the infinite series is the limit of its partial sums:

$$\text{Sum} = \lim_{k \to \infty} \left( \frac{7}{6} - \frac{2}{k+3} - \frac{2}{k+4} \right)$$

As $k$ approaches infinity, both fractions with $k$ in the denominator vanish to $0$:

$$\text{Sum} = \frac{7}{6} - 0 - 0 = \frac{7}{6}$$

- **Result:** **Converges**
    
- **Value of the Sum:** **$\frac{7}{6}$**
    

## Part (c): $\sum_{n=1}^{\infty} \left(\frac{1}{e}\right)^{-n}$

### Step 1: Simplify the general term

Using exponent rules, a negative exponent flips the base fraction into its reciprocal:

$$\left(\frac{1}{e}\right)^{-n} = \left(\left(\frac{1}{e}\right)^{-1}\right)^n = e^n$$

So, the series is simply:

$$\sum_{n=1}^{\infty} e^n$$

### Step 2: Analyze the series behavior

This is a geometric series where the common ratio is $r = e$.

Euler's number $e$ is approximately equal to $2.718$. According to the geometric series test, if the absolute value of the common ratio is greater than or equal to 1 ($\vert{}r\vert{} \ge 1$), the terms grow larger over time rather than shrinking to 0.

$$\lvert r \rvert = e \approx 2.718 \ge 1$$

Alternatively, by the **Divergence Test**, if we look at the limit of individual terms:

$$\lim_{n \to \infty} e^n = \infty$$

Since the limit of the terms is not $0$, the series cannot add up to a finite number.

- **Result:** **Diverges** (The sum grows infinitely large without bound)