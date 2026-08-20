## 1.

$$\sum_{n=2}^{\infty} \frac{1}{n \ln n}$$

### Step 1: Choose a Test

The term contains $n$ and $\ln n$ in the denominator. This matches a form that is easy to integrate using $u$-substitution because the derivative of $\ln x$ is $\frac{1}{x}$. We will use the **Integral Test**.

### Step 2: Check Conditions

The corresponding function $f(x) = \frac{1}{x \ln x}$ is continuous, positive, and decreasing for all $x \ge 2$.

### Step 3: Evaluate the Integral

Set up the improper integral and use the substitution $u = \ln x$, which means $du = \frac{1}{x} \, dx$:

$$\int_{2}^{\infty} \frac{1}{x \ln x} \, dx = \lim_{t \to \infty} \int_{2}^{t} \frac{1}{x \ln x} \, dx$$

$$= \lim_{t \to \infty} \Big[ \ln(\ln x) \Big]_{2}^{t}$$

$$= \lim_{t \to \infty} \Big( \ln(\ln t) - \ln(\ln 2) \Big) = \infty$$

### Conclusion

Because the improper integral evaluates to $\infty$, it diverges. Therefore, the series **diverges**.

## 2.

$$\sum_{n=1}^{\infty} e^{1-n}$$

### Step 1: Choose a Test

Rewrite the general term using basic exponent rules to see its underlying structure:

$$e^{1-n} = e^1 \cdot e^{-n} = e \cdot \left(\frac{1}{e}\right)^n$$

This perfectly fits the form of a **Geometric Series** ($c \cdot r^n$).

### Step 2: Analyze the Common Ratio

The common ratio is $r = \frac{1}{e}$. Since $e \approx 2.718$, we find that:

$$\vert{}r\vert{} = \frac{1}{e} < 1$$

### Conclusion

A geometric series converges if and only if the absolute value of its common ratio is strictly less than 1. Therefore, this series **converges**.

## 3.

$$\sum_{n=1}^{\infty} \frac{n}{\sqrt{n+1}}$$

### Step 1: Choose a Test

Notice the growth rates of the top and bottom expressions:

- The numerator grows at a linear rate ($n^1$).
    
- The denominator grows at a radical rate ($\sqrt{n} = n^{1/2}$).
    

Since the top power is higher than the bottom power, the terms will grow larger instead of shrinking to zero. We will use the **Divergence Test**.

### Step 2: Evaluate the Limit

Take the limit of the general term as $n$ approaches infinity:

$$\lim_{n \to \infty} \frac{n}{\sqrt{n+1}} = \infty$$

### Conclusion

The Divergence Test states that if the limit of the terms is not exactly 0, the series cannot settle into a finite sum. Therefore, the series **diverges**.

## 4.

$$\sum_{n=1}^{\infty} \frac{n^4 + n - 1}{2n^5 - 1}$$

### Step 1: Choose a Test

This is a rational expression containing messy polynomials. The **Limit Comparison Test (LCT)** is the best tool here.

### Step 2: Pick a Comparison Series

Keep only the dominant (highest power) terms from the numerator and denominator to find your benchmark series ($b_n$):

$$b_n = \frac{n^4}{2n^5} = \frac{1}{2n} \implies \text{Drop the constant factor: } b_n = \frac{1}{n}$$

The series $\sum \frac{1}{n}$ is the famous **harmonic series** ($p$-series with $p=1$), which is known to **diverge**.

### Step 3: Run the Limit Comparison Test

$$L = \lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \left( \frac{n^4 + n - 1}{2n^5 - 1} \cdot \frac{n}{1} \right)$$

$$L = \lim_{n \to \infty} \frac{n^5 + n^2 - n}{2n^5 - 1} = \frac{1}{2}$$

### Conclusion

Since $L = \frac{1}{2}$ is a finite, positive number ($0 < L < \infty$), both series must share the same fate. Because our comparison series diverges, the original series **diverges**.

## 5.

$$\sum_{n=1}^{\infty} \frac{1}{5^n - 3^n}$$

### Step 1: Choose a Test

For very large values of $n$, $5^n$ grows drastically faster than $3^n$, meaning the $3^n$ term becomes negligible. We will use the **Limit Comparison Test (LCT)**.

