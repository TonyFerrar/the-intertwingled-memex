### **The Strategy**

When evaluating integrals involving powers of secant and tangent, if the power of secant is **even**, the strategy is to split off a factor of $\sec^2(x)$. This saved factor will serve as our $du$ during substitution, because the derivative of $\tan(x)$ is $\sec^2(x)$.

The remaining even powers of secant are then converted into tangents using the Pythagorean identity:

$$\sec^2(x) = 1 + \tan^2(x)$$

### **Step 1: Split the even power**

First, pull out a factor of $\sec^2(x)$ to save it for the $u$-substitution step later.

$$\int \sec^{4}(x) \, dx = \int \sec^{2}(x) \cdot \sec^{2}(x) \, dx$$

### **Step 2: Apply the Pythagorean identity**

Convert the first $\sec^2(x)$ term into tangent terms using the identity $\sec^2(x) = 1 + \tan^2(x)$.

$$\int (1 + \tan^{2}(x)) \cdot \sec^{2}(x) \, dx$$

### **Step 3: Use $u$-substitution**

Now, set up a substitution where $u$ represents the tangent function.

- Let $u = \tan(x)$
    
- Then, find the derivative: $du = \sec^2(x) \, dx$
    

Substitute $u$ and $du$ directly into the integral:

$$\int (1 + u^2) \, du$$

### **Step 4: Integrate term-by-term**

Use the standard power rule for integration to evaluate each piece.

$$\int (1 + u^2) \, du = u + \frac{u^3}{3} + C$$

_(where $C$ is the constant of integration)_

### **Step 5: Substitute back to the original variable**

Finally, replace $u$ with your original substitution, $\tan(x)$.

$$\tan(x) + \frac{\tan^3(x)}{3} + C$$

### **Final Answer**

Rearranging the terms slightly for standard polynomial order:

$$\int \sec^{4}(x) \, dx = \frac{1}{3}\tan^3(x) + \tan(x) + C$$