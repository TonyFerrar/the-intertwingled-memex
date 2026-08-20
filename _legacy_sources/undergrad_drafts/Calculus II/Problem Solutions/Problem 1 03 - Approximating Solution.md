
### The General Setup

For any Right-Hand Sum (RHS) Riemann sum on an interval $[a, b]$ partitioned into $n$ equal subintervals:

1. **Find the width of each rectangle ($\Delta x$):**
    
    $$\Delta x = \frac{b - a}{n}$$
    
2. **Find the right endpoints ($x_i$):**
    
    $$x_i = a + i \cdot \Delta x \quad \text{for } i = 1, 2, \dots, n$$
    
3. **Calculate the Riemann Sum ($R_n$):**
    
    $$R_n = \sum_{i=1}^{n} f(x_i) \cdot \Delta x = \Delta x \cdot [f(x_1) + f(x_2) + \dots + f(x_n)]$$
    

For this problem, our function is $f(x) = x^2 - 1$ over the interval $[0, 2]$, meaning **$a = 0$** and **$b = 2$**.

### Part (a) Approximation using $n = 4$ rectangles

**Step 1: Calculate the width ($\Delta x$)**

$$\Delta x = \frac{2 - 0}{4} = 0.5$$

**Step 2: Identify the 4 right endpoints ($x_i$)**

Starting from $a = 0$, add $\Delta x = 0.5$ successively:

- $x_1 = 0.5$
    
- $x_2 = 1.0$
    
- $x_3 = 1.5$
    
- $x_4 = 2.0$
    

**Step 3: Evaluate $f(x) = x^2 - 1$ at each right endpoint**

- $f(0.5) = (0.5)^2 - 1 = 0.25 - 1 = -0.75$
    
- $f(1.0) = (1.0)^2 - 1 = 1 - 1 = 0$
    
- $f(1.5) = (1.5)^2 - 1 = 2.25 - 1 = 1.25$
    
- $f(2.0) = (2.0)^2 - 1 = 4 - 1 = 3$
    

**Step 4: Compute the Right-Hand Sum ($R_4$)**

$$R_4 = \Delta x \cdot [f(0.5) + f(1.0) + f(1.5) + f(2.0)]$$

$$R_4 = 0.5 \cdot [-0.75 + 0 + 1.25 + 3]$$

$$R_4 = 0.5 \cdot [3.5] = 1.75$$

**Answer for (a):** The area approximation is **1.75**.

### Part (b) Approximation using $n = 10$ rectangles

**Step 1: Calculate the width ($\Delta x$)**

$$\Delta x = \frac{2 - 0}{10} = 0.2$$

**Step 2: Identify the 10 right endpoints ($x_i$)**

Starting from $a = 0$, add $\Delta x = 0.2$ successively:

$$\{0.2, \, 0.4, \, 0.6, \, 0.8, \, 1.0, \, 1.2, \, 1.4, \, 1.6, \, 1.8, \, 2.0\}$$

**Step 3: Evaluate $f(x) = x^2 - 1$ at each right endpoint**

- $f(0.2) = (0.2)^2 - 1 = 0.04 - 1 = -0.96$
    
- $f(0.4) = (0.4)^2 - 1 = 0.16 - 1 = -0.84$
    
- $f(0.6) = (0.6)^2 - 1 = 0.36 - 1 = -0.64$
    
- $f(0.8) = (0.8)^2 - 1 = 0.64 - 1 = -0.36$
    
- $f(1.0) = (1.0)^2 - 1 = 1.00 - 1 = 0$
    
- $f(1.2) = (1.2)^2 - 1 = 1.44 - 1 = 0.44$
    
- $f(1.4) = (1.4)^2 - 1 = 1.96 - 1 = 0.96$
    
- $f(1.6) = (1.6)^2 - 1 = 2.56 - 1 = 1.56$
    
- $f(1.8) = (1.8)^2 - 1 = 3.24 - 1 = 2.24$
    
- $f(2.0) = (2.0)^2 - 1 = 4.00 - 1 = 3.00$
    

**Step 4: Compute the Right-Hand Sum ($R_{10}$)**

First, sum up all of the evaluated outputs:

$$\text{Sum} = (-0.96) + (-0.84) + (-0.64) + (-0.36) + 0 + 0.44 + 0.96 + 1.56 + 2.24 + 3.00 = 5.4$$

Now, multiply the sum of the heights by the width ($\Delta x = 0.2$):

$$R_{10} = 0.2 \cdot 5.4 = 1.08$$

**Answer for (b):** The area approximation is **1.08**.