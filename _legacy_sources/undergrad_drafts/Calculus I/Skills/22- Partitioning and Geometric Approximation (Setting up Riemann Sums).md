# Skill 1: Partitioning and Geometric Approximation (Setting up Riemann Sums)

## Topic Notes

The foundational concept of integration is finding the exact area under a curve. Before we can use calculus to find this area exactly, we must approximate it using simpler, known shapes: rectangles. This process is called creating a **Riemann Sum**, which relies heavily on **partitioning**—breaking a continuous domain into discrete intervals.

### 1. Subinterval Width ($\Delta x$)

To approximate the area under a function $f(x)$ over a closed interval $[a, b]$, we divide the total width of the interval into $n$ equal pieces. The width of each individual subinterval (or rectangle) is denoted by $\Delta x$ and calculated as:

$$\Delta x = \frac{b - a}{n}$$

### 2. Identifying Grid Points ($x_i$)

Once the interval is partitioned, we create grid points across the x-axis starting at $a$ and adding $\Delta x$ consecutively until we reach $b$. The formula for the $i$-th grid point is:

$$x_i = a + i\Delta x$$

- When $i = 0$, $x_0 = a$ (the very left edge).
    
- When $i = n$, $x_n = b$ (the very right edge).
    

### 3. Choosing the Approximation Method

To determine the height of each rectangle, we evaluate the function $f(x)$ at a chosen point within each subinterval. The three most common choices are:

- **Right Riemann Sum:** Evaluates the function at the right endpoint of each subinterval. The $i$-th height is $f(x_i)$. The sum starts at $i = 1$ and goes to $n$.
    
- **Left Riemann Sum:** Evaluates the function at the left endpoint of each subinterval. The $i$-th height is $f(x_{i-1})$. The sum starts at $i = 0$ and goes to $n-1$.
    
- **Midpoint Riemann Sum:** Evaluates the function exactly halfway between endpoints. The $i$-th height is $f\left(\frac{x_{i-1} + x_i}{2}\right)$.
    

### 4. Constructing the Summation

The area of a single rectangle is $\text{Height} \times \text{Width} = f(x_i) \cdot \Delta x$. Summing all $n$ rectangles together gives the general Right Riemann Sum formula:

$$\text{Area} \approx \sum_{i=1}^{n} f(x_i)\Delta x$$

## Conceptual Sample Problems

### Problem 1: Explicit Subintervals (Left Riemann Sum)

Approximate the area under $f(x) = \frac{1}{x}$ on the interval $[1, 3]$ using $n = 4$ subintervals and a **Left Riemann Sum**.

#### Solution:

1. **Find $\Delta x$:**
    
    $$\Delta x = \frac{3 - 1}{4} = \frac{2}{4} = 0.5$$
    
2. **Identify the subintervals:**
    
    The intervals are $[1, 1.5]$, $[1.5, 2.0]$, $[2.0, 2.5]$, and $[2.5, 3.0]$.
    
3. **Select left endpoints:**
    
    Since this is a Left Riemann Sum, we select the left values:
    
    $$x_0 = 1.0, \quad x_1 = 1.5, \quad x_2 = 2.0, \quad x_3 = 2.5$$
    
4. **Calculate heights:**
    
    - $f(1.0) = \frac{1}{1} = 1$
        
    - $f(1.5) = \frac{1}{1.5} = \frac{2}{3} \approx 0.6667$
        
    - $f(2.0) = \frac{1}{2} = 0.5$
        
    - $f(2.5) = \frac{1}{2.5} = \frac{2}{5} = 0.4$
        
5. **Compute the sum:**
    
    $$\text{Area} \approx \Delta x \cdot [f(x_0) + f(x_1) + f(x_2) + f(x_3)]$$
    
    $$\text{Area} \approx 0.5 \cdot \left(1 + \frac{2}{3} + 0.5 + 0.4\right) = 0.5 \cdot (2.5667) \approx 1.2833$$
    

### Problem 2: Formal Variable Setup

Set up the algebraic expression for the width $\Delta x$ and the right-endpoint $x_i$ for the function $f(x) = \sqrt{x^2 + 1}$ on the interval $[2, 7]$ for an arbitrary number of subintervals $n$.

#### Solution:

1. **Find $\Delta x$ in terms of $n$:**
    
    $$\Delta x = \frac{b - a}{n} = \frac{7 - 2}{n} = \frac{5}{n}$$
    
2. **Find $x_i$ in terms of $i$ and $n$:**
    
    $$x_i = a + i\Delta x = 2 + i\left(\frac{5}{n}\right) = 2 + \frac{5i}{n}$$
    
3. **Complete Riemann Sum Expression:**
    
    $$\sum_{i=1}^{n} f(x_i)\Delta x = \sum_{i=1}^{n} \sqrt{\left(2 + \frac{5i}{n}\right)^2 + 1} \cdot \left(\frac{5}{n}\right)$$
    

## Real-Life Engineering Application Problems

### Application 1: [[Aerodynamics (Calculating Wing Lift Distribution)]]
[[Aerodynamics (Calculating Wing Lift Distribution) Solution]]


### Application 2: [[Civil Engineering & Finite Element Mesh (Beams)]]
[[Civil Engineering & Finite Element Mesh (Beams) Solution]]
