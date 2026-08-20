# Skill 3: Algebraic Bookkeeping and Boundary Tracking

## Conceptual Notes

Once you have learned how to select your variables (Skill 1) and execute the calculus operations (Skill 2), the final hurdle is maintaining the organizational stamina required to cross the finish line. In many real-world applications, an integration by parts problem cannot be solved in a single stage. Instead, you must carefully juggle layered algebraic constants and manage boundary evaluations.

### 1. Repeated Integration by Parts

When an integrand contains an algebraic term with an exponent greater than 1 (such as $x^2$ or $x^3$), it acts as a mechanical countdown timer. Each iteration of the integration by parts formula drops the degree of that exponent by exactly one.

The primary danger zone here is **bookkeeping**. When nesting a second integration by parts formula directly inside the leftover integral of the first round, failing to use brackets will cause catastrophic distribution errors with negative signs and scalar coefficients.

> **Pro-Tip Checklist for Repeated Rounds:**
> 
> - Keep your primary $uv$ term completely isolated out front.
>     
> - Wrap the entire secondary integration by parts expression in large brackets. * Explicitly distribute the negative sign and any constant multipliers to _all_ terms inside those brackets before trying to simplify.
>     

### 2. Definite Integration by Parts

When evaluating physical systems with fixed spatial or temporal boundaries, the integration by parts formula must be combined with the Fundamental Theorem of Calculus. The formal notation is expressed using differentials:

$$\int_{a}^{b} u \, dv = \left. uv \right|_{a}^{b} - \int_{a}^{b} v \, du$$

It is crucial to remember that the lower limit $a$ and upper limit $b$ represent strict $x$-values (or independent variable boundaries). This boundary tracking can be managed in one of two ways:

1. **Immediate Evaluation:** Apply the boundaries $\left. uv \right|_{a}^{b}$ right away to compute a standalone number, then focus entirely on the remaining definite integral.
    
2. **Global Evaluation:** Treat the problem as an indefinite integral to find the complete, combined antiderivative first, and then plug the boundaries into the entire expression at the very end.
    

## Sample Problems

### Sample Problem 1: Repeated Integration (The Exponent Countdown)

**Evaluate:**

$$\int x^2 e^{3x} \, dx$$

**Solution:**

- **Round 1 Setup:** Let $u = x^2 \implies du = 2x \, dx$ and let $dv = e^{3x} \, dx \implies v = \frac{1}{3}e^{3x}$.
    
- **Apply Formula:**
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \int \frac{2}{3}x e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{3} \underbrace{\int x e^{3x} \, dx}_{\text{Requires Round 2}}$$
    
- **Round 2 Setup:** For the inner integral, let $u = x \implies du = dx$ and let $dv = e^{3x} \, dx \implies v = \frac{1}{3}e^{3x}$.
    
- **Nested Execution (Using Brackets):**
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{3} \left[ \frac{1}{3}xe^{3x} - \int \frac{1}{3}e^{3x} \, dx \right]$$
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{3} \left[ \frac{1}{3}xe^{3x} - \frac{1}{9}e^{3x} \right] + C$$
    
- **Distribute Coefficients Carefully:**
    
    $$\int x^2 e^{3x} \, dx = \frac{1}{3}x^2 e^{3x} - \frac{2}{9}xe^{3x} + \frac{2}{27}e^{3x} + C$$
    

### Sample Problem 2: Definite Integration by Parts

**Evaluate:**

$$\int_{1}^{e} x^2 \ln x \, dx$$

**Solution:**

- **Setup via LIATE:** Let $u = \ln x \implies du = \frac{1}{x} \, dx$ and let $dv = x^2 \, dx \implies v = \frac{1}{3}x^3$.
    
- **Apply Definite Formula:**
    
    $$\int_{1}^{e} x^2 \ln x \, dx = \left[ \frac{1}{3}x^3 \ln x \right]_{1}^{e} - \int_{1}^{e} \left(\frac{1}{3}x^3\right)\left(\frac{1}{x}\right) \, dx$$
    
    $$\int_{1}^{e} x^2 \ln x \, dx = \left[ \frac{1}{3}x^3 \ln x \right]_{1}^{e} - \frac{1}{3} \int_{1}^{e} x^2 \, dx = \left[ \frac{1}{3}x^3 \ln x - \frac{1}{9}x^3 \right]_{1}^{e}$$
    
- **Evaluate Boundaries (Upper minus Lower):**
    
    - **Upper ($x = e$):** $\frac{1}{3}e^3 \ln(e) - \frac{1}{9}e^3 = \frac{1}{3}e^3(1) - \frac{1}{9}e^3 = \frac{2}{9}e^3$
        
    - **Lower ($x = 1$):** $\frac{1}{3}(1)^3 \ln(1) - \frac{1}{9}(1)^3 = 0 - \frac{1}{9} = -\frac{1}{9}$
        
        $$\text{Total} = \left(\frac{2}{9}e^3\right) - \left(-\frac{1}{9}\right) = \frac{2e^3 + 1}{9} \approx 4.5706$$
        

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil & Structural Engineering (Finite Element Method & Localized Stress Profiling)]]
[[Civil & Structural Engineering (Finite Element Method & Localized Stress Profiling) Solution]]


### Engineering Problem 2: [[Electrical Engineering (Fourier Analysis of AC Signal Power Surges)]]
[[Electrical Engineering (Fourier Analysis of AC Signal Power Surges) Solution]]
