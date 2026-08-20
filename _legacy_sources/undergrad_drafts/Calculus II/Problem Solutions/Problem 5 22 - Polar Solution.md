Find the slope of the tangent line $\frac{dy}{dx}$ to the cardioid $r = 1 + \sin\theta$ at the point where $\theta = 0$.

#### **Solution:**

- **Recall the derivative formula in polar coordinates:**
    
    $$\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$$
    
- **Calculate the components for $r = 1+\sin\theta$:**
    
    - $\frac{dr}{d\theta} = \cos\theta$
        
    - At $\theta = 0$:
        
        - $r = 1 + \sin(0) = 1$
            
        - $\frac{dr}{d\theta} = \cos(0) = 1$
            
- **Substitute the values at $\theta = 0$ into the formula:**
    
    $$\frac{dy}{dx} = \frac{(1)\sin(0) + (1)\cos(0)}{(1)\cos(0) - (1)\sin(0)} = \frac{0 + 1}{1 - 0} = 1$$
    
- **Alternative algebraic simplification (from the notes):**
    
    $$\frac{dy}{dx} = \frac{\cos\theta(1+2\sin\theta)}{(1+\sin\theta)(1-2\sin\theta)}$$
    
    $$\text{At } \theta = 0: \quad m = \frac{\cos(0)(1+2\sin(0))}{(1+\sin(0))(1-2\sin(0))} = \frac{1(1)}{1(1)} = 1$$
    
- **Answer:** The slope of the tangent line at $\theta = 0$ is **$1$**.
    