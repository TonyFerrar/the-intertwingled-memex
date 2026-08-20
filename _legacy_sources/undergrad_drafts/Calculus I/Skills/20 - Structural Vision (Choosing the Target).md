# Skill 1: Structural Vision (Choosing the Target $u$)

## Conceptual Notes

The core hurdle in mastering the Substitution Rule is **Structural Vision**—the ability to look at a complicated integrand and recognize it as a composite function $f(g(x))$ multiplied by the derivative of its inner function, $g'(x)$. Instead of viewing an integral as a long string of separate algebraic symbols, you must train your eyes to scan for two primary components:

1. **The Target (The Inner Function, $u$):** This is typically a function trapped inside another operation, such as an expression under a radical, inside a trigonometric function, within a denominator, or up in an exponent.
    
2. **The Derivative Package ($du$):** This is the "clue" or footprint left behind by the Chain Rule. It is the derivative of your inner function, sitting elsewhere in the integrand, waiting to be paired with $dx$.
    

### The Speed-Match Framework

When selecting your target $u$, remember these crucial visual indicators:

- **The "Radical Block":** If you see $\sqrt[n]{g(x)}$, check if $g'(x)$ is outside.
    
- **The "Trig Argument":** If you see $\sin(g(x))$ or $\cos(g(x))$, check if $g'(x)$ acts as a multiplier.
    
- **The "Exponent Core":** If you see $e^{g(x)}$ or $a^{g(x)}$, check if $g'(x)$ matches the outer polynomial multiplier.
    

## Sample Problems (From the Guided Notes)

### Sample Problem 1: The Radical Block

**Problem:** Evaluate $\int 2x\sqrt{x^2-9}\,dx$

**Structural Analysis:** Scanning the integrand, we see the polynomial $x^2-9$ trapped inside a square root. Its derivative is $2x$, which sits perfectly on the outside. This is a clean structural match.

**Solution:**

1. Set the inner function as $u$:
    
    $$u = x^2-9$$
    
2. Compute the differential $du$:
    
    $$\frac{du}{dx} = 2x \implies du = 2x\,dx$$
    
3. Substitute $u$ and $du$ into the integral:
    
    $$\int \sqrt{u}\,du = \int u^{1/2}\,du$$
    
4. Integrate using the Power Rule:
    
    $$\frac{2}{3}u^{3/2} + C$$
    
5. Revert back to the $x$-domain:
    
    $$\frac{2}{3}(x^2-9)^{3/2} + C$$
    

### Sample Problem 2: The Trig Argument

**Problem:** Evaluate $\int x\sin(2x^2)\,dx$

**Structural Analysis:** The inner function is inside the sine argument: $2x^2$. Its derivative is $4x$. While we only have an $x$ outside the sine function rather than a $4x$, the variable degrees match perfectly ($x^1$), meaning a basic constant adjustment will balance the structure.

**Solution:**

1. Choose the target $u$:
    
    $$u = 2x^2$$
    
2. Compute $du$:
    
    $$du = 4x\,dx \implies \frac{1}{4}du = x\,dx$$
    
3. Substitute into the integral:
    
    $$\int \sin(u) \cdot \left(\frac{1}{4}du\right) = \frac{1}{4}\int \sin(u)\,du$$
    
4. Integrate:
    
    $$\frac{1}{4}(-\cos(u)) + C = -\frac{1}{4}\cos(u) + C$$
    
5. Revert back to $x$:
    
    $$-\frac{1}{4}\cos(2x^2) + C$$
    

### Sample Problem 3: The Exponent Core

**Problem:** Evaluate $\int e^{-7x}\,dx$

**Structural Analysis:** The inner function is the linear exponent $-7x$. Its derivative is simply a constant, $-7$. Since constants can always be balanced, this is a prime candidate for a basic $u$-substitution.

**Solution:**

1. Choose the target $u$:
    
    $$u = -7x$$
    
2. Compute $du$:
    
    $$du = -7\,dx \implies -\frac{1}{7}du = dx$$
    
3. Substitute:
    
    $$\int e^u \left(-\frac{1}{7}du\right) = -\frac{1}{7}\int e^u\,du$$
    
4. Integrate and substitute back:
    
    $$-\frac{1}{7}e^u + C = -\frac{1}{7}e^{-7x} + C$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Transient Current in an Electrical Circuit]]
[[Transient Current in an Electrical Circuit Solution]]


### Engineering Problem 2: [[Volumetric Flow Rate in a Jet Engine Fuel Line]]
[[Volumetric Flow Rate in a Jet Engine Fuel Line Solution]]
