# Skill 1: Applying Trigonometric Identities to Rewrite Integrands

## 1. Explanatory Notes

When our basic integration tools are limited, evaluating integrals that contain powers or products of trigonometric functions requires rewriting the integrand into an integrable form. The primary strategy of **Skill 1** relies on substituting high-power expressions with equivalent lower-power expressions using fundamental trigonometric identities.

Depending on whether the exponent is **odd** or **even**, you will choose between two major families of identities:

### Case A: Handling Odd Powers (Pythagorean Identities)

If an integrand contains an odd, positive power of sine or cosine, we split off exactly one factor of the trigonometric function. This leaves behind an even power, which we can easily rewrite in terms of the opposing function using the Pythagorean identities:

$$\sin^2(x) = 1 - \cos^2(x)$$

$$\cos^2(x) = 1 - \sin^2(x)$$

This strategic split primes the entire expression for a smooth $u$-substitution.

### Case B: Handling Even Powers (Half-Angle Formulas)

When encountering an even, positive power of sine or cosine without an odd companion, standard $u$-substitution fails because there is no "extra" factor to serve as your $du$. Instead, we must use half-angle formulas to structurally eliminate the powers and lower the degree of the expression:

$$\sin^{2}(x)=\frac{1-\cos(2x)}{2} \quad \text{[cite: 39]}$$

$$\cos^{2}(x)=\frac{1+\cos(2x)}{2} \quad \text{[cite: 41]}$$

## 2. Pure Math Sample Problems

### Sample Problem 1 (Odd Power)

Evaluate the following indefinite integral:

$$\int \cos^3(x) \, dx$$

**Solution:**

1. **Split off one factor** of $\cos(x)$ to preserve for your future $du$:
    
    $$\int \cos^2(x) \cdot \cos(x) \, dx$$
    
2. **Apply the Pythagorean identity** to rewrite the remaining $\cos^2(x)$ in terms of sine:
    
    $$\int (1 - \sin^2(x)) \cdot \cos(x) \, dx$$
    
3. **Set up a $u$-substitution** where $u = \sin(x)$ and $du = \cos(x) \, dx$:
    
    $$\int (1 - u^2) \, du$$
    
4. **Integrate term-by-term** using the power rule:
    
    $$u - \frac{1}{3}u^3 + C$$
    
5. **Back-substitute** $u = \sin(x)$ to get the final answer:
    
    $$\sin(x) - \frac{1}{3}\sin^3(x) + C$$
    

### Sample Problem 2 (Even Power)

Evaluate the following indefinite integral:

$$\int \sin^2(x) \, dx$$

**Solution:**

1. **Apply the half-angle formula** directly to rewrite the squared term into a first-degree expression:
    
    $$\int \frac{1 - \cos(2x)}{2} \, dx$$
    
2. **Factor out the constant** $\frac{1}{2}$ to simplify your workspace:
    
    $$\frac{1}{2} \int (1 - \cos(2x)) \, dx$$
    
3. **Integrate term-by-term** (remembering a reverse chain rule for the $\cos(2x)$ term):
    
    $$\frac{1}{2} \left( x - \frac{1}{2}\sin(2x) \right) + C$$
    
4. **Distribute the constant** for the final simplified solution:
    
    $$\frac{1}{2}x - \frac{1}{4}\sin(2x) + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (AC Power Analysis)]]
[[Electrical Engineering (AC Power Analysis) Solution]]

### Engineering Problem 2: [[Coastal Engineering (Wave Potential Energy Density)]]
[[Coastal Engineering (Wave Potential Energy Density) Solution]]
