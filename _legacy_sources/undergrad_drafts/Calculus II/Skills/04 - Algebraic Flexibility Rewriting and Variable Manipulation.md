# Skill 2: Algebraic Flexibility — Rewriting and Variable Manipulation

## 1. Guided Notes: The Core Philosophy of Skill 2

Integrals in the real world rarely arrive perfectly configured for a basic substitution. Often, the "inner function" or its "derivative partner" is visually obscured. To uncover them, you must develop **Algebraic Flexibility**, which primarily manifests in two ways:

### Sub-Technique A: Rewriting the Integrand Upfront

Sometimes, a standard choice of $u$ fails because its exact derivative is nowhere to be found in the integrand. When this happens, you must use algebraic or trigonometric identities to alter the appearance of the expression _before_ attempting a substitution.

- For example, recognizing exponential relationships like $e^{2x} = (e^x)^2$ allows you to transform a confusing denominator into a recognizable geometric or inverse trigonometric pattern.
    

### Sub-Technique B: Back-Substitution (Variable Manipulation)

The explicit goal of $u$-substitution is to rewrite the _entire_ integrand completely in terms of $u$ and $du$. However, you will frequently encounter cases where, after substituting $u$ and $du$, you are still left with an "extra" $x$ variable floating around.

- Instead of giving up, you can use algebra to **manipulate your original substitution equation**. By isolating and solving for $x$ in terms of $u$, you can perform a "back-substitution" to eliminate the remaining $x$ terms.
    

## 2. Standard Sample Problems

### Sample Problem 1: Rewriting Upfront

Evaluate the following indefinite integral:

$$\int \frac{e^x}{1 + e^{2x}} \, dx$$

#### Step-by-Step Solution:

- **Step 1: Rewrite the integrand.** Direct substitution of the denominator ($u = 1 + e^{2x}$) leaves us with a $du$ that does not exist in the numerator. Instead, rewrite the exponential term in the denominator:
    
    $$\int \frac{e^x}{1 + (e^x)^2} \, dx \text{}$$
    
- Step 2: Choose $u$ and find $du$ . Now, the inner function $e^x$ is apparent. Let $u = e^x$ Then $du = e^x \, dx$
    
- Step 3: Substitute into the integral.
    
    $$\int \frac{1}{1 + u^2} \, du \text{}$$
    
- **Step 4: Integrate and substitute back.** This matches the standard inverse tangent derivative rule:
    
    $$\int \frac{1}{1 + u^2} \, du = \tan^{-1}(u) + C$$
    
    $$\quad = \tan^{-1}(e^x) + C$$
    

### Sample Problem 2: Variable Manipulation (Back-Substitution)

Evaluate the following indefinite integral:

$$\int x\sqrt{x + 2} \, dx$$

#### Step-by-Step Solution:

- **Step 1: Choose $u$ and find $du$.** Let $u = x + 2$
    
    Then $du = dx$
    
- **Step 2: Isolate $x$ to handle the leftover variable.** Substituting $u$ and $du$ leaves the front $x$ untouched. We must manipulate our $u$ equation to solve for $x$:
    
    $$u = x + 2 \implies x = u - 2$$
    
- **Step 3: Substitute everything back into the integral.**
    
    $$\int \underbrace{(u - 2)}_{x} \cdot \underbrace{u^{1/2}}_{\sqrt{x+2}} \, \underbrace{du}{dx}$$
    
- **Step 4: Distribute and integrate.**
    
    $$\int (u^{3/2} - 2u^{1/2}) \, du$$
    
    Using the power rule:
    
    $$\frac{2}{5}u^{5/2} - 2\left(\frac{2}{3}u^{3/2}\right) + C = \frac{2}{5}u^{5/2} - \frac{4}{3}u^{3/2} + C$$
    
- **Step 5: Return to the original variable $x$.**
    
    $$\frac{2}{5}(x + 2)^{5/2} - \frac{4}{3}(x + 2)^{3/2} + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering — Non-linear Power Dissipation]]
[[Electrical Engineering — Non-linear Power Dissipation Solution]]

### Engineering Problem 2: [[Aerospace Engineering — Thermal Damping Wave Propagation]]
[[Aerospace Engineering — Thermal Damping Wave Propagation Solution]]
