## Concept Explanation

The problem provides the **rate of change** of the amount of oil in the tank, $Q'(t)$, and asks for the total quantity of oil lost over a specific time window.

According to the Net Change Theorem, the total net change of a quantity over a time interval $[a, b]$ is found by calculating the definite integral of its rate of change function:

$$\text{Net Change} = \int_{a}^{b} Q'(t) \, dt$$

Since $t$ represents the hours passed since midnight ($t = 0$):

- **5 AM** corresponds to $t = 5$
    
- **6 AM** corresponds to $t = 6$
    

The rate function $Q'(t)$ is negative because the total volume of oil inside the tank is decreasing. To find the actual positive amount of oil that _escaped_ the tank, we can drop the negative sign and integrate the absolute rate of leakage:

$$\text{Amount Leaked} = \int_{5}^{6} \frac{8}{(t+3)^2} \, dt$$

## Step-by-Step Calculation

### **Step 1: Set up the definite integral**

To prepare the fraction for integration, rewrite it using a negative exponent:

$$\text{Amount Leaked} = \int_{5}^{6} 8(t + 3)^{-2} \, dt$$

### **Step 2: Find the antiderivative**

We can integrate this using the power rule ($\int u^n \, du = \frac{u^{n+1}}{n+1}$), where the inner function is $u = t + 3$ (since the derivative of $t+3$ is just $1$, no complex substitution steps are required):

- Retain the constant coefficient $8$.
    
- Add $1$ to the exponent: $-2 + 1 = -1$.
    
- Divide by the new exponent: $-1$.
    

The resulting antiderivative function is:

$$F(t) = \frac{8(t + 3)^{-1}}{-1} = -\frac{8}{t + 3}$$

### **Step 3: Evaluate the definite integral**

Apply the Fundamental Theorem of Calculus by substituting the upper limit ($t = 6$) and subtracting the value at the lower limit ($t = 5$):

$$\text{Amount Leaked} = \left[ -\frac{8}{t + 3} \right]_{5}^{6}$$

Substitute the upper limit ($t = 6$):

$$F(6) = -\frac{8}{6 + 3} = -\frac{8}{9}$$

Substitute the lower limit ($t = 5$):

$$F(5) = -\frac{8}{5 + 3} = -\frac{8}{8} = -1$$

Subtract the lower limit evaluation from the upper limit evaluation:

$$\text{Amount Leaked} = \left( -\frac{8}{9} \right) - (-1)$$

$$\text{Amount Leaked} = -\frac{8}{9} + 1 = \frac{1}{9}$$

## Step 4: Unit Conversion

The problem notes that the function $Q(t)$ measures oil in **thousands of gallons**. Therefore, our mathematical result of $\frac{1}{9}$ represents $\frac{1}{9}$ thousand gallons.

To state this in a more standard fashion, we convert it to individual gallons by multiplying by 1,000:

$$\frac{1}{9} \times 1000 = \frac{1000}{9} \approx 111.11 \text{ gallons}$$

### **Final Answer**

Between 5 and 6 AM, $\frac{1}{9}$ thousand gallons (or approximately 111.11 gallons) of oil will leak from the tank.