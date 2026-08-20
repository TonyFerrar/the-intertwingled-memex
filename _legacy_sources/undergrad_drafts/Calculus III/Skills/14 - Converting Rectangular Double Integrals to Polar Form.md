# Skill 2: Convert Rectangular Double Integrals to Polar Coordinates

## 1. Theoretical Notes & Core Concepts

### The Need for Transformation

Evaluating double integrals in rectangular coordinates ($x$ and $y$) can be exceedingly difficult when the boundaries involve circles, ellipses, or lines passing through the origin at angles. Even when the region is simple, the integrand itself might contain expressions like $\sqrt{x^2+y^2}$ or $(x^2+y^2)^n$, which lead to tedious trigonometric substitutions in standard single-variable calculus.

Converting the integral into polar coordinates ($r$ and $\theta$) fundamentally re-aligns the integration path to match the radial symmetry of the mathematical problem, changing variable boundaries into constant limits.

### The Complete 3-Step Conversion Process

To perfectly convert a rectangular double integral into a polar double integral, you must systematically modify three distinct pieces of the integral:

1. **Transform the Coordinates (Variables):**
    
    Every instance of the independent rectangular variables must be substituted using the fundamental polar relationships:
    
    $$x = r \cos \theta$$
    
    $$y = r \sin \theta$$
    
2. **Simplify the Expressions (Algebraic Identity):**
    
    Look for the specific algebraic pairing $x^2 + y^2$. Using the Pythagorean identity, replace it instantly:
    
    $$x^2 + y^2 = r^2$$
    
3. **Change the Area Element (The Jacobian Factor):**
    
    The rectangular area differential $dA = dx \, dy$ (or $dy \, dx$) does not map directly into $dr \, d\theta$. Because an infinitesimal polar wedge expands in width as it moves further from the origin, its arc length is defined by $r \, d\theta$. Therefore, the area element requires an additional scaling factor, known as the **Jacobian**:
    
    $$dA = r \, dr \, d\theta$$
    
    _Crucial Warning: Forgetting to insert the extra factor of $r$ into the integrand is the single most common mathematical error made when applying this skill._
    

## 2. Standard Practice Problems

### Problem 1: Converting a Complex Radical Integrand

**Statement:** Convert the following rectangular double integral into polar coordinates and evaluate it:

$$\int_{0}^{2} \int_{0}^{\sqrt{4-x^2}} e^{-(x^2+y^2)} \, dy \, dx$$

#### Solution:

1. **Analyze and Map the Bounds:**
    
    - The inner limits show $y$ ranges from $0$ up to the circle $y = \sqrt{4-x^2}$ ($x^2 + y^2 = 4$). This is a circle of radius $R = 2$.
        
    - The outer limits show $x$ ranges from $0$ to $2$.
        
    - Combined, this defines a **quarter-disk in the first quadrant**.
        
2. **Translate to Polar Limits:**
    
    - Radial sweep: The region begins at the origin and pushes out to the edge of the disk: $0 \le r \le 2$.
        
    - Angular sweep: The first quadrant is bound by the positive axes: $0 \le \theta \le \frac{\pi}{2}$.
        
3. **Substitute into the Integrand and Differential:**
    
    - Replace $x^2 + y^2$ with $r^2 \implies e^{-(x^2+y^2)} \to e^{-r^2}$.
        
    - Replace $dy \, dx$ with $r \, dr \, d\theta$.
        
4. **Construct and Evaluate the Polar Integral:**
    
    $$I = \int_{0}^{\frac{\pi}{2}} \int_{0}^{2} e^{-r^2} \cdot r \, dr \, d\theta$$
    
    - Use $u$-substitution for the inner integral: Let $u = -r^2$, then $du = -2r \, dr \implies r \, dr = -\frac{1}{2}du$.
        
    - Changing bounds for $r$: when $r=0 \implies u=0$; when $r=2 \implies u=-4$.
        
        $$\int_{0}^{-4} -\frac{1}{2}e^u \, du = \left[ -\frac{1}{2}e^u \right]_{0}^{-4} = -\frac{1}{2}e^{-4} - \left(-\frac{1}{2}e^0\right) = \frac{1}{2}\left(1 - e^{-4}\right)$$
        
    - Integrate with respect to $\theta$:
        
        $$I = \int_{0}^{\frac{\pi}{2}} \frac{1}{2}\left(1 - e^{-4}\right) d\theta = \left[ \frac{1}{2}\left(1 - e^{-4}\right)\theta \right]_{0}^{\frac{\pi}{2}} = \frac{\pi}{4}\left(1 - e^{-4}\right)$$
        

### Problem 2: Handling Shifted Limits

**Statement:** Setup the polar coordinates conversion for the integral of a function $f(x,y) = x$ over a region bounded in the upper half-plane by $y = 0$ and the semi-circle $y = \sqrt{9-x^2}$.

#### Solution:

1. **Analyze the Region:**
    
    - The boundary $y = \sqrt{9-x^2}$ establishes a circle of radius $3$.
        
    - Since $y$ starts at $0$ and goes up to this positive radical, it represents the entire **upper semicircle**.
        
2. **Determine Polar Bounds:**
    
    - Radial sweep: From the center to the outer perimeter: $0 \le r \le 3$.
        
    - Angular sweep: Covering the first and second quadrants continuously: $0 \le \theta \le \pi$.
        
3. **Transform the Components:**
    
    - The integrand function is $x \to r \cos \theta$.
        
    - The differential area is $dA \to r \, dr \, d\theta$.
        
4. **Final Set Up:**
    
    $$\int_{0}^{\pi} \int_{0}^{3} (r \cos \theta) \cdot r \, dr \, d\theta = \int_{0}^{\pi} \int_{0}^{3} r^2 \cos \theta \, dr \, d\theta$$
    

## 3. Real-Life Engineering Application Problems

### Problem 3: [[Chemical & Fluids Engineering – Laminar Volumetric Flow Rate in a Pipe]]
[[Chemical & Fluids Engineering – Laminar Volumetric Flow Rate in a Pipe Solution]]


### Problem 4: [[Mechanical Engineering – Torsional Shear Stress in a Drive Shaft]]