### Step 2: Pick a Comparison Series

We will compare our series to a geometric series built from the dominant base term:

$$b_n = \frac{1}{5^n} = \left(\frac{1}{5}\right)^n$$

The series $\sum \left(\frac{1}{5}\right)^n$ is a geometric series with $\vert{}r\vert{} = \frac{1}{5} < 1$, so it **converges**.

### Step 3: Run the Limit Comparison Test

$$L = \lim_{n \to \infty} \frac{\frac{1}{5^n - 3^n}}{\frac{1}{5^n}} = \lim_{n \to \infty} \frac{5^n}{5^n - 3^n}$$

Divide both the numerator and the denominator by $5^n$:

$$L = \lim_{n \to \infty} \frac{1}{1 - \left(\frac{3}{5}\right)^n} = \frac{1}{1 - 0} = 1$$

### Conclusion

Since $L = 1$ is finite and positive, both series behave identically. Since the comparison series converges, this series **converges**.

## 6.

$$\sum_{n=1}^{\infty} \frac{n^4 + n - 1}{2n^4 - 1}$$

### Step 1: Choose a Test

Look at the highest power of $n$ in both the numerator and denominator. Since both sharing the same degree ($n^4$), the terms will level out to a non-zero constant at infinity. We will apply the **Divergence Test**.

### Step 2: Evaluate the Limit

Find the limit of the expression as $n \to \infty$ by comparing the leading coefficients:

$$\lim_{n \to \infty} \frac{n^4 + n - 1}{2n^4 - 1} = \frac{1}{2}$$

### Conclusion

Because the limit is $\frac{1}{2}$ (which is **not equal to 0**), the series **diverges** by the Divergence Test.

## 7.

$$\sum_{n=1}^{\infty} \frac{\sin^2 n}{n^2}$$

### Step 1: Choose a Test

Trigonometric functions like $\sin(n)$ oscillate but are strictly bounded. Whenever you see a bounded term like $\sin(n)$ or $\cos(n)$, the **Direct Comparison Test (DCT)** is usually the fastest method.

### Step 2: Build the Inequality

We know that the output of a sine function is always trapped between $-1$ and $1$. Squaring it ensures it stays between $0$ and $1$:

$$0 \le \sin^2 n \le 1$$

Now, divide the entire inequality by $n^2$:

$$0 \le \frac{\sin^2 n}{n^2} \le \frac{1}{n^2}$$

### Step 3: Analyze the Larger Series

The bounding series is $\sum_{n=1}^{\infty} \frac{1}{n^2}$. This is a standard $p$-series where $p = 2$. Because $p > 1$, this series **converges**.

### Conclusion

Since our original series is positive and strictly smaller than a known convergent series, it is trapped. The series **converges** by the Direct Comparison Test.

## 8.

$$\sum_{n=1}^{\infty} \frac{2^n + 1}{2 + 3^n}$$

### Step 1: Choose a Test

Isolate the dominant exponential terms in the numerator and denominator to see how the function behaves at infinity. We will use the **Limit Comparison Test (LCT)**.

### Step 2: Pick a Comparison Series

$$b_n = \frac{2^n}{3^n} = \left(\frac{2}{3}\right)^n$$

The series $\sum \left(\frac{2}{3}\right)^n$ is a geometric series. Because its common ratio $\vert{}r\vert{} = \frac{2}{3} < 1$, it **converges**.

### Step 3: Run the Limit Comparison Test

$$L = \lim_{n \to \infty} \frac{\frac{2^n + 1}{2 + 3^n}}{\frac{2^n}{3^n}} = \lim_{n \to \infty} \left( \frac{2^n + 1}{2 + 3^n} \cdot \frac{3^n}{2^n} \right) = \lim_{n \to \infty} \frac{6^n + 3^n}{2 \cdot 2^n + 6^n}$$

Divide every term by the fastest-growing base ($6^n$):

$$L = \lim_{n \to \infty} \frac{1 + \left(\frac{3}{6}\right)^n}{2\left(\frac{2}{6}\right)^n + 1} = \frac{1 + 0}{0 + 1} = 1$$

### Conclusion

Since $L = 1$ is a finite, positive value, our series mimics the comparison series. Therefore, the series **converges**.