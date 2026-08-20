# Skill 3: Evaluating Limits at Infinity (The Definite Integral)

## Topic Notes

The final and most crucial step in calculus is transitioning from a finite approximation of $n$ rectangles to an exact calculation. By taking the mathematical **limit as $n$ approaches infinity ($\lim_{n \to \infty}$)**, the width of each individual rectangle ($\Delta x$) shrinks to zero, the number of rectangles becomes infinite, and the approximation error disappears entirely. This process yields the exact area under the curve, defined as the **Definite Integral**.

### 1. The Limit Definition of an Integral

Combining our partitioning grid points ($x_i$) and our width ($\Delta x$) into a Right Riemann Sum, the formal limit definition is stated as:

$$\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i)\Delta x$$

### 2. Core Limit Evaluation Techniques ($n \to \infty$)

When evaluating limits at infinity for rational expressions (fractions containing polynomials of $n$), we observe the behavior of terms with $n$ in the denominator.

- **The Reciprocal Rule:** As the denominator grows infinitely large, the overall fraction shrinks to zero:
    
    $$\lim_{n \to \infty} \frac{1}{n} = 0, \quad \lim_{n \to \infty} \frac{1}{n^2} = 0, \quad \lim_{n \to \infty} \frac{1}{n^c} = 0 \quad (\text{for } c > 0)$$
    
- **Leading Coefficients Rule:** If a fraction has matching highest degrees in both the numerator and denominator, the limit at infinity is simply the ratio of their leading coefficients:
    
    $$\lim_{n \to \infty} \frac{An^3 + Bn^2 + Cn}{Dn^3} = \frac{A}{D}$$
    

## Conceptual Sample Problems

### Problem 1: Basic Linear Evaluation

Evaluate the exact area under the curve by computing the following limit of a Riemann sum:

$$\lim_{n \to \infty} 4 \left( 2 + \frac{3}{n} + \frac{5}{n^2} \right)$$

#### Solution:

1. **Apply the limit to each individual term using limit laws:**
    
    $$\lim_{n \to \infty} 4 \left( 2 + \frac{3}{n} + \frac{5}{n^2} \right) = 4 \left( \lim_{n \to \infty} 2 + \lim_{n \to \infty} \frac{3}{n} + \lim_{n \to \infty} \frac{5}{n^2} \right)$$
    
2. **Evaluate the behavior of each fractional term:**
    
    - $\lim_{n \to \infty} 2 = 2$ (The constant is unaffected)
        
    - $\lim_{n \to \infty} \frac{3}{n} = 0$
        
    - $\lim_{n \to \infty} \frac{5}{n^2} = 0$
        
3. **Compute the final result:**
    
    $$4 \cdot (2 + 0 + 0) = 4 \cdot 2 = 8$$
    

### Problem 2: Rational Expression from a Riemann Expansion

Evaluate the following limit expression representing the expansion of a quadratic Riemann sum:

$$\lim_{n \to \infty} \frac{16n^3 + 24n^2 + 8n}{6n^3}$$

#### Solution:

1. **Identify the highest power (degree) of $n$:**
    
    The highest power in both the numerator and denominator is $n^3$.
    
2. **Divide every term in the expression by $n^3$ to isolate the constants:**
    
    $$\lim_{n \to \infty} \frac{\frac{16n^3}{n^3} + \frac{24n^2}{n^3} + \frac{8n}{n^3}}{\frac{6n^3}{n^3}} = \lim_{n \to \infty} \frac{16 + \frac{24}{n} + \frac{8}{n^2}}{6}$$
    
3. **Take the limit as $n \to \infty$:**
    
    $$\frac{16 + 0 + 0}{6} = \frac{16}{6} = \frac{8}{3}$$
    

## Real-Life Engineering Application Problems

### Application 1: [[Civil Engineering (Total Continuous Fluid Force on a Levee)]]
[[Civil Engineering (Total Continuous Fluid Force on a Levee) Solution]]

### Application 2: [[Signal Processing & Electrical Engineering (Total Steady-State Energy)]]
[[Signal Processing & Electrical Engineering (Total Steady-State Energy) Solution]]
