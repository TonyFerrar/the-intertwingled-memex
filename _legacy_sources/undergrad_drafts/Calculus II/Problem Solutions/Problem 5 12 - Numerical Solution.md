
### **1. Identify the Given Information & Find the 4th Derivative**

From the problem statement, we have:

- **Function:** $f(x) = 3x^4$
    
- **Interval:** $[a, b] = [0, 2]$
    

The error bound formula for Simpson's Rule requires the **fourth derivative** of the function, $f^{(4)}(x)$, to find its maximum absolute value ($K$) on the interval $[0, 2]$. Let's take the derivatives step-by-step:

- **1st Derivative:** $f'(x) = 12x^3$
    
- **2nd Derivative:** $f''(x) = 36x^2$
    
- **3rd Derivative:** $f'''(x) = 72x$
    
- **4th Derivative:** $f^{(4)}(x) = 72$
    

Since $f^{(4)}(x) = 72$ is a constant, its maximum absolute value anywhere on the interval is simply:

$$K = 72$$

### **(a) Find an Upper Bound for the Error with $n = 4$**

The formula for Simpson's Rule error bound is:

$$|E_S| \le \frac{K(b - a)^5}{180n^4}$$

Substituting our values ($K = 72$, $a = 0$, $b = 2$, and $n = 4$):

$$|E_S| \le \frac{72(2 - 0)^5}{180(4)^4}$$

$$|E_S| \le \frac{72(32)}{180(256)}$$

$$|E_S| \le \frac{2304}{46080}$$

Simplifying this fraction:

$$|E_S| \le \frac{1}{20} = 0.05$$

- **Answer for (a):** The upper bound for the error is **$0.05$**.
    

### **(b) Estimate the Minimum Number of Subintervals for Error $< 10^{-4}$**

We want to find a value of $n$ such that the error formula yields a value less than $10^{-4}$ (or $0.0001$):

$$\frac{K(b - a)^5}{180n^4} < 10^{-4}$$

Substitute the known constants ($K = 72$ and $b - a = 2$):

$$\frac{72(32)}{180n^4} < 10^{-4}$$

$$\frac{2304}{180n^4} < 10^{-4}$$

$$\frac{12.8}{n^4} < 10^{-4}$$

Now, rearrange the inequality to solve for $n^4$:

$$n^4 > \frac{12.8}{10^{-4}}$$

$$n^4 > 128,000$$

Take the fourth root of both sides to isolate $n$:

$$n > \sqrt[4]{128,000}$$

$$n > 18.91$$

> ⚠️ **Crucial Simpson's Rule Constraint:** By design, Simpson's Rule **strictly requires $n$ to be an even integer** because it couples subintervals together to construct parabolic arcs.

Since $n$ must be an even integer greater than $18.91$, we must round up to the next even integer.

- **Answer for (b):** The minimum number of subintervals needed is **$20$**.