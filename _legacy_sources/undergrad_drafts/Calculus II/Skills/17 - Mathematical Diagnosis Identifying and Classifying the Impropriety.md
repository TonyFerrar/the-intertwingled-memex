# Skill 1: Mathematical Diagnosis – Identifying and Classifying "Impropriety"

## Conceptual Notes

Before calculating any integrals, you must perform a **mathematical diagnosis** to check if the integral is proper or improper. A standard definite integral assumes the domain is finite and the function remains bounded (finite) across that entire domain. If either of these conditions fails, the integral is **improper**.

Improper integrals are categorized into two primary types based on the root cause of their "impropriety":

### 1. Type I: Unbounded Domains (Infinite Intervals)

An integral is Type I if one or both of its integration limits are infinite. The function itself might be completely well-behaved, but we are attempting to calculate the area under the curve across an infinitely long stretch of the x-axis.

- **Visual Cue:** Look directly at the upper and lower limits of integration ($\infty$ or $-\infty$).
    
- **Mathematical Forms:**
    
    $$\int_{a}^{\infty} f(x) \, dx, \quad \int_{-\infty}^{b} f(x) \, dx, \quad \text{or} \quad \int_{-\infty}^{\infty} f(x) \, dx$$
    

### 2. Type II: Discontinuous Integrands (Infinite Range)

An integral is Type II if the integration limits are finite numbers, but the integrand $f(x)$ approaches infinity (a vertical asymptote) at some point within the interval of integration.

- **Visual Cue:** Look for values of $x$ that make the denominator equal to zero.
    
- **The Hidden Trap:** The asymptote isn't always at the boundaries ($a$ or $b$); it can be hidden right in the middle of the interval.
    
- **Mathematical Forms:**
    
    - Discontinuity at the lower bound: $f(x) \to \infty$ as $x \to a^+$
        
    - Discontinuity at the upper bound: $f(x) \to \infty$ as $x \to b^-$
        
    - Discontinuity at an interior point $c$ (where $a < c < b$): $f(x) \to \infty$ as $x \to c$
        

## Standard Sample Problems

### Sample Problem 1

**Problem:** Diagnose and evaluate the following integral:

$$\int_{3}^{\infty} \frac{1}{(x-2)^2} \, dx$$

#### **Step 1: Diagnosis**

1. **Check the bounds:** The upper limit is $\infty$, making this automatically a **Type I improper integral**.
    
2. **Check for interior discontinuities:** The denominator is zero when $x = 2$. However, our interval of integration is $[3, \infty)$. Since $2$ is outside this interval, there are no hidden Type II discontinuities.
    

#### **Step 2: Solution**

Rewrite the integral as a limit and integrate using the power rule:

$$\lim_{t \to \infty} \int_{3}^{t} (x-2)^{-2} \, dx = \lim_{t \to \infty} \left[ -\frac{1}{x-2} \right]_{3}^{t}$$

$$= \lim_{t \to \infty} \left( -\frac{1}{t-2} - \left(-\frac{1}{3-2}\right) \right)$$

$$= \lim_{t \to \infty} \left( -\frac{1}{t-2} + 1 \right)$$

As $t \to \infty$, the fraction $-\frac{1}{t-2} \to 0$.

$$= 0 + 1 = 1$$

- **Conclusion:** The integral **converges** to 1.
    

### Sample Problem 2

**Problem:** Diagnose and evaluate the following integral:

$$\int_{0}^{4} \frac{1}{\sqrt{4-x}} \, dx$$

#### **Step 1: Diagnosis**

1. **Check the bounds:** Both limits ($0$ and $4$) are finite numbers.
    
2. **Check for interior discontinuities:** Look at the denominator. When $x = 4$, the denominator becomes $\sqrt{4-4} = 0$, causing the function to approach infinity. Because this vertical asymptote occurs at the upper limit of our interval $[0, 4]$, this is a **Type II improper integral**.
    

#### **Step 2: Solution**

Rewrite the integral using a one-sided limit approaching 4 from the left:

$$\lim_{t \to 4^-} \int_{0}^{t} (4-x)^{-1/2} \, dx$$

Using $u$-substitution ($u = 4-x$, $du = -dx$), the antiderivative is $-2\sqrt{4-x}$:

$$\lim_{t \to 4^-} \left[ -2\sqrt{4-x} \right]_{0}^{t} = \lim_{t \to 4^-} \left( -2\sqrt{4-t} - (-2\sqrt{4-0}) \right)$$

$$= \lim_{t \to 4^-} \left( -2\sqrt{4-t} + 2(2) \right)$$

As $t \to 4^-$, the term $-2\sqrt{4-t} \to 0$.

$$= 0 + 4 = 4$$

- **Conclusion:** The integral **converges** to 4.
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (Electric Potential Field)]]
[[Electrical Engineering (Electric Potential Field) Solution]]


### Engineering Problem 2: [[Aerospace Engineering (Spacecraft Escape Velocity)]]
[[Aerospace Engineering (Spacecraft Escape Velocity) Solution]]

    

### Engineering Problem 3: [[Reliability Engineering (Component Lifespan Prediction)]]
[[Reliability Engineering (Component Lifespan Prediction) Solution]]
