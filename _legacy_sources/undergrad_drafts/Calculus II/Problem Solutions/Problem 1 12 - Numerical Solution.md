### **1. Identify the Given Information**

From the problem statement, we have:

- **Function:** $f(x) = 8x^2$
    
- **Interval:** $[a, b] = [2, 4]$
    
- **Number of subintervals:** $n = 4$
    

### **2. Calculate the Subinterval Width ($\Delta x$)**

The formula for the width of each subinterval is:

$$\Delta x = \frac{b - a}{n}$$

Substituting our values:

$$\Delta x = \frac{4 - 2}{4} = \frac{2}{4} = 0.5$$

### **3. Determine the Grid Points ($x_i$)**

We start at the lower bound $a = 2$ and repeatedly add $\Delta x = 0.5$ until we reach the upper bound $b = 4$:

- $x_0 = 2$
    
- $x_1 = 2 + 0.5 = 2.5$
    
- $x_2 = 2.5 + 0.5 = 3$
    
- $x_3 = 3 + 0.5 = 3.5$
    
- $x_4 = 4$
    

### **4. Evaluate the Function at Each Grid Point**

Now, substitute each $x_i$ value back into the original function $f(x) = 8x^2$:

- $f(x_0) = f(2) = 8(2)^2 = 8(4) = \mathbf{32}$
    
- $f(x_1) = f(2.5) = 8(2.5)^2 = 8(6.25) = \mathbf{50}$
    
- $f(x_2) = f(3) = 8(3)^2 = 8(9) = \mathbf{72}$
    
- $f(x_3) = f(3.5) = 8(3.5)^2 = 8(12.25) = \mathbf{98}$
    
- $f(x_4) = f(4) = 8(4)^2 = 8(16) = \mathbf{128}$
    

### **5. Apply the Trapezoidal Rule Formula**

The general formula for the Trapezoidal Rule is:

$$T_n = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + \dots + 2f(x_{n-1}) + f(x_n) \right]$$

Substituting our calculated values into the formula:

$$T_4 = \frac{0.5}{2} \left[ 32 + 2(50) + 2(72) + 2(98) + 128 \right]$$

Simplify the expression step-by-step:

$$T_4 = 0.25 \left[ 32 + 100 + 144 + 196 + 128 \right]$$

$$T_4 = 0.25 \left[ 600 \right]$$

$$T_4 = 150$$

### **Final Answer**

The estimated value of the integral using the Trapezoidal Rule with $n = 4$ is **$150$**.