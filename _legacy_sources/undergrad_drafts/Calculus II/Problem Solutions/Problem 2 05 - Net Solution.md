## Part (a): How far has the hiker traveled in the first hour?

### **Concept Explanation**

To find how far an object has traveled, we typically look at its **total distance** or **displacement**.

First, we need to check if the hiker ever changes direction or walks backward during the first hour ($t = 0$ to $t = 1$). A change in direction occurs if the velocity $v(t)$ becomes negative.

- Our velocity function is $v(t) = 2\pi \sin(\pi t)$.
    
- Over the first hour ($0 \le t \le 1$), the angle inside the sine function ($\pi t$) ranges from $0$ to $\pi$.
    
- Since $\sin(\theta)$ is always positive or zero when $\theta$ is between $0$ and $\pi$, the velocity $v(t)$ is entirely non-negative during this hour.
    

Because the hiker never walks backward during this interval, the **displacement** and the **total distance traveled** are identical. We can find the distance by computing the definite integral of $v(t)$ from $0$ to $1$.

### **Step-by-Step Calculation**

**Step 1: Set up the definite integral**

$$\text{Distance} = \int_{0}^{1} 2\pi \sin(\pi t) \, dt$$

**Step 2: Find the antiderivative**

To integrate $2\pi \sin(\pi t)$, we can use a basic $u$-substitution mentally or explicitly:

- Let $u = \pi t$, which means the derivative is $du = \pi \, dt$.
    
- Notice we have a $2\pi$ in front. We can rewrite the integral to perfectly match our $du$:
    
    $$\int 2\pi \sin(\pi t) \, dt = 2 \int \sin(\pi t) \cdot (\pi \, dt)$$
    

Since the antiderivative of $\sin(u)$ is $-\cos(u)$, the antiderivative is:

$$F(t) = -2 \cos(\pi t)$$

**Step 3: Evaluate the definite integral**

Apply the Fundamental Theorem of Calculus by evaluating $F(t)$ at the upper limit ($t = 1$) and subtracting the value at the lower limit ($t = 0$):

$$\text{Distance} = \Big[ -2 \cos(\pi t) \Big]_{0}^{1}$$

Substitute the upper limit ($t = 1$):

$$-2 \cos(\pi \cdot 1) = -2 \cos(\pi)$$

Since $\cos(\pi) = -1$:

$$-2(-1) = 2$$

Substitute the lower limit ($t = 0$):

$$-2 \cos(\pi \cdot 0) = -2 \cos(0)$$

Since $\cos(0) = 1$:

$$-2(1) = -2$$

Subtract the lower limit value from the upper limit value:

$$\text{Distance} = 2 - (-2) = 2 + 2 = 4 \text{ miles}$$

### **Final Answer for (a)**

The hiker has traveled **$4\text{ miles}$** in the first hour.

## Part (b): Determine the position of the hiker, $s(t)$, for any time $t \ge 0$

### **Concept Explanation**

The position function $s(t)$ is the antiderivative (indefinite integral) of the velocity function $v(t)$.

$$s(t) = \int v(t) \, dt$$

When we find an indefinite integral, it includes an unknown constant of integration, $+ C$. We will use the problem's given initial condition, $s(0) = 0$ (the hiker starts at position 0 at time $t = 0$), to solve for the exact value of $C$.

### **Step-by-Step Calculation**

**Step 1: Find the general position function**

Integrate the velocity function with respect to $t$:

$$s(t) = \int 2\pi \sin(\pi t) \, dt$$

Using our antiderivative work from Part (a), we include the constant $C$:

$$s(t) = -2 \cos(\pi t) + C$$

**Step 2: Solve for the initial constant $C$**

We are told that $s(0) = 0$. Plug $t = 0$ into our function and set the entire equation equal to $0$:

$$0 = -2 \cos(\pi \cdot 0) + C$$

$$0 = -2 \cos(0) + C$$

Since $\cos(0) = 1$:

$$0 = -2(1) + C$$

$$0 = -2 + C$$

$$C = 2$$

**Step 3: Write the final position formula**

Substitute $C = 2$ back into your general position equation:

$$s(t) = -2 \cos(\pi t) + 2$$

For standard formatting, this is typically written with the positive constant first:

$$s(t) = 2 - 2 \cos(\pi t)$$

### **Final Answer for (b)**

The position of the hiker for any time $t \ge 0$ is **$s(t) = 2 - 2 \cos(\pi t)$** (in miles).