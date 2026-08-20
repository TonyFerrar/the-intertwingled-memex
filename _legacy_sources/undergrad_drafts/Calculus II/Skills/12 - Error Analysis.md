# Skill 4: Error Analysis and Bound Estimation

Numerical integration methods typically do not produce exact analytical results. Because these calculations are approximations, engineers must evaluate the accuracy of their solutions to determine if they are dependable. This requires understanding two complementary concepts: measuring known errors after an evaluation, and predicting the maximum possible error beforehand using mathematical upper bounds.

## Conceptual Notes

### **1. Absolute and Relative Error**

Suppose $c$ is a computed numerical solution to a problem possessing an exact analytical solution $x$. To determine how close an approximation is, two standard measures of error are used:

- **Absolute Error:** Measures the total magnitude of the discrepancy between the approximation and the true value.
    
    $$\text{Absolute Error} = |c - x|$$
    
- **Relative Error:** Scales the absolute error against the true baseline value, showing the scale of the mistake relative to the magnitude of the system.
    
    $$\text{Relative Error} = \frac{|c - x|}{|x|}$$
    

### **2. Theoretical Error Bounds**

When evaluating active engineering systems, the true analytical answer ($x$) is often unknown. In these scenarios, derivatives over the integration interval $[a, b]$ are used to calculate a guaranteed **upper bound** for the absolute error. Let $K$ represent the maximum absolute value of the designated derivative on the interval $[a, b]$.

- **Trapezoidal Rule Error Bound ($E_T$):** Requires the maximum value of the second derivative, $|f''(x)| \le K$:
    
    $$|E_T| \le \frac{K(b - a)^3}{12n^2}$$
    
- **Midpoint Rule Error Bound ($E_M$):** Requires the maximum value of the second derivative, $|f''(x)| \le K$:
    
    $$|E_M| \le \frac{K(b - a)^3}{24n^2}$$
    
- **Simpson's Rule Error Bound ($E_S$):** Requires the maximum value of the fourth derivative, $|f^{(4)}(x)| \le K$:
    
    $$|E_S| \le \frac{K(b - a)^5}{180n^4}$$
    

## Pure Mathematics Sample Problems

### **Sample Problem 1: Post-Evaluation Error Tracking**

**Problem:** A student uses the Midpoint Rule to approximate a definite integral and gets a numerical solution of $c = 18.625$. The true analytical evaluation of the integral is exactly $x = \frac{56}{3}$. Compute the absolute and relative errors of this approximation.

**Step-by-Step Solution:**

1. **Identify parameters:** $c = 18.625$, $x = \frac{56}{3} \approx 18.6667$.
    
2. **Calculate Absolute Error:**
    
    $$\text{Absolute Error} = \left|18.625 - \frac{56}{3}\right| \approx 0.0417$$
    
3. **Calculate Relative Error:**
    
    $$\text{Relative Error} = \frac{\left|18.625 - \frac{56}{3}\right|}{\left|\frac{56}{3}\right|} \approx 0.00223 \approx 0.223\%$$
    

### **Sample Problem 2: Theoretical Error Bounding**

**Problem:** Find an upper bound for the absolute error when using the Trapezoidal Rule with $n = 4$ subintervals to approximate the integral $\int_{0}^{2} 5x^2 \, dx$.

**Step-by-Step Solution:**

1. **Identify parameters:** $a = 0$, $b = 2$, $n = 4$, and $f(x) = 5x^2$.
    
2. **Find the second derivative $f''(x)$:**
    
    $$f'(x) = 10x \implies f''(x) = 10$$
    
3. **Find the maximum value $K$ on $[0, 2]$:**
    
    Since $f''(x) = 10$ is a constant, its maximum absolute value is $K = 10$.
    
4. **Apply the Trapezoidal error bound formula:**
    
    $$|E_T| \le \frac{10(2 - 0)^3}{12(4)^2} = \frac{10(8)}{12(16)} = \frac{80}{192} = \frac{5}{12} \approx 0.4167$$
    

## Real-Life Engineering Application Problems

### **Engineering Problem 1: [[Aerospace Inertial Navigation Sensor Drift]]**
[[Aerospace Inertial Navigation Sensor Drift Solution]]


### **Engineering Problem 2: [[Civil Engineering Earthwork Material Balancing]]**
[[Civil Engineering Earthwork Material Balancing Solution]]
