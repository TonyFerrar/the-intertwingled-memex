# Skill 1 Learning Page: Geometric Interpretation & Net Signed Area

## Core Conceptual Notes

The fundamental concept behind definite integrals is that they do not simply calculate the total physical area trapped between a curve and the $x$-axis; instead, they calculate the **net signed area**.

When evaluating an integral geometrically, you map the regions bounded by the function $f(x)$ and the $x$-axis on a given interval $[a, b]$:

- **Regions Above the $x$-axis ($f(x) > 0$):** Trapped areas are assigned a **positive** sign.
    
- **Regions Below the $x$-axis ($f(x) < 0$):** Trapped areas are assigned a **negative** sign.
    

If the graph consists of geometric shapes (rectangles, triangles, or circles), you can entirely bypass complex calculus antiderivatives and find the exact value of the definite integral using standard geometric formulas.

### Essential Geometric Toolset

- **Rectangle:** $\text{Area} = \text{base} \times \text{height}$
    
- **Triangle:** $\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$
    
- **Circle/Semicircle:** $\text{Area} = \frac{1}{2}\pi r^2$
    

## Pure Mathematical Sample Problems

### Sample Problem 1: Semicircles and Triangles

Evaluate $\int_{0}^{7} f(x) \, dx$ for the function $f(x)$ pictured below, which consists of a quarter-circle above the $x$-axis from $x = 0$ to $x = 3$ and a triangle below the $x$-axis from $x = 3$ to $x = 7$ with a vertex at $(5, -2)$.

#### Step-by-Step Solution:

1. **Identify Region 1 (Quarter-circle above the $x$-axis on $[0, 3]$):**
    
    - This is a quarter-circle with a radius of $r = 3$.
        
    - $\text{Area}_1 = \frac{1}{4}\pi r^2 = \frac{1}{4}\pi (3)^2 = \frac{9\pi}{4}$
        
    - Since it is above the $x$-axis, its signed value is $+\frac{9\pi}{4}$.
        
2. **Identify Region 2 (Triangle below the $x$-axis on $[3, 7]$):**
    
    - This is a triangle with a horizontal base spanning from $x = 3$ to $x = 7$ ($\text{base} = 4$) and a vertical height reaching down to $y = -2$ ($\text{height} = 2$).
        
    - $\text{Area}_2 = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 4 \times 2 = 4$
        
    - Since it is below the $x$-axis, its signed value is $-4$.
        
3. **Sum the Signed Areas:**
    
    $$\int_{0}^{7} f(x) \, dx = \text{Area}_1 - \text{Area}_2 = \frac{9\pi}{4} - 4$$
    

### Sample Problem 2: Piecewise Linear Function

Evaluate $\int_{-2}^{4} g(x) \, dx$ where $g(x)$ forms a flat line at $y = 3$ on the interval $[-2, 0]$ and a single straight line spanning from $(0, 3)$ down to $(4, -5)$, crossing the $x$-axis at $x = 1.5$.

#### Step-by-Step Solution:

1. **Identify Region 1 (Rectangle above the $x$-axis on $[-2, 0]$):**
    
    - $\text{base} = 0 - (-2) = 2$, $\text{height} = 3$
        
    - $\text{Area}_1 = 2 \times 3 = 6 \rightarrow \text{Signed value} = +6$
        
2. **Identify Region 2 (Triangle above the $x$-axis on $[0, 1.5]$):**
    
    - $\text{base} = 1.5 - 0 = 1.5$, $\text{height} = 3$
        
    - $\text{Area}_2 = \frac{1}{2} \times 1.5 \times 3 = 2.25 \rightarrow \text{Signed value} = +2.25$
        
3. **Identify Region 3 (Triangle below the $x$-axis on $[1.5, 4]$):**
    
    - $\text{base} = 4 - 1.5 = 2.5$, $\text{height} = |-5| = 5$
        
    - $\text{Area}_3 = \frac{1}{2} \times 2.5 \times 5 = 6.25 \rightarrow \text{Signed value} = -6.25$
        
4. **Combine All Sub-Intervals:**
    
    $$\int_{-2}^{4} g(x) \, dx = 6 + 2.25 - 6.25 = 2$$
    

## Real-Life Engineering Application Problems

### Problem 1: [[Electrical Engineering (AC Signal Power)]]
[[Electrical Engineering (AC Signal Power) Solution]]


### Problem 2: [[Civil Engineering (Bridge Wind Load Shear Forces)]]
[[Civil Engineering (Bridge Wind Load Shear Forces) Solution]]


### Problem 3: [[Robotics & Autonomous Navigation (Dead Reckoning)]]
[[Robotics & Autonomous Navigation (Dead Reckoning) Solution]]
