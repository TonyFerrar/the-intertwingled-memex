# Skill 1: Interval Partitioning and Discretization

Numerical integration methods do not interpret curves as continuous, infinite lines. Instead, they require breaking a continuous domain down into a finite set of manageable, distinct points. This process is known as **interval partitioning** or **discretization**.

Before you can calculate any areas using the Midpoint, Trapezoidal, or Simpson’s rules, you must first establish the horizontal geometry of your slices.

## Conceptual Notes

Discretizing a mathematical interval requires two primary steps:

- **Calculating the Subinterval Width ($\Delta x$):** If you want to split a continuous interval $[a, b]$ into $n$ subintervals of equal width, you calculate the width of each slice using the formula:
    
    $$\Delta x = \frac{b - a}{n} \quad \text{[cite: 86, 121, 159]}$$
    
- **Generating the Grid Points ($x_k$):** Once you have the width of your slices, you map out the boundary coordinates of each subinterval. You start at the lower bound $a$ and repeatedly add $\Delta x$ until you hit the upper bound $b$. The math formula for any given grid point is:
    
    $$x_k = a + k\Delta x \quad \text{for } k \in \{0, 1, 2, \dots, n\} \quad \text{[cite: 121, 161]}$$
    

> 📌 **Important Rule of Thumb:** When partitioning an interval into $n$ subintervals, you will always generate exactly $n + 1$ grid points, starting from $x_0$ up to $x_n$.

## Pure Mathematics Sample Problems

### **Sample Problem 1**

**Problem:** Partition the interval $[1, 5]$ into $n = 8$ equal subintervals. Find the subinterval width ($\Delta x$) and list all the resulting grid points ($x_k$).

**Step-by-Step Solution:**

1. **Identify the variables:** $a = 1$, $b = 5$, and $n = 8$.
    
2. **Calculate $\Delta x$:**
    
    $$\Delta x = \frac{5 - 1}{8} = \frac{4}{8} = 0.5$$
    
3. **Generate the grid points:** Start at $x_0 = 1$ and add $0.5$ progressively until $x_8$:
    
    - $x_0 = 1.0$
        
    - $x_1 = 1.0 + 0.5 = 1.5$
        
    - $x_2 = 1.5 + 0.5 = 2.0$
        
    - $x_3 = 2.0 + 0.5 = 2.5$
        
    - $x_4 = 2.5 + 0.5 = 3.0$
        
    - $x_5 = 3.0 + 0.5 = 3.5$
        
    - $x_6 = 3.5 + 0.5 = 4.0$
        
    - $x_7 = 4.0 + 0.5 = 4.5$
        
    - $x_8 = 4.5 + 0.5 = 5.0$
        

### **Sample Problem 2**

**Problem:** Partition the interval $[0, 3]$ into $n = 6$ equal subintervals. Find the subinterval width ($\Delta x$) and list all the resulting grid points ($x_k$).

**Step-by-Step Solution:**

1. **Identify the variables:** $a = 0$, $b = 3$, and $n = 6$.
    
2. **Calculate $\Delta x$:**
    
    $$\Delta x = \frac{3 - 0}{6} = \frac{3}{6} = 0.5$$
    
3. **Generate the grid points:** Start at $x_0 = 0$ and add $0.5$ progressively until $x_6$:
    
    - $x_0 = 0.0$
        
    - $x_1 = 0.5$
        
    - $x_2 = 1.0$
        
    - $x_3 = 1.5$
        
    - $x_4 = 2.0$
        
    - $x_5 = 2.5$
        
    - $x_6 = 3.0$
        

## Real-Life Engineering Application Problems

### **Engineering Problem 1: [[Aerospace Telemetry Sampling]]**
[[Aerospace Telemetry Sampling Solution]]

### **Engineering Problem 2: [[Civil Engineering Cross-Sectional Hydrology]]**
[[Civil Engineering Cross-Sectional Hydrology Solution]]
