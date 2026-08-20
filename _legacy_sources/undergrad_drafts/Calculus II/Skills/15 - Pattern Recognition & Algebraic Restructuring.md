# Skill 1: Pattern Recognition & Algebraic Restructuring

Trigonometric substitution is a powerful technique, but its success relies entirely on your ability to look at an algebraic expression, identify its underlying geometric pattern, and restructure it into a format that matches a known trigonometric identity.

## 1. Core Explanational Notes

### The Three Basic Substitution Patterns

When evaluating an integral containing a sum or difference of squares where standard $u$-substitution fails, you must map the expression to one of three primary cases:

|**Case Type**|**Algebraic Expression**|**Trigonometric Substitution**|**Underlying Identity**|**Reference Triangle Mapping**|
|---|---|---|---|---|
|**Case 1**|$\sqrt{a^2 - x^2}$|$x = a\sin\theta$|$1 - \sin^2\theta = \cos^2\theta$|Hypotenuse = $a$, Opposite = $x$|
|**Case 2**|$\sqrt{x^2 + a^2}$|$x = a\tan\theta$|$\tan^2\theta + 1 = \sec^2\theta$|Adjacent = $a$, Opposite = $x$|
|**Case 3**|$\sqrt{x^2 - a^2}$|$x = a\sec\theta$|$\sec^2\theta - 1 = \tan^2\theta$|Hypotenuse = $x$, Adjacent = $a$|

### The Power of "Completing the Square"

Integrals encountered in real-world design rarely present themselves in a clean $x^2 \pm a^2$ format. When an integrand contains a quadratic trinomial ($Ax^2 + Bx + C$), you must use the algebraic restructuring technique of **completing the square** to isolate a perfect square binomial ($u^2$) alongside a constant ($a^2$).

As demonstrated in the core curriculum notes for expressions like $\sqrt{x^2+10x+26}$, adding and subtracting the square of half the linear coefficient allows you to transform a chaotic polynomial into a clear Case 2 structure: $\sqrt{(x+5)^2 + 1}$.

## 2. Sample Pure-Math Problems

### Sample Problem 1: Pattern Restructuring with Coefficients

**Evaluate the integral:**

$$\int \frac{1}{\sqrt{9x^2 + 25}} \, dx$$

#### Step-by-Step Solution:

1. **Identify the pattern:** The terms inside the radical represent a sum of squares, pointing directly toward a **Case 2 (Tangent)** substitution. However, the $x^2$ term has a coefficient of **9**.
    
2. **Restructure algebraically:** Rewrite the terms inside the radical to explicitly reveal the perfect squares:
    
    $$9x^2 + 25 = (3x)^2 + (5)^2$$
    
3. **Set up the substitution:** Let the variable expression equal the constant times the tangent function:
    
    $$3x = 5\tan\theta \implies x = \frac{5}{3}\tan\theta$$
    
    $$dx = \frac{5}{3}\sec^2\theta \, d\theta$$
    
4. **Substitute and Simplify:**
    
    $$\sqrt{9x^2 + 25} = \sqrt{(5\tan\theta)^2 + 25} = \sqrt{25(\tan^2\theta + 1)} = 5\sec\theta$$
    
    Now substitute everything back into the integral:
    
    $$\int \frac{1}{5\sec\theta} \cdot \left(\frac{5}{3}\sec^2\theta \, d\theta\right) = \frac{1}{3}\int \sec\theta \, d\theta$$
    
5. **Integrate:**
    
    $$\frac{1}{3}\ln|\sec\theta + \tan\theta| + C$$
    
6. **Back-Substitute:** Referencing a right triangle where $\tan\theta = \frac{3x}{5}$, the hypotenuse is $\sqrt{9x^2+25}$, yielding $\sec\theta = \frac{\sqrt{9x^2+25}}{5}$:
    
    $$\frac{1}{3}\ln\left| \frac{\sqrt{9x^2 + 25}}{5} + \frac{3x}{5} \right| + C = \frac{1}{3}\ln\left| \sqrt{9x^2 + 25} + 3x \right| + C$$
    

### Sample Problem 2: Restructuring via Completing the Square

**Evaluate the integral:**

$$\int \frac{1}{\sqrt{x^2 - 6x + 13}} \, dx$$

#### Step-by-Step Solution:

1. **Complete the Square:** Isolate the quadratic terms and add/subtract $\left(\frac{-6}{2}\right)^2 = 9$:
    
    $$x^2 - 6x + 13 = (x^2 - 6x + 9) - 9 + 13 = (x - 3)^2 + 4$$
    
2. **Identify the Case:** The restructured radical $\sqrt{(x-3)^2 + 4}$ matches **Case 2** ($\sqrt{u^2 + a^2}$) where $u = x - 3$ and $a = 2$.
    
3. **Execute Substitution:** * Let $x - 3 = 2\tan\theta \implies dx = 2\sec^2\theta \, d\theta$
    
    - The radical becomes $\sqrt{(2\tan\theta)^2 + 4} = 2\sec\theta$
        
4. **Integrate:**
    
    $$\int \frac{2\sec^2\theta \, d\theta}{2\sec\theta} = \int \sec\theta \, d\theta = \ln|\sec\theta + \tan\theta| + C$$
    
5. **Back-Substitute:** Since $\tan\theta = \frac{x-3}{2}$, our reference triangle dictates that $\sec\theta = \frac{\sqrt{(x-3)^2+4}}{2}$:
    
    $$\ln\left| \frac{\sqrt{x^2 - 6x + 13}}{2} + \frac{x - 3}{2} \right| + C = \ln\left| \sqrt{x^2 - 6x + 13} + x - 3 \right| + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Civil Engineering Tunnel Cross-Section Area]]
[[Civil Engineering Tunnel Cross-Section Area Solution]]

### Engineering Problem 2: [[Structural Cable Arc Length under Non-Uniform Load]]
[[Structural Cable Arc Length under Non-Uniform Load Solution]]
