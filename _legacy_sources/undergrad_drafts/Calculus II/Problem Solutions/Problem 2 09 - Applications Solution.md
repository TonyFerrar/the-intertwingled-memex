### Key Concepts & Setup

When lifting a hanging object like a chain, the force required changes continuously. As you pull the chain up, less and less of it hangs down, meaning the remaining weight decreases. Because the force is variable, we must use calculus to find the total work.

- **Work Formula:** $W = \int_{a}^{b} F(x) \, dx$ or $W = \int_{a}^{b} \text{distance} \cdot dF$
    
- **Linear Density ($\rho$):** $2\text{ kg/m}$
    
- **Acceleration due to gravity ($g$):** $9.8\text{ m/s}^2$ (we will also provide the answer in terms of $g$ if your course prefers it).
    

There are two common ways to set up this problem in Calculus II. Both give the exact same answer.

### Method 1: Analyzing the Hanging Weight (Variable Force)

Imagine you are pulling the chain straight up onto a platform. Let $x$ represent the length of the chain that has **already been pulled up** (from $x = 0$ to $x = 2\text{ m}$).

1. **Find the length of the chain still hanging:**
    
    $$\text{Hanging length} = 2 - x$$
    
2. **Find the force (weight) of the remaining hanging chain:**
    
    $$\text{Force} = \text{mass} \cdot g = (\text{density} \cdot \text{length}) \cdot g$$
    
    $$F(x) = 2 \cdot (2 - x) \cdot g = 2g(2 - x)$$
    
3. **Set up the work integral from $x = 0$ to $x = 2$:**
    
    $$W = \int_{0}^{2} 2g(2 - x) \, dx$$
    
4. **Evaluate the integral:**
    
    $$W = 2g \int_{0}^{2} (2 - x) \, dx$$
    
    $$W = 2g \left[ 2x - \frac{x^2}{2} \right]_{0}^{2}$$
    
    $$W = 2g \left[ \left(2(2) - \frac{2^2}{2}\right) - (0) \right]$$
    
    $$W = 2g [ 4 - 2 ] = 2g(2) = 4g$$
    

### Method 2: Slicing the Chain (Riemann Sum approach)

Alternatively, imagine the chain hanging down from a fixed point. Let $y$ be the distance of a tiny segment of the chain from the top platform (from $y = 0$ at the top to $y = 2\text{ m}$ at the bottom).

1. **Find the weight of a tiny slice of the chain ($dy$):**
    
    $$dF = \text{density} \cdot g \cdot dy = 2g \, dy$$
    
2. **Determine how far that single slice must be lifted:**
    
    A slice located at a distance $y$ below the platform must be pulled up exactly a distance of $y$.
    
3. **Set up the work integral for all slices from $y = 0$ to $y = 2$:**
    
    $$W = \int_{0}^{2} y \cdot (2g \, dy) = \int_{0}^{2} 2gy \, dy$$
    
4. **Evaluate the integral:**
    
    $$W = \left[ gy^2 \right]_{0}^{2}$$
    
    $$W = g(2)^2 - g(0)^2 = 4g$$
    

### Final Calculation

Now, substitute the value of gravity ($g = 9.8\text{ m/s}^2$):

$$W = 4 \cdot 9.8 = 39.2\text{ J}$$

**Answer:** The total work required to pull the chain is **$4g\text{ J}$** or **$39.2\text{ Joules}$**.