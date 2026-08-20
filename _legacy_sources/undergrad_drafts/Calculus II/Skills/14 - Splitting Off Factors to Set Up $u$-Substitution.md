# Skill 2: Splitting Off Factors to Set Up $u$-Substitution

## 1. Explanatory Notes

When integrating products or powers of trigonometric functions, standard integration formulas cannot always be applied directly. **Skill 2** focuses on strategically breaking apart an integrand to isolate a specific single or squared factor. This isolated factor is deliberately saved to serve as the differential ($du$) component for a future $u$-substitution.

The choice of which factor to split off depends on the relationship between the powers of the trigonometric functions involved:

### Case A: Products of Sines and Cosines (Odd Powers)

If the power of sine ($m$) is an odd, positive integer, you can split off a single factor of $\sin(x)$. This leaves behind an even power of sine, which is easily rewritten in terms of $\cos(x)$ using the Pythagorean identity $\sin^2(x) = 1 - \cos^2(x)$. This prepares the entire integrand for a clean substitution where $u = \cos(x)$ and $du = -\sin(x)dx$. _(Note: If the power of cosine is odd, the exact same logic applies conversely: split off a $\cos(x)$ factor and let $u = \sin(x)$)._

### Case B: Products of Tangents and Secants (Even Secant Powers)

If the power of secant ($n$) is an even, positive integer, you can split off a factor of $\sec^2(x)$. Because the derivative of tangent is secant-squared, this saved factor serves perfectly as your $du$. The remaining even powers of secant are then converted into tangents using the identity $\sec^2(x) = \tan^2(x) + 1$ to set up the substitution $u = \tan(x)$.

### Case C: Products of Tangents and Secants (Odd Tangent Powers)

If the power of tangent ($m$) is an odd, positive integer, you can split off a combined factor of $\sec(x)\tan(x)$. Because the derivative of secant is secant-tangent, this isolated piece becomes your $du$. The remaining even powers of tangent are converted into secants via $\tan^2(x) = \sec^2(x) - 1$, setting up a substitution where $u = \sec(x)$.

## 2. Pure Math Sample Problems

### Sample Problem 1 (Odd Sine Power)

Evaluate the following indefinite integral:

$$\int \sin^5(x)\cos^2(x) \, dx$$

**Solution:**

1. **Split off one factor** of $\sin(x)$ from the odd power:
    
    $$\int \sin^4(x)\cos^2(x) \cdot \sin(x) \, dx$$
    
2. **Rewrite the remaining even power** of sine as $(\sin^2(x))^2$ and apply the Pythagorean identity:
    
    $$\int (1 - \cos^2(x))^2 \cos^2(x) \cdot \sin(x) \, dx$$
    
3. **Execute the $u$-substitution** where $u = \cos(x)$ and $du = -\sin(x)dx$ (which means $-du = \sin(x)dx$):
    
    $$\int (1 - u^2)^2 \cdot u^2 \cdot (-du)$$
    
4. **Expand the integrand** completely before integrating:
    
    $$-\int (1 - 2u^2 + u^4) \cdot u^2 \, du = \int (-u^2 + 2u^4 - u^6) \, du$$
    
5. **Integrate term-by-term** and substitute back $u = \cos(x)$:
    
    $$-\frac{1}{3}\cos^3(x) + \frac{2}{5}\cos^5(x) - \frac{1}{7}\cos^7(x) + C$$
    

### Sample Problem 2 (Even Secant Power)

Evaluate the following indefinite integral:

$$\int \tan^3(x)\sec^4(x) \, dx$$

**Solution:**

1. **Split off a factor** of $\sec^2(x)$ to serve as the derivative term:
    
    $$\int \tan^3(x)\sec^2(x) \cdot \sec^2(x) \, dx$$
    
2. **Convert the remaining** $\sec^2(x)$ into tangent terms using the identity $\sec^2(x) = \tan^2(x) + 1$:
    
    $$\int \tan^3(x)(\tan^2(x) + 1) \cdot \sec^2(x) \, dx$$
    
3. **Execute the $u$-substitution** where $u = \tan(x)$ and $du = \sec^2(x)dx$:
    
    $$\int u^3(u^2 + 1) \, du = \int (u^5 + u^3) \, du$$
    
4. **Integrate and back-substitute** $u = \tan(x)$ to find the final answer:
    
    $$\frac{1}{6}\tan^6(x) + \frac{1}{4}\tan^4(x) + C$$
    

## 3. Real-Life Engineering Application Problems

### Engineering Problem 1: [[Electrical Engineering (Total Harmonic Distortion Energy)]]
[[Electrical Engineering (Total Harmonic Distortion Energy) Solution]]

### Engineering Problem 2: [[Mechanical Engineering (Friction Work in Variable Geometric Links)]]
[[Mechanical Engineering (Friction Work in Variable Geometric Links) Solution]]
