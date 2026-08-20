### **1. Identify the Given Information**

From the problem statement, we have:

- **Function:** $f(x) = 5x^2$
    
- **Interval:** $[a, b] = [0, 2]$
    
- **Number of subintervals:** $n = 4$ _(Note: Simpson's Rule requires $n$ to be an even number, which it is here)._
    

### **2. Calculate the Subinterval Width ($\Delta x$)**

The formula for the width of each subinterval is the same as the Trapezoidal rule:

$$\Delta x = \frac{b - a}{n}$$

Substituting our values:

$$\Delta x = \frac{2 - 0}{4} = \frac{2}{4} = 0.5$$

### **3. Determine the Grid Points ($x_i$)**

Starting at the lower bound $a = 0$, we repeatedly add $\Delta x = 0.5$ until we reach the upper bound $b = 2$:

- $x_0 = 0$
    
- $x_1 = 0.5$
    
- $x_2 = 1.0$
    
- $x_3 = 1.5$
    
- $x_4 = 2.0$
    

### **4. Evaluate the Function at Each Grid Point**

Substitute each $x_i$ value into our function $f(x) = 5x^2$:

- $f(x_0) = f(0) = 5(0)^2 = \mathbf{0}$
    
- $f(x_1) = f(0.5) = 5(0.5)^2 = 5(0.25) = \mathbf{1.25}$
    
- $f(x_2) = f(1.0) = 5(1.0)^2 = 5(1) = \mathbf{5}$
    
- $f(x_3) = f(1.5) = 5(1.5)^2 = 5(2.25) = \mathbf{11.25}$
    
- $f(x_4) = f(2.0) = 5(2.0)^2 = 5(4) = \mathbf{20}$
    

### **5. Apply Simpson's Rule Formula**

Unlike the Trapezoidal Rule, Simpson's Rule uses parabolas to approximate the curve, meaning the coefficients follow a strict **1, 4, 2, 4, 1** pattern:

$$S_n = \frac{\Delta x}{3} \left[ f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + f(x_4) \right]$$

Substituting our values:

$$S_4 = \frac{0.5}{3} \left[ 0 + 4(1.25) + 2(5) + 4(11.25) + 20 \right]$$

Now, simplify the terms inside the brackets step-by-step:

- $4(1.25) = 5$
    
- $2(5) = 10$
    
- $4(11.25) = 45$
    

$$S_4 = \frac{0.5}{3} \left[ 0 + 5 + 10 + 45 + 20 \right]$$

$$S_4 = \frac{0.5}{3} \left[ 80 \right]$$

$$S_4 = \frac{40}{3} \approx 13.333$$

> **Fun Calculus Fact:** Because Simpson's Rule utilizes quadratic approximations (parabolas) to find the area, it yields the _exact_ analytical area whenever it is applied to any quadratic function like $5x^2$!

### **Final Answer**

The estimated value of the integral using Simpson's Rule with $n = 4$ is **$\frac{40}{3}$** (or approximately **$13.33$**).