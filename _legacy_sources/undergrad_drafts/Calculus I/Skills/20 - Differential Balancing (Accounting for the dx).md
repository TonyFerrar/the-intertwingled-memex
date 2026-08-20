# Skill 2: Differential Balancing (Accounting for the $dx$)

## Conceptual Notes

Once you have selected the correct target $u$, the most common pitfall is treating the differential $dx$ as a passive label rather than an active algebraic variable. **Differential Balancing** is the skill of computing the exact mathematical relationship between $du$ and $dx$, and then manipulating constants to ensure the remaining parts of the integrand match your differential package perfectly.

When you differentiate $u = g(x)$, you get $du = g'(x)dx$. In the real world, the "child" derivative $g'(x)$ inside the integral is frequently missing a constant multiplier. Because constants can freely move across the integral sign ($\int c \cdot f(x)dx = c \int f(x)dx$), you can balance the differential equation by isolating the exact variable expression found in your integrand.

### The Balancing Rule

If your computed $du$ has an extra constant compared to what is inside the integral, **divide or multiply both sides of the differential equation** to isolate the exact variable group present in the integrand before executing the substitution.

## Sample Problems (From the Guided Notes)

### Sample Problem 1: Introducing a Fraction

**Problem:** Evaluate $\int x\sin(2x^2)\,dx$

**Structural Analysis:** We choose the inner function of the sine argument as our target: $u = 2x^2$. When we take its derivative, we generate a constant multiplier that is not present in our original function.

**Solution:**

1. Identify the target $u$:
    
    $$u = 2x^2$$
    
2. Compute the differential $du$:
    
    $$\frac{du}{dx} = 4x \implies du = 4x\,dx$$
    
3. **Balance the Differential:** The integrand only contains $x\,dx$, not $4x\,dx$. Move the $4$ to the $du$ side using algebra:
    
    $$\frac{1}{4}du = x\,dx$$
    
4. Substitute both pieces into the integral:
    
    $$\int \sin(2x^2) \cdot \underbrace{x\,dx}_{\frac{1}{4}du} = \int \sin(u) \cdot \frac{1}{4}du$$
    
5. Factor out the constant, integrate, and revert back to $x$:
    
    $$\frac{1}{4}\int \sin(u)\,du = \frac{1}{4}(-\cos(u)) + C = -\frac{1}{4}\cos(2x^2) + C$$
    

### Sample Problem 2: Handling Negative Constants

**Problem:** Evaluate $\int e^{-7x}\,dx$

**Structural Analysis:** The inner core function is $u = -7x$. Its derivative introduces a negative constant that must be balanced out to isolate the standalone $dx$ hanging at the end of the expression.

**Solution:**

1. Identify the target $u$:
    
    $$u = -7x$$
    
2. Compute the differential $du$:
    
    $$du = -7\,dx$$
    
3. **Balance the Differential:** Isolate the $dx$ to match the integrand:
    
    $$-\frac{1}{7}du = dx$$
    
4. Substitute into the integral:
    
    $$\int e^u \cdot \left(-\frac{1}{7}du\right) = -\frac{1}{7}\int e^u\,du$$
    
5. Integrate and revert to $x$:
    
    $$-\frac{1}{7}e^u + C = -\frac{1}{7}e^{-7x} + C$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Total Aerodynamic Drag Force on a Hypersonic Wing Section]]
[[Total Aerodynamic Drag Force on a Hypersonic Wing Section Solution]]


### Engineering Problem 2: [[Thermal Energy Dissipation in a Gas Turbine Blade]]
[[Thermal Energy Dissipation in a Gas Turbine Blade Solution]]
