# Skill 1: Strategic Selection (The LIATE Rule & The "Invisible 1" Trick)

## Conceptual Notes

The foundational formula for Integration by Parts is derived directly by reversing the Product Rule for differentiation:

$$\int u \, dv = uv - \int v \, du$$

When handed an integral, the core challenge is deciding which part of your integrand represents $u$ and which part represents $dv$. If you choose incorrectly, your secondary integral ($\int v \, du$) can quickly become far more complicated than the original problem. As a general rule of thumb, your choice of $u$ should have a derivative that becomes "simpler" or is easily manageable , while $dv$ must be something you can readily integrate.

### The LIATE Rule

To remove the guesswork from this process, engineers use the **LIATE** rule (developed by Herbert Kasube). This is a strict priority hierarchy for picking your $u$ variable:

1. **L**ogarithmic functions (e.g., $\ln x$)
    
2. **I**nverse trigonometric functions (e.g., $\tan^{-1}x$, $\sin^{-1}x$)
    
3. **A**lgebraic functions (e.g., $x, x^2, 3x^3$)
    
4. **T**rigonometric functions (e.g., $\sin x, \cos x$)
    
5. **E**xponential functions (e.g., $e^x, e^{-2x}$)
    

Whichever function type in your integrand appears **highest** on this list is designated as $u$, and whatever remains (alongside the $dx$) automatically becomes $dv$.

### The "Invisible 1" Trick

Sometimes, an integrand consists of only a single function that you do not know how to integrate directly, such as $\int \ln x \, dx$ or $\int \tan^{-1}x \, dx$. In these scenarios, you can employ a creative workaround: treat the integrand as if it is being multiplied by an invisible 1. By prioritizing the function as $u$ via LIATE, you assign the remaining differential to $dv$ ($dv = 1 \, dx$). This allows you to differentiate the challenging term into a manageable algebraic fraction and integrate the 1 up to an $x$.

## Sample Problems

### Sample Problem 1: Standard LIATE Selection

**Evaluate:**

$$\int x e^{2x} \, dx$$

**Solution:**

1. **Identify the parts:** We have an algebraic term ($x$) and an exponential term ($e^{2x}$). According to LIATE, Algebraic (**A**) outranks Exponential (**E**), so we choose:
    
    - $u = x$
        
    - $dv = e^{2x} \, dx$
        
2. **Compute differentials:**
    
    - $du = dx$
        
    - $v = \int e^{2x} \, dx = \frac{1}{2}e^{2x}$
        
3. **Apply the formula:**
    
    $$\int x e^{2x} \, dx = (x)\left(\frac{1}{2}e^{2x}\right) - \int \left(\frac{1}{2}e^{2x}\right) \, dx$$
    
    $$\int x e^{2x} \, dx = \frac{1}{2}xe^{2x} - \frac{1}{2} \int e^{2x} \, dx$$
    
    $$\int x e^{2x} \, dx = \frac{1}{2}xe^{2x} - \frac{1}{4}e^{2x} + C$$
    

### Sample Problem 2: The "Invisible 1" Trick

**Evaluate:**

$$\int \ln(5x) \, dx$$

**Solution:**

1. **Identify the parts:** We cannot integrate $\ln(5x)$ directly, so we treat the integrand as $\ln(5x) \cdot 1$. Logarithmic (**L**) sits at the absolute top of LIATE:
    
    - $u = \ln(5x)$
        
    - $dv = 1 \, dx$
        
2. **Compute differentials:**
    
    - $du = \frac{1}{5x} \cdot 5 \, dx = \frac{1}{x} \, dx$
        
    - $v = \int 1 \, dx = x$
        
3. **Apply the formula:**
    
    $$\int \ln(5x) \, dx = (\ln(5x))(x) - \int (x)\left(\frac{1}{x} \, dx\right)$$
    
    $$\int \ln(5x) \, dx = x\ln(5x) - \int 1 \, dx$$
    
    $$\int \ln(5x) \, dx = x\ln(5x) - x + C$$
    

## Real-Life Engineering Application Problems

### Engineering Problem 1: [[Signal Processing & Electrical Transients]]
[[Signal Processing & Electrical Transients Solution]]


### Engineering Problem 2: [[Structural Mechanics & Material Centroids]]
[[Structural Mechanics & Material Centroids Solution]]
