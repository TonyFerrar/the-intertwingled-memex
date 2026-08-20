## Part (a): Finding the Displacement

### **Concept Explanation**

**Displacement** is the net change in an object's position. It only cares about where the object started and where it ended, regardless of any back-and-forth movement in between.

Mathematically, displacement is found by taking the definite integral of the velocity function $v(t)$ over the given time interval $[a, b]$:

$$\text{Displacement} = \int_{a}^{b} v(t) \, dt$$

### **Step-by-Step Calculation**

**Step 1: Set up the definite integral**

Using our velocity function $v(t) = 4 - t^2$ over the interval $[0, 3]$:

$$\text{Displacement} = \int_{0}^{3} (4 - t^2) \, dt$$

**Step 2: Find the antiderivative**

Integrate each term individually using the power rule ($\int t^n \, dt = \frac{t^{n+1}}{n+1}$):

- The antiderivative of $4$ is $4t$.
    
- The antiderivative of $-t^2$ is $-\frac{t^3}{3}$.
    

So, the general antiderivative is:

$$F(t) = 4t - \frac{t^3}{3}$$

**Step 3: Evaluate the integral using the Fundamental Theorem of Calculus**

We evaluate $F(t)$ at the upper limit ($t = 3$) and subtract the value at the lower limit ($t = 0$):

$$\text{Displacement} = \left[ 4t - \frac{t^3}{3} \right]_{0}^{3}$$

Substitute $t = 3$:

$$F(3) = 4(3) - \frac{3^3}{3} = 12 - \frac{27}{3} = 12 - 9 = 3$$

Substitute $t = 0$:

$$F(0) = 4(0) - \frac{0^3}{3} = 0$$

Subtract the two values:

$$\text{Displacement} = 3 - 0 = 3\text{ meters}$$

### **Final Answer for (a)**

The displacement of the object over the time interval is **$3\text{ meters}$**.

## Part (b): Finding the Total Distance Traveled

### **Concept Explanation**

**Total distance traveled** measures every single inch the object moved, whether it was going forward or backward. Because distance cannot be negative, we must integrate the _absolute value_ of the velocity function:

$$\text{Total Distance} = \int_{a}^{b} |v(t)| \, dt$$

Because the absolute value changes how we handle the function depending on whether it is positive or negative, we need to see if the object changes direction (crosses the t-axis) during the interval $[0, 3]$.

### **Step-by-Step Calculation**

**Step 1: Find where the object changes direction**

Set the velocity function equal to zero to find the turning points:

$$4 - t^2 = 0$$

$$t^2 = 4$$

$$t = 2 \quad \text{(ignoring } t = -2 \text{ since time must be } \ge 0\text{)}$$

The object changes direction at $t = 2$ seconds.

**Step 2: Determine the sign of velocity in each interval**

- **Interval $[0, 2]$:** Pick a test point like $t = 1$. Here, $v(1) = 4 - 1^2 = 3$ (Positive velocity $\rightarrow$ moving forward).
    
- **Interval $[2, 3]$:** Pick a test point like $t = 2.5$. Here, $v(2.5) = 4 - 6.25 = -2.25$ (Negative velocity $\rightarrow$ moving backward).
    

**Step 3: Split the integral into two parts**

To account for the backward movement, we split the integral at $t = 2$ and take the absolute value of each section's result:

$$\text{Total Distance} = \int_{0}^{2} (4 - t^2) \, dt + \left| \int_{2}^{3} (4 - t^2) \, dt \right|$$

**Step 4: Evaluate the first interval $[0, 2]$ (Forward motion)**

Using our antiderivative from Part (a):

$$\int_{0}^{2} (4 - t^2) \, dt = \left[ 4t - \frac{t^3}{3} \right]_{0}^{2}$$

$$= \left( 4(2) - \frac{2^3}{3} \right) - 0$$

$$= 8 - \frac{8}{3} = \frac{24}{3} - \frac{8}{3} = \frac{16}{3}\text{ meters}$$

**Step 5: Evaluate the second interval $[2, 3]$ (Backward motion)**

$$\int_{2}^{3} (4 - t^2) \, dt = \left[ 4t - \frac{t^3}{3} \right]_{2}^{3}$$

We already know the value at $t = 3$ is $3$, and the value at $t = 2$ is $\frac{16}{3}$:

$$= 3 - \frac{16}{3} = \frac{9}{3} - \frac{16}{3} = -\frac{7}{3}\text{ meters}$$

Taking the absolute value (since distance is positive):

$$\left| -\frac{7}{3} \right| = \frac{7}{3}\text{ meters}$$

**Step 6: Add the distances together**

$$\text{Total Distance} = \frac{16}{3} + \frac{7}{3} = \frac{23}{3}\text{ meters}$$

Converting to a mixed fraction or decimal gives:

$$\frac{23}{3} = 7\frac{2}{3} \approx 7.67\text{ meters}$$

### **Final Answer for (b)**

The total distance traveled by the object over the interval is **$\frac{23}{3}\text{ meters}$** (or approximately **$7.67\text{ meters}$**).