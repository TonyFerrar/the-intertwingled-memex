# Skill 3: Evaluate Integrals Over Circular or Radially Symmetric Regions

## 1. Theoretical Notes & Core Concepts

### Maximizing Efficiency in Evaluation

Once a double integral has been successfully set up or converted into polar coordinates, the final step is strategic evaluation. Polar coordinates don't just clear away algebraic radicals—they frequently unlock powerful shortcut behaviors due to the nature of constant boundary intervals. Knowing how to spot these mathematical structures saves significant computational time and prevents algebraic errors.

### Exploiting Separability (The Fubini Shortcut)

When integrating over a **polar rectangle** (a region where all four limits for $r$ and $\theta$ are completely constant numbers), you should check if the integrand function is **separable**.

If the integrand $f(r, \theta)$ can be factored completely into a function of only $r$ multiplied by a function of only $\theta$:

$$f(r, \theta) = g(r) \cdot h(\theta)$$

Then, according to Fubini's Theorem, the single double integral can be split into the **product of two independent single-variable integrals**:

$$\int_{\alpha}^{\beta} \int_{a}^{b} g(r) \cdot h(\theta) \cdot r \, dr \, d\theta = \left( \int_{\alpha}^{\beta} h(\theta) \, d\theta \right) \times \left( \int_{a}^{b} g(r) \cdot r \, dr \right)$$

_Crucial Warning: This shortcut only works if **both** the integration limits are constants AND the functions are multiplied together. If the limits contain functions (like $r = \sin\theta$) or the integrand is added (like $r + \sin\theta$), you must integrate nestedly from the inside out._

## 2. Standard Practice Problems

### Problem 1: Evaluating via Separability

**Statement:** Evaluate the double integral $I = \iint_R r^2 \sin\theta \, dA$ over the region $R$ defined by $0 \le r \le 2$ and $0 \le \theta \le \pi$.

#### Solution:

1. **Identify the Components:** * The bounds are purely constant numbers ($r \in [0,2]$ and $\theta \in [0,\pi]$).
    
    - The full integrand (remembering the Jacobian $r$) is: $(r^2 \sin\theta) \cdot r = r^3 \sin\theta$.
        
    - This function is perfectly separable: $g(r) = r^3$ and $h(\theta) = \sin\theta$.
        
2. **Split into Product Form:**
    
    $$I = \left( \int_{0}^{\pi} \sin\theta \, d\theta \right) \times \left( \int_{0}^{2} r^3 \, dr \right)$$
    
3. **Evaluate Each Piece Individually:**
    
    - $\theta$-Integral: $\int_{0}^{\pi} \sin\theta \, d\theta = [-\cos\theta]_{0}^{\pi} = (-\cos\pi) - (-\cos0) = 1 + 1 = 2$
        
    - $r$-Integral: $\int_{0}^{2} r^3 \, dr = \left[ \frac{1}{4}r^4 \right]_{0}^{2} = \frac{1}{4}(16) - 0 = 4$
        
4. **Multiply the Results:**
    
    $$I = 2 \times 4 = 8$$
    

### Problem 2: Inside-Out Nested Evaluation (Non-Separable Region)

**Statement:** Evaluate the area of the region enclosed by the cardioid curve $r = 1 + \cos\theta$ for $0 \le \theta \le 2\pi$.

#### Solution:

1. **Analyze Limits:** * Radial sweep: Starts at the origin and expands out to the variable boundary function: $0 \le r \le 1 + \cos\theta$.
    
    - Angular sweep: A full $360^{\circ}$ rotation: $0 \le \theta \le 2\pi$.
        
    - _Because the upper radial bound is a function of $\theta$, this cannot be split; it must be solved sequentially._
        
2. **Set Up and Solve Inner Integral ($r$):**
    
    $$\int_{0}^{2\pi} \int_{0}^{1+\cos\theta} r \, dr \, d\theta = \int_{0}^{2\pi} \left[ \frac{1}{2}r^2 \right]_{0}^{1+\cos\theta} d\theta = \frac{1}{2} \int_{0}^{2\pi} (1 + \cos\theta)^2 \, d\theta$$
    
3. **Expand and Prepare Outer Integral ($\theta$):**
    
    $$\frac{1}{2} \int_{0}^{2\pi} \left(1 + 2\cos\theta + \cos^2\theta\right) d\theta$$
    
    Use the half-angle identity $\cos^2\theta = \frac{1+\cos(2\theta)}{2}$:
    
    $$\frac{1}{2} \int_{0}^{2\pi} \left(1 + 2\cos\theta + \frac{1}{2} + \frac{1}{2}\cos(2\theta)\right) d\theta = \frac{1}{2} \int_{0}^{2\pi} \left(\frac{3}{2} + 2\cos\theta + \frac{1}{2}\cos(2\theta)\right) d\theta$$
    
4. **Evaluate Final Integral:**
    
    $$\frac{1}{2} \left[ \frac{3}{2}\theta + 2\sin\theta + \frac{1}{4}\sin(2\theta) \right]_{0}^{2\pi} = \frac{1}{2} \left( \left(\frac{3}{2}(2\pi) + 0 + 0\right) - (0) \right) = \frac{3\pi}{2}$$
    

## 3. Real-Life Engineering Application Problems

### Problem 3: [[Aerospace Engineering – Rotational Inertia of a Variable-Density Flywheel]]
[[Aerospace Engineering – Rotational Inertia of a Variable-Density Flywheel Solution]]

### Problem 4: [[Civil Engineering – Bending Resistance of a Hollow Circular Column]]
[[Civil Engineering – Bending Resistance of a Hollow Circular Column Solution]]
