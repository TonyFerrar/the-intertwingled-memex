### **The Strategy**

When evaluating integrals involving the product of a sine and a cosine function with **different angles** (like $3x$ and $5x$), standard $u$-substitution or basic Pythagorean identities won't work.

Instead, the strategy is to use the **Product-to-Sum identities** from trigonometry to break the product into two separate, easily integrable terms. The relevant identity here is:

$$\sin(\alpha)\cos(\beta) = \frac{1}{2}[\sin(\alpha + \beta) + \sin(\alpha - \beta)]$$

### **Step 1: Apply the Product-to-Sum identity**

In our integral, let $\alpha = 3x$ and $\beta = 5x$. Plug these into the identity:

$$\sin(3x)\cos(5x) = \frac{1}{2}[\sin(3x + 5x) + \sin(3x - 5x)]$$

Simplify the angles inside the sine functions:

$$\sin(3x)\cos(5x) = \frac{1}{2}[\sin(8x) + \sin(-2x)]$$

### **Step 2: Simplify using the odd-function property**

Recall that sine is an **odd function**, meaning $\sin(-\theta) = -\sin(\theta)$. We can use this to clean up the second term:

$$\sin(-2x) = -\sin(2x)$$

Now substitute this back into our expression and set up the new integral, pulling the constant $\frac{1}{2}$ out front:

$$\frac{1}{2} \int (\sin(8x) - \sin(2x)) \, dx$$

### **Step 3: Integrate term-by-term**

Now we can integrate each sine function individually using the reverse chain rule (or a simple $u$-substitution where $\int \sin(kx) \, dx = -\frac{1}{k}\cos(kx)$).

- The integral of $\sin(8x)$ is $-\frac{1}{8}\cos(8x)$
    
- The integral of $-\sin(2x)$ is $-\left(-\frac{1}{2}\cos(2x)\right) = \frac{1}{2}\cos(2x)$
    

Putting it all together inside the brackets:

$$\frac{1}{2} \left[ -\frac{1}{8}\cos(8x) + \frac{1}{2}\cos(2x) \right] + C$$

_(where $C$ is the constant of integration)_

### **Final Answer**

Distribute the $\frac{1}{2}$ and rearrange the terms so the positive term comes first:

$$\int \sin(3x)\cos(5x) \, dx = \frac{1}{4}\cos(2x) - \frac{1}{16}\cos(8x) + C$$