# Skill 3: Precision in Mechanics — Handling Constants, Limits, and Core Rules

## 1. Guided Notes: The Core Philosophy of Skill 3

Even if you possess perfect pattern recognition, a $u$-substitution can fall apart due to minor mechanical errors. Skill 3 focuses on execution precision: managing mismatched constant coefficients, transforming boundaries for definite integrals, and correctly applying final integration rules.

### Sub-Technique A: Substitution by Introducing a Constant

When finding $du$, the derivative of your chosen $u$ will frequently contain a constant multiplier that does not perfectly match the constant sitting in the original integrand. Because constants can be factored out of integrals, you can algebraically manipulate the $du$ equation to introduce the necessary balancing constant factor.

### Sub-Technique B: Transforming Boundaries for Definite Integrals

When evaluating a definite integral using substitution, the original boundaries are explicitly stated in terms of the original variable (e.g., $x = a$ to $x = b$). You must update these limits to $u$-limits immediately upon changing variables.

The fundamental framework for this mechanic requires following these sequential steps:

- **Step 1:** Select an appropriate inner expression for the new variable $u$.
    
- **Step 2:** Differentiate $u$ to calculate $du$ in terms of $x$ and $dx$.
    
- **Step 3:** Substitute all original variables, differentials, and boundary limits into their corresponding $u$ and $du$ representations.
    
- **Step 4:** Compute the newly simplified integral across the updated $u$-boundaries.
    
- **Step 5:** Complete the calculation depending on the integral type:
    
    - For **indefinite integrals**, substitute the original expression back into $u$ and append the constant of integration ($C$).
        
    - For **definite integrals**, evaluate the numerical boundaries directly in terms of $u$; there is no need to revert back to the original variable $x$.
        

## 2. Standard Sample Problem

### Sample Problem: The Definite Constant Adjustment

Evaluate the following definite integral using the mechanics outlined above:

$$\int_{0}^{\frac{\pi}{2}} \sin(2x) \, dx$$

#### Step-by-Step Solution:

- Step 1: Choose $u$ and calculate $du$ . The inner function of the sine expression is $2x$.
    
    $$u = 2x$$
    
    $$du = 2 \, dx$$
    
- Step 2: Balance the constant factor. The original integrand contains only $dx$, not $2 \, dx$. Divide both sides by 2 to balance the differential component:
    
    $$\frac{1}{2} \, du = dx$$
    
- Step 3: Transform the integration limits . Use the boundary tracking formula $u = 2x$ to convert the limits from $x$ to $u$:
    
    - Lower limit: When $x = 0 \implies u = 2(0) = 0$
        
    - Upper limit: When $x = \frac{\pi}{2} \implies u = 2\left(\frac{\pi}{2}\right) = \pi$
        
- Step 4: Rewrite and integrate in terms of $u$ . Substitute the updated limits ($0 \to \pi$), replace $2x$ with $u$, and swap $dx$ for $\frac{1}{2} \, du$:
    
    $$\int_{0}^{\pi} \sin(u) \cdot \frac{1}{2} \, du = \frac{1}{2} \int_{0}^{\pi} \sin(u) \, du$$
    
    The antiderivative of $\sin(u)$ is $-\cos(u)$:
    
    $$\left[ -\frac{1}{2}\cos(u) \right]_{0}^{\pi}$$
    
- Step 5: Numerically evaluate the boundaries . Apply the fundamental integration limits directly to the $u$ terms without reverting back to $x$:
    
    $$\left(-\frac{1}{2}\cos(\pi)\right) - \left(-\frac{1}{2}\cos(0)\right)$$
    
    Knowing $\cos(\pi) = -1$ and $\cos(0) = 1$:
    
    $$\left(-\frac{1}{2} \cdot (-1)\right) + \left(\frac{1}{2} \cdot 1\right) = \frac{1}{2} + \frac{1}{2} = 1$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering — Capacitor Energy Charging]]
[[Electrical Engineering — Capacitor Energy Charging Solution]]

### Engineering Problem 2: [[Nuclear Engineering — Thermal Energy Generation Startup Phase]]
[[Nuclear Engineering — Thermal Energy Generation Startup Phase Solution]]
