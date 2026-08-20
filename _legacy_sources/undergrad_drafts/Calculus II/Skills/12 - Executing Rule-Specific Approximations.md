# Skill 2: Executing Rule-Specific Approximations

Once an interval has been successfully partitioned into discrete slices, the next step is to apply a specific numerical method to estimate the total area under the curve. Different rules treat the top boundary of each slice differently—ranging from flat rectangular tops to sloped lines and parabolic curves.

## Conceptual Notes

### **1. The Midpoint Rule, $M(n)$**

- **Core Concept:** This method approximates the region under a curve using a series of horizontal rectangles.
    
- **Height Evaluation:** The height of each rectangle is determined by evaluating the function exactly at the center point ($c_k$) of each subinterval.
    
- **Formula:**
    
    $$M(n) = \sum_{k=1}^{n} f(c_k)\Delta x \quad \text{[cite: 87]}$$
    
    Where $\Delta x = \frac{b-a}{n}$ and the midpoints are calculated as $c_k = a + (k-\frac{1}{2})\Delta x$ for $k \in \{1, 2, \dots, n\}$.
    

### **2. The Trapezoidal Rule, $T(n)$**

- **Core Concept:** This method connects the evaluated grid points with straight, sloped lines, creating a series of trapezoids underneath the curve.
    
- **Height Evaluation:** The rule evaluates the function at the subinterval endpoints ($x_k$).
    
- **Formula:**
    
    $$T(n) = \frac{\Delta x}{2}(y_0 + 2y_1 + 2y_2 + \dots + 2y_{n-1} + y_n) \quad \text{[cite: 120]}$$
    
    Where $\Delta x = \frac{b-a}{n}$ , $x_k = a + k\Delta x$ , and $y_k = f(x_k)$. Notice that the interior y-values are multiplied by 2 because they form a shared wall between two adjacent trapezoids.
    

### **3. Simpson's Rule, $S(n)$**

- **Core Concept:** Instead of using straight lines, Simpson's Rule models the top edge of the slices using quadratic curves (parabolas). This generally makes it much more accurate than the Midpoint or Trapezoidal rules.
    
- **Strict Constraint:** The number of subintervals ($n$) **must be an even number** ($n \ge 2$).
    
- **Formula:**
    
    $$S(n) = \frac{\Delta x}{3}(y_0 + 4y_1 + 2y_2 + 4y_3 + \dots + 2y_{n-2} + 4y_{n-1} + y_n) \quad \text{[cite: 158]}$$
    
    Where $\Delta x = \frac{b-a}{n}$ and the coefficients follow a strict alternating pattern of **1, 4, 2, 4, 2, ..., 4, 1**.
    

## Pure Mathematics Sample Problems

### **Sample Problem 1: Trapezoidal Rule**

**Problem:** Use the Trapezoidal Rule with $n = 4$ to approximate $\int_{1}^{3} x^2 \, dx$.

**Step-by-Step Solution:**

1. **Find $\Delta x$ and grid points:**
    
    $$\Delta x = \frac{3 - 1}{4} = 0.5$$
    
    The grid points are: $x_0 = 1.0$, $x_1 = 1.5$, $x_2 = 2.0$, $x_3 = 2.5$, $x_4 = 3.0$.
    
2. **Evaluate the function $f(x) = x^2$ at each point:**
    
    - $y_0 = (1.0)^2 = 1.0$
        
    - $y_1 = (1.5)^2 = 2.25$
        
    - $y_2 = (2.0)^2 = 4.0$
        
    - $y_3 = (2.5)^2 = 6.25$
        
    - $y_4 = (3.0)^2 = 9.0$
        
3. **Apply the Trapezoidal formula:**
    
    $$T(4) = \frac{0.5}{2} \left[ 1.0 + 2(2.25) + 2(4.0) + 2(6.25) + 9.0 \right]$$
    
    $$T(4) = 0.25 \left[ 1.0 + 4.5 + 8.0 + 12.5 + 9.0 \right]$$
    
    $$T(4) = 0.25 \left[ 35 \right] = 8.75$$
    

### **Sample Problem 2: Simpson's Rule**

**Problem:** Use Simpson's Rule with $n = 4$ to approximate $\int_{0}^{2} x^3 \, dx$.

**Step-by-Step Solution:**

1. **Find $\Delta x$ and grid points ($n=4$ is even, so this is valid):**
    
    $$\Delta x = \frac{2 - 0}{4} = 0.5$$
    
    The grid points are: $x_0 = 0.0$, $x_1 = 0.5$, $x_2 = 1.0$, $x_3 = 1.5$, $x_4 = 2.0$.
    
2. **Evaluate the function $f(x) = x^3$ at each point:**
    
    - $y_0 = (0.0)^3 = 0.0$
        
    - $y_1 = (0.5)^3 = 0.125$
        
    - $y_2 = (1.0)^3 = 1.0$
        
    - $y_3 = (1.5)^3 = 3.375$
        
    - $y_4 = (2.0)^3 = 8.0$
        
3. **Apply the Simpson's Rule formula (1, 4, 2, 4, 1 pattern):**
    
    $$S(4) = \frac{0.5}{3} \left[ 0.0 + 4(0.125) + 2(1.0) + 4(3.375) + 8.0 \right]$$
    
    $$S(4) = \frac{1}{6} \left[ 0.0 + 0.5 + 2.0 + 13.5 + 8.0 \right]$$
    
    $$S(4) = \frac{1}{6} \left[ 24 \right] = 4$$
    

## Real-Life Engineering Application Problems

### **Engineering Problem 1: [[Naval Architecture Hull Displacement (Simpson's Rule)]]**
[[Naval Architecture Hull Displacement (Simpson's Rule) Solution]]


### **Engineering Problem 2: [[Electrical Engineering Power Management (Trapezoidal Rule)]]**
[[Electrical Engineering Power Management (Trapezoidal Rule) Solution]]
