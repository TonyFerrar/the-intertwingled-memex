### Key Concepts & Setup

- **Hooke's Law:** The force $F(x)$ required to compress or stretch a spring by a distance $x$ from its equilibrium position is given by:
    
    $$F(x) = kx$$
    
    where $k$ is the spring constant.
    
- **Work Done:** The work $W$ done in moving an object from position $a$ to position $b$ is the integral of the force function:
    
    $$W = \int_{a}^{b} F(x) \, dx = \int_{a}^{b} kx \, dx$$
    

To keep track of directions, we will define:

- Equilibrium position as $x = 0$
    
- Stretching as a positive displacement ($x > 0$)
    
- Compression as a negative displacement ($x < 0$)
    

### (a) Find the spring constant $k$

1. **Identify the given values:** * A force of $-30\text{ N}$ is applied.
    
    - The spring is compressed by $0.5\text{ m}$, meaning the displacement is $x = -0.5\text{ m}$.
        
2. **Substitute into Hooke's Law:**
    
    $$-30 = k \cdot (-0.5)$$
    
3. **Solve for $k$:**
    
    $$k = \frac{-30}{-0.5} = 60\text{ N/m}$$
    

### (b) How much work is required to stretch the spring $0.2\text{ m}$ from its equilibrium position?

1. **Set up the boundaries:** * Starts at equilibrium ($a = 0$)
    
    - Ends at a stretch of $0.2\text{ m}$ ($b = 0.2$)
        
2. **Set up and evaluate the work integral:**
    
    $$W = \int_{0}^{0.2} 60x \, dx$$
    
    $$W = \left[ 30x^2 \right]_{0}^{0.2}$$
    
    $$W = 30(0.2)^2 - 30(0)^2$$
    
    $$W = 30(0.04) = 1.2\text{ J}$$
    

**Answer:** **$1.2\text{ J}$** of work is required.

### (c) How much work is required to compress the spring $0.5\text{ m}$ from its equilibrium position?

1. **Set up the boundaries:**
    
    - Starts at equilibrium ($a = 0$)
        
    - Ends at a compression of $0.5\text{ m}$ ($b = -0.5$)
        
2. **Set up and evaluate the work integral:**
    
    $$W = \int_{0}^{-0.5} 60x \, dx$$
    
    $$W = \left[ 30x^2 \right]_{0}^{-0.5}$$
    
    $$W = 30(-0.5)^2 - 0$$
    
    $$W = 30(0.25) = 7.5\text{ J}$$
    

**Answer:** **$7.5\text{ J}$** of work is required.

### (d) How much additional work is required to compress the spring $0.2\text{ m}$ if it has already been stretched $0.4\text{ m}$ from its equilibrium position?

1. **Set up the boundaries:**
    
    - Initial position: Stretched $0.4\text{ m}$ ($a = 0.4$)
        
    - Final position: Compressed $0.2\text{ m}$ ($b = -0.2$)
        
2. **Set up and evaluate the work integral:**
    
    $$W = \int_{0.4}^{-0.2} 60x \, dx$$
    
    $$W = \left[ 30x^2 \right]_{0.4}^{-0.2}$$
    
    $$W = 30(-0.2)^2 - 30(0.4)^2$$
    
    $$W = 30(0.04) - 30(0.16)$$
    
    $$W = 1.2 - 4.8 = -3.6\text{ J}$$
    

#### Understanding the Answer:

- **Net Work (Calculus perspective):** The total direct work is **$-3.6\text{ J}$**. The negative sign means that as the spring transitions from being highly stretched ($0.4\text{ m}$) back toward equilibrium, it releases more stored energy than it takes to push it into the final compression zone (from $0$ to $-0.2\text{ m}$).
    
- **If looking purely at the compression phase:** Pushing the spring from equilibrium to a compression of $0.2\text{ m}$ requires **$+1.2\text{ J}$** of work (as computed by $\int_{0}^{-0.2} 60x \, dx$).