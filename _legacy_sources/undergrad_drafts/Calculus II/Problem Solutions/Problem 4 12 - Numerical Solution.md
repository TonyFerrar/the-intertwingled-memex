### **1. Identify the Given Information**

From the problem, we have:

- **Function:** $f(x) = 5x^2$
    
- **Interval:** $[a, b] = [0, 2]$
    
- **Number of subintervals:** $n = 4$
    

To find the error bounds for both the Trapezoidal and Midpoint rules, we first need to compute the second derivative of the function, $f''(x)$, to find its maximum possible absolute value ($K$) on the interval $[0, 2]$.

- **First derivative:** $f'(x) = 10x$
    
- **Second derivative:** $f''(x) = 10$
    

Since $f''(x) = 10$ is a constant, its maximum absolute value anywhere on the interval $[0, 2]$ is simply:

$$K = 10$$

### **(a) Upper Bound for the Trapezoidal Rule Error ($E_T$)**

The formula for the Trapezoidal Rule error bound is:

$$|E_T| \le \frac{K(b - a)^3}{12n^2}$$

Substituting our values ($K = 10$, $a = 0$, $b = 2$, and $n = 4$):

$$|E_T| \le \frac{10(2 - 0)^3}{12(4)^2}$$

$$|E_T| \le \frac{10(8)}{12(16)}$$

$$|E_T| \le \frac{80}{192}$$

Simplifying the fraction by dividing the numerator and denominator by 16 gives:

$$|E_T| \le \frac{5}{12} \approx 0.4167$$

### **(b) Upper Bound for the Midpoint Rule Error ($E_M$)**

The formula for the Midpoint Rule error bound is:

$$|E_M| \le \frac{K(b - a)^3}{24n^2}$$

_(Notice that the denominator is $24n^2$, making the Midpoint error bound exactly half that of the Trapezoidal Rule error bound)._

Substituting our values:

$$|E_M| \le \frac{10(2 - 0)^3}{24(4)^2}$$

$$|E_M| \le \frac{10(8)}{24(16)}$$

$$|E_M| \le \frac{80}{384}$$

Simplifying the fraction by dividing the numerator and denominator by 16 gives:

$$|E_M| \le \frac{5}{24} \approx 0.2083$$

### **Final Answers**

- **(a) Trapezoidal Rule Error Upper Bound:** **$\frac{5}{12}$** (or $\approx \mathbf{0.4167}$)
    
- **(b) Midpoint Rule Error Upper Bound:** **$\frac{5}{24}$** (or $\approx \mathbf{0.2083}$)