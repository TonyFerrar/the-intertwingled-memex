
## (a) $f(x) = \ln(x)$ at $a = 1$

### Step 1: Find the pattern of derivatives evaluated at $a = 1$

To find a Taylor series from scratch, we compute the first few derivatives and look for a pattern:

- $f(x) = \ln(x) \implies f(1) = \ln(1) = 0$
    
- $f'(x) = \frac{1}{x} = x^{-1} \implies f'(1) = 1$
    
- $f''(x) = -x^{-2} \implies f''(1) = -1$
    
- $f^{(3)}(x) = 2x^{-3} \implies f^{(3)}(1) = 2$
    
- $f^{(4)}(x) = -6x^{-4} \implies f^{(4)}(1) = -6$
    

### Step 2: Establish the general formula for the $n$-th derivative

Ignoring the $n=0$ term (which is $0$), notice that the derivatives at $x=1$ follow a factorial pattern with alternating signs:

$$f^{(n)}(1) = (-1)^{n-1}(n-1)! \quad \text{for } n \ge 1$$

### Step 3: Substitute into the Taylor Series formula

The general definition of a Taylor series centered at $a = 1$ is:

$$\sum_{n=0}^{\infty} \frac{f^{(n)}(1)}{n!}(x-1)^n$$

Since the $n=0$ term is $0$, we start the summation from $n=1$:

$$\sum_{n=1}^{\infty} \frac{(-1)^{n-1}(n-1)!}{n!}(x-1)^n$$

### Step 4: Simplify the factorial expression

Recall that $n! = n \cdot (n-1)!$. Substituting this allows us to cancel out terms:

$$\frac{(n-1)!}{n!} = \frac{(n-1)!}{n \cdot (n-1)!} = \frac{1}{n}$$

### Final Answer:

$$\ln(x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}(x-1)^n = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \dots$$

## (b) $f(x) = e^{2x}$ at $a = 0$

### Step 1: Use a known standard Maclaurin series

Instead of deriving from scratch, it is much faster to substitute into the known Maclaurin series (Taylor series centered at $a = 0$) for $e^u$:

$$e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!} = 1 + u + \frac{u^2}{2!} + \frac{u^3}{3!} + \dots$$

### Step 2: Substitute $u = 2x$

Replace every instance of $u$ with $2x$:

$$e^{2x} = \sum_{n=0}^{\infty} \frac{(2x)^n}{n!}$$

### Step 3: Distribute the exponent

Distribute the power of $n$ to both the $2$ and the $x$:

$$e^{2x} = \sum_{n=0}^{\infty} \frac{2^n x^n}{n!}$$

### Final Answer:

$$e^{2x} = \sum_{n=0}^{\infty} \frac{2^n x^n}{n!} = 1 + 2x + \frac{4x^2}{2!} + \frac{8x^3}{3!} + \dots$$

## (c) $f(x) = \cos(x)$ at $a = 0$

### Step 1: Analyze derivatives at $a = 0$

Let's find the behavior of the trigonometric derivatives at the center:

- $f(0) = \cos(0) = 1$
    
- $f'(0) = -\sin(0) = 0$
    
- $f''(0) = -\cos(0) = -1$
    
- $f^{(3)}(0) = \sin(0) = 0$
    
- $f^{(4)}(0) = \cos(0) = 1$
    

### Step 2: Notice the pattern

- All odd-indexed derivatives ($n = 1, 3, 5, \dots$) evaluate to $0$.
    
- All even-indexed derivatives ($n = 0, 2, 4, \dots$) alternate between $+1$ and $-1$.
    

### Step 3: Write the general form for even indices

To represent only even numbers, we use $2n$ instead of $n$. The alternating signs can be written as $(-1)^n$.

### Final Answer:

$$\cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots$$

## (d) $f(x) = x^3\cos(2x)$ at $a = 0$

### Step 1: Modify the standard $\cos(u)$ series

From part (c), we know the standard series for cosine. Let's substitute $u = 2x$ into it:

$$\cos(2x) = \sum_{n=0}^{\infty} \frac{(-1)^n (2x)^{2n}}{(2n)!}$$

### Step 2: Simplify inside the summation

Distribute the power of $2n$:

$$\cos(2x) = \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n}}{(2n)!}$$

### Step 3: Multiply the entire series by $x^3$

Bring $x^3$ inside the summation index:

$$x^3\cos(2x) = x^3 \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n}}{(2n)!} = \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n} \cdot x^3}{(2n)!}$$

### Step 4: Use exponent rules to combine $x$ terms

Add the exponents together ($2n + 3$):

### Final Answer:

$$x^3\cos(2x) = \sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} x^{2n+3}}{(2n)!} = x^3 - \frac{4x^5}{2!} + \frac{16x^7}{4!} - \dots$$

## (e) $f(x) = e^{-2x}$ at $a = 0$

### Step 1: Use the standard series for $e^u$

Like part (b), start with the standard definition:

$$e^u = \sum_{n=0}^{\infty} \frac{u^n}{n!}$$

### Step 2: Substitute $u = -2x$

$$e^{-2x} = \sum_{n=0}^{\infty} \frac{(-2x)^n}{n!}$$

### Step 3: Separate the negative sign and constants

Distribute the power of $n$ to each component within the parentheses: $(-2x)^n = (-1)^n \cdot 2^n \cdot x^n$.

### Final Answer:

$$e^{-2x} = \sum_{n=0}^{\infty} \frac{(-1)^n 2^n x^n}{n!} = 1 - 2x + \frac{4x^2}{2!} - \frac{8x^3}{3!} + \dots$$