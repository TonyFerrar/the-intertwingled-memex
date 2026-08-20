### **The Strategy**

When evaluating an integral with an **odd power** of sine or cosine, the standard strategy is to save one factor of the odd-powered trig function and convert the remaining even-powered factors using the fundamental Pythagorean identity:

$$\sin^2(x) + \cos^2(x) = 1$$

### **Step 1: Split the odd power**

First, pull out one factor of $\sin(x)$ to save it for the upcoming $u$-substitution.

$$\int \sin^{3}(x) \, dx = \int \sin^{2}(x) \cdot \sin(x) \, dx$$

### **Step 2: Apply the Pythagorean identity**

Using the identity $\sin^2(x) = 1 - \cos^2(x)$, substitute it into the integral so that the rest of the expression is in terms of cosine.

$$\int (1 - \cos^{2}(x)) \cdot \sin(x) \, dx$$

### **Step 3: Use $u$-substitution**

Now, set up a substitution where $u$ represents the cosine function.

- Let $u = \cos(x)$
    
- Then, find the derivative: $du = -\sin(x) \, dx$
    
- Multiplying by $-1$ gives: $-du = \sin(x) \, dx$
    

Substitute $u$ and $-du$ into the integral:

$$\int (1 - u^2) \cdot (-du)$$

Distribute the negative sign to rearrange the terms:

$$\int (u^2 - 1) \, du$$

### **Step 4: Integrate term-by-term**

Use the standard power rule for integration ($\int u^n \, du = \frac{u^{n+1}}{n+1}$) to evaluate the integral.

$$\int (u^2 - 1) \, du = \frac{u^3}{3} - u + C$$

_(where $C$ is the constant of integration)_

### **Step 5: Substitute back to the original variable**

Finally, replace $u$ with your original substitution, $\cos(x)$.

$$\frac{\cos^3(x)}{3} - \cos(x) + C$$

### **Final Answer**

$$\int \sin^{3}(x) \, dx = \frac{1}{3}\cos^3(x) - \cos(x) + C$$