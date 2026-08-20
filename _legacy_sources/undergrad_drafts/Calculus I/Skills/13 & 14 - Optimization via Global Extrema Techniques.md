# Skill 3: Optimization via Global Extrema Techniques

Once an objective function has been simplified to a single variable and its physical domain has been established, the final stage is to find and mathematically verify the absolute maximum or minimum value. Relying purely on intuition or an unverified derivative can lead to major design errors. This skill focuses on the execution of the **Closed Interval Method** (utilizing the Extreme Value Theorem) to identify and prove absolute extrema.

## 📘 Key Concepts & Workflow

### 1. Locating Critical Points

Absolute extrema can only occur at the boundaries (endpoints) of a domain or at interior critical points where the rate of change is zero or undefined.

- Find the first derivative of the objective function, $f'(x)$.
    
- Set the derivative equal to zero to find where the slope of the function is completely flat: $f'(x) = 0$.
    
- Check if there are any points where $f'(x)$ is undefined.
    

### 2. The Domain Filter

Before testing your critical points, you must filter them through your context-driven domain. If a mathematical critical point falls outside the physical bounds, it is completely discarded from the analysis.

### 3. The Closed Interval Evaluation Strategy

If your domain is a closed interval $[a, b]$, you do not need to perform a sign chart or a second derivative test to prove a global maximum or minimum. The **Extreme Value Theorem** guarantees that by evaluating and comparing the original function's outputs at only the valid critical points and the two endpoints, the largest output is automatically the absolute maximum, and the smallest output is the absolute minimum.

## 📝 Sample Problems (From Guided Notes)

### Sample Problem 1: Pen Area Maximization Evaluation

**Problem Context:** The single-variable function for the total area of the three chicken pens is $A(x) = 400x - 4x^2$, operating on the physical domain $x \in [0, 100]$. Find the absolute maximum area.

#### Solution:

1. **Find Critical Points:** Take the first derivative and set it to zero:
    
    $$A'(x) = 400 - 8x \implies 400 - 8x = 0 \implies x = 50\text{ feet}$$
    
2. **Filter Through Domain:** Is $x = 50$ inside $[0, 100]$? Yes, it is a valid critical point.
    
3. **Evaluate and Compare Outputs:** Evaluate the original area function $A(x)$ at the endpoints ($x=0, x=100$) and the critical point ($x=50$):
    
    - $A(0) = 400(0) - 4(0)^2 = 0\text{ ft}^2$
        
    - $A(100) = 400(100) - 4(100)^2 = 0\text{ ft}^2$
        
    - $A(50) = 400(50) - 4(50)^2 = 10,000\text{ ft}^2$
        

**Conclusion:** Comparing the values, the absolute maximum area is exactly **$10,000\text{ ft}^2$**, occurring when $x = 50\text{ feet}$.

### Sample Problem 2: Container Volume Maximization Evaluation

**Problem Context:** The single-variable function for the volume of a square-based container is $V(w) = \frac{75}{2}w - \frac{1}{2}w^3$, operating on the physical domain $w \in [0, \sqrt{75}]$. Find the absolute maximum volume.

#### Solution:

1. **Find Critical Points:** Take the first derivative and set it to zero:
    
    $$V'(w) = \frac{75}{2} - \frac{3}{2}w^2 \implies \frac{75}{2} - \frac{3}{2}w^2 = 0$$
    
    $$-\frac{3}{2}w^2 = -\frac{75}{2} \implies w^2 = 25 \implies w = 5 \text{ or } w = -5$$
    
2. **Filter Through Domain:** Since $w = -5$ is outside $[0, \sqrt{75}]$, it is discarded. Our only valid critical point is $w = 5$.
    
3. **Evaluate and Compare Outputs:** Evaluate the original volume function $V(w)$:
    
    - $V(0) = \frac{75}{2}(0) - \frac{1}{2}(0)^3 = 0\text{ m}^3$
        
    - $V(\sqrt{75}) = \frac{75}{2}(\sqrt{75}) - \frac{1}{2}(\sqrt{75})^3 = 0\text{ m}^3$
        
    - $V(5) = \frac{75}{2}(5) - \frac{1}{2}(5)^3 = 125\text{ m}^3$
        

**Conclusion:** Comparing the values, the absolute maximum volume is exactly **$125\text{ m}^3$**, occurring when the base width is $5\text{ meters}$.

## 🛠️ Real-Life Engineering Application Problems

### Engineering Problem 1: [[Structural Engineering Truss Load Capacity]]
[[Structural Engineering Truss Load Capacity Solution]]


### Engineering Problem 2: [[Chemical Process Engineering Tank Optimization]]
[[Chemical Process Engineering Tank Optimization Solution]]
