### The General Setup

For any Midpoint Riemann sum on an interval $[a, b]$ partitioned into $n$ equal subintervals:

1. **Find the width of each rectangle ($\Delta x$):**
    
    $$\Delta x = \frac{b - a}{n}$$
    
2. **Find the midpoints ($m_i$):**
    
    First, find the grid endpoints $x_i = a + i \cdot \Delta x$. Then, calculate the center of each subinterval:
    
    $$m_i = \frac{x_{i-1} + x_i}{2}$$
    
3. **Calculate the Midpoint Riemann Sum ($M_n$):**
    
    $$M_n = \Delta x \cdot [f(m_1) + f(m_2) + \dots + f(m_n)]$$
    

For this problem, our function is $f(x) = 5\sqrt{x}$ over the interval $[1, 6]$, meaning **$a = 1$** and **$b = 6$**.

### Step-by-Step Solution

**Step 1: Calculate the width ($\Delta x$)**

$$\Delta x = \frac{6 - 1}{10} = \frac{5}{10} = 0.5$$

**Step 2: Identify the 10 midpoints ($m_i$)**

The subintervals increment by $0.5$, starting at $x_0 = 1$:

- Subinterval 1: $[1.0, 1.5] \implies m_1 = 1.25$
    
- Subinterval 2: $[1.5, 2.0] \implies m_2 = 1.75$
    
- Subinterval 3: $[2.0, 2.5] \implies m_3 = 2.25$
    
- Subinterval 4: $[2.5, 3.0] \implies m_4 = 2.75$
    
- Subinterval 5: $[3.0, 3.5] \implies m_5 = 3.25$
    
- Subinterval 6: $[3.5, 4.0] \implies m_6 = 3.75$
    
- Subinterval 7: $[4.0, 4.5] \implies m_7 = 4.25$
    
- Subinterval 8: $[4.5, 5.0] \implies m_8 = 4.75$
    
- Subinterval 9: $[5.0, 5.5] \implies m_9 = 5.25$
    
- Subinterval 10: $[5.5, 6.0] \implies m_{10} = 5.75$
    

**Step 3: Evaluate $f(x) = 5\sqrt{x}$ at each midpoint**

_(Rounded to 4 decimal places for accuracy)_

- $f(1.25) = 5\sqrt{1.25} \approx 5.5902$
    
- $f(1.75) = 5\sqrt{1.75} \approx 6.6144$
    
- $f(2.25) = 5\sqrt{2.25} = 7.5000$
    
- $f(2.75) = 5\sqrt{2.75} \approx 8.2916$
    
- $f(3.25) = 5\sqrt{3.25} \approx 9.0139$
    
- $f(3.75) = 5\sqrt{3.75} \approx 9.6825$
    
- $f(4.25) = 5\sqrt{4.25} \approx 10.3078$
    
- $f(4.75) = 5\sqrt{4.75} \approx 10.8972$
    
- $f(5.25) = 5\sqrt{5.25} \approx 11.4564$
    
- $f(5.75) = 5\sqrt{5.75} \approx 11.9896$
    

**Step 4: Compute the Midpoint Sum ($M_{10}$)** First, sum up all of these calculated heights:

$$\text{Sum of heights} = 5.5902 + 6.6144 + 7.5000 + 8.2916 + 9.0139 + 9.6825 + 10.3078 + 10.8972 + 11.4564 + 11.9896$$

$$\text{Sum of heights} \approx 91.3436$$

Now, multiply the sum of the heights by the width ($\Delta x = 0.5$):

$$M_{10} = 0.5 \cdot 91.3436 = 45.6718$$

**Answer:** The midpoint approximation for the integral is approximately **45.6718** (or **45.67** if rounding to two decimal places).