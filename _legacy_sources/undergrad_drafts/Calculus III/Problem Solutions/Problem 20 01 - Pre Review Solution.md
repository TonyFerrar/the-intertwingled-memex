Here is the step-by-step solution to find the value of $F(3)$ using the Fundamental Theorem of Calculus and geometry.

### Step 1: Understand the Relationship

According to the Fundamental Theorem of Calculus, the change in the value of a function over an interval is equal to the definite integral (net signed area) of its derivative over that same interval:

$$F(3) - F(0) = \int_{0}^{3} F'(x) \, dx$$

To isolate $F(3)$, rewrite the equation as:

$$F(3) = F(0) + \int_{0}^{3} F'(x) \, dx$$

### Step 2: Determine the Area Geometrically

We need to find the net signed area under the line $F'(x)$ from $x = 0$ to $x = 3$.

Looking at the graph:

1. **Base ($b$):** The interval along the $x$-axis goes from $0$ to $3 \implies b = 3$.
    
2. **Height ($h$):** The line passes through $(0,0)$ and goes down with a constant slope of $-2$. At $x = 3$, the graph reaches a $y$-value of $-6$. This gives a vertical height of $6$.
    

Since this region forms a triangle located entirely **below** the $x$-axis, its area value is negative:

$$\int_{0}^{3} F'(x) \, dx = -\left(\frac{1}{2} \times \text{base} \times \text{height}\right)$$

$$\int_{0}^{3} F'(x) \, dx = -\left(\frac{1}{2} \times 3 \times 6\right) = -9$$

### Step 3: Compute $F(3)$

Now substitute the given initial value $F(0) = -1$ and the calculated geometric area back into our equation:

$$F(3) = (-1) + (-9)$$

$$F(3) = -10$$

### Final Answer

$$-10$$