# Skill 3: Utilizing Reduction Formulas for High-Power Integrals

## 1. Explanatory Notes

Evaluating trigonometric integrals with exceptionally high exponents (such as $\int \sin^{8}(x) \, dx$) using basic expansion or half-angle identities can become incredibly tedious and time-consuming. To ease this operational workload, mathematicians and engineers use **Reduction Formulas**.

A reduction formula is an integration rule derived using integration by parts that equates an integral involving a high power of a trigonometric function with an algebraic expression added to an alternative integral where the power has been reduced. By applying these formulas repeatedly, a high-degree expression can step-by-step be broken down until it reaches a low-degree power that can be integrated using basic calculus rules.

The standard reduction formulas for positive integers $n$ include:

- **Sine Power Reduction:**
    
    $$\int \sin^{n}(x) \, dx = -\frac{\sin^{n-1}(x)\cos(x)}{n} + \frac{n-1}{n}\int \sin^{n-2}(x) \, dx$$
    
- **Cosine Power Reduction:**
    
    $$\int \cos^{n}(x) \, dx = \frac{\cos^{n-1}(x)\sin(x)}{n} + \frac{n-1}{n}\int \cos^{n-2}(x) \, dx$$
    
- **Tangent Power Reduction (where $n \neq 1$):**
    
    $$\int \tan^{n}(x) \, dx = \frac{\tan^{n-1}(x)}{n-1} - \int \tan^{n-2}(x) \, dx$$
    
- **Secant Power Reduction (where $n \neq 1$):**
    
    $$\int \sec^{n}(x) \, dx = \frac{\sec^{n-2}(x)\tan(x)}{n-1} + \frac{n-2}{n-1}\int \sec^{n-2}(x) \, dx$$
    

## 2. Pure Math Sample Problems

### Sample Problem 1 (Sine Reduction)

Evaluate the following indefinite integral using a reduction formula:

$$\int \sin^4(x) \, dx$$

**Solution:**

1. Identify the exponent, which is $n = 4$. Apply the **sine reduction formula** once:
    
    $$\int \sin^{4}(x) \, dx = -\frac{\sin^{3}(x)\cos(x)}{4} + \frac{3}{4}\int \sin^{2}(x) \, dx$$
    
2. We must now evaluate the remaining reduced integral, $\int \sin^{2}(x) \, dx$. Apply the formula a second time, now with $n = 2$:
    
    $$\int \sin^{2}(x) \, dx = -\frac{\sin^{1}(x)\cos(x)}{2} + \frac{1}{2}\int \sin^{0}(x) \, dx$$
    
    Since $\sin^0(x) = 1$, the remaining integral is simply $\int 1 \, dx = x$:
    
    $$\int \sin^{2}(x) \, dx = -\frac{\sin(x)\cos(x)}{2} + \frac{1}{2}x$$
    
3. Substitute this result back into the original step-1 equation:
    
    $$\int \sin^{4}(x) \, dx = -\frac{\sin^{3}(x)\cos(x)}{4} + \frac{3}{4}\left( -\frac{\sin(x)\cos(x)}{2} + \frac{1}{2}x \right) + C$$
    
4. Distribute the constant to find the final answer:
    
    $$\int \sin^{4}(x) \, dx = -\frac{1}{4}\sin^{3}(x)\cos(x) - \frac{3}{8}\sin(x)\cos(x) + \frac{3}{8}x + C$$
    

### Sample Problem 2 (Tangent Reduction)

Evaluate the following indefinite integral using a reduction formula:

$$\int \tan^3(x) \, dx$$

**Solution:**

1. Identify the exponent, which is $n = 3$. Apply the **tangent reduction formula**:
    
    $$\int \tan^{3}(x) \, dx = \frac{\tan^{3-1}(x)}{3-1} - \int \tan^{3-2}(x) \, dx$$
    
    $$\int \tan^{3}(x) \, dx = \frac{\tan^{2}(x)}{2} - \int \tan(x) \, dx$$
    
2. The remaining reduced integral is a standard natural log integral form: $\int \tan(x) \, dx = \ln|\sec(x)|$.
    
3. Combine the terms to reveal the final expression:
    
    $$\int \tan^{3}(x) \, dx = \frac{1}{2}\tan^2(x) - \ln|\sec(x)| + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering (Non-linear Restoring Forces in Structural Sways)]]
[[Civil Engineering (Non-linear Restoring Forces in Structural Sways) Solution]]


### Engineering Problem 2: [[Aerospace Engineering (Aerodynamic Boundary Layer Skin Friction)]]
[[Aerospace Engineering (Aerodynamic Boundary Layer Skin Friction) Solution]]
